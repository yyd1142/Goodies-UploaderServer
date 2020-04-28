var multer = require('multer');
var randomstring = require("randomstring");

var destination = process.cwd() + '/files';
var storage = multer.diskStorage({
    destination: destination,
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split(".");
        var now = new Date();
        cb(null, `${randomstring.generate(10).toUpperCase()}${now.getTime()}.${fileFormat[fileFormat.length - 1]}`);
    }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
});
//导出对象
module.exports = upload;