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

const EditPaintinfForm = ({ObraId, setOpenModal}) => {
  const dispatch = useDispatch();
  const id = ObraId;
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

  const [errors, setError] = useState({  }); 
  const[applyChanges, setApplyChanges]= useState(true);

  function validate(input) {    
    setApplyChanges(true)
    let errors = {};
    if (!input.title
      || !input.price
      || !input.height
      || !input.width 
      || !input.description) {
      errors.message = "*All inputs are required";              
    }else{
    setApplyChanges(false)
    }
    return errors;
  }

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
    setError(      
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    ); 
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(editPainting(id, input));
    setOpenModal(false)
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
                        step="0.01"
                        
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
                        step="0.01"
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
              <div className="error">{errors.message ? <p>{errors.message}</p> : <p></p>} </div>
                <button disabled={applyChanges} className="btn-painting">EDIT ITEM</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPaintinfForm;
