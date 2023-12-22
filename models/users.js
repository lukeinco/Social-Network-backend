const { Schema, Types } = require('mongoose');
const thoughtsSchema = require('./thoughts');
const friendsSchema = require('./friends')

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
    friends: [friendsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = userSchema;
