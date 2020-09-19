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
        const results = await searchVideos(term);
        this.setState({
            videoResults: results,
            selectedVideo: results[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    componentDidMount(){
        const defautSearch = ['Naruto','DragonBall Super','Songs','New Hits','Punjabi Songs','Feelings'];
        var randomNumber = Math.floor(Math.random()*defautSearch.length);
        this.onTermSubmit(defautSearch[randomNumber]);
    }

    render() { 
        return (  
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid"> 
                    <div className="ui row">    
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div 
                            className="five wide column" 
                            style={{height:'560px',overflow:'scroll',border:'none'
                        }}>
                            <VideoList 
                                videoResults={this.state.videoResults} 
                                onVideoSelect={this.onVideoSelect}
                            />
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;