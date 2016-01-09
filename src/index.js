import React, {Component} from 'react';  //ES6
import _ from 'lodash';                                         
import ReactDOM from 'react-dom'; //in order to render to DOM
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCmyh4T9Jnigf5ITUPgIIStAhjUud04o04';


//Create a new component and this component will produce html
//keep track of the list of videos through state
class App extends Component {  //const - final variable of the variable
	constructor(props) {
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		//Network Request
		YTSearch({key: API_KEY, term:term},(videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});	
		});
	}

	render() {
			const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);
			return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
				videos={this.state.videos}/>
			</div>  //jsx - dialecte of JS(subset)
			);
	}
}

//We need to instantiate the component before rendering <App
//Take this compnonent's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));