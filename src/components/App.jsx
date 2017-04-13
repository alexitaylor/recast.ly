class App extends React.Component {
  constructor(props) {
 	  super(props);
 	  this.state = {
   	  video: window.exampleVideoData[0],
      videos: window.exampleVideoData
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }



  // componentDidMount() {
  //   // get api data
  //   // then setState to new api data

  //   this.setState({
  //     video: searchResults[0],
  //     videos: searchResults
  //   })
  // }

  findIndex(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
  }

  handleSubmit(event) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.value,
      max: 5
    }

    var searchResults;
    searchYouTube(options, function(data){
      searchResults = data.items;
    });
    // setTimeout( () => {
    //   console.log(searchResults);
    // }, 1000);
    event.preventDefault();
  }

  onVideoTitleClick(e) {
   	console.log("I was clicked!!!");
   	console.log(e.target.id);
   	var id = e.target.id;
   	var index = this.findIndex(window.exampleVideoData, 'etag', id)
   	this.setState({
   	  video: window.exampleVideoData[index]
   	});
  }

  render() {
   	return (
   	<div>
      <Nav onClick={this.handleSubmit}/>
        <div className="col-md-12">
          <VideoPlayer video={this.state.video} />
        </div>
        <div className="col-md-12">
          <VideoList onClick={this.onVideoTitleClick} videos={this.state.videos} />
        </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;