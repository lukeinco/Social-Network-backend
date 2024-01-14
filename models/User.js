const { Schema, Types, model } = require('mongoose');
const { thoughtsSchema, Thought } = require('./Thought');


userSchema = new Schema(
  {
    Id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      allownull: false,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [thoughtsSchema],
    friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User',
      },
  ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const User = model('User', userSchema);
module.exports = { userSchema, User };
