import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import SearchBar from './Searchbar'


const Getproduct = () => {

  // states
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // image url
  const img_url =
    "https://ryanoryx.alwaysdata.net/static/images/"

  // get products
  const getproducts = async () => {

    setLoading("Please wait as we retrieve products...")

    try {

      const response = await axios.get(
        "https://ryanoryx.alwaysdata.net/api/get_products_details"
      )

      setProduct(response.data)
      setLoading("")

    } catch (error) {

      setError(error.message)

    }
  }

  // add to cart
  const addToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || []

    const productExists = cart.find(
      (item) => item.product_id === product.product_id
    )

    if (productExists) {

      alert("Product already added to cart")

    } else {

      cart.push(product)

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      )

      alert("Product added to cart")
    }
  }

  useEffect(() => {
    getproducts()
  }, [])

  return (

    <div className='container-fluid product-page'>

      {/* carousel */}
      <Carousel />

      {/* heading section */}
      <div className='text-center py-4'>

        <h1 className='main-title'>
          Available Products
        </h1>

        <p className='subtitle'>
          Get high-quality and trusted medicines
          delivered safely to your doorstep.
        </p>

      </div>

      {/* loading and errors */}
      <div className='text-center'>

        <p className='loading-text'>
          {loading}
        </p>

        <p className='error-text'>
          {error}
        </p>

      </div>

      {/* product cards */}
      <div className='row justify-content-center'>

        {products.map((product) => (

          <div
            className='col-md-3 col-sm-6 mb-4'
            key={product.product_id}
          >

            <div className='product-card'>

              {/* product image */}
              <div className='image-container'>

                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className='product-image'
                />

              </div>

              {/* card body */}
              <div className='card-body'>

                <h4 className='product-name'>
                  {product.product_name}
                </h4>

                <p className='product-description'>
                  {product.product_description}
                </p>

                <h5 className='product-price'>
                  Ksh {product.product_cost}
                </h5>

                {/* buttons */}
                <div className='button-group'>

                  <button
                    className='cart-btn'
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>

                  <button
                    className='buy-btn'
                    onClick={() =>
                      navigate(
                        "/makepayment",
                        { state: { product } }
                      )
                    }
                  >
                    Purchase Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Getproduct