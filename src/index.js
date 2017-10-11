//lib imports
import React from 'react';
import ReactDOM from 'react-dom';

//class imports
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBSbBioqmNegUzcQQrr5_LRuJ4mWL30yXk';



//create a new component
//this component should produce some html
const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    );
}

//take this component's generated html and put it on the page (put in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
