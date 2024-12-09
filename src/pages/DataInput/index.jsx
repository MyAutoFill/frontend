import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import NewHeader from './NewHeader';
import Footer from '../Footer';
import 'rc-banner-anim/assets/index.css';
import { Tabs, Divider, Steps, Menu, ConfigProvider } from 'antd';
import Fill from './Fill';
import UploadSyncPage from './UploadSync';
import PreviewPage from './Preview';
import SelectFormPage from '../DataFillOut/SelectFormPage'
import { useSearchParams } from "react-router-dom";
import { OrderedListOutlined, SafetyOutlined, FileSyncOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { history } from '@umijs/max';


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
    if (currentKey.toString() === '2') {
      setSearchParams({'tab': currentKey.toString(), 'table': searchParams.get('table')})
    }
  }, [currentKey])

  const stepOnChange = (value) => {
    setCurrentKey(value + 1)
  };

  const tabsOnChange = (key) => {
    setCurrentKey(key)
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    history.push('/auto_fill');
  }

  return (
    <>
      <div style={{height: '100%'}}>
        <div className="mybanner page-wrapper" style={{overflow: 'auto', width: '100%', overflowY: 'auto'}}>
          <div className="page" style={{maxWidth: 2000, height: 1250}}>
            <div style={{display: 'flex', margin: '70px auto 40px'}}>
              <div className="logo" />
              <div>
                <ConfigProvider
                  theme={{
                    components: {
                      Menu: {
                        horizontalItemSelectedColor: 'rgba(255, 255, 255, 0.6)',
                      },
                    },
                  }}
                >
                  <Menu mode="horizontal" style={{background: 'rgba(0, 0, 0, 0)', border: 0, lineHeight: 2.8}}>
                    <Menu.Item key="home">
                      <a href='/auto_fill/' style={{fontSize: 25, color: 'white', fontWeight: 400}}>首页</a>
                    </Menu.Item>
                    <Menu.Item key="input">
                      <a href='/auto_fill/input' style={{fontSize: 25, color: 'white', fontWeight: 400}}>报表报送</a>
                    </Menu.Item>
                    <Menu.Item key="info">
                      <a href='/auto_fill/company_info' style={{fontSize: 25, color: 'white', fontWeight: 400}}>企业基本信息</a>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <a onClick={() => {logout()}} style={{fontSize: 25, color: 'white', fontWeight: 400}}>退出登录</a>
                    </Menu.Item>
                  </Menu>
                </ConfigProvider>
              </div>
            </div>
            <div style={{padding: 50, height: 1050}} class="mybanner-anim">
              <Steps
                current={currentKey - 1}
                onChange={stepOnChange}
                items={[
                  {
                    title: <span style={{fontSize: '24px'}}>信息同步</span>,
                    description: <span style={{fontSize: '14px'}}>第一步：数据上传同步</span>,
                  },
                  {
                    title: <span style={{fontSize: '24px'}}>信息填写</span>,
                    description: <span style={{fontSize: '14px'}}>第二步：填写对应信息</span>,
                  },
                  {
                    title: <span style={{fontSize: '24px'}}>信息填报</span>,
                    description: <span style={{fontSize: '14px'}}>第三步：检查预填结果</span>,
                  },
                  {
                    title: <span style={{fontSize: '24px'}}>数据填报</span>,
                    description: <span style={{fontSize: '14px'}}>第四步：登录平台填报</span>,
                  },
                ]}
              />
              <Divider />
              <Tabs destroyInactiveTabPane={true} defaultActiveKey='1' activeKey={currentKey.toString()} animated={true} type='card' size='large' onChange={tabsOnChange}>
                <TabPane
                  tab={<span style={{fontSize: '18px'}}><CloudUploadOutlined style={{fontSize: '20px'}}/>  上传同步</span>}
                  key="1"
                  size="large"
                >
                  <UploadSyncPage />
                </TabPane>
                <TabPane
                  tab={<span style={{fontSize: '18px'}}><OrderedListOutlined style={{fontSize: '20px'}}/>  信息填写</span>}
                  key="2"
                  size="large"
                >
                  <Fill />
                </TabPane>
                <TabPane
                  tab={<span style={{fontSize: '18px'}}><SafetyOutlined style={{fontSize: '20px'}}/>  填写预览</span>}
                  key="3"
                  size="large"
                >
                  <PreviewPage />
                </TabPane>
                <TabPane
                  tab={<span style={{fontSize: '18px'}}><FileSyncOutlined style={{fontSize: '20px'}}/>  数据申报</span>}
                  key="4"
                  size="large"
                >
                  <SelectFormPage />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <DocumentTitle title="统一报表报送系统" key="title" />
      </div>
    </>
  );
}