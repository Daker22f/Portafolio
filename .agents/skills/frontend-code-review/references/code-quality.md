# Code Quality Checklist

Canonical set of code-quality rules for frontend review. Flag every violation with urgency (urgent / suggestion) plus the file and line.

## Types & Contracts

- **URGENT** — No `any` in exported signatures; type props, hook returns and API payloads explicitly.
- **URGENT** — No non-null assertions (`!`) on values that can genuinely be nullish at runtime.
- **Suggestion** — Prefer discriminated unions over boolean flag soup for component state.

## Structure

- **URGENT** — No duplicated imports, unused imports, or dead code left in the file.
- **Suggestion** — Extract components over ~200 lines or with more than one clear responsibility.
- **Suggestion** — Keep data/content out of components; colocate it in a dedicated module.

## Styling

- **URGENT** — Never hardcode color utilities (`text-white`, `bg-black`, `bg-[#hex]`); use semantic design tokens.
- **Suggestion** — Compose conditional class names with a helper (`cn`) instead of string concatenation.

## Accessibility

- **URGENT** — Interactive elements need accessible names, keyboard focus, and visible focus styles.
- **URGENT** — Images need meaningful `alt`; decorative ones need `alt=""` or `aria-hidden`.
- **Suggestion** — Respect `prefers-reduced-motion` for any non-trivial animation.
