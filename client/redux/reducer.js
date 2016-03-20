//Create a reducer
var reducerCurrentVideo = function(state, action) {
  // Add switch statement
  switch (action.type) {
  case 'CHANGE_VIDEO':
    //With this type we change the state to a new object
    Object.assign({}, state, {
      id: {
        videoId: action.id.videoId
      },
      snippet: {
        title: action.title,
        description: action.description
      },
    });
    break;
  case 'SEARCH':
    Object.assign({}, state, {
      videoList: [],
    });
  default:
    return state;
  }
};
// Create a reducer for videos
