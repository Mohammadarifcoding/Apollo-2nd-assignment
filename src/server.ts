import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import app from './app';
import config from './app/config';
app.use(express.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Mongodb connected');
    let a = 5;
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
