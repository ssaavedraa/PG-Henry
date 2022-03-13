import React from "react";
import CardPaint from "../../components/CardPaint/CardPaint";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavs } from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import "./CardsPaints.css";

//IsAdmin es una prop pasada para validar si es admin o usuario o guest
function CardsPaints({ paintings }) {
	//Booleano para evaluar si es admin
	//let isAdmin = true;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFavs());
	}, [dispatch]);
	const favs = useSelector((state) => state.favs);

	return (
		<div className="containerCards">
			{paintings.length ? (
				paintings.map((paint) => (
					<CardPaint
						key={paint.id}
						id={paint.id}
						fav={favs.map(({ id }) => id).includes(paint.id)}
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
