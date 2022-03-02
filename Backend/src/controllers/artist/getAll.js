const { Artist, Review, Painting } = require('../../db.js');



const getAll = async () => {
    let artists = await Artist.findAll({
        include: [Review, Painting]
    })
    console.log(artists)


    /* let dataValues = [];
    for (let j=0; j < artist.length; j++) {
        let tempArr = [];
        for (let i=0; i < artists[j].dataValues.Reviews.length; i++) {
            tempArr.push(artists[j].dataValues.Reviews[i].dataValues.id);
        };
        artists[j].dataValues.countries = tempArr;
        delete artists[j].dataValues.Countries;
        delete artists[j].dataValues.createdAt;
        delete artists[j].dataValues.updatedAt;
        dataValues.push(artists[j].dataValues);
    }; */



    return artists
};


getAll()


module.exports = {
    getAll,
};