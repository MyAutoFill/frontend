import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import 'rc-banner-anim/assets/index.css';
import { Tabs } from 'antd';
import Fill from './Fill';
import SelectFormPage from '../DataFillOut/SelectFormPage'
import { OrderedListOutlined, SafetyOutlined, FileSyncOutlined } from '@ant-design/icons';


export default function DataInput() {

  const { TabPane } = Tabs;

  return (
    <>
      <div style={{height: '100vh'}}>
        <Header key="header" className='show-shadow' />
        <div className="banner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 1200}}>
            <div className="logo" />
            <div style={{padding: 50, height: 1000}} class="banner-anim">
              <Tabs defaultActiveKey="1" type='card' size='large'>
                <TabPane
                  tab={<span><OrderedListOutlined />信息填写</span>}
                  key="1"
                  size="large"
                >
                  <Fill />
                </TabPane>
                <TabPane
                  tab={<span><SafetyOutlined />填写预览</span>}
                  key="2"
                  size="large"
                >
                  <Fill />
                </TabPane>
                <TabPane
                  tab={<span><FileSyncOutlined />数据申报</span>}
                  key="3"
                  size="large"
                >
                  <SelectFormPage />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer key="footer" />
        <DocumentTitle title="统一报表报送系统" key="title" />
      </div>
    </>
  );
}