example:

my-next-app/
├── public/                      # Static files like images, fonts, etc.
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/              # Reusable components
│   │   ├── common/              # Common components like Header, Footer
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── layout/              # Layout components
│   │   │   ├── MainLayout.tsx
│   │   │   └── ...
│   │   └── ui/                  # UI components like buttons, cards
│   │       ├── Button.tsx
│   │       └── ...
│   ├── pages/                   # Page components and automatic routing
│   │   ├── _app.tsx             # Custom App component
│   │   ├── _document.tsx        # Custom Document component
│   │   ├── index.tsx            # Home page
│   │   └── ...
│   ├── styles/                  # Global styles, variables, etc.
│   │   ├── globals.css
│   │   └── ...
│   ├── hooks/                   # Custom React hooks
│   │   └── ...
│   ├── utils/                   # Utility functions and helpers
│   │   └── ...
│   ├── services/                # Services for external API calls
│   │   └── ...
│   └── lib/                     # Library code and reusable logic
│       └── ...
├── next.config.js               # Next.js configuration file
├── package.json
└── tsconfig.json  