const express = require('express');
const app = express();
const upload = require('./upload');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/upload', upload.single('file'), (req, res, next) => {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
})

const server = app.listen(10086, () => {
    const host = server.address().address
    const port = server.address().port
    console.log("API地址为 http://localhost", host, port);
})