Live site :
http://sxd4369.uta.cloud/

# Student Marketplace and Community Engagement Platform for Networking

Project Duration: August 2022 – December 2022

This project is a full-stack community platform designed to increase student engagement on campus by providing a marketplace, networking opportunities, and student club management. The platform enables students to buy, sell, and exchange goods and services while also promoting campus events and providing a way for students to create and join clubs. The project resulted in a 30% increase in campus engagement and helped the university generate additional revenue through advertising.

Key Features:

- Student Marketplace: Allows students to list and browse items or services available for sale or exchange within the campus community.
- Community Engagement: Promotes events, student organizations, and networking opportunities to foster better connections within the campus.
- Clubs Feature: Students can create clubs, join existing ones, and participate in group activities and events related to their interests.
- Revenue Generation: Integrated an advertising system, enabling the university to monetize the platform and boost revenue.
- User-Friendly Interface: A responsive and intuitive front-end built using React.js ensures seamless navigation and interaction.
- Backend and APIs: Built with PHP Laravel to handle business logic, user authentication, and data management, with REST APIs enabling smooth communication between the frontend and backend.
- Database Management: The platform uses MySQL to manage user data, listings, transactions, and club-related information securely and efficiently.

Tech Stack:

- Frontend: React.js (JavaScript)
- Backend: PHP Laravel
- Database: MySQL
- API: REST APIs for communication between the frontend and backend

How It Works:

1. Marketplace: Students can create accounts, list items or services for sale, and browse available listings. Each listing includes details, pricing, and seller contact information.
2. Event Promotion: Student organizations and the university administration can post upcoming events, with filtering options for categories like academic, social, or sports events.
3. Clubs: Students can create their own clubs, join existing ones, and organize activities or events related to their interests. The platform facilitates communication within the club and helps with event coordination.
4. Networking: Users can connect with peers, join interest-based groups or clubs, and engage in campus activities to enhance their social and professional networks.
5. Advertising: The platform includes an advertising feature that allows the university to display relevant ads, generating additional revenue.

Installation:

To run the platform locally, follow these steps:

1. Clone the Repository:
   git clone https://github.com/PAn1COG/SocialMe
   cd student-marketplace-platform

2. Backend Setup:
   - Navigate to the backend directory:
     cd backend
   - Install dependencies:
     composer install
   - Set up the .env file with your MySQL credentials and other environment variables:
     DB_DATABASE=your_database_name
     DB_USERNAME=your_mysql_username
     DB_PASSWORD=your_mysql_password
   - Run migrations and seed the database:
     php artisan migrate --seed
   - Start the Laravel server:
     php artisan serve

3. Frontend Setup:
   - Navigate to the frontend directory:
     cd frontend
   - Install dependencies:
     npm install
   - Start the frontend development server:
     npm start

4. Access the Application:
   Open your browser and navigate to http://localhost:3000 to access the platform.

Future Enhancements:

- Mobile App Development: Expand the platform by developing a mobile app for iOS and Android to further improve accessibility.
- Expanded Features: Introduce more networking tools, such as a built-in messaging system and career-related events.
- Advanced Analytics: Provide detailed analytics for administrators to track platform engagement, club activities, and optimize advertising strategies.

License:
Built by Sushrut Diwan (Project Lead)  
For more information or contributions, feel free to contact me at sushrutdiwan07@gmail.com.

Note: This project was developed for academic purposes to foster campus engagement, student club participation, and networking.
