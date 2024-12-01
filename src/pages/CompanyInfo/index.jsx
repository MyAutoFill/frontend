import { useState } from 'react';
import BasicCompanyInfo from './BasicCompanyInfo'
import CompanyEmployedInfo from './CompanyEmployedInfo'
import CompanyInsuranceInfo from './CompanyInsuranceInfo'
import CompanyRunningSumInfo from './CompanyRunningSumInfo'
import CompanyResearchInfo from './CompanyResearchInfo'
import 'rc-banner-anim/assets/index.css';
import { Menu, DatePicker, ConfigProvider } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { history } from '@umijs/max';

export default function CompanyInfo() {
  const [selectedKey, setSelectedKey] = useState('1');

  const menus = [
    {
      type: 'divider',
    },
    {
      label: '企业基本信息',
      key: '1',
      icon: <AppstoreOutlined />
    },
    {
      type: 'divider',
    },
    {
      label: '企业参保信息',
      key: '2',
      icon: <AppstoreOutlined />,
    },
    {
      type: 'divider',
    },
    {
      label: '企业从业人员信息',
      key: '3',
      icon: <AppstoreOutlined />
    },
    // {
    //   type: 'divider',
    // },
    // {
    //   label: '企业从业人员基本信息',
    //   key: '4',
    //   icon: <AppstoreOutlined />
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: '5',
    //   label: '企业从业人员参保信息',
    //   icon: <AppstoreOutlined />,
    // },
    {
      type: 'divider',
    },
    {
      key: '6',
      label: '企业经济状况信息',
      icon: <AppstoreOutlined />
    },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: '7',
    //   label: '企业研究开发项目概况信息',
    //   icon: <AppstoreOutlined />
    // },
    {
      type: 'divider',
    },
    {
      key: '8',
      label: '企业研究开发及相关信息',
      icon: <AppstoreOutlined />,
    },
    {
      type: 'divider',
    },
  ];

  const pageMap = {
    '1': <BasicCompanyInfo />,
    '2': <CompanyInsuranceInfo />,
    '3': <CompanyEmployedInfo />,
    '6': <CompanyRunningSumInfo />,
    '8': <CompanyResearchInfo />
  }

  const logout = () => {
    localStorage.removeItem('currentUser');
    history.push('/auto_fill_test');
  }

  return (
    <>
      <div style={{height: '100vh'}}>
        <div className="mybanner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 1000}}>
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
                      <a href='/auto_fill_test/' style={{fontSize: 25, color: 'white', fontWeight: 400}}>首页</a>
                    </Menu.Item>
                    <Menu.Item key="input">
                      <a href='/auto_fill_test/input' style={{fontSize: 25, color: 'white', fontWeight: 400}}>报表报送</a>
                    </Menu.Item>
                    <Menu.Item key="info">
                      <a href='/auto_fill_test/company_info' style={{fontSize: 25, color: 'white', fontWeight: 400}}>企业基本信息</a>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <a onClick={() => {logout()}} style={{fontSize: 25, color: 'white', fontWeight: 400}}>退出登录</a>
                    </Menu.Item>
                  </Menu>
                </ConfigProvider>
              </div>
            </div>
            <div style={{padding: 50, height: 1000}} class="mybanner-anim">
              <div style={{display: 'flex', height: 1000}}>
                <div>
                  <Menu
                    style={{
                      width: 320,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={menus}
                    onSelect={(key) => {
                      setSelectedKey(key.key)
                    }}
                  />
                </div>
                <div>
                  <div style={{marginLeft: 30, height: 700, width: 1450, overflow: 'auto'}}>
                    {pageMap[selectedKey]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}