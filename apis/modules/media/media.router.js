const router = require('express').Router()
const express = require("express");
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const multer = require("multer");
const path = require("path");
const fs = require("fs")
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        var filetypes = /jpeg|jpg|png|pdf/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the following filetypes"+ filetypes);
    }
}).array('file');

const dir = 'uploads';

router.post('/', async (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).send("success")
        }

    })
})

router.delete('/deletemedia/:imagename', async (req, res)=>{
    console.log(req.params.imagename);
    if(!req.params.imagename){
        return res.status(500).json("Erron in delete");
    }else{
        try {
            fs.unlinkSync(dir+'/'+req.params.imagename);
            return res.status(200).json("Delete done");
        } catch (error) {
            return res.status(400).send(error);
        }
    }
})



module.exports = router