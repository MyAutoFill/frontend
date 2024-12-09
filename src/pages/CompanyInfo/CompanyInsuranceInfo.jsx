import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Select, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

export default function CompanyInsuranceInfo(props) {

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
        reqRatioConfig('CompanyInsuranceInfo')
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
      label: <span style={{fontSize: '16px'}}>单位管理码/单位编号</span>,
      children: <Form.Item name="company_insurance_1"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>基金来源</span>,
      children: 
        <Form.Item name="HumanSocial_NewSheBao_77">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择基金来源"
            optionFilterProp="label"
            options={[
              {
                value: '全额拨款',
                label: '全额拨款',
              },
              {
                value: '差额拨款',
                label: '差额拨款',
              },
              {
                value: '自收自支',
                label: '自收自支',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>参保电子邮箱</span>,
      children: <Form.Item name="company_basicinfo_35"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>单位专管员姓名</span>,
      children: <Form.Item name="company_insurance_4"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>单位专管员所在部门</span>,
      children: <Form.Item name="company_insurance_5"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>单位专管员电话</span>,
      children: <Form.Item name="company_basicinfo_31"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>单位专管员手机号码</span>,
      children: <Form.Item name="company_insurance_7"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>单位主要经营地</span>,
      children: <Form.Item name="company_basicinfo_17"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>行业风险类别</span>,
      children: <Form.Item name="company_insurance_9"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>经济行业类别</span>,
      children: <Form.Item name="company_insurance_10"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>银行账户</span>,
      children: <Form.Item name="company_insurance_11"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>银行类别</span>,
      children: <Form.Item name="company_insurance_12"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>银行户名</span>,
      children: <Form.Item name="company_insurance_13"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>统筹层次</span>,
      children: <Form.Item name="company_insurance_14"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>单位管理类型</span>,
      children: <Form.Item name="company_insurance_15"><Input size='large' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanyInsuranceInfo', {
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
        <Descriptions style={{width: '1300px'}} title="企业参保信息" bordered items={items} />
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
            style={{
              position: 'absolute',
              right: 0,
              bottom: 210
              }}
              htmlType='submit'
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