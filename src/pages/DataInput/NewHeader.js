import React from 'react';
import { Row, Col, Icon, Menu, Button, Popover } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';

class NewHeader extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a>首页</a>
        </Menu.Item>
        <Menu.Item key="docs">
          <a><span>文档</span></a>
        </Menu.Item>
        <Menu.Item key="components">
          <a>组件</a>
        </Menu.Item>
        {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                预览
              </a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    return (
      <div id="header" className="header">
        <Row>
          <Col>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>ANT DESIGN PRO</span>
            </div>
          </Col>
          <Col>
            <div className="header-meta">
                <div id="menu">{menu}</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewHeader;