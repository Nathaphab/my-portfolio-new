// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "Responsive portfolio built with React + Vite + Tailwind. Includes dark mode, animated sections, and GitHub Pages deploy.",
    tech: ["React", "Vite", "TailwindCSS"],
    category: "web",
    // รูปเป็นลิงก์ URL (Unsplash)
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    link: "https://your-portfolio-site.example.com",
    repo: "https://github.com/yourname/portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Simple weather forecast app using OpenWeather API with geolocation and hourly forecasts.",
    tech: ["React", "Vite", "OpenWeather"],
    category: "web",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80",
    link: "https://nathaphab.github.io/my-weather-app/",
    repo: "https://nathaphab.github.io/my-weather-app/",
  },
  {
    id: 3,
    title: "Mini E-commerce",
    description:
      "Small storefront with product listing, filters, cart state, and checkout mock.",
    tech: ["React", "Context API", "Stripe (mock)"],
    category: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    link: "https://warintornkhrueainta.github.io/mini-ecommerce/",
    repo: "https://warintornkhrueainta.github.io/mini-ecommerce/",
  },
];
