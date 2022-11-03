import React, { useState } from 'react'

export const AddCategory = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange=(e)=>{
        setInputValue(e.target.value)
    }
    const getGifts=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length<=1) return;
        if(categories.includes(inputValue.trim())) return
        setCategories(categories=>[inputValue, ...categories ])
        console.log(inputValue)
        setInputValue("");

    }
  return (
  <>

<form onSubmit={getGifts}>
<input type="text" 
  placeholder='Buscar Gifs' 
  value={inputValue}
  onChange={onInputChange}
 />
</form>
 
  </>
  )
}
