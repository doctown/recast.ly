var VideoList = (props) => (
  <div className="video-list media">
  {props.videos.map( video =>
    <VideoListEntry video={video} state={props.state} setState={props.setState} handleClick={props.handleClick}/>
    )}
  </div>
);

window.VideoList = VideoList;
