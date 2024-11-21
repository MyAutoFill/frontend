import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function GongShangCompanyInfo(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('GongShangCompanyInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              let a = BigNumber(new_res[key])
              let b = BigNumber(config[key])
              new_res[key] = a.times(b).toString();
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
      label: '报告年度',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择报告年度' picker="year" style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      key: '2',
      label: '企业名称',
      children: <Form.Item name="GongShang_CompanyInfo_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '统一社会信用代码/注册号',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '企业通信地址',
      children: <Form.Item name="company_basicinfo_34"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '邮政编码',
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '企业联系电话',
      children: <Form.Item name="GongShang_CompanyInfo_6"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '电子邮箱',
      children: <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: '企业经营状态',
      children: <Form.Item name="GongShang_CompanyInfo_8"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: '企业控股',
      children: <Form.Item name="GongShang_CompanyInfo_9"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: '企业主营业务活动',
      children: <Form.Item name="GongShang_CompanyInfo_10"><Input disabled={disableVar} size='large' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '11',
      label: '特种设备信息',
      children: 
        <>
          <Form.Item name="GongShang_CompanyInfo_11"><Input disabled={disableVar} size='large' addonBefore='办理使用登记特种设备总台数' addonAfter='台' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_12"><Input disabled={disableVar} size='large' addonBefore='检验有效期内特种设备总台数' addonAfter='台' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3
    },
    {
      key: '12',
      label: '股东发起人出资情况表',
      children: 
        <>
          <span>币种应与注册资本币种一致</span>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_13"><Input disabled={disableVar} size='large' addonBefore='股东' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <Form.Item name="GongShang_CompanyInfo_14"><Input disabled={disableVar} size='large' addonBefore='认缴出资额' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <br></br>
          <span size='large'>认缴出资时间</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择认缴出资时间' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_16"><Input disabled={disableVar} size='large' addonBefore='认缴出资方式' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <br></br>
          <span size='large'>实缴出资时间</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择实缴出资时间' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_18"><Input disabled={disableVar} size='large' addonBefore='实缴出资额' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_19"><Input disabled={disableVar} size='large' addonBefore='实缴出资方式' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1.5
    },
    {
      key: '13',
      label: '有限责任公司本年度是否有股权转让',
      children: 
        <>
          <Form.Item name="GongShang_CompanyInfo_20"><Input disabled={disableVar} size='large' addonBefore='股东' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_21"><Input disabled={disableVar} size='large' addonBefore='变更前股权比例' addonAfter='%' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_22"><Input disabled={disableVar} size='large' addonBefore='变更后股权比例' addonAfter='%' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <br></br>
          <span size='large'>股权变更日期</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择股权变更日期' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
        </>,
      span: 1.5
    },
    {
      key: '14',
      label: '有限责任公司本年度是否有股权转让',
      children: 
        <>
          <Form.Item name="GongShang_CompanyInfo_24"><Input disabled={disableVar} size='large' addonBefore='投资设立企业或购买股权企业名称' style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' addonBefore='统一社会信用代码/注册号' style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3
    },
    {
      key: '15',
      label: '是否有网站或网店',
      children: 
        <>
          <Form.Item name="GongShang_CompanyInfo_26"><Input disabled={disableVar} size='large' addonBefore='类型' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <Form.Item name="GongShang_CompanyInfo_27"><Input disabled={disableVar} size='large' addonBefore='名称' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="GongShang_CompanyInfo_28"><Input disabled={disableVar} size='large' addonBefore='网站' style={{ width: '810px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=GongShangCompanyInfo', {
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
          date: props.date,
          data: new_res
        }
      })
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Descriptions style={{width: '1300px'}} title="企业基本信息" bordered items={items} />
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
              onClick={() => {window.location.href = '/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}