var VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry video={props.video[0]}/>
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);

window.VideoList = VideoList;
