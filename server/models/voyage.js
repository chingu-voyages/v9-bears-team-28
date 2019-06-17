const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: String,
  description:String,
  startDate:String,
  endDate:String,
  projects:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  }],
  facilitators:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }],
  participationNumber:String,
  articleLink:String
});

module.exports = mongoose.model("voyages", projectSchema);
