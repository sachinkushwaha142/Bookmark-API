var mongoose = require('mongoose')
const Tag = mongoose.model('Tags')

// Retrieve all tag
  exports.getAll = (req, res)=> {
    Tag.find()
    .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieve the tag."
            })
        });
  };

  // create tag
  exports.create = (req,res)=>{
    var newTag = new Tag({
        title: req.body.title,
        time_created: Math.round(Date.now() / 1000),
        time_updated: Math.round(Date.now() / 1000)
    });
    
    newTag.save()
    .then(data => {
        res.json(data);
      }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the tag."
        });
    });
    
   
  }

  // delete tag
  exports.delete = (req,res)=>{

    Tag.findByIdAndRemove(req.params.id)
    .then(data => {
        res.json(data);
      }).catch(err => {
          res.status(500).send({
            message: err.message || "Some error occurred while delete the tag."
          });
  });
  }