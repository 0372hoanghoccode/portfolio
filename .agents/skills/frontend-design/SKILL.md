---
name: astro-vscode-portfolio
description: Build stunning developer portfolio websites using Astro framework with a VSCode-inspired UI/UX aesthetic. Use this skill whenever a user wants to create a personal portfolio, developer portfolio, resume website, or project showcase — especially when they mention wanting a "VSCode style", "IDE theme", "code editor look", or "developer aesthetic". Also trigger for any Astro-based portfolio, personal site, or creative developer website, even if VSCode style isn't explicitly requested. Produces production-grade, highly polished Astro sites with authentic IDE chrome: activity bar, file explorer sidebar, editor tabs, syntax-highlighted content, integrated terminal, and status bar — all mapped to real portfolio sections.
---

# Astro VSCode Portfolio Skill

Build production-grade personal portfolio sites with Astro that look and feel like a real IDE. The VSCode aesthetic isn't a gimmick — it's a conceptual framework where the entire portfolio IS an IDE, and the visitor navigates it like a developer would navigate their editor.

## Core Philosophy

> "Your portfolio is your codebase. Let visitors explore it like one."

Every design decision should reinforce the metaphor:
- **Sections** → open files/tabs
- **About** → `README.md`
- **Projects** → `projects/` folder in the explorer
- **Skills** → `package.json` dependencies
- **Blog** → `posts/` collection
- **Contact** → terminal prompt

---

## Before Writing Code: Read These References

1. **`references/astro-patterns.md`** — Astro-specific file structure, component patterns, content collections, routing
2. **`references/vscode-design-system.md`** — Complete VSCode color tokens, typography, spacing, and UI anatomy
3. **`references/portfolio-sections.md`** — Section-by-section implementation guide with VSCode metaphors

---

## Step 0: Understand the User's Context

Before generating any code, gather:

- **Identity**: Name, role (Frontend Dev, Full-Stack, Designer-Dev, etc.)
- **Tech stack** they want to highlight
- **Projects** to feature (count, types)
- **Tone**: Serious/professional vs playful/experimental
- **Color preference**: Classic dark (One Dark Pro), light (GitHub Light), custom accent color
- **Extra sections**: Blog? Testimonials? Resume download? Timeline?

If info is missing, make reasonable assumptions and state them clearly.

---

## Step 1: Architecture Decision

### Astro Project Structure
```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ActivityBar.astro       # Left icon rail
│   │   │   ├── Sidebar.astro           # File explorer panel
│   │   │   ├── TabBar.astro            # Open file tabs
│   │   │   ├── StatusBar.astro         # Bottom status strip
│   │   │   └── MiniMap.astro           # Right-side scroll minimap (optional)
│   │   ├── editor/
│   │   │   ├── LineNumbers.astro       # Gutter line numbers
│   │   │   ├── CodeBlock.astro         # Syntax highlighted blocks
│   │   │   ├── BreadcrumbNav.astro     # Path breadcrumbs
│   │   │   └── InlineComment.astro     # // comment decorations
│   │   ├── sections/
│   │   │   ├── Hero.astro              # "Editor welcome" or README view
│   │   │   ├── About.astro             # README.md styled section
│   │   │   ├── Projects.astro          # File explorer + preview pane
│   │   │   ├── Skills.astro            # package.json / tech tree
│   │   │   ├── Experience.astro        # Git log / timeline
│   │   │   ├── Contact.astro           # Terminal prompt
│   │   │   └── Blog.astro              # Posts collection
│   │   └── ui/
│   │       ├── ProjectCard.astro
│   │       ├── SkillBadge.astro
│   │       ├── CommandPalette.astro    # Cmd+K search overlay
│   │       └── Notification.astro
│   ├── content/
│   │   ├── config.ts                   # Zod schemas
│   │   ├── projects/                   # .md or .mdx files
│   │   └── posts/                      # Blog posts
│   ├── layouts/
│   │   └── IDELayout.astro             # Main IDE chrome wrapper
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/[slug].astro
│   │   └── blog/[slug].astro
│   ├── styles/
│   │   ├── tokens.css                  # VSCode design tokens
│   │   ├── editor.css                  # Editor-specific styles
│   │   └── animations.css             # Transitions and effects
│   └── data/
│       ├── skills.ts
│       ├── experience.ts
│       └── config.ts                   # Site-wide config
├── public/
│   └── fonts/                          # JetBrains Mono, etc.
├── astro.config.mjs
├── tailwind.config.mjs                 # Optional, use with @tailwindcss/vite
└── package.json
```

---

## Step 2: VSCode Design System

### Color Tokens (CSS Variables)
Always define these in `tokens.css`. See `references/vscode-design-system.md` for full palette options.

**Core Dark Theme (One Dark Pro inspired):**
```css
:root {
  /* Backgrounds */
  --vsc-bg-editor: #1e1e1e;
  --vsc-bg-sidebar: #252526;
  --vsc-bg-activity-bar: #333333;
  --vsc-bg-tab-active: #1e1e1e;
  --vsc-bg-tab-inactive: #2d2d2d;
  --vsc-bg-status-bar: #007acc;
  --vsc-bg-terminal: #1e1e1e;
  --vsc-bg-hover: #2a2d2e;
  --vsc-bg-selection: #264f78;
  --vsc-bg-highlight: #0d3a58;

  /* Borders */
  --vsc-border: #3c3c3c;
  --vsc-border-focus: #007acc;

  /* Text */
  --vsc-text-primary: #d4d4d4;
  --vsc-text-secondary: #858585;
  --vsc-text-muted: #6a6a6a;
  --vsc-text-active: #ffffff;
  --vsc-text-link: #4ec9b0;

  /* Syntax colors */
  --vsc-syntax-keyword: #569cd6;
  --vsc-syntax-string: #ce9178;
  --vsc-syntax-number: #b5cea8;
  --vsc-syntax-comment: #6a9955;
  --vsc-syntax-function: #dcdcaa;
  --vsc-syntax-class: #4ec9b0;
  --vsc-syntax-variable: #9cdcfe;
  --vsc-syntax-operator: #d4d4d4;
  --vsc-syntax-type: #4ec9b0;
  --vsc-syntax-tag: #4ec9b0;
  --vsc-syntax-attribute: #9cdcfe;

  /* Accent */
  --vsc-accent: #007acc;
  --vsc-accent-hover: #1a8ad4;
  --vsc-accent-subtle: #0e4163;

  /* Git decorations */
  --vsc-git-added: #81b88b;
  --vsc-git-modified: #e2c08d;
  --vsc-git-deleted: #c74e39;

  /* UI */
  --vsc-scrollbar: #424242;
  --vsc-focus-ring: #007acc;

  /* Typography */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  --font-ui: 'Segoe UI', system-ui, sans-serif;
  --font-size-editor: 14px;
  --font-size-ui: 13px;
  --line-height-editor: 1.5;

  /* Spacing (mirrors VSCode's 4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
```

---

## Step 3: IDE Layout Chrome

### IDELayout.astro — The Frame
The IDE chrome must feel authentic. Key dimensions:
- **Activity bar**: 48px wide, fixed left
- **Sidebar**: 260px wide, resizable (CSS `resize: horizontal`)
- **Tab bar**: 35px tall, scrollable horizontally
- **Status bar**: 22px tall, fixed bottom
- **Editor area**: `calc(100vw - 48px - 260px)` initially

```astro
---
// IDELayout.astro
import ActivityBar from '../components/layout/ActivityBar.astro';
import Sidebar from '../components/layout/Sidebar.astro';
import TabBar from '../components/layout/TabBar.astro';
import StatusBar from '../components/layout/StatusBar.astro';
import CommandPalette from '../components/ui/CommandPalette.astro';

interface Props {
  activeSection?: string;
  pageTitle?: string;
}
const { activeSection = 'explorer', pageTitle = 'index.astro' } = Astro.props;
---

<div class="ide-root" data-active={activeSection}>
  <ActivityBar activeSection={activeSection} />
  <div class="ide-body">
    <Sidebar activeSection={activeSection} />
    <div class="ide-editor-area">
      <TabBar activeFile={pageTitle} />
      <div class="ide-editor-content">
        <BreadcrumbNav />
        <slot />
      </div>
    </div>
  </div>
  <StatusBar />
  <CommandPalette />
</div>
```

### Activity Bar Icons
Map to Lucide or custom SVG icons. Standard VSCode icons:
- 📁 Explorer (files) → About / Home
- 🔍 Search → Skills search
- 🌿 Source Control → Experience / Timeline
- 🧩 Extensions → Projects
- 👤 Accounts → Contact
- ⚙️ Settings → Resume/CV

---

## Step 4: Section-by-Section Implementation

Read `references/portfolio-sections.md` for full implementation details per section.

### Quick Reference

| Section | VSCode Metaphor | File Name |
|---------|----------------|-----------|
| Hero | Welcome tab / Start screen | `welcome.md` |
| About | README.md viewer | `README.md` |
| Projects | File explorer + split editor | `projects/` |
| Skills | package.json visualizer | `package.json` |
| Experience | Git log / CHANGELOG | `CHANGELOG.md` |
| Contact | Integrated terminal | `terminal` |
| Blog | Markdown editor | `posts/` |

---

## Step 5: Signature Interactions

These elevate the portfolio from "VSCode-looking" to "feels like VSCode":

### 1. Command Palette (Cmd+K / Ctrl+K)
```javascript
// Opens a fuzzy-search overlay listing all sections + projects
// Users can navigate the whole site with keyboard
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('.command-palette').classList.toggle('open');
  }
});
```

### 2. Tab Navigation
- Clicking a sidebar file opens it as a new tab
- Tabs show file icons (based on extension)
- Unsaved indicator (●) on active/modified tabs
- Tabs are closeable with ×

### 3. Line Numbers
- All "editor" content has authentic gutter line numbers
- Current-line highlight on hover
- Optionally: folding triangles on section headers

### 4. Syntax Highlighting
- Hero/About content rendered with fake syntax tokens
- Use `<span class="token keyword">const</span>` pattern
- Match color tokens exactly to VSCode themes

### 5. Status Bar Live Info
```astro
<!-- Status bar items (left to right) -->
<span class="status-git">⎇ main</span>
<span class="status-errors">$(error) 0 $(warning) 0</span>
<!-- Right side -->
<span class="status-lang">Markdown</span>
<span class="status-encoding">UTF-8</span>
<span class="status-position">Ln 1, Col 1</span>
```

### 6. Minimap (optional)
A decorative right-side minimap showing blurred content preview — purely aesthetic but very convincing.

### 7. Hover Decorations
- Hovering keywords shows a "type information" tooltip (like intellisense)
- Project cards show git-diff style additions/deletions

---

## Step 6: Typography Rules

**Monospace fonts for everything editor-related:**
- Code, line numbers, breadcrumbs, file tree, tabs, status bar
- Recommended: `JetBrains Mono` (variable, has ligatures)
- Alternative: `Fira Code`, `Cascadia Code`, `IBM Plex Mono`
- Load from Google Fonts or bundle locally

**System/UI font for prose:**
- About text, project descriptions, blog content
- Use `-apple-system, 'Segoe UI', system-ui` for authenticity
- OR use a clean sans-serif like `DM Sans`, `Plus Jakarta Sans`

**Font size scale:**
```css
--text-xs: 11px;   /* status bar, breadcrumbs */
--text-sm: 12px;   /* sidebar labels, tab names */
--text-base: 13px; /* editor body text */
--text-md: 14px;   /* editor code */
--text-lg: 16px;   /* section headings */
--text-xl: 20px;   /* hero title */
--text-2xl: 28px;  /* hero name */
```

---

## Step 7: Animation & Motion

### Page Load Sequence (staggered)
```css
/* 1. Activity bar fades in */
.activity-bar { animation: slideInLeft 0.3s ease 0s both; }
/* 2. Sidebar expands */
.sidebar { animation: expandWidth 0.35s ease 0.1s both; }
/* 3. Tab bar drops down */
.tab-bar { animation: slideInDown 0.3s ease 0.2s both; }
/* 4. Editor content fades in with cursor blink */
.editor-content { animation: fadeIn 0.4s ease 0.35s both; }
/* 5. Status bar slides up */
.status-bar { animation: slideInUp 0.3s ease 0.4s both; }
```

### Micro-interactions
- File tree items: subtle highlight + indent expansion on hover
- Tab hover: slight background change, × button appears
- Activity bar icons: scale(1.1) + tooltip on hover
- Status bar items: cursor pointer, hover bg change
- Terminal cursor: blinking `_` or `█` animation

### Cursor Blink in Terminal
```css
.terminal-cursor::after {
  content: '█';
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

---

## Step 8: Responsive Strategy

VSCode on mobile is a real challenge. Use progressive disclosure:

### Mobile (< 768px)
- Hide activity bar + sidebar by default
- Show hamburger/drawer toggle
- Tabs become a horizontal scroll strip or dropdown
- Status bar collapses to essentials (branch name + language)
- Full-width editor content

### Tablet (768px–1024px)
- Sidebar hidden by default, toggle with icon
- Activity bar always visible (narrower: 40px)
- 2-column project grid

### Desktop (> 1024px)
- Full IDE layout with all panels
- Optional: resizable sidebar with drag handle

```css
@media (max-width: 767px) {
  .ide-root {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
  .activity-bar { display: none; }
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.2s;
    z-index: 100;
  }
  .sidebar.open { transform: translateX(0); }
}
```

---

## Step 9: Astro-Specific Patterns

### Content Collections (Astro 3+)
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'archived', 'wip']).default('active'),
    stars: z.number().optional(),
    date: z.date(),
    cover: z.string().optional(),
  }),
});

export const collections = { projects };
```

### View Transitions (Astro 3+)
```astro
---
// In head
import { ViewTransitions } from 'astro:transitions';
---
<ViewTransitions />
```
Use `transition:name` and `transition:animate` for tab-switching feel between pages.

### Islands for Interactivity
- `CommandPalette` → React/Svelte island (`client:load`)
- `Terminal` typewriter effect → `client:visible`
- `ProjectFilter` → `client:load`
- Static sections → pure `.astro` (zero JS)

---

## Quality Checklist

Before delivering, verify:

- [ ] All VSCode color tokens defined as CSS vars
- [ ] JetBrains Mono (or equivalent) loaded correctly
- [ ] Activity bar + sidebar + tabs + status bar all present
- [ ] Command palette responds to Cmd/Ctrl+K
- [ ] Staggered page load animation works
- [ ] Line numbers visible in editor sections
- [ ] Syntax highlighting tokens applied to code snippets
- [ ] Status bar shows branch name, language, line/col
- [ ] Mobile: sidebar collapses to drawer
- [ ] Breadcrumbs update on section change
- [ ] All links/CTAs functional
- [ ] Astro content collections properly typed
- [ ] View transitions enabled for page navigation
- [ ] Terminal section has blinking cursor
- [ ] No generic purple-gradient AI aesthetics anywhere

---

## Anti-patterns to Avoid

❌ Generic gradient hero sections
❌ Card grids with drop shadows that don't fit the IDE metaphor
❌ Non-monospace fonts in the chrome/UI
❌ VSCode aesthetic only on one section (it must be EVERYWHERE)
❌ Ignoring the metaphor — "About Me" text without a file/tab context
❌ Missing the status bar (it's the most recognizable VSCode element)
❌ Activity bar with emoji instead of proper SVG icons
❌ Overflow issues on the tab bar (must scroll horizontally)
❌ Forgetting `font-feature-settings: "liga" 1` for code ligatures

---

## Delivering the Output

For a single-page portfolio demo → output as a single HTML artifact with embedded CSS/JS that faithfully mimics the full IDE layout.

For a full Astro project → generate all files with proper structure, explain which to create first, and provide `npm create astro@latest` setup instructions.

Always show a **screenshot description** of the expected result so the user knows what to expect before running the dev server.
