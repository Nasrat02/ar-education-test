# Educational AR Learning Website

An interactive augmented reality platform for learning with 3D visualizations using AR.js and A-Frame.

## Features

- 🌍 **Solar System** - Interactive 3D model of planets orbiting the sun
- 💓 **Human Anatomy** - 3D heart visualization
- 📐 **Geometry** - 3D shapes (pyramid, cube, cylinder)
- 🧪 **Chemistry** - Molecular structures (water molecule)

## Technologies Used

- **AR.js** - Augmented Reality framework
- **A-Frame** - Web-based 3D engine
- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript** - Interactivity

## How to Use

1. **Clone or download** this repository
2. **Open `index.html`** in a modern web browser (Chrome, Firefox, Safari)
3. **Allow camera access** when prompted
4. **Download the Hiro marker** from [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
5. **Print the marker** or display it on another screen
6. **Point your camera** at the marker to see the 3D AR content
7. **Click lesson buttons** to switch between different subjects

## Browser Compatibility

- Chrome/Chromium (Desktop & Mobile) ✅
- Firefox ✅
- Safari (iOS 14.3+) ✅
- Edge ✅

## Getting the Hiro Marker

The Hiro marker is the QR-like image needed to trigger AR content. Download it from:
- [AR.js Official Marker](https://ar-js-org.github.io/AR.js-Docs/marker-training/)

Or use any custom marker image.

## Project Structure

```
educational-ar-website/
├── index.html      # Main AR scenes
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Customization

### Add New Lessons

1. Add a new `<a-scene>` in `index.html` with an ID like `lesson5`
2. Add AR content inside the marker
3. Add a new button in the navigation
4. Update the `showLesson()` function if needed

### Modify 3D Objects

- Change colors using `material="color: #HEX"`
- Adjust size with `radius`, `width`, `height` attributes
- Add animations using A-Frame's animation component

## Deployment

Deploy to free hosting services:
- **Netlify** - Drag & drop deployment
- **Vercel** - Git-based deployment
- **GitHub Pages** - Static hosting
- **Firebase Hosting** - Google's solution

## Resources

- [A-Frame Documentation](https://aframe.io/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Three.js Manual](https://threejs.org/manual/)

## License

MIT License - Feel free to use and modify for your projects!

## Support

For issues or questions, check the official documentation:
- A-Frame: https://aframe.io/
- AR.js: https://ar-js-org.github.io/AR.js-Docs/