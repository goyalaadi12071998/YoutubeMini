import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { searchVideos } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
    state = {  
        videoResults: [],
        selectedVideo: null
    }

    onTermSubmit = async (term) => {
        //console.log(term);
        const results = await searchVideos(term);
        this.setState({videoResults: results});
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        console.log(this.state.selectedVideo); 
    }

    render() { 
        return (  
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList 
                    videoResults={this.state.videoResults} 
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}
 
export default App;