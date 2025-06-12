ERP Frontend - Codebase Overview & Usage Guide
==============================================

This document provides a professional overview and explanation of the main components, context, and layout logic of the ERP frontend project. It is intended as a usage manual and code reference for developers.

---

1. Drawer Context (`src/pages/context/DrawerContext.jsx`)
---------------------------------------------------------
- **Purpose:**  
  Provides a React Context for managing the state of the sidebar (Drawer) throughout the application.

- **Key State:**
  - `drawerOpen`: Boolean, indicates if the Drawer is open.
  - `drawerHover`: Boolean, indicates if the Drawer is being hovered (for mini/expand effect).
  - `isDrawerExpanded`: Boolean, true if Drawer is open or hovered.
  - `currentDrawerWidth`: Number, the width of the Drawer depending on its state.

- **Usage:**  
  Wrap your app with `<DrawerProvider>`.  
  Use the `useDrawer()` hook in components to access and control Drawer state.

---

2. Layout Constants (`src/components/constants/layout.js`)
---------------------------------------------------------
- **Purpose:**  
  Centralizes layout-related constants for consistent sizing and animation.

- **Exports:**
  - `DRAWER_HEADER_HEIGHT`: Height of the AppBar/Drawer header (in px).
  - `DRAWER_WIDTH`: Width of the expanded Drawer (in px).
  - `MINI_DRAWER_WIDTH`: Width of the collapsed Drawer (in px).
  - `ANIMATION_DURATION`: Duration for Drawer/content transitions (in ms).

---

3. App Layout (`src/pages/layout/AppLayout.jsx`)
------------------------------------------------
- **Purpose:**  
  Provides the main page layout, including the AppBar (top bar), Drawer (sidebar), and content area.

- **Key Features:**
  - Uses `useDrawer()` to determine Drawer state and width.
  - Applies `padding-left` to the content area to avoid being overlapped by the Drawer (on desktop).
  - Applies `padding-top` to the content area to avoid being overlapped by the AppBar.
  - On mobile (`xs`), removes left padding so content uses full width.
  - Animates padding changes to match Drawer transitions.
  - Uses `<Outlet />` from React Router for nested routes.

---

4. AppBar (`src/pages/NewAppBar.jsx`)
-------------------------------------
- **Purpose:**  
  Renders the top navigation bar, including the menu button, title, and user actions.

- **Key Features:**
  - Responsive: adjusts layout and Drawer behavior for mobile and desktop.
  - The AppBar's width and position are dynamically calculated to align with the Drawer.
  - Contains navigation logic and user actions (e.g., logout button).

---

5. Example Page (`src/pages/stock/StockActual.jsx`)
---------------------------------------------------
- **Purpose:**  
  Example of a content page using the layout and MUI components.

- **Key Features:**
  - Uses a white `Box` with rounded corners and shadow for the main card.
  - The blue header bar is flush with the card (no extra padding).
  - Margins: small left margin (`ml`) and 1% right margin (`mr`) for spacing.
  - Responsive: margins and padding adjust for mobile and desktop.
  - Content area is flexible and adapts to screen size.

---

6. Global Styles (`src/App.css` and `src/index.css`)
----------------------------------------------------
- **Purpose:**  
  Ensures the app uses the full viewport, prevents unwanted scrollbars, and applies a consistent background.

- **Key Features:**
  - Sets `width: 100vw` and `overflow-x: hidden` on `html`, `body`, and `#root`.
  - Responsive font sizes for mobile.
  - Background color matches the layout's default.

---

7. Routing (`src/hooks/routes.jsx`)
-----------------------------------
- **Purpose:**  
  Defines the application's routes and page titles.

- **Key Features:**
  - Uses React Router v6 nested routes.
  - Wraps all main pages with `AppLayout`.
  - Dynamically sets the page title based on the current route.

---

Usage Notes
-----------
- **Responsiveness:**  
  The layout and components are designed to be fully responsive. On mobile, the Drawer overlays the content and the content uses the full width.

- **Customization:**  
  Adjust constants in `layout.js` to change Drawer/AppBar sizes or animation speed.  
  Modify margins and paddings in page components for custom spacing.

- **Extensibility:**  
  Add new pages by creating a component and adding a route in `routes.jsx`.

---