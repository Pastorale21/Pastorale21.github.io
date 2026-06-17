---
name: 喫茶去
description: A warm paper-and-ink reading room for notes on Buddhism, Japanese history, and music.
colors:
  ink: "oklch(38% 0.004 90)"
  rice-cream: "oklch(96.8% 0.005 95)"
  warm-off-white: "oklch(94% 0.008 92)"
  deep-ink-surface: "oklch(20% 0.013 68)"
  terracotta-coral: "oklch(49% 0.155 33)"
  terracotta-coral-bright: "oklch(72% 0.13 35)"
typography:
  display:
    fontFamily: 'ui-serif, Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: 'ui-serif, Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  title:
    fontFamily: 'ui-serif, Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: 'ui-serif, Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: 'ui-serif, Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
spacing:
  gutter: "1rem"
  block: "1.5rem"
  list-gap: "2.5rem"
  section-gap: "4rem"
  page-top: "8rem"
components:
  tag-chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  tag-chip-hover:
    backgroundColor: "oklch(38% 0.004 90 / 0.05)"
    textColor: "{colors.ink}"
  icon-button:
    rounded: "{rounded.sm}"
    height: "36px"
    width: "36px"
    textColor: "{colors.ink}"
  icon-button-hover:
    backgroundColor: "oklch(38% 0.004 90 / 0.05)"
  post-link-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  post-link-title-hover:
    textColor: "{colors.terracotta-coral}"
---

# Design System: 喫茶去

## 1. Overview

**Creative North Star: "温暖的读物间 (The Warm Reading Room)"**

喫茶去 is a quiet, warm room made of paper and ink. The name is Zhaozhou's three-character koan, "go drink tea," and the whole surface behaves like a tea-bright study where someone reads and takes notes on Buddhism, Japanese history, and classical music. Nothing shouts. Warm cream paper holds soft charcoal type, a single terracotta accent appears only where a hand would point, and the rhythm is generous and unhurried. The mood is *simple and warm*, never clinical, never busy.

The room is deliberately under-decorated, because it will grow. Photographs are coming: a future image-led section will hang on these same walls. So the system commits to restraint that can host imagery later without redecorating. Real pictures are welcome guests; colored placeholder blocks pretending to be pictures are not.

This system explicitly rejects two things by name. It must never read as a mass-produced AI SaaS landing page (centered hero, feature-card grid, gradient accents, stock-confident sans). And it must never turn into a dark neon tech surface (deep background, glowing accents, glass panels). When a choice drifts toward either, it is wrong.

**Key Characteristics:**
- Warm paper ground, soft charcoal ink, one terracotta accent. Calm by construction.
- Serif throughout, tuned for Chinese reading, with an airy 1.9 line-height.
- Flat. Depth comes from hairline borders and tonal tints, not shadows.
- Borderless, typographic lists. No card grids.
- Built to welcome photography later without changing its bones.

## 2. Colors

A warm restrained palette: tinted near-neutrals carrying a single saturated accent, the only chroma allowed to speak.

### Primary
- **Terracotta Coral** (`oklch(49% 0.155 33)`): the lone accent, a brick-red warm coral from Maggie Appleton's salmon family that echoes the logo's dango. It appears only on interaction and emphasis: link hover, the title of a post on hover, inline-link underlines, and the inline `<mark>` highlight (a faint ~18% accent wash, never the harsh browser yellow). In dark mode it brightens to **Terracotta Coral Bright** (`oklch(72% 0.13 35)`) so it keeps its warmth against the deep ground. It is never used to fill a surface.

### Neutral
- **Ink** (`oklch(38% 0.004 90)`, approx `#353534`): the text color. A soft warm charcoal chosen deliberately so it never reads as heavy near-black. It also supplies every border and divider as a low-opacity tint (`/10`, `/15`, `/20`) and every hover tint (`/5`).
- **Rice Cream** (`oklch(96.8% 0.005 95)`, approx `#f6f5f1`): the light-mode paper. The dominant surface; everything sits on it.
- **Warm Off-White** (`oklch(94% 0.008 92)`): the text color in dark mode, slightly warm so light type still feels like ink, not LED.
- **Deep Ink Surface** (`oklch(20% 0.013 68)`): the dark-mode ground. A warm charcoal, not a cold slate or true black.

### Named Rules
**The One Chroma Rule.** Terracotta Coral is the only saturated color on any screen, and it is reserved for interaction and emphasis. If a second color or a filled accent panel appears, the room has stopped being calm.

**The Tinted Neutral Rule.** Pure `#000` and `#fff` are forbidden. Every neutral is warm-tinted toward the paper hue. Borders and tints are opacity-stepped Ink, never a separate gray.

**The Contrast Floor.** Opacity-stepped Ink is for *borders and hover tints*, not for making text quieter. Any text tint must clear WCAG AA against its ground: ≥ 4.5:1 for body and small text, ≥ 3:1 for large (≥ 18px or bold ≥ 14px). On Rice Cream that means text never drops below **Ink `/75`** (the smaller the type, the higher the floor); hierarchy steps down through *size and whitespace*, never into illegibility. "Elegant" light-gray text that fails this floor is the most common readability failure, and it is forbidden here. Dark mode (Warm Off-White on Deep Ink) clears AA comfortably at every tier, but the same floor applies.

## 3. Typography

**Body / Reading Font:** a serif stack, `ui-serif, Georgia, Cambria, "Times New Roman", "Noto Serif SC", "Songti SC", serif`. Latin falls to Georgia, Chinese to self-hosted Noto Serif SC (思源宋体). This family carries everything you *read* — article prose, list titles, the post title.

**Header Display Font:** 京华老宋体 (King Hwa Old Song), an old-style display Song, used **only in the header** (masthead + nav). Self-hosted as an ~8KB subset of just the header glyphs (`public/fonts/king-hwa-old-song.subset.woff2`); re-subset if the nav labels change. It falls back to the reading serif for any glyph outside the subset. The pairing is display-Song over text-Song — kin enough to stay coherent, different enough that the chrome has its own voice.

**Label / Code Font:** `"SFMono-Regular", Consolas, "Liberation Mono", monospace`, used only inside code blocks.

**Character:** book-like and literary. A reading-first serif voice with no display flourish, sized modestly so the page feels like a printed page, not a poster.

### Hierarchy
- **Display** (700, 1.875rem / `text-3xl`, line-height ~1.2): the single big element on an article page, the post title (`h1`). The only place type is allowed to be large and bold.
- **Headline** (700, 1rem, line-height ~1.4): structural section labels (近期文章, 联系). Small but bold; they mark structure, they do not compete with content.
- **Title** (400, 1.125rem, line-height ~1.4): the post title inside a list. Larger than body, but regular weight, so it reads as content and stays lighter than the bold masthead. Shifts to Terracotta Coral on hover.
- **Body** (400, 1rem, line-height 1.9): prose. The wide line-height is intentional for Chinese readability. Measure is capped by a `42rem` reading column.
- **Label** (700, 0.75rem / `text-xs`, letter-spacing 0.1em, color Ink `/75`): the table-of-contents marker (目录) and similar quiet kickers. Quiet comes from size and tracking, not from a contrast that drops below the floor.

### Named Rules
**The Two-Weight Rule.** The serif ships only at 400 and 700 (both Noto Serif SC and Georgia). For Chinese text `font-medium` and `font-normal` both render 400, and `font-semibold` and `font-bold` both render 700. So weight is binary: regular or bold, nothing between. Build hierarchy from size and color, not from imaginary mid-weights. To make a Chinese heading heavier, the only real lever is 700; to make it lighter, drop to 400 and let size and full-contrast color carry it.

**The Masthead-Anchor Rule.** The bold brand 喫茶去 in the header is the heaviest text in the chrome. Content titles in lists sit one size step up but stay regular weight, so they never out-shout the masthead.

## 4. Elevation

Flat by default. The room has no resting shadows. Depth is built from hairline borders (opacity-stepped Ink), tonal hover tints, and generous whitespace. A surface at rest is paper on paper.

Two deliberate exceptions exist, and they are state, not decoration:
- The **search overlay** floats above the page, so it earns a single soft `shadow-lg` plus a `backdrop-blur`. This is the one legitimate use of blur in the system.
- The **header** is a translucent frosted bar (`backdrop-blur-xs` with raised saturation) that lets paper show through as you scroll, with no shadow.

### Named Rules
**The Flat-Paper Rule.** Surfaces are flat at rest. If something has a shadow, it must be genuinely floating above the page (an overlay), not a card sitting on it. Decorative shadows and glass panels are forbidden.

## 5. Components

### Buttons
There are no marketing CTA buttons; this is a reading surface. The only buttons are **icon controls** (the light/dark/system theme toggles, back-to-top).
- **Shape:** gently squared (`0.25rem` radius), `36px` square.
- **Style:** transparent fill, 1px Ink `/15` border, Ink icon at 1.5px stroke.
- **Hover / Focus:** Ink `/5` background tint and a brief icon pulse. No lift, no color flood.

### Chips
Tag chips are the one bordered inline element.
- **Style:** transparent background, Ink text at `text-sm`, 1px Ink `/15` border, `0.25rem` radius, `4px 8px` padding.
- **State:** on hover, Ink `/5` background and full-contrast Ink text. Filter and link variants share the look.

### Cards / Containers
There are no content cards, and adding a card grid would break the system. Posts are listed as borderless typographic entries (see Signature Component). The only bordered containers are the floating search panel and code blocks, both on Rice Cream with a 1px Ink border.

### Inputs / Fields
A single search field, surfaced in the overlay (Pagefind).
- **Style:** light field, 1px border, `3px` radius, regular weight.
- **Container:** Rice Cream panel, `shadow-lg`, on a blurred backdrop, opened with `/` or Cmd/Ctrl-K and dismissed with Esc.

### Navigation
- **Header:** a frosted translucent bar, set in 京华老宋体 (the Header Display Font). On the left, a 32px logo plus the masthead 喫茶去 in `font-semibold` at `text-xl` with a touch of CJK tracking (`0.06em`) — the heaviest text in the chrome. On the right, a `text-sm` nav with editorial letter-spacing (`0.08em`): the identity themes (佛教 · 日本 · 音乐, linking to their tag pages) separated by a hairline divider from the utility links (文章, 标签). Nav links carry **no underline**; hover/focus shifts them to the Terracotta accent for feedback. The display Song over the body's text Song gives the chrome its own voice without leaving the serif genre.
- **Links:** underline at `3px` offset, decoration in Ink `/30`, deepening on hover with the text shifting toward Ink, then to Terracotta Coral for in-article links.

### Signature Component: the borderless post entry
The post list entry (`PostListItem`) is the heart of the system. It is always borderless: a **date**, the **title** (serif 400, shifting to Terracotta Coral on hover), an optional **cover image** (auto-extracted from the post's first body image, capped at `max-w-sm`, `3/2` aspect, `0.375rem` radius, 1px border), then a two-line **excerpt** (`text-sm`, Ink `/80`, clamped). It ships in two treatments, switched by a `centered` prop:

- **Featured feed (home page, `centered`):** centered and constrained to a `max-w-xl` measure, separated by `3.5rem` of whitespace. The date is a quiet kicker (`text-xs`, tracked, Ink `/75`), the title is the focal point (`text-2xl`, regular, balanced wrapping), the cover is centered. Spacious and curated.
- **Compact index (archive, tags):** left-aligned, separated by `2.5rem`. The date is `text-sm` Ink `/75`, the title is `text-lg`. Built to scan a long list.

Hierarchy here is carried by **size and whitespace**, not by fading text toward the background. The title is full-ink; the excerpt and date step down in size, not into illegibility (every tier clears the Contrast Floor below).

Both are the fogdog-inspired editorial list: image when present, plain text when not. Never a full border or box.

## 6. Do's and Don'ts

### Do:
- **Do** keep Terracotta Coral (`oklch(49% 0.155 33)`) as the only saturated color, used only for hover and emphasis.
- **Do** tint every neutral toward the warm paper hue. Borders and hover states are opacity-stepped Ink (`/5`, `/10`, `/15`, `/20`).
- **Do** set body text at 1.9 line-height and cap prose at a `42rem` reading column for Chinese readability.
- **Do** build hierarchy from size and color, because the serif only renders at 400 and 700 (the Two-Weight Rule).
- **Do** list posts as borderless typographic entries with generous whitespace, date plus title plus excerpt.
- **Do** ship real photographs when the image section arrives. One decisive picture beats a colored placeholder block.
- **Do** keep surfaces flat; reserve shadow and blur for genuinely floating overlays (the search panel).

### Don't:
- **Don't** let it read as a mass-produced AI SaaS landing page: no centered hero, no feature-card grid, no gradient accents.
- **Don't** turn it into a dark neon tech surface: no glowing accents, no glass panels as decoration, no cold slate or true-black ground.
- **Don't** use `#000` or `#fff`. Untinted neutrals are forbidden.
- **Don't** wrap posts in bordered or rounded card boxes, and never build an identical card grid.
- **Don't** fake a mid-weight on Chinese type; `font-semibold` renders the same 700 as bold and will out-shout the masthead at large sizes.
- **Don't** use side-stripe borders (`border-left`/`border-right` over 1px as a colored accent), gradient text, or decorative glassmorphism.
- **Don't** add a second accent color or fill a surface with the coral. The One Chroma Rule holds.
