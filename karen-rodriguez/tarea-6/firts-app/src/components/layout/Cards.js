import React from 'react'
import Card from './Card'
import Hamburguesa from '../../assets/hamburguesa.png'
import Salchipapa from '../../assets/salchipapa.jpg'
import Hotdog from '../../assets/hotdog.png'
import Agua from '../../assets/agua.jpg'

const cards=[{
    id:'food1',
    title: 'Hamburguesa',
    image: Hamburguesa,
    price: '$25000'
},
{
    id:'food2',
    title: 'Salchipapa',
    image: Salchipapa,
    price: '$15000'

},
{
    id:'food3',
    title:'Perro caliente',
    image: Hotdog,
    price: '$20000'
},
{
    id:'food4',
    title:'Un delicioso vaso de agua',
    image: Agua,
    price: '$5000'
}
]

const Cards = () => {
  return (
    <div className='container'>
        <div className='row '>
            {
                cards.map(card => (
                    <div className='col s12 m3' key={card.id}>
                        <Card title={card.title} image={card.image} price={card.price}/>       
                    </div>
                )) 
            }
        </div>
    </div>
  )
}

export default Cards
