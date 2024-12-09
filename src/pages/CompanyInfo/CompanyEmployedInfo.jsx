import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

export default function CompanyEmployedInfo(props) {

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
        reqRatioConfig('CompanyEmployedInfo')
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
      label: <span style={{fontSize: '16px'}}>从业人员期末人数</span>,
      children: <Form.Item name="company_employee_1" rules={[{pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}><Input size='large' addonAfter='人' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item name="company_employee_2"><Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>其中：女性</span>,
      children: <Form.Item name="company_employee_3"><Input size='large' addonAfter='人' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      children: <Form.Item name="company_employee_4"><Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>中层及以上管理人员</span>,
      children: <Form.Item name="company_employee_5"><Input size='large' addonAfter='人' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item name="company_employee_6"><Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>专业技术人员</span>,
      children: <Form.Item name="company_employee_7"><Input size='large' addonAfter='人' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item name="company_employee_8"><Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>从业人员平均人数</span>,
      children: <Form.Item name="company_employee_9"><Input size='large' addonAfter='人' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item name="company_employee_10"><Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>从业人员工资总额</span>,
      children: <Form.Item name="company_employee_11"><Input size='large' addonAfter='元' disabled={disableVar} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item name="company_employee_12"><Input size='large' addonAfter='元' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanyEmployedInfo', {
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
          <Descriptions style={{width: '1300px'}} title="企业人员信息" bordered items={items} />
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