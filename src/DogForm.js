import React, { useState } from "react";

function DogForm() {
    const initialFormState = {
      name: "", 
      breed: "",
      age: "", 
    }

    const [formData, setFormData] =useState(initialFormState)

    const onChangeHandler = ({target})=> {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    }
 
    const submitHandler = (event)=>{
        event.preventDefault()
      console.log(formData.name, formData.breed,formData.age)
      setFormData(initialFormState)  
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">
                <input
                    id="name" 
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={formData.name}
                />
            </label>
            <label htmlFor="breed">
                <input
                    id="breed" 
                    type="text"
                    name="breed"
                    onChange={onChangeHandler}
                    value={formData.breed}
                />
            </label>
            <label htmlFor="age">
                <input
                    id="age" 
                    type="text"
                    name="age"
                    onChange={onChangeHandler}
                    value={formData.age}
                />
            </label>
           <button type="submit">Submit boiiiiiii</button>
        </form>

    )




}

export default DogForm;
