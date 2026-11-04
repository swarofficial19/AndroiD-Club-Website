import { RecruitmentConfig, TeamDefinition } from '../types/recruitment';

export const RECRUITMENT_CONFIG: RecruitmentConfig = {
  title: 'BE PART OF SOMETHING BIGGER.',
  subTitle: 'Your Skills. Your Ideas. Our Community.',
  description:
    'Join the Android Club at VIT Bhopal and become part of a passionate community of developers, designers, researchers and innovators. Explore opportunities, collaborate with talented individuals and turn your ideas into reality.',
  status: 'CLOSED', // Officially closed as deadline was 19 September 2025; interactive test mode provided
  targetBatches: ['2025 Batch (Academic Year 2025–26)', '2026 Batch'],
  deadlineDate: '2025-09-19T23:59:59',
  deadlineFormatted: '19 September 2025, 11:59 PM IST',
  officialEmail: 'androidclub@vitbhopal.ac.in',
  facultyCoordinator: {
    name: 'Dr. Adarsh Patel',
    role: 'Faculty Coordinator',
    email: 'androidclub@vitbhopal.ac.in',
  },
  studentCoordinators: [
    {
      name: 'Dhriti Mittal',
      role: 'Student Coordinator',
      phone: '+91 99757 17082',
    },
    {
      name: 'Ujjawal Patidar',
      role: 'Student Coordinator',
      phone: '+91 91719 83088',
    },
  ],
};

export const TEAMS_LIST: TeamDefinition[] = [
  // 1. Android Team
  {
    id: 'android',
    name: 'Android Team',
    category: 'Technical',
    tagline: 'Native Mobile Engineering & System Architecture',
    description:
      'The core backbone of Android Club. We build native Android applications using modern Kotlin, Jetpack Compose, Material You design guidelines, and clean architectural patterns.',
    keySkills: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Coroutines', 'MVVM / MVI', 'Room DB', 'Material 3'],
    icon: 'Smartphone',
    accentColor: '#3DDC84',
    roleQuestions: [
      {
        id: 'android_exp_level',
        label: 'What is your experience level with Android development?',
        type: 'select',
        options: [
          'Beginner (Learned fundamentals, exploring Android Studio)',
          'Intermediate (Built standalone apps with Kotlin/XML or Compose)',
          'Advanced (Production/Published apps, clean architecture, CI/CD)',
          'Enthusiastic Novice (Strong in Java/OOP, eager to master Android)',
        ],
        required: true,
        helpText: 'Select the option that best reflects your current hands-on development familiarity.',
      },
      {
        id: 'android_projects',
        label: 'Mention any Android projects, apps published on Play Store, or GitHub repositories you have created.',
        type: 'textarea',
        placeholder: 'List app names, core features, architecture patterns used, and links...',
        required: true,
        helpText: 'Include both solo explorations and team-based student projects.',
      },
      {
        id: 'android_async_handling',
        label: 'Explain how you handle state management or asynchronous tasks (e.g., Coroutines, Flow, LiveData, ViewModel) in an Android app.',
        type: 'textarea',
        placeholder: 'Explain with an example such as fetching API data or handling configuration changes...',
        required: true,
        helpText: 'Share your practical understanding of threading and UI lifecycle.',
      },
      {
        id: 'android_github_repo',
        label: 'Link to your primary GitHub profile or your best Android repository.',
        type: 'url',
        placeholder: 'https://github.com/username/my-android-app',
        required: true,
      },
    ],
  },

  // 2. SDC (Software Development Cell)
  {
    id: 'sdc',
    name: 'SDC (Software Development Cell)',
    category: 'Technical',
    tagline: 'Full-Stack Systems, APIs & Scalable Cloud Infrastructure',
    description:
      'Engineers powering web platforms, backend microservices, database architectures, APIs, and devops pipelines that run the club’s digital ecosystem.',
    keySkills: ['React / Next.js', 'Node.js / Express', 'Python / FastAPI', 'PostgreSQL / MongoDB', 'Docker', 'REST / GraphQL'],
    icon: 'Server',
    accentColor: '#00E5FF',
    roleQuestions: [
      {
        id: 'sdc_tech_stack',
        label: 'Which tech stack do you primarily work with?',
        type: 'textarea',
        placeholder: 'e.g. MERN, Next.js + TypeScript, Django / FastAPI, Spring Boot, Go, Flutter, PostgreSQL...',
        required: true,
        helpText: 'Specify languages, frameworks, and database engines you feel confident using.',
      },
      {
        id: 'sdc_system_desc',
        label: 'Describe a full-stack or backend system you built, including database design, authentication, and deployment.',
        type: 'textarea',
        placeholder: 'What was the system? How did you structure schemas, JWT/OAuth, and hosting (Vercel, AWS, Render)?',
        required: true,
      },
      {
        id: 'sdc_code_quality',
        label: 'How do you ensure code quality, version control branching, and CI/CD pipelines in a team setting?',
        type: 'textarea',
        placeholder: 'Git flow habits, PR reviews, linting, automated testing, GitHub Actions...',
        required: true,
      },
      {
        id: 'sdc_demo_links',
        label: 'Share links to your best deployed project demo and GitHub repository.',
        type: 'url',
        placeholder: 'https://my-deployed-app.vercel.app or GitHub repo URL',
        required: true,
      },
    ],
  },

  // 3. R&D (Research & Development)
  {
    id: 'rnd',
    name: 'R&D (Research & Development)',
    category: 'Technical',
    tagline: 'Applied AI, Machine Learning, Computer Vision & Edge Systems',
    description:
      'Explores the cutting frontier of applied artificial intelligence, deep learning models, on-device neural inferencing, IoT microcontrollers, and technical research publications.',
    keySkills: ['PyTorch / TensorFlow', 'Computer Vision', 'NLP / LLMs', 'Edge AI', 'Scikit-Learn', 'IoT (ESP32/Raspberry Pi)'],
    icon: 'Cpu',
    accentColor: '#B388FF',
    roleQuestions: [
      {
        id: 'rnd_domains',
        label: 'What research domains or cutting-edge technologies are you currently exploring?',
        type: 'textarea',
        placeholder: 'e.g. On-device SLMs, Object Detection, Multimodal embeddings, IoT sensor arrays, Transformers...',
        required: true,
      },
      {
        id: 'rnd_model_desc',
        label: 'Describe any ML/DL model or research prototype you trained, fine-tuned, or evaluated.',
        type: 'textarea',
        placeholder: 'Dataset source, model architecture, metrics (F1, Accuracy, Loss), and challenges faced...',
        required: true,
      },
      {
        id: 'rnd_paper_interest',
        label: 'Are you interested in writing research papers, filing patents, or presenting at technical conferences?',
        type: 'select',
        options: [
          'Yes, actively working on paper manuscripts or patentable concepts',
          'Yes, eager to learn research methodology and paper writing under guidance',
          'Primarily interested in coding experimental prototypes & model deployment',
        ],
        required: true,
      },
      {
        id: 'rnd_profiles',
        label: 'Provide links to your Kaggle, Hugging Face, ArXiv, GitHub, or research paper drafts.',
        type: 'url',
        placeholder: 'https://huggingface.co/username or Kaggle / GitHub URL',
        required: false,
      },
    ],
  },

  // 4. UI/UX Team
  {
    id: 'uiux',
    name: 'UI/UX Team',
    category: 'Technical',
    tagline: 'Product Design, User Research & Design Systems',
    description:
      'Crafts delightful, accessible, and intuitive digital interfaces. Bridges human psychology with modern design systems and Material Design 3 guidelines.',
    keySkills: ['Figma', 'Material Design 3', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    icon: 'Palette',
    accentColor: '#FF6D00',
    roleQuestions: [
      {
        id: 'uiux_tools',
        label: 'What tools and software do you use for design?',
        type: 'textarea',
        placeholder: 'e.g. Figma, FigJam, Adobe XD, Illustrator, Spline 3D, Protopie...',
        required: true,
      },
      {
        id: 'uiux_process',
        label: 'Walk us through your design process from user problem research to high-fidelity clickable prototype.',
        type: 'textarea',
        placeholder: 'How do you conduct research, construct user personas, wireframe, and test with users?',
        required: true,
      },
      {
        id: 'uiux_material_you',
        label: 'How do you design for Android Material You / Material Design 3 guidelines?',
        type: 'textarea',
        placeholder: 'Dynamic color palettes, accessible touch targets, typography scales, elevation tokens...',
        required: true,
      },
      {
        id: 'uiux_portfolio_link',
        label: 'Share your Behance, Dribbble, or Figma portfolio link.',
        type: 'url',
        placeholder: 'https://www.figma.com/@yourprofile or Behance / Dribbble link',
        required: true,
      },
    ],
  },

  // 5. Event Management (EVM)
  {
    id: 'evm',
    name: 'Event Management (EVM)',
    category: 'Non-Technical',
    tagline: 'Logistics, Hackathon Operations & Stage Management',
    description:
      'The engine behind our large-scale hackathons, technical speaker sessions, hands-on bootcamps, venue arrangements, and high-energy college fest competitions.',
    keySkills: ['Event Operations', 'Logistics Coordination', 'Crisis Management', 'Hospitality', 'Stage Execution'],
    icon: 'CalendarCheck',
    accentColor: '#FFD600',
    roleQuestions: [
      {
        id: 'evm_past_experience',
        label: 'Have you previously organized or volunteered for college events, fests, or hackathons? Share your role.',
        type: 'textarea',
        placeholder: 'Detail the event name, footfall, your responsibilities, and key achievements...',
        required: true,
      },
      {
        id: 'evm_crisis_handling',
        label: 'How would you handle an unexpected crisis during a live 500+ participant hackathon (e.g. Wi-Fi failure, speaker delay)?',
        type: 'textarea',
        placeholder: 'Describe your immediate steps, communication strategy, and mitigation actions...',
        required: true,
      },
      {
        id: 'evm_flagship_idea',
        label: 'What ideas do you have for Android Club’s next flagship campus event at VIT Bhopal?',
        type: 'textarea',
        placeholder: 'Propose an event concept, target audience, format, and why students would be excited...',
        required: true,
      },
    ],
  },

  // 6. Design Team (Creatives / Graphics)
  {
    id: 'design',
    name: 'Design Team (Creatives / Graphics)',
    category: 'Non-Technical',
    tagline: 'Visual Branding, Campaign Posters, 3D Assets & Swag',
    description:
      'Defines the visual voice of Android Club. Creates jaw-dropping social media posters, event banners, merchandise, motion graphics, and branding assets.',
    keySkills: ['Adobe Photoshop', 'Illustrator', 'Canva Pro', 'Blender / 3D', 'After Effects', 'Branding Identity'],
    icon: 'Brush',
    accentColor: '#FF4081',
    roleQuestions: [
      {
        id: 'design_tools_used',
        label: 'Which creative design tools do you use regularly?',
        type: 'textarea',
        placeholder: 'Photoshop, Illustrator, Canva, Blender, After Effects, Procreate...',
        required: true,
      },
      {
        id: 'design_poster_approach',
        label: 'Describe your approach to creating an eye-catching event poster that stops students from scrolling on Instagram.',
        type: 'textarea',
        placeholder: 'Visual hierarchy, typography choice, color contrast, and focal point creation...',
        required: true,
      },
      {
        id: 'design_portfolio_drive',
        label: 'Share a link to your design portfolio, Behance, or Google Drive folder of your past creative artwork.',
        type: 'url',
        placeholder: 'https://drive.google.com/... or Behance link (ensure permissions are set to public view)',
        required: true,
      },
    ],
  },

  // 7. Content Team
  {
    id: 'content',
    name: 'Content Team',
    category: 'Non-Technical',
    tagline: 'Technical Writing, Social Media Copy, Scripts & Tech Journalism',
    description:
      'Translates sophisticated engineering concepts into engaging stories, technical blogs, newsletter editions, Instagram captions, and event anchoring scripts.',
    keySkills: ['Technical Writing', 'Copywriting', 'SEO', 'Scriptwriting', 'Documentation', 'Storytelling'],
    icon: 'FileText',
    accentColor: '#00E676',
    roleQuestions: [
      {
        id: 'content_writing_types',
        label: 'What types of writing are you most comfortable with?',
        type: 'select',
        options: [
          'Technical articles & deep-dive tutorials',
          'Social media copy, punchy captions & hooks',
          'Event scripts, hosting & formal speechwriting',
          'Comprehensive mix of technical blogs & creative writing',
        ],
        required: true,
      },
      {
        id: 'content_explain_concept',
        label: 'How would you explain a complex technical concept (like Jetpack Compose, APIs, or Cloud databases) to a 1st-year beginner in simple, engaging words?',
        type: 'textarea',
        placeholder: 'Write a short 3-5 sentence explanation showcasing your style and clarity...',
        required: true,
      },
      {
        id: 'content_samples_link',
        label: 'Share a link to your writing samples, Medium blog, LinkedIn newsletter, or Google Drive folder.',
        type: 'url',
        placeholder: 'https://medium.com/@username or Drive link',
        required: true,
      },
    ],
  },

  // 8. Finance Team
  {
    id: 'finance',
    name: 'Finance Team',
    category: 'Non-Technical',
    tagline: 'Budget Optimization, Vendor Negotiations & Accounts',
    description:
      'Guards and allocates financial resources for our hackathons, workshops, prize pools, and community merchandise while maintaining strict fiscal compliance.',
    keySkills: ['Budget Allocation', 'Spreadsheet Modeling', 'Vendor Negotiation', 'Cost Auditing', 'Expense Tracking'],
    icon: 'Coins',
    accentColor: '#AEEA00',
    roleQuestions: [
      {
        id: 'finance_budgeting_scenario',
        label: 'How would you budget for a 2-day technical festival with ₹1,00,000 estimated expenses?',
        type: 'textarea',
        placeholder: 'Provide a breakdown for prize pool, food & refreshments, printing, logistics, and contingency fund...',
        required: true,
      },
      {
        id: 'finance_vendor_negotiation',
        label: 'What strategies would you employ to negotiate discounts from campus vendors, t-shirt printers, and equipment suppliers?',
        type: 'textarea',
        placeholder: 'How do you structure volume quotes and secure competitive rates while maintaining quality?',
        required: true,
      },
      {
        id: 'finance_tools_proficiency',
        label: 'Share your familiarity with spreadsheets (Excel/Google Sheets) and basic financial record keeping.',
        type: 'textarea',
        placeholder: 'Functions used (VLOOKUP, SUMIFS, Pivot Tables), invoice tracking experience...',
        required: true,
      },
    ],
  },

  // 9. Media Team
  {
    id: 'media',
    name: 'Media Team',
    category: 'Non-Technical',
    tagline: 'Cinematic Videography, After-Movies, Reels & Photography',
    description:
      'Captures the electricity, memories, and energy of our campus community. Produces cinematic hackathon after-movies, viral Instagram reels, podcasts, and event galleries.',
    keySkills: ['Premiere Pro', 'DaVinci Resolve', 'Cinematography', 'Audio Production', 'Reel Editing', 'Lighting'],
    icon: 'Video',
    accentColor: '#E040FB',
    roleQuestions: [
      {
        id: 'media_gear_software',
        label: 'What camera gear and editing software do you use?',
        type: 'textarea',
        placeholder: 'e.g. Sony Alpha / Canon DSLR, Smartphone gimbal, Premiere Pro, DaVinci Resolve, CapCut Pro...',
        required: true,
      },
      {
        id: 'media_reel_breakdown',
        label: 'How do you plan, shoot, and edit a dynamic 30-second Instagram Reel to recap a hackathon with viral potential?',
        type: 'textarea',
        placeholder: 'Storyline arc, beat sync, speed ramping, B-roll shots, sound effects...',
        required: true,
      },
      {
        id: 'media_portfolio_link',
        label: 'Share a link to your video editing portfolio, Google Drive folder, YouTube channel, or Instagram video showcase.',
        type: 'url',
        placeholder: 'https://drive.google.com/... or YouTube/Instagram reel link',
        required: true,
      },
    ],
  },

  // 10. PR & Outreach
  {
    id: 'pr_outreach',
    name: 'PR & Outreach',
    category: 'Non-Technical',
    tagline: 'Corporate Sponsorships, Community Partnerships & Public Relations',
    description:
      'The official ambassadors of Android Club to industry partners, external hackathon sponsors, guest speakers, alumni networks, and collegiate technical bodies across India.',
    keySkills: ['Sponsorship Pitching', 'Corporate Outreach', 'Public Relations', 'Public Speaking', 'Partnership Building'],
    icon: 'Megaphone',
    accentColor: '#64DD17',
    roleQuestions: [
      {
        id: 'pr_pitch_strategy',
        label: 'How would you pitch Android Club to a tech company or startup to secure a ₹50,000 cash or swag sponsorship?',
        type: 'textarea',
        placeholder: 'Value proposition, audience demographics, branding deliverables, and follow-up strategy...',
        required: true,
      },
      {
        id: 'pr_community_partnerships',
        label: 'How do you build relationships with other university clubs, student bodies, and prominent tech communities?',
        type: 'textarea',
        placeholder: 'Collaborative event ideas, cross-promotions, networking channels...',
        required: true,
      },
      {
        id: 'pr_persuasion_story',
        label: 'Describe a situation where strong communication and persuasion helped you achieve a challenging goal.',
        type: 'textarea',
        placeholder: 'What was the scenario, who did you convince, and what was the outcome?',
        required: true,
      },
    ],
  },
];

export const SUGGESTED_SKILLS: Record<string, string[]> = {
  Technical: [
    'Kotlin',
    'Java',
    'Jetpack Compose',
    'Android Studio',
    'Flutter',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'MongoDB',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    'Docker',
    'Git / GitHub',
    'Figma',
    'UI / UX Research',
    'REST APIs',
  ],
  'Non-Technical': [
    'Event Management',
    'Public Speaking',
    'Sponsorship Pitching',
    'Creative Writing',
    'Graphic Design',
    'Adobe Photoshop',
    'Illustrator',
    'Premiere Pro',
    'DaVinci Resolve',
    'Video Editing',
    'Photography',
    'Financial Budgeting',
    'Excel / Spreadsheets',
    'Social Media Growth',
    'Public Relations',
  ],
};
