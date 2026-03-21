# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Template project for AI agent business automation using Claude Code and the Claude Agent SDK. The codebase is primarily in Japanese. All code examples in `examples/` are currently stubbed out (SDK calls commented out) as scaffolding for Agent SDK integration.

## Commands

- `npm install` - Install dependencies
- `npm run build` - Compile TypeScript (`tsc` → `dist/`)
- `npm test` - Run tests (`jest` with `--experimental-vm-modules` for ESM support)
- `npm run lint` - Check formatting with Prettier
- `npm run format` - Auto-fix formatting with Prettier
- `bash scripts/setup.sh` - Initial environment setup (checks Node.js ≥18, installs deps, creates `.env`)

## Code Conventions

- TypeScript with strict mode, targeting ES2022
- ESModules (`"type": "module"` in package.json, `"module": "ESNext"` in tsconfig)
- Prettier for formatting (no ESLint configured)
- Tests use Jest via ts-jest, files named `*.test.ts`
- Conventional Commits for commit messages

## Architecture

- `examples/` - Agent SDK usage examples (`basic-agent.ts`, `workflow-automation.ts`) showing patterns for single queries, streaming, and multi-step workflows (PR creation, daily reports, security scans)
- `.claude/agents/` - Custom subagent definitions (code-reviewer, doc-writer, task-planner) as markdown files with YAML frontmatter specifying name, tools, and model
- `.claude/settings.json` - Project-level permissions and hooks configuration
- `docs/` - Guides: getting started, agent setup, MCP integration, business patterns
- `scripts/setup.sh` - Environment bootstrap script
