import React, {useState} from 'react'
import propTypes from 'prop-types';
import { PureComponent } from 'react/cjs/react.development';

export const AddCategories = ({setcategories}) => {

  const [inputValue, setInputValue] = useState('')//undefined
  const handleInputChange = (e)=>{
      setInputValue(e.target.value);
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
 
      if (inputValue.trim().length > 2) {
        setcategories(categories => [inputValue,...categories]);
        setInputValue('');
    }
      

}

    return (
        <form onSubmit={handleSubmit}>
         <input 
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         />
        </form>
    )
}


AddCategories.propTypes={
    setcategories: propTypes.func.isRequired
}