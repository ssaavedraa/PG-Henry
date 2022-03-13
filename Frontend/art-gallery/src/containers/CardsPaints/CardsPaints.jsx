import React from "react";
import CardPaint from "../../components/CardPaint/CardPaint";
import { useSelector } from "react-redux";
import "./CardsPaints.css";

//IsAdmin es una prop pasada para validar si es admin o usuario o guest
function CardsPaints({ paintings }) {
	//Booleano para evaluar si es admin
	//let isAdmin = true;

	const favs = useSelector((state) => state.favs);
	const addedToFavs = favs.map((fav) => fav.id);

	return (
		<div className="containerCards">
			{paintings.length ? (
				paintings.map((paint) => (
					<CardPaint
						key={paint.id}
						id={paint.id}
						fav={addedToFavs.includes(paint.id) ? true : false}
						image={paint.image}
						title={paint.title}
						artist={paint.artist}
						height={paint.height}
						width={paint.width}
						techniques={paint.techniques}
						price={paint.price}
					/>
				))
			) : (
				<h1 className="errorCardPaint">Not Results!</h1>
			)}
		</div>
	);
}
export default CardsPaints;
