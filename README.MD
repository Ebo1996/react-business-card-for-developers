# React Business Card Team Showcase

A responsive React app to display business cards for a team of 6 people, with filter functionality and interactive contact buttons. Styled with CSS and Font Awesome icons.

## Features

- Team member cards with avatar, contact info, skills, and social links
- Filter by role: Development, Design, Management, or show All
- Interactive "Contact" button with status feedback
- Responsive layout using Flexbox
- Font Awesome social icons

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-business-card.git
   cd react-business-card/developers-business-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
react-business-card/
├── developers-business-card/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Components/
│   │   │   └── Card/
│   │   │       └── Card.jsx
│   │   └── App.css
│   ├── public/
│   │   └── index.html
│   └── style.css
├── index.html
├── script.js
```

## Customization

- Edit `src/App.jsx` to change team member data.
- Update styles in `style.css` or `App.css`.
- Add or modify social icons in `Card.jsx`.
