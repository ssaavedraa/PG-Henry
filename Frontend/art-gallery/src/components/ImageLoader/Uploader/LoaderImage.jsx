import React, {useEffect} from 'react'
import './loaderImage.scss'
import {motion} from 'framer-motion'
import useStorage from '../../../customHooks/useStorage'

export const LoaderImage = ({file, setFile, setLoading}) => {
  const {url, progress}=useStorage(file)
 
  useEffect(()=>{
    if(url){
      setFile(null)
      setLoading(false)
    }
  }, [url, setFile, setLoading])

  

  return (
    <div className="loader">

      <h3 className="loader__title">Uploading...</h3>
      <div className="loader__progress">
        <motion.div initial={{with:0}} animate={{width: progress + '%'}} className="loader__progress--bar"></motion.div>
      </div>
    </div>
  )
}
