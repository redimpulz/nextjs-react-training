import React from 'react';

// {
//   "message": "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
//   "status": "success"
// }

type Data = {
  message: string;
  status: string;
};

const HelloFetchImage: React.FC = () => {
  const [imageUrl, setImageUrl] = React.useState('');

  // データ取得とステートの保持
  const fetchData = async () => {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const res = await fetch(url);
      const data: Data = await res.json();
      setImageUrl(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // 副作用フック（マウント時）
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} />}
      <div>
        <button onClick={fetchData}>fetch</button>
        <button onClick={() => setImageUrl('')}>clear</button>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloFetchImage />
    </div>
  );
}
