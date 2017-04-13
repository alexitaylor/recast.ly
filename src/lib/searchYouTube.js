var searchYouTube = (options, callback) => {
  // TODO
  console.log(options);
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  // replace dog with options
  // replace hardcoded api key
  // fix search params
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options + '&order=viewCount&key=' + window.YOUTUBE_API_KEY,
  type: 'GET',
  data: JSON.stringify(options),
  contentType: 'application/json',
  success: function (data) {
    var videoData = callback(data)
  	window.exampleVideoData = videoData.items;
    console.log('Success');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('Failed', data);
  }
});


};

window.searchYouTube = searchYouTube;