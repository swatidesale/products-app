import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Loader from './components/Loader'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'

import './App.css'

const App = () => {
  const [products, setProducts] = useStaste([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchProduct, setSearchProduct] = useState('')
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    let url = 'https://dummyjson.com/products/category-list'
    const getCategories = async () => {
      try {
        const result = await fetch(url)
        const categories = await result.json()
        setCategories(categories)
      } catch (error) {
        setError(error)
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      let url = 'https://dummyjson.com/products'
      if(searchProduct) {
        url += `/search?q=${searchProduct}`
      }

      if(category) {
        url += `/category/${category}`
      }

      try {
        const result = await fetch(url)
        const products = await result.json()
        setProducts(products.products)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    getProducts()
  }, [searchProduct, category])

  const handleSearchProduct = (event) => {
    setSearchProduct(event.target.value)
  }

  const handleCategorySelected = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className="App">
      <h1>Product Details</h1>
      <SearchBar
        searchProduct={searchProduct}
        handleSearchProduct={handleSearchProduct}
      />

      <Filter
        categories={categories}
        category={category}
        handleCategorySelected={handleCategorySelected}
      />

      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className='product-list'>
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
