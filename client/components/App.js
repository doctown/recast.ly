class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // State for the current video
      currentVideo: exampleVideoData[0],
      // State for the list of videos
      videoList: exampleVideoData
    };
  }

  handleClick(video) {
    this.setState({
      'currentVideo': video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} setState={this.setState.bind(this)} state={this.state} handleClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
