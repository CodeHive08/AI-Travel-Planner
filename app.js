const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/generate-plan', async (req, res) => {
    try {
        const { budget, days, location } = req.body;
        
        if (!budget || !days || !location) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const prompt = `Create a detailed travel plan for ${days} days in ${location} with a budget of ₹${budget}. Include daily activities, accommodation suggestions, and budget breakdown. Format the response in a clear, structured way.`;

        // Using the same API as your existing project
        const response = await fetch('https://api.a0.dev/ai/llm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
        });

        const data = await response.json();
        
        // Generate image for the destination
        const imagePrompt = `Beautiful scenic view of ${location}, travel destination, high quality, professional photo`;
        const imageResponse = await fetch(
            `https://api.a0.dev/assets/image?text=${encodeURIComponent(imagePrompt)}&aspect=16:9`
        );

        let imageUrl = null;
        if (imageResponse.ok) {
            imageUrl = imageResponse.url;
        }

        res.json({
            success: true,
            travelPlan: data.completion,
            imageUrl: imageUrl,
            budget: budget,
            days: days,
            location: location
        });

    } catch (error) {
        console.error('Error generating travel plan:', error);
        res.status(500).json({ error: 'Failed to generate travel plan' });
    }
});

app.listen(PORT, () => {
    console.log(`AI Travel Planner server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to use the application`);
});