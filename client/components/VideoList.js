var VideoList = (props) => (
  <div className="video-list media">
      {props.videos.map(video =>
        <VideoListEntry video={video} />
      )}
  </div>
);

window.VideoList = VideoList;
