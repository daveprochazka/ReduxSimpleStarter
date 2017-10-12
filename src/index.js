//lib imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//class imports
import SearchBar from './components/search_bar';
import ButtonWarning from './components/button_warn';
import VideoList from './components/video_list';

//Constant values
const API_KEY = 'AIzaSyBSbBioqmNegUzcQQrr5_LRuJ4mWL30yXk';


//create a new component
//this component should produce some html
class App extends Component{

    constructor(props){
        super(props);

        this.state ={videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>
            {this.setState({videos})
        });
    }
    render(){
        return(
            <div>
                <div>
                    <SearchBar />
                    <VideoList videos={this.state.videos}/>
                </div>
                <div>
                    <ButtonWarning />
                </div>
            </div>
        );
    }

}

//take this component's generated html and put it on the page (put in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
