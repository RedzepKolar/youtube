import { useParams } from "react-router-dom";
import VIDEOS from "./../videos.json";

const Video = () => {
  const { id } = useParams();

  if (!Array.isArray(VIDEOS) || VIDEOS.length === 0) {
    return <h2>No videos available.</h2>;
  }

  const found = VIDEOS.find((video) => video.id === parseInt(id));

  return (
    <>
      {found ? (
        <div>
          <h2>{found.title}</h2>
          <p>{found.url}</p>
          <embed type="video/mp4" src={found.url} width="300" height="300" />
        </div>
      ) : (
        <h2>This video does not exist</h2>
      )}
    </>
  );
};

export default Video;
