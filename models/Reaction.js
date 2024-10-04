const { Schema, model } = require('mongoose');

const formatDate = require('../utils/formatDate.js')
// Schema to create a reaction
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: ()=>new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minLength:1,
        maxLength:280,
      },
    username: {
        type: String,
      required: true,
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (unformatedDate)=>formatDate(unformatedDate)
    },
    
   

},
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports=reactionSchema