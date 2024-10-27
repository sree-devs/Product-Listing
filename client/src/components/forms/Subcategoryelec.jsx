import React,{ useState,useEffect } from 'react'
import axios from 'axios'

export default function Subcategory() {
  const [input,setInput] = useState({ })
    console.log(input);
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);



    axios.post(`http://localhost:8000/subcategory`,input).then((response)=>{
     
    console.log("res=======>",response);
    if(response.data.success===true){

       
    }
  }).catch((err)=>{
    console.log(err);
  })
   
  }
  const [category, setCategory] = useState([])
  console.log(category);
  useEffect(() => {
    axios.get('http://localhost:8000/category/view-category').then((response) => {
        
        setCategory(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
  }, [])


  return (
    <>
    
   <div className="container">
   
  <div className="text">Enter Subcategory</div>
  
  <form action="#">
  
    <div className="form-row">
   
    <select className="form-select input-data" aria-label="Default select example" name="category" onChange={inputChange}>
   
  <option selected="">choose Product Category</option>

   {category.map((data, key)=>(  
   <option value={data._id}>{data.category}</option> 

  ))} 
 
</select>
      <div className="input-data">
        <input type="text" required=""
         name="subcategory"
         onChange={inputChange} />
        <div className="underline" />
        <label htmlFor="">Enter subcategory</label>
      </div>
    </div>
    <div className="form-row  submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="submit" defaultValue="submit"
             onClick={submit} />
          </div>
        </div>
         
  </form>
 
</div>

  
 </>
  )
}

