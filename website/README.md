# GenAI Roadmap - Educational Website

A modern, interactive learning platform for the comprehensive [GenAI Roadmap](https://github.com/yourusername/gen-ai-experiments) curriculum.

## 🚀 Features

- **Progressive Learning Path**: 7 carefully designed levels from foundations to specialization
- **130+ Projects**: Real-world projects across all difficulty levels
- **4 Specialization Paths**: App Developer, Engineer, Researcher, Product Manager
- **Interactive UI**: Modern design inspired by Vercel, OpenAI, Linear, and Notion
- **Dark Theme**: Eye-friendly dark mode by default
- **Responsive Design**: Mobile, tablet, and desktop support

## 📋 Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Shadcn UI-inspired components
- **Language**: TypeScript

## 🏗️ Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx (root layout)
│   │   ├── page.tsx (home)
│   │   ├── roadmap/page.tsx (roadmap overview)
│   │   ├── level/[id]/page.tsx (level detail)
│   │   ├── projects/page.tsx (projects grid)
│   │   ├── project/[id]/page.tsx (project detail)
│   │   ├── paths/page.tsx (specialization paths)
│   │   ├── docs/page.tsx (documentation)
│   │   └── globals.css (global styles)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── MainLayout.tsx
│   │   ├── LevelCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── PathCard.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Badge.tsx
│   ├── data/
│   │   ├── levels.ts (7 levels data)
│   │   ├── projects.ts (130+ projects)
│   │   └── paths.ts (4 specialization paths)
│   └── lib/
│       └── types.ts (TypeScript types)
├── public/ (static assets)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
```bash
cd roadmap-site/website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Home Page (`/`)
- Overview of the roadmap
- Feature highlights
- Learning path preview

### Roadmap (`/roadmap`)
- Timeline view of all 7 levels
- Level details and progression

### Level Details (`/level/[id]`)
- Topics to master
- Learning outcomes
- Featured projects
- Checkpoints

### Projects (`/projects`)
- Filterable grid of 130+ projects
- Search functionality
- Status and difficulty filters

### Project Details (`/project/[id]`)
- Project description
- Related levels
- GitHub link
- Technologies and tags

### Specialization Paths (`/paths`)
- 4 specialization options
- Career progression info
- Required skills

### Documentation (`/docs`)
- Links to markdown docs
- External resources
- FAQ

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --accent: 234 89% 56%; /* Primary accent color */
  --background: 0 0% 3%;
  --card: 0 0% 8%;
  /* ... other colors */
}
```

### Data
All curriculum data is in `/src/data/`:
- `levels.ts` - Edit to change level information
- `projects.ts` - Add/edit projects
- `paths.ts` - Modify specialization paths

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build static export:
```bash
npm run build
```

Then deploy the `out/` directory.

## 📝 Component Examples

### Adding a New Level
Edit `src/data/levels.ts`:

```typescript
{
  id: 7,
  name: 'advanced-plus',
  title: 'Advanced Plus',
  description: '...',
  duration: '4-5 weeks',
  difficulty: 'Advanced',
  topics: [...],
  learningOutcomes: [...],
  projects: [...],
  checkpoints: 5,
  estimatedHours: 40,
  color: 'from-red-500 to-pink-500'
}
```

### Adding a New Project
Edit `src/data/projects.ts`:

```typescript
{
  id: 'new-project',
  name: 'Project Name',
  description: '...',
  level: [2, 3],
  category: 'Category',
  tags: ['tag1', 'tag2'],
  folder: 'ai-apps-collection/',
  difficulty: 'Intermediate',
  status: 'Complete'
}
```

## 🤝 Contributing

Contributions welcome! Areas to contribute:

- Additional projects and resources
- Design improvements
- Mobile optimization
- Accessibility enhancements

## 📄 License

MIT License - see LICENSE file

## 🔗 Links

- [Main Repository](https://github.com/yourusername/gen-ai-experiments)
- [Curriculum Documentation](https://github.com/yourusername/gen-ai-experiments/tree/main/docs)
- [Issues & Discussions](https://github.com/yourusername/gen-ai-experiments/issues)

## 💬 Community

- Join our Discord community
- Share your projects
- Discuss learning experiences
- Connect with other learners

## ✨ Credits

Built with ❤️ for the GenAI learning community.

---

**Happy Learning! 🚀**
