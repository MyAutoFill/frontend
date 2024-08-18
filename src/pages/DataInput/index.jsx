import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import 'rc-banner-anim/assets/index.css';
import { Tabs } from 'antd';
import Fill from './Fill';
import SelectFormPage from '../DataFillOut/SelectFormPage'

export default function DataInput() {

  const tabs = [
    {
      key: '1',
      label: '信息填写',
      children: <Fill />,
    },
    {
      key: '2',
      label: '填写预览',
      children: <Fill />,
    },
    {
      key: '3',
      label: '数据申报',
      children: <SelectFormPage />,
    },
  ];
  return (
    <>
      <div style={{height: '100vh'}}>
        <Header key="header" className='show-shadow' />
        <div className="banner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 1200}}>
            <div className="logo" />
            <div style={{padding: 50, height: 1000}} class="banner-anim">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size='large'
                items={tabs}
              />
            </div>
          </div>
        </div>
        <Footer key="footer" />
        <DocumentTitle title="统一报表报送系统" key="title" />
      </div>
    </>
  );
}