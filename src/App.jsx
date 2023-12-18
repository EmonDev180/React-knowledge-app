
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Booksmarks/Booksmarks'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
      <Header></Header>

      <div className='md:flex'>
      <Blogs></Blogs>

      <Booksmarks></Booksmarks>

      </div>
    

    </>
  )
}

export default App
