import mongoose from 'mongoose';

export const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URL || '', {
    dbName: 'twitter-bot',
  });
};

export const disconnect = async () => {
  await mongoose.disconnect();
};

export default connect;
