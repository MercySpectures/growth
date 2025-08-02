# HappinessPlan - Travel & Tours Website

A modern, responsive React-based travel and tour agency website that offers curated travel experiences, tour packages, and travel planning services.

## 🚀 Features

- **Modern Design**: Clean, responsive design with beautiful animations and transitions
- **Travel-Focused Content**: Curated tours, travel packages, and destination guides
- **Interactive Components**: Paginated tour listings, category filters, and FAQ sections
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Travel Categories**: Outdoor adventures, city escapes, luxury escapes, and travel gear
- **Contact & Booking**: Contact forms and tour booking functionality

## 🛠️ Technology Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.7.1
- **Styling**: SCSS/Sass
- **Build Tool**: Create React App
- **Testing**: React Testing Library

## 📁 Project Structure

```
src/
├── components/
│   ├── About.js              # About page component
│   ├── Blog.js               # Blog page with travel articles
│   ├── CategorySection.js    # Travel categories with interactive tabs
│   ├── Contact.js            # Contact form and company details
│   ├── FAQ.js                # Frequently asked questions
│   ├── Footer.js             # Site footer with social links
│   ├── Header.js             # Navigation header
│   ├── Hero.js               # Landing page hero section
│   ├── QualitySection.js     # Quality assurance section
│   ├── Services.js           # Services page
│   ├── TourPackages.js       # Featured tours with pagination
│   ├── TravelCollection.js   # Travel video collection
│   └── TravelPeople.js       # "Journeys for the People" section
├── assets/                   # Images and static assets
└── App.js                    # Main application component
```

## 🎯 Key Components

### Hero Section
- Eye-catching landing page with travel-focused messaging
- Call-to-action buttons for tour exploration
- Travel destination image gallery

### Tour Packages
- Paginated display of featured tours
- Interactive tour cards with pricing
- Categories include: Pet-friendly escapes, mountain trekking, cultural tours, beach retreats, desert safaris, wellness getaways, city escapes, backpacking trips, and island cruises

### Category Section
- Interactive tabs for different travel categories
- Expandable cards with detailed descriptions
- Categories: Outdoor Adventures, City Escapes, Travel Gear, Luxury Escapes

### Travel Collection
- Grid layout showcasing travel videos and webinars
- Destination spotlights and cultural insights
- Adventure highlights and travel tips

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd happinessPlan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Features

- **Modern Typography**: Poppins font family for clean, readable text
- **Responsive Grid**: Flexible layouts that adapt to different screen sizes
- **Smooth Animations**: Hover effects and transitions for enhanced user experience
- **Travel Imagery**: High-quality travel photos throughout the site
- **Interactive Elements**: Buttons, cards, and navigation with hover states

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🗺️ Pages

1. **Home** (`/`) - Landing page with hero section, tour packages, and travel categories
2. **About** (`/about`) - Company information and mission
3. **Services** (`/services`) - Travel planning services offered
4. **Contact** (`/contact`) - Contact form and company details
5. **Blog** (`/blog`) - Travel articles and tips

## 🎯 Travel Categories

### Outdoor Adventures
- Pet-friendly trips
- Mountain treks
- Desert safaris

### City Escapes
- Urban retreats
- Weekend getaways
- Cultural tours

### Travel Gear
- Smart luggage
- Self-cleaning bottles
- Hiking backpacks

### Luxury Escapes
- Beach resorts
- Wellness retreats
- Romantic getaways

## 🔧 Customization

### Adding New Tours
Edit the `tourData` array in `src/components/TourPackages.js` to add new tour packages.

### Modifying Categories
Update the `categories` and `allCards` objects in `src/components/CategorySection.js` to modify travel categories.

### Styling Changes
All styles are written in SCSS and can be found in the corresponding `.scss` files for each component.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@happinessplan.com
- Phone: +1 234 567 8901

---

**HappinessPlan** - Making every journey unforgettable! ✈️🌍
