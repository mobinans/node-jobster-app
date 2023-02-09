require("dotenv").config();
const connectDB = require("./db/connect");
const jasonData = require("./mock-data.json");
const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany();
    await Job.create(jasonData);
    console.log("SUCCESS!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
