import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GiftGrid } from './components/GiftGrid';


const GiftExpertApp = () =>{

    //const categories = ['One Punch Man', 'Samurai X' ,'Dragon Ball']
const [categories, setcategories] = useState (['Dragon Ball']);
// const handAdd = () =>{
 
    return(
      <>
      <h2>GiftExpertApp</h2>
      <AddCategories setcategories={setcategories}/>
      <hr />

       <ol>
     {  categories.map(category =>(
        <GiftGrid
        key = {category}
        category={category}
        />         
        )
        )
     }
       </ol> 
      </>
    )
  }
 // return <li key={categories}> {categories} </li>

  export default GiftExpertApp;