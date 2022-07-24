const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = dbConnection;