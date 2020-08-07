import React from 'react';

// classコンポーネント
class HelloMessageClass extends React.Component {
  render() {
    return <div>Hello redimpulz</div>;
  }
}

// 関数コンポーネント
const HelloMessageFunction: React.FC = () => <div>Hello redimpulz</div>;

export default function Index() {
  return (
    <div>
      <HelloMessageClass />
      <HelloMessageFunction />
    </div>
  );
}
