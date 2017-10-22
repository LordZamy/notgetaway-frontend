// @flow
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

type DefaultProps = {
  controls: boolean,
  onReady: Function,
  playing: boolean,
  muted: boolean,
  updateParentRef: Function,
  onProgress: Function,
  url: string
}

type Props = DefaultProps & {
  height: number,
  width: number,
  name: string,
}

class StreamPlayer extends Component {
  static defaultProps: DefaultProps = {
    controls: false,
    onReady: () => {},
    playing: false,
    updateParentRef: () => {},
    onProgress: () => {},
    muted: false,
    url: 'https://www.youtube.com/watch?v=nANXA3CsUpY'
  }

  props: Props;

  render() {
    const {
      controls,
      height,
      name,
      onReady,
      playing,
      width,
      updateParentRef,
      onProgress,
      muted,
      url
    } = this.props;

    return (
      <div className="stream-player">
        <span className="stream-player-name">{name}</span>
        <ReactPlayer
          ref={updateParentRef}
          controls={controls}
          height={height}
          onReady={onReady}
          onProgress={onProgress}
          playing={playing}
          url={url}
          width={width}
          muted={muted}
        />
      </div>
    )
  }
}

export default StreamPlayer;
