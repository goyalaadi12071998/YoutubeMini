import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videoResults = props.videoResults;
    const onVideoSelect = props.onVideoSelect;
    const List = videoResults.map(videoItem => {
        return (
            <VideoItem 
                key={videoItem.id.videoId} 
                videoItem={videoItem} 
                onVideoSelect={onVideoSelect} 
            />
        ); 
    });
    return (
        <div className="ui relaxed divided list">{List}</div>
    )    
}
 
export default VideoList;