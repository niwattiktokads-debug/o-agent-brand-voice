# Sankey — O-Agent Design

Updated: 2026-11-22
Status: shared specification; not an implemented or visually approved component
Owner: O-Agent Design; Vanta owns visual direction, Kairo owns final wording
Controller / document verifier: Codex
Approval: Boss authorized adding Sankey to O-Agent Design; no publish or deploy

## Scope and integration

Reusable quantity-flow pattern for O-Agent dashboards, including Console. This specification adds a design-system reference only. It does not change Console, connect DataGlass, or synchronize the cloud worktree.

Source of truth for brand: [brand guide](brand-guide.md) and [design tokens](colors_and_type.css). Keep fonts, colors and component values there rather than introducing a second palette. Use [the skill entrypoint](SKILL.md) when applying this pattern.

Method reference: the `diagram-design` skill, `references/type-sankey.md`. Interface review: the `better-interface` skill. Resolve these skills through the shared skill library rather than assuming Mac paths exist on Cloud: https://github.com/niwattiktokads-debug/shared-agent-skills . If unavailable, report the missing dependency; this document remains readable independently.

Prior concept: the local O-Agent Profit Flow synthetic prototype. It is not a brand authority or verified financial source. DataGlass supplied conceptual references only; its branding and source code are not part of this pattern.

## Shared use on Mac and Cloud

Read `SKILL.md`, `brand-guide.md`, `colors_and_type.css` and this file from the same Git commit. Record that revision in the consuming project's brand-source manifest or handoff. Both clients can read these files through authenticated GitHub access; installation and automatic synchronization are separate and are not established by this document.

Preserve uncommitted work before refreshing any reference copy. Inspect the consuming project's existing `brand:sync` and `brand:check` implementation before running either command. Do not invent commands or assume the cloud worktree has been committed. No automatic sync, Console modification or deployment is configured here.

## When to use

Use Sankey when one measurable quantity splits or merges and the reader needs to compare amounts. Use a process diagram for steps without quantities, and a table when it explains the result more clearly.

A compact financial overview uses three stages: sales sources → net sales → identified costs and contribution. Show discounts and returns in a linked reconciliation detail rather than mixing gross and net flows. This is not automatically a cash-flow statement or net accounting profit.

## Brand mapping

- Inherit the warm base surface and charcoal foreground from the existing tokens.
- Use neutral ribbons and bars. Reserve the existing terracotta family for limited emphasis; never assign a rainbow of platform colors. Keep the existing accent-area budget. If a ribbon would exceed it, emphasize its label or selection outline instead.
- Use the existing Thai/body fonts for names and the numeral font for values. Thai remains equally prominent. Inherit the existing 16 / 14 / 12 text scale; do not shrink labels to fit the graph.
- Inherit spacing, focus and motion from the README. No gradients, arrowheads, decorative icons or bouncing motion. No new global tokens are introduced here.
- Provide a heading, period, unit, source status, graph, readable values table and detail panel. Reuse existing product components when integrating.

## Geometry and quantities

Apply the referenced Sankey method: three stage columns, at most eight nodes and twelve ribbons per view. Split larger graphs into linked overview/detail views.

Use one common quantity-to-pixel scale across the graph. Node heights and ribbon widths must conserve the same quantities. Keep original numbers unchanged when rounding rendering coordinates and reconcile rounding at each node. Aggregate very small flows into an explicitly labelled “อื่น ๆ”, retaining the full breakdown in the table; do not silently inflate tiny values for visibility.

Use closed curved ribbons joining vertical bars horizontally, with non-overlapping attachment ranges. Minimize crossings. Place labels on clear space outside the ribbons. Always show exact values in the table, including any aggregation.

## Data contract

Require source label, period, currency/unit, measurement basis, demo flag, and stable node/link identifiers. Every link must have valid endpoints and a finite nonnegative value. Reject duplicate identifiers, unsupported cycles, missing amounts and inconsistent balances. Unknown is not zero.

Use integer satang for THB reconciliation. Do not mix currencies, money and order counts, or order-based and settled amounts in one scale. Every intermediate node must reconcile incoming and outgoing values. Show the denominator for each percentage.

Negative profit is a valid result but never a negative-width ribbon. Prefer a separate labelled loss summary or waterfall detail. If an explicit balancing input is used, label it as a mathematical balancing amount, never revenue or cash, and disclose it beside the graph.

“Settled” does not by itself prove cash receipt. Label contribution as “กำไรหลังต้นทุนที่ระบุ” and disclose excluded costs such as VAT or fixed overhead when applicable. Do not fabricate daily or SKU detail from aggregate totals.

## Interaction and accessible alternatives

- Selection by pointer and keyboard reveals the same amount, percentage denominator, calculation and source. Touch users must not depend on hover.
- Provide visible focus and meaningful accessible names. A static SVG has a title and description; interactive elements require their own semantics.
- Always offer a values table containing all flows. Meaning must not depend on color alone.
- At 320px width and 200% zoom, preserve readable labels and controls. If the graph scrolls, show a clear scroll cue; the surrounding page must reflow.
- Keep loading, no data, zero values, invalid input and loss distinct. Preserve the last valid dataset after an invalid import.
- Respect reduced motion. Changes remain understandable without animation. Verify text contrast and meaningful graphical boundaries in the rendered component; brand tokens alone do not establish accessibility.

## Voice and sample copy

Follow the README voice: direct, professional, outcome-first, short Thai-first sentences. Explain the result and the next action without hype.

| State | Suggested copy |
| --- | --- |
| Heading | ยอดขายไปไหน เหลือกำไรเท่าไร |
| Demo | ข้อมูลจำลอง — ยังไม่เชื่อมข้อมูลจริง |
| Missing data | ยังไม่มีข้อมูลในช่วงนี้ เลือกช่วงเวลาอื่น |
| Invalid import | ยอดรวมไม่ตรงกับรายการ ตรวจยอดในไฟล์แล้วลองอีกครั้ง |
| Detail action | ดูที่มาของยอด |
| Limited profit measure | กำไรหลังต้นทุนที่ระบุ |

These are implementation examples, not a claim of Kairo review.

## Synthetic acceptance example

Unit: THB. Basis: orders. All figures are synthetic net sales after discounts and returns.

| Source | Destination | Amount |
| --- | --- | ---: |
| ร้าน A | ยอดขายสุทธิ | 60,000 |
| ร้าน B | ยอดขายสุทธิ | 40,000 |
| ยอดขายสุทธิ | ต้นทุนสินค้า | 50,000 |
| ยอดขายสุทธิ | ค่าธรรมเนียมและขนส่ง | 15,000 |
| ยอดขายสุทธิ | ค่าโฆษณา | 10,000 |
| ยอดขายสุทธิ | กำไรหลังต้นทุนที่ระบุ | 25,000 |

Both sides reconcile to 100,000 THB; contribution is 25% of net sales. This seven-node, six-link example fits the overview budget. It is not company financial evidence.

## Adoption and verification

1. Read this reference with the brand README and tokens at the same chosen revision.
2. Obtain Vanta visual direction before implementation; use Kairo for final product copy. Vanta's required local skill was unavailable during this document addition, so visual approval remains pending.
3. Map existing Console components and data definitions without replacing routes or business logic. Inspect the cloud brand package before using its sync/check commands; they have not been verified here.
4. Test reconciliation, zero, missing/invalid values, loss, small-flow aggregation and filters. Verify keyboard/touch, narrow width, zoom, reduced motion, contrast and table parity against the rendered component.
5. Record the exact source revision and checks. A document check is not visual QA, integration readiness or production approval.

Current verification covers document links, source-token existence and the synthetic example only. No UI component, screenshot, live integration or deployment is included.
