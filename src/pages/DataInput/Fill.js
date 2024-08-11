import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Descriptions, Radio, Input, Menu, Row, Col, Table } from 'antd';

export default function Fill() {

  const items = [
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '2',
      label: '单位名称',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '3',
      label: '单位曾用名',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '4',
      label: '行业类别',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '5',
      label: '行业性质',
      children: <Input bordered={false}></Input>,

      span: 3
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Input bordered={false}></Input>,
      span: 3,
    },
    {
      key: '7',
      label: '行业代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '8',
      label: '经营范围',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '9',
      label: '工商登记有效期限（年）',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '10',
      label: '组织机构代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '11',
      label: '单位所在地区划及详细地址',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '12',
      label: '区划代码',
      children: <Input bordered={false}></Input>,
      span: 3
    },
    {
      key: '13',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>是否与单位所在地区划及详细地址一致：</span>
          <Radio>
            是
          </Radio>
          <Radio>
            否
          </Radio>
          <Input bordered={false}></Input>
        </>
      ),
      span: 3
    },
    {
      key: '14',
      label: '单位规模',
      children: (
        <>
          <Radio>1.大型</Radio>
          <Radio>2.中型</Radio>
          <Radio>3.小型</Radio>
          <Radio>4.微型</Radio>
        </>
      ),
      span: 3
    },
  ];


  const menus = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: 'g1',
          type: 'group',
          children: [
            {
              key: '1',
              label: 'Option 1',
            },
            {
              key: '2',
              label: 'Option 2',
            },
            {
              key: '3',
              label: 'Option 3',
            },
            {
              key: '4',
              label: 'Option 4',
            },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
    {
      key: 'grp',
      label: 'Group',
      type: 'group',
      children: [
        {
          key: '13',
          label: 'Option 13',
        },
        {
          key: '14',
          label: 'Option 14',
        },
      ],
    },
  ];


  const column = [
    {
      title: '',
      dataIndex: 'catagory',
      colSpan: 0,
      onCell: (_, index) => {
        if (index === 0) {
          return {
            rowSpan: 10
          }
        }
        if (1 <= index && index < 10) {
          return {
            rowSpan: 0
          }
        }
        if (index === 10) {
          return {
            rowSpan: 14
          }
        }
        if (11 <= index && index < 24) {
          return {
            rowSpan: 0
          }
        }
        if (index === 24) {
          return {
            rowSpan: 14
          }
        }
        if (25 <= index && index < 38) {
          return {
            rowSpan: 0
          }
        }
      }
    },
    {
      title: '项目',
      dataIndex: 'item',
      colSpan: 2
    },
    {
      title: '栏次',
      dataIndex: 'type',
    },
    {
      title: '一般项目',
      children: [
        {
          title: '本月数',
          dataIndex: 'normalCurMonth',
        },
        {
          title: '本年累计',
          dataIndex: 'normalTotal',
        },
      ]
    },
    {
      title: '即征即退项目',
      children: [
        {
          title: '本月数',
          dataIndex: 'quickCurMonth',
        },
        {
          title: '本年累计',
          dataIndex: 'quickTotal',
        },
      ]
    }
  ]

  const data = [
    {
      'catagory': '销售额',
      'item': '（一）按适用税率计税销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '销售额',
      'item': '其中：应税货物销售额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '销项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款计算',
      'item': '进项税额',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    },
    {
      'catagory': '税款缴纳',
      'item': '期初未缴税额（多缴为负数）',
      'type': '',
      'normalCurMonth': '1',
      'normalTotal': '1',
      'quickCurMonth': '1',
      'quickTotal': '1',
    }
  ]

  return (
    <>
    <div style={{display: 'flex', overflow: 'scroll', height: 1000}}>
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
        <div style={{marginLeft: 30, width: 1400}}>
          {/* <Descriptions title="单位基本信息" bordered items={items} /> */}
          <Table columns={column} bordered dataSource={data} pagination={false}/>
        </div>
      </div>
    </div>
    </>
  );
}