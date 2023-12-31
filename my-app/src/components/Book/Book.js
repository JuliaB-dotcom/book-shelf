import { Link } from 'react-router-dom';
import '../BookList/BookList.css'

const Book = () => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src='../images/tove.jpg' alt="cover" />
      </div>
      <div className='book-item-info text-center'>
         <p>Lorem Ipsum</p>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>title</span>
          </div>
        

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>author</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>editions</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>publish year</span>
        </div>
      </div>
    </div>
  )
}

export default Book