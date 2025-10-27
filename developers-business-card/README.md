# Team Business Cards - React App

An interactive team showcase application built with React and Vite, featuring search, filtering, and dynamic card interactions with modern JavaScript functionality.

## Features

### ✨ JavaScript-Powered Features
- **Real-time Search**: Search team members by name, position, company, or skills
- **Dynamic Filtering**: Filter team members by category (All, Development, Design, Management)
- **Interactive Cards**: Click cards to expand/collapse for more information
- **State Management**: Uses React hooks (useState, useEffect, useMemo) for efficient state management
- **Animations**: Smooth fade-in animations for cards as they appear
- **Contact Integration**: One-click email contact button
- **Social Links**: Dynamic social media links that open in new tabs

### 🎨 Modern Design
- Gradient color themes for each card
- Responsive grid layout
- Hover effects and transitions
- Mobile-friendly design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── Components/
│   └── Card/
│       └── Card.jsx          # Interactive card component with hooks
├── data/
│   └── teamMembers.js        # Data source for team members
├── hooks/
│   └── useTeamMembers.js     # Custom hook for team member management
├── utils/
│   ├── index.js              # Central export for all utilities
│   ├── filterUtils.js        # Filtering and search logic
│   ├── animationUtils.js     # Animation and transition helpers
│   ├── styleUtils.js         # Dynamic style generation
│   ├── dataUtils.js          # Data manipulation utilities
│   ├── eventUtils.js         # Event handling utilities
│   └── storageUtils.js       # LocalStorage utilities
├── App.jsx                   # Main app component
├── App.css                   # Component styles
├── index.css                 # Global styles
└── main.jsx                  # App entry point
```

## Technologies

- **React 19**: Latest React with functional components
- **React Hooks**: useState, useEffect, useMemo for state management
- **Vite**: Fast build tool and dev server
- **JavaScript ES6+**: Modern JavaScript features
- **Font Awesome**: Icons for UI elements

## Key JavaScript Features

1. **Search Functionality**: Real-time search using filter arrays and string matching
2. **Category Filtering**: Dynamic category buttons with active state management
3. **Card Interactions**: Expand/collapse functionality with state tracking
4. **Dynamic Styling**: Inline styles generated from data
5. **Performance Optimization**: useMemo for filtered results
6. **Animation Control**: JavaScript-controlled animations with state
7. **Event Handling**: Interactive buttons and social links with click handlers

## Adding Team Members

Edit `src/data/teamMembers.js` to add, remove, or modify team member information.

## License

MIT
