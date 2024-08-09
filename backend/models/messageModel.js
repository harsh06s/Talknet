const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId,ref:"User",},
    content: {type: mongoose.Schema.Types.ObjectId,ref:"User",},
    chat: {type: mongoose.Schema.Types.ObjectId,ref:"Chat",},
},
{
    timestamps: true,
}
);
const Message = mongoose.model("Messsage", messageModel); 

module.exports = Message;