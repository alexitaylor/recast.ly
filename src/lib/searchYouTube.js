var searchYouTube = (options, callback) => {
  $.ajax({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&maxResults=${options.max}&order=viewCount&key=${options.key}`,
  type: 'GET',
  data: JSON.stringify(options),
  contentType: 'application/json',
  success: function (data) {
    callback(data);
    console.log('Success');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('Failed', data);
  }
});


};

window.searchYouTube = searchYouTube;