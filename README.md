# O-Agent Operator Console

High-fidelity recreation of the internal AI agent console O-Agent operators use to run TikTok Shop / Shopee / TikTok Ads / FlowAccount workflows for Thai SME clients.

## Screens included

1. **Dashboard** — a client's live metrics overview with multi-platform KPI cards, running workflows, and the agent's recent decisions log.
2. **Agent conversation** — chat surface where the operator instructs the agent in Thai/English code-switched prose; the agent asks for confirmation before writing to marketplace APIs.
3. **Campaign list** — a spreadsheet-dense view of active TikTok Ads campaigns with inline pause / adjust controls.
4. **Settings** — workspace + integrations screen.

## Components

Factored JSX components live at the top level of this folder:

- `Sidebar.jsx` — fixed nav, includes the O-Agent mark, workspace switcher, and navigation.
- `TopBar.jsx` — breadcrumb + workspace meta + search.
- `KpiCard.jsx` — tabular-numerals metric card with delta.
- `WorkflowRow.jsx` — running-workflow row with status dot + last action.
- `AgentMessage.jsx` — chat bubbles (operator / agent), including the agent's structured "tool call" blocks.
- `CampaignTable.jsx` — dense list with status, platform badge, ROAS, spend, action.
- `Button.jsx`, `Input.jsx`, `Tag.jsx` — primitives.

## Interactions

The `index.html` wires up:
- A tab switcher between Dashboard / Agent / Campaigns / Settings (cross-fade, ~220ms).
- The Agent screen lets the operator type a prompt and receive a scripted response.
- Campaigns table lets you toggle pause/live on any row.

## Caveats

- Built from the brand brief's description of the tool, not an existing codebase. Treat as a visual anchor. The flows are mocked, not wired to marketplace APIs.
- Lucide icons inlined as SVG to avoid a runtime dependency.

## Shared O-Agent Design references

- [Brand guide](brand-guide.md): existing visual and voice rules.
- [Sankey standard](sankey.md): quantity-flow, brand mapping, data validation and accessible interaction.
- [Skill entrypoint](SKILL.md) and [tokens](colors_and_type.css).

Mac and Cloud should read this set at the same Git commit. Publishing references does not install skills, refresh consuming projects or deploy Console. Preserve existing cloud work and inspect its brand sync/check commands before refreshing snapshots.
