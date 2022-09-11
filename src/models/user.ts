import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
  name: { type: String, required: true },
  id_str: { type: String, required: true },
  id: { type: Number, required: true },
  screen_name: { type: String, required: true },
  protected: { type: Boolean, required: true },
  verified: { type: Boolean, required: true },
  followers_count: { type: Number, required: true },
  friends_count: { type: Number, required: true },
  listed_count: { type: Number, required: true },
  favourites_count: { type: Number, required: true },
  statuses_count: { type: Number, required: true },
  location: String,
  url: String,
  description: String,
});

export const User = mongoose.model('User', userSchema);

export default User;
