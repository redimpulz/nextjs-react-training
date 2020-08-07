import React from 'react';
import Link from 'next/link';

const HelloCounter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  // 副作用フック（マウント時）
  React.useEffect(() => {
    alert('mounted');
    // 副作用フック（アンマウント時）
    return () => alert('cleanup');
  }, []);

  // 副作用フック（依存の変更時）
  React.useEffect(() => {
    alert('counted');
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>
        <Link href="/">
          <a>back</a>
        </Link>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloCounter />
    </div>
  );
}
