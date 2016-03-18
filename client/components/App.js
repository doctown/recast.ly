class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // State for the current video
      currentVideo: exampleVideoData[0],
      // State for the list of videos
      videoList: []
    };
  } 



  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
