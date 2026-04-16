'use client';
import { useRef, useEffect } from 'react';
import styles from '../page.module.css';

export default function VideoPlayer() {
  const iframeRef = useRef(null);

  useEffect(() => {
    let attempts = 0;
    const adjustVolume = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Set the internal volume to 50%. It will remain muted due to 
        // browser policies, but when the user unmutes it via the player 
        // controls, it won't blast at 100% volume.
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [50] }),
          '*'
        );
      }
      
      attempts++;
      if (attempts > 10) {
        clearInterval(interval);
      }
    };

    // YouTube iframe API needs a bit of time to be ready to receive messages
    const interval = setInterval(adjustVolume, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.videoWrapper}>
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/cr4BAtC48Vk?si=Nhis3xpUAnGDxxR6&enablejsapi=1&autoplay=1&mute=1"
        title="Truthadjustr Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
