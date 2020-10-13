var mongoose = require('mongoose')
const Bookmark = mongoose.model('Bookmarks')

// retrieve the bookmark
  exports.getAll = (req, res)=> {
    Bookmark.find()
    .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieve the bookmark."
            })
        });
  }

  //create the bookmark
  exports.create = (req,res)=>{
    var newBookmark = new Bookmark({
        link : req.body.link,
        title: req.body.title,
        timeCreated: Math.round(Date.now() / 1000),
        timeUpdated: Math.round(Date.now() / 1000),
        publisher: req.body.publisher,
        tags: req.body.tags
    });
    
    newBookmark.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating the bookmark."
        });
    });
    
   
  }

//delete the bookmark
  exports.delete = (req,res)=>{
    Bookmark.findByIdAndRemove(req.params.id)
        .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while delete the bookmark."
        });
    });
  }

  //Add tag to a bookmark
exports.addTag = (req, res) => {

    Bookmark.findByIdAndUpdate(req.params.id, { $push: req.body, $set: {time_updated: Math.round(Date.now() / 1000)} })
        .exec()
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: `Bookmark with ID=${req.params.id} not found.`
                });
            } else {
                res.status(200).json({
                    message: `Bookmark with ID=${req.params.id} updated sucessfully!.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while adding tag to a bookmark."
            });
        });
}
//Remove tag from a bookmark
exports.removeTag = (req, res) => {

    Bookmark.findByIdAndUpdate(req.params.id, { $pull: { tags: { $in: req.body.tags}}, $set: {time_updated: Math.round(Date.now() / 1000)} })
        .exec()
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: `Bookmark with ID=${req.params.id} not found.`
                })
            } else {
                res.status(200).json({
                    message: `Tag removed sucessfully from Bookmark with ID=${req.params.id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while removing tag from a bookmark."
            });
        });
}