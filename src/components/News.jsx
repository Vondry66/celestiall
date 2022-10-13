import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getNews } from "../utils/api";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";


const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((data) => {
      console.log(data);
      setNews(data);
    });
  }, []);
  return (
    <>
      <Card className="bg mt-5" >
        <ul>
          {news.map((eachNews) => {
            return (
              <li key={eachNews.id}>

                <Card.Title>{eachNews.title}</Card.Title>
                <Card.Img className="p-8"
                  style={{ width: '18rem', height: "100%" }}
                  variant="top"
                  src={eachNews.imageUrl}

                />
                <p>
                  {moment(eachNews.publishedAt).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </p>

                <Card.Text> Summary: {eachNews.summary}</Card.Text>
                <Link to={`/news/${eachNews.id}`}><Button>See Details</Button></Link>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
};



export default News







