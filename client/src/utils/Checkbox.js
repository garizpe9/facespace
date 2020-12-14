import axios from "axios";

export default {
  // Gets all moods
  getMood: function() {
    return axios.get("/api/mood");
  },
  // Gets an entry with the given id
  getMood: function(id) {
    return axios.get("/api/mood/" + id);
  },
  // Deletes the entry with the given id
  deleteMood: function(id) {
    return axios.delete("/api/mood/" + id);
  },
  // Saves an entry to the database
  saveMood: function(entryData) {
    return axios.post("/api/mood", entryData);
  },

};
