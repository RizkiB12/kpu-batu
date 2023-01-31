import React from "react";
import { Col, Row } from "antd";

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const NewsCard = () => {
  return (
    <Row justify="center" style={{ padding: "50px 0 50px 0" }}>
      <Col xs={24}>
        <Row justify="space-around">
          <Col className="gutter-row" span={4}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsCard;
