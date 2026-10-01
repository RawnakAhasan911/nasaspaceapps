# HABITAT-X — Space / Mission Resilience Frontend

This frontend is a Vite + Three.js implementation of the HABITAT-X concept, with a persistent interactive 3D celestial navigation layer behind every product tab.

## Upstream reference

HABITAT-X takes visual/interaction inspiration from the public MIT-licensed repository:
https://github.com/N3rson/Solar-System-3D

That project documents Three.js scene/camera/renderer, OrbitControls, texture loaders, UnrealBloomPass, OutlinePass, stars, planet/moon creation, elliptical orbits, shadows, asteroid belts, hover outlines and click-to-zoom/focus behavior. This project reimplements those documented concepts inside HABITAT-X rather than presenting the upstream repository as NASA software. The repository's MIT license is retained in the upstream project; review the upstream LICENSE when redistributing copied source files.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## NASA / scientific references

The frontend uses NASA/JPL-referenced planetary constants for the celestial visualization. These are visualization-grade approximate values and are not intended for spacecraft navigation.

NASA public resources intended for later backend adapters include:
- NASA Open APIs: https://api.nasa.gov/
- NASA GIBS Earth imagery services: https://gibs.earthdata.nasa.gov/
- NASA Image and Video Library API: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
- NASA 3D Resources: https://nasa3d.arc.nasa.gov/
- NASA JPL Solar System Dynamics / approximate planetary element references: https://ssd.jpl.nasa.gov/

## Important product framing

- HABITAT-X is an independent participant project.
- NASA branding is shown only for the Space Apps context; the UI does not imply NASA endorsement.
- Planetary parameters are visualization references, not precision ephemerides.
- Earth analog similarity values are explicitly labeled as demo/model values until a verified matching engine is connected.
- AI is presented as an interpreter of structured simulation output, not the numerical simulation engine.
- Crew indicators are workload/activity proxies, not medical or psychological diagnoses.

## Implementation note

The target GitHub repository was inspected through its public repository/README/package metadata. The runtime used for this build could not retrieve the repository's `src/` directory bytes directly, so this package does not claim to contain verbatim copies of unavailable upstream files. Instead, it reimplements the repository's documented feature set inside HABITAT-X: Three.js scene/camera/renderer, OrbitControls, texture loading, UnrealBloomPass, OutlinePass, starfield, planet/moon creation, elliptical orbit visualization, shadows, asteroid belts, hover highlighting, click-to-focus, and a time/speed control layer. See the upstream repository and MIT license for the original source.


## Rendering fixes / browser behavior

The landing-scene Sun uses a true 3D spherical mesh plus transparent spherical glow shells. The previous square corona artifact came from an untextured `THREE.Sprite`; that implementation has been removed. The renderer now includes an `OutputPass`, lower bloom thresholding, adaptive pixel ratio, smoother camera flight, auto-rotation, hover scaling, animated star twinkle, animated solar arcs, and WebGL-context handling.

For competition deployment, serve the project through a local/static web server rather than opening the module entry file directly. Remote NASA imagery and public APIs require network access and browser CORS support.
