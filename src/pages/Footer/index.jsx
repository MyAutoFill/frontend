import React from 'react';
import { Row, Col } from 'antd';

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      <div className="footer-bottom">
        <div className="page">
          <Row>
            {/* <Col md={4} xs={24} style={{ textAlign: 'left' }} className="mobile-hide">
              <a
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'left' }}
              >
              联系我们
              </a>
            </Col> */}
            <Col md={20} xs={24}>
              {/* <span
                className="mobile-hide"
                style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11 }}
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                >
                《隐私权政策》
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                >
                《客户权益保障承诺书》
                </a>
              </span> */}
              <span style={{ marginRight: 12 }}>ICP证:鲁ICP备05001812号-1</span>
              {/* <span style={{ marginRight: 12 }}>Copyright © 2017 蚂蚁金融服务集团</span> */}
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}
