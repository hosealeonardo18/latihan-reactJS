import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Button from './components/Button';
import List from './components/List';

function App() {
  const [data, setData] = useState("");
  const [datas, setDatas] = useState([]);

  const handleSubmit = () => {
    setDatas([
      ...datas, data
    ])
    setData("")
  }

  return (
    <div className="App">
      <input type="text" placeholder="Input data" value={data} onChange={(e) => setData(e.target.value)} />
      <Button handleClick={handleSubmit} varian="blue">
        Add
      </Button>
      <br />

      {datas.length > 0 ? <List dataList={datas} /> : <h3>Data Kosong</h3>}


    </div>
  );
}

export default App;
