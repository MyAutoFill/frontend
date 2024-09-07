import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import 'rc-banner-anim/assets/index.css';
import { Tabs, Divider, Steps } from 'antd';
import Fill from './Fill';
import UploadSyncPage from './UploadSync';
import PreviewPage from './Preview';
import SelectFormPage from '../DataFillOut/SelectFormPage'
import { useSearchParams } from "react-router-dom";
import { OrderedListOutlined, SafetyOutlined, FileSyncOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';


export default function DataInput() {

  const { TabPane } = Tabs;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('tab', '1'));
  const [currentKey, setCurrentKey] = useState(
    parseInt(
      searchParams.get('tab') == null ? '1' : searchParams.get('tab')
    )
  );

  useEffect(() => {
    setSearchParams({'tab': currentKey.toString()})
  }, [currentKey])

  const stepOnChange = (value) => {
    setCurrentKey(value + 1)
  };

  const tabsOnChange = (key) => {
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
                current={currentKey - 1}
                onChange={stepOnChange}
                style={{width: 1700}}
                items={[
                  {
                    title: '信息同步',
                    description: '第一步：数据上传同步',
                  },
                  {
                    title: '信息填写',
                    description: '第二步：填写对应信息',
                  },
                  {
                    title: '信息填报',
                    description: '第三步：检查预填结果',
                  },
                  {
                    title: '数据填报',
                    description: '第四步：登录平台填报',
                  },
                ]}
              />
              <Divider />
              <Tabs destroyInactiveTabPane={true} defaultActiveKey='1' activeKey={currentKey.toString()} animated={true} type='card' size='large' onChange={tabsOnChange}>
                <TabPane
                  tab={<span><CloudUploadOutlined />上传同步</span>}
                  key="1"
                  size="large"
                >
                  <UploadSyncPage />
                </TabPane>
                <TabPane
                  tab={<span><OrderedListOutlined />信息填写</span>}
                  key="2"
                  size="large"
                >
                  <Fill />
                </TabPane>
                <TabPane
                  tab={<span><SafetyOutlined />填写预览</span>}
                  key="3"
                  size="large"
                >
                  <PreviewPage />
                </TabPane>
                <TabPane
                  tab={<span><FileSyncOutlined />数据申报</span>}
                  key="4"
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