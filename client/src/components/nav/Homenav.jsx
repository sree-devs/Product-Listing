import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Homenav() {
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
        < >
            <nav className="navbar navbar-expand-lg bg-transperent">
                <div className="container-fluid"style={{textDecoration: 'none', padding: '50px', color: 'black'}}  >
                    <a className="navbar-brand" href="#"  style={{ listStyle: 'none', marginRight: '170px',textDecoration: 'none',fontFamily:'fantasy', fontSize:'30px'}}>
                        PRODUCTS
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ listStyle: 'none', marginRight: '50px', fontFamily:'serif',fontSize:'20px'  }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  active" href="/add category"  style={{ listStyle: 'none', marginRight: '50px',fontFamily:'serif',fontSize:'20px' }}>
                                    Add category
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link  active" href="/add subcategory " style={{ listStyle: 'none', marginRight: '50px',fontFamily:'serif',fontSize:'20px' }}>
                                    Add Sub-category
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link  active" href="/add product" style={{ listStyle: 'none', marginRight: '50px',fontFamily:'serif',fontSize:'20px' }}>
                                    Add Products
                                </a>
                            </li>
                            <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle transperent"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ listStyle: 'none', marginRight: '50px',fontFamily:'serif',fontSize:'20px' }}
  >
    View Product
  </button>
 

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1 transperent">
  {category.map((data, key) => (
    <li>
      <Link className="dropdown-item" to={`/allproduct/${data.category}`}>
        {data.category}
      </Link>
    </li>
     ))}
  </ul>
  
</div>

                        </ul>
                    </div>
                </div>
            </nav>

        </ >
    )
}
