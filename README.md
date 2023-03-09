# Project Readme

This project is a web application that displays several blogs fetched from a fake JSON server. The application is built using the 'react-router-dom' package for routing.

## Requirements

The following are the requirements for this project:

- A fake JSON server is provided, and there will be several blogs that you have to fetch and show on the home page.
- The blogs will be displayed in the first order, that is, the serial sent from the API should be displayed in the same serial. Later, if you click on "Newest", "Most Liked" from the Sort menu, the newest and the most liked filters will be displayed sequentially.
- If you click on "like", the number of likes will increase. Since there is no authentication, you can give as many likes as you want, and it will be synced with the server.
- If you click on "Saved" in the left side menu, only the saved ones will be displayed.
- If you click on the Title or Thumbnail of the card, it will take you to the Details page. In this case, routing must be managed through the 'react-router-dom' package. After deploying the assignment, make sure that even if you go directly to that page, the Blog Details are visible.
- If you click on the "Save" button on the Details page, it will be bookmarked separately, that is, the 'Save' text will be 'Saved' and will be blue (for this, a CSS class called 'active' has to be created).
- On the Details page, the 'Related Blogs' section will show related blogs by tag.
- If you go to the detail page of the blog post, that post should not come in the list of 'Related Blogs'.

## Setup

Clone the repository to your local machine.

First of all, run the server. to do that, follow the instructions below:

0. Open new terminal.
1. Change Directory using the command `cd server`
2. Install the dependencies using the command `npm install`.
3. Start the application using the command `npm start`.
4. Access the server by opening `http://localhost:9000` in your browser.

Then to run this project, follow the instructions below:

0. Open another terminal.
2. Install the dependencies using the command `npm install`.
3. Start the JSON Server using the command `npm run server`.
4. Start the application using the command `npm start`.
5. Access the application by opening `http://localhost:3000` in your browser.

## Technologies

This project was built using the following technologies:

- React.js
- Redux Toolkit
- JSON Server
- JavaScript
- HTML
- CSS

Deployment Link: https://blog-application-sohel473.netlify.app/
