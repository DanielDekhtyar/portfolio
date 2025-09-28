# Portfolio

Static portfolio site for Daniel Dekhtyar.

## Structure

```
site/
	index.html             # Main landing page
	projects/              # Individual project deep dives
	assets/
		css/style.css        # Global styling
		js/main.js           # Navigation interactions
		images/              # Branded imagery + GitHub badge
		generate-images.ps1  # Helper script to regenerate images
Daniel Dekhtyar CV.pdf   # Résumé linked from the hero section
```

## Preview locally

Serve the `site/` directory with any static web server (for example VS Code Live Server) or simply open `site/index.html` in a browser.

## Deploy to GitHub Pages

1. Move or copy the contents of `site/` to the repository root (or configure Pages to use the `/site` directory).
2. Commit and push to the `main` branch.
3. In the repository settings, enable GitHub Pages and point it to the branch/folder you deployed.

Certificates and project links live externally; update URLs in the HTML whenever new achievements are added.
