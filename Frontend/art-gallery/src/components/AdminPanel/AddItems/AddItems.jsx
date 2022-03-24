import React, { useRef } from "react";
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
import TechniqueModal from "../../../Modales/AddTechniques/Tecnique";
import { HiViewGridAdd } from "react-icons/hi";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddItems = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const technique = useSelector((state) => state.technique);
  const navigate = useNavigate();
  const refInputFile = useRef(null);

  const [progress, setProgress] = useState(0);
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

  const [openTechniqueModal, setOpenTechniqueModal] = useState(false);
  const [errors, setError] = useState({});
  const [applyChanges, setApplyChanges] = useState(true);
  const [bigImage, setBigImage] = useState(0);

  React.useEffect(() => {
    dispatch(getArtist());
    dispatch(getTechnique());
  }, [dispatch]);

  function validate(input) {
    setApplyChanges(true);
    let errors = {};
    if (
      input.photos.length === 0 ||
      !input.title ||
      !input.price ||
      !input.height ||
      !input.width ||
      !input.artistId ||
      input.techniqueIds.length === 0 ||
      !input.description
    ) {
      errors.message = "*All inputs are required";
    } else {
      setApplyChanges(false);
    }
    return errors;
  }

  const uploadImage = (file) => {
    // references
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // subimos la imagen, suceden ciertas cosas
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage, "porsentaje ");
        let por = Math.round(percentage);
        console.log(por, "por ");
        setProgress(por);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        //link de firebase se sube a input
        setInput({
          ...input,
          photos: [...input.photos, url],
        });
      }
    );
  };

  const handlerFile = (e) => {
    //le paso el file cargado desde la compu al hook de firebase
    const file = e.target.files[0];
    uploadImage(file);
    console.log(file, "soy file");
  };

  const deletePhoto = (artwork) => {
    setInput({
      ...input,
      photos: input.photos.filter((d) => d !== artwork),
    });
  };

  //funsion que abre el cuadro de dialogo compu
  const selectImage = (e) => {
    refInputFile.current.click();
  };

  function handleChange(e) {
    if (
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
      //form
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

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
    setError(
      //form
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    let art = Number(e.target.value);
    setInput({
      ...input,
      artistId: art,
    });
    setError(
      //form
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  //--------
  console.log(input, "soy input");

  function handleSubmit(e) {
    e.preventDefault();
    confirmationSweet(input.name, confirm, false, false);
  }

  function confirm() {
    dispatch(addNewPainting(input));
    navigate("/gallery");
  }

  return (
    <>
      <div className="admin-box">
        <NavPanel />
        <TechniqueModal
          openTechniqueModal={openTechniqueModal}
          setOpenTechniqueModal={setOpenTechniqueModal}
        />
        <div className="principal-box">
          <div className="data">
            <div className="add-tech-box">
              <button
                onClick={() => setOpenTechniqueModal(true)}
                className="add-item-btn"
              >
                <HiViewGridAdd />
                Add new technique
              </button>
            </div>
            <h2> ADD NEW ITEM</h2>
            <form key="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="box-1">
                <div className="internal-box-1">
                  <div className="internoimg">
                    <div className="miniatureContainer">
                      {input.photos.length > 1 ? (
                        input.photos.map((artwork, index) => {
                          return (
                            <>
                              <p onClick={() => deletePhoto(artwork)}>X</p>
                              <img
                                className="img"
                                src={artwork}
                                alt={`img-${index}`}
                                key={`img-${index}`}
                                onClick={() => setBigImage(index)}
                              />
                            </>
                          );
                        })
                      ) : (
                        <div>
                          <img
                            className="img"
                            src="https://awantraining.com/wp-content/plugins/tutor/assets/images/placeholder.jpg"
                            alt="1"
                            key="aja"
                          />
                          <img
                            className="img"
                            src="https://awantraining.com/wp-content/plugins/tutor/assets/images/placeholder.jpg"
                            alt="1"
                            key="aja2"
                          />
                        </div>
                      )}
                    </div>
                    {input.photos.length > 0 ? (
                      <>
                        <img
                          src={input.photos[bigImage]}
                          alt="img"
                          className="photoPaintingDetail"
                        />
                        <p onClick={() => deletePhoto(input.photos[bigImage])}>
                          X
                        </p>
                      </>
                    ) : (
                      <img
                        src={
                          "https://awantraining.com/wp-content/plugins/tutor/assets/images/placeholder.jpg"
                        }
                        alt="img"
                        className="photoPaintingDetail"
                      />
                    )}
                  </div>

                  <div>
                    <p className="btn-files" onClick={selectImage}>
                      {" "}
                      select image
                    </p>
                  </div>
                </div>

                {/*                   
                  
                  { input.photos ? 
                  (input.photos.map((a) => (
                    <div> <span onClick={()=> deletePhoto(a)}>X</span>
                    <div><img src={a.toString()} alt="imgUser" key={a} /></div> 
                    </div> 
                  )) 
                 ) :
                    (<img
                      src="http://accordelectrotechnics.in/img/product/no-preview/no-preview.png"
                      alt="nofoto"
                    />)
                  } */}

                <div className="first-dataform">
                  <div className="file-uploader">
                    <input
                      type="file"
                      key="file"
                      accept=".png, .jpg, .jpeg"
                      ref={refInputFile}
                      value={input.file}
                      onChange={handlerFile}
                    />
                  </div>

                  <label> Title: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="title"
                    className="input"
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
                    onChange={(e) => handleSelect(e)}
                  >
                    <option>artists</option>
                    {artists?.map((a) => (
                      <option value={a.id}>{a.name}</option>
                    ))}
                  </select>

                  <label> Techniques: </label>
                  <div className="techniques-box">
                    {technique?.map((d) => (
                      <label>
                        <input
                          type="checkbox"
                          id={d.id}
                          name="techniqueIds"
                          value={d.id}
                          onChange={(e) => handleCheck(e)}
                        />
                        {d.name}
                      </label>
                    ))}
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
              <div className="error">
                {errors.message ? <p>{errors.message}</p> : <p></p>}
              </div>

              <div>
                {progress === 0 || progress === 100 ? (
                  <></>
                ) : (
                  ` Uploading... ${progress} %`
                )}
                <button disabled={applyChanges} className="btn-edit">
                  ADD NEW ITEM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
