import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function CompanyRunningSumInfo() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData()
      .then(function (res) {
        reqRatioConfig('CompanyRunningSumInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              let a = BigNumber(new_res[key])
              let b = BigNumber(config[key])
              new_res[key] = a.times(b).toString();
            }
          });
          form.setFieldsValue(new_res);
        })
      })
  }

  const [form] = Form.useForm();

  const SaveSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改保存成功',
    });
  }

  const SaveError = () => {
    messageApi.open({
      type: 'error',
      content: '保存失败',
    });
  }

  const EditSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改取消成功',
    });
  }

  const EditError = () => {
    messageApi.open({
      type: 'error',
      content: '本次修改取消失败',
    });
  }

  const CheckSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '表单检查完成',
    });
  }
  
  const CheckError = () => {
    messageApi.open({
      type: 'error',
      content: '表单检查失败',
    });
  };

  const items = [
    {
      key: '1',
      label: '营业收入',
      children: <Form.Item name="company_runningsum_1"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: '营业成本',
      children: <Form.Item name="Tech_EcoInfo_5"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '-- 其中：主营业务收入',
      children: <Form.Item name="company_runningsum_3"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '31',
      label: '-- 其中：主营业务成本',
      children: <Form.Item name="company_runningsum_33"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '税金及附加',
      children: <Form.Item name="company_runningsum_4"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '销售费用',
      children: <Form.Item name="company_runningsum_5"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '管理费用',
      children: <Form.Item name="company_runningsum_6"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: '研发费用',
      children: <Form.Item name="company_runningsum_7"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '财务费用',
      children: <Form.Item name="company_runningsum_8"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '8',
      label: '资产减值损失',
      children: <Form.Item name="company_runningsum_9"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: '信用减值损失',
      children: <Form.Item name="company_runningsum_10"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: '公允价值变动收益（损失以“-”号记）',
      children: <Form.Item name="company_runningsum_11"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: '投资收益（损失以“-”号记）',
      children: <Form.Item name="company_runningsum_12"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '其他收益',
      children: <Form.Item name="company_runningsum_13"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '14',
      label: '营业利润',
      children: <Form.Item name="company_runningsum_14"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '15',
      label: '营业外收入',
      children: <Form.Item name="company_runningsum_15"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '16',
      label: '营业外支出',
      children: <Form.Item name="company_runningsum_16"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: '利润总额',
      children: <Form.Item name="company_runningsum_17"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '21',
      label: '资产总计',
      children: <Form.Item name="FinanceStatusInfo_38"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '19',
      label: '应交增值税',
      children: <Form.Item name="company_runningsum_19"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '22',
      label: '--其中：流动资产合计',
      children: <Form.Item name="company_runningsum_20"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '18',
      label: '所得税费用',
      children: <Form.Item name="company_runningsum_21"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '23',
      label: '---- 其中：固定资产净值',
      children: <Form.Item name="company_runningsum_22"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '20',
      label: '本年应付职工薪酬（本年贷方累计发生额）',
      children: <Form.Item name="company_runningsum_23"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '24',
      label: '------ 无形资产',
      children: <Form.Item name="company_runningsum_24"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '13',
      label: '净敞口套期收益(损失以“-”号记)',
      children: <Form.Item name="company_runningsum_25"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '25',
      label: '-- 其中：累计折旧',
      children: <Form.Item name="company_runningsum_26"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '资产处置收益（损失以“-”号记）',
      children: <Form.Item name="company_runningsum_27"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '26',
      label: '---- 其中：本年折旧',
      children: <Form.Item name="company_runningsum_28"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '27',
      label: '流动负债合计',
      children: <Form.Item name="company_runningsum_29"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '28',
      label: '年末负债合计',
      children: <Form.Item name="company_runningsum_30"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '29',
      label: '年末所有者权益（股东权益）',
      children: <Form.Item name="company_runningsum_31"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '30',
      label: '-- 其中：实收资本（股本）',
      children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanyRunningSumInfo', {
      method: 'GET',
    })
    .then(function (config) {
      const new_res = JSON.parse(JSON.stringify(values));
      Object.keys(config).forEach(key => {
        if (key in new_res) {
          let a = BigNumber(new_res[key])
          let b = BigNumber(config[key])
          new_res[key] = a.div(b).toString();
        }
      });
      request('/api/save', {
        method: 'POST',
        data: {
          date: '2024-09',
          data: new_res
        }
      })
    })
  };

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 700, width: 'auto', padding: 20, overflow:'auto'}} >
      <Form onFinish={onFinish} form={form}>
        <Descriptions title="企业经济状况信息" bordered items={items} />
        <FloatButton.Group
          open={defaultOpen}
          trigger="click"
          style={{
            insetInlineEnd: 120,
          }}
          shape='square'
          description="操作按钮"
          tooltip={<div>点击展示操作按钮</div>}
          type='primary'
          onOpenChange={(open) => setDefaultOpen(open)}
          icon={<ExpandAltOutlined />}
        >
          <Button 
            type="primary" 
            icon={<SaveFilled />} 
            autoInsertSpace 
            size='large' 
            htmlType="submit"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 210
            }}
            onClick={
              SaveSuccess
            }
          >保存数据</Button>
          <Button 
            type="primary" 
            icon={<StopFilled />} 
            autoInsertSpace 
            size='large' 
            style={{
              position: 'absolute',
              right: 0,
              bottom: 140,
            }}
            onClick={
              EditSuccess
            }
          >取消编辑</Button>
          <Button 
            type="primary" 
            icon={<CheckSquareFilled />} 
            autoInsertSpace 
            size='large'
            style={{
              position: 'absolute',
              right: 0, 
              bottom: 70,
            }}
            onClick={
              CheckSuccess
            }
          >检查表单</Button>
          <Button 
            type="primary" 
            icon={<FastForwardOutlined />} 
            autoInsertSpace 
            size='large'
            style={{
              position: 'absolute',
              right: 0, 
              bottom: 0,
            }}
            onClick={() => {history.push('/input?tab=4');}}
          >立即填报</Button>
        </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}