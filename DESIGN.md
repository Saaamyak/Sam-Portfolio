---
name: Samyak Goel · Portfolio
description: A keynote stage for one detection & response engineer. Black ground, white type, one blue, a ridge at dawn.
colors:
  stage: "#000000"
  raised: "#111214"
  hairline: "#2a2a2d"
  ink: "#f5f5f7"
  ink-secondary: "#a1a1a6"
  ink-tertiary: "#86868b"
  ink-unlit: "#3a3a3d"
  link-blue: "#2997ff"
  action-blue: "#0071e3"
  action-blue-deep: "#0062c4"
  dawn: "#f2b48a"
  dusk-violet: "#3a3550"
  ridge-far: "#2a3346"
  ridge-near: "#06080d"
typography:
  numeral:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(5rem, 15vw, 12rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.05em"
    fontFeature: "\"tnum\""
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 8.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", \"Segoe UI\", Roboto, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  focus: "6px"
  tile: "28px"
  pill: "999px"
  portrait: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  measure: "1120px"
  section: "clamp(112px, 16vw, 200px)"
  block: "clamp(48px, 7vw, 80px)"
  tile-gap: "20px"
  tile-pad: "clamp(28px, 3.5vw, 48px)"
components:
  nav:
    backgroundColor: "rgba(0, 0, 0, 0.72)"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    height: "52px"
  nav-cta:
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 13px"
  nav-cta-hover:
    backgroundColor: "{colors.action-blue-deep}"
  link-chevron:
    textColor: "{colors.link-blue}"
  tile:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.tile}"
    padding: "{spacing.tile-pad}"
  contact-primary:
    textColor: "{colors.ink}"
  contact-primary-hover:
    textColor: "{colors.link-blue}"
  portrait:
    rounded: "{rounded.portrait}"
    size: "112px"
---

# Design System: Samyak Goel · Portfolio

## Overview

**Creative North Star: "The Keynote Stage"**

An Apple keynote page played straight for one security engineer. The ground is pure black, the type is near-white and set large, and every scroll carries one idea: a statement, a set of numbers at product-launch scale, three pillars, a list of roles, a shelf of writing. Nothing is decorated; hierarchy comes from size, weight, and three steps of grey, and the single blue exists only to say "this goes somewhere."

The only illustrative imagery is a layered mountain ridge at dawn: four flat silhouette layers (far slate to near black) over a sky that warms from black through navy into dusk violet and a low peach glow. It opens the page as a parallax hero, recurs as the lead field-note tile, and closes the page behind the contact block. Density is low and rhythm is generous: sections breathe on 112–200px of top padding inside a 1120px measure.

The world rejects the hacker-terminal portfolio (green-on-black, monospace, glitch) and the skill-percentage-bar template. Honesty about depth is expressed visually through grey steps, not badges or meters.

**Key Characteristics:**
- Pure black stage, near-white type, three greys, one link blue.
- Display type at keynote scale with tight negative tracking that tightens as size grows.
- Two-tone headlines: the second clause drops to secondary grey.
- Flat surfaces; the only raised layer is a near-black tile with a 28px radius.
- The dawn ridge is the sole illustration and the only place warm colour appears.
- Motion is scroll-bound and single-shot, with a full reduced-motion fallback that shows the final state.

## Colors

A near-monochrome stage where the only hue is a link blue and a dawn glow that never leaves the landscape.

### Primary
- **Keynote Link Blue** (link-blue): every inline and chevron link, the focus ring, the underline beneath the contact email, and text selection (at 40% alpha). It marks interactivity and nothing else.
- **Store Button Blue** (action-blue, hover action-blue-deep): the fill of the single pill CTA in the nav ("Resume"). Darker than the link blue so white text holds on it.

### Tertiary
- **Dawn Peach** (dawn) and **Dusk Violet** (dusk-violet): exist only inside the sky gradients behind the ridge (hero, lead note tile) and the favicon. Applied as radial glows at 28–42% alpha.
- **Ridge Slate to Ridge Night** (ridge-far to ridge-near, with #1a2131 and #0f1420 between): the four silhouette layers, far to near, so the nearest ridge dissolves into the black stage.

### Neutral
- **Stage Black** (stage): page ground, footer, nav tint base.
- **Tile Black** (raised): the one raised surface: bento notes and the depth range panel.
- **Hairline** (hairline): 1px rules between roles, credentials, pillars, shelf headers, footer.
- **Keynote White** (ink): headlines, numbers, emphasised phrases, nav wordmark.
- **Secondary Grey** (ink-secondary, 7.8:1 on black): ledes, body lists, nav links, the second clause of two-tone headings.
- **Tertiary Grey** (ink-tertiary, 5.7:1 on black): metadata (places, clients, issuers, tags), shelf headers, "Still ahead" prefixes, the developing tier.
- **Unlit Grey** (ink-unlit): words of the statement before scroll lights them, and the scrollbar thumb. Never resting text; reduced motion lights every word.

### Named Rules
**The One Blue Rule.** Blue means "link". No blue headings, tints, borders, or backgrounds; the nav pill is the only filled blue on the page.

**The Dawn Stays in the Landscape Rule.** Warm colour appears only behind or within the ridge. It never touches type, rules, or UI.

**The Grey Steps Rule.** Hierarchy and certainty are carried by ink, ink-secondary, ink-tertiary in that order. Less established material (the "Emerging" pillar) steps down one grey; it is not labelled with colour.

## Typography

**Display Font:** System stack led by SF Pro Display (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Segoe UI", Roboto, Arial, sans-serif`)
**Body Font:** Same stack.

**Character:** One family, Apple's own, used at extreme scale contrast: 192px numerals against 17px body. Weight does the work (700 for statements, 600 for the softened second clause, 400 for reading).

Provisional: the system stack is the shipped display voice. On Apple devices it renders SF Pro; elsewhere it falls to Segoe UI or Roboto with no self-hosted fallback, so non-Apple visitors see a different display voice. The CSP allows only 'self', so any future face must be self-hosted. Treat this as an open gap, not a rule to carry forward.

### Hierarchy
- **Numeral** (700, clamp 5–12rem, 0.86, -0.05em, tabular): the evidence numbers only. Long or compound figures (such as "0 → 1") step down to clamp 4–9rem.
- **Display** (700, clamp 2.75–6rem, 1.02, -0.04em, balanced wrap): hero name and the contact "Let's talk." (clamp 3–6rem, 1.0).
- **Headline** (700, clamp 2.5–4.5rem, 1.04, -0.035em): one per section, ending in a full stop.
- **Statement** (600, clamp 1.75–3.5rem, 1.14, -0.03em): the single scroll-lit paragraph.
- **Title** (700, clamp ~1.5–2.5rem, 1.08–1.12, -0.025 to -0.03em): role, pillar, and note titles; the lead note scales to clamp 2–3.25rem.
- **Lede** (400, clamp 1.1875–1.5rem, 1.45, -0.015em, 30–40ch): section subtitles, hero subline, fact explanations.
- **Body** (400, 1.0625rem, 1.5, -0.01em, max 52–62ch): lists and note copy. Dense lists drop to 1rem at 1.42.
- **Label** (400–600, 0.8125–0.9375rem): nav links, footer, shelf headers, tags. Sentence case; nothing is uppercased or letter-spaced open.

### Named Rules
**The Two-Tone Headline Rule.** A heading may carry a second clause on its own line or inline, set in ink-secondary (or ink-tertiary in the pillars) at weight 600. This replaces kickers, eyebrows, and subtitles above titles.

**The Tighter-As-Larger Rule.** Tracking scales with size: -0.01em body, -0.015em ledes, -0.03em titles, -0.04em display, -0.05em numerals.

## Layout

Single column, centred, 1120px measure with a fluid gutter (20–64px). Sections stack with fluid top padding (112–200px); the statement takes extra lead-in (140–260px) and the contact section extra tail (200–360px) so the closing ridge has room. Blocks inside a section start 48–80px below the headline.

Grids are asymmetric two- and three-column splits: evidence facts 5fr/6fr aligned to the baseline, roles 3fr/8fr (dates/place left, body right), pillars and writing shelves in three equal columns, credentials in two, bento notes in two with a tall lead tile spanning two rows.

At 860px and below everything collapses to one column: facts stack, pillars stack with horizontal hairlines, the range profile hides, role metadata becomes one inline row with a "·" separator, the nav keeps only Writing and Contact. At 480px the hero ridge shortens to 58% height.

The hero fills the small viewport (100svh) with copy top-anchored below the nav; the ridge occupies the lower 72%.

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth comes from three sources: tonal raise (stage black to tile black), the frosted nav (72% black with `saturate(180%) blur(20px)` and a white 8% hairline), and the parallax of the four ridge layers, which move at depths 0.12–0.55 on scroll.

### Named Rules
**The Flat Stage Rule.** Surfaces never cast shadows. If something must sit above the stage, it is tile black with a large radius, or it is frosted.

## Shapes

Two corner registers and nothing between: large soft tiles (28px) and full pills (999px, nav CTA, skip link). Focus rings round at 6px. The portrait is the only circle. Lists are not boxed; they are ruled with 1px hairlines above or between rows. Bulleted role lists use an 8px by 1.5px tertiary dash rather than a dot. The ridge silhouettes and the range profile line are the recurring organic geometry against otherwise rectilinear layout.

## Components

### Navigation
Thin and quiet, Apple-global-nav in miniature.
- **Style:** fixed, 52px, frosted black (see Elevation), hairline bottom border.
- **Content:** wordmark left (ink, 600, 1.0625rem), section links centre-right (label, ink-secondary, hover to ink, no underline), filled blue pill CTA right.
- **Mobile:** below 860px only the two primary section links remain.

### Buttons
- **Shape:** full pill (999px).
- **Primary (nav CTA):** action-blue fill, white text, label size, 5px 13px padding; hover darkens to action-blue-deep over 0.2s.
- There is no secondary button. Secondary actions are chevron links.

### Chevron Link
The signature call-to-action. Link-blue text followed by a 7×12 stroked SVG chevron (stroke 1.8, round caps) with a 6px gap. Hover underlines the text and slides the chevron 3px right on the ease-out curve. Used in groups with 12–36px gaps, sized up to 1.25rem in the hero.

### Cards / Containers (Tiles)
- **Corner Style:** 28px.
- **Background:** tile black; the lead note layers ridge-1 and a dawn glow beneath a fade to tile black, with copy bottom-anchored.
- **Shadow Strategy:** none (Flat Stage Rule).
- **Border:** none.
- **Internal Padding:** 28–48px fluid; children stack at 16px gap, trailing link pushed to the bottom.

### Depth Range Panel
A tile containing a 1.5px white elevation-profile line over a slightly lighter fill, then three pillar columns divided by vertical hairlines. Each pillar: two-tone title, then an ink-secondary list at 10px gap. The emerging pillar steps every colour down one grey.

### Evidence Fact
Giant tabular numeral (count-up once at 50% visibility, 1.4s, quartic ease-out; shows the real value without JS or with reduced motion) beside a lede-size explanation whose first phrase is set in ink at 600.

### Ruled Rows (Roles, Credentials, Shelves)
Hairline-ruled lists. Roles: dates (600, tabular) and place (tertiary) left, two-tone title, tertiary client, dashed bullet list (max 62ch). Credentials: name (1.1875rem, 600) over issuer in tertiary with an inline Verify link. Shelves: tertiary 0.875rem header over a hairline, then lede-adjacent list items.

### Statement
One paragraph at statement size, split into word spans that light from unlit grey to ink as it scrolls through 80%–45% of the viewport (0.5s colour transition).

### Contact Block
User portrait as a 112px circle (`object-position: 50% 28%`), desaturated (`grayscale(1) brightness(0.82) contrast(1.08)`), above the "Let's talk." display line, a lede, then the email as the primary link: ink text, 600, up to 2rem, with a 2px link-blue underline at 0.22em offset that turns fully blue on hover. Secondary chevron links follow. The ridge returns behind the block at 90% opacity.

Provisional: the current portrait (`/assets/SAM.jpeg`, 400×400, user-supplied) has a light background, which reads as a pale disc on the black stage even after the grey filter. A dark-ground photo is pending; the 112px circle and filter are the durable parts, the light-ground crop is not.

## Do's and Don'ts

### Do:
- **Do** keep the stage pure black (#000000) and raise only to tile black (#111214).
- **Do** reserve blue for links, the focus ring, selection, and the single nav pill.
- **Do** express hierarchy with size, weight, and the three grey steps before reaching for any new colour.
- **Do** use two-tone headings (second clause in ink-secondary, 600) instead of labels above titles.
- **Do** end section headlines with a full stop and keep them to one idea.
- **Do** rule lists with 1px hairlines (#2a2a2d) rather than boxing them.
- **Do** bind motion to scroll, run it once, use `cubic-bezier(0.16, 1, 0.3, 1)`, and show the final state under reduced motion.
- **Do** self-host any asset or face; the CSP allows only 'self' and no inline styles or scripts.

### Don't:
- **Don't** add box-shadows; depth is tonal, frosted, or parallax.
- **Don't** let dawn peach or dusk violet leave the ridge sky.
- **Don't** introduce eyebrows or kickers above headings; the two-tone headline carries that job.
- **Don't** add terminal styling, monospace display type, glitch effects, or skill-percentage bars.
- **Don't** add corner radii between 6px and 28px; tiles are 28px, controls are pills.
- **Don't** add a second illustration motif; the ridge is the only imagery besides the portrait.
