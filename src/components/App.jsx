class App extends React.Component {
  constructor(props) {
 	  super(props);
 	  this.state = {
 	  video: window.exampleVideoData[0]
    }
  }

  findIndex(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
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
      <Nav />
        <div className="col-md-12">
          <VideoPlayer video={this.state.video} />
        </div>
        <div className="col-md-12">
          <VideoList onClick={this.onVideoTitleClick.bind(this)} videos={window.exampleVideoData} />
        </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;