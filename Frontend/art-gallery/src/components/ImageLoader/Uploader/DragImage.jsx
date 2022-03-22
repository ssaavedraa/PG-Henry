import React, {useState, useRef, useEffect} from 'react'
import './dragImage.scss'

export const DragImage = ({setMedia, setLoading}) => {
  const[error, setError] = useState(false)
  const [messageError, setMessageError]= useState('')
  const [classDrag, setClassDrag]= useState('drag__image')
  const [image, setImage]= useState(null)
  const [file, setFile]= useState(null)
  const refInputFile = useRef(null)

  const tyopeImages= ['image/png', 'image/jpg', 'image/jpeg']

  const selectImage = (e) => {
		refInputFile.current.click()
	}

  const isImageValid = (file) =>{
    if(file && tyopeImages.includes(file.type)){
      setError(false)
      return true
    } else {
      setError(true)
      setMessageError('File is incorrect')
      setImage('')
      return false
    }

  }


  const showImage = (file) =>{
    const fileReader= new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e) =>{
      setImage(e.target.result)
    })
    setFile(file)
    //guardamos el archivo para pasarlo a su componente padre 
    setMedia(file)

  }

  const addImage=(e)=>{
    e.preventDefault()
    refInputFile.current.files = e.dataTransfer.files
    const file=  refInputFile.current.files[0]

    showImage(file)

  }

  const uploadImage = (e)=>{
    const files= e.target.files
    const file= files[0]
    
    const valid = isImageValid(file)

		if (valid) {
			showImage(file)
		} else {
			setFile(null)
		}
  }

  const handleSave =()=>{
    const valid= isImageValid(file)

    if(valid && file){
      setLoading(true)
    }else{
      setError(true)
      setMessageError('First upload a image')
    }
  }

  useEffect(()=> {
    setTimeout(()=>{
      setError(false)
    }, 5000)
  },[error])
  
  return (
    <div className='drag'>      
      <div className="drag__title">Uploader your Image</div>

      <div className="drag__info">Fire should be Jpeg, Png...</div>
      {error && <div className='drag__message'>{messageError}</div>}

      <input type="file" name='file' ref={refInputFile} onChange={uploadImage} />
      <div className={classDrag}
      onDragOver={(e)=>{
        e.preventDefault()
        setClassDrag('drag__image active')
      }}
      onDragLeave={(e)=>{
        e.preventDefault()
        setClassDrag('drag__image')
      }}
      onClick={selectImage}
      onDrop={addImage}
      >
        <img src={image} alt="" className="drag__image--preview" />
        <span className="drag__image--mesage">
          Clic or Drag & drop your image here.
        </span>
      </div>

      <button className="drag__action" onClick={handleSave}>Save Image</button>
      </div>
  )
}
