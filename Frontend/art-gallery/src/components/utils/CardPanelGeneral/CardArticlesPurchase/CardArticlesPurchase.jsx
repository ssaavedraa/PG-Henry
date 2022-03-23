import React from "react";
import DivPurchaseData from "../../DivPurchaseData/DivPurchaseData";
import "./CardArticles.css";
import { useState } from "react";
import AddReviewModal from "../../../../Modales/Reviews/AddReviewModal";

function CardArticlesPurchase({ id, price, img, title, isAdmin, state }) {

  const [isModalOpened, setIsModalOpened] = useState(false)
  const [openModalReview, setOpenModalReview] = useState(false)

  return (
    <div className="articleCard">
      <section className="sectionSupArticle">
        <DivPurchaseData title="Id" value={id} />
        <DivPurchaseData title="Price" value={price} />
      </section>
      <section className="sectionMiddleArticle">
        <img src={img[0].url} alt="img-article" className="img-article" />
      </section>
      <section className="sectionDownArticle">
        <DivPurchaseData title="Title" value={title} />
        {isAdmin === false && state === "completed" && (
          <button onClick={() => setOpenModalReview(true)} >+ Add Review</button>
        )}
      </section>
      {
        <AddReviewModal openModalReview={openModalReview} setOpenModalReview ={setOpenModalReview}/>
      }
      </div>
  );
}

export default CardArticlesPurchase;
