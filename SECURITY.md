# Security

Do not open a public issue for a suspected vulnerability, exposed credential, client-data leak, or authorization defect. Use the approved private security channel and stop work that could expand exposure.

Repositories must not contain secret values. Use approved secret managers and deployment environments. Version only secret names, scopes, and setup instructions.

Client repositories must not contain raw participant, assessment, HR, financial, or source-system data. Store those records in the authorized data plane and reference controlled identifiers only.

Repository visibility is not a client-isolation mechanism. A repository containing one client's private material must not contain another client's private material.

If a secret, client record, recovery material, or authorization defect is discovered, do not copy it into an issue, log, receipt, pull request, or agent output. Stop and escalate to Mike.
