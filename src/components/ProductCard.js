import PropTypes from 'prop-types';

import '../assets/components/ProductCard.css'

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
      <img src={product.thumbnail} alt={product.title}></img>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price: {product.price}</strong></p>
    </div>
	)
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
export default ProductCard
