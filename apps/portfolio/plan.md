Portfolio Website Development Plan (Senior Frontend Engineer)
Objective

Design and implement a production-grade portfolio website for a Senior Frontend Engineer with experience across 7 organizations, using modern frontend architecture and tooling.
This project simultaneously serves as:

A realistic, high-quality portfolio website

A scalable component system

A stress-test environment for Vitest Browser Mode using hundreds of concurrent browser component tests

A reference architecture for Micro-Frontend + Monorepo workflow using TurboRepo

This project will be reviewed and evaluated as if by a Principal Engineer with 25+ years of frontend engineering experience.
Apply standards used in FAANG-level or enterprise-scale frontend systems.

Technology Stack (Fixed)

TurboRepo workspace

Vite

React + React DOM

TypeScript

Tailwind CSS

React Router (via react-dom)

Vitest (Browser Mode, Headless)

Playwright (Browser backend)

CI simulation via GitHub Actions

Domains to Highlight (Core Expertise)

The portfolio should authentically demonstrate depth in:

Semantic HTML & CSS architecture

JavaScript fundamentals and performance strategies

React architecture and design patterns

Redux / state management approaches

Monorepo workflows (TurboRepo)

Microfrontends

TypeScript at scale

Bundlers: Vite, Webpack

Tailwind CSS design systems

CI/CD pipelines (GitHub workflows)

Docker usage for frontend

Single-SPA

Webpack Module Federation

Application Architecture Requirements
Routing

Create ~10 real pages using React Router that feel production-authentic:

Suggested routes:

/

/about

/experience

/skills

/projects

/architecture

/microfrontends

/tooling

/blog

/contact

Each page should:

Have meaningful layout

Use isolated components

Use realistic UI patterns (cards, sections, tables, modals)

Share layout and design system primitives

Component Strategy
Requirement: Generate ~500 testable UI components

Create a component-heavy architecture intentionally to stress:

test concurrency

browser instance scaling

parallel test scheduling

isolation correctness

performance impact

Each route should compose dozens of small components such as:

Badges

Progress bars

Accordions

Skill meters

Timeline items

Tabs

Chips

Code blocks

Interactive cards

Experience tiles

Project previews

Architecture diagrams (SVG-based)

Loaders, skeletons, empty states

All components must:

Be TypeScript typed

Be fully isolated

Have Tailwind styling

Avoid heavy mock usage

Render in browser

Be testable independently

Testing Strategy (Primary Goal)
Primary Success Criterion:

Run 150 Vitest browser component test suites(tests) concurrently in headless mode.
Run 1000 tests across 150 test files concurrently in headless mode

Testing Requirements

Every component must have browser-based Vitest tests

Use real DOM rendering

Use Playwright-backed browser runner

Avoid jsdom as default

Use parallelization

Simulate CI-like execution

Each test should:

Mount the real component

Assert structure

Assert user interactions (hover, click, keyboard)

Validate accessibility where relevant

Use small, fast, deterministic assertions

Stress Areas

Ensure the test suite:

Scales across CPU cores

Simulates long pipelines

Includes varied component complexity

Includes shared component imports across routes

Highlights performance bottlenecks

Architectural Principles

Apply:

Directory-based domain design

Clear public vs private component boundaries

Design-system-like layering

Barrel exports

Shared UI primitives package (optional)

Feature-based structure over flat folders

No random duplication — even stress components must feel deliberate

Design Goals

The portfolio must:

Look professional

Be minimal but elegant

Favor clarity over gimmicks

Reflect senior-level craftsmanship

Avoid toy visuals

Resemble a principal engineer’s portfolio, not a beginner showcase

Deliverables

TurboRepo workspace

Vite-powered React app

Typed component system

10 page routes

500+ test files

Browser-mode Vitest config

Playwright integration

A design system

Reusable layouts

CI-ready test commands

Evaluation Criteria

The result should be reviewed as:

Production-worthy frontend architecture

Correct React patterns

Test realism

Code quality

Scalability

Performance

Tooling maturity

Design consistency

Test isolation

Concurrency behavior under load

Tone & Development Style

All generated code should reflect:

Senior engineer intent

Clean interfaces

Minimal hacks

DRY architecture

Test discipline

Scalability thinking

No tutorial-style shortcuts.
No demo-level patterns.
No shallow implementations.