import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const API = "https://api.unsplash.com/search/photos";
const API_KEY = process.env.REACT_APP_KEY;
const IMAGE_PER_PAGE = 12;

const TextInput = () => {
  const [data, setData] = useState([]);
  const searchInput = useRef();

  const fetchImages = async () => {
    try {
      const result = await axios.get(
        `${API}?query=${searchInput.current}&page=1&per_page=${IMAGE_PER_PAGE}&client_id=${API_KEY}`
      );
      console.log(result.data.results); //print result of fetch in the console
      setData(result.data.results);
    } catch (error) {
      console.log(error); //prints error in the console
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
  };

  return (
    <div id="formId">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something to search..."
          id="searchInput"
          ref={searchInput}
        />
        {console.log(searchInput)}
        <Button />
      </form>
      <div id="card-container"> 
        {data.map((item, index) => (
          <Card key={index} title={item.alt_description} link={item.urls.full} />
        ))}
      </div>
    </div>
  );
};

export default TextInput;
