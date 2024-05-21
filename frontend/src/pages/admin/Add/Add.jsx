import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";
import "./Add.css"
const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div>
      
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "", category: "menu desert" }}
        onSubmit={(values, { resetForm }) => {
          axios
    .post("http://localhost:5000/api/products", {
      "title": values.title,
      "price": values.price,
      "image": values.image,
      "description": values.description,
      "category": values.category,
    })
    .then((res) => {
      setData([...data, res.data]);
      resetForm();
    })
    .catch((error) => {
      console.error("There was an error adding the product!", error);
    });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
           
            onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="form-label">
             ADD PRODUCTS
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

            <label htmlFor="description" className="form-label">
          
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
           
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

            <label htmlFor="image" className="form-label">
             
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
          
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <label htmlFor="price" className="form-label">
            
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}

            <label htmlFor="category" className="form-label">
             
            </label>
            <select
              name="category"
              id="category"
             
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            >
              <option value="menu desert">Desert</option>
              <option value="mennu drink">Drink</option>
            </select>
            {errors.category && touched.category && <div className="text-danger">{errors.category}</div>}

            <button className="btn btn-success mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;