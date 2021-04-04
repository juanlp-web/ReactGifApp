import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifts } from '../helpers/getGift';
import { GiftGridItem } from './GiftGridItem';




export const GiftGrid = ({category}) => {

   //  const [count, setCount] = useState(0)
    //  const [images, setImages] = useState([])

    //const state = useFetchGifs(category);

   // console.log(state);

    const {data,loading} = useFetchGifs(category);

    console.log(loading);
   //---------------Helper-----------
    //  useEffect(() => {
    //      getGifts(category)
    //      .then(setImages);
    //  },[category]);


    //getGifts();
    return (
        <>
        <h3>{category}</h3> 
        <div className="card-grid animate__animated animate__flash">  {loading ? 'Cargando':'' } </div>

        <div className ="card-grid animate__animated animate__backInLeft">
          {data.map(img=>
              (
               <GiftGridItem 
               key={img.id}
               {...img}/>               )
              )}         
             </div>
             </>
    )
}
//<button onClick={()=> setCount(count + 1)}></button>
