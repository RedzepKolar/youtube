import VIDEOS from "./../videos.json";

const GetAllVideos = () => {
  return VIDEOS.map((video) => (
    <div key={video.id}>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.cover} alt={video.title} />
        <h3>{video.title}</h3>
      </a>
    </div>
  ));
};

export default GetAllVideos;
