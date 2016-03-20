let initialState = {
    // State for the current video
  currentVideo: {
    id: {
      videoId: ''
    },
    snippet: {
      title: 'Welcome to Recast.ly!',
      description: 'Search and click a video to get started!'
    }
  },
  // State for the list of videos
  videoList: []
};

let store = configureStore(initialState);



ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('app')
  );
