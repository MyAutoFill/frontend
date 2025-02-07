import 'rc-banner-anim/assets/index.css';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import { Button } from 'antd';
import { banner } from './data';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };
  render() {
    const bannerChildren = banner.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag === 'button' ? 'div' : child.tag || 'p';
        const childrenToRender = child.tag === 'button' ?
          <><Button><a href={child.children[0].link}>{child.children[0].name}</a></Button><Button type='text' style={{marginLeft: 20}}><a href={child.children[1].link}>{child.children[1].name}</a></Button></> :
          child.children;
        return React.createElement(tag, {
          key: ii.toString(),
          className: child.className,
          style: child.style || {},
        }, childrenToRender);
      });
      return (
        <Element key={i.toString()}>
          <BgElement
            key="bg"
            className="banner-bg"
            style={{ backgroundImage: `url(${item.img})` }}
          />
          <QueueAnim
            key="text"
            className={item.className}
            ease={['easeOutCubic', 'easeInQuad']}
            type={item.queueAnim || 'bottom'}
          >
            {children}
          </QueueAnim>
        </Element >);
    });
    return (
      <div className="banner page-wrapper" >
        <div className="page">
          <div style={{width: '1940px', height: '80px', margin: '86px auto 40px', display: 'flex'}}>
            <div className='curlogo'/>
            <span style={{color: 'white', marginLeft: '20px', fontSize: '28px', alignSelf: 'center'}}>威海市企业统一报表服务平台</span>
            <a className='curbanner' target='_blank' href='https://sd.gsxt.gov.cn'/>
          </div>
          <BannerAnim type="across" duration={550} ease="easeInOutQuint">
            {bannerChildren}
          </BannerAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
