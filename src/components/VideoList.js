import { render } from '@testing-library/react';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    //console.log(props);
    const videoResults = props.videoResults;
    const onVideoSelect = props.onVideoSelect;
    const renderList = videoResults.map(videoItem => {
        return <VideoItem videoItem={videoItem} onVideoSelect={onVideoSelect} />
    });
    return (
        <div className="ui relaxed divided list">{renderList}</div>
    )    
}
 
export default VideoList;