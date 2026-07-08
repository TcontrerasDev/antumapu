# GEMINI.md Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `GEMINI.md` to accurately reflect the Astro v7 setup, the `common/features/ui` components structure, internationalization (i18n) routing under `[...lang]`, types, and utilities.

**Architecture:** We will perform a direct replacement of the existing legacy documentation in `GEMINI.md` with the new updated version that matches the actual codebase structure. We will verify the changes using basic file presence and keyword verification.

**Tech Stack:** Markdown

## Global Constraints
- Target File: `GEMINI.md`
- Astro Framework: Version 7.x
- Component subdirectories: `common/`, `features/`, `ui/`
- Localized pages: `src/pages/[...lang]/`
- Document all core library and type files.

---

### Task 1: Update GEMINI.md

**Files:**
- Modify: `GEMINI.md`

**Interfaces:**
- Consumes: Current physical project directory structure
- Produces: Updated `GEMINI.md` documentation file

- [ ] **Step 1: Write the updated content for GEMINI.md**

Create the updated markdown content for `GEMINI.md`.

- [ ] **Step 2: Run verification command to make sure GEMINI.md is updated and contains correct content**

Run: `grep -E "Astro \(v7\.x\)|src/components/common/|src/pages/\[\.\.\.lang\]/" GEMINI.md`
Expected: Outputs matching lines verifying Astro v7, common components, and i18n routing.

- [ ] **Step 3: Commit the changes**

Run:
```bash
git add GEMINI.md
git commit -m "docs: update GEMINI.md to match Astro v7, components structure, and i18n routing"
```
