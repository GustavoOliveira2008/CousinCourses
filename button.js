document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const menu = document.getElementById("menu");

  if (!btn || !menu || !closeBtn) return;

  btn.addEventListener("click", () => {
    menu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});
