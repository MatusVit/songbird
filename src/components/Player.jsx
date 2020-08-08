import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default ({ url }) => {
  return (
    <AudioPlayer
      src={url}
      volume={0.8}
      autoPlay
      showJumpControls={false}
      customProgressBarSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]}
      customControlsSection={[
        RHAP_UI.CURRENT_TIME,
        <div> / </div>,
        RHAP_UI.DURATION,
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.VOLUME,
      ]}
      customAdditionalControls={[]}
    />
  );
};
