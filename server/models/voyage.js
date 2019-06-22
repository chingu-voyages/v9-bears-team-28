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
  articleLink:String,
  imageUrl:{
    type:String,
    default:"https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
  }
});

module.exports = mongoose.model("voyages", projectSchema);
