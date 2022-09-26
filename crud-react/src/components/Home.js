import React from 'react'

export const Home = () => {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="add_btn mt-2">
                    <div className="btn btn-primary">
                        Add Data
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

        <button className='btn btn-success'><i className="fa fa-eye" aria-hidden="true"></i></button>
        <button className='btn btn-primary'><i className="fas fa-pen"></i></button>
        <button className='btn btn-danger'> <i className="fas fa-trash"></i></button>
      </td>
    </tr>
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
      <td>React</td>
      <td>98789789</td>
      <td className='d-flex justify-content-between'>

        <button className='btn btn-success'><i className="fa fa-eye" aria-hidden="true"></i></button>
        <button className='btn btn-primary'><i className="fas fa-pen"></i></button>
        <button className='btn btn-danger'> <i className="fas fa-trash"></i></button>
      </td>
    </tr>
    
  </tbody>
</table>

        </div>
    </div>
  )
}
