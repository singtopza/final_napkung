import React from 'react'

const Book = ({id,search}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          {id
          .filter(id => id.title.includes(search))
          // .filter(id.isbn.includes(search))
          .slice(0,20)
          .map((datail) => (
            <>
            <div className="col-3 mb-3">
              <div className="card">
              <img src={datail.thumbnailUrl} className="card-img-top editimg text-center" alt={datail.thumbnailUrl} />
                <div className="card-body py-2">
                  <h6 className="card-title">{datail.title}</h6>
                  <span>By {datail.authors}</span>
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Book;
