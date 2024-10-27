import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Allproductview() {
  const [product, setProduct] = useState([]);
  const [filterproduct, setFilterProduct] = useState([]);
  const [typeproduct, settypeProduct] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/product/view-product')
      .then((response) => setProduct(response.data.details))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/subcategory/view-subcategory')
      .then((response) => setSubcategory(response.data.details))
      .catch((err) => console.log(err));
  }, []);

  const category = (id) => {
    axios.get(`http://localhost:8000/product/view-product/${id}`)
      .then((response) => setFilterProduct(response.data.details))
      .catch((err) => console.log(err));
  };

  const types = (id) => {
    axios.get(`http://localhost:8000/product/view-product-type/${id}`)
      .then((response) => settypeProduct(response.data.details))
      .catch((err) => console.log(err));
  };

  const addToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <>
      <div className="container1">
        <div style={{ textDecoration: 'none', fontFamily: "serif" }}>
          ELECTRONICS {product.length}
        </div>
        <div className="card row">
          <div className="col-lg-3 card-body" style={{ display: 'flex' }}>
            {subcategory.map((data, key) => (
              <li style={{ listStyle: 'none', marginRight: '100px' }} key={key}>
                <a onClick={() => category(data._id)} style={{ cursor: 'pointer' }}>
                  {data.Subcategory}
                </a>
              </li>
            ))}
          </div>
        </div>

        <div className="text">Products</div>
        <div className='row'>
          {filterproduct.length > 0
            ? filterproduct[0].type === 'ios' || filterproduct[0].type === 'android'
              ? (
                <>
                  <div className="col-lg-12 card-body" style={{ display: 'flex' }}>
                    <li style={{ listStyle: 'none', marginRight: '100px' }}>
                      <a onClick={() => types('android')} style={{ cursor: 'pointer' }}>Android</a>
                    </li>
                    <li style={{ listStyle: 'none', marginRight: '100px' }}>
                      <a onClick={() => types('ios')} style={{ cursor: 'pointer' }}>IOS</a>
                    </li>
                  </div>
                  <>
                    {typeproduct.length > 0
                      ? typeproduct.map((data, key) => (
                        <div className='col-lg-3' key={key}>
                          <div className="card">
                            <img src="/ecommerce.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                              <p className="card-text" style={{ fontFamily: "serif" }}>
                                Product Name: {data.productname}<br />
                                Product type: {data.type}<br />
                                Product Details: {data.details}<br />
                              </p>
                              <button className="add-to-cart-btn" onClick={() => addToCart(data.productname)}>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      ))
                      : filterproduct.map((data, key) => (
                        <div className='col-lg-3' key={key}>
                          <div className="card">
                            <img src="/ecommerce.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                              <p className="card-text">
                                Product Name: {data.productname}<br />
                                Product type: {data.type}<br />
                                Product Details: {data.details}<br />
                              </p>
                              <button className="add-to-cart-btn" onClick={() => addToCart(data.productname)}>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                </>
              )
              : filterproduct.map((data, key) => (
                <div className='col-lg-3' key={key}>
                  <div className="card">
                    <img src="/ecommerce.jpg" className="card-img-top" alt="Product" />
                    <div className="card-body">
                      <p className="card-text">
                        Product Name: {data.productname}<br />
                        Product type: {data.type}<br />
                        Product Details: {data.details}<br />
                      </p>
                      <button className="add-to-cart-btn" onClick={() => addToCart(data.productname)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            : product.map((data, key) => (
              <div className='col-lg-3 ' key={key}>
                <div className="card">
                  <img src="/ecommerce.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <p className="card-text" style={{ textDecoration: 'none', fontFamily: 'serif' }}>
                      Product Name: {data.productname}<br />
                      Product type: {data.type}<br />
                      Product Details: {data.details}<br />
                    </p>
                    <button className="add-to-cart-btn" onClick={() => addToCart(data.productname)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
