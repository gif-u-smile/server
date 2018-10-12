const router = require('express').Router()
const Gif = require('../models/gifModel')
const GifController = require('../controllers/gifController');
const images = require('../helpers/images');

router.post('/upload',
    images.multer.single('image'), 
    images.sendUploadToGCS,
    (req, res) => {
        Gif.create({
            name: req.file.originalname,
            gifURL: req.file.cloudStoragePublicUrl
        })
            .then(function(gif) {
                const response = {
                    success: true,
                    message: `Gif ${gif.name} added`
                }
                res.status(201).json(response);
            })
            .catch(function(err) {
                res.status(500).json(err.message);
            });
});

router.get('/', GifController.read);

router.post('/download',GifController.downloadGif)

module.exports = router

