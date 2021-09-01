import React, {useEffect, useState} from "react";
import "./style.css";
import axios from 'axios';
import CharGrid from './CharGrid';
import Search from './Search'

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQurey] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setData(result.data)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Search getQuery={(q) => setQurey(q)}/>
      <CharGrid items = {data}/>
    </div>
  );
}
