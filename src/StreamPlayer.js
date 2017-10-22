import React, { Component } from 'react';
import ReactPlayer from 'react-player';

type Props = {
  height: number,
  width: number,
  name: string,
}

class StreamPlayer extends Component {
  props: Props;

  render() {
    const {height, width, name} = this.props;

    return (
      <div className="stream-player">
        <span className="stream-player-name">{name}</span>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          playing={false}
          height={height}
          width={width}
        />
      </div>
    )
  }
}

export default StreamPlayer;
