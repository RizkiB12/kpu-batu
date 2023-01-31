import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";

const NewsCard = () => {
  return (
    <Row justify="center" style={{ padding: "50px 0 50px 0" }}>
      <Col xs={24}>
        <Row justify="center">
          <Col className="gutter-row" span={4}>
          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Col>
          <Col className="gutter-row" span={4}>
          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Col>
          <Col className="gutter-row" span={4}>
          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Col>
          <Col className="gutter-row" span={4}>
          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsCard;
