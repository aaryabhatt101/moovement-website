// Small, beginner-friendly JS for menu + copy button + year
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    // Close menu when clicking a link
    mobileNav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      }
    });
  }

  // Copy buttons
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = old), 1200);
      } catch (err) {
        alert("Copy failed. You can manually copy the text below.");
      }
    });
  });
})();
