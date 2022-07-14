import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells like teen spirit", duration: "93:21" },
    { title: "Bye bye bye", duration: "0:11" },
    { title: "Creeping call", duration: "3:33" },
    { title: "I want it that way", duration: "02:22" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
