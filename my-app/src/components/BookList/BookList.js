
//import Loading from "../Loader/Loader";
//import coverImg from "../../images/cover_not_found.jpg";
import './BookList.css'
import BookDetails from "../BookDetails/BookDetails";
import noCover from '../../images/no_cover.jpg';
//import Img from './tove.jpg'
//https://covers.openlibrary.org/b/id/240727-S.jpg

import { useState } from 'react';


const BookList = ({ book =[]}) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  
  console.log(book)
  return (
    <>
      {
        book.map((doc) => {
          
          let cover = 'https://covers.openlibrary.org/b/id/' + doc.cover_i + '-M.jpg';
      
          if (!cover) {
            cover = noCover;
            console.log(cover);
          }
            return (
              <>
                
                <div className="card" data-testid= 'list-test1' onClick={() => { setShow(true); setItem(doc) }}>
                  <img src={cover} alt="No image found" />
                  <div className="bottom">
                      <h3 className="title">{doc.title} </h3>
                      <h4 className="author">by {doc.author_name}</h4>
                    
                    
                  </div>
                </div>
                  <BookDetails show={show} doc={bookItem} onClose={() => setShow(false)} />
               
              </>
            )
          

        
        })
      }
    </>
  )
}
export default BookList;
/*const BookList = ({ book }) => {
  console.log(book)

  return (
    <>
      {
        book.map((item) => {
        
          return (
            <div className="card">
              <img src={Img} alt="" />
              <div className="bottom">
                <h3 className="title"> React </h3>
                <p className="amount">&#8377;27899</p>
              </div>
            </div>
          )
        })
         

        }
      

    </>
  )
}

export default BookList*/