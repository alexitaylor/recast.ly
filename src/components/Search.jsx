class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	render() {
		return (
			<div className="search-bar form-inline">
      <form>
    		<input className="form-control" type="text" onChange={this.props.onChange}/>
    		<button className="btn hidden-sm-down" onClick={this.props.onClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
  		</div>
		);
	}
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
