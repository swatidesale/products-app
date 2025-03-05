import '../assets/components/Filter.css'

const Filter = ({ categories, category, handleCategorySelected }) => {
	return(
		<div className="category-filter">
			<label>Filter by Category:</label>
			<select
				id="category"
				value={category}
				onChange={handleCategorySelected}
			>
				{
					categories.map((category, index) => (
						<option key={index}>{category}</option>
					))
				}
			</select>
		</div>
	)
}

export default Filter