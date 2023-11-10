// Imports
const { connect, connection } = require('mongoose');
// Creates database
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';
// Connects Mongoose and MongoDB
connect(connectionString);
// Exports
module.exports = connection;