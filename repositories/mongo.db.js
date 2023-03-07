import mongoose from "mongoose";

async function connect() {
  const uri =
    process.env.MONGO_URI,;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
