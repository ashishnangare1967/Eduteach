<h1 align="center"> StudyNotion - Edu-Tech Platform  <h1/>

<div align="center">
  <img src="https://ci5.googleusercontent.com/proxy/cMbZnEBS-wmZ96EMln2WhCzOUFs42niSFMI2mJn_tAZCrrAdg6MTbL4X9EdrMiHkip4I-w=s0-d-e1-ft#https://i.ibb.co/7Xyj3PC/logo.png" alt="StudynotionFrontPage">
</div>

<h3 align='center'>StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.<h3/>

<div align="center">
  <img src="https://github.com/ashishnangare1967/StudyNotion/assets/114669304/deecdf79-abd7-4234-8bbd-ac4f2c5b0eab" alt="StudynotionFrontPage">
</div>


# Table of Contents

1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Front-end](#front-end)
4. [Back-end](#back-end)
5. [API Design](#api-design)
6. [Summary](#summary)

# Introduction

StudyNotion aims to provide:

- A seamless and interactive learning experience for students, making education more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners across the globe.

In the following sections, we will cover the technical details of the platform.

# System Architecture

- *High-level Overview*:The StudyNotion ed-tech platform consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

 ### Architecture Diagram
   ![ArchFrontAndBackend](https://github.com/ashishnangare1967/StudyNotion/assets/114669304/8c346ebd-aaf2-4d2c-8939-57bce13f6bef)

# Front-end 

- *Description*: The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

### For Students:
- **Homepage:** A brief introduction to the platform with links to the course list and user details.
- **Course List:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout:** Allows the user to complete course purchases.
- **Course Content:** Presents the course content for a particular course, including videos and related material.
- **User Details:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details:** Allows students to edit their account details.
### For Instructors:
- **Dashboard:** This page will have an overview of the instructor's courses, as well as the ratings and feedback for each course.
- **Insights:** This page will have detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages:** These pages will allow the instructor to create, update, and delete courses, as well as manage the course content and pricing.
- **View and Edit Profile Details:** These pages will allow the instructor to view and edit their account details.


- **Dashboard:**
  Offers an overview of the instructor's courses, along with ratings and feedback for each course.
Insights: Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
Course Management Pages: Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
View and Edit Profile Details: Allows instructors to view and edit their account details.

### Frameworks and Libraries:
   
  ![Tailwind css](https://img.shields.io/badge/tailwindcss-CA4245?style=for-the-badge&logo=tailwindcss&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)



# Back-end

StudyNotion utilizes a monolithic architecture for its backend, offering better control, security, and performance. Here are the key components of the architecture:

- **Node.js and Express.js**: The backend is built using Node.js, a popular JavaScript runtime, and Express.js, a web application framework for Node.js. This combination simplifies the development of web applications.

- **MongoDB**: MongoDB is employed as the primary database. It is a NoSQL database that offers flexible data storage and retrieval, making it suitable for complex applications like StudyNotion.

## Features and Functionalities

The StudyNotion backend provides a range of features and functionalities to enhance the user experience:

- **User Authentication and Authorization**: Students and instructors can sign up and log in to the platform using their email addresses and passwords. Additional security features include OTP (One-Time Password) verification and a forgot password functionality.

- **Course Management**: Instructors can perform CRUD (Create, Read, Update, Delete) operations on courses, manage course content and media, and students can view and rate courses.

- **Payment Integration**: Students can purchase and enroll in courses by completing a checkout flow that includes Razorpay integration for secure payment handling.

- **Cloud-based Media Management**: StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, such as images, videos, and documents.

- **Markdown Formatting**: Course content in document format is stored in Markdown format, enabling easier display and rendering on the front end.

## Frameworks, Libraries, and Tools

To ensure the functionality and performance of the backend, StudyNotion utilizes various frameworks, libraries, and tools, including:

- **Node.js**: Node.js serves as the primary framework for the backend, allowing for efficient JavaScript code execution outside of the browser.

- **MongoDB**: MongoDB is chosen as the primary database, providing a scalable and flexible data storage solution.

- **Express.js**: Express.js acts as the web application framework, offering a wide range of features and tools for building web applications.

- **JWT (JSON Web Tokens)**: JWT is employed for authentication and authorization, ensuring a secure and reliable way to manage user credentials.

- **Bcrypt**: Bcrypt is used for password hashing, adding an additional layer of security to user data.

- **Mongoose**: Mongoose serves as an Object Data Modeling (ODM) library, allowing interaction with MongoDB using JavaScript.

  
- *Frameworks and Libraries*:
  
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![ExpressJS](https://img.shields.io/badge/expressjs-6DA55F?style=for-the-badge&logo=expressjs&logoColor=white)
   ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)



# API Design
The StudyNotion platform's API is designed following the REST architectural style. This API is implemented using Node.js and Express.js, using JSON for data exchange and standard HTTP request methods such as GET, POST, PUT, and DELETE.

## API Endpoints and Functionalities

- **/api/auth/signup (POST):** Create a new user account (student or instructor).
- **/api/auth/login (POST):** Log in using existing credentials and generate a JWT token.
- **/api/auth/verify-otp (POST):** Verify the OTP sent to the user's registered email.
- **/api/auth/forgot-password (POST):** Send an email with a password reset link to the registered email.

- **/api/courses (GET):** Get a list of all available courses.
- **/api/courses/:id (GET):** Get details of a specific course by ID.
- **/api/courses (POST):** Create a new course.
- **/api/courses/:id (PUT):** Update an existing course by ID.
- **/api/courses/:id (DELETE):** Delete a course by ID.
- **/api/courses/:id/rate (POST):** Add a rating (out of 5) to a course.

## Sample API Requests and Responses

### GET /api/courses
- **Response:** A list of all courses in the database.

### GET /api/courses/:id
- **Response:** The course with the specified ID.

### POST /api/courses
- **Request:** The course details in the request body.
- **Response:** The newly created course.

### PUT /api/courses/:id
- **Request:** The updated course details in the request body.
- **Response:** The updated course.

### DELETE /api/courses/:id
- **Response:** A success message indicating that the course has been deleted.

## Conclusion

In conclusion, the REST API design for the StudyNotion ed-tech platform is a crucial part of the project. The API endpoints and their functionalities are designed to ensure seamless communication between the front-end and back-end of the application. By following RESTful principles, the API will be scalable, maintainable, and reliable. The sample API requests and responses provided above illustrate how each endpoint will function and what kind of data it will accept or return. With this API design, StudyNotion will be able to provide a smooth user experience while ensuring security and stability.

For detailed usage instructions and further API documentation, refer to the official StudyNotion API documentation.


## Summary

In summary, StudyNotion is a versatile and intuitive ed-tech platform designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise. The following sections have provided a comprehensive understanding of the platform's features and functionalities.

For more details, please refer to the respective sections above.
