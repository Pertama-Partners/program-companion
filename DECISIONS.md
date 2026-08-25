# Decisions

## 2026-08-25 — Establish repository setup before migration

### Decision

Standardize the repository interface first. Add a current-state control card and discoverable operating documents without moving, deleting, archiving, or rewriting existing source.

### Why

The organization can establish a canonical structure only after the current repositories have a small, validated interface. Keeping content in place makes this phase reversible and preserves existing delivery work.

### Guardrails

- No organization settings, permissions, visibility, deployments, secrets, transfers, or repository ownership changes.
- No client-content movement or cross-repository copying.
- No repository retirement or deletion.
- A future Cursor steward may propose PRs, but it may not merge or change access.
- Existing older organization references remain historical until a later approved decision updates them.
