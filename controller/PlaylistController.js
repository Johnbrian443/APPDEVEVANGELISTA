const PlaylistController = {
    index: (req, res) => {
        res.render('home');
    },
    music: (req, res) => {
        res.render('music');
    },
    favorites: (req, res) => {
        res.render('favorites');
    },
    playlist: (req, res) => {
        res.render('playlist');
    },
    artist: (req, res) => {
        res.render('artist');
    }
};

module.exports = PlaylistController;