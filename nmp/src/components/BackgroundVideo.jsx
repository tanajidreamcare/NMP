import { useEffect, useRef } from "react";
import styles from "./BackgroundVideo.module.css"; // Import the CSS module

const BackgroundVideo = () => {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube Player API script dynamically
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define onYouTubeIframeAPIReady callback function
    window.onYouTubeIframeAPIReady = () => {
      // Create the YouTube player
      new window.YT.Player(videoPlayerRef.current, {
        videoId: "EoYWwSalaJ4",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          modestbranding: 0,
          showinfo: 0,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute(); // Mute the video on load
            event.target.playVideo(); // Start playing the video
          },
        },
      });
    };

    return () => {
      // Clean up the YouTube Player API script
      delete window.onYouTubeIframeAPIReady;
      const iframeScriptTag = document.querySelector("script[src='https://www.youtube.com/iframe_api']");
      iframeScriptTag.parentNode.removeChild(iframeScriptTag);
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <div ref={videoPlayerRef} className={styles.videoPlayer} />
    </div>
  );
};

export default BackgroundVideo;
