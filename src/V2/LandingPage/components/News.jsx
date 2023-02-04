import { Col, Grid, Image, Row, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageJumbotron from "../../../assets/images/jumbotron.jpg";
const { Title } = Typography;

const News = () => {
  const { xs, sm, md, lg } = Grid.useBreakpoint();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}news?limit=4&page=1&order=updatedAt&sort=desc`
        )
        .then((res) => {
          setNews(res.data);
        });
    };
    fetchNews();
  }, []);

  return (
    <>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <Col xs={24} lg={18}>
          {news?.data?.map((element, idx) => {
            return (
              <div key={idx}>
                <Row>
                  <Col
                    order={lg?idx%2===0 ? 0 : 2 : 0}
                    md={24}
                    lg={12}
                    style={{ textAlign: "center", padding: "2vh 5vh 2vh 5vh" }}
                  >
                    <Row
                      span={24}
                      style={{ height: "350px", overflow: "hidden" }}
                    >
                      <Image src={ImageJumbotron} preview={false} />
                    </Row>
                  </Col>
                  <Col
                    md={24}
                    lg={12}
                    style={{ textAlign: "center", padding: "2vh 5vh 2vh 5vh" }}
                  >
                    <Title
                      level={3}
                      style={{
                        textAlign: "start",
                        marginTop: `${xs || sm || md || lg ? "10px" : "5vh"}`,
                      }}
                    >
                     {element.title}
                    </Title>
                    <Title level={5} style={{ textAlign: "start" }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Amet, consequuntur?
                    </Title>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default News;
