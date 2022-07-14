import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log("props", this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return { songs: state.songs, selectedSong: state.selectedSong };
};

//without second argument, connect provides props.dispatch() to allow the component to
//dispatch actions itself
//with second argument, connect links the action creator to redux to facilitate dispatching
//without having to explicitly call dispatch()
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
