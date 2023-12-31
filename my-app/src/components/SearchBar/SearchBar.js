import { useState } from "react";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import BookList from "../BookList/BookList";


import './SearchBar.css';

const SearchBar= () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const searchBook = () => {
    console.log('searching')
    axios.get('https://openlibrary.org/search.json?q=' + search + '&mode=everything') 
      .then((res) => {
        console.log(res.data.docs)
        setData(res.data.docs)
      }).catch((err) => {
        //console.log(err)
        if (err.res) {
          //valid requets but no response
          console.error('Request Error', err.res)
          setError('Error: No response from server')
        } else {
          //request setup error
          console.error('Error ', err.message)
          setError('Error: ' + err.message)
        }
        
      })
    
  }
  
  return (
    <> 
      <div className = 'search-bar'>
       
  
        <div className="search">
            <input type ="text" placeholder = "Search"
              value = {search} onChange = {handleSearch}
               />
            <button className ='flex flex-sc' onClick={searchBook} >
              <FaSearch size = {32} className="searchBtn" />
          </button>
          {error && <div className="error-message"> {error}</div>}
            </div>
       
        <div className="container">
          {
            <BookList book={bookData} />
          }
          </div>
      </div>

      
    </>
  )
}
export default SearchBar;
