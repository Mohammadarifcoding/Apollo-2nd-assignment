import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import app from './app';
import config from './app/config';
import ProductRoute from './app/modules/Product/Product.Route';
import OrderRoute from './app/modules/Order/Order.Route';
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);
app.all('*',(req,res)=>{
  res.status(400).json({
    success:false,
    messege:`Route Not found`
  })
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Mongodb connected');
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
