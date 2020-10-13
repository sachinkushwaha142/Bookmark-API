const express=require('express')
const router = express.Router()
const bookmarks = require("../controllers/bookmarkController")

// Api Endpoints

router.get("/bookmark",bookmarks.getAll)

router.post("/bookmark",bookmarks.create)

router.delete('/bookmark/:id',bookmarks.delete)

router.put('/bookmark/add/:id',bookmarks.addTag)

router.put('/bookmark/remove/:id',bookmarks.removeTag)

module.exports = router