const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());

const publicStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname )
    }
})

const upload = multer({storage: publicStorage}).single('file');

// POST route for file upload
app.post('/upload', function(request, response) {
    upload(request, response, function(err) {
        if (err instanceof multer.MulterError) {
            return response.status(500).json(err);
        } else if (err) {
            return response.status(500).json(err);
        }
    })
    return response.status(200).send(request.file);
})

app.listen(8000, function() {
    console.log('Server listening on port 8000');
});