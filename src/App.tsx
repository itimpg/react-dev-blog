import './App.css'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from 'react';

function App() {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  useEffect(() => {
    fetch('/react-dev-blog/blogs/index.json')
      .then((res) => res.json())
      .then((fileList: string[]) => {
        setFiles(fileList);
        if (fileList.length > 0) {
          setSelectedPath(`/react-dev-blog/blogs/${fileList[0]}`);
        }
      });
  }, []);

  return (
    <div className='w-full flex'>
      <Sidebar
        files={files}
        onSelect={(filename) => setSelectedPath(`/react-dev-blog/blogs/${filename}`)}
      />

      <div className="mx-auto bg-sky-500 w-max m-x-auto">
        {selectedPath && <Post path={selectedPath} />}
      </div>
    </div>
  );
}

export default App
