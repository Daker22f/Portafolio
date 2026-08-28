# Performance Checklist

Canonical set of performance rules for frontend review. Flag every violation with urgency (urgent / suggestion) plus the file and line.

## Rendering & Memoization

- **URGENT** — Avoid expensive computations in render. Memoize derived values with `useMemo`; expensive, stable callbacks with `useCallback`.
- **URGENT** — Do not re-create large arrays/objects inline every render when they feed downstream memoized components or effects.
- **Suggestion** — Wrap pure presentational components in `React.memo` only when they receive stable props and re-render often; do not memoize everything blindly.
- **Suggestion** — Virtualize long lists (windowing) instead of rendering hundreds/thousands of DOM nodes at once.

## Effects & Subscriptions

- **URGENT** — Effects that set up subscriptions (event listeners, observers, intervals, sockets) must clean up in the return to avoid leaks/double-firing.
- **URGENT** — Do not call `setState` in a loop or synchronously inside the same effect tick without need; batch state updates.
- **Suggestion** — Debounce/throttle aggressive input handlers (search, resize, scroll) instead of running on every event.

## Assets & Async

- **Suggestion** — Lazy-load below-the-fold routes/components and heavy third-party UI with `React.lazy` + `Suspense`.
- **Suggestion** — Optimize image loading: `loading="lazy"`, `decoding="async"`, explicit dimensions to prevent layout shift (CLS).
- **Suggestion** — Preload critical fonts/assets; avoid render-blocking resources in the head.
- **URGENT** — Avoid large synchronous blobs in the main bundle; code-split vendor chunks where feasible.

## Re-render Hygiene

- **Suggestion** — Keep context providers tightly scoped; split large context to avoid re-rendering whole subtrees on unrelated changes.
- **Suggestion** — Avoid `inline` object/arrow props passed to frequently re-rendered child components unless memoized.
