const express = require('express');
const app = express();
const upload = require('./upload');

//allow custom header and CORS
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/upload', upload.single('file'), (req, res, next) => {
    if (req.file) {
        const { filename, originalname } = req.file;
        res.json({
            code: 0,
            message: '文件上传成功',
            data: {
                filename: filename,
                originalname: originalname,
            }
        });
    } else {
        res.json({
            code: 1,
            message: '文件上传失败',
            data: '',
        });
    }
})

const server = app.listen(10086, () => {
    const port = server.address().port
    console.log(`API地址为 http://localhost:${port}`);
})