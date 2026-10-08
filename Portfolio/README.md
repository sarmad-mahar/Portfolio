# Sarmad Mahar Portfolio

A dependency-free static portfolio for GitHub Pages. It is designed to work at `https://sarmad-mahar.github.io/Portfolio/` without a build process.

## Deploy to GitHub Pages

Copy the contents of this folder into the `Portfolio` directory of the `sarmad-mahar.github.io` repository, then commit and push:

```bash
git add Portfolio
git commit -m "Add portfolio website"
git push origin main
```

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose the repository root or the folder where this site lives. After GitHub publishes it, visit:

`https://sarmad-mahar.github.io/Portfolio/`

## Customize later

- Replace the three sample objects in `script.js` with real posts. Each post has `category`, `date`, `title`, `excerpt`, and `body`.
- Add the final CV PDF inside `assets/`, then replace the CV request link in `index.html` with `href="assets/your-cv-file.pdf" download`.
- Edit colors, spacing, and responsive behavior in `styles.css`.
- The Umami script is already included with website ID `f32231da-c43e-4937-90b1-f5a5cd0eb5b8`.

The site has no build dependency and can be previewed locally with:

```bash
python3 -m http.server 4173
```
