import React from 'react';
import './VideoItem.css';
const VideoItem = (props) => {
    const video = props.videoItem;
    const onVideoSelect = props.onVideoSelect;
    return (  
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                alt={video.snippet.title} 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}
 
export default VideoItem;