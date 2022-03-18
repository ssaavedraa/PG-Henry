import React from "react";
import "./AddItems.css";
import NavPanel from "../NavPanel/NavPanel";
import {
  getArtist,
  getTechnique,
  addNewPainting,
} from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { confirmationSweet } from "../../utils/Notifications/Notifications";
import { useNavigate } from "react-router-dom";


const AddItems = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const technique = useSelector((state) => state.technique);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getArtist());
    dispatch(getTechnique());
  }, [dispatch]);

  const [input, setInput] = useState({
    title: "",
    description: "",
    height: 0,
    width: 0,
    price: 0,
    photos: [],
    artistId: 0,
    techniqueIds: [],
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
  //





  function handleCheck(e) {
    let tec = Number(e.target.value);
    if (input.techniqueIds.includes(tec)) {
      setInput({
        ...input,
        techniqueIds: input.techniqueIds.filter((d) => d !== tec),
      });
    } else {
      setInput({
        ...input,
        techniqueIds: [...input.techniqueIds, tec],
      });
    }
  }

  function handleSelect(e) {
    let art = Number(e.target.value);
    setInput({
      ...input,
      artistId: art,
    });
  }



  //--------
  function handleSubmit(e) {
    e.preventDefault();
    confirmationSweet(input.name,confirm, false, false);
  }

  function confirm() {
    dispatch(addNewPainting(input));
    navigate("/gallery")    
  }


  return (
    <>
      <div className="admin-box">
        <NavPanel />
        <div className="principal-box">
          
          <div className="data">
            <h2> ADD NEW ITEM</h2>

            <form key="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="box-1">
                <div className="image-content-form">
                  {input.photos &&
                  input.photos.toString().startsWith("http") ? (
                    <img src={input.photos.toString()} alt="imgUser" />
                  ) : (
                    <img
                      src="http://accordelectrotechnics.in/img/product/no-preview/no-preview.png"
                      alt="nofoto"
                    />
                  )}
                </div>
                <div className="first-dataform">
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
                  <label> Artist: </label>
                  <select
                    className="input"
                    key="artistId"
                    name="artistId"
                    required
                    onChange={(e) => handleSelect(e)}
                  >
                    <option value="">select artist</option>
                    {artists?.map((a) => (
                      <option value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="techniques-box">
                <label> Technique: </label>
                {technique?.map((d) => (
                  <label>
                    <input
                      type="checkbox"
                      id={d.id}
                      name="techniqueIds"
                      value={d.id}
                      onChange={(e) => handleCheck(e)}
                    />{" "}
                    {d.name}
                  </label>
                ))}
              </div>

              <label> Photo: </label>

              <input
                type="text"
                autoComplete="off"
                key="photos"
                className="input"
                required
                value={input.photos}
                name="photos"
                onChange={handleChange}
              />

              <label> Description: </label>
              <textarea
                name="description"
                key="description"
                className="input"
                value={input.description}
                onChange={handleChange}
              />

              <div>
                <button className="btn-edit">ADD NEW ITEM</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
