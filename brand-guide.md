# O-Agent brand guide

Imported from the existing O-Agent Design System local reference on 2026-11-22. These are existing brand rules, not a redesign. Read with [tokens](colors_and_type.css) and [Sankey](sankey.md) at the same Git revision.

## Content fundamentals

### Voice
- **Professional, decisive, direct** — we write from the business-owner's perspective, not the vendor's.
- **Outcome-focused.** Lead with what changes for the reader, not what we built.
- **Short sentences.** Trust the reader's intelligence.
- **No fluff, no emoji, no exclamation marks.**
- **Technical terms stay in English when clearer** — API, workflow, automation, ROAS, SKU.

### Casing
- Sentence case for UI labels and headlines. ("Connect TikTok Shop", not "Connect Tiktok Shop" or "CONNECT TIKTOK SHOP".)
- ALL CAPS is reserved for eyebrows and section tags (tracked +0.08em).
- Product names keep their brand casing: TikTok Shop, Shopee, FlowAccount.

### Pronouns
- **"You"** when addressing the operator. ("You'll see pending orders here.")
- **"We"** for O-Agent the company ("We automate what eats your mornings.").
- Avoid "I" — single-author voice feels off-brand for an agent platform.

### Bilingual behavior
- **Thai is a primary citizen.** Bilingual screens set Thai with equal or greater prominence than Latin — never as a smaller subtitle.
- **Thai-English code-switching is embraced,** not avoided: *"เชื่อมต่อ TikTok Shop ของคุณ แล้ว workflow จะเริ่มทำงานทันที"* reads as natural operator speech.
- Hierarchy pairing: Latin headline above Thai subline (or vice versa) both set in comparable weight. Avoid the common mistake of a large English headline followed by 12px Thai translation.
- Numbers are tabular in both scripts.

### Examples

| ❌ Avoid | ✅ Prefer |
|---|---|
| "Let's supercharge your store! 🚀" | "Automate what eats your mornings." |
| "Click here to get started!!" | "Connect TikTok Shop." |
| "Our AI-powered next-gen platform" | "An agent that runs ads while you sleep." |
| "Welcome to O-Agent!!!" | "O-Agent. ยินดีต้อนรับ." |

---

## Visual foundations

### Color — strict 70 / 20 / 10

**70% — surfaces & neutrals** (light to mid gray)
`--bg-base #FAF9F5` · `--gray-100 #EAEAE6` · `--gray-200 #D4D2CA` · `--gray-300 #B8B6AE`

**20% — dark charcoal** (body text, strong UI)
`--charcoal #3A3A38` · `--charcoal-warm #4A4844`

**10% — pure black** (CTAs, critical text, the logo)
`--black #0A0A09`

**Accents — under 5% combined.** A single warm terracotta family in three tones. Use one at a time, only where brand energy is required.
`terracotta-deep #8A3E2A` · `terracotta #B4553A` · `terracotta-light #D48668`

**Rule:** never use pure white. The foundation is `#FAF9F5` (warm off-white). White surfaces feel sterile and break the warmth of the system.

### Typography
- **Display** — editorial serif. Custom typeface in development. Fallback: **IBM Plex Serif** (Latin) paired with **IBM Plex Sans Thai Looped** (Thai display).
- **Body** — humanist sans. Custom typeface in development. Fallback: **Inter** (Latin) paired with **IBM Plex Sans Thai Looped** (Thai body).
- **Mono / numerals** — **IBM Plex Mono**, tabular lining figures.
- **One display size per screen**, maximum. Three body sizes: primary 16px, secondary 14px, caption 12px.
- **Thai line-height is 1.7** vs Latin 1.55 — Thai ascenders and tone marks need the extra leading.

> ⚠️ **Font substitution flag.** The brief calls for a custom bilingual pair still in development. We've substituted IBM Plex Serif + Inter + IBM Plex Sans Thai Looped as the closest Google Fonts match — same structural logic (humanist body, serif display, loop-style Thai). **Please send the custom TTFs when ready so we can swap them into `fonts/` and update `@font-face` in `colors_and_type.css`.**

### Spacing & layout
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Rule of thumb:** whatever whitespace feels comfortable, multiply by 1.5, then add 20% more.
- **Asymmetric editorial grids** over symmetric app layouts — content aligns to a 12-col grid but rarely fills it. Leave a column empty on purpose.
- **Max line length** for prose: ~68 characters.

### Backgrounds
- Solid `--bg-base`. **No gradients.** Ever.
- **No stock photography.** When we use imagery: low-saturation, cinematic, documentary feel. Slight grain acceptable.
- **No decorative illustration.** No hand-drawn icons from whimsical sets.
- Full-bleed imagery is acceptable for marketing hero panels but desaturated and usually overlaid with a `rgba(10,10,9,0.35)` wash.

### Transparency & layering — our signature
- Panels stack at **60–85% opacity** with a subtle `backdrop-filter: blur(12px)`.
- Use transparency to suggest depth where a shadow would feel heavy.
- Never nest three transparent panels — it turns muddy.

### Shadows
Three tiers, all soft:
- `--shadow-sm` — 2px + 6px blur, ~5% black.
- `--shadow-md` — 6px + 18px blur.
- `--shadow-lg` — 14px + 40px blur.

**Never a hard drop shadow.** Never colored shadows.

### Borders & dividers
- **1px at 10% opacity, never heavier.** `--divider: rgba(10,10,9,0.10)`.
- Prefer whitespace to a divider; prefer a divider to a box.
- No outlined cards. Let the shadow and transparency do the separation work.

### Corner radii
- `4–8px` range. `--radius-sm (4px)` for inputs and buttons, `--radius-md (6px)` for cards, `--radius-lg (8px)` for modals and hero panels.
- **Pill radii only when functional** (tag chips, toggle handles). Never for buttons.

### Buttons
- **Primary:** solid black (`--black`), warm off-white text, 4px radius. No gradient. No shadow. No icon by default.
- **Ghost:** transparent, 1px 10%-opacity border, charcoal text. Hover fills with `--gray-100`.
- **Text:** no background, underline drawn at 30% opacity that deepens on hover.
- **Hover = opacity 0.88 or a neutral fill, never a color flash.**
- **Active = 2px scale inset, no bounce.**

### Cards
- Background `--panel-85` (85% warm off-white over whatever's behind).
- `backdrop-filter: blur(12px)`.
- `--shadow-sm`. No border.
- 24px internal padding, minimum.

### Icons
See the **Iconography** section below.

### Motion
- **200–300ms ease-out** for micro-interactions (default 220ms).
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` — confident stop, no overshoot.
- **No bounces, no elastic, no spring overshoot.**
- **Cross-fades preferred** over slide transitions.
- Loading: opacity pulse at 1.4s, never a colored spinner.

### Hover & press states
- **Hover:** opacity to 0.88, OR fill `--gray-100`. Never a color flash, never a shadow bloom.
- **Press:** no visual change beyond a 1-frame inset of 2px (optional). Don't shrink the element — it reads as toylike.
- **Focus:** 2px `--charcoal` outline with 2px offset, square corners. Only visible via `:focus-visible`.

### Use of blur / transparency
- **When:** floating panels, sticky toolbars over content, modals, command palettes.
- **Not when:** the content behind is critical to read (forms inline), or on a solid brand surface — it adds noise without depth.

### Imagery tone
- Warm-neutral color grade. Desaturate to ~70%.
- Shadows crushed slightly (lifted blacks = lifted brand).
- Never high-contrast Instagram-style edits. Never cyan/orange teal-and-orange grade.

---

## Iconography

The system uses **Lucide Icons** as its foundation — thin 1.5px strokes, rounded joins, monochromatic. This aligns with the brief (thin stroke 1.5 px, rounded joins, monochromatic) and is CDN-available, so we don't self-host.

- **Source:** `https://unpkg.com/lucide-static@latest/icons/<name>.svg` for direct SVG, or `lucide` React bindings for JSX.
- **Stroke:** 1.5px at 24×24. Do **not** thicken to 2px — it feels consumer.
- **Color:** always `currentColor` so icons inherit `--fg-2` by default.
- **Filled icons are forbidden.** Stick to outline.
- **Size scale:** 16 / 20 / 24 / 32. Anything larger becomes illustration, not icon.

**Emoji are forbidden** in product UI and marketing copy. They conflict with editorial tone and render inconsistently across Thai/Latin fallback chains. The only exception: user-generated content we're rendering back (e.g. an operator's TikTok caption).

**Unicode glyphs as icons** are acceptable sparingly — e.g. `↗` for external link, `→` for next, `·` for separators. Use them in-line with text at the same weight.

**Copied into `assets/`:**
- `logo-mark.png` — original upload from `uploads/Document.png`.
- `logo-mark.svg` — vectorized single-color mark, inherits `currentColor`.
- `logo-wordmark.svg` — horizontal lockup (mark + "O-Agent" wordmark in IBM Plex Serif).

> ⚠️ **Logo flag.** The SVG is an approximation of the uploaded raster mark. If the user has the original vector, drop it at `assets/logo-mark.svg` and it will cascade through every card and kit.

---

## Do and don't

**Do**
- Editorial whitespace — trust the silence.
- Layered transparency — 60–85% panels on warm off-white.
- Thai and Latin as equals — never Thai as a smaller afterthought.
- One display size per screen.
- Confident stops in motion — no bounces.

**Don't**
- Gradient backgrounds.
- Decorative illustrations.
- Playful or novelty icons.
- Stock photography.
- Excessive accent color (under 5% combined, one at a time).
- Pure white surfaces.
- Bouncy or elastic animations.
- Emoji in product UI.
- Pill-shaped buttons (unless functionally a tag).

---
