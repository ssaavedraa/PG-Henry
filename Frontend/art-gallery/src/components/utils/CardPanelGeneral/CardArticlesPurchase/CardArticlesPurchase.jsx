import React from "react";
import DivPurchaseData from "../../DivPurchaseData/DivPurchaseData";
import "./CardArticles.css";

function CardArticlesPurchase({ id, price, img, title, isAdmin, state }) {
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
          <button>+ Add Review</button>
        )}
      </section>
    </div>
  );
}

export default CardArticlesPurchase;
