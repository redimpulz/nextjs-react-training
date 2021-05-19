import React from 'react';

// {
//   "message": [
//       "https://images.dog.ceo/breeds/lhasa/n02098413_16009.jpg",
//       "https://images.dog.ceo/breeds/appenzeller/n02107908_4092.jpg",
//       "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
//   ],
//   "status": "success"
// }

type Data = {
  message: string[];
  status: string;
};

type Props = {
  defaultImageNums: number;
};

const HelloFetchImages: React.FC<Props> = ({ defaultImageNums }) => {
  const [imageNums, setImageNums] = React.useState<number | ''>(
    defaultImageNums
  );
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  // データ取得とステートの保持
  const fetchData = async () => {
    if (!imageNums || !(imageNums >= 1 && imageNums <= 50)) {
      alert('please select 1...50 number');
      return;
    }
    setLoading(true);
    try {
      const url = `https://dog.ceo/api/breeds/image/random/${imageNums}`;
      const res = await fetch(url);
      const data: Data = await res.json();
      setImageUrls(data.message);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setImageNums(parseInt(e.target.value));
    } else {
      setImageNums('');
    }
  };

  // 副作用フック（マウント時）
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading
        ? 'loading....'
        : imageUrls.map((x) => (
            <img key={x} src={x} style={{ width: 200, height: 200 }} />
          ))}
      <div>
        <input
          type="number"
          value={imageNums}
          onChange={handleChange}
          max={50}
          min={1}
        />
        <button onClick={fetchData}>fetch</button>
        <button onClick={() => setImageUrls([])}>clear</button>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloFetchImages defaultImageNums={20} />
    </div>
  );
}
