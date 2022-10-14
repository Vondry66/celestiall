import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { getNews } from "../utils/api";
import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";


const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
    });
  }, []);
  return (
    <>
      <Container>

        <Card className="bg" >
          {news.map((eachNews) => {
            return (
              <ul className="list-unstyled p-3" key={eachNews.id}>

                <hr />
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
                <a href={`${eachNews.url}`}>
                  <Button>Read News</Button></a>

              </ul>
            );

          })}
        </Card>;


      </Container>
    </>
  );
};
export default News







