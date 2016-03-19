var search = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      videoEmbeddable: true,
      maxResults: options.max || 5,
      q: options.query,
      key: options.key,
      part: 'id, snippet',
      type: 'video'


    },
    success: function (data) {
      callback(data.items);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

var searchYouTube = _.debounce(search, 400);
window.searchYouTube = searchYouTube;