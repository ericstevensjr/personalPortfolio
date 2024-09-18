# Eric Stevens' Portfolio

This project is a professional personal portfolio built with React and Tailwind CSS, following industry-standard best practices.

## Table of Contents

- [Setup](#setup)
- [Project Structure](#project-structure)
- [Features](#features)
- [Content Sections](#content-sections)
- [Deployment](#deployment)

## Setup

### Prerequisites

1. **Node.js**: Install Node.js (version **20.17.0** or higher) from the [official website](https://nodejs.org/en/download/). You can use Node Version Manager (nvm) to install and manage Node.js versions:

   ```bash
   nvm install 20.17.0
   nvm use 20.17.0
   ```

2. **Git**: Install Git from [Git Downloads](https://git-scm.com/downloads).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ericstevensjr/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Project Structure

The project is structured as follows:

```
my-portfolio/
├── public/
│   ├── index.html       # HTML template with metadata and SEO optimizations
│   └── favicon.ico      # Favicon
├── src/
│   ├── components/
│   │   ├── AboutMe.js       # About Me section component
│   │   ├── Contact.js       # Contact section component
│   │   ├── Footer.js        # Footer component
│   │   ├── HeroSection.js   # Hero section component
│   │   ├── Navbar.js        # Navigation bar component
│   │   ├── Projects.js      # Projects section component
│   │   └── ThemeToggle.js   # Dark mode toggle component
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   ├── index.css        # Tailwind CSS styling
│   └── assets/          # Images and other assets
├── .nvmrc               # Node.js version specification
├── .gitignore
├── package.json
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration
```

### Components

- **Navbar**: Navigation bar with links to different sections and a dark mode toggle.
- **Footer**: Footer displayed on all pages with contact information and social media links.
- **HeroSection**: Landing section with a welcome message and a call-to-action button.
- **AboutMe**: Detailed bio about Eric Stevens and his background in software engineering.
- **Projects**: Highlights notable projects with descriptions, technologies used, and links.
- **Contact**: Contact form allowing visitors to send messages directly from the site.
- **ThemeToggle**: Enables users to switch between light and dark modes.

## Features

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Interactive Elements**: Smooth scrolling, hover effects, and animations.
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility.
- **SEO Optimized**: Meta tags and descriptions for improved search engine visibility.
- **Performance Optimizations**: Lazy loading of images and code splitting.

## Content Sections

- **Home (HeroSection)**: Welcome message, introduction, and a call-to-action button.
- **About Me**: Detailed bio, skills, and background information.
- **Projects**: Showcase of selected projects with images, descriptions, technologies, and links to live demos and GitHub repositories.
- **Contact**: Contact form and information for collaboration or inquiries.

## Deployment

The project is deployed using [Netlify](https://www.netlify.com/).

### Deployment Steps

1. **Create a Netlify Account**: Sign up at [Netlify](https://app.netlify.com/signup).

2. **Link GitHub Repository**:

   - In Netlify, click on **"New site from Git"**.
   - Select **GitHub** and authorize Netlify to access your repositories.
   - Choose the `my-portfolio` repository.

3. **Configure Build Settings**:

   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
   - **Environment Variables**: Set any required variables.

4. **Deploy the Site**:

   - Netlify will automatically build and deploy your site.
   - Automatic deployments occur on pushes to the `main` branch.

5. **Set Up Custom Domain**:

   - In Netlify, go to **"Domain settings"**.
   - Add your custom domain `ericstevensjr.com`.
   - Update your DNS records to point to Netlify's servers.
   - Enable HTTPS via Netlify's free SSL certificate.

The live version of the portfolio can be accessed at: [ericstevensjr.com](https://ericstevensjr.com)