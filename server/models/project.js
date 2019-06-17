const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  description:String,
  projectMembers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }],
  deploymentUrl:String,
  githubUrl:String,
  voyageId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "voyage",
  },
});

module.exports = mongoose.model("projects", projectSchema);
