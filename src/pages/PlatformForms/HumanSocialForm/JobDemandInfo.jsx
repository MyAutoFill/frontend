import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Select, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

const { TextArea } = Input;

export default function HumanSocialCompanyInfo(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();
  const [yewuqu, setYewuqu] = useState('')
  const [renyuanleibie, setRenyuanleibie] = useState('')
  const [renyuanleibie2, setRenyuanleibie2] = useState('')

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill_test/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('HumanSocialCompanyInfo')
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
      label: <span style={{fontSize: '16px'}}>招聘类型</span>,
      children: 
        <Form.Item name="jobDemand1">
          <Select
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择招聘类型"
            optionFilterProp="label"
            options={[
              {
                  value: '全职',
                  label: '全职',
              },
              {
                  value: '短期工',
                  label: '短期工',
              },
              {
                  value: '实习',
                  label: '实习',
              },
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>职位名称</span>,
      children: <Form.Item name="jobDemand2"><Input placeholder='请输入职位名称（如：人力资源经理）' size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>行政区</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_12">
          <Select
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择行政区"
            optionFilterProp="label"
            options={[
							{
								value: '环翠区',
								label: '环翠区',
							},
							{
								value: '高新区',
								label: '高新区',
							},
							{
								value: '经济区',
								label: '经济区',
							},
							{
								value: '临港区',
								label: '临港区',
							},
							{
								value: '威海火炬高技术产业开发区',
								label: '威海火炬高技术产业开发区',
							},
							{
								value: '文登区',
								label: '文登区',
							},
							{
								value: '荣成市',
								label: '荣成市',
							},
							{
								value: '乳山市',
								label: '乳山市',
							},
							{
								value: '市本级',
								label: '市本级',
							},
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>具体地址</span>,
      children: <Form.Item name="company_basicinfo_17"><Input placeholder='请输入具体地址' size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>职位类别</span>,
      children: <Form.Item name="jobDeman5"><Input size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>招聘人数</span>,
      children: <Form.Item name="jobDeman6"><Input placeholder='请输入招聘人数' size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>经验和学历 - 经验</span>,
      children: 
        <Form.Item name="jobDeman7">
          <Select
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择工作经验"
            optionFilterProp="label"
            options={[
              {
                value: '不限制',
                label: '不限制',
              },
              {
                value: '应届生',
                label: '应届生',
              },
              {
                value: '1年以下',
                label: '1年以下',
              },
              {
                value: '1-3年',
                label: '1-3年',
              },
              {
                value: '3-5年',
                label: '3-5年',
              },
              {
                value: '5-10年',
                label: '5-10年',
              },
              {
                value: '10年以上',
                label: '10年以上',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>经验和学历 - 学历</span>,
      children: 
        <Form.Item name="jobDeman8">
          <Select
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择学历"
            optionFilterProp="label"
            options={[
              {
                value: '不限制',
                label: '不限制',
              },
              {
                value: '中专/中技',
                label: '中专/中技',
              },
              {
                value: '高中',
                label: '高中',
              },
              {
                value: '大专',
                label: '大专',
              },
              {
                value: '本科',
                label: '本科',
              },
              {
                value: '硕士',
                label: '硕士',
              },
              {
                value: '博士',
                label: '博士',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>薪资范围</span>,
      children: 
        <>
          <Form.Item name="jobDeman9"><Input placeholder='最低薪资( 不能低于2200元 )' size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
           至 
          <Form.Item name="jobDeman10"><Input placeholder='最高薪资' size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 3
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>职位描述</span>,
      children: <Form.Item name="jobDeman11"><TextArea style={{ marginLeft: '10px', marginTop: '10px' }} rows={4} placeholder="请输入职位描述" /></Form.Item>,
      span: 3
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>年龄要求</span>,
      children: 
        <Form.Item name="jobDemand12">
          <Select
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择年龄要求"
            optionFilterProp="label"
            options={[
              {
                  value: '有年龄限制',
                  label: '有年龄限制',
              },
              {
                  value: '无年龄限制',
                  label: '无年龄限制',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=HumanSocialCompanyInfo', {
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
        history.push('/auto_fill_test/user/login')
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
          <Descriptions style={{width: '1300px'}} title="单位就业登记信息" bordered items={items} />
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