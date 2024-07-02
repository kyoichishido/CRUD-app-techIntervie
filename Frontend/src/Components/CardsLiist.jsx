import React from 'react'
import Card from './Card'

function CardsLiist({books}) {

  return (
    <div className='flex gap-4'>
      {books.map(book => (
          <Card key={book.id} items={book} />
        ))}
    </div>
  )
}

export default CardsLiist
