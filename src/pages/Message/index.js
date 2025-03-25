import { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Menu, ConfigProvider, Table, Space, Tag } from 'antd';
import { AppstoreOutlined, PaperClipOutlined, FileDoneOutlined, UserOutlined, ShopOutlined, KeyOutlined, HddOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

export default function Message() {
  const [selectedKey, setSelectedKey] = useState('1');


  const logout = () => {
    localStorage.removeItem('currentUser');
    history.push('/auto_fill');
  }

  const data = [
    {
      id: '1',
      platform: '统计局',
      table: '软件和信息技术服务收入情况',
      date: '2024-12-15',
      countdown: '2',
      type: '填报提醒'
    },
    {
      id: '2',
      platform: '统计局',
      table: '集成电路设计和工业互联网平台业务量月报表',
      date: '2024-12-15',
      countdown: '2',
      type: '填报提醒'
    }
  ]

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '平台名',
      dataIndex: 'platform',
      key: 'platform'
    },
    {
      title: '报表名',
      dataIndex: 'table',
      key: 'table'
    },
    {
      title: '填报截止日期',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '距离截止还有（天）',
      dataIndex: 'countdown',
      key: 'countdown'
    },
    {
      title: '消息类型',
      dataIndex: 'type',
      key: 'type',
      render: (text, _) => (
        <Tag color={'green'} key={text}>
          {text}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'option',
      render: (_, record) => (
        <Space size="middle">
          <a>已读</a>
          <a>删除</a>
        </Space>
      ),
    }
  ]

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
                    <Menu.Item key="message_center">
                      <a href='/auto_fill/message_center' style={{fontSize: 25, color: 'white', fontWeight: 400}}>消息中心</a>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <a onClick={() => {logout()}} style={{fontSize: 25, color: 'white', fontWeight: 400}}>退出登录</a>
                    </Menu.Item>
                  </Menu>
                </ConfigProvider>
              </div>
            </div>
            <div style={{padding: 50, height: 1050}} class="mybanner-anim">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}