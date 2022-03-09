const { Review, Artist } = require("../../../db");


const updateScore = async (artistId) => {
    try {
        let reviewsScores = await Review.findAll({
			where: { artistId },
			attributes: ["score"],
			raw: true,
		});

		reviewsScores = reviewsScores.map((scoreInteger) => scoreInteger.score);
		let averageScore = reviewsScores.reduce((a, b) => a + b, 0) / reviewsScores.length;
		averageScore = averageScore.toFixed(1);

		const artistReviewed = await Artist.findByPk(artistId);
		await artistReviewed.update({ score: averageScore });
    } catch (err) {
        console.log(err)
    }
};


module.exports = updateScore;