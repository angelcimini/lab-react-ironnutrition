import { Divider, Input } from 'antd';
import { useState } from 'react';

export default function AddFoodForm({ foodHandler }){

    const [ name , setName ] = useState('')
    const [ image , setImage ] = useState('')
    const [ calories , setCalories ] = useState('')
    const [ servings , setServings ] = useState('')

    const nameHandler = e => setName(e.target.value)
    const imageHandler = e => setImage(e.target.value)
    const caloriesHandler = e => setCalories(e.target.value)
    const servingsHandler = e => setServings(e.target.value)

    const submitFormulario = event => {
        event.preventDefault()
        const foodId =  Math.floor(Math.random()*10*1000*1000)
        foodHandler({ foodId, name, image, calories, servings })
    }

    return (
        <form onSubmit={submitFormulario}>

            <Divider>Add Food Entry</Divider>
    
            <label>Name</label>
            <Input 
                value={name}
                placeholder='Name'
                type="text"
                onChange={nameHandler}
            />
    
            <label>Image</label>
            <Input 
                value={image}
                placeholder='Image'
                type="text"
                onChange={imageHandler}
            /> 
    
            <label>Calories</label>
            <Input 
                value={calories}
                placeholder='Calories'
                type="number"
                onChange={caloriesHandler}
            />
    
            <label>Servings</label>
            <Input 
                value={servings}
                placeholder='Servings'
                type="number"
                onChange={servingsHandler}
            />
    
          <button type="submit">Create</button>

        </form>
      );
}