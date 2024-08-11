import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Footer from './Footer';
import 'rc-banner-anim/assets/index.css';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Badge, Descriptions, Input, Checkbox, DatePicker, Space, Radio } from 'antd';


export default function CompanyInsuranceInfo() {

    const items = [
      {
        key: '1',
        label: '单位管理码/单位编号',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '2',
        label: '基金来源',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '4',
        label: '参保电子邮箱',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '3',
        label: '单位专管员姓名',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '5',
        label: '单位专管员所在部门',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '7',
        label: '单位专管员电话',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '10',
        label: '单位专管员手机号码',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '单位主要经营地',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '8',
        label: '行业风险类别',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '9',
        label: '经济行业类别',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '11',
        label: '银行账户',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '12',
        label: '银行类别',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '13',
        label: '银行户名',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '统筹层次',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '7',
        label: '单位管理类型',
        children: <Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      }
    ];
  
    return (
      <>
        <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
          <Descriptions title="企业参保信息" bordered items={items} />
        </div>
      </>
    );
  }