class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  // Handle a click event on the entry
  handleClick() {
    console.log("Just whatever!", this.props.video);
    // Change the current video state to this video title
    this.setState({
      currentVideo: this.props.video
    });
  }

  render() {
    return (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={this.handleClick.bind(this)}>{this.props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
    </div>
  </div>
    );
  
  }
}

window.VideoListEntry = VideoListEntry;
