import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {
  const[title, setTitle] = useState("");
  const[date, setDate] = useState(null);
  const[explanation, setExplanation] = useState("");
  const[img, setImg] = useState("");
  const url = "https://api.nasa.gov/planetary/apod?api_key=zMfGEKitzRKj4vMhLnTsTF6HfcJEA5CZOepMQbAI";
  
  const getResult = async() => {
    const result = await axios.get(url);
    console.log(result);
    setTitle(result.data.title);
    setDate(result.data.date);
    setExplanation(result.data.explanation);
    setImg(result.data.url);
  }

  useEffect(() => {
    getResult();
  });
  
  return (
    <div className="container">
      <div className="date">
        <h1>{date}</h1>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="explanation">
        <h1>{explanation}</h1>
      </div>
      <div className="image">
        <img src={img} width="1000px" height="1000px" />
      </div>
      <a href={img}>Link to Image/Video</a>
    </div>
  );
}
export default Home;
