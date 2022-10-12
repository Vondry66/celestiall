import { useState } from "react";
import { storage } from "../firebase-config";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import moment  from "moment";
import Image from "react-bootstrap/Image";
import { getNews } from "../utils/api";
import Card from "react-bootstrap/Card";


const News = () => {
const [news, setNews] = useState([]);
useEffect(() => {
    getNews().then((data)=>{
        setNews(data)
      })
  }, []);
  return (
    <>
      <Card className="bg">
              <ul>
                {news.map((eachNews) => {
                  return (
                      <li key={eachNews.id}>
                        <Link to={eachNews.id}>
                          <Card.Title>{eachNews.title}</Card.Title>
                        </Link>
                        <Image
                          variant="top"
                          src={eachNews.imageUrl}
                          rounded
                          width={400}
                          height={300}
                        />
                        <p>
                          {moment(eachNews.publishedAt).format(
                            "dddd, MMMM Do YYYY"
                          )}
                        </p>

                        <Card.Text> Summary: {eachNews.summary}</Card.Text>
                      </li>
                  );
                })}
              </ul>
      </Card>
    </>
  );
};



export default News







