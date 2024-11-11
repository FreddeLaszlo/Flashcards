# Flashcards
A project that creates quizzes with 'flashcards' that includes topics for the quizzes.

A demo can be viewed [here](https://freddelaszlo.github.io/Flashcards/).

This project is part of the Codecademy full-stack developer course.

## Technologies
At the time of writing, Codecademy uses the depreciated `create-react` system. This project was converted to and built using Vite + React. Additionally the React router plugin was updated to use a more modern approach.

The following technologies were used in the project:

 - Javascript
 - React
 - React router (client side routing between pages)
	- `createBrowserRouter()`
	- `createRoutesFromElements()`
	- `useNavigate()`
	- `<RouterPrivider />` element
 - Redux (state management using reducers)
	- `createSlice()`
	- `configureStore()`
	- `useDispatch()`
	- `useSelector()`
 - HTML 5
 
The following were added that was not in the original project specifications:
- `createBrowserRouter(routes, basename)`
	- Use of `basename` allowed the project to be production built *and served from* a sub directory of the server root, for example `http://www.someserver.com/subfolder`. Without `basename`, the built project will only work correctly if served from the server root directory. For convenience, the basename is automatically set to the current working directory (`window.location.path` without a trailing slash or just `/` for server root and, as specified in `vite.config.js`, `base: "./"`). Since this is a demo project, allowing it to run from anywhere is fine - in a secure production build these would likely be altered to the correct locations.

## How to Run the Project
Please ensure `npm` is installed on the system.

 1. Download the project zip file.
 2. Unzip to a development location.
 3. In a terminal `cd` to the directory where the project has been unzipped to.
 4. `npm install`
 5. `npm run dev` or `npm start` to run the project in development mode.
	 - The server will start and the project can be viewed in a browser at `http://localhost:5173` 
 6. `npm run build` to build the project for distribution. 
 

 

