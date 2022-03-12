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

const AddItems = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const technique = useSelector((state) => state.technique);

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

    if(e.target.name === "height" && e.target.name === "width"){
      let cm= Number(e.target.value)
      setInput({
        ...input,
        [e.target.name]: cm, //va tomando el nombre de cada prop, me vaya llenando el estado
      });
    }

    if(e.target.name === "photos" ){    
      setInput({
        ...input,
        photos:[...input.photos, e.target.value] //va tomando el nombre de cada prop, me vaya llenando el estado
      });      
    }    
    
    setInput({
      ...input,
      [e.target.name]: e.target.value, //va tomando el nombre de cada prop, me vaya llenando el estado
    });
  }
//

function handleCheck(e){
  if (!input.techniqueIds.includes(e.target.value)) {    
   let tec= Number(e.target.value)    
  setInput({
    ...input,
    techniqueIds: [...input.techniqueIds, tec ] , //va tomando el nombre de cada prop, me vaya llenando el estado
  });
}
}


  function handleSelect(e) { 
    let art= Number(e.target.value)
    setInput({
      ...input,
      artistId: art, //va tomando el nombre de cada prop, me vaya llenando el estado
    });
  }

  console.log(input);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNewPainting(input));
    alert("New item create");
    setInput({
      title: "",
      description: "",      
      height: 0,
      width: 0,
      price: 0,
      photos: [],
      artistId: 0,
      techniqueIds: [],
    });
  }

  return (
    <>
      <div className="admin-box">
        <NavPanel />
        <div className="component-box">
          <div className="title-admin">
            <h1>ADMIN PANEL</h1>
            <hr></hr>
          </div>
          <div className="reder-box">
            <div className="myprofile-box">
              <div className="items-box">
                <h2> ADD NEW ITEM</h2>

                <div className="data">
                  <form key="form" onSubmit={(e) => handleSubmit(e)}>
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

                    <label> Technique: </label> 
                      {technique?.map((d) => (
                        <label>
                          <input 
                          type="checkbox" 
                          id={d.id}
                          name="techniqueIds" 
                          value={d.id}
                          onChange={(e) => handleCheck(e)}
                          /> {d.name}
                        </label>                        
                      ))}

                       
                    

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

                    <div>
                      <button className="btn-edit">ADD NEW ITEM</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
