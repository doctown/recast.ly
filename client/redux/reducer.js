//Create a reducer
const initialState = {
  video: {
    id: {
      videoId: ""
    },
    snippet: {
      title: "Title Unavailable",
      description: "Description Unavailable"
    }
  },
  videoList: []
};

let reducer = function(state = initialState, action) {
  // Add switch statement
  switch (action.type) {
  case 'CHANGE_VIDEO':
    //With this type we change the state to a new object
    return Object.assign({}, state, {
      id: {
        videoId: action.video.id.videoId
      },
      snippet: {
        title: action.video.title,
        description: action.video.description
      }
    });
    break;
  case 'SEARCH_INPUT': // Create a reducer for videos
    return Object.assign({}, state, {
      videoList: action.videos
    });
    break;
  default:
    return state;
  }
};

