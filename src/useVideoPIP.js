import { useState, useEffect } from "react";

export const useVideoPIP = initialId => {
  const [videoId, setVideoId] = useState(initialId);
  let videoItem;
  async function videoPIP() {
    try {
      if (videoItem !== document.pictureInPictureElement) {
        videoItem = document.getElementById(videoId);
        await videoItem.requestPictureInPicture();
        videoItem.addEventListener("leavepictureinpicture", function(event) {
          videoItem.pause();
          setVideoId(null);
        });
      } else {
        await document.exitPictureInPicture();
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (document.pictureInPictureEnabled) {
      videoPIP();
    } else {
      console.warn("Browser does not suit video pip");
    }
  });

  return { setVideoId };
};
