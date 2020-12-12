const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmotionJournalSchema = new Schema({
    what: String,
    unpack: String,
    note: String,
  date: { type: Date, default: Date.now }
});

const EmotionJournal = mongoose.model("EmotionJournal", EmotionJournalSchema);

module.exports = EmotionJournal;