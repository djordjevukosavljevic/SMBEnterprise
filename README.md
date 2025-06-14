# SMBEnterprise
This web application helps a construction company manage. Clients can request construction services, and the company can schedule and monitor project progress without managing individual workers.  

✅ Service Catalog: List of services offered (e.g., renovations, plumbing, roofing).  

:

📬 Contact Form with Email Integration
This application includes a fully functional Contact Us page that allows users to submit messages directly through the website. Each submission:
Sends an email automatically to the configured recipient (e.g., admin or support).
Captures details like name, email, subject, message, and contact number.

Stores messages in the database for future reference.

✉️ Technologies Used
Frontend: HTML, JavaScript (vanilla)
Backend: Java (Spring Boot)
Email Service: JavaMailSender (Spring Mail)
Database: MySQL / JPA

🛡️ Security
Uses Gmail SMTP with app-specific password & 2FA for secure sending.
Inputs are validated server-side to prevent malformed or malicious requests.

