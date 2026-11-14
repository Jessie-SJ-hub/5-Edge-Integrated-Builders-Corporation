/* =========================================================
   5 EDGE INTEGRATED BUILDERS CORPORATION
   Website interactions
   ========================================================= */


/* ---------------------------------------------------------
   1. MOBILE NAVIGATION
   --------------------------------------------------------- */

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');

        menuButton.setAttribute('aria-expanded', String(isOpen));

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation' : 'Open navigation'
        );
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation');
        });
    });
}


/* ---------------------------------------------------------
   2. AUTOMATIC COPYRIGHT YEAR
   --------------------------------------------------------- */

const yearElement = document.querySelector('#year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ---------------------------------------------------------
   3. CONTACT FORM SETTINGS

   IMPORTANT:
   Replace the sample email below with the official
   5 EDGE company email before publishing the website.
   --------------------------------------------------------- */

const COMPANY_EMAIL = 'your-company-email@example.com';


/* ---------------------------------------------------------
   4. CONTACT FORM SUBMISSION

   This form opens the visitor's email application.
   It does not save enquiries to an online database.
   --------------------------------------------------------- */

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (COMPANY_EMAIL === 'your-company-email@example.com') {
            formStatus.textContent =
                'Please add the official company email in script.js before using this form.';

            return;
        }

        const formData = new FormData(contactForm);

        const subject = encodeURIComponent(
            `Project Enquiry — ${formData.get('service')}`
        );

        const body = encodeURIComponent(
            `Name: ${formData.get('name')}\n` +
            `Email: ${formData.get('email')}\n` +
            `Service: ${formData.get('service')}\n\n` +
            `Project Details:\n${formData.get('message')}`
        );

        window.location.href =
            `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

        formStatus.textContent =
            'Your email application should open with the enquiry draft.';
    });
}
