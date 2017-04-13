class App extends React.Component {
  constructor(props) {
 	  super(props);
 	  this.state = {
   	  video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }

  componentDidMount() {
    ///searchYouTube(...this.setState())
  }

  findIndex(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
  }

  handleSearchChange(event) {
    // console.log('Event Target: ' + event.target.value);
    this.setState({
      value: event.target.value
    });
    event.preventDefault();
  }

  handleSubmit(event) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.value,
      max: 5
    }
    searchYouTube(options, (data) => {
      this.setState({
        video: data.items[0],
        videos: data.items
      });
    });
    event.preventDefault();
  }

  onVideoTitleClick(e) {
   	console.log("I was clicked!!!");
   	console.log(e.target.id);
   	var id = e.target.id;
   	var index = this.findIndex(this.state.videos, 'etag', id)
   	this.setState({
   	  video: this.state.videos[index]
   	});
  }

  render() {
   	return (
   	<div>
      <Nav onClick={this.handleSubmit} onChange={this.handleSearchChange}/>
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