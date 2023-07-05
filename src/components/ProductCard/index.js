// import './index.css'

// const ProductCard = props => {
//   const {productData} = props
//   const {title, brand, imageUrl, rating, price} = productData

//   return (
//     //   Wrap with Link from react-router-dom
//     <li className="product-item">
//       <img src={imageUrl} alt="product" className="thumbnail" />
//       <h1 className="title">{title}</h1>
//       <p className="brand">by {brand}</p>
//       <div className="product-details">
//         <p className="price">Rs {price}/-</p>
//         <div className="rating-container">
//           <p className="rating">{rating}</p>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/star-img.png"
//             alt="star"
//             className="star"
//           />
//         </div>
//       </div>
//     </li>
//   )
// }
// export default ProductCard
.product-item {
  list-style-type: none;
  margin-bottom: 48px;
  width: 350px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-right: 20px;
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .product-item {
    width: 300px;
  }
}
.link-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.thumbnail {
  width: 100%;
  max-height: 350px;
  border-radius: 6px;
}

.title {
  color: #171f46;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 8px;
}

.brand {
  color: #594d6d;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 6px;
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2px;
}

.price {
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.rating-container {
  display: flex;
  align-items: center;
  background-color: #3b82f6;
  border-radius: 6px;
  padding: 6px 16px;
}

.rating {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.star {
  height: 20px;
  width: 20px;
  margin-bottom: 3px;
}