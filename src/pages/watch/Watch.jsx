import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video
            className="video"
            autoPlay
            progress
            controls
            src="https://www.pexels.com/video/a-footage-of-a-movie-shooting-9808528/"
        />
    </div>
  );
}

export default Watch