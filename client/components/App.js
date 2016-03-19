class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // State for the current video
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: 'Unavailable',
          description: 'Unavailable'
        }
      },
      //exampleVideoData[0],
      // State for the list of videos
      videoList: []//exampleVideoData
    };
  }

  handleClick(video) {
    this.setState({
      'currentVideo': video
    });
  }

  handleSearch(e) {
    console.log('e => ',e);
    var text = e.target.value;
    var options = {};
    // set the key to window key
    options.key = YOUTUBE_API_KEY;
    // set query to dogs
    options.query = text;
    // set max 5
    options.max = 5;

      // create callback
    var callback = function (data) {
      // set state
      this.setState({
        // set videoList to data
        videoList: data
      });
    };
    // call search you tube with callback and options
    searchYouTube(options, callback.bind(this));
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  //component did mount
  componentDidMount() {
    // create a variable called option
    var options = {};
    // set the key to window key
    options.key = YOUTUBE_API_KEY;
    // set query to dogs
    options.query = 'dogs';
    // set max 5
    options.max = 5;

    // create callback
    var callback = function (data) {
      // set state
      this.setState({
        // set videoList to data
        videoList: data
      });
    };
    // call search you tube with callback and options
    searchYouTube(options, callback.bind(this));
  }

  render() {
    return (
      <div>
      <Nav handleSearch={this.handleSearch.bind(this)}/>
      <div className="col-md-7">
      <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
      <VideoList videos={this.state.videoList} handleClick={this.handleClick.bind(this)}/>
      </div>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
