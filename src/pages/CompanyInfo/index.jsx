import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import { useState } from 'react';
import BasicCompanyInfo from './BasicCompanyInfo'
import CompanyEmployedInfo from './CompanyEmployedInfo'
import CompanyInsuranceInfo from './CompanyInsuranceInfo'
import CompanyRunningSumInfo from './CompanyRunningSumInfo'
import CompanyResearchInfo from './CompanyResearchInfo'
import 'rc-banner-anim/assets/index.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

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

  return (
    <>
      <div style={{height: '100vh'}}>
        <Header key="header" className='show-shadow' />
        <div className="banner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 1200}}>
            <div className="logo" />
            <div style={{padding: 50, height: 1000}} class="banner-anim">
              <div style={{display: 'flex', height: 1000}}>
                <div>
                  <Menu
                    style={{
                      width: 400,
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
                  <div style={{marginLeft: 30, height: 950, width: 1400, overflow: 'scroll'}}>
                    {pageMap[selectedKey]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer key="footer" position='absolute'/>
        <DocumentTitle title="统一报表报送系统" key="title" />
      </div>
    </>
  );
}