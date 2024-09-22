const express = require('express');

const router = express.Router();
const PlaylistController = require("../controller/PlaylistController");

router.get('/', PlaylistController.index);
router.get('/music/music', PlaylistController.music);
router.get('/music/favorites', PlaylistController.favorites);
router.get('/music/playlist', PlaylistController.playlist);
router.get('/music/artist', PlaylistController.artist);

module.exports = router;