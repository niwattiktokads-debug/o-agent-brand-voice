---
name: o-agent-design
description: Use this skill to generate well-branded interfaces and assets for O-Agent Co., Ltd., either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping bilingual (Thai/English) editorial-minimalist interfaces.
user-invocable: true
---

Read `README.md` and `brand-guide.md`. `colors_and_type.css` holds the tokens. In this repository, logos, HTML references and the operator-console JSX examples are at the repository root. For Sankey and quantity-flow dashboards, also read `sankey.md`. Read all references at the same Git revision; no local Mac path is required.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (what product surface, Thai-only / English-only / bilingual, marketing vs operator UI), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

Key rules to internalize before designing:

- **70 / 20 / 10 color ratio** — 70% neutrals, 20% charcoal, 10% pure black. Accents under 5%.
- **Never pure white** — the background is `#FAF9F5`.
- **No gradients. No stock photo. No emoji. No bouncy motion.**
- **Thai is a primary citizen** — equal or greater prominence than Latin, never a smaller translation.
- **One display size per screen.** Three body sizes max: 16 / 14 / 12.
- **Dividers: 1px at 10% opacity, never heavier.**
- **Icons: Lucide, 1.5px stroke, outline only.**
- **Motion: 200–300ms ease-out, confident stop.**
