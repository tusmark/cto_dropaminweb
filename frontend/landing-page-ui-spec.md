# DROPAMIN: Full Landing Page UI/UX Specification

> **Project:** Dropamin Shuffle Academy Landing Page
> **Version:** 1.0
> **Date:** 2026-05-12
> **Status:** Detailed UI/UX Specification

---

## 1. Design System & Fundamentals

### 1.1 Color Palette (Finalized)
- **Background (Primary):** `#000000` (Pure Black)
- **Background (Secondary):** `#111111` (Deep Charcoal)
- **Primary Accent:** `#6300E2` (Amethyst Purple)
- **Secondary Accent:** `#CCFF00` (Lime Green)
- **Text (Primary):** `#FFFFFF` (Pure White)
- **Text (Secondary):** `#AAAAAA` (Mid Gray)

### 1.2 Signature Gradient
- **Linear Gradient:** `linear-gradient(135deg, #6300E2 0%, #CCFF00 50%, #000000 100%)`
- **Radial Glows:** Use `#6300E2` and `#CCFF00` with 20-30% opacity as blurred background orbs to create depth in dark sections.

### 1.3 Typography
- **Headings (H1, H2, H3):** **Inter**, Extra Bold (Weight 800)
- **Subheadings / Technical Accents:** **Space Mono**, Bold (Weight 700)
- **Body Copy:** **Inter**, Regular (Weight 400) or Medium (Weight 500)
- **Buttons / Links:** **Space Mono**, Bold (Weight 700), Uppercase.

### 1.4 Spacing & Grid
- **Desktop Grid:** 12-column grid, 24px gutter.
- **Mobile Grid:** 4-column grid, 16px gutter.
- **Section Padding:** 120px (Desktop), 64px (Mobile).
- **Border Radius:** `0px` (Sharp/Aggressive) or `4px` (Minimalist).

---

## 2. Section Details

### 2.0 Navigation Bar (Global)
- **Behavior:** Sticky, with `backdrop-filter: blur(12px)` and a subtle `0.5px` border at the bottom (`rgba(255,255,255,0.1)`).
- **Logo:** `dropamin-logo-wordmark-#FFFFFF.png` (Left).
- **Links:** "O nás", "Úrovne", "Prečo Shuffle", "Komunita", "Cenník". (Right).
- **Interaction:** On hover, links turn `#CCFF00` (Lime Green) with a small `Space Mono` indicator below.

### 2.1 Hero Section
- **Height:** `100vh`
- **Background:** Dark video loop of shuffle dancers (muted) with a `#000000` overlay at 60% opacity.
- **Content:**
    - **H1:** "Drop the beat, feel the dopamine." (Inter Extra Bold, 80px).
    - **Subline:** "Shuffle dance kurzy pre každého, bez rozdielu veku." (Inter, 24px, Mid Gray).
    - **Primary CTA:** Button "ZISTIŤ VIAC" (Background: `#CCFF00`, Text: `#000000`).
- **Animation:** Text fades in from bottom; background orbs pulse slowly.

### 2.2 About Us Section
- **Layout:** 2-column (Desktop), 1-column (Mobile).
- **Visual:** Abstract photo with motion blur effect (using the Amethyst/Lime gradient as a filter).
- **Copy:** Focus on "Radosť" (Joy). Use large quotes in `Space Mono`.
- **Style:** Clean typography, plenty of white space (black space).

### 2.3 Levels Section
- **Title:** "VYBER SI SVOJU ÚROVEŇ" (H2, Space Mono).
- **Grid:** 4 cards (Začiatočníci, Mierne pokročilí, Pokročilí, Fanatici).
- **Card Design:**
    - Background: `#111111`.
    - Border: `1px solid rgba(255,255,255,0.1)`.
    - Icon: Minimalist geometric icons in Lime Green.
    - Interaction: On hover, border changes to `#6300E2` (Purple) and a glow effect appears behind the card.

### 2.4 Why Shuffle Section
- **Concept:** "Benefits that hit hard."
- **Items:**
    1. **Kardio:** "500-850 kcal per session."
    2. **Mental Health:** "Stress reduction & dopamine hit."
    3. **Community:** "New friends, new energy."
- **Style:** Vertical list with large numbering in `Space Mono` (Lime Green).

### 2.5 Community & Stories Section
- **Highlight:** Large display of **"9.47/10"** in `Space Mono`, size `120px`, with a Lime Green outer glow.
- **Social Proof:** "5/5 ⭐ Google Reviews" with 5 lime green stars.
- **Reviews:** Masonry grid of short student quotes. Cards should have a glassmorphism effect.

### 2.6 Pricing & Registration Section
- **Main Box:** High-contrast box with a `2px` Lime Green border.
- **CTA:** "ZAREGISTRUJ SA" (Button: Gradient background Purple -> Green).
- **Registration Info:** "Next batch starts: [Date]". Use technical font (`Space Mono`) for dates.

### 2.7 Blog Section (Coming Soon Preview)
- **Title:** "LATEST FROM THE SCENE" (H2, Space Mono).
- **Layout:** Horizontal scroll of 3 cards.
- **Card Content:** Category tag (Lime Green, Space Mono), Title, "Read More" arrow.
- **Background:** Deep Charcoal (`#111111`).

### 2.8 E-Shop Section (Merch Preview)
- **Title:** "DROP THE STYLE" (H2, Space Mono).
- **Layout:** Grid of 2-4 products.
- **Items:** Premium apparel with large "D" logomark.
- **CTA:** "VIEW SHOP" (Outline button, Lime Green).

### 2.9 Footer
- **Layout:** 3-column.
- **Column 1:** Logo + Slogan.
- **Column 2:** Navigation Links (Hero, About, Levels, Why Shuffle, Community, Pricing).
- **Column 3:** Socials (IG, FB, TT, YT) with custom lime green icons.
- **Contact:** "Matúš Vršanský | Žilina, Slovakia".
- **Bottom Bar:** Copyright and legal links in small text.

---

## 3. Interaction & Animation Specs
- **Scroll Reveal:** Elements should slide up slightly (20px) as they enter the viewport.
- **Cursor:** Custom circular cursor with `#CCFF00` stroke that expands when hovering over buttons.
- **Buttons:** Scale up by `1.05` on hover with a box-shadow glow.

---

## 4. Asset Manifest
- **Logos:** Located in `/home/team/shared/dropamin/assets/`
- **Hero Image:** `hero-dancer-placeholder.png`
- **About Section Visual:** `shuffle-feet-detail.png`
- **Community Visual:** `community-vibe.png`
- **Style Board / Moodboard:** `style-board.png`
- **Icons:** Custom SVG set (Geometric, Sharp).
