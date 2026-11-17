# Hitin Banga — Two-page portfolio

A responsive, Apple-inspired portfolio built with plain HTML, CSS and JavaScript.

## Pages
- `index.html` — About Me
- `work.html` — My Work

## Before publishing
1. Replace the portrait placeholder in `index.html` with your own photo.
2. Replace `YOUR-EMAIL@example.com` with your real email address.
3. Add real project images, videos and links. The current project artwork is illustrative placeholder artwork, not original client deliverables.
4. Check that every project description accurately reflects work you personally completed.
5. Update social links/contact details if you want them displayed.

## Add your portrait
Create `assets/images/` and place your portrait there, for example `portrait.jpg`.
In `index.html`, replace:
```html
<div class="portrait-placeholder">
  ...
</div>
```
with:
```html
<img class="portrait-image" src="assets/images/portrait.jpg" alt="Hitin Banga">
```
Then add this CSS:
```css
.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

## Add project media
The coloured project panels on `work.html` are visual placeholders. Replace each `.project-visual` contents with an image or video, for example:
```html
<a class="project-visual" href="YOUR-PROJECT-LINK">
  <img src="assets/images/zariya-campaign.jpg" alt="Zariya social media campaign">
</a>
```
For a video preview:
```html
<video class="project-video" controls playsinline poster="assets/images/reel-cover.jpg">
  <source src="assets/videos/your-reel.mp4" type="video/mp4">
</video>
```
Add suitable CSS for `.project-visual img, .project-video`:
```css
.project-visual img, .project-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

## Publish with GitHub Pages
1. Create a new GitHub repository, e.g. `hitin-portfolio`.
2. Upload all files and folders from this project. Keep `index.html` in the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. Your site URL will be shown in the Pages settings.

No build step is required.
