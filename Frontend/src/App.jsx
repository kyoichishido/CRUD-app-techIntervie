import { useState, useEffect } from 'react'
import Card from './Components/Card'
import CreateBook from './Components/CreateBook'
import CardsLiist from './Components/CardsLiist'


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/books');
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error in fetching', error);
        setError(error);
        setLoading(false);
      } finally {
        setUpdateFlag(false);
      }
    };

    fetchBooks();
  }, [updateFlag]);



  if (loading) return <p>..Loading</p>
  if (error) return <p>..error</p>

  console.log(books);

  return (
    <div className='bg-zinc-800 w-full gap-5 h-screen p-9 grid grid-cols-12'>
      <div className='col-span-8'>
        {/* {books.map(book => (
          <Card key={book.id} items={book} />
        ))} */}
        <CardsLiist books={books} />
      </div>
    
      <div className='col-span-4'>
        <CreateBook setUpdateFlag={setUpdateFlag} />
      </div>

    </div>
  )
}

export default App
