# Danny Portfolio Website

A responsive personal portfolio website built using HTML, CSS and JavaScript. This is my first complete web development project, created during my Diploma (MSBTE). The site presents my introduction, education timeline, skills and certificates in a clean, interactive single-page layout.

Live Demo: _add your GitHub Pages link here_

Status: Version 1. The CSS design will be upgraded in the next version.

---

## Table of Contents

- Features
- Technologies Used
- Project Structure
- How the Code Works
- What I Learned
- How to Run the Project
- Future Improvements
- About Me
- Contact

---

## Features

- Animated loading screen with a progress bar
- Custom cursor with a dot and a smooth-following ring
- Dark and light theme toggle, saved in the browser using localStorage
- Typewriter effect that rotates through professional titles
- Sticky header that shrinks on scroll and highlights the active section
- Fully responsive layout for desktop, tablet and mobile
- Mobile navigation menu that slides in from the side
- Scroll reveal animations for all sections
- Animated skill bars that fill when they come into view
- Education timeline
- Certificates section with hover effects
- Contact section with details, social links and an embedded map

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic sections |
| CSS3 | Layout, themes, animations and responsive design |
| JavaScript (ES6) | Interactivity and animations |
| Boxicons | Icons |
| Google Fonts | Syne (headings) and Space Grotesk (body text) |

---

## Project Structure

```
portfolio/
|-- index.html
|-- style.css
|-- script.js
|-- images/
    |-- dr1baba.jpg
    |-- school.jpg
    |-- suc_jpg.jpg
    |-- skills.jpg
    |-- book.png
    |-- Msbte-Logo.png
```

---

## How the Code Works

### style.css

- **CSS Variables:** Colors, fonts, border radius and transitions are stored in `:root`, so the whole design can be changed from one place.
- **Theme support:** The `body.light` class overrides the variables to create the light theme.
- **Flexbox:** Used for the header, home section, buttons and contact list.
- **CSS Grid:** Used for the skills and certificates sections with `repeat(auto-fit, minmax())`, so cards adjust automatically to the screen size.
- **Animations:** `@keyframes` are used for the loader, progress bar and the pulsing timeline marker.
- **Reveal classes:** `.reveal-up`, `.reveal-left` and `.reveal-right` start hidden and become visible when JavaScript adds the `.revealed` class.
- **Frosted glass header:** Created using `backdrop-filter: blur()`.
- **Responsive design:** Media queries at 1024px, 768px and 480px.
- **Accessibility:** `prefers-reduced-motion` disables animations for users who need it, and the custom cursor is hidden on touch devices.

### script.js

| Feature | Description |
|---|---|
| Loader | Fades out the loading screen after the page loads |
| Custom cursor | Follows the mouse with smooth easing using `requestAnimationFrame` |
| Theme toggle | Switches between dark and light themes and saves the choice in `localStorage` |
| Scroll handling | Shrinks the header and highlights the active navigation link |
| Mobile menu | Opens and closes the navigation using class toggling |
| Typewriter effect | Types and deletes text using `setTimeout` |
| Scroll reveal | Uses `IntersectionObserver` to animate elements when they become visible |
| Skill bars | Sets bar width from the `data-width` attribute when visible |
| Smooth scrolling | Uses `scrollIntoView` for anchor links |

---

## What I Learned

### HTML
- Structuring a page with semantic tags such as header, section, nav and footer
- Using id, class and data attributes
- Adding fonts, icons, images and an embedded map

### CSS
- The box model, Flexbox and Grid
- CSS variables and theming
- Transitions, transforms and keyframe animations
- Pseudo-elements and hover effects
- Responsive design using media queries and `clamp()`
- Fixed and sticky positioning and z-index layering

### JavaScript
- Selecting and modifying DOM elements
- Handling events such as click, scroll, mousemove and load
- Using `setTimeout` and `requestAnimationFrame`
- Using `IntersectionObserver` for scroll-based effects
- Storing user preferences with `localStorage`

### General
- Organizing a project into separate HTML, CSS and JavaScript files
- Designing for both dark and light themes
- Publishing a project using Git and GitHub

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open the project folder:
   ```bash
   cd your-repo-name
   ```
3. Open `index.html` in a web browser, or use the Live Server extension in VS Code.

No installation or build process is required.

---

## Future Improvements

- Upgrade and refine the CSS design
- Add a Projects section with live demos
- Add a working contact form
- Rebuild the portfolio using React
- Improve performance by compressing images and using lazy loading

---

## About Me

I am a Diploma student (MSBTE, Maharashtra) learning web development. I enjoy building clean, interactive interfaces and I am working towards a career as a frontend developer.

---

## Contact

- Email: your-email@example.com
- LinkedIn: your-linkedin-link
- GitHub: your-github-link

---

Built with HTML, CSS and JavaScript during my Diploma.
