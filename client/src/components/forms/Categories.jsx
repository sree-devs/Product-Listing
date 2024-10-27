import React, { useState } from 'react';
import axios from 'axios';
 

export default function Categories() {
  const [input, setInput] = useState({});

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(input);

    axios
      .post(`http://localhost:8000/category`, input)
      .then((response) => {
        console.log('res=======>', response);
        if (response.data.success === true) {
          // Handle success
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="text">Select Product Category</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                name="category"
                onChange={inputChange}
              />
              <label>Enter the category</label>
            </div>

            <div className="form-row submit-btn">
              <div className="input-data">
                <input
                  type="submit"
                  value="Submit"
                  onClick={submit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
