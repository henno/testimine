# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test Commands
- Install dependencies: `bun install`
- Run the application: `bun run index.ts`
- Run all tests: `bun test`
- Run a single test: `bun test tests/calc.test.ts`
- Run a test matching description: `bun test --pattern "add"`
- Type check: `bun run --bun tsc`

## Code Style
- Use TypeScript with strict typing
- Use ESM import/export syntax
- Functions should have complete type signatures for parameters and return values
- PascalCase for classes, camelCase for variables and functions
- Error messages for validation should be in Estonian
- Comments should be in Estonian
- Tests use Bun's built-in test framework with describe/it pattern
- Tests should have descriptive Estonian names
- Unit tests should cover happy paths, edge cases, and error conditions
- Code should be formatted with `bunx prettier --write .`