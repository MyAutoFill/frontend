import { useState } from 'react';
import BasicCompanyInfo from './BasicCompanyInfo'
import CompanyEmployedInfo from './CompanyEmployedInfo'
import CompanyInsuranceInfo from './CompanyInsuranceInfo'
import CompanyRunningSumInfo from './CompanyRunningSumInfo'
import CompanyResearchInfo from './CompanyResearchInfo'
import InvestmentInfo from './InvestmentInfo';
import CompanySignUpInfo from './CompanySignUpInfo';
import 'rc-banner-anim/assets/index.css';
import { Menu, ConfigProvider, Row, Col } from 'antd';
import { AppstoreOutlined, PaperClipOutlined, FileDoneOutlined, UserOutlined, ShopOutlined, KeyOutlined, HddOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import SyncCompanyInfoButton from './Components';

export default function CompanyInfo() {
  const [selectedKey, setSelectedKey] = useState('1');

  const menus = [
    {
      type: 'divider',
    },
    {
      label: '企业基本信息',
      key: '1',
      icon: <PaperClipOutlined />
    },
    {
      type: 'divider',
    },
    {
      label: '企业参保信息',
      key: '2',
      icon: <FileDoneOutlined />
    },
    {
      type: 'divider',
    },
    {
      label: '企业从业人员信息',
      key: '3',
      icon: <UserOutlined />
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
      icon: <ShopOutlined />
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
    {
      key: '9',
      label: '投资人及出资信息',
      icon: <KeyOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '10',
      label: '企业登记信息',
      icon: <HddOutlined />,
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
    '8': <CompanyResearchInfo />,
    '9': <InvestmentInfo />,
    '10': <CompanySignUpInfo />
  }

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
              <Row style={{height: 1000}}>
                <Col span={4} style={{height: 800, overflowX: 'auto'}}>
                  <Menu
                    style={{
                      width: '100%',
                      fontSize: '18px'
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={menus}
                    onSelect={(key) => {
                      setSelectedKey(key.key)
                    }}
                  />
                  <div style={{marginTop: '40px'}}>
                    <SyncCompanyInfoButton />
                  </div>
                </Col>
                <Col span={20}>
                  <div style={{marginLeft: 30, height: 950 }}>
                    {pageMap[selectedKey]}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}