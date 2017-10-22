import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';

import StreamPlayer from './StreamPlayer';

type Props = {};

type State = {
  height: number,
  width: number,
  seekValue: number,
}

const playerButtonStyles = {float: 'left'};
const sliderStyles = {width: '90%', float:'right'};

class StreamContainer extends Component {
  containerNode: null;

  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      seekValue: 0,
    }
  }

  componentDidMount() {
    const {clientHeight: height, clientWidth: width} = this.containerNode;
    this.setState({height, width});
  }

  render() {
    const playerWidth = this.state.width / 3.5;
    const playerHeight = window.innerHeight / 4;

    return (
      <div className="stream-container">
        <div className="stream-player-container" ref={node => this.containerNode = node}>
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 1" />
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 2" />
          <StreamPlayer height={playerHeight} width={playerWidth} name="Camera 3" />
        </div>
        <div className="stream-controls-container">
          <FloatingActionButton style={playerButtonStyles}>
            <AvPlayArrow />
          </FloatingActionButton>
          <Slider
            min={0}
            max={1}
            value={this.props.seekValue}
            onChange={this.onSeekChange}
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
}

export default StreamContainer;
