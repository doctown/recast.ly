let actions = {
  changeCurrentVideo: function(video) {
    return {
      type: 'CHANGE_VIDEO',
      video: video
    }
  },
  changeVideoList: function(videoList) {
    return {
      type: 'SEARCH_INPUT',
      videos: videosList
    }
  }
};

 // Takes in a text and returns a text
 //store.dispatch(function(some value)
 //{
 //
 //});