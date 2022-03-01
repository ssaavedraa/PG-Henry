const { Artist, Review, Painting } = require('../db.js');



const getActivityData = async () => {
    const artists = await Artist.findAll({
        include: [Review, Painting]
    })
    return artists
};



module.exports = {
    getActivityData,
};