import React from 'react';
import { Row, Col } from 'antd';
import { header } from './data';

export default function Header(props) {
  const menuChild = header.map((item, i) => {
    return (
      <Col key={i.toString()} span={6}>
        <span className="nav-title">{item.title}</span>
      </Col>
    );
  });
  return (
    <header {...props}>
      <Row className="nav">
        {menuChild}
      </Row>
    </header>
  );
}
