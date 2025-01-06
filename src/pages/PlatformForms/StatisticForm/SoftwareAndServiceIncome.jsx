import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select } from 'antd';
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

export default function SoftwareAndServiceIncome(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

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
			label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
			children: <Form.Item name='company_basicinfo_1' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
    },
    {
			label: <span style={{fontSize: '16px'}}>单位详细名称</span>,
			children: <Form.Item name='company_basicinfo_2' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>软件和信息技术服务收入合计</span>,
        children: <Form.Item name='Gongxin_basic3' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>软件和信息技术服务收入合计 - 2</span>,
        children: <Form.Item name='Gongxin_basic4' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-日常运维及运营服务收入</span>,
        children: <Form.Item name='Gongxin_basic5' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-日常运维及运营服务收入 - 2</span>,
        children: <Form.Item name='Gongxin_basic6' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-业务出口收入</span>,
        children: <Form.Item name='Gongxin_basic7' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-业务出口收入 - 2</span>,
        children: <Form.Item name='Gongxin_basic8' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-外包出去业务对应的收入</span>,
        children: <Form.Item name='Gongxin_basic9' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-外包出去业务对应的收入 - 2</span>,
        children: <Form.Item name='Gongxin_basic10' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-出售给个人收入</span>,
        children: <Form.Item name='Gongxin_basic11' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>其中-出售给个人收入 - 2</span>,
        children: <Form.Item name='Gongxin_basic12' ><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>联系电话</span>,
        children: <Form.Item name='Gongxin_basic13' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>报出日期</span>,
        children: <Form.Item name='Gongxin_basic14' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    }
	];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=SoftwareAndServiceIncome', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】软件和信息技术服务收入情况" bordered items={items} />
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 0,
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