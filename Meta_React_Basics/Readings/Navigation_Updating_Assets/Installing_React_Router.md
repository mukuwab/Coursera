In command line write:

     npm i react-router-dom@6

should show in package.json dependencies



index.js (BEFORE)

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



-----CHANGE TO THIS------
    index.js (AFTER)

import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);



----In App.js----

import {Routes, Route, Link} from 'react-router-dom';

for routing the children

<div>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
    </Routes>
</div>


use Link to = "/" from attributes, this one
would link to the homepage

this would go in the ul nav elements

Link to="/about-me" to go to About Me