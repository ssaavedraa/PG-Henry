const { Review, Painting, Artist, Photo, User } = require("../../db");

const getById = async (req, res) => {
	const paramId = req.params.id;
	try {
		let review = await Review.findOne({
			where: { id: paramId },
			attributes: ["title", "body", "score", "id"],
			include: [
				{ model: User },
				{
					model: Painting,
					attributes: ["title", "height", "width", "id"],
				},
				{ model: Artist, attributes: ["name", "score", "photo"] },
			],
			raw: true,
		});
		if (!review)
			return res.status(404).send(`No reviews found with id:${paramId}`);
		console.log(review);
		let fixedReview = {
			title: review.title,
			body: review.body,
			score: review.score,
			id: review.id,
			artistName: review["artist.name"],
			artistPhoto: review["artist.photo"],
			artistScore: review["artist.score"],
			paintingTitle: review["painting.title"],
			paintingId: review["painting.id"],
			userFirstName: review["user.firstName"],
			userLastName: review["user.lastName"],
			userPhoto: review["user.profilePicture"],
		};
		const paintingPhotos = await Photo.findAll({
			where: { paintingId: fixedReview.paintingId },
			attributes: ["id", "url", "altText"],
			raw: true,
		});
		fixedReview.paintingPhotos = paintingPhotos;

		res.json(fixedReview);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getById;
