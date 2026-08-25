# Cursor repository steward contract

## Status

This is a repository-local operating contract. It defines what an automated steward may propose; it grants no access by itself. No active Cursor grant is created by this setup.

## Cadence and output

If Mike later activates a scheduled Cursor Cloud Agent, run at most once every 24 hours. Use a human-owned feature or chore branch. If no actionable drift exists, report a sanitized no-op. If drift exists, open or update a pull request. Never write directly to the default branch.

The steward's interface ends at a reviewable pull request. Mike remains the approver for merge, release, access, retention, and runtime decisions.

## Declared mode

metadata-only by default; public-content review requires a separate scoped grant

The external source-control grant must enforce this mode. Repository instructions cannot prevent a cloud worker that has already been granted broader access from reading content.

## Allowed actions

- Read the control card, repository instructions, status, decision index, and other explicitly allowed governance paths.
- Validate required files, JSON metadata, Markdown links, repository-local checks, and safe secret-pattern rules.
- Propose small governance or documentation corrections on a feature/chore branch.
- Open a pull request with sanitized evidence, impact, and rollback details.
- Leave a no-op report when the repository already matches the baseline.

## Forbidden actions

- Push to the default branch, merge or approve a pull request, or bypass checks.
- Change visibility, permissions, collaborators, teams, rulesets, environments, webhooks, deploy keys, secrets, DNS, or deployments.
- Transfer, rename, archive, delete, fork, or make a repository public.
- Move source or generated material between repositories.
- Read, copy, summarize, or transmit client, participant, recovery, credential, or secret content outside an approved scope.
- Edit generated release artifacts directly.
- Treat repository naming or a successful prior run as an access grant.

## Stop conditions

Stop and request Mike's decision if the proposed cleanup would change authority, data class, client scope, canonical source, successor, retention, public release, deployment behavior, or access. Stop immediately on a secret, raw client data, recovery material, or cross-repository boundary finding.

## Required pull-request receipt

Every steward pull request includes:

1. the assigned work item or an explicit repository-governance marker;
2. files changed and why;
3. authority and data-class check;
4. checks run and results;
5. client, public, release, and runtime impact;
6. rollback method; and
7. unresolved owner decisions.

Receipts and validator output contain sanitized metadata only.
