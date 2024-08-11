import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';

import Tetris from '../technology-comp/Tetris';
import Column from '../technology-comp/Column';
import Coordinate from '../technology-comp/Coordinate';
import Building from '../technology-comp/Building';


const pageData = [
  {
    title: '完整的系统架构',
    content: '使用企业级应用的 UI 设计语言与技术在完整的前后端分离框架下实现前后端、服务器和数据库的灵活调度。',
    links: [
      <a key="0" href="https://ant.design" target="_blank">Web&nbsp;&nbsp;</a>,
      <a key="1" href="https://mobile.ant.design" target="_blank">Mobile&nbsp;&nbsp;</a>,
      <a key="2" href="https://pro.ant.design" target="_blank">Pro&nbsp;&nbsp;</a>,
    ],
    full: true,
    Bg: Tetris,
  },
  {
    title: '纯国产化安全保障',
    content: '使用100%纯国产化数据加密方案，结合业界领先的国产化数据底座，保证信息安全和数据通路安全可靠。',
    links: (<a href="https://antv.alipay.com" target="_blank">查看详情&nbsp;&nbsp;</a>),
    full: true,
    Bg: Column,
  },
  {
    title: '智能云化服务',
    content: '在云计算平台部署数据中台服务器，利用服务云化实现端到端便利交互，摆脱重型应用负担，实现系统全面轻量化、智能化、云化。',
    links: (<a>敬请期待</a>),
    full: true,
    Bg: Coordinate,
  },
  {
    title: '定制化企业级设计',
    content: '底层运用Node.js & Koa 等企业级框架和应用实现系统设计定制化，针对多场景提供多种解决方案，满足应用实际需求。',
    links: (<a href="https://eggjs.org" target="_blank">查看详情&nbsp;&nbsp;</a>),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    isMobile: false,
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  
  render() {
    const isMobile = false;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: true,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {/* {item.links} */}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>便捷的操作流程</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
