import React, {useState} from 'react'
import InputSearch from 'src/components/input/input'
import css from './search.module.scss'

function Search() {

  // const SearchProducts = () => {
  //   const [searchTerm, setSearchTerm] = useState(''); // State lưu từ khoá tìm kiếm
  //   const [searchResults, setSearchResults] = useState([]); // State lưu kết quả tìm kiếm
  
  //   // Hàm gọi API để tìm kiếm sản phẩm
  //   const searchProducts = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/search?query=${searchTerm}`);
  //       setSearchResults(response.data); 
  //     } catch (error) {
  //       console.error('Error searching products:', error);
  //     }
  //   };
  
  //   // Xử lý sự kiện thay đổi ô tìm kiếm
  //   const handleSearchChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };
  
  //   // Xử lý sự kiện nhấn Enter hoặc nút tìm kiếm
  //   const handleSearch = () => {
  //     searchProducts();
  //   };
  // }

  return (
    <div className={css['input-search']}>
      <InputSearch/>
    </div>
  )
}

export default Search
