<p align="center">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://raw.githubusercontent.com/Nxtspace/Nxtspace-Web/main/icon.ico" alt="Nxtspace logo">
  </a>
</p>

<h2 align="center">Nxtspace Web</h2>

<p align="center">
  <a href="https://nxtspace.github.io/Nxtspace-Web/" target="_blank">
    🚀 Live Preview
  </a>
</p>

<p align="center">
  🌐 <a href="./README.md">English</a> | <a href="./README.zh-CN.md">简体中文</a>
</p>

---

![React](https://img.shields.io/badge/React-v19.2.5-61DAFB?logo=react&logoColor=white&style=flat-square) ![Vite](https://img.shields.io/badge/Vite-v8.0.10-646CFF?logo=vite&logoColor=white&style=flat-square) ![Three.js](https://img.shields.io/badge/Three.js-v0.183.2-000000?logo=three.js&logoColor=white&style=flat-square) [![Leafer](https://img.shields.io/github/v/release/leaferjs/leafer?label=Leafer&color=34d399r&style=flat-square)](https://www.leaferjs.com/) ![React](https://img.shields.io/badge/Typescript-v6.0.2-007ACC?logo=typescript&logoColor=white&style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.3.0-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) ![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-v4.14.1-000000?logo=shadcnui&logoColor=white&style=flat-square)

### Introduction

---

Nxtspace Web is a 3D scene-building tool for the architecture industry. Built entirely on web technologies, it runs directly in the browser with no installation required.

**Core capabilities:**

- **2D floor plan drafting**: walls / arc walls / doors & windows / regions, with snapping, vertex editing, dimension annotations, and reference lines / reference images to efficiently recreate any floor plan.
- **Real-time 3D visualization**: drawings in 2D instantly generate a 3D scene with three rendering styles — realistic, white-model, and wireframe. Quickly switch between dollhouse mode, walk mode, and multiple camera views.
- **Rich component & model library**: built-in structural components plus a categorized indoor model library, with support for custom model import (GLB / ZIP).
- **Multi-format import & export**: NXTS project files, GLTF / GLB / OBJ 3D models, and PNG screenshots, for easy integration with other toolchains.
- **Multi-platform support**: full-featured experience on desktop browsers, with touch-friendly operations on phones and tablets.

Whether you are an architect, interior designer, real-estate planner, or product demonstrator, you can get started with zero learning curve and quickly produce interactive, shareable 3D architectural scene demos.

### Models

---

Nxtspace Web supports importing and managing 3D model assets, providing a rich model library for architectural scene building.

Currently, it supports free model resources from Sweet Home 3D, including:

- Furniture models
- Interior decoration models
- Lighting models
- Plant models
- Kitchen models
- Bathroom models
- Door & window models
- Architectural component models

Model sources:

- Sweet Home 3D official free model library
- User-defined 3D models

Sweet Home 3D free models:

https://www.sweethome3d.com/freeModels.jsp

### Features

---

Tips: ⚪ Planning 🟡 In progress 🟢 Done

- 🟢 Editor core
  - 🟢 2D floor plan
    - 🟢 Wall drawing (straight walls / arc wall one-click conversion, cancellable mid-drawing)
    - 🟢 Door and window openings (auto-cut when inserted into walls, single-leaf door / double-leaf door / doorway / multiple styles)
    - 🟢 Region drawing (closed rooms auto-calculate area, polygon regions supported)
    - 🟢 Furniture placement (drag models into the scene + real-time snapping & alignment + landing-point preview)
    - 🟢 Vertex editing (drag wall endpoints / corners to fine-tune, walls auto-recalculate)
    - 🟢 Dimension annotations (wall length / angle shown in real time, independent show/hide toggle)
    - 🟢 Reference lines (horizontal / vertical guides, customizable color, layer-managed)
    - 🟢 Reference images (use CAD / floor plans / any image as a tracing underlay, with zoom / pan / opacity controls)
    - 🟢 Grid and rulers (grid toggle + snapping, rulers sync with zoom / pan)
    - 🟢 Right-click menu (context actions: copy / paste / delete / group / properties / rename)
    - 🟢 Interactive minimap thumbnail (drag the focus frame to pan the main scene, scroll-wheel zoom anchored on the cursor)

  - 🟢 3D visualization
    - 🟢 One-click 2D / 3D view switching
    - 🟢 Orthographic / perspective projection toggle
    - 🟢 Quick view switching (front / side / top / bottom / left / right / isometric)
    - 🟢 View-cube helper (bottom-right cube, click a face / edge / corner to switch the view)
    - 🟢 Dollhouse mode (auto back-face culling of walls based on camera position, see interior when looking from above)
    - 🟢 Walk mode
      - 🟢 First-person (mouse lock + WASD movement)
      - 🟢 Third-person (orbit camera around the target)
    - 🟢 Rendering styles
      - 🟢 Realistic (PBR materials & textures + lighting)
      - 🟢 White-model (materials + wireframe overlay)
      - 🟢 Wireframe (pure wireframe mode)
    - 🟢 Sky and ground (solid color / texture, 50+ texture options)
    - 🟢 Right-side 3D real-time preview
    - 🟢 3D scene thumbnail

  - 🟢 Read-only preview
    - 🟢 3D viewing (no editing operations)
    - 🟢 Search & locate, view switching, stylized rendering

- 🟢 Component library & models
  - 🟢 Structural components
    - 🟢 Walls (thickness / height / material defaults)
    - 🟢 Door openings (single-leaf door / double-leaf door / no door)
    - 🟢 Windows (size / sill height / style adjustable)
    - 🟢 Regions (parameterized room defaults)

  - 🟢 Indoor model library
    - 🟢 Category browsing (living room / bedroom / kitchen / bathroom / office / other)
    - 🟢 Search filtering (quickly find components by name)
    - 🟢 Custom model import (upload GLB / ZIP packages, set size, category, and name)

- 🟢 Editing & operations
  - 🟢 Basic operations
    - 🟢 Pointer tool (switch back to selection state, exit drawing mode)
    - 🟢 Select (multi-select / box-select / point-select / invert selection)
    - 🟢 Move, rotate, scale (three-axis Gizmo handles)
    - 🟢 Delete
    - 🟢 Copy, cut, paste (with landing-point preview, pasted items are offset to avoid overlap)
    - 🟢 Undo / redo (up to 50-step history stack)
    - 🟢 Global component search (search all floors' walls / openings / furniture / regions, locate + auto-select + focus)
    - 🟢 Quick floor switching (dropdown selector + search filter, jump across floors for editing)

  - 🟢 Groups & layers
    - 🟢 Component grouping (create logical groups from selected elements, operate as a whole)
    - 🟢 Ungroup
    - 🟢 Multi-floor layers (independent editing, switching, and visibility control)
    - 🟢 Element group list (hierarchical tree-style management)

  - 🟢 Auto-snapping
    - 🟢 Vertex snapping (auto-align to endpoints / corners)
    - 🟢 Edge snapping (stick to wall edges)
    - 🟢 Segment snapping (align to full segment length)
    - 🟢 Grid snapping (align to integer steps)
    - 🟢 Reference-line snapping (magnet to guides)
    - 🟢 Snapping toggles (master switch + individual configuration)

- 🟢 Scene & properties
  - 🟢 Right-side shortcut tools
    - 🟢 Zoom in / zoom out buttons
    - 🟢 Focus selection / focus all button
    - 🟢 Snapping sub-panel (5 independent checkboxes: point / line / segment / grid / reference line)

  - 🟢 Properties panel
    - 🟢 Wall properties (thickness / height / arc subdivision / color / material)
    - 🟢 Door & window properties (size / opening direction / style / sill height)
    - 🟢 Furniture properties (size / rotation / position / replace model)
    - 🟢 Region properties (name / color / material)
    - 🟢 Group properties (overall scale / rename)

  - 🟢 Scene settings
    - 🟢 Scene size (length / width)
    - 🟢 Sky (color / texture, 2 modes, 7+ sky textures)
    - 🟢 Ground (color / texture, 2 modes, 60+ ground / wall / floor textures)

  - 🟢 Wall defaults
    - 🟢 Wall visibility (back-face culling toggle)
    - 🟢 Auto-close (auto-connect start and end while drawing)
    - 🟢 Ghost walls (auxiliary preview mode)
    - 🟢 Default height
    - 🟢 Default opacity
    - 🟢 Units (centimeters / meters)
    - 🟢 Interior material textures (40+ wall textures)
    - 🟢 Exterior material textures (40+ wall textures)

  - 🟢 Region defaults
    - 🟢 Name prefix (auto-name new regions)
    - 🟢 Fill mode (solid color / texture)
    - 🟢 Fill color
    - 🟢 Ground textures (60+ ground / floor textures)
    - 🟢 Opacity

- 🟢 Files & data
  - 🟢 Import
    - 🟢 NXTS format (project file)

  - 🟢 Export
    - 🟢 NXTS format (complete project JSON, full-scene download)
    - 🟢 GLTF format (JSON structure with separate textures)
    - 🟢 GLB format (single binary file with embedded textures)
    - 🟢 OBJ format (pure geometry export)
    - 🟢 2D / 3D screenshot (PNG format, auto-named download)

  - 🟢 Project management
    - 🟢 New project
    - 🟢 Save
    - 🟢 Rename project
    - 🟢 Clear scene
    - 🟢 Unsaved-changes prompt before closing the page (Web)

- 🟢 Preferences
  - 🟢 Appearance
    - 🟢 Light / dark theme (follow system + manual switch)
    - 🟢 UI language (Simplified Chinese / English, dropdown takes effect immediately)

  - 🟢 2D view
    - 🟢 Mouse-wheel zoom speed (0.1× ~ 5× slider)
    - 🟢 Drag pan speed (0.1× ~ 5× slider)
    - 🟢 Drag animation toggle (enable inertia easing)

  - 🟢 3D view
    - 🟢 Mouse interaction preset (left-drag pan / right-drag rotate OR left-drag rotate / right-drag pan)
    - 🟢 Mouse-wheel zoom speed (0.1× ~ 5× slider)
    - 🟢 Pan speed (0.1× ~ 5× slider)
    - 🟢 Rotation speed (0.1× ~ 5× slider)
    - 🟢 Mouse inertia toggle + damping factor (0.01 ~ 1.0 slider)
    - 🟢 Zoom-to-cursor toggle (scroll wheel zooms anchored at the mouse position)
    - 🟢 Enable pan / enable zoom / enable rotate (3 independent toggles)
    - 🟢 Screen-space pan toggle

  - 🟢 Other
    - 🟢 Auto-save toggle (write settings after manual confirmation)
    - 🟢 One-click restore default view settings

  - 🟢 Units
    - 🟢 Metric units (centimeters / meters), unified conversion in the properties panel

- 🟢 Shortcuts
  - 🟢 Project operations
    - 🟢 New project (⌘/Ctrl + ⌥/Alt + N)
    - 🟢 Save (⌘/Ctrl + S)
    - 🟢 Rename (⌘/Ctrl + R)
    - 🟢 Undo (⌘/Ctrl + Z)
    - 🟢 Redo (⌘/Ctrl + Y)

  - 🟢 Edit operations
    - 🟢 Copy (⌘/Ctrl + C)
    - 🟢 Cut (⌘/Ctrl + X)
    - 🟢 Paste (⌘/Ctrl + V)
    - 🟢 Delete (Backspace / Delete)
    - 🟢 Group (⌘/Ctrl + G)
    - 🟢 Ungroup (⌘/Ctrl + Shift + G)
    - 🟢 Cancel drawing (Esc)

  - 🟢 View operations
    - 🟢 Toggle 2D / 3D (⌘/Ctrl + /)
    - 🟢 Zoom in (⌘/Ctrl + [)
    - 🟢 Zoom out (⌘/Ctrl + ])
    - 🟢 Focus all (⌘/Ctrl + 9)
    - 🟢 Focus selection (⌘/Ctrl + 0)
    - 🟢 Search components (⌘/Ctrl + J)
    - 🟢 Fullscreen toggle

- 🟢 Status bar & info
  - 🟢 Scene info card (hover to expand details, title shows the current mode in real time)
    - 🟢 2D / 3D real-time FPS (color-coded by level: green / yellow / orange / red)
    - 🟢 Total vertex count
    - 🟢 Total line count
    - 🟢 Total triangle count
    - 🟢 Texture map count
    - 🟢 Object count
  - 🟢 Current scene zoom ratio
  - 🟢 Real-time coordinate display while dragging
  - 🟢 Scene extents / bounds
  - 🟢 Last save time
  - 🟢 Application version
  - 🟢 Error / warning count indicator (click to jump to the log panel)
  - 🟢 Bottom shortcut hint bar (dynamically shows available shortcuts for the current drawing mode)

- 🟢 Help & onboarding
  - 🟢 Shortcut reference page (independent route, full shortcut table)
  - 🟢 Getting-started tour (step-by-step overlays: menu bar / toolbar / model panel / properties panel)
  - 🟢 Issue feedback (jump to GitHub Issues for bug reports and suggestions)

- 🟢 Platform support
  - 🟢 Desktop
  - 🟢 Mobile responsive layout
    - 🟢 Bottom-panel switching buttons (component library / properties / toolbar in drawer style)
    - 🟢 Walk-mode virtual joystick (touch directional control + rotation buttons)
    - 🟢 Horizontal scrolling info bar (gesture-friendly)

- 🟡 Management
  - 🟢 Reference line management (add / delete / edit / color / visibility)
  - 🟢 Multi-floor management (layer system)
  - 🟢 Component group management
  - 🟢 Property management
  - 🟢 One-click exterior (draw a rectangle on the map to auto-fetch real-world buildings & roads and generate a white-model exterior of that area)
  - ⚪ Components (select multiple models and save them as a new combined component, appears in the model library for repeated drag-in, supports save / delete / rename)
