This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# react-core-concepts

🚀 React Core Concepts in a nutshell
React is a library for building user interfaces, composed of components. Components simply are just parts of a webpage. e.g. header,navbar, sidebar, card, tab, footer and so on. It is popular for building single page applications aka SPA

Table of content

🚀 React Core Concepts in a nutshell
What are components?
Create component and return HTML
Pass data to a component as props
Pass object to a component and access it
Create multiple components dynamically
Event, Component state, setState(), State hook
Load data from API, useEffect(), Effect Hook
Virtual DOM, diff algorithm, react fiber
To begin working on react, lets install it first. Follow along these commands:

npx create-react-app my-app
cd my-app
npm start
Folder structures, Emmet

running create-react-app will make all the folders and files to start building react applications.

my-app/public - Don't worry about this one, its just contains the root html file. Here all the react code will be injected to the <div id="root"></div> of index.html.
my-app/src - this is the folder to work. App.js is the root component of a react application. You can create custom files and folders to make components. Some .css files are here to style the components.
Leave the rest as it is, don't rush you'll understand them yourself after sometime. Lets just say these files are very important and if you try to edit them you'll face unwanted circumstances.
Now edit settings.json to add magic on vscode, so that emmet will suggest to write html inside .js file which is known as JSX.

"emmet.includeLanguages": {
    "javascript": "javascriptreact",
}
What are components?
Its not rocket science to understand components 😉, one of the core concepts of modern frontend developments/technologies such as - angular, react, vue etc.

These are the 4 ways to understand them:

Similar in pattern, different in look
Container and/or Root component
Single unit component
Mixed (mixes and matches other components)
Create component and return HTML
Follow the these 2 basic steps to create hello world component.

Create a function, make it capitalize
Return a JSX from it
on App.js after App() ends, write this -

function HelloWorld() {
	return (
		<div>
			<h3>Hello World!</h3>
		</div>
	);
}
Now you can use this component inside App() as this <HelloWorld></HelloWorld>.

you'll see Hello World! is showing on the browser.

Pass data to a component as props
This HelloWorld component will always display Hello World! how many times you write it. To show different data props is used.

function App() {
	return (
		<div>
			<HelloWorld name='Hello World'></HelloWorld>
			<HelloWorld name='Hello Bangladesh'></HelloWorld>
		</div>
	);
}

function HelloWorld(props) {
	return (
		<div>
			<h3>{props.name}</h3>
		</div>
	);
}

export default App;
// Output:

Hello World
Hello Bangladesh
Pass object to a component and access it
Lets get values for components from any object, rather than hard coding.

function App() {
	const products = [
		{ name: "Photoshop", price: "$4.00" },
		{ name: "Figma", price: "$5.00" },
		{ name: "Sketch", price: "$6.00" },
	];

	return (
		<div>
			<Products
				name={products[0].name}
				price={products[0].price}></Products>
			<Products
				name={products[1].name}
				price={products[1].price}></Products>
		</div>
	);
}

function Products(props) {
	return (
		<div>
			<h3>
				Name: {props.name}, Price: {props.price}
			</h3>
		</div>
	);
}

export default App;
// Output:

Name: Photoshop, Price: $4.00
Name: Figma, Price: $5.00

Create multiple components dynamically
We can't create component depending on data like this- products[0]. Because every time new element added we have to create a new component for it. lets make it dynamic depending on data.

function App() {
	const products = [
		{ name: "Photoshop", price: "$4.00" },
		{ name: "Figma", price: "$5.00" },
		{ name: "Sketch", price: "$6.00" },
		{ name: "After Efects", price: "$26.00" },
		{ name: "Premier pro", price: "$96.00" },
	];

	return (
		<div>
			{products.map((item) => (
				<Products product={item} />
			))}
		</div>
	);
}

function Products(props) {
	return (
		<div>
			<h3>
				Name: {props.product.name}, Price: {props.product.price}
			</h3>
		</div>
	);
}

export default App;
// Output:

Name: Photoshop, Price: $4.00
Name: Figma, Price: $5.00
Name: Sketch, Price: $6.00
Name: After Efects, Price: $26.00
Name: After Efects, Price: $96.00

See, only this line is responsible for creating 5 components. why 5 ? because, products array has 5 objects.

{
	products.map((item) => <Products product={item} />);
}
Event, Component state, setState(), State hook
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

const [count, setCount] = useState(0);

read more...

import React, { useState } from "react";

function App() {
	return (
		<div>
			<Counter />
		</div>
	);
}

function Counter() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);
	const handleIncrease = () => setCount(count + 1);
	const handleDecrease = () => setCount(count - 1);

	return (
		<div>
			<h1>
				Counter:
				<button onClick={handleDecrease}>-</button>
				<strong> {count} </strong>
				<button onClick={handleIncrease}>+</button>
			</h1>
		</div>
	);
}
export default App;
Load data from API, useEffect(), Effect Hook
The Effect Hook lets you perform side effects in function components. e.g, data fetching, setting up a subscription, and manually changing the DOM in React components and son on.

read more...

import React, { useState, useEffect } from "react";

function App() {
	return (
		<div>
			<Users />
		</div>
	);
}

function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h3>Dynamic users: {users.length} </h3>
			<ul>
				{users.map((user) => (
					<li>
						{user.name}, <br />
						{user.phone},<br />
						{user.email}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
Virtual DOM, diff algorithm, react fiber
“Document Object Model” - The DOM in simple words represents the UI of your application,represented as a tree data structure. The changes and updates to the DOM are fast. But after the change, the updated element and it’s children have to be re-rendered to update the application UI. This makes DOM manipulation slower.
The "virtual DOM" is only a virtual representation of the DOM. Every time the state of our application changes, the virtual DOM gets updated instead of the real DOM. This updated DOM is then batch updated to the real DOM.
"Diff algorithm" - React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”

"React Fiber" is an internal engine allows React to fine tune rendering to make sure the most important updates happen as soon as possible

Thank you so much for your time to follow along. If you smell somethings wrong, please do let me know. If you liked it give it a star.
