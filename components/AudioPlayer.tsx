import React from 'react';

export interface AudioPlayerProps {
  src: string;
  autoPlay?: boolean;
  showControls?: boolean;
}

const AudioPlayer = React.forwardRef<HTMLAudioElement, AudioPlayerProps & React.AudioHTMLAttributes<HTMLAudioElement>>(
  ({ src, autoPlay = false, showControls = true, ...rest }, ref) => {
    return (
      <audio
        ref={ref}
        src={src}
        controls={showControls}
        autoPlay={autoPlay}
        preload="auto"
        {...rest}
      >
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/mp3" />
      </audio>
    );
  }
);

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;