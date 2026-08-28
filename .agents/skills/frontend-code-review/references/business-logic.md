# Business Logic Checklist

Canonical set of business-logic rules for frontend review. Flag every violation with urgency (urgent / suggestion) plus the file and line.

## Correctness

- **URGENT** — Validate and sanitize user input before submission or persistence.
- **URGENT** — Handle loading, empty, and error states for every async operation.
- **URGENT** — Guard against race conditions when a newer request can resolve before an older one.

## State Ownership

- **URGENT** — Do not duplicate server state in local state; derive it from the query cache.
- **Suggestion** — Keep state as close to its consumer as possible; lift only when genuinely shared.

## Security

- **URGENT** — Never trust client-side checks for authorization; enforce on the server.
- **URGENT** — Never log or expose secrets, tokens, or PII in client code.
- **Suggestion** — Escape or avoid `dangerouslySetInnerHTML` unless content is sanitized.
