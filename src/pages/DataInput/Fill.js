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
      key: 'platform1',
      label: '人社局',
      children: [
        {
          key: 'g1',
          type: 'group',
          children: [
            {
              key: '1',
              label: '单位就业登记信息',
            },
            {
              key: '2',
              label: '以工代训补贴申领信息',
            },
            {
              key: '3',
              label: '新增社保参保人员信息',
            },
            {
              key: '4',
              label: '单位参保信息',
            },
            {
              key: '5',
              label: '就业需求信息',
            }
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform2',
      label: '统计局',
      children: [
        {
          key: '6',
          label: '单位基本信息',
        },
        {
          key: '7',
          label: '单位从业人员及工资总额信息',
        },
        {
          key: '8',
          label: '研究开发项目情况信息'
        },
        {
          key: '9',
          label: '研究开发活动及相关情况信息'
        },
        {
          key: '10',
          label: '财务状况信息'
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform3',
      label: '医保局',
      children: [
        {
          key: '11',
          label: '单位基本信息',
        },
        {
          key: '12',
          label: '单位参保登记信息',
        },
        {
          key: '13',
          label: '人员信息',
        },
        {
          key: '14',
          label: '在线增减员信息',
        },
      ],
    },
    {
      key: 'platform4',
      label: '工商局',
      children: [
        {
          key: '15',
          label: '企业基本信息',
        },
        {
          key: '16',
          label: '资产状况信息',
        },
        {
          key: '17',
          label: '对外提供保证担保信息',
        },
        {
          key: '18',
          label: '参保信息',
        },
      ],
    },
    {
      key: 'platform5',
      label: '公积金管理中心',
      children: [
        {
          key: '19',
          label: '个人账户信息',
        },
        {
          key: '20',
          label: '个人账户同城转移信息',
        },
        {
          key: '21',
          label: '汇缴登记信息',
        },
        {
          key: '22',
          label: '个人缴存明细信息',
        },
      ],
    },
    {
      key: 'platform6',
      label: '市总工会',
      children: [
        {
          key: '23',
          label: '住院医疗互助信息',
        }
      ],
    },
    {
      key: 'platform7',
      label: '电力交易中心',
      children: [
        {
          key: '24',
          label: '电力用户基本信息',
        },
        {
          key: '25',
          label: '用户申请/注销信息',
        },
        {
          key: '26',
          label: '电力用户身份认证信息',
        }
      ],
    },
    {
      key: 'platform8',
      label: '科技局',
      children: [
        {
          key: '27',
          label: '企业概况信息',
        },
        {
          key: '28',
          label: '企业经济概况信息',
        },
        {
          key: '29',
          label: '企业人员概况信息',
        },
        {
          key: '30',
          label: '研究开发项目状况信息',
        },
        {
          key: '31',
          label: '研究开发活动及相关情况信息'
        },
        {
          key: '32',
          label: '高新技术企业统计表信息'
        }
      ],
    },
    {
      key: 'platform9',
      label: '工信局',
      children: [
        {
          key: '33',
          label: '软件和信息技术服务业企业月报表信息',
        }
      ],
    },
    {
      key: 'platform10',
      label: '市政府',
      children: [
        {
          key: '34',
          label: '项目基本信息',
        },
        {
          key: '35',
          label: '项目法人/申报单位信息',
        }
      ],
    },
    {
      key: 'platform11',
      label: '科技局',
      children: [
        {
          key: '27',
          label: '企业概况信息',
        },
        {
          key: '28',
          label: '企业经济概况信息',
        },
        {
          key: '29',
          label: '企业人员概况信息',
        },
        {
          key: '30',
          label: '研究开发项目状况信息',
        },
        {
          key: '31',
          label: '研究开发活动及相关情况信息'
        },
        {
          key: '32',
          label: '高新技术企业统计表信息'
        }
      ],
    },
    {
      key: 'platform12',
      label: '税务局',
      children: [
        {
          key: '27',
          label: '单位税务信息',
        }
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