import React from 'react'
import { NavLink } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export const Home = () => {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="add_btn mt-2">
                    <div className="btn btn-primary">
                        <NavLink to='/register'><button className='btn'>Add Data</button></NavLink>
                    </div>
            </div>

            <table className="table mt-2">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
      <td>React</td>
      <td>98789789</td>
      <td className='d-flex justify-content-between'>
        <NavLink to="/view/1"><button className='btn btn-success'><VisibilityIcon /></button></NavLink>
        <NavLink to="/edit/1"><button className='btn btn-primary'><EditIcon /></button></NavLink>
        <button className='btn btn-danger'> <DeleteIcon /></button>
      </td>
    </tr>
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
      <td>React</td>
      <td>98789789</td>
      <td className='d-flex justify-content-between'>
        <NavLink to="/view/1"><button className='btn btn-success'><VisibilityIcon /></button></NavLink>
        <NavLink to="/edit/1"><button className='btn btn-primary'><EditIcon /></button></NavLink>
        <button className='btn btn-danger'> <DeleteIcon /></button>
      </td>
    </tr>
    
  </tbody>
</table>

        </div>
    </div>
  )
}
