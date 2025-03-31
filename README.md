# Resposive WebPage

This project is a multi-page website demonstrating responsive design, modern CSS techniques, and animations.
 Group Members
-  Mwemya Guardian

## Page Descriptions

- Index Page: 
  The homepage features a navigation bar styled with Flexbox, a main content area with a subtle box-shadow on headings, and a footer. The layout and typography provide a clean introduction to the site.

- Services Page: 
  This page uses a CSS Grid layout to display service sections in a 2x2 grid (which can be easily adjusted for a 4x4 grid). Each service section includes an image and text. Hover effects change the box-shadow and text color to enhance interactivity.

- Contact Page:
  Contains a form designed with CSS Grid to align input fields in a structured layout. The form is fully responsive with different grid column settings for various screen sizes. It also includes a keyframe-based button border animation that runs continuously with a slight delay.

## Summary of Features Used

CSS Selectors & Global Styles
- Universal Selector:  
  `* { box-sizing: border-box; }` ensures that padding and border are included in the element's total width and height.
- Element and Class Selectors:  
  Styling for basic elements such as `body`, `nav`, `footer`, and custom classes like `.nav-items`, `.grid-container`, and `.form-container` to structure layout and typography.
- Pseudo-classes:  
  Use of `:hover`, `:active`, and `:focus` to enhance interactivity across buttons, links, and form elements.

Flexbox & Grid Layout
- Flexbox:  
  - Used in the navigation bar (`nav`) to align items horizontally.
  - Also applied to the footer and other components (e.g., `.flex-container`) to center and align elements.
- CSS Grid:
  - Applied on the services page via `.grid-container` to create a 2x2 layout that adapts responsively.
  - The contact form uses Grid to manage input field placement, with grid-template columns adjusted via media queries.

Media Queries
- Responsive Design:  
  Multiple breakpoints (`max-width: 1024px`, `768px`, `480px`) are used to change:
  - Background colors of the body.
  - The number and size of columns in grid layouts.
  - Font sizes and spacing in navigation and form elements.
  
  For example, on screens with a max-width of 480px, the grid layout adjusts to a single column (`grid-template-columns: repeat(1, 1fr);`), ensuring the content remains accessible and readable on smaller devices.

Animations
- @keyframes:
  The `button-animation` keyframe is defined to animate border colors of form elements. Each step sequentially animates different borders, creating a dynamic visual effect.
- Animation Properties:  
  The form uses `animation` and `animation-delay` properties to trigger and control the timing of the border animation.