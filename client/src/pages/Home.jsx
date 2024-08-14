import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../component/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`http://localhost:5000/api/videos/${type}`).then(()=>{
        console.log(response,'this is response')
      })
      setVideos(response.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} type={type} video ={video}/>
      ))}
    </Container>
  );
};

export default Home;
