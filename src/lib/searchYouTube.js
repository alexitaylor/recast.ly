var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://www.googleapis.com/youtube/v3/search/' + options,
  type: 'GET',
  data: JSON.stringify(message),
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