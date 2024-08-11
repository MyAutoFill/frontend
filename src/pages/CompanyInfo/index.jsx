import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
import BasicCompanyInfo from './BasicCompanyInfo'
import 'rc-banner-anim/assets/index.css';
import { Menu, Descriptions } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function CompanyInfo() {

  const menus = [
    {
      key: 'sub1',
      label: '企业基本信息',
      icon: <MailOutlined />,
      children: [
        {
          key: '1',
          label: '单位基本信息',
        },
      ],
    },
    {
      key: 'sub2',
      label: '企业参保信息',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '2',
          label: '单位参保信息',
        },
      ],
    },
    {
      key: 'sub3',
      label: '企业从业人员信息',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '3',
          label: '单位从业人员信息',
        },
      ],
    },
    {
      key: 'sub4',
      label: '企业从业人员基本信息',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '4',
          label: '新增从业人员基本信息',
        },
      ],
    },
    {
      key: 'sub5',
      label: '企业从业人员参保信息',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'sub6',
      label: '企业经济状况信息',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '6',
          label: '单位经济概况',
        },
      ],
    },
    {
      key: 'sub7',
      label: '企业研究开发项目概况信息',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '7',
          label: '研究开发项目概况',
        },
      ],
    },
    {
      key: 'sub8',
      label: '企业研究开发及相关信息',
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <>
      <div style={{height: '100vh'}}>
        <Header key="header" className='show-shadow' />
        <div className="banner page-wrapper" >
          <div className="page" style={{maxWidth: 2000, height: 'calc(100vh - 65px)'}}>
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
                  />
                </div>
                <div>
                  <div style={{marginLeft: 30, height: 950, width: 1400, overflow: 'scroll'}}>
                    <BasicCompanyInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer key="footer" />
        <DocumentTitle title="统一报表报送系统" key="title" />
      </div>
    </>
  );
}