# Todo List

A lightweight task board built with **React and Vite**. The interface organizes tasks into three stages—**Todo**, **Doing**, and **Done**—with a separate list for each stage.

**[Live site](https://bryangilbert-t.github.io/Todo-List/)** · **[Source code](https://github.com/BryanGilbert-T/Todo-List)**

> **Project status:** This is an early frontend project. The current source contains unresolved input-handler references that need to be fixed before the board works reliably. See [Known limitations](#known-limitations).

## Overview

Todo List is a simple browser-based interface for organizing tasks by progress. Its three-column layout provides a clear view of work that has not started, work in progress, and completed work.

The project demonstrates React component development, state-driven rendering, user input handling, and interface styling with CSS.

## Features and design

- **Three task categories:** Separate *Todo*, *Doing*, and *Done* columns.
- **Add-task interface:** Each column includes a text input and an add button; empty or whitespace-only tasks are rejected by the add functions.
- **Task removal:** Each displayed task has a delete control.
- **Column limits:** The add-task input is hidden once a column contains five tasks.
- **Visual organization:** Color-coded cards distinguish task status, with a custom background and typography.

These behaviors describe the code's intended interface; input-handler issues currently prevent reliable operation (see below). Tasks do **not** automatically move between columns, and no drag-and-drop functionality is implemented in the current component.

## Tech stack

| Technology | Usage |
| --- | --- |
| **React 18** | UI components, hooks, and state updates |
| **JavaScript (JSX)** | Application and task-management logic |
| **CSS** | Layout, visual styling, and interaction states |
| **Vite 6** | Development server and production build tooling |
| **ESLint** | Static code checks |

The project also declares `react-dnd` packages in `package.json`, but the current `Todo.jsx` component does not implement drag-and-drop.

## Getting started

### Prerequisites

- Node.js and npm (Node.js 20 or later recommended)
- A modern web browser

### Local setup

```bash
git clone https://github.com/BryanGilbert-T/Todo-List.git
cd Todo-List
npm install
npm run dev
```

Open the local URL shown by Vite in your terminal.

> **Important:** The checked-in `src/Todo.jsx` refers to `handleTodo`, `handleDoing`, and `handleDone` without defining them. These references must be fixed or removed before the app renders correctly.

### Available commands

```bash
npm run dev      # Start the development server
npm run build    # Generate a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project structure

```text
Todo-List/
├── public/                 # Public static assets
├── src/
│   ├── assets/             # Background and font assets
│   ├── App.jsx             # Application wrapper
│   ├── Todo.jsx            # Task board, per-column state, and controls
│   ├── index.css           # Global and component styles
│   └── main.jsx            # React entry point
├── index.html              # HTML entry point
├── package.json            # Dependencies and npm scripts
├── vite.config.js          # Vite configuration
└── README.md
```

## Implementation notes

The current board uses three React state arrays (`todo`, `doing`, and `done`). The add functions append non-empty input to the corresponding array, while the remove functions filter out a selected entry by its index. React re-renders each column when its state changes.

This is a client-side project: the code does not include a backend, authentication, database, or local-storage persistence.

## Known limitations

- **Undefined input handlers:** `src/Todo.jsx` includes `onChange` references to `handleTodo`, `handleDoing`, and `handleDone`, but these functions are not defined in the component. This is a runtime error and needs correction.
- **No persistence:** Tasks are kept in React state only and are lost after a page reload.
- **No cross-column task movement:** Tasks must be managed in their respective columns; moving a task between stages is not implemented.
- **Deployment path:** `vite.config.js` currently sets `base: "/todolist"`, while this GitHub repository is named `Todo-List`. For a project hosted at `/Todo-List/`, use `base: "/Todo-List/"` and verify the GitHub Pages deployment.
- **Basic layout:** The current CSS uses fixed minimum column widths; small-screen responsiveness may require further work.

## Potential improvements

- Fix the undefined event-handler references and add input tests.
- Support moving tasks between stages, optionally using drag-and-drop.
- Persist tasks with `localStorage` or a backend service.
- Add task editing, due dates, and filtering.
- Improve mobile responsiveness and keyboard accessibility.

## Author

Developed by **[Bryan Gilbert Tjahyadi](https://github.com/BryanGilbert-T)** as a frontend development project.
