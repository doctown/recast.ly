class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  // When the currect video state changes, 
    // Change this video info to the new video title
  // setState() {
  //   currentVideo: 
  // }

  render() {
    return (  

      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.state.currentVideo.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.state.currentVideo.snippet.title}</h3>
          <div>{this.state.currentVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
}

window.VideoPlayer = VideoPlayer;
