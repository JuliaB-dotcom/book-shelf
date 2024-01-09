
import './BookDetails.css';


const BookDetails = ({ show, doc, onClose }) => {


  if (!show) {
    return null;
  }
  let description = 'https://openlibrary.org/works' + doc.cover_edition_key + '.json?description='
  let cover = 'https://covers.openlibrary.org/b/id/' + doc.cover_i + '-L.jpg';

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose} size={32}> X </button>
          <div className="inner-box">
            <img src={cover} alt="" />
            <div className="info">
              <h1>{doc.title}</h1>
              <h3>{doc.author_name}</h3>
              <h4>{doc.publisher[0]}<span className='pubYear'>{doc.publish_year[0]}</span></h4>

            </div>
          </div>
          <h4 className="description">{description}</h4>
        </div>
      </div>
    </>
  )
}
export default BookDetails;