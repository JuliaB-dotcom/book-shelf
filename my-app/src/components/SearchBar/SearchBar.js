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
    axios.get('https://openlibrary.org/search.' + search + '&mode=everything') //json?q=
      .then((res) => {
        console.log(res.data.docs)
        setData(res.data.docs)
      }).catch((err) => {
        //console.log(err)
        if (err.res) {
          console.error('Response Error', err.res.data)
          setError('Error: ' + err.res.data.message)
        } else if (err.res) {
          console.error('Request Error', err.res)
          setError('Error: No response received from server')
        } else {
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
