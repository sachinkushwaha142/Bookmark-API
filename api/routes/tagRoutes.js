const express=require('express')
const router = express.Router()
const tags = require("../controllers/tagController")

router.get("/tag",tags.getAll)

router.post("/tag",tags.create)

router.delete('/tag/:id',tags.delete)



module.exports = router