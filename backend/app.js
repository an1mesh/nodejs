import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';

const app = express();

app.use(express.json());

app.use('/',router);


mongoose.connect('mongodb://localhost:27017/socialapi',{
    useNewUrlParser:true,useUnifiedTopology:true,
}).then((res) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})



app.listen(3000,() => {
    console.log('app running on port 3000');
}); 