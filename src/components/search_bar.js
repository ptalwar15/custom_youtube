import React, {Component} from 'react';
//{Component} = const Component = React.Component;
//functional component
// const SearchBar = () => {
// 	return <input/>
// }
//class based Component, JS Obj with props and methods
class SearchBar extends Component {
	//called whenever we create a new instance of searchBar
	constructor(props) {
		super(props);
		this.state = {term: ''}; //assign an object to 'state'
	}

	render() {
		//all html have an onChange event
		//{}'s for putting JS code into html'
		return (
			// controlled component if value is set to state value..

			<div className="search-bar">
			<input 
			value={this.state.term}
			onChange={event=>this.onInputChange(event.target.value)}/>
		
			</div>	
			//one argument you can drop the {} as well...
				//Value of the input: {this.state.term}
		);

	}

	 onInputChange(term) {
	 	this.setState({term});
	 	this.props.onSearchTermChange(term);
	}
}


export default SearchBar;

