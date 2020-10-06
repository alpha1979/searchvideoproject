import React from 'react';
import classes from './VideoItem.module.css';

const VideoItem=(props)=>{
    return (
        <div className={classes.VideoItem} onClick={()=> props.onVideoSelect(props.video)}>
            <div className="item">
                <div className="header">{props.video.snippet.title}</div>
                <img 
                    src={props.video.snippet.thumbnails.medium.url} 
                    alt={props.video.snippet.title}/>
            </div>
        </div>
    );
}
export default VideoItem;