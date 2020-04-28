var multer = require('multer');
var destination = process.cwd() + '/files';
var storage = multer.diskStorage({
    destination: destination,
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + "." + fileFormat[fileFormat.length - 1]);
    }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
});
//导出对象
module.exports = upload;