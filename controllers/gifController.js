const Gif = require('../models/gifModel.js');
const download = require('download-file');
const images = require('../helpers/images');

class GifController {
    static read(req, res) {
        Gif.find()
            .then(function(gifs) {
                res.status(200).json(gifs);
            })
            .catch(function(err) {
                res.status(500).json(err.message);
            });
    }

    static downloadGif(req, res) {
        let gifName = req.body.gif.name;
        let url = req.body.gif.gifURL;
        let options = {
            directory: '../',
            filename: `${gifName}.gif`
        };

        download(url, options, function(err) {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            }

            console.log('Downloaded!');
        });
    }
}   

module.exports = GifController;