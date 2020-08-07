import React from 'react';

// propsの型定義
type Props = {
  name: string;
};

// ジェネリックでpropsの型定義を指定
const HelloMessage: React.FC<Props> = (props) => <div>Hello {props.name}</div>;

export default function Index() {
  return (
    <div>
      {/* HTMLの属性のような形でコンポーネントに値を渡せる */}
      <HelloMessage name="redimpulz" />
    </div>
  );
}
