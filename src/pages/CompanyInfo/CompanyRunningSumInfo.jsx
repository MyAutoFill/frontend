import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function CompanyRunningSumInfo(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    requestCompanyData(uuid)
      .then(function (res) {
        reqRatioConfig('CompanyRunningSumInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              if (new_res[key] !== '') {
                let a = BigNumber(new_res[key])
                let b = BigNumber(config[key])
                new_res[key] = a.times(b).toString();
              }
            }
          });
          form.resetFields();
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
    form.validateFields()
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
      label: <span style={{fontSize: '16px'}}>营业收入</span>,
      children: <Form.Item name="company_runningsum_1"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>营业成本</span>,
      children: <Form.Item name="company_runningsum_2"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>-- 其中：主营业务收入</span>,
      children: <Form.Item name="company_runningsum_3"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>-- 其中：主营业务成本</span>,
      children: <Form.Item name="company_runningsum_33"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>税金及附加</span>,
      children: <Form.Item name="company_runningsum_4"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>销售费用</span>,
      children: <Form.Item name="company_runningsum_5"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>管理费用</span>,
      children: <Form.Item name="company_runningsum_6"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>研发费用</span>,
      children: <Form.Item name="company_runningsum_7"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>财务费用</span>,
      children: <Form.Item name="company_runningsum_8"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>资产减值损失</span>,
      children: <Form.Item name="company_runningsum_9"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>信用减值损失</span>,
      children: <Form.Item name="company_runningsum_10"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>公允价值变动收益（损失以“-”号记）</span>,
      children: <Form.Item name="company_runningsum_11"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>投资收益（损失以“-”号记）</span>,
      children: <Form.Item name="company_runningsum_12"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>其他收益</span>,
      children: <Form.Item name="company_runningsum_13"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>营业利润</span>,
      children: <Form.Item name="company_runningsum_14"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>营业外收入</span>,
      children: <Form.Item name="company_runningsum_15"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>营业外支出</span>,
      children: <Form.Item name="company_runningsum_16"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>利润总额</span>,
      children: <Form.Item name="company_runningsum_17"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>资产总计</span>,
      children: <Form.Item name="FinanceStatusInfo_38"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>应交增值税</span>,
      children: <Form.Item name="company_runningsum_19"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>--其中：流动资产合计</span>,
      children: <Form.Item name="company_runningsum_20"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>所得税费用</span>,
      children: <Form.Item name="company_runningsum_21"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>---- 其中：固定资产净值</span>,
      children: <Form.Item name="company_runningsum_22"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>本年应付职工薪酬（本年贷方累计发生额）</span>,
      children: <Form.Item name="company_runningsum_23"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>------ 无形资产</span>,
      children: <Form.Item name="company_runningsum_24"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>净敞口套期收益(损失以“-”号记)</span>,
      children: <Form.Item name="company_runningsum_25"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>-- 其中：累计折旧</span>,
      children: <Form.Item name="company_runningsum_26"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>资产处置收益（损失以“-”号记）</span>,
      children: <Form.Item name="company_runningsum_27"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>---- 其中：本年折旧</span>,
      children: <Form.Item name="company_runningsum_28"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>流动负债合计</span>,
      children: <Form.Item name="company_runningsum_29"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>年末负债合计</span>,
      children: <Form.Item name="company_runningsum_30"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>年末所有者权益（股东权益）</span>,
      children: <Form.Item name="company_runningsum_31"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>-- 其中：实收资本（股本）</span>,
      children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>减：坏帐准备</span>,
      children: <Form.Item name="company_runningsum_34"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>应收账款净额</span>,
      children: <Form.Item name="company_runningsum_35"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>其他应收款净额</span>,
      children: <Form.Item name="company_runningsum_36"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>资产合计</span>,
      children: <Form.Item name="company_runningsum_37"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>外方投资</span>,
      children: <Form.Item name="company_runningsum_38"><Input size='large' addonAfter='千元' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
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
          if (new_res[key] !== '') {
            let a = BigNumber(new_res[key])
            let b = BigNumber(config[key])
            new_res[key] = a.div(b).toString();
          }
        }
      });
      const exist = localStorage.getItem("currentUser");
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill/user/login')
      }
      request('/api/save_company_data', {
        method: 'POST',
        data: {
          data: new_res,
          uuid: uuid
        }
      })
    })
  };

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 950, width: 'auto', padding: 20, overflow:'auto'}} >
      <Form onFinish={onFinish} form={form}>
        <Descriptions style={{width: '1300px'}} title="企业经济状况信息" bordered items={items} />
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
            onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
          >立即填报</Button>
        </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}