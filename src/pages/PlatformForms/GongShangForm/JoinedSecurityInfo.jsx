import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

const dateFormat = 'YYYY-MM-DD';
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15-day

export default function JoinedSecurityInfo(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('JoinedSecurityInfo')
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
      label: <span style={{fontSize: '16px'}}>从业人数</span>,
      children: <Form.Item name="company_employee_1"><Input disabled={disableVar} size='large' addonAfter='人' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>其中：女性从业人数</span>,
      children: <Form.Item name="company_employee_3"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>参保各险种人数</span>,
      children: 
        <>
          <Form.Item name="GongShang_sercurity_3"><Input disabled={disableVar} size='large' addonBefore='城镇职工基本养老保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_4"><Input disabled={disableVar} size='large' addonBefore='失业保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_5"><Input disabled={disableVar} size='large' addonBefore='职工基本医疗保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_6"><Input disabled={disableVar} size='large' addonBefore='工伤保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_7"><Input disabled={disableVar} size='large' addonBefore='生育保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>单位缴费基数</span>,
      children: 
        <>
          <Form.Item name="GongShang_sercurity_8"><Input disabled={disableVar} size='large' addonBefore='单位参加城镇职工基本养老保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_9"><Input disabled={disableVar} size='large' addonBefore='单位参加失业保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_10"><Input disabled={disableVar} size='large' addonBefore='单位参加职工基本医疗保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_11"><Input disabled={disableVar} size='large' addonBefore='单位参加生育保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>本期实际缴费金额</span>,
      children: 
        <>
          <Form.Item name="GongShang_sercurity_12"><Input disabled={disableVar} size='large' addonBefore='参加城镇职工基本养老保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_13"><Input disabled={disableVar} size='large' addonBefore='参加失业保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_14"><Input disabled={disableVar} size='large' addonBefore='参加职工基本医疗保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_15"><Input disabled={disableVar} size='large' addonBefore='参加工伤保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_16"><Input disabled={disableVar} size='large' addonBefore='参加生育保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>本期实际欠缴金额</span>,
      children: 
        <>
          <Form.Item name="GongShang_sercurity_17"><Input disabled={disableVar} size='large' addonBefore='单位参加城镇职工基本养老保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_18"><Input disabled={disableVar} size='large' addonBefore='单位参加失业保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_19"><Input disabled={disableVar} size='large' addonBefore='单位参加职工基本医疗保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_20"><Input disabled={disableVar} size='large' addonBefore='单位参加工伤保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_sercurity_21"><Input disabled={disableVar} size='large' addonBefore='单位参加生育保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3 
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=JoinedSecurityInfo', {
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
      request('/api/save', {
        method: 'POST',
        data: {
          date: props.date,
          data: new_res,
          uuid: uuid
        }
      })
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <span style={{ fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】参保信息" bordered items={items} />
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