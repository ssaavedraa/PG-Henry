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
import { IoIosAddCircle } from "react-icons/io";



const AddItems = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const technique = useSelector((state) => state.technique);
  const navigate = useNavigate();


  // console.log(technique, "soy technique")
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

  const [inputTechnique, setInputTechnique] = useState({
    name: "",
    description:""
  })
console.log(inputTechnique, "inputTechnique")


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

  function handleChangeTech(e){
    const tec= (e.target.value).replace(/\w\S*/g, 
    function(txt){return txt.charAt(0).toUpperCase() +
           txt.substr(1).toLowerCase();}); 
           

    const allTechiques= [];    

  technique.map((d) => (
    allTechiques.push(d.name)
    ))    

    if (allTechiques.includes(tec)){
      alert("This Technique is already added ")    

    }else{
      setInputTechnique({
        ...input,
        inputTechnique: e.target.value,  
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
                <div className="image-content-item">
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
                <div>
                <label> Select techniques: </label>
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
                <div>
                  <form>
                  <label>Add a new techiques:</label>
                  <label>name:</label>
                  <input 
                  key="name"
                  name="name"
                  value={inputTechnique.name}
                  onChange={handleChangeTech}
                  /> 
                  <label>description :</label>
                  <input 
                  type="description"
                  name="description"
                  value={inputTechnique.description}
                  onChange={handleChangeTech}                  
                  />
                  
                  <button> <IoIosAddCircle/> </button>
                  </form>
                </div>
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
