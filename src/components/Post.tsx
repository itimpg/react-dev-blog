import './Post.css'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

type PostProps = {
  path: string;
};

export default function Post({ path }: PostProps) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [path]);

  return (
    <div className="p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
