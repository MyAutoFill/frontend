import { PageContainer } from '@ant-design/pro-components';
import { Row, Col, List, Card, ConfigProvider, Dropdown, Empty, Upload, Select, Radio, Table, Tag, Space, Badge } from 'antd';
import { useState } from 'react';
import { AppstoreFilled, MenuOutlined } from '@ant-design/icons';

function CardList({staffDetail}) {
  return (
    <div style={{display: 'flex', paddingTop: '10px'}}>
      <Row gutter={32}>
        <Col span={8}>
          <Tag color="#f7685b" style={{width: '85px', borderRadius: '20px', height: '35px', textAlign: 'center', fontSize: '15px', fontWeight: 500, lineHeight: '33px'}}>已删除</Tag>
          <div style={{height: '530px', overflow: 'scroll', marginTop: '20px'}}>
            <List
              grid={{
                gutter: 10,
                column: 1,
              }}
              dataSource={staffDetail}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col span={8}>
          <Tag color="#ffb946" style={{width: '85px', borderRadius: '20px', height: '35px', textAlign: 'center', fontSize: '15px', fontWeight: 500, lineHeight: '33px'}}>待更新</Tag>
          <div style={{height: '530px', overflow: 'scroll', marginTop: '20px'}}>
            <List
              grid={{
                gutter: 10,
                column: 1,
              }}
              dataSource={staffDetail}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col span={8}>
          <Tag color="#2ed47a" style={{width: '85px', borderRadius: '20px', height: '35px', textAlign: 'center', fontSize: '15px', fontWeight: 500, lineHeight: '33px'}}>已更新</Tag>
          <div style={{height: '530px', overflow: 'scroll', marginTop: '20px'}}>
            <List
              grid={{
                gutter: 10,
                column: 1,
              }}
              dataSource={staffDetail}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

function NormalList({staffDetail}) {
  const [pageSize, setPageSize] = useState(10);
  const [curPage, setCurPage] = useState(1);
  const column = [
    {
      dataIndex: 'status',
      key: 'status',
      render: (row, _) => {
        const colorMap = {
          '已更新': '#2ed47a',
          '已删除': '#f7685b',
          '待更新': '#ffb946'
        };
        let color = '#c2cfe0';
        if (row in colorMap) {
          color = colorMap[row];
        }
        return <Tag color={color}>{row}</Tag>
      },
    },
    {
      dataIndex: 'title',
      key: 'title',
      render: (row, record) => (
        <>
          <div>
            <span style={{fontWeight: 500}}>{row}</span>
          </div>
          <div>
            <span>{record.answer}</span>
          </div>
        </>
      )
    },
    {
      dataIndex: 'type',
      key: 'type',
      render: (row, _) => {
        const colorMap = {
          '商品知识': '#2ed47a',
          '活动说明': '#f7685b',
          '售后问题': '#0e78f5'
        };
        let color = '#c2cfe0';
        if (row in colorMap) {
          color = colorMap[row];
        }
        return <Badge color={color} text={row} />;
      },
      width: 105
    },
    {
      dataIndex: 'answer',
      key: 'answer',
      render: (row, record) => (
        <span>{record.user.map((val) => val.name).join('、')}</span>
      ),
    },
    {
      dataIndex: 'update_time',
      key: 'update_time',
      render: (row, record) => (
        <span>{'更新时间：' + row}</span>
      ),
      width: 177
    },
  ]
  return (
    <div style={{display: 'flex', paddingTop: '10px'}}>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBorderRadius: 0
            }
          }
        }}
      >
        <Table
          showHeader={false}
          borderRadius={'0px'}
          columns={column}
          dataSource={staffDetail}
          pagination={{
            showSizeChanger: true,
            total: staffDetail.length,
            showTotal: (total, range) => {return `${range[0]}-${range[1]} of ${total} items`},
            defaultPageSize: 10,
            pageSize: pageSize,
            defaultCurrent: 1,
            current: curPage,
            onChange: (page, pageSize) => {
              setCurPage(page);
              setPageSize(pageSize);
            }
          }}
        />
      </ConfigProvider>
    </div>
  )
}

export default function MyApp() {
  const [sourceData, setSourceData] = useState([
    {
      'thumbnails': '',
      'id': '1234567',
      'name': '冬日新款运动鞋',
      'status': '销售中',
      'amount': '2340985.32',
      'count': 23,
      'knowledge_input': 23,
      'knowledge_del': 12,
      'knowledge_refresh': 3
    },
  ])
  const [pageSize, setPageSize] = useState(10);
  const [curPage, setCurPage] = useState(1);
  const [selStyle, setSelStyle] = useState(0);
  const columns = [
    {
      title: '商品',
      dataIndex: 'name',
      key: 'name',
      width: 400,
      render: (row, record) => (
        <>
          <div style={{display: 'flex'}}>
            <div><img src={'/avatar.png'} style={{width: '100px', height: '100px'}}></img></div>
            <div style={{marginLeft: '20px'}}>
              <p>{record.name}</p>
              <p>{'ID：' + record.id}</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (row, record) => (
        <Tag color="success">{row}</Tag>
      )
    },
    {
      title: '7日销售金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (row, _) => {
        return <span>{'￥' + row}</span>
      }
    },
    {
      title: '7日咨询人数',
      dataIndex: 'count',
      key: 'count',
      render: (row, _) => {
        return <span>{row + '人'}</span>
      }
    },
    {
      title: '商品信息与导购话术',
      dataIndex: 'status',
      key: 'status',
      render: (row, record) => (
        <>
          <Space direction="vertical" size="small" style={{ display: 'flex' }}>
            <Tag color="#2ed47a">{record.knowledge_input + '条知识录入'}</Tag>
            <Tag color="#f7685b">{record.knowledge_del + '条知识需要删除'}</Tag>
            <Tag color="#ffb946">{record.knowledge_refresh + '条知识需要更新'}</Tag>
          </Space>
        </>
      )
    },
  ]

  const changeStyle = (e) => {
    setSelStyle(e.target.value)
  }

  const detailData = [
    {
      status: '待更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '商品知识',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '待更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '商品知识',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
    {
      status: '已更新',
      title: '问题描述：一共可以有几个颜色可选择？',
      answer: '颜色分类：冷灰/微晶灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5 黑/冷灰/城堡灰-6 豆绿/灰绿/浅米白-7 麦乔灰/麦乔灰-4 象牙白/冰水绿/竞技蓝-5',
      type: '售后问题',
      user: [{
        'name': '客服小莎',
        'icon': ''
      },{
        'name': '客服小莎',
        'icon': ''
      }],
      update_time: '2024.02.02'
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonColor: 'rgba(0, 0, 0, 0.55)'
          }
        }
      }}
    >
      <div>
        <PageContainer>
          <Table
            columns={columns}
            dataSource={sourceData}
            pagination={false}
          />
          <PageContainer>
            <div style={{paddingBottom: '10px'}}>
              <Radio.Group onChange={changeStyle} value={selStyle} buttonStyle='outline'>
                <div style={{width: '100%', display: 'flex'}}>
                  <div hoverable>
                    <Radio.Button value={0} hoverable>
                      <AppstoreFilled /><span style={{marginLeft: '4px'}}>任务分类</span>
                    </Radio.Button>
                  </div>
                  <div hoverable>
                    <Radio.Button value={1} hoverable><MenuOutlined /><span style={{marginLeft: '4px'}}>知识列表</span></Radio.Button>
                  </div>
                </div>
              </Radio.Group>
            </div>
            {
              (selStyle == 0) && (
                <CardList staffDetail={detailData} />
              )
            }
            {
              (selStyle == 1) && (
                <NormalList staffDetail={detailData} />
              )
            }
          </PageContainer>
        </PageContainer>
      </div>
    </ConfigProvider>
  );
}