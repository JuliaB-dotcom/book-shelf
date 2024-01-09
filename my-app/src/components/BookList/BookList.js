
import './BookList.css'
import BookDetails from "../BookDetails/BookDetails";
import noCover from '../../images/no_cover.jpg';

import { useState } from 'react';


const BookList = ({ book = [] }) => {
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

              <div className="card" data-testid='list-test1' onClick={() => { setShow(true); setItem(doc) }}>
                <img src={cover} alt="" />
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
