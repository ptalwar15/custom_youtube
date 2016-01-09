//Do I expect this component to need to maintain any kind of state?
//functional component - no need to maintain state
import React from 'react';
const VideoDetail = ({video})=> {
	if(!video) {
		return <div>Loading...</div>;
	}
	console.log(video);
	const videoId = video.id.videoId;
	const url = "https://www.youtube.com/embed/" + videoId;
	// const url = `https://www.youtube.com/embed/$(videoId)`;
	return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} allowFullScreen className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>

		);
};

export default VideoDetail