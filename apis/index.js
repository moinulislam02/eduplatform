require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./modules/users/user.router')
const topicRouter = require('./modules/topics/topic.router')
const addressRouter = require('./modules/address/address.router')
const eduInfoRouter = require('./modules/educationinfo/eduinfo.router')
const tagRouter = require('./modules/tags/tag.router')
const commentRouter = require('./modules/comments/comment.router')
const postRouter = require('./modules/post/post.router')
const mediaUploader = require('./modules/media/media.router')
const cors = require('cors')
const path = require("path");

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// End routes
app.use('/api/users', userRouter);
app.use('/api/topics', topicRouter);
app.use('/api/address', addressRouter);
app.use('/api/eduinfo', eduInfoRouter);
app.use('/api/tags', tagRouter);
app.use('/api/comments', commentRouter);
app.use('/api/posts', postRouter);
app.use('/api/uploads', mediaUploader);

var public = path.join(__dirname, 'uploads');

app.use('/api/alluploads', express.static(public));

app.listen(process.env.PORT, ()=>{
    console.log("server listening on port 5000");
})