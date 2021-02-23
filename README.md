# The Bugbuster 🐞
by [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone) && [Daniel Fernandez De Ascencao ](https://github.com/DanielFDA) AKA Los Dos Mosqueteros 🎠🎠 <br>

![img](https://img.shields.io/badge/version-v%201.0.0-blue)
![img](https://img.shields.io/badge/-WORK%20IN%20PROGRESS...-important)<br>
Timeline: 7 days

👉 [<b>Try Me</b>](https://the-bugbuster.herokuapp.com/) 👈

---

## Overview
![img](assets/readme/logo.png)<br>

The Bugbuster is an open-source, bug tracker, thought to be a customized software developed and tailored for a single entity.
We decided to build this bug tracker to be used between us when we would like to collaborate again on a new project.

This project has been developed during General Assembly course, with the goal of design a full-stack React app using Python, Django, and PostgreSQL. I'm actively working on this project.

---

### Table of Contents

- [Get Started](#get-started)
  - [Required](#required)
  - [Installation Steps](#installation-steps)
  - [How To Use It](#how-to-use-it)
- [How I Made It](#how-i-made-it)
  - [Technologies Used](#technologies-used)
  - [Approach Taken](#approach-taken)
  - [Bugs, Blockers & Wins](#bugs,-blockers--wins)
    - [Bugs](#bugs)
    - [Challenges & Wins](#challenges--wins)
  - [Future Features & Key Learning](#future-features--key-learning)
    - [Future Features](#future-features)
    - [Key Learning](#key-learning)
- [Contributors](#contributors)
  - [Contributing to this project](#contributing-to-this-project) 
- [License & Copyright](#license--copyright)
- [Author Info](#author-info)

---

## Get Started
### Required
You can register to the website or if you would like to experience the website with seeded data in it, you can log with the following:
- email: cerrone.alberto93@gmail.com
- password: pass

If you would like to participate in this project, you can download this JSON with all the routes to test the responses from the API. <br>
This JSON has to be imported to [Insomnia](https://insomnia.rest/)👇<br>

<a download href="https://raw.githubusercontent.com/albertocerrone/The-Bugbuster/main/assets/readme/Insomnia_the_Bugbuster.json">![img](https://img.shields.io/badge/-DOWNLOAD%20JSON...-blue)</a>
<br>


### Installation Steps
Clone or download the repository then do the following in Terminal:

- Install back-end dependencies:  `pipenv`
- Enter Shell for project: `pipenv shell`
- Make Migrations: `python manage.py makemigrations`
- Migrate: `python manage.py migrate`
- Seed your database following this order: 
  - `python manage.py loaddata jwt_auth/seeds.json`
  - `python manage.py loaddata projects/seeds.json`
  - `python manage.py loaddata group_members/seeds.json`
  - `python manage.py loaddata tickets/seeds.json`
  - `python manage.py loaddata comments/seeds.json`
- Start back-end server: `python manage.py runserver`
- Change into front-end directory: `cd client`
- Install front-end dependencies: `yarn`
- Start front-end server: `yarn start`
### How to Use It


![img](assets/readme/homepage.png)<br>
The landing page of our Bugbuster gives to the user the opportunity to decide if register or to login to the website.

![img](assets/readme/register.png)<br>
The registration required the fulfillment of every field of the form and to upload a profile picture

![img](assets/readme/login.png)<br>
The authentication process works with email and password, and handle errors in case of wrong email or password.



![img](assets/readme/navbar.png)
![img](assets/readme/sidebar.png)<br>
The shared components that are available around all the website are the navbar and sidebar. In the navbar, the user can navigate back to the home by clicking on "the Bugbuster" logo, can logout or receive notification (a feature to be released in the future).<br>
The sidebar allows the user to navigate between:
- Home
- Tickets
- Analitycs (a feature to be released in the future)
- Account
- Setting (a feature to be released in the future)

At the bottom of the sidebar, the user will find his avatar, first name, last name, and username.<br>
![img](assets/readme/noAvatar.png)<br>
In case the avatar doesn't work, a default picture will be automatically given.

![img](assets/readme/home.png)<br>
Home gives a view of all the projects created by the user or is assigned to.<br>
Every card shows the project name, description, deadline, and what role the user has inside that project.
At the bottom-right of the page, a purple action button will allow the user to create a new project.

![img](assets/readme/newProject1.png)<br>
The first step while creating a new project is to give a name, description, and a deadline.
![img](assets/readme/selectRoles.gif)<br>
The second step allows the user to find who will be a member of that project and what role is assigned to him/her.

![img](assets/readme/projectPage.png)<br>
On the page of the project, the user can have a detailed look at:
- Title, description, and deadline
- How the tasks are performing with the Progress Bar (coming soon)
- Members of the project with related roles
- Tickets with all the details and a button to create comments
![img](assets/readme/ticketDetail.png)<br>


![img](assets/readme/newTicket.png)<br>
To create a new ticket, the user can click on the purple floating button at the right-bottom of the page.<br>
On this page will be allowed to select:
- Ticket's Title
- Description
- Who is the member of the team assigned to this ticket
- Ticket's type (Bug, New Feature, Update Feature, Delete Feature) 

The status will be automatically assigned to "New", but it can be updated to different states (In Progress, Feedback, Blocked, Resolved)

![img](assets/readme/tickets.png)<br>

From the side bar, the user can navigate to the page Tickets.
Tickets show all the tickets that a user created or he has been assigned to.
Every card shows the ticket name, ticket description, ticket type, and who is the owner or the user assigned.

[Back To The Top](#the-bugbuster-)

---
## How I Made It
### Technologies Used

#### Languages Used
- [JavaScript](https://www.javascript.com/)
- [Python 3.9](https://www.python.org/downloads/release/python-390/)
#### Frameworks
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React with React Hooks](https://reactjs.org/)
- [Material-UI (core, icons, lab, pickers)](https://material-ui.com/)
#### Dependencies
##### Backend
- [PyJWT](https://pyjwt.readthedocs.io/)
- [Python-dotenv](https://pypi.org/project/python-dotenv/)
- [Django REST Framework JSON CamelCase](https://pypi.org/project/djangorestframework-camel-case/)
- [dj-database-url](https://pypi.org/project/dj-database-url/)
- [Django on Heroku](https://devcenter.heroku.com/articles/deploying-python)
##### Frontend
- [Axios](https://github.com/axios/axios)
- [clsx](https://github.com/lukeed/clsx)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [React-perfect-scrollbar](https://github.com/goldenyz/react-perfect-scrollbar)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

### Approach Taken

For my final project in General Assembly, I wanted to build something using Material-UI. This because I've been learning Material-UI on my own during the course and I wanted to bullet-proof my knowledge with this UI framework.
As well I wanted to build something in a team because I believe in the African proverb "If you want to go fast, go alone. If you want to go far, go together".

When Daniel approached me with the idea of building a bug tracker app, I was instantly interested. It was matching my vision of building something that was going to:
- Be useful to me in the future 
- Talk about a common business problem
- Have a user authentication 
- Have an attractive and responsive UI

##### Planning
We spent the first day planning every face of the project:
* We used a Trello board to throw down all the tasks that we considered important to do for our MVP.
![img](assets/readme/trello.png)
* Our back-end and all the relationships were planned using [QuickDB](https://app.quickdatabasediagrams.com/#/d/p9TZMZ). <br>
![img](assets/readme/diagram.png)<br>
My partner was intrigued to allow every user of the website to don't have a pre-decided role (manager or developer) but to give this choice every time the user is going to create a new project. <br>
Be the manager of the project allows the user to create new tickets (tasks) and to update the status of the ticket as "Resolved". On the other end,  being a developer allows changing the status of the tickets between "In Progress", "Feedback" and "Blocked".
To do so, we created a join table called "Group_member" that store the user_id and what role they have in every project.

* Since I wanted to use Material-UI, I spent a bit of time, researching ideas of the style that I wanted to give.<br>
It's been really helpful downloading various templates and guides to take inspiration and the one created by [Devias](https://material-ui.com/store/items/devias-kit/) felt matching with my vision for this app. <br>
Using a template as a reference, allowed me to boost my development process and to take care not only of the UI but backend too.

After the day of planning, the first 2 days of coding were focused on building the backend with Django and PostgreSQL.
The second day, Daniel started to set up React and starting to work on the frontend's logic, and I finished building the rest of Django.

From the third day until the last, both of us were working together on the frontend. We organized each other in a way that Daniel was going to create the logic of the component needed and leaving me a good base where to implement all the styling from Material-UI.

[Back To The Top](#the-bugbuster-)

---
### Bugs, Blockers & Wins

#### Bugs
- [ ] Fix problems with roles and different limitations
- [ ] Fix responsiveness and background issue in the landing page
- [ ] Fix problems/refactor error handling
- [ ] Fix floating buttons that move while scrolling
- [ ] Change Icons in Tickets page
- [ ] Fix icons on the Project page (if the description is long they move at the bottom of the card)
- [ ] Fix navbar that changes color when scrolling
- [ ] Fix New ticket function (doesn't give the option to select the type)
 
#### Challenges & Wins
Building this project has been fun but, the short timeline didn't allow us to implement all the features that we were thinking to add, especially the most useful ones like the opportunity to update the tickets.<br>
We had to cut some corners and twist a bit our backend diagram during the last hours before deadline.

One of my biggest challenges has been the implementation of the second step where the user selects who is a member of the team and what roles he/she has.<br>
Took me a full day, but with the help from Daniel and my coach, we managed to implement a feature that I'm proud of.<br>
![img](assets/readme/selectRoles.gif)<br>
You can see the code from [here](client/src/components/roles&groups)
As well I love the responsiveness and the opportunity to be used without any problems on a small screen.<br>
![img](assets/readme/responsive.gif)

[Back To The Top](#the-bugbuster-)

---
### Future Features & Key Learning

#### Future Features
- [ ] Add Transitions & Animations
- [ ] Add Notification feature
- [ ] Add Analytics page where user can find charts reflecting the performance tickets & projects
- [ ] Improve Account page with better UI
- [ ] Add Setting page where the user can switch between Dark Mode/ Light Mode and where to change the account password
- [ ] Make Tasks Progress bar working
- [ ] Improve UI for Ticket's comments
#### Key Learning
This project was one of my favorites where I had the opportunity to learn so much.<br>
I loved work with Django and Python. It allowed us to build the backend with a higher speed compared to Node.js

But I feel that the best takeaway is coming from the use of the template for reference.<br>
Using the template allowed me to enter in contact with a code written from a stranger, with a completely different design pattern and new libraries like prop-types.<br>
Prop-types, in particular, allowed me to enter in contact with type checking and a little taste of how useful can be with bigger projects. <br>
Now I'm really curious to learn more about type checking and TypeScript in particular.


[Back To The Top](#the-bugbuster-)

---
## Contributors
* Alberto Cerrone [📧](mailto:cerrone.alberto93@gmail.com)
* Daniel Fernandez De Ascencao [📧](mailto:dfernandezda21@gmail.com)

### Contributing to this project
If you have suggestions for improving this project, please [open an issue on GitHub](https://github.com/albertocerrone/The-Bugbuster/issues/new).

[Back To The Top](#the-bugbuster-)

---
## License & copyright

This work is dedicated to the [public domain (CC0 1.0)](http://creativecommons.org/publicdomain/zero/1.0/). To the extent possible under law, Alberto Cerrone has waived all copyright and related or neighbouring rights to the Bugbuster. See the LICENSE file for all the legalese.



[Back To The Top](#the-bugbuster-)

---
## Author Info
- Twitter - [@AlbertoCerrone](https://twitter.com/AlbertoCerrone)
- LinkedIn - [Alberto Cerrone](http://www.linkedin.com/in/alberto-cerrone/)
- Website - [Portfolio](http://albertocerrone.co.uk)

[Back To The Top](#the-bugbuster-)
