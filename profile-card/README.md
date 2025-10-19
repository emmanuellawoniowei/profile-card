Profile Card
This project is a responsive profile card showcasing personal information, social links, hobbies, and dislikes. It features a sleek, dark-themed design with gold accents, and dynamically updates the current time.
Demo
Here's a visual representation of the profile card:
Table of Contents
Features
Technologies Used
Installation
Usage
Project Structure
Customization
Contributing
License
Contact
Features
Responsive Design: Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
Dynamic Time Display: Shows the current time in milliseconds, updated every 500ms.
Personal Information: Displays user name, a short bio, and a profile picture.
Social Media Links: Provides clickable links to Twitter, LinkedIn, GitHub, and Facebook.
Hobbies & Dislikes Sections: Clearly lists personal interests and aversions.
Clean and Modern UI: Features a dark theme with striking gold highlights and elegant typography.
Interactive Elements: Subtle hover effects on the profile card and social links.
Technologies Used
HTML5: For the structural markup of the profile card.
CSS3: For styling and ensuring responsiveness across devices.
JavaScript: For dynamic content, specifically updating the current time.
Font Awesome: For social media icons.
Google Fonts: For Poppins and Playfair Display fonts, enhancing the typography.
Installation
To get a local copy up and running, follow these simple steps:
Clone the repository:
code
Bash
git clone https://github.com/emmanuellawoniowei/profile-card.git
Navigate to the project directory:
code
Bash
cd profile-card
Usage
Simply open the index.html file in your web browser to view the profile card. No complex build process is required.
code
Bash
open index.html
Project Structure
The project is organized into the following files and directories:
code
Code
profile-card/
├── assets/
│   ├── favicon.png
│   └── profile-pic.png
├── index.html
├── script.js
└── style.css
index.html: The main HTML file containing the structure of the profile card.
style.css: Contains all the CSS rules for styling the profile card and ensuring responsiveness.
script.js: Includes the JavaScript code for dynamically updating the current time.
assets/: Directory for images and other media files.
profile-pic.png: The user's profile picture.
favicon.png: The favicon for the web page.
Customization
You can easily customize the profile card to your liking:
Content:
Modify the index.html file to change the user's name, bio, social links, hobbies, and dislikes.
Update assets/profile-pic.png and assets/favicon.png with your own images.
Styling:
Edit style.css to adjust colors, fonts, spacing, and other visual properties. The --color-gold-text, --color-gold-shape, and --color-gold-accent CSS variables are a good starting point for theme changes.
JavaScript:
The script.js file handles the time update. You can modify the setInterval duration or the updateTime function logic if needed.
Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to:
Fork the repository.
Create a new branch (git checkout -b feature/AmazingFeature).
Make your changes.
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE for more information.
Contact
EMMANUELLA WONIOWEI - @tamsbaby_0630 - wonioweiemmanuella@gmail.com
Project Link: https://github.com/emmanuellawoniowei/profile-card