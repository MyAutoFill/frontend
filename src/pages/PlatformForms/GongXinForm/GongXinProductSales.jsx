import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15-day

export default function GongXinProductSales(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

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
        reqRatioConfig('InfoTechMonthlyForm')
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
        label: <span style={{fontSize: '16px'}}>微控器件销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin1" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>微控器件销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin2" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>微控器件销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin3" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>逻辑电路销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin4" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>逻辑电路销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin5" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>逻辑电路销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin6" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>存储器销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin7" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>存储器销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin8" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>存储器销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin9" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>模拟电路销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin10" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>模拟电路销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin11" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>模拟电路销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin12" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他电路销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin13" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他电路销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin14" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他电路销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin15" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>智能卡芯片及电子标签芯片销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin16" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>智能卡芯片及电子标签芯片销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin17" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>智能卡芯片及电子标签芯片销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin18" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>微波单片集成电路销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin19" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>微波单片集成电路销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin20" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>微波单片集成电路销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin21" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>物联网模组销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin22" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>物联网模组销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin23" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>物联网模组销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin24" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他集成电路产品销售量-本年本期累计</span>,
        children: <Form.Item name="Gongxin25" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他集成电路产品销售量-去年同期累计</span>,
        children: <Form.Item name="Gongxin26" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他集成电路产品销售量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin27" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>服务企业数量-本年本期累计</span>,
        children: <Form.Item name="Gongxin28" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>服务企业数量-去年同期累计</span>,
        children: <Form.Item name="Gongxin29" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>服务企业数量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin30" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工业APP数量-本年本期累计</span>,
        children: <Form.Item name="Gongxin31" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工业APP数量-去年同期累计</span>,
        children: <Form.Item name="Gongxin32" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工业APP数量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin33" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>设备连接数量-本年本期累计</span>,
        children: <Form.Item name="Gongxin34" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>设备连接数量-去年同期累计</span>,
        children: <Form.Item name="Gongxin35" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>设备连接数量-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin36" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中：轻工设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin37" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中：轻工设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin38" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中：轻工设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin39" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>建材设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin40" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>建材设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin41" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>建材设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin42" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>仪器仪表-本年本期累计</span>,
        children: <Form.Item name="Gongxin43" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>仪器仪表-去年同期累计</span>,
        children: <Form.Item name="Gongxin44" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>仪器仪表-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin45" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>化工设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin46" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>化工设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin47" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>化工设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin48" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>冶炼设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin49" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>冶炼设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin50" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>冶炼设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin51" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>电工及电子设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin52" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>电工及电子设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin53" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>电工及电子设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin54" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工程机械-本年本期累计</span>,
        children: <Form.Item name="Gongxin55" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工程机械-去年同期累计</span>,
        children: <Form.Item name="Gongxin56" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>工程机械-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin57" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机床-本年本期累计</span>,
        children: <Form.Item name="Gongxin58" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机床-去年同期累计</span>,
        children: <Form.Item name="Gongxin59" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机床-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin60" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机器人-本年本期累计</span>,
        children: <Form.Item name="Gongxin61" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机器人-去年同期累计</span>,
        children: <Form.Item name="Gongxin62" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>机器人-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin63" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他设备-本年本期累计</span>,
        children: <Form.Item name="Gongxin64" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他设备-去年同期累计</span>,
        children: <Form.Item name="Gongxin65" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其他设备-最先进纳米量级</span>,
        children: <Form.Item name="Gongxin66" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=GongXinProductSales', {
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
			const exist = localStorage.getItem("currentUser");
			const uuid = JSON.parse(exist).uuid;
			if (uuid == undefined || uuid == null || uuid === '') {
				history.push('/auto_fill/user/login')
			}
			request('/api_test/save', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】工业产品销售" bordered items={items} />
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