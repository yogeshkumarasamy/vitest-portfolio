CI Architecture Prompt (Principal Engineer Review Standard) Role & Authority

You are acting as a Principal Engineer (25+ years of experience) responsible for
designing CI architecture for a production-grade frontend monorepo. Your task is
to create a FAANG-level continuous integration system for a modern frontend
platform with real browser testing, high concurrency, and infrastructure
realism.

The system must be reviewed as if it will be executed daily by hundreds of
engineers in a large-scale organization.

No demo-grade workflows. No tutorial patterns. No shortcuts.

Project Context (Current State)

This repository contains a production-style portfolio system built with:

TurboRepo (monorepo)

Vite

React + React DOM

TypeScript

Tailwind CSS

React Router

Vitest (Browser Mode)

Playwright (Browser runner)

39 test suites

245 tests

Browser-based component tests only (no jsdom defaults)

CI must execute vitest --browser in headless mode

Known local benchmark (Mac, 8 cores): maxWorkers: 7 → Duration: 3.18s
maxWorkers: 4 → Duration: 2.98s ✅ fastest locally maxWorkers: 2 → Duration:
3.65s

These measurements must be used as baseline references when evaluating CI
performance.

CI Objectives

Design a production-grade CI pipeline that:

Executes browser component tests using Playwright in headless mode

Uses caching strategies correctly (node_modules, Playwright browsers, Turbo
cache)

Uses matrix strategy for sharding

Uses formal CI stages

Outputs realistic diagnostics

Measures real execution time

Reflects enterprise failure isolation strategies

What You Must Produce

You will generate:

1. GitHub Actions Workflows

Create:

.github/workflows/ci-browser-tests.yml

.github/workflows/ci-validation.yml (lint + typecheck + build)

.github/workflows/ci-benchmark.yml (optional but recommended)

Each file must:

Be production-grade

Be clearly commented

Contain aggressive failure isolation

Use matrix where appropriate

2. Browser Test Job Requirements

The browser job MUST:

Install Playwright properly

Cache Playwright browsers

Cache npm/pnpm/yarn dependencies (based on repo tooling)

Cache Turbo build artifacts if used

Use clean environment every run

Run tests via:

npm run test:browser:headless

3. CI Benchmark Matrix

Create a matrix job that runs Vitest with:

maxWorkers: 2 maxWorkers: 4 maxWorkers: 7

For each configuration:

Report duration

Label logs clearly

Make the comparison human-readable

Example:

CI Benchmark Results: maxWorkers=2 → XXs maxWorkers=4 → XXs maxWorkers=7 → XXs

4. Sharding Strategy

Create a matrix-based sharding system using GitHub Actions.

Requirements:

Split test execution across machines

Add shard index environment variables

Demonstrate shard routing

Include example where:

4 shards run in parallel

each shard runs part of the suite

Your job definition must be copy-paste runnable

5. Caching Strategy (Explicit Design Required)

Cache layers must include:

Node modules

Playwright browsers

Build artifacts

Turbo cache (if relevant)

Vite cache (if relevant)

Explain:

Why each cache exists

How invalidation works

What breaks if the cache is wrong

How cache improves CI stability

6. Failure Strategy

Design workflows that:

Fail fast on infra issues

Retry flaky Playwright setup intelligently

Preserve logs

Export test reports (if applicable)

Provide actionable output

7. CI Philosophy (Principal Engineer Standard)

At the end, provide a CI Design Review Section that explains:

Why this architecture is chosen

Why sharding exists

Why concurrency matters

What bottlenecks the system surfaces

What a GitHub-hosted runner realistically supports (CPU limits)

Why headless browsers in CI are harder than unit tests

Why this matters in hiring-grade evaluation

Non-Negotiable Rules

Do not:

Skip caching

Skip Playwright install step

Run in jsdom

Use demo-level scripts

Use fake performance numbers

Ignore sharding

Assume infinite CPU

Use toy validation

Inline magic numbers

Output Format Required

Your answer MUST include:

CI Architecture Explanation

All workflow YAML files

Sharding strategy

Caching breakdown

Benchmark strategy

Principal Engineer Review Commentary

Expected CI behavior under load

How a reviewer would judge this system
