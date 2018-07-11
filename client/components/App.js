class App extends React.Component {

  constructor(props) {
    super(props);
  }

  /*
   * Change the current video playing on the video player based on the one
   * clicked on by the user.
   *
   * @params: video - video selection to change the current video to
   */
  handleClick(video) {
    this.props.dispatch(actions.changeCurrentVideo(video));
  }

  /*
   * Handle input from the user for searching for YouTube request by sending
   * the request to the YouTube API and making the necessary adjustments.
   *
   * @params: event - the event triggered by inputting text in the form
   */
  handleSearch(event) {
    var options = {};
    options.key = YOUTUBE_API_KEY;
    var jsonpRequest = function(url, callback) {
      var script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = url + '?' + callback + '=parseResponse';
      document.body.appendChild( script );
    };    options.query = event.target.value;
    options.max = 5;

    var callback = function (data) {
      this.props.dispatch(actions.changeCurrentVideo(data));
      this.props.dispatch(actions.changeVideoList(data[0]));
    };
    searchYouTube(options, callback.bind(this));
  }

  /*
   * Initialize movies in the viewer by retrieving a list of movies from the
   * YouTube API
   */
  componentDidMount() {
    var options = {};
    options.key = YOUTUBE_API_KEY;
    options.query = 'react';
    options.max = 5;

    // Callback to process data received from YouTube API
    var callback = function (data) {
      this.props.dispatch(actions.changeCurrentVideo(data));
    };
    searchYouTube(options, callback.bind(this));
  }

  render() {
    return (
      <div>
      <Nav handleSearch={this.handleSearch.bind(this)}/>
      <div className="col-md-7">
      <VideoPlayer video={store.getState().currentVideo}/>
      </div>
      <div className="col-md-5">
      <VideoList dispatch={this.props.dispatch} videos={store.getState().videoList}/>
      </div>
      </div>
      );
  }
}
/*
var mapStateToProps = function(state) {
  return state;
};

//connect(mapStateToProps)(App);


/*
IMPLEMENT LATER:
  Binds dispatch to props and will have access to dispatcher
  var mapDispatchToProps = function(dispatch) {
    return {
      actions: bindActionsCreators(actions, dispatch);
    }
  };

  connect(mapStateToProps, mapDispatchToProps)(App);
*/
// Create a store
//var createStore = Redux.createStore;
