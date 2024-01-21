import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
function Add() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [sortedMenu, setSortedMenu] = useState(null);
  function getAllMenu() {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }
  useEffect(() => {
    getAllMenu();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/menu", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    getAllMenu();
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3000/menu/" + id, {
      method: "DELETE",
    });
    getAllMenu();
  }
  function checkType(value) {
    if (typeof value === "string") {
      return value.toLowerCase();
    } else {
      return value;
    }
  }
  return (
    <section id="add">
      <div className="container">
        <Formik
          initialValues={{
            image: "",
            name: "",
            category: "",
            ingredients: "",
            price: 0,
          }}
          validationSchema={Yup.object({
            image: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            name: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            category: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            ingredients: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            price: Yup.number().positive().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form>
            <div className="form">
              <label htmlFor="image">Image :</label>
              <Field name="image" type="text" id="image" />
              <ErrorMessage name="image" component={"span"} />
            </div>
            <div className="form">
              <label htmlFor="name">Name :</label>
              <Field name="name" type="text" id="name" />
              <ErrorMessage name="name" component={"span"} />
            </div>
            <div className="form">
              <label htmlFor="category">Category :</label>
              <Field name="category" type="text" id="category" />
              <ErrorMessage name="category" component={"span"} />
            </div>
            <div className="form">
              <label htmlFor="ingredients">Ingredients :</label>
              <Field name="ingredients" type="text" id="ingredients" />
              <ErrorMessage name="ingredients" component={"span"} />
            </div>
            <div className="form">
              <label htmlFor="price">Price :</label>
              <Field name="price" type="number" id="price" />
              <ErrorMessage name="price" component={"span"} />
            </div>

            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div className="table">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <div className="btns">
            <button onClick={() => setSortedMenu(null)}>Default</button>
            <button
              onClick={() => setSortedMenu({ property: "name", asc: true })}
            >
              Name (A-Z)
            </button>
            <button
              onClick={() => setSortedMenu({ property: "name", asc: false })}
            >
              Name (Z-A)
            </button>
            <button
              onClick={() => setSortedMenu({ property: "price", asc: true })}
            >
              Price (Low-High)
            </button>
            <button
              onClick={() => setSortedMenu({ property: "price", asc: false })}
            >
              Price (High-Low)
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Ingredients</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu
                .filter((x) =>
                  x.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  if (sortedMenu && sortedMenu.asc) {
                    return checkType(a[sortedMenu.property]) >
                      checkType(b[sortedMenu.property])
                      ? 1
                      : checkType(b[sortedMenu.property]) >
                        checkType(a[sortedMenu.property])
                      ? -1
                      : 0;
                  } else if (sortedMenu && sortedMenu.asc === false) {
                    return checkType(a[sortedMenu.property]) <
                      checkType(b[sortedMenu.property])
                      ? 1
                      : checkType(b[sortedMenu.property]) <
                        checkType(a[sortedMenu.property])
                      ? -1
                      : 0;
                  } else {
                    return 0;
                  }
                })
                .map((x) => (
                  <tr key={x._id}>
                    <td>
                      <img src={x.image} width="100px" />
                    </td>
                    <td>{x.name}</td>
                    <td>{x.category}</td>
                    <td>{x.ingredients}</td>
                    <td>${x.price}</td>
                    <td>
                      <i
                        className="fa-regular fa-trash-can"
                        onClick={() => deleteItem(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Add;
