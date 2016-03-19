var VideoList = (props) => (
  <div className="video-list media">
  {props.videos.map( video =>
    <VideoListEntry video={video} handleClick={props.handleClick}/>
    )}
  </div>
);

window.VideoList = VideoList;
