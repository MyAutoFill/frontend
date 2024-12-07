import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Input, Button, FloatButton, message, Table, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
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

export default function CompanyTotalSalary(props) {

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
      history.push('/auto_fill_test/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('CompanyTotalSalary')
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

  const data = [
    {
      key: '1',
      people_index: <span style={{fontSize: '16px'}}>一、从业人员</span>,
      people_this_year: <Form.Item name="company_employee_1"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_2"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>二、工资总额</span>,
      salary_this_year: <Form.Item name="company_employee_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_4"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '2',
      people_index: <span style={{fontSize: '16px'}}>从业人员期末人数</span>,
      people_this_year: <Form.Item name="company_employee_1"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_6"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>从业人员工资总额</span>,
      salary_this_year: <Form.Item name="company_employee_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_8"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '3',
      people_index: <span style={{fontSize: '16px'}}>其中：女性</span>,
      people_this_year: <Form.Item name="Statisitc_salary_9"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_10"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>其中：女性</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_12"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '4',
      people_index: <span style={{fontSize: '16px'}}>按人员类型分</span>,
      people_this_year: '',
      people_last_year: '',
      salary_index: <span style={{fontSize: '16px'}}>按人员类型分</span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '5',
      people_index: <span style={{fontSize: '16px'}}>在岗职工</span>,
      people_this_year: <Form.Item name="Statisitc_salary_13"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_14"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>在岗职工</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_16"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '6',
      people_index: <span style={{fontSize: '16px'}}>劳务派遣人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_17"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_18"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>劳务派遣人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '7',
      people_index: <span style={{fontSize: '16px'}}>其他从业人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_21"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_22"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>其他从业人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_23"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_24"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '8',
      people_index: <span style={{fontSize: '16px'}}>按职业类型分</span>,
      people_this_year: '',
      people_last_year: '',
      salary_index: <span style={{fontSize: '16px'}}>按职业类型分</span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '9',
      people_index: <span style={{fontSize: '16px'}}>中层及以上管理人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_25"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_26"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>中层及以上管理人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_28"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '10',
      people_index: <span style={{fontSize: '16px'}}>专业技术人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_29"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_30"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>专业技术人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_31"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_32"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '11',
      people_index: <span style={{fontSize: '16px'}}>办事人员和有关人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_33"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_34"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>办事人员和有关人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_36"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '12',
      people_index: <span style={{fontSize: '16px'}}>社会生产服务和生活服务人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_37"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_38"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>社会生产服务和生活服务人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '13',
      people_index: <span style={{fontSize: '16px'}}>生产制造及有关人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_41"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_42"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>生产制造及有关人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '14',
      people_index: <span style={{fontSize: '16px'}}>从业人员平均人数</span>,
      people_this_year: <Form.Item name="Statisitc_salary_45"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_46"><Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '15',
      people_index: <span style={{fontSize: '16px'}}>三、月平均工资</span>,
      people_this_year: '',
      people_last_year: '',
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '16',
      people_index: <span style={{fontSize: '16px'}}>从业人员月平均工资</span>,
      people_this_year: <Form.Item name="Statisitc_salary_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_48"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      people_index: <span style={{fontSize: '16px'}}>按人员类型分</span>,
      people_this_year: '',
      people_last_year: '',
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '17',
      people_index: <span style={{fontSize: '16px'}}>在岗职工</span>,
      people_this_year: <Form.Item name="Statisitc_salary_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_50"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>劳务派遣人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_52"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '18',
      people_index: <span style={{fontSize: '16px'}}>其他从业人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_54"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      people_index: <span style={{fontSize: '16px'}}>按职业类型分</span>,
      people_this_year: '',
      people_last_year: '',
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '19',
      people_index: <span style={{fontSize: '16px'}}>中层及以上管理人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_55"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_56"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>专业技术人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_58"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '20',
      people_index: <span style={{fontSize: '16px'}}>办事人员和有关人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_60"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}>社会生产服务和生活服务人员</span>,
      salary_this_year: <Form.Item name="Statisitc_salary_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_last_year: <Form.Item name="Statisitc_salary_62"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
    },
    {
      key: '21',
      people_index: <span style={{fontSize: '16px'}}>生产制造及有关人员</span>,
      people_this_year: <Form.Item name="Statisitc_salary_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      people_last_year: <Form.Item name="Statisitc_salary_64"><Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      salary_index: <span style={{fontSize: '16px'}}></span>,
      salary_this_year: '',
      salary_last_year: ''
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=CompanyTotalSalary', {
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
          <span style={{ fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span><br></br>
          <span style={{ fontSize: '17px' }}>【报表名称】单位从业人员及工资总额信息</span>
          <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
            <ColumnGroup title="单位从业人员及工资总额" boarded>
              <Column boarded title="指标名称" dataIndex="people_index" key="people_index" />
              <Column title="本年" dataIndex="people_this_year" key="people_this_year" />
              <Column title="上年同期" dataIndex="people_last_year" key="people_last_year" />
              <Column title="指标名称" dataIndex="salary_index" key="salary_index" />
              <Column title="本年" dataIndex="salary_this_year" key="salary_this_year" />
              <Column title="上年同期" dataIndex="salary_last_year" key="salary_last_year" />
            </ColumnGroup>
          </Table>
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