import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Footer from './Footer';
import 'rc-banner-anim/assets/index.css';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Badge, Descriptions, Input } from 'antd';
import { Radio } from 'antd3';

export default function Home() {
  const items = [
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '2',
      label: '单位名称',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '3',
      label: '单位曾用名',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '4',
      label: '行业类别',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '5',
      label: '行业性质',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Input bordered={false}></Input>,
      span: 3,
    },
    {
      key: '7',
      label: '行业代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '8',
      label: '经营范围',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '9',
      label: '工商登记有效期限（年）',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '10',
      label: '组织机构代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '11',
      label: '单位所在地区划及详细地址',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '12',
      label: '区划代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '13',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>是否与单位所在地区划及详细地址一致：</span>
          <Radio>
            是
          </Radio>
          <Radio>
            否
          </Radio>
          <Input bordered={false}></Input>
        </>
      ),
      span: 3
    },
    {
      key: '14',
      label: '单位规模',
      children: (
        <>
          <Radio>1.大型</Radio>
          <Radio>2.中型</Radio>
          <Radio>3.小型</Radio>
          <Radio>4.微型</Radio>
        </>
      ),
      span: 3
    },
  ];

  return (
    <>
      <Header key="header" className='show-shadow' />
      <div className="banner page-wrapper" >
        <div className="page" style={{maxWidth: 2000}}>
          <div className="logo" />
          <div style={{height: 2000, padding: 50}} class="banner-anim">
            <Descriptions title="单位基本信息" bordered items={items} />
          </div>
        </div>
      </div>
      <Footer key="footer" />
      <DocumentTitle title="统一报表报送系统" key="title" />
    </>
  );
}