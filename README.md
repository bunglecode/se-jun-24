# Software Engineering Summative 1
Northeastern University submission

### Codecov

# Deployment Pipeline Tracker
## About
Developer: James Saunders \
\
GitHub Username: @bunglecode

![app screenshot](https://github.com/bunglecode/se-jun-24/assets/53307096/9517c99e-f10d-4192-8098-c98ec320054e)

This web application is designed to help data engineering teams keep track of the state of their deployments throughout the development environments. The app allows users to add deployments, edit and delete them, enter an assignee, and drag and drop the deployment tasks between the columns labelled by environment. In future versions of this app, I plan to include a login system for security purposes and the ability to filter the board by assignee. \
\
The reason I reason I created this app is because I wanted to begin exploring a more efficient and modern way of keeping a deployment log. Currently, in my workplace, we use clucky methods, like a slow running Microsoft Teams area that has been glitchy in the past (not saving the state of certain changes, for example). My app aims to prioritise accessibility, functionality, and speed of use, which is why I have kept the design lightweight and employed the use of asynchronous drag and drop functionalities. \
\
To summarise, the app aims to:
- Increase speed of updating deployment log so more time can be spent actually coding/deploying.
- Provide a simple UI with intuitive drag and drop mechanics.
- Keep design lightweight, avoiding the likelihood of glitches as described when using Microsoft Teams method.
- Provide clear status for each deployment and who owns which.

# Development Practice
While developing the app, I used Git branches and commands to capitalise on version control and automated integration. Known as best practice in the world of DevOps, I was able to create branches specific to certain features of the app or bugs that needed to be fixed, for example. This helps with organising your project as you can essentially break it down into digestible chunks, ensuring you do not get overwhelmed as easily. Each of these chunks, or branches, can be tested in isolation before merging them with the main branch that end users will experience. The branch owner can also assign a peer reviewer during the creation of a pull request (which is created when merging into the main branch), decreasing the likelihood of bugs making it through to the main branch. This methodology is often referred to as **continuous integration**.\
\
One example of the pull requests saving me in this project was when I pushed a branch I had finished working on, created the pull request to merge the branch into main, then saw that there were merge conflicts. I was confused as to why the merge conflict had appeared as I thought I had only made additions to the base code in main. It turned out I had created both branches at the same time from main and had made changes to the same line in the same file on both branches seperately, which was flagged as a conflict when I tried merging them both into main. GitHub then asked me to fix the conflicts, which put me at ease knowing what the final merge version would be.

# End User Documentation
If you would like to clone this repository for any reason, you will need to ensure you have npm installed to execute tests in **script.test.js**.\
Please see how you can do this below:

### 1. Check if you have npm and node installed (run this code in your terminal):
For npm:
```sh
npm -v
```

For node:
```sh
node -v
```

If you have them installed, you will see a version number returned. E.g. v20.14.0

If you do not have one/both of these installed, please refer to the [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions.

### 2. Clone the repository:
Run the code below in your terminal:
```sh
git clone https://github.com/bunglecode/se-jun-24
```
Doing this will create a local copy of the repo on your machine. Locate the copy to be able to see the code.

### 3. Run tests in script.test.js:
Providing npm has been installed in step 1, run the code below to execute the tests:
```sh
npm test
```
The test results will appear in the terminal when it has finished or encountered an error. It will detail the number of tests that passed/failed amongst the tests it was able to execute.

# Designing the User Interface (UI)
[Figma presentation link](https://www.figma.com/proto/J8f1aNzDHAWvMtgQhlYhWB/Deployment-Pipeline-Tracker?node-id=0-1&t=dk3OftWDntUV0y0F-1)

Using Figma, my main goal was to show the core functionalities of the application within it's UI, all before I had written any code.\
\
I created a prototype that showcases deleting a task, adding a task, and moving a task by drag and drop. The prototype allows me to demonstrate the application to stakeholders or end users, for example, so they can see what the application will resemble when the coding has finished. This is especially valuable in an Agile context, where mock-ups may need to be whipped up quickly to demonstrate a new feature for the scrum members to deliberate over when setting up the next sprint. It can also be a good motivation tool for both the stakeholders and the developers, the former because they have something tangible to look at/play with and the latter because they have a clear visual goal (and some basic functionality framework if using Figma prototypes).\
\
I have also created an alternative visual, which I will show later. The purpose of this was to gauge the aesthetic with end users, allowing me to perform A/B testing to determine which of the visuals users seem to prefer.

# Managing the Project with GitHub Projects
I used GitHub Projects to create a Kanban board for building my app. Since this was a shorter project, it was not appropriate to divide my development up into sprints, but I still created individual tasks on the Kanban board so I could keep track of the status of each one. See the example of this below:
![Kanban board](https://github.com/bunglecode/se-jun-24/assets/53307096/6f3b5a5f-a59c-45a4-ab0c-9c087d2f4e72)
In each task, I assigned myself as an Asignee, gave the task a label out of enhancement, bug, action (coding an action or event), or styling, linked it to my Software Engineering Summative 1 project, and then created a branch directly from the task so it would be linked.
![example task](https://github.com/bunglecode/se-jun-24/assets/53307096/7ba6d1cc-af1c-4712-bebf-a5d03dafc8c8)
Having all my tasks laid out and organised like this meant I could directly compare and prioritise them. I could also get a quick view of my "In Progress" tasks to make sure I was not overloading myself with too much concurrent development.\
\
Another benefit of using this board was that I could manage my time better, because the tasks were in smaller bites. I could more accurately estimate the amount of time it would take to complete a task, which was invaluable given the quick turnaround required for this application. It meant I could focus on producing a finished product with the most important functionalities, employing MoSCoW to determine which were "must haves", and park some nice-to-have features for a future iteration. This is what working Agile is all about: flexibility, transparency, and iterative development.

# How I Built the Prototype in Visual Studio Code

# Testing
## Unit Testing Using Jest
## Performance and Accesibility Testing

# Evaluation
