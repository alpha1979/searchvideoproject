import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({title, videos, onVideoSelect})=>{
    const renderList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return <div className="ui relaxed divided list">
        <h4>Your Searched Videos</h4>
        {renderList}
    </div>;
}
export default VideoList;