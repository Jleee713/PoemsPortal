# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# More info

## Description
This is a simple web server that allows users to read and add new poems. Users can also upvote on the number of likes to the poems. New poems that users add will be saved onto the web server for access at anytime. Any changes made must be pushed again before another heroku web deployment.

`git heroku push master`

## `npm run dev` 
Runs the app server locally with nodemon dependency.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## react-markdown-package

`npm install react-markdown` [https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)

Markdown allows better visualization and layout of texts. Wrap any text with <ReactMarkdown>

## Procfile
File that will run the following commands everytime you run deploy it to the heroku web server.

`release: npm run build`\
`web: node server/server.js`



## Adding a new poem
In the text area for adding a new poem, to add a linebreak (new line), you can have 2 spaces after a word to do this.

## Git cached files 
To update the pushed files to git so that it recognizes the latest version, execute these in the terminal in the following order

`git rm -r --cached .`\
`git add .`\
`git commit -am 'Removing cached files'`

## Future implmentaions could include:
<li> Authorization of users </li>
<li> Adding comments to poems </li>
<li> Search/Filter/Category function </li>
<li> A follow system for regular updates on a user </li>
<li> Better layout and improved design of the website </li>
<li> Animations </li>
<li> Related videos </li>
<li> Improved css styling </li>


