import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../helpers/base-url";
import { KEY_IMAGES } from "../helpers/query-keys";


export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
    
    const [imageName, setImageName] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [imageSize, setimageSize] = useState('')
    const [imageDescription, setImageDescription] = useState('')

  async function getImages(url = ''){
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.json();
  }

  const propsReactQuery = useQuery([KEY_IMAGES], () => getImages(`${BASE_URL}/api/images`))

  return (
    <ImageContext.Provider
      value={{
        imageName, setImageName,
        imageURL, setImageURL,
        imageSize, setimageSize,
        imageDescription, setImageDescription,
        propsReactQuery,
        
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;

export const useImageInfo = () => {
  const values = useContext(ImageContext);
   
  return { ...values };
};
