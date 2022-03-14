import React from "react";
import "./EditPaintingForm.css";

import {
  getObraDetail,
  editPainting,
  getArtist,
  getTechnique,
} from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import logo from "../../../assets/img/SantArtlogo.png";

const EditPaintinfForm = (ObraId) => {
  const dispatch = useDispatch();
  const id = ObraId.ObraId;
  const detailObra = useSelector((state) => state.detailObra);

  useEffect(() => {
    dispatch(getObraDetail(id));
    dispatch(getArtist());
    dispatch(getTechnique());
  }, [id, dispatch]);

  useEffect(() => {
    setInput({
      title: detailObra.title,
      description: detailObra.description,
      height: detailObra.height,
      width: detailObra.width,
      price: detailObra.price,
    });
  }, [detailObra]);

  const [input, setInput] = useState({
    title: detailObra.title,
    description: detailObra.description,
    height: detailObra.height,
    width: detailObra.width,
    price: detailObra.price,
  });

  function handleChange(e) {
    if (e.target.name === "photos") {
      setInput({
        ...input,
        photos: [e.target.value],
      });
    } else if (
      e.target.name === "width" ||
      e.target.name === "height" ||
      e.target.name === "price"
    ) {
      setInput({
        ...input,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editPainting(id, input));
    alert("New item create");
    setInput({
      title: "",
      description: "",
      height: 0,
      width: 0,
      price: 0,
    });
  }

  return (
    <>
      <div className="principal-box-edit">
        <div className="box-one"></div>
        <div className="data">
          <div className="profile-logo">
            <img src={logo} height="70rem" alt="imgUser" />
          </div>

          <div className="box-two">
            <form key="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="box-3">
                <div className="image-content-form">
                  {detailObra.photos !== "" && (
                    <img src={detailObra.photos[0].url} alt="imgUser" />
                  )}
                </div>
                <div className="first-dataform">
                  {detailObra.artist && <h3>{detailObra.artist.name}</h3>}
                  <label> Title: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="title"
                    className="input"
                    required
                    value={input.title}
                    name="title"
                    onChange={handleChange}
                  />

                  <label> Price: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="price"
                    className="input"
                    required
                    value={input.price}
                    name="price"
                    onChange={handleChange}
                  />

                  <div className="width-height">
                    <div>
                      <label> Height : </label>
                      <input
                        type="number"
                        required
                        key="height"
                        id="height"
                        min="11"
                        max="10000"
                        value={input.height}
                        name="height"
                        className="input"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label> Width: </label>
                      <input
                        type="number"
                        required
                        min="11"
                        max="10000"
                        key="width"
                        id="width"
                        className="input"
                        value={input.width}
                        name="width"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <label> Description: </label>
              <textarea
                name="description"
                key="description"
                className="input"
                value={input.description}
                onChange={handleChange}
              />

              <div>
                <button className="btn-create">EDIT ITEM</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPaintinfForm;
