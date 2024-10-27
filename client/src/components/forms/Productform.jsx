import React,{ useState,useEffect } from 'react'
import axios from 'axios'


export default function Productform() {
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



    axios.post(`http://localhost:8000/product`,input).then((response)=>{
     
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


  const [subcategory, setSubcategory] = useState([])
  console.log(subcategory);
  useEffect(() => {
    axios.get('http://localhost:8000/subcategory/view-subcategory').then((response) => {
        
        setSubcategory(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
  }, [])

  return (
    < > 
    <div className="container1">
  <div className="text">Add Your Product</div>
  <form action="#">
    <div className="form-row">

    <select className="form-select input-data" aria-label="Default select example" name="category" onChange={inputChange} >
   
   <option selected="">choose Product Category</option>
 
    {category.map((data, key)=>(   
    <option value={data._id}>{data.category} </option> 
 
    ))}   
  
 </select>
     


     
 <select className="form-select input-data" aria-label="Default select example" name="subcategory" onChange={inputChange} >
   
   <option selected="">choose Product subCategory</option>
 
  {subcategory.map((data, key)=>(   
    <option value={data._id}>{data.Subcategory}</option> 
 
     ))}   
  
 </select>
     
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text" required="" 
        name="productname"
        onChange={inputChange}/>
        <div className="underline" />
        <label htmlFor="">Product Name</label>
      </div>
      <div className="input-data">
        <input type="text" required="" placeholder='example:product is mobile give android or ios etc'name="type"
        onChange={inputChange} />
        <div className="underline" />
        
        <label htmlFor="">Type</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data textarea">
        <textarea rows={8} cols={80} required="" defaultValue={""} 
        name="details" onChange={inputChange}/>
        <br />
        <div className="underline" />
        <label htmlFor="">Product Details</label>
        <br />
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="submit" defaultValue="submit" onClick={submit} />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    
    </ >
  )
}
