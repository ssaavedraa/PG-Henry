import React from "react";
import "./EditPaintingForm.css";

import {
  getObraDetail,
  editPainting,
  getArtist,
  getTechnique,
} from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import logo from "../../../assets/img/SantArtlogo.png";

const EditPaintinfForm = (ObraId) => {
  const dispatch = useDispatch();
  const id = ObraId.ObraId;
  React.useEffect(() => {
    dispatch(getObraDetail(id));
    dispatch(getArtist());
    dispatch(getTechnique());
  }, [id, dispatch]);

  const detailObra = useSelector((state) => state.detailObra);
  // const artists = useSelector((state) => state.artist);
  // const technique = useSelector((state) => state.technique);
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

  // function handleCheck(e){
  //   let tec= Number(e.target.value)
  //   if (input.techniqueIds.includes(tec)) {
  //     setInput({
  //       ...input,
  //      techniqueIds: input.techniqueIds.filter((d) => d !== tec)
  //     });
  //   }else{
  //   setInput({
  //     ...input,
  //     techniqueIds: [...input.techniqueIds, tec ] ,
  //   });
  // }

  // }

  //   function handleSelect(e) {

  //     setInput({
  //       ...input,
  //       artistId:Number(e.target.value),
  //     });
  //   }

  console.log(input);
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
      {" "}
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
                  <img src={detailObra.photos[0].url} alt="imgUser" />
                </div>
                <div className="first-dataform">
                  <h3>{detailObra.artist.name}</h3>
                  <label> Title: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="title"
                    className="input"
                    required
                    defaultValue={detailObra.title}
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
                    defaultValue={detailObra.price}
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
                        defaultValue={detailObra.height}
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
                        defaultValue={detailObra.width}
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
                defaultValue={detailObra.description}
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
