document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => observer.observe(item));
});

// Live previews and the Montreal motion-study sound control.
document.addEventListener("DOMContentLoaded", () => {
  const previews = document.querySelectorAll(".live-preview[data-live-url]");
  const fitPreview = (preview) => {
    const frame = preview.querySelector("iframe");
    if (!frame) return;
    const scale = preview.clientWidth / 1440;
    frame.style.transform = `scale(${scale})`;
    frame.style.height = `${Math.ceil(preview.clientHeight / scale)}px`;
  };
  const loadPreview = (preview) => {
    if (preview.dataset.loaded) return;
    const frame = document.createElement("iframe");
    frame.src = preview.dataset.liveUrl;
    frame.title = preview.dataset.liveTitle || "Live project preview";
    frame.loading = "lazy";
    frame.setAttribute("tabindex", "-1");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("scrolling", "no");
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
    frame.addEventListener("load", () => preview.querySelector(".live-placeholder")?.remove(), { once: true });
    preview.appendChild(frame);
    preview.dataset.loaded = "true";
    fitPreview(preview);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { loadPreview(entry.target); io.unobserve(entry.target); } }), { rootMargin: "400px 0px" });
    previews.forEach(preview => io.observe(preview));
  } else previews.forEach(loadPreview);
  window.addEventListener("resize", () => previews.forEach(fitPreview));

  document.querySelectorAll(".video-project").forEach(card => {
    const video = card.querySelector("video");
    const button = card.querySelector(".video-sound-light");
    if (!video || !button) return;
    button.addEventListener("click", event => {
      event.preventDefault();
      video.muted = !video.muted;
      button.setAttribute("aria-pressed", String(!video.muted));
      button.querySelector("span:last-child").textContent = video.muted ? "Sound off" : "Sound on";
      video.play().catch(() => {});
    });
  });
});
