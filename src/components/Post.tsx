import { useEffect, useState } from 'react';

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
    <div className="p-4 text-white whitespace-pre-wrap">
      {content}
    </div>
  );
}
