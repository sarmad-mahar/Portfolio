# Sarmad Mahar Portfolio

## Implementation

A dependency-free static website designed for GitHub Pages under `/Portfolio/`. The site uses `index.html`, `styles.css`, and `script.js`, with hash-based navigation so the same files work on a project subpath without server-side rewrites. The page includes home, about, work/interests, blog, CV, and contact views, rendered as sections with progressive enhancement and accessible buttons/links. Blog posts are represented in a small JavaScript data collection so new posts can be added without changing the layout. Umami is loaded with the supplied website ID.

Project structure:
- `index.html`: semantic shell, metadata, Umami script, section content, and structured navigation.
- `styles.css`: responsive editorial layout, iPhone-inspired glass surfaces, light/dark themes, typography, motion, and mobile adaptation.
- `script.js`: theme persistence, hash navigation, blog filtering/detail modal, scroll state, and small interaction enhancements.
- `assets/Sarmad_white_bg.png`: supplied profile image used in the hero, about section, and favicon.

## Design direction

- **Design movement:** editorial digital research lab with iOS glassmorphism and quiet Swiss-inspired information design.
- **Core principles:** evidence-led, spacious, tactile, and human. Content should feel like a field notebook made precise for the web.
- **Color philosophy:** deep mineral blue-black and graphite create a night-sky research atmosphere; pale mist and white preserve clarity in light mode; one ownable electric teal accent signals climate, maps, and living systems.
- **Layout paradigm:** asymmetric split-screen composition with a fixed right-side vertical navigation rail, oversized editorial type, and flowing section blocks rather than a conventional centered portfolio grid.
- **Signature elements:** translucent glass cards with soft edge highlights, a small “field note” eyebrow system, and topographic contour-line decoration.
- **Interaction philosophy:** navigation is calm and obvious, filters are immediate, and details reveal progressively without surprise. Theme preference and the selected section persist.
- **Animation:** short 180–500ms transitions, gentle orbital glows, card lift on hover, and reduced-motion support. No continuous animation is required to understand content.
- **Typography:** Manrope for UI and body text; Space Grotesk for display headlines and labels. A restrained uppercase mono treatment is used for metadata.
- **Brand essence:** Sarmad Mahar is an environmental researcher and spatial storyteller translating climate evidence into useful, visual, human action. Personality: curious, grounded, multidisciplinary.
- **Brand voice:** clear, observant, and quietly ambitious. Example lines: “Research that stays close to the ground.” and “Maps, measurements, and stories for a livable future.”
- **Wordmark & logo:** a compact `SM/` monogram formed as a split contour mark, paired with the name and a small “environmental field notes” descriptor.
- **Signature brand color:** `#5eead4` mineral teal.

## Constraints and future-ready behavior

- The CV download action is a prepared placeholder until the user supplies a PDF; the UI explains that the downloadable CV is coming soon.
- Contact uses ordinary mail/WhatsApp/LinkedIn links, avoiding a backend requirement.
- External social links are supplied by the user. The WhatsApp link uses the international number format.
- The supplied profile image is reused as provided; no lookalike generation is used.
- The Umami snippet is embedded exactly with the supplied website ID.
