import '../assets/components/SearchBar.css'

const SearchBar = ({ searchProduct, handleSearchProduct}) => {
	return(
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search Product"
				value={searchProduct}
				onChange={handleSearchProduct}
			/>
		</div>
	)
}

export default SearchBar
