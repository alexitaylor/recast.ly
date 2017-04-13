class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEventChange = this.handleEventChange.bind(this);
	}	

	handleEventChange(event) {
		console.log(event.target.value);
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		console.log(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="search-bar form-inline">
    		<input className="form-control" type="text" value={this.state.value} onChange={this.handleEventChange} />
    		<button className="btn hidden-sm-down" onClick={this.handleSubmit}>
      		<span className="glyphicon glyphicon-search"></span>
    		</button>
  		</div> 
		);
	}
}

// var Search = () => (
  
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
