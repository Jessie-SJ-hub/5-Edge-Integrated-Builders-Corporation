// 5 EDGE Integrated Builders Corporation website interactions
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// IMPORTANT: Replace this with the company's official enquiry email before publishing.
const COMPANY_EMAIL = "YOUR-COMPANY-EMAIL@example.com";

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (COMPANY_EMAIL.includes("YOUR-COMPANY-EMAIL")) {
      status.textContent = "The form layout is ready. Add your official company email in script.js before publishing so enquiries can be sent.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Website enquiry — ${data.get("service")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    status.textContent = "Your email app should open with the enquiry drafted. Please review and send it.";
  });
}
