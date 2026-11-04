# Android Club – Official Showcase Website

> **Turn Ideas Into Intelligent Experiences.**  
> A modern, responsive developer showcase web platform for a college Android Development Club.

---

## 📱 Project Overview

The **Android Club Showcase Website** is an interactive web experience engineered for university technology chapters and developer clubs. Designed with a dark developer aesthetic, it highlights club activities, technical tracks, student-built mobile applications, workshops, hackathons, and leadership profiles to inspire student participation.

### Key Highlights
- **Developer Theme**: Dark canvas (`#08090B`) paired with vibrant orange (`#FF8A24`) and subtle electric green (`#3DDC84`).
- **Interactive Developer Console**: Live Kotlin Jetpack Compose code sandbox, simulated state mutation, and edge AI inference overview.
- **Design System**: Dark canvas (`#0A0A0A`), secondary surfaces (`#111111`, `#151515`), neon green (`#00FF87`), electric blue (`#00E5FF`), and purple (`#A855F7`) accents.
- **Glassmorphism & Glow**: Glassmorphic panels, glowing card borders (`glow-card`), and subtle tech grid backgrounds.
- **Realistic Mobile UI Mockups**: Native Android phone previews for student prototypes (Smart Expense Tracker, Campus Connect, EcoSort, HealthMate).
- **Interactive Modals**: In-depth architecture breakdowns, workshop seat reservation simulator, and membership application onboarding.
- **Client-Side Form Validation**: Contact and registration workflows with instant verification feedback.
- **Fully Responsive**: Adapts seamlessly across mobile, tablet, laptop, and ultra-wide desktop viewports.

---

## 🚀 Key Features by Section

| Section | Description |
| :--- | :--- |
| **Sticky Navigation** | Glassmorphic navbar with custom glowing Android logo, exact links (Home, About, Events, Projects, Team, Contact), active ScrollSpy, and mobile drawer. |
| **Hero Section** | *"BUILD. INNOVATE. ANDROID."* with electric gradient highlights, interactive Kotlin Compose sandbox, floating tech tags, and Join Us / Explore Projects buttons. |
| **Statistics Section** | Four distinct metrics cards: **Members**, **Projects**, **Events**, and **Workshops** with glowing card borders and tabular figures. |
| **About Section** | Two-column layout with club mission, 4 pillars, interactive focus schematic, and technology domain badges. |
| **Development Domains** | 6 technical tracks with expandable learning roadmaps and tool badges. |
| **Project Showcase** | Modern project cards with live demo & GitHub links, clear category tags, and SVG/CSS Android phone frames. |
| **Events & Workshops** | Responsive three-column layout with event images, dates, speaker tags, and registration triggers. |
| **Team Showcase** | Consistent profile cards with glowing developer avatar rings, designations, and social icons. |
| **Join Our Community** | High-impact call-to-action with member perks grid and modal application form. |
| **Contact Section** | University tech hub details, social channels, and client-side validated contact inquiry form. |
| **Footer** | Club description, quick links, social channels, contact info, dynamic copyright, and back-to-top button. |

---

## 🛠️ Technology Stack

- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Inter, Plus Jakarta Sans, JetBrains Mono

---

## 📂 Folder Structure

```text
android-club-showcase/
├── public/
├── src/
│   ├── components/
│   │   ├── modals/
│   │   │   ├── EventDetailModal.tsx     # Workshop agenda & registration modal
│   │   │   ├── JoinClubModal.tsx        # Member recruitment application form
│   │   │   └── ProjectDetailModal.tsx   # Project architecture & demo modal
│   │   ├── About.tsx                    # 4 core club pillars & mission
│   │   ├── AndroidLogo.tsx              # Custom SVG Android robot logo
│   │   ├── Contact.tsx                  # Campus contact cards & validated form
│   │   ├── Domains.tsx                  # 6 technical learning tracks & roadmaps
│   │   ├── Events.tsx                   # Workshops, hackathons, & calendars
│   │   ├── Footer.tsx                   # Brand footer, links, & back-to-top
│   │   ├── Hero.tsx                     # Hero banner & interactive sandbox
│   │   ├── JoinCommunity.tsx            # Call-to-action & membership perks
│   │   ├── Navbar.tsx                   # Sticky navigation & mobile drawer
│   │   ├── PhoneMockup.tsx              # Interactive mobile UI mockups
│   │   ├── Projects.tsx                 # Project gallery with category filter
│   │   └── Team.tsx                     # Core student leadership profiles
│   ├── data/
│   │   └── clubData.ts                  # Centralized sample club data & content
│   ├── types/
│   │   └── index.ts                     # TypeScript interfaces
│   ├── App.tsx                          # Root application orchestrator
│   ├── index.css                        # Tailwind v4 theme & custom utilities
│   └── main.tsx                         # React 19 entry point
├── index.html                           # SEO meta tags, favicon & fonts
├── metadata.json                        # AI Studio project configuration
├── package.json                         # Dependencies & scripts
├── tsconfig.json                        # Strict TypeScript configuration
└── vite.config.ts                       # Vite configuration
```

---

## 💻 Local Installation & Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/android-club-showcase.git
   cd android-club-showcase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization Guide

All club data, member profiles, projects, and contact channels are centralized in `src/data/clubData.ts`.

### 1. Update Club Name & Campus Information
Edit `CLUB_META` in `src/data/clubData.ts`:
```typescript
export const CLUB_META = {
  collegeName: "Your College / University Name",
  clubName: "ANDROID CLUB",
  email: "your.club@college.edu",
  instagram: "https://instagram.com/yourclub",
  linkedin: "https://linkedin.com/company/yourclub",
  github: "https://github.com/yourclub",
  location: "Room 101, Science & Tech Block",
  meetingTimes: "Every Wednesday at 5:00 PM",
};
```

### 2. Update Student Projects
Modify the `PROJECTS` array in `src/data/clubData.ts` to add or update apps built by your members.

### 3. Add Upcoming Events & Workshops
Update the `EVENTS` array in `src/data/clubData.ts` with your actual workshop dates, venue, and topics.

### 4. Update Leadership Team
Replace placeholder names in `TEAM_MEMBERS` in `src/data/clubData.ts` with your elected club leads.

---

## 📸 Screenshots

*(Place screenshots of the desktop view and mobile drawer here)*

- `[Screenshot: Desktop Hero & Interactive Compose Sandbox]`
- `[Screenshot: Mobile UI Project Showcase with Phone Mockups]`
- `[Screenshot: Technical Domains & Learning Roadmaps]`
- `[Screenshot: Workshop Calendar & Registration Modal]`

---

## 🚢 Deployment

### Deploy to Vercel / Netlify
1. Push your repository to GitHub.
2. Link your repo in Vercel or Netlify.
3. Build Command: `npm run build`
4. Output Directory: `dist`

---

## 📄 License

This project is open-source under the Apache-2.0 License. Built with ❤️ by the Android Club student community.
