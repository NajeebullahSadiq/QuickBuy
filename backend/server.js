//import Express
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for new DataBase
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import path from 'path';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import BoyTshirtsRouter from './routers/BoyTshirtsRouter.js';
import uploadRouter from './routers/UploadRouter.js';
import BoyJeansRouter from './routers/BoyJeansRouter.js';
import MenTShirtsRouter from './routers/MenTShirtsRouter.js';
import MenJacketsRouter from './routers/MenJacketsRouter.js';
import MenJeansRouter from './routers/MenJeansRouter.js';
import MenTrousersRouter from './routers/MenTrousersRouter.js';
import MenSneakersRouter from './routers/MenSneakersRouter.js';
import MenSlipperRouter from './routers/MenSlippersRouter.js';
import MenVestsRouter from './routers/MenVestsRouter.js';
import MenBoxerRouter from './routers/MenBoxerRouter.js';
import MenWatchesRouter from './routers/MenWatchesRouter.js';
import MenNecklacesRouter from './routers/MenNecklacesRouter.js';
import WomenShirtRouter from './routers/WomenShirtRouter.js';
import WomenJacketRouter from './routers/WomenJacketRouter.js';
import WomenJeansRouter from './routers/WomenJeansRouter.js';
import WomenTrackPantRouter from './routers/WomenTrackPantRouter.js';
import WomenShoesRouter from './routers/WomenShoesRouter.js';
import WomenHeelsRouter from './routers/WomenHeelsRouter.js';
import WomenBraRouter from './routers/WomenBraRouter.js';
import WomenWatchesRouter from './routers/WomenWatchesRouter.js';
import WomenRingsRouter from './routers/WomenRingsRouter.js';
import WomenPantyRouter from './routers/WomenPantyRouter.js';
import GirlsJeansRouter from './routers/GirlsJeansRouter.js';
import GirlsTShirtsRouter from './routers/GirlsTShirtsRouter.js';
import BoysShoesRouter from './routers/BoysShoesRouter.js';
import BoysSandalsRouter from './routers/BoysSandalsRouter.js';
import GirlsShoesRouter from './routers/GirlsShoesRouter.js';
import GirlsSandalsRouter from './routers/GirlsSandalsRouter.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:/QuickBuy',{
   useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/uploads',uploadRouter);
app.use('/users',userRouter);
app.use("/products", productRouter);
app.use('/BoyJeansScreen',BoyJeansRouter);
app.use("/MenJacketsScreen",MenJacketsRouter);
app.use("/BoyTshirtsScreen", BoyTshirtsRouter);
app.use("/MenTShirtsScreen", MenTShirtsRouter);
app.use("/MenJeansScreen",MenJeansRouter);
app.use("/MenTrousersScreen",MenTrousersRouter);
app.use("/MenSneakersScreen",MenSneakersRouter);
app.use("/MenSlippersScreen",MenSlipperRouter);
app.use("/MenVastsScreen",MenVestsRouter);
app.use("/MenBoxersScreen",MenBoxerRouter);
app.use("/MenWatchesScreen",MenWatchesRouter);
app.use("/MenNecklacesScreen",MenNecklacesRouter);
app.use("/WomenShirtsScreen",WomenShirtRouter);
app.use("/WomenJacketsScreen",WomenJacketRouter);
app.use("/WomenJeansScreen",WomenJeansRouter);
app.use("/WomenTrackPantScreen",WomenTrackPantRouter);
app.use("/WomenShoesScreen",WomenShoesRouter);
app.use("/WomenHeelsScreen",WomenHeelsRouter);
app.use("/WomenBraScreen",WomenBraRouter);
app.use("/WomenPantyScreen",WomenPantyRouter);
app.use("/WomenWatchesScreen",WomenWatchesRouter);
app.use("/WomenRingsScreen",WomenRingsRouter);
app.use("/GirlsJeansScreen",GirlsJeansRouter);
app.use("/GirlsTshirtsScreen",GirlsTShirtsRouter);
app.use("/BoysShoesScreen",BoysShoesRouter);
app.use("/BoysSandalsScreen",BoysSandalsRouter);
app.use("/GirlsShoesScreen",GirlsShoesRouter);
app.use("/GirlsSandalsScreen",GirlsSandalsRouter);
app.use('/orders',orderRouter);
app.get("/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//Response to a request
app.get("/", (req,res)=>{
    res.send("Server is running");
});
//listen to port
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`sever at http://localhost:${port}`)});