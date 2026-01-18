// Sheet component - Vanilla JS implementation similar to shadcn/ui
class Sheet {
  constructor() {
    this.sheet = document.getElementById("sidebar-sheet");
    this.overlay = document.getElementById("sheet-overlay");
    this.trigger = document.getElementById("sheet-trigger");
    this.close = document.getElementById("sheet-close");

    if (!this.sheet || !this.overlay || !this.trigger) return;

    this.init();
  }

  init() {
    // Open sheet
    this.trigger.addEventListener("click", () => this.open());

    // Close sheet
    if (this.close) {
      this.close.addEventListener("click", () => this.closeSheet());
    }
    this.overlay.addEventListener("click", () => this.closeSheet());

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.closeSheet();
      }
    });

    // Handle responsive behavior
    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());
  }

  open() {
    this.sheet.classList.remove("translate-x-full");
    this.sheet.classList.add("translate-x-0");
    this.overlay.classList.remove("opacity-0", "pointer-events-none");
    this.overlay.classList.add("opacity-100");
    document.body.style.overflow = "hidden";
  }

  closeSheet() {
    this.sheet.classList.remove("translate-x-0");
    this.sheet.classList.add("translate-x-full");
    this.overlay.classList.remove("opacity-100");
    this.overlay.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "";
  }

  isOpen() {
    return this.sheet.classList.contains("translate-x-0");
  }

  handleResize() {
    // On desktop (>1024px), show sidebar normally
    if (window.innerWidth >= 1024) {
      this.closeSheet();
      this.trigger.style.display = "none";
    } else {
      this.trigger.style.display = "block";
    }
  }
}

// Drawer component for navigation
class Drawer {
  constructor() {
    this.drawer = document.getElementById("nav-drawer");
    this.overlay = document.getElementById("drawer-overlay");
    this.trigger = document.getElementById("drawer-trigger");
    this.close = document.getElementById("drawer-close");

    if (!this.drawer || !this.overlay || !this.trigger) return;

    this.init();
    this.initSubmenuToggles();
  }

  init() {
    // Open drawer
    this.trigger.addEventListener("click", () => this.open());

    // Close drawer
    if (this.close) {
      this.close.addEventListener("click", () => this.closeDrawer());
    }
    this.overlay.addEventListener("click", () => this.closeDrawer());

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.closeDrawer();
      }
    });

    // Handle responsive behavior
    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());
  }

  initSubmenuToggles() {
    // Get all submenu toggle buttons
    const toggleButtons = this.drawer.querySelectorAll(".submenu-toggle");

    toggleButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Only toggle on mobile
        if (window.innerWidth >= 768) return;

        const submenuId = button.getAttribute("data-submenu");
        const submenu = document.getElementById(submenuId);
        const chevron = button.querySelector(".chevron");

        if (!submenu) return;

        // Toggle submenu
        const isOpen = !submenu.classList.contains("hidden");

        if (isOpen) {
          submenu.classList.add("hidden");
          button.setAttribute("aria-expanded", "false");
          if (chevron) chevron.style.transform = "rotate(0deg)";
        } else {
          submenu.classList.remove("hidden");
          button.setAttribute("aria-expanded", "true");
          if (chevron) chevron.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  open() {
    this.drawer.classList.remove("-translate-y-full");
    this.drawer.classList.add("translate-y-0");
    this.overlay.classList.remove("opacity-0", "pointer-events-none");
    this.overlay.classList.add("opacity-100");
    document.body.style.overflow = "hidden";
  }

  closeDrawer() {
    this.drawer.classList.remove("translate-y-0");
    this.drawer.classList.add("-translate-y-full");
    this.overlay.classList.remove("opacity-100");
    this.overlay.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "";

    // Close all submenus when drawer closes
    const submenus = this.drawer.querySelectorAll(".submenu-content");
    const toggleButtons = this.drawer.querySelectorAll(".submenu-toggle");

    submenus.forEach((submenu) => {
      submenu.classList.add("hidden");
    });

    toggleButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      const chevron = button.querySelector(".chevron");
      if (chevron) chevron.style.transform = "rotate(0deg)";
    });
  }

  isOpen() {
    return this.drawer.classList.contains("translate-y-0");
  }

  handleResize() {
    // On desktop (>768px), show nav normally
    if (window.innerWidth >= 768) {
      this.closeDrawer();
      this.trigger.style.display = "none";
    } else {
      this.trigger.style.display = "flex";
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new Sheet();
    new Drawer();
  });
} else {
  new Sheet();
  new Drawer();
}
