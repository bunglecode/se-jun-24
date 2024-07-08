# Software Engineering Summative 1
Northeastern University submission

# Deployment Pipeline Tracker
## About
Developer: James Saunders \
\
GitHub Username: @bunglecode \
\
Access the app [here](https://bunglecode.github.io/se-jun-24/).

![app screenshot new](https://github.com/bunglecode/se-jun-24/assets/53307096/94d50ebb-87f4-47b0-bb66-78e9cdc6cd74)

This web application is designed to help data engineering teams keep track of the state of their deployments throughout the development environments. The app allows users to add deployments, edit and delete them, enter an assignee, and drag and drop the deployment tasks between the columns labelled by environment. In future versions of this app, I plan to include a login system for security purposes and the ability to filter the board by assignee. \
\
The reason I created this app is because I wanted to begin exploring a more efficient and modern way of keeping a deployment log. Currently, in my workplace, we use clunky methods, like a slow running Microsoft Teams area that has been glitchy in the past (not saving the state of certain changes, for example). My app aims to prioritise accessibility, functionality, and speed of use, which is why I have kept the design lightweight and employed the use of asynchronous drag and drop functionalities. \
\
To summarise, the app aims to:
- Increase speed of updating deployment log so more time can be spent actually coding/deploying.
- Provide a simple UI with intuitive drag and drop mechanics.
- Keep design lightweight, avoiding the likelihood of glitches as described when using Microsoft Teams method.
- Provide clear status for each deployment and who owns which.

# Technical Documentation
## Tech Stack
- HTML
- CSS
- JS
- jest

## Repo content
- index.html
- style.css
- script.js
- script.test.js (needed to execute tests)
- package.json (needed to execute tests)

# Development Practice
While developing the app, I used Git branches and commands to capitalise on version control and automated integration. Known as best practice in the world of DevOps, I was able to create branches specific to certain features of the app or bugs that needed to be fixed, for example. This helps with organising your project as you can essentially break it down into digestible chunks, ensuring you do not get overwhelmed as easily. Each of these chunks, or branches, can be tested in isolation before merging them with the main branch that end users will experience. The branch owner can also assign a peer reviewer during the creation of a pull request (which is created when merging into the main branch), decreasing the likelihood of bugs making it through to the main branch. This methodology is often referred to as **continuous integration**.\
\
One example of the pull requests saving me in this project was when I: pushed a branch I had finished working on, created the pull request to merge the branch into main, then saw that there were merge conflicts. I was confused as to why the merge conflict had appeared as I thought I had only made additions to the base code in main. It turned out I had created both branches at the same time from main and had made changes to the same line in the same file on both branches seperately, which was flagged as a conflict when I tried merging them both into main. GitHub then asked me to fix the conflicts, which put me at ease knowing what the final merge version would be.

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

### 3. Check npm package for vulnerabilities:
Run this in terminal:
```sh
npm install
```

### 4. Run tests in script.test.js:
Providing npm has been installed in step 3, run the code below in terminal to execute the tests:
```sh
npm test
```
The test results will appear in the terminal when it has finished or encountered an error. It will detail the number of tests that passed/failed amongst the tests it was able to execute. See example below:

![tests](https://github.com/bunglecode/se-jun-24/assets/53307096/ebacab58-a9f5-4f95-9a41-cc96e46776ac)


# Designing the User Interface (UI)
[Figma presentation link](https://www.figma.com/proto/J8f1aNzDHAWvMtgQhlYhWB/Deployment-Pipeline-Tracker?node-id=0-1&t=dk3OftWDntUV0y0F-1)

Using Figma, my main goal was to show the core functionalities of the application within it's UI, all before I had written any code.\
\
I created a prototype that showcases deleting a task, adding a task, and moving a task by drag and drop. The prototype allows me to demonstrate the application to stakeholders or end users, for example, so they can see what the application will resemble when the coding has finished. This is especially valuable in an Agile context, where mock-ups may need to be whipped up quickly to demonstrate a new feature for the scrum members to deliberate over when setting up the next sprint. Finally, it can be a good motivation tool for both the stakeholders and the developers; offering something tangible to look at and play with for the former, and providing a clear visual goal - and some basic functionality framework if using figma prototypes - for the latter.


# A/B Testing
I also created an alternative visual. The purpose of this was to gauge the aesthetic with end users, allowing me to perform A/B testing to determine which of the visuals users seem to prefer.

I created a [Google form](https://forms.gle/YdFE3kosTBXQQWUF8) to collect responses between a couple of design choices. My hypothesis was that columns would be a better layout for my application. This is because the target market of my application is developers, who are likely to be familiar or often use Kanban boards, which is where I got the inspiration for the column 'lanes'. However, I did not want to blindly assume this would be a preferred layout, so I developed a row option on the form. I sent the form to some co-workers and the results were as follows: \
\
![results](https://github.com/bunglecode/se-jun-24/assets/53307096/6d1d3d59-9e4f-4dc7-bfa5-b5ed34b77b8e) \
The results clearly state that the column layout is preferred, supporting my hypothesis.


# Managing the Project with GitHub Projects
I used GitHub Projects to create a Kanban board for building my app. Since this was a shorter project, it was not appropriate to divide my development up into sprints, but I still created individual tasks on the Kanban board so I could keep track of the status of each one. See the example of this below:\
\
![Kanban board](https://github.com/bunglecode/se-jun-24/assets/53307096/6f3b5a5f-a59c-45a4-ab0c-9c087d2f4e72)
In each task, I assigned myself as an Assignee, gave the task a label out of enhancement, bug, action (coding an action or event), or styling, linked it to my Software Engineering Summative 1 project, and then created a branch directly from the task so it would be linked.\
\
![example task](https://github.com/bunglecode/se-jun-24/assets/53307096/7ba6d1cc-af1c-4712-bebf-a5d03dafc8c8)
Having all my tasks laid out and organised like this meant I could directly compare and prioritise them. I could also get a quick view of my "In Progress" tasks to make sure I was not overloading myself with too much concurrent development.\
\
Another benefit of using this board was that I could manage my time better, because the tasks were in smaller bites. I could more accurately estimate the amount of time it would take to complete a task, which was invaluable given the quick turnaround required for this application. It meant I could focus on producing a finished product with the most important functionalities, employing MoSCoW (Must have, Should have, Could have, Won't have) to determine which were "must haves", and park some nice-to-have features for a future iteration. This is what working Agile is all about: flexibility, transparency, and iterative development.

# How I Built the Prototype in Visual Studio Code
Producing the MVP consisted of the following steps:
1. I developed the HTML script skeleton, adding text and headers, as well as the head information.
2. I started styling using a CSS script. There were some parts of the application I could not yet style, such as the task boxes, because they would be created when I write the javascript.
3. In the js file, I started by defining a counter for task IDs to ensure each task has a unique identifier.
4. I then created the add, edit and delete task functions. The add task function prompts the user for a task description and assignee, then dynamically generates a task element with edit and delete options.
5. Adding the task functions meant I could go back and style them using CSS.
6. I then created the functions for dragging and dropping the task boxes between columns.
7. I finished off by styling the buttons that exists in the app, including interactive styling, like hover.

While writing the code as described above, I ensured that I made every effort to adhere to coding best practice. For example, in the image below, I have used comments for each line of code, describing what it is doing operationally. This helps in handover situations, where a new developer may takeover from another on a project and must get familiar with the code that has already been written. Comments help to reduce this cumbersome task by providing natural language explanations of the code directly from the person who wrote it.\
I also used camel case when defining and calling functions, making the syntax easier to read as a reader can see where a new word in the functions begins and ends.\
\
![code syntax](https://github.com/bunglecode/se-jun-24/assets/53307096/265c9fe6-b1bf-404d-a3c4-fcd6dadb322a)


# Testing
## Test Driven Development Using Jest
I created unit tests within the ```script.test.js``` file in my repo, where the tests are run using Jest. Jest unit testing is useful as it allows me to check new javascript I write in ```script.js``` as I code, keeping a cumulative bank of tests based on the type of code I write. For example, in the ```addTask``` function of my ```script.js``` file, I check that the task description is not empty before allowing the user to create the task. Following this, I wrote a unit test that checks multiple strings to ensure my function can identify empty strings accurately. The code for this is below:
```js
test('isTaskDescriptionValid should return true for non-empty strings', () => {
    expect(isTaskDescriptionValid('Task 1')).toBe(true);
    expect(isTaskDescriptionValid('  Task 2  ')).toBe(true);
    expect(isTaskDescriptionValid('')).toBe(false);
    expect(isTaskDescriptionValid('   ')).toBe(false);
    expect(isTaskDescriptionValid(null)).toBe(false);
    expect(isTaskDescriptionValid(undefined)).toBe(false);
    expect(isTaskDescriptionValid(123)).toBe(false);
});
```
After testing this and seeing that it passed, I can rest assured that if I use this function again elsewhere, it will do its purpose effectively. On top of this, it will remain in my test file, so if for some reason the function breaks, running a test later will catch the error and inform me. This is essential for agile developement, as it ensures that unit tests are constantly run as the application evolves, meaning when an error is caught it can be dealt with promptly. Another benefit of unit testing is that it is relatively simple to implement. [Jest's documentation](https://jestjs.io/docs/getting-started) is very easy to read and understand if you have a basic knowledge of javascript, so the tests you write can be as simple or as complicated as you require.

## Google Lighthouse Analysis
In order to ensure the best user experience for as many different types of user as possible, I used [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) to audit my application's performance, accessibility, SEO, and best practices.
- Performance - A measure of how quickly a web page loads and become interactive, recording metrics like how fast the first piece of content is rendered.
- Accessibility - How well can the web page be used by people with disabilities, like colour blindness or those who use keyboard navigation? The accessibility measure checks this.
- SEO (Search Engine Optimisation) - How easily can the web page be indexed for search engines? If well, then it can be disovered more easily. SEO is often seen as a form of marketing as it relates to getting your web page in front of the right people.
- Best Practices - This measure checks coding standards, security, and other web standards.

The scores I received can be seen in the image below: \
\
![glighthouse](https://github.com/bunglecode/se-jun-24/assets/53307096/a0e40be6-2bbb-463e-8c41-8713b4845cd9) \
The scores overall were acceptable for deployment, signalled by the green colour and the scores being all between 90-100. However, the accessibility score being 90 suggested there are some users that would struggle to use my application, which I was keen to solve. Google Lighthouse's analysis report let me know that this was due to the contrast of the text colour on the buttons and and headers being too low against the light blue background. \
\
![failing elements](https://github.com/bunglecode/se-jun-24/assets/53307096/d95e8f48-2db3-4f14-90d7-3c8d20b58451) \
Lighthouse provided a link to a [colour contrast checker](https://dequeuniversity.com/rules/axe/4.9/color-contrast) that helps you find an acceptable contrast. I used this to find an acceptable contrast for white text, which ended up being a brown (hex code #611919) that I was happy to use in my application. After comitting this style change and re-running Lighthouse for the updated page, I received a score of 100 for accessibility.
\
![fdgfdg](https://github.com/bunglecode/se-jun-24/assets/53307096/ed6d7d05-b0d2-4b36-b4df-80749edbb963) \
The SEO score remained at 90, which according to Lighthouse was due to the omission of a meta description in my HTML file. I added one, describing what my application did, then I re-ran Lighthouse once more. I received a score of 100 for SEO, confirming all my changes were appropriate.
\
![100](https://github.com/bunglecode/se-jun-24/assets/53307096/5ca879c1-15d5-40c4-84cd-af02916e9111) \
Getting 100 on all of the analysis features was fairly simple as my application is lightweight, but for some more dense applications it could be much harder to reach a perfect score. Nonetheless, Lighthouse seems a relevant (and free) tool to get as close as possible, ensuring user experience is kept at the forefront of development.

## Manual Accessbility Testing
Using Google Lighthouse is very useful for visual accessibility validity, but I wanted to ensure the functional accessibility of the site was checked as well.

### Keyboard Navigation
I tested keyboard navigation on my application and noticed that the buttons do not change colour when they are currently selected by pressing tab. This was important to rectify, so I added a 'button:focus' section in my CSS file to account for this oversight. The code is shown below:
```css
button:focus {
    background-color: #9F2828;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
```

### Screen Readers
I added a Chrome extension called [Read Aloud: A Text to Speech Voice Reader](https://chromewebstore.google.com/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp) in order to test my web page for screen reading. The first thing I noticed is that the only text being picked up by the reader was text within tasks I had added, not the header or the "Add Task" button at the bottom of the page. I was able to get the screen reader to recognise the header text by highlighting it, a feature of the extension I added, but this was not as easy to do for the button without accidentally clicking it. Additionally, expecting visually impaired users to highlight text before the screen reader can notice it is not acceptable. Admittedly, I did not have time to figure out a solution for this for the MVP, but it has been added as a task on the project board for a future iteration.



# Evaluation
Overall, the design of my application is something I am happy with. For the MVP, I focused only on the desktop version of the application, but in future iterations I would be keen to make the page more responsive so users can access it via mobile devices. There are a couple of other future iterations I have planned, including a login system with team areas so the application becomes as collaborative as originally intended. I would also like to improve the accessibility of the application where Lighthouse did not detect issues, as detailed in the accessibility testing section above. \
\
The functionality of the application is easy to understand, with a lightweight design and clear action buttons that lead the user through stages to creating, editing, or deleting a task. The task dragging is a little less obvious; perhaps adding some instructions on the page would be a useful addition in the future. With such a lightweight design, creating clear sections was important. This is why I added box shadows to each column lane, along with a subheader for each. Also, when a task is added, a slightly darker thin border rim hugs the content and buttons to clearly distinguish them from each other. I also added some aesthetical nice-to-haves, like the background of a button going a lighter shade of brown when the mouse hovers over it. This is mirrored in the previously discussed tab selection highlighting, which is as functionally required as it is an aesthetic choice. \
\
The main goal of the design was to keep it minimal with some colourful accents to inject personality, but not overload the page with busy design choices to avoid detracting from the core purpose. As more features are added in future iterations, I imagine some design choices will have to be re-evaluated as well, but for now I am happy with how my app looks and functions.
