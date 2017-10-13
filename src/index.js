//lib imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//class imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Constant values
const API_KEY = 'AIzaSyBSbBioqmNegUzcQQrr5_LRuJ4mWL30yXk';

const DEFAULT_SEARCH= 'surfboards';
//create a new component
//this component should produce some html
class App extends Component{

    constructor(props){
        super(props);

        this.state ={
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(DEFAULT_SEARCH)
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) =>
            {this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        return(
            <div>
                <div>
                    <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}/>
                </div>
            </div>
        );
    }

}

//take this component's generated html and put it on the page (put in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
