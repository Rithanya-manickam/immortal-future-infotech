
# IFIT — Content Integration, Homepage Refresh & Multi-Page Build

## 1. Homepage refresh

**Remove** the current 3D "AI Core" orb (the rotating/pulsing sphere below the hero copy where "Scroll to enter · AI Cloud Finacle Security" sits). Replace the right-side hero visual with an editorial **image collage** — a large hero image + 2 stacked accent tiles, layered with subtle parallax and a glass frame. No orbiting rings, no distorted sphere.

**Suggested imagery** (I'll generate all of them, no stock needed):
- Hero right: a cinematic close-up of a modern Indian bank branch interior with soft emerald light and a translucent data overlay.
- Accent 1: abstract macro of a green circuit board with a phoenix-shaped light trail (echoes the logo).
- Accent 2: a hand on a laptop with a Finacle-style dashboard glowing on screen, warm ambient light.
- Section headers will also get bespoke images: AWS server room (emerald tint), hospital IoT bedside device, banking staff training, cybersecurity SOC wall.

**Homepage rewrite** using real IFIT content:
- Hero: "Technology lives forever." + subline about AI-first banking automation, Finacle, AWS.
- Trust bar: Finacle Certified · AWS Technology Partner · NASSCOM · MCA · MSME.
- Products strip: **IIS** and **ASKBOT** with outcomes (80% manual reduction, 3× onboarding).
- Journey: real timeline — May 2024 founded → June 2024 first Finacle client → Aug 2024 IIS → Oct 2024 ASKBOT → Dec 2024 AWS Partner → Mar 2025 Pan-India.
- Expertise: 6 pillars (AI Banking, Finacle, AWS Cloud, Cyber Security, IoT, Enterprise Networking).
- Stats: 1 Yr operational, 50+ projects, 20+ clients, 3 verticals, 80% avg effort reduction.
- Featured case studies: EOD Automation, ASKBOT, AWS Migration (linking to Portfolio page).
- CTA + Footer with HQ (Tiruchirapalli).

## 2. New pages (each on its own route, tight above-the-fold, minimal scrolling)

```
src/routes/
  index.tsx          Home (refreshed)
  about.tsx          Company story, mission, values, certifications, timeline
  services.tsx       All 18 services in a filterable grid
  products.tsx       IIS + ASKBOT deep dive (two hero panels)
  portfolio.tsx      Case studies grouped: Banking / Healthcare / Enterprise
  contact.tsx        Form + HQ details + map placeholder
```

Each page:
- Owns `head()` with unique title, description, og:title, og:description (+og:image where a hero image exists).
- Uses a compact **hero + 1–2 content bands + CTA** rhythm so scrolling is short.
- Reuses the shared Navbar, BackgroundFX, Footer, cursor, theme.
- Navbar links updated: Home · About · Services · Products · Portfolio · Contact (replaces the current hash anchors).

## 3. UI / UX rules applied
- One H1 per page, semantic sectioning, alt text on every image.
- Emerald/teal design tokens already in place — no hardcoded colors.
- Motion is restrained: fade/slide on scroll, magnetic links, no infinite spinners.
- Dark + light mode parity preserved.
- Mobile: single column, images become 16:9, nav collapses.

## 4. Technical notes
- Image generation via `imagegen` (fast tier) into `src/assets/`, then uploaded via `lovable-assets` CLI so the repo stays light.
- Timeline uses the existing GSAP horizontal-pin section, repopulated with real dates.
- Services page uses a bento grid with category filter chips (client-side state only).
- All new routes are static — no server functions, no Cloud needed.
- Delete `src/three/AICoreScene.tsx` and its lazy import from `Hero.tsx`; drop `@react-three/*` and `three` from imports (packages can stay installed).

## 5. Out of scope (unless you ask)
- Backend / database / auth / forms that actually send.
- Blog, careers, legal pages.
- Animated Finacle product demo videos.

Approve and I'll build it in one pass, verifying the build at the end.
