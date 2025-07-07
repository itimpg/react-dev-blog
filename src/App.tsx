import './App.css'
import Post from './components/Post'

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Post path="blogs/first-post.md" />
    </>
  )
}

export default App
