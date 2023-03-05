require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./apis/users/user.router')
const topicRouter = require('./apis/topics/topic.router')
const addressRouter = require('./apis/address/address.router')
const eduInfoRouter = require('./apis/educationinfo/eduinfo.router')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// End routes
app.use('/api/users', userRouter);
app.use('/api/topics', topicRouter);
app.use('/api/address', addressRouter);
app.use('/api/eduinfo', eduInfoRouter);

app.listen(process.env.PORT, ()=>{
    console.log("server listening on port 5000");
})