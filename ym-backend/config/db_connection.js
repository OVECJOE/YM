const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then((res) => {
    console.log(`Successfully connected to database: ${res.connection.host}`);
  })
  .catch(err => {
    console.log('Database connection failed. Exiting now...');
    console.log(`Error: ${err.message}`);
    process.exit(1);
  })
}