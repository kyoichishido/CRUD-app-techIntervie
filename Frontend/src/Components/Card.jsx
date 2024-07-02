import React from 'react'

function Card({key, items}) {
  // console.log(book.price);
  return (
    <div className='w-64 min-h-min bg-orange-200 rounded-lg p-4'>
      {/* <h5>{book}</h5> */}
      <h2 className='font-semibold mb-9 text-xl'>{items.name}</h2>
      <h2 className='text-sm font-semibold'> {items.price}</h2>
    </div>
  )
}

export default Card
