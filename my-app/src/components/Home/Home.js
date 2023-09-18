import SearchBar from '../SearchBar/SearchBar'
import './Home.css';
//import BookList from '../BookList/BookList'

const Home = () => {
  return (
    <div >
      <div className='greeting'>
        <h2 className='textStart'>Welcome to the bookshelf!</h2>
        <h2 className='textStart'>Search for a book</h2>
        <h2 className='textEnd'>and you will find...</h2>
      </div>
        <div className = 'home-content flex flex-c text-center text-white'>
       <SearchBar />
      
        <div className='.book-container'>
         
        </div>
      </div>
      
    </div>
  );
}

export default Home;
