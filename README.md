# AI Travel Planner

A modern AI-powered travel planning application built with Node.js, Express, and EJS. This application helps users create detailed travel plans based on their budget, duration, and destination using AI assistance.
## Live Demo
For preview click here:https://ai-travel-plannerr.vercel.app/
## Project Screenshots
<img width="1920" height="882" alt="image" src="https://github.com/user-attachments/assets/31dd33d0-bcf6-4898-a731-0f05bfa80168" />
<img width="1322" height="848" alt="image" src="https://github.com/user-attachments/assets/424d9d64-bb0b-4003-8cd2-df514fcbcc00" />
<img width="797" height="842" alt="image" src="https://github.com/user-attachments/assets/21bf48c1-051d-41f5-81e8-333f97de2cf9" />
<img width="1892" height="868" alt="image" src="https://github.com/user-attachments/assets/c966bc6c-0adc-4122-a827-90476aaaca67" />


## Features

- 🎯 **AI-Powered Planning**: Generate detailed travel itineraries using advanced AI
- 🖼️ **Destination Images**: Beautiful AI-generated images for each destination
- 💰 **Budget Management**: Plan trips within your specified budget
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast & Efficient**: Quick response times with modern UI/UX

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates)
- **Styling**: CSS3 with modern design patterns
- **AI Integration**: External AI APIs for travel planning and image generation
- **Icons**: Font Awesome

## Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd AI-Travel-Planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **For development with auto-restart**
   ```bash
   npm run dev
   ```

5. **Open your browser and visit**
   ```
   http://localhost:3000
   ```

## Project Structure

```
AI-Travel-Planner/
├── app.js              # Main Express server file
├── package.json        # Dependencies and scripts
├── config.js           # Configuration and API keys
├── views/
│   └── index.ejs       # Main EJS template
├── public/             # Static assets (if any)
└── README.md           # This file
```

## Usage

1. **Enter Your Details**:
   - Budget in INR
   - Number of days for your trip
   - Destination name

2. **Generate Plan**: Click the "Generate Travel Plan" button

3. **View Results**: The AI will provide:
   - Detailed daily itinerary
   - Accommodation suggestions
   - Budget breakdown
   - Beautiful destination image

4. **Plan Another Trip**: Use the "Plan Another Trip" button to start over

## API Endpoints

- `GET /` - Main application page
- `POST /generate-plan` - Generate travel plan with AI

## Configuration

The application uses the following configuration in `config.js`:
- Port number (default: 3000)
- API keys for AI services

## Dependencies

### Production Dependencies
- `express`: Web framework
- `ejs`: Template engine
- `body-parser`: Request body parsing
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `axios`: HTTP client

### Development Dependencies
- `nodemon`: Auto-restart server during development

## Features in Detail

### AI Travel Planning
- Generates comprehensive travel itineraries
- Includes daily activities and recommendations
- Provides accommodation suggestions
- Offers budget breakdown and tips

### Image Generation
- AI-generated destination images
- High-quality, professional photos
- Automatically displayed with travel plans

### User Experience
- Modern, responsive design
- Loading animations and feedback
- Error handling and validation
- Smooth scrolling and transitions

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue in the repository.

---

