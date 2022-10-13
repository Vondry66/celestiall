import React from "react";
import { useEffect, useState } from "react";
import { getIndividualNews } from "../utils/api";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const IndividualNews = () => {
    const { id } = useParams();
    const [eachNews, setEachNews] = useState({});
    useEffect(() => {
        getIndividualNews(id).then((news) => {
            console.log(news);
            setEachNews(news);
        });

    }, [id]);
    return (
        <Card.Body>
            <Card.Title>{eachNews.title}</Card.Title>
            <Card.Text>
                {eachNews.summary
                }
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
    );
};
export default IndividualNews;