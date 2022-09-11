import mongoose from 'mongoose';

export const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URL || '', {
    dbName: 'twitter-bot',
  });
};

export default connection;
