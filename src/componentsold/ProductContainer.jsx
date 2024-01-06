import React from 'react'
import Product from './Product'
import prod1 from '../assets/prod1.jpeg'
import prod2 from '../assets/prod2.jpeg'
import prod3 from '../assets/prod3.jpeg'
import prod4 from '../assets/prod4.jpeg'
import './ProductContainer.css'

const ProductContainer = () => {

  let prodArr = [
    {
      image: prod1,
      price: 7500,
      desc: "Acer Laptop",
      loc: "DECCAN PUNE",
      date: "TODAY"
    },
    {
      image: prod2,
      price: 15000,
      desc: "HP Laptop",
      loc: "KARVE NAGAR PUNE",
      date: "TODAY"
    },
    {
      image: prod3,
      price: 18000,
      desc: "Lenovo Laptop",
      loc: "DADAR MUMBAI",
      date: "27/12/2023"
    },
    {
      image: prod4,
      price: 7500,
      desc: "Acer 450 laptop rs14500",
      loc: "PUNE",
      date: "26/12/2023"
    },
    {
      image: prod2,
      price: 15000,
      desc: "HP Laptop",
      loc: "KARVE NAGAR PUNE",
      date: "TODAY"
    },
    {
      image: prod3,
      price: 18000,
      desc: "Lenovo Laptop",
      loc: "DADAR MUMBAI",
      date: "27/12/2023"
    },
    {
      image: prod4,
      price: 7500,
      desc: "Acer 450 laptop rs14500",
      loc: "PUNE",
      date: "26/12/2023"
    },
  ];

  return (
    <div className='prod-container'>
      {
          prodArr.map((prod) => (
            <Product image={prod.image} price={prod.price} desc={prod.desc} loc={prod.loc} date={prod.date} />
          ))
        }

      <Product 
      image={prod1}
      price="7500"
      desc="Acer Laptop"
      loc="Deccan Pune"
      date="TODAY"
      />

      <Product 
      image={prod2}
      price="15000"
      desc="Acer Laptop"
      loc="Deccan Pune"
      date="TODAY"
      />
    </div>
  )
}

export default ProductContainer
