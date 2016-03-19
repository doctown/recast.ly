class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      'currentVideo': exampleVideoData[0],
      'videoList': exampleVideoData
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
