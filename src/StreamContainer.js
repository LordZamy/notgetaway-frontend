// @flow
import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';

import StreamPlayer from './StreamPlayer';

type Props = {};

type State = {
  height: number,
  width: number,
  seekValue: number,
  playing: boolean,
  seeking: boolean,
}

const PLAYER_COUNT = 3;

const playerButtonStyles = {float: 'left'};
const sliderStyles = {width: '90%', float:'right'};

class StreamContainer extends Component {
  containerNode = null;

  // references to stream player dom nodes
  players = [null, null, null];

  state: State = {
    height: 0,
    width: 0,
    seekValue: 0,
    playing: false,
    seeking: false,
  }

  componentDidMount() {
    const {clientHeight: height, clientWidth: width} = this.containerNode;
    this.setState({height, width});
  }

  renderPlayPauseIcon(playing: boolean): ReactElement<*> {
    return playing ? <AvPause/> : <AvPlayArrow />;
  }

  render() {
    const playerWidth = this.state.width / 3.5;
    const playerHeight = window.innerHeight / 4;

    const { playing } = this.state;

    return (
      <div className="stream-container">
        <div className="stream-player-container" ref={node => this.containerNode = node}>
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 1" onReady={this.onPlayerReady} playing={playing} updateParentRef={this.updatePlayerRef(0)} onProgress={this.onProgress} />
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 2" onReady={this.onPlayerReady} playing={playing} muted={true} updateParentRef={this.updatePlayerRef(1)} />
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 3" onReady={this.onPlayerReady} playing={playing} muted={true} updateParentRef={this.updatePlayerRef(2)} />
        </div>
        <div className="stream-controls-container">
          <FloatingActionButton style={playerButtonStyles} onClick={this.onPlayPauseClick}>
            {this.renderPlayPauseIcon(playing)}
          </FloatingActionButton>
          <Slider
            min={0}
            max={1}
            value={this.state.seekValue}
            onChange={this.onSeekChange}
            onDragStart={this.onDragStart}
            onDragStop={this.onDragStop}
            sliderStyle={sliderStyles}
          />
        </div>
      </div>
    )
  }

  // update seek value on slider
  onSeekChange = (e: Object, newValue: number) => {
    this.setState({seekValue: newValue});
  }

  onDragStart = (e: Object) => {
    this.setState({seeking: true});
  }

  onDragStop = (e: Object) => {
    this.players.forEach(player => player.seekTo(this.state.seekValue));
    this.setState({seeking: false});
  }

  onPlayerReady = playerReadyFn(() => {
    this.setState({playing: true});
  });

  onPlayPauseClick = (e: Object) => {
    this.setState({playing: !this.state.playing});
  }

  onProgress = (progress) => {
    if (!this.state.seeking) {
      this.setState({seekValue: progress.played});
    }
  }

  updatePlayerRef = (index: number) => {
    return (player) => this.players[index] = player;
  }
}

// returns a function that can be passed to the StreamPlayer component
function playerReadyFn(callback) {
  let numReadyPlayers = 0;
  return () => {
    numReadyPlayers++;
    if (numReadyPlayers === PLAYER_COUNT) {
      setTimeout(callback, 1000);
    }
  }
}

export default StreamContainer;
