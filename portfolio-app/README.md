# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, responsive design, and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Interactive Components**: Dynamic navigation, project filtering, and contact form

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills and technologies
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
├── App.tsx            # Main app component
├── index.css          # Global styles
└── main.tsx           # App entry point
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description
   - Update social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the about text
   - Modify the statistics
   - Add your photo

3. **Skills Section** (`src/components/Skills.tsx`):
   - Update skills and technologies
   - Adjust skill levels
   - Add or remove skill categories

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project images, descriptions, and links
   - Modify technologies used

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Configure the contact form
   - Update social media links

6. **Footer** (`src/components/Footer.tsx`):
   - Update contact information
   - Modify social links

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify colors in `tailwind.config.js`
- Update the color scheme by changing the primary color
- Add custom styles in `src/index.css`

### Images

Replace placeholder images with your own:

- Add your profile photo
- Update project screenshots
- Use high-quality images for better visual appeal

## 🎨 Color Scheme

The default color scheme uses a blue primary color (`#3b82f6`). You can customize this in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... other shades
    600: '#2563eb', // Main primary color
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to Netlify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

Made with ❤️ by [Your Name]