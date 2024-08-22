import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import 'rc-banner-anim/assets/index.css';
import { Tabs, Divider, Steps } from 'antd';
import Fill from './Fill';
import SelectFormPage from '../DataFillOut/SelectFormPage'
import { OrderedListOutlined, SafetyOutlined, FileSyncOutlined } from '@ant-design/icons';


export default function DataInput() {

  const { TabPane } = Tabs;
  const [selectedKey, setSelectedKey] = useState('1');
  const [current, setCurrent] = useState(0);
  const [currentKey, setCurrentKey] = useState(1);

  const stepOnChange = (value) => {
    setCurrent(value);
    setCurrentKey(value + 1)
    console.log(currentKey)
  };

  const tabsOnChange = (key) => {
    console.log(key)
    setCurrent(key - 1);
    setCurrentKey(key)
  };

  return (
    <>
      <div style={{height: '100vh'}}>
        <Header key="header" className='show-shadow' />
        <div className="banner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 1250}}>
            <div className="logo" />
            <div style={{padding: 50, height: 1050}} class="banner-anim">
              <Steps
                current={current}
                onChange={stepOnChange}
                style={{width: 1700}}
                items={[
                  {
                    title: '信息填写',
                    description: '第一步：填写对应信息',
                  },
                  {
                    title: '填报预览',
                    description: '第二步：检查预填结果',
                  },
                  {
                    title: 'Step 3',
                    description: '第三步：登录平台填报',
                  },
                ]}
              />
              <Divider />
              <Tabs defaultActiveKey='1' activeKey={currentKey.toString()} animated={true} type='card' size='large' onChange={tabsOnChange}>
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