const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js')
const formatDate = require('../utils/formatDate.js')
// Schema to create a thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength:1,
      maxLength:280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (unformatedDate)=>formatDate(unformatedDate)
    },
    username: {
        type: String,
      required: true,
      },
   reactions: [reactionSchema],

},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual("reactionCount").get(function () {
    return(this.reactions.length)
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;