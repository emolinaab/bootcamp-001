import React from 'react'


function Card(food) {

  return (
    <div className="row">
    <div className="col">
        <div className="card">
        <div className="card-image">
            <img src={food.image}></img>
            <span className="card-title">{food.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">  <i class="material-icons">add</i></a>
        </div>
        <div className="card-content">
            <p>Ven a disfrutar! {food.title} por tan solo {food.price}. No te quedes sin las ganas</p>
        </div>
        </div>
    </div>
    </div>    
  )
}

export default Card