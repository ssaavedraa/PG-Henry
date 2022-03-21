import React from 'react'
import "./CardArticles.css";

function CardArticlesPurchase({id, price, img, title}) {
    return (
        <div className="articleCard">
          <section className="sectionSupArticle">
            <div className="customer-purchase-data">
              <label>Id:&nbsp;&nbsp;</label>
              <h5>{id}</h5>
            </div>
            <div className="customer-purchase-data">
              <label>Price:&nbsp;&nbsp;</label>
              <h5>{price}</h5>
            </div>
          </section>
          <section className="sectionMiddleArticle">
            <img src="" alt="img-article" className="img-article" />
          </section>
          <section className="sectionDownArticle">
            <div className="customer-purchase-data">
              <label>Title:&nbsp;&nbsp;</label>
              <h5>{title}</h5>
            </div>
          </section>
        </div>
      );
}

export default CardArticlesPurchase