# chudinov.info

Personal site for **Alexey Chudinov** — AI architect, and a left-handed 5-string bluegrass banjo player.

A two-sided "business card": one domain, two worlds. The **Builder** face and the **Music** face share a persistent header and an animated switch — turn the card over to cross between them. Default lands on the Builder side and remembers your last choice; `#builder` / `#music` deep-link directly to a side.

Built with [Astro](https://astro.build) — static output, no runtime dependencies.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # preview the built site
```

## Structure

```
src/
  layouts/Base.astro        <head>, meta, Open Graph tags
  components/
    TopBar.astro            persistent header + flip switch
    BuilderFace.astro       the AI-architect side
    MusicFace.astro         the banjo side (tablature + fretboard)
  pages/index.astro         assembles the two-sided card
  scripts/flip.js           the flip / side-switch controller
  styles/global.css         tokens, layout, the switch, reduced-motion
```

## Notes

- Accessible: keyboard-operable switch, focus management, `prefers-reduced-motion` fallback, alt/aria on visuals.
- The banjo photos/tablature reflect a left-handed-relearning journey; the fretboard defaults to the left-handed orientation with a Right/Left toggle.
