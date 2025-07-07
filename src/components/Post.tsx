import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

export default function Post({ path }: { path: string }) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(path)
      .then(res => res.text())
      .then(setContent)
  }, [path])

  return <ReactMarkdown>{content}</ReactMarkdown>
}
