var VideoPlayer = (props) => (  
  // When the currect video state changes, 
  // Change this video info to the new video title

  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.state.currentVideo.id.videoId + '?autoplay=1'} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.state.currentVideo.snippet.title}</h3>
      <div>{props.state.currentVideo.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
