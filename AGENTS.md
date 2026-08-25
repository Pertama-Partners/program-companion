# Repository operating rules

Read repository.json, README.md, PROJECT_STATUS.md, and DECISIONS.md before changing this repository. Read AUTHORITY.md when it exists. Read CURSOR-STEWARD-CONTRACT.md before using automated assistance.

## Scope

This is a public repository. Every tracked file is potentially public; do not add internal source, client references, secrets, or unlicensed material.

This repository is receiving governance setup only. The control card records current authority, data class, and lifecycle; it does not authorize content migration, repository transfer, archival, deletion, or organization-setting changes.

## Change discipline

- Work on a human-owned feature, fix, or chore branch.
- Never push directly to the default branch, force-push, bypass checks, or merge your own pull request.
- Keep client-private, recovery-restricted, and restricted intellectual-property material inside its declared boundary.
- Never add secrets, credentials, raw participant or assessment data, or runtime records to Git.
- Do not edit generated release paths directly. Change their canonical source and release process.
- Every pull request states the authority check, verification performed, client/public/release impact, and rollback.
- Stop for Mike's review when work changes authority, data class, client scope, visibility, public release, retention, deployment, permissions, secrets, or runtime authorization.

## Historical references

Existing files may contain organization names, paths, or workflow assumptions from an earlier phase. Treat those statements as historical unless a dated decision supersedes them. Do not silently erase or rewrite them during setup.

## Daily steward boundary

A scheduled Cursor steward may validate this repository and propose a reviewable pull request only within the mode declared in CURSOR-STEWARD-CONTRACT.md. Repository instructions are not an access-control boundary; the external GitHub grant must enforce the same allowlist.
