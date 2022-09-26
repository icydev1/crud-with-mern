import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";

const EditForm = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    job: "",
    gender: "",
    number: "",
    date: "",
    hobbies: "",
    favdish: "",
    address: "",
  });

  const setData = (e) => {
    console.log(e.target.value);

    const {
      name,
      email,
      job,
      gender,
      number,
      date,
      hobbies,
      favdish,
      address,
      value,
    } = e.target;

    setstate((preval) => {
      return {
        ...preval,
        [name]: value,
        [email]: value,
        [job]: value,
        [number]: value,
        [gender]: value,
        [date]: value,
        [hobbies]: value,
        [favdish]: value,
        [address]: value,
      };
    });
  };

  return (
    <div className="container">
      <NavLink to="/">Home 2</NavLink>

      <form className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                value={state.name}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // value={}
                name="name"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                value={state.email}
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                name="email"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                value={state.job}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="job"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <input
                value={state.gender}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="gender"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Number</label>
              <input
                value={state.Number}
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="number"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                onChange={setData}
                value={state.date}
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                name="date"
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <input
                value={state.Hobbies}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="hobbies"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Fav Dish</label>
              <input
                value={state.favdish}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="favdish"
                onChange={setData}
              ></input>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                value={state.address}
                name="address"
                className="form-control"
                id="exampleInputPassword1"
                onChange={setData}
              ></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
