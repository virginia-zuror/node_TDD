const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

mongoose.Promise = Promise;

const mongoServer = new MongoMemoryServer();

const getUri = async () => {
  if (process.env.NODE_ENV === 'test') {
    return mongoServer.getUri();
  }
  return process.env.MONGO_URI;
};

const connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  await mongoose.connect(uri, mongooseOpts);
  mongoose.connection.once('open', () => {
    console.log(`MongoDB succesfully connected to ${uri}`);
  });
};

const closeDb = async () => {
  await mongoose.disconnect();

  if (process.env.NODE_ENV === 'test') {
    await mongoServer.stop();
  }
};
module.exports = { getUri, connect, closeDb };
