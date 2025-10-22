# Profile Card & Multi-Page Application

This project has evolved from a single responsive profile card into a multi-page application. It now includes a "Contact Us" page with robust form validation and an "About Me" page for project information/contributor details, alongside the original profile card. The entire application maintains a sleek, dark-themed design with elegant gold accents, and showcases responsive design principles.

## Demos

Here are visual representations of the profile card, about me page, and contact us page:

-   **Profile Card Demo:** ![Profile Card Demo](/assets/profile-demo.jpg)
-   **About Me Page Demo:** ![About Me Page Demo](/assets/about-me-demo.png)    
-   **Contact Us Page Demo:** ![Contact Us Page Demo](/assets/contact-us-demo.png) 

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Pages & Functionality](#pages--functionality)
-   [Customization](#customization)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Usage](#usage)

## Features

-   **Responsive Design:** Adapts seamlessly to various screen sizes (desktop, tablet, mobile) across all pages.
-   **Navigation:** Clear navigation between the Profile Card, Contact Us, and About Me pages.
-   **Dynamic Time Display:** (On Profile Card) Shows the current time in milliseconds, updated every 500ms.
-   **Personal Information:** (On Profile Card) Displays user name, a short bio, and a profile picture.
-   **Social Media Links:** (On Profile Card) Provides clickable links to Twitter, LinkedIn, GitHub, and Facebook.
-   **Hobbies & Dislikes Sections:** (On Profile Card) Clearly lists personal interests and aversions.
-   **Contact Form with Validation:** (On Contact Us Page) A user-friendly form with client-side validation for all fields, providing immediate feedback.
-   **About Page:** (On About Me Page) Provides general information about the project or contributor.
-   **Clean and Modern UI:** Features a consistent dark theme with striking gold highlights and elegant typography across all pages.
-   **Interactive Elements:** Subtle hover effects on interactive elements and links.
-   **Accessibility Focus:** Built with semantic HTML, ARIA attributes, and keyboard navigability to ensure broad accessibility.

## Technologies Used

-   **HTML5:** For the structural markup of all pages.
-   **CSS3:** For styling and ensuring responsiveness across devices, maintaining the dark theme and gold accents.
-   **JavaScript:** For dynamic content (time display) and client-side form validation.
-   **Font Awesome:** For social media icons and other UI elements.
-   **Google Fonts:** For `Poppins` and `Playfair Display` fonts, enhancing the typography across the application.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/emmanuellawoniowei/profile-card.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd profile-card
    ```


## Pages & Functionality

### 1. Profile Card (`profile/index.html`)

*   **Content:** Personal information, short bio, social links, hobbies, and dislikes.
*   **Dynamic Feature:** Displays current time in milliseconds.
*   **Accessibility:** Semantic HTML, `alt` text for images.

### 2. Contact Us Page (`contact-us/contact.html`)

*   **Form Fields (with `data-testid`):**
    *   Full Name (`test-contact-name`)
    *   Email Address (`test-contact-email`)
    *   Subject (`test-contact-subject`)
    *   Message (`test-contact-message`)
    *   Submit Button (`test-contact-submit`)
*   **Validation Rules:**
    *   All fields are required.
    *   Email must be in a valid format (e.g., `name@example.com`).
    *   Message must be at least 10 characters long.
*   **Error Handling:**
    *   Error messages (`test-contact-error-<field>`) displayed dynamically next to invalid fields.
    *   `aria-describedby` links error messages to their respective inputs for screen readers.
*   **Success Message:** (`test-contact-success`) displayed upon successful valid submission.
*   **Accessibility:** `label` elements linked with `for`, `aria-describedby` for errors, keyboard navigable form.

### 3. About Page (`about-me/about.html`)

*   **Purpose:** This page provides general information about the project, its goals, the developer, or any other relevant context typically found in a GitHub "About" section.
*   **Semantic Structure:** It should use appropriate HTML elements like `<main>`, `<section>`, `<h2>`, `<p>`, and lists (`<ul>`, `<ol>`) to organize content clearly.
*   **Content Examples (you would fill these in your `about.html`):**
    *   A brief introduction to the project.
    *   Technologies leveraged and key learning outcomes.
    *   Future enhancements or considerations.
    *   A note about the developer or team.
*   **Accessibility:** Emphasis on clear structure and readable content.

## Customization

You can easily customize this project:

-   **Content:** Update the HTML files within `profile/`, `contact-us/`, and `about-me/` with your own personal information, form details, and project/developer information.
-   **Styling:** Modify the CSS files (`profile/style.css`, `contact-us/contact.css`, `about-me/about.css`) to change colors, fonts, spacing, and other visual aspects. Maintain the black and gold theme or adapt it to your preference.
-   **JavaScript:** Adjust the `profile/script.js` for time display format or extend validation rules in `contact-us/contact.js`.
-   **Demo Images:** Update the demo image paths and files in the `assets/` folder.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

[Emmanuella Woniowei] - [wonioweiemmanuella@gmail.com]
Project Link: [https://github.com/emmanuellawoniowei/profile-card](https://github.com/emmanuellawoniowei/profile-card)

## Usage

You can open any of the main HTML files in your web browser to view the respective pages. Navigation between pages should be available if implemented. No complex build process is required.

```bash
# To view the Profile Card:
open profile/index.html

# To view the Contact Us page:
open contact-us/contact.html

# To view the About Me page:
open about-me/about.html
