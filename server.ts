import express from 'express';
import path from 'path';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini lazily on first API request
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Mock database for submitted quotes
interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  addressOrZip: string;
  serviceType: string;
  preferredDate: string;
  itemsDescription: string;
  estimatedVolume?: string;
  estimatedPrice?: string;
  createdAt: string;
}

const submittedQuotes: QuoteRequest[] = [];

// API: Get Instant AI Junk Estimate
app.post('/api/estimate', async (req, res) => {
  try {
    const { itemsDescription, imageBase64, mimeType } = req.body;

    if (!itemsDescription && !imageBase64) {
      return res.status(400).json({ error: 'Please provide a description or upload a photo of your junk.' });
    }

    const ai = getGeminiClient();
    
    const parts: any[] = [];
    if (imageBase64) {
      parts.push({
        inlineData: {
          data: imageBase64.replace(/^data:image\/\w+;base64,/, ''),
          mimeType: mimeType || 'image/jpeg',
        },
      });
    }
    
    const promptText = `You are an expert junk removal pricing estimator for 'Cascade Junk Removal'. 
Analyze the customer's junk description and/or photo: "${itemsDescription || 'See attached photo'}".

Standard pricing structure:
- Minimum Pickup (single small item like a microwave or chair): $99 - $139
- Small Load (approx. 3-4 cubic yards or sofa + armchair): $189 - $239
- Medium Load (approx. 7-8 cubic yards or bedroom cleanout): $289 - $349
- Large Load (approx. 11-12 cubic yards or multi-room cleanout): $389 - $449
- Extra Large Load (approx. 15-16 cubic yards or garage cleanout): $489 - $589
- Heavy construction debris / concrete / shingles: Add 20% weight surcharge.

Provide a realistic volume estimate, price range, breakdown of items detected, and our eco-friendly disposal plan (donations/recycling). Return strictly JSON matching the requested schema.`;

    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: { parts },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            loadSizeTier: { type: Type.STRING, description: "e.g. 'Medium Load' or 'Single Item / Min Pickup'" },
            estimatedCubicYards: { type: Type.STRING, description: "e.g. '7-8 cubic yards'" },
            priceRange: { type: Type.STRING, description: "e.g. '$289 - $349'" },
            detectedItemsBreakdown: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of key items detected or inferred"
            },
            disposalStrategy: {
              type: Type.STRING,
              description: "Brief summary of how items will be recycled or donated to charities"
            },
            timeEstimate: { type: Type.STRING, description: "e.g. '30 - 45 mins onsite'" },
            estimatorNotes: { type: Type.STRING, description: "Friendly advice or what is included (labor, hauling, dump fees)" }
          },
          required: ['loadSizeTier', 'estimatedCubicYards', 'priceRange', 'detectedItemsBreakdown', 'disposalStrategy', 'timeEstimate', 'estimatorNotes'],
        },
      },
    });

    const resultJson = JSON.parse(response.text || '{}');
    return res.json(resultJson);
  } catch (error: any) {
    console.error('Error generating AI estimate:', error);
    // Return a fallback estimate if API key is missing or rate limited so the user always gets a smooth experience
    return res.json({
      loadSizeTier: 'Medium Load Estimate',
      estimatedCubicYards: '6-8 cubic yards',
      priceRange: '$279 - $339',
      detectedItemsBreakdown: ['Assorted household junk', 'Furniture items', 'General boxes/bags'],
      disposalStrategy: 'Usable furniture sorted for local charity donation; metals and cardboard diverted to recycling facilities.',
      timeEstimate: '30 - 45 mins onsite',
      estimatorNotes: 'Includes two uniformed haulers, lifting, loading, cleanup, and all disposal fees. Free guaranteed onsite quote prior to loading.',
      isFallback: true
    });
  }
});

// API: Submit Booking / Quote Request
app.post('/api/quote', (req, res) => {
  const { name, phone, email, addressOrZip, serviceType, preferredDate, itemsDescription, estimatedVolume, estimatedPrice } = req.body;

  if (!name || !phone || !addressOrZip) {
    return res.status(400).json({ error: 'Name, phone, and zip code are required.' });
  }

  const quoteId = 'FH-' + Math.floor(100000 + Math.random() * 900000);
  const newQuote: QuoteRequest = {
    id: quoteId,
    name,
    phone,
    email: email || 'No email provided',
    addressOrZip,
    serviceType: serviceType || 'General Junk Removal',
    preferredDate: preferredDate || 'As soon as possible',
    itemsDescription: itemsDescription || 'General inquiry',
    estimatedVolume,
    estimatedPrice,
    createdAt: new Date().toISOString(),
  };

  submittedQuotes.push(newQuote);

  return res.json({
    success: true,
    quoteId,
    message: `Thank you, ${name}! Your request (${quoteId}) has been received. Our dispatch team will call ${phone} shortly to confirm your free estimate window.`,
  });
});

// API: Get submitted quotes (for demo admin review if desired)
app.get('/api/quotes', (req, res) => {
  res.json(submittedQuotes);
});

// Setup Vite / Static Asset Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
