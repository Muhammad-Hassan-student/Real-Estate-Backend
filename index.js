import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import connecDb from './config/Db/db.js';
import path from 'path';
import swaggerSetup from './swagger.js'
connecDb();
dotenv.config();



  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

//port
const PORT=process.env.PORT || 8080;
//Listen for run
app.listen(PORT, ()=>{
    console.log(`Server is running http:${process.env.DEV_MODE} on ${PORT}`.bgGreen )
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Swagger setup
// app.use('/api-docs',swaggerSetup)
swaggerSetup(app);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
