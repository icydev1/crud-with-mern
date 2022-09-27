import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export const Detail = () => {
  return (
    <div className="container mt-3">
      <h1 style={{fontWeight:400}}>Welcome To React Icy</h1>

      <Card sx={{minWidth: 275}} >
      <CardContent>
        <img src="/logo192.png" style={{width:50}} alt="profile" />

        <div className="row">
          <div className="col-md-6">
            <p>Name:<span style={{fontWeight:700}}> Killer</span></p>
            <p>Age:<span style={{fontWeight:700}}> 22</span></p>
            <p>Gender:<span style={{fontWeight:700}}> 22</span></p>
            <p>Job:<span style={{fontWeight:700}}> 22</span></p>
          </div>
          <div className="col-md-6">
          <p>Email:<span style={{fontWeight:700}}> Killer@gmail.com</span></p>
          <p>Number:<span style={{fontWeight:700}}> Killer@gmail.com</span></p>
          <p>Hobbies:<span style={{fontWeight:700}}> Killer@gmail.com</span></p>
          <p>FavDish:<span style={{fontWeight:700}}> Killer@gmail.com</span></p>
          </div>
          <div className="col-md-12">
          <p>Address:<span style={{fontWeight:700}}> Killer@gmail.com</span></p>
          </div>
        </div>

      </CardContent>
</Card>
    </div>
  )
}
