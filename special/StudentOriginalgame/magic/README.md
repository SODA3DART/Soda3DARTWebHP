<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Zuft7O2i5B1MYJMZGBhFE41-trMlNZ-m

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app (Development mode):
   `npm run dev`

## Deployment (GitHub Pages)

This project uses React/Vite and **must be built** before it can run in a browser.

1. Build the project:
   `npm run build`
   
   This creates a `dist` folder containing the playable game (`index.html`, `assets`, etc).

2. To see the built version locally:
   `npm run preview`

3. **Deploying to GitHub Pages:**
   - **Option A (Recommended):** Use a GitHub Action or deploy script to publish the `dist` folder to the `gh-pages` branch.
   - **Option B (Quick manual check):** The files in `dist/` are the ones that work. You cannot link directly to `src/index.html` or `magic/index.html` (the source code) on GitHub Pages. You must link to the deployed build output.
