import mongoose, { Schema } from 'mongoose';

export const userV1Schema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const userV2Schema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// export const SeedUser = mongoose.model('SeedUser', userV1Schema);
export const User = mongoose.model('User', userV2Schema);
export const Following = mongoose.model('Following', userV2Schema);

export default User;
