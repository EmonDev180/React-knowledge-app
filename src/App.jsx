
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Booksmarks/Booksmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([])

  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{

      const newBookmarks = [...bookmarks,blog]

      setBookmarks(newBookmarks)


  } 

  const handleMarkAsRed = time =>{

      const newReadingTime = readingTime + time ;

      setReadingTime(newReadingTime);
  }
 

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRed={handleMarkAsRed}></Blogs>

      <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>

      </div>
    

    </>
  )
}

export default App
