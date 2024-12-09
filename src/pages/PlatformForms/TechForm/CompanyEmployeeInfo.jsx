import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
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

export default function CompanyEmployeeInfo(props) {

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
        reqRatioConfig('CompanyEmployeeInfo')
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
      label: <span style={{fontSize: '16px'}}>表号</span>,
      children: <span style={{fontSize: '16px'}}>GQ-003</span>,
      span: 3
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>制定机关</span>,
      children: <span style={{fontSize: '16px'}}>科学技术部</span>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>批准机关</span>,
      children: <span style={{fontSize: '16px'}}>国家统计局</span>,
      span: 3
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>批准文号</span>,
      children: <span style={{fontSize: '16px'}}>国统制〔2022〕11号</span>,
      span: 1
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>有效期至</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}></span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>一、从业人员数</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>从业人员期末人数</span>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd01</span>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_3"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：留学归国人员</span>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd03</span>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_5"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：外籍常驻人员</span>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd25</span>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：引进外籍专家</span>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd21</span>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_9"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年新增从业人员</span>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd26</span>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_11"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：吸纳高校应届毕业生</span>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd14</span>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_13"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：从事科研或科研辅助工作的应届毕业生</span>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd14_0</span>,
      span: 1
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_15"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>从业人员平均人数</span>,
      span: 1
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd05</span>,
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_17"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>二、从业人员构成</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>（一）按学历、学位及技能分</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>具有研究生学历（位）人员</span>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd18</span>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_19"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：博士</span>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd06</span>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_21"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：硕士</span>,
      span: 1
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd07</span>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_23"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>具有大学本科学历（位）人员</span>,
      span: 1
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd08</span>,
      span: 1
    },
    {
      key: '41',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_25"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>具有大学专科学历人员</span>,
      span: 1
    },
    {
      key: '43',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd09</span>,
      span: 1
    },
    {
      key: '44',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技能人员</span>,
      span: 1
    },
    {
      key: '46',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd31</span>,
      span: 1
    },
    {
      key: '47',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_29"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：高级技师（国家职业资格一级）</span>,
      span: 1
    },
    {
      key: '49',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd32</span>,
      span: 1
    },
    {
      key: '50',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_31"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：技师（国家职业资格二级）</span>,
      span: 1
    },
    {
      key: '52',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd33</span>,
      span: 1
    },
    {
      key: '53',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_33"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：高级技能人员（国家职业资格三级）</span>,
      span: 1
    },
    {
      key: '55',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd34 </span>,
      span: 1
    },
    {
      key: '56',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_35"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：中级技能人员（国家职业资格四级）</span>,
      span: 1
    },
    {
      key: '58',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd35</span>,
      span: 1
    },
    {
      key: '59',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_37"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：初级技能人员（国家职业资格五级）</span>,
      span: 1
    },
    {
      key: '61',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd36</span>,
      span: 1
    },
    {
      key: '62',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_39"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>（二）按职业类型分</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '63',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>中层及以上管理人员</span>,
      span: 1
    },
    {
      key: '64',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd27</span>,
      span: 1
    },
    {
      key: '65',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_41"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>研发费用</span>,
      span: 1
    },
    {
      key: '67',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc236</span>,
      span: 1
    },
    {
      key: '68',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>专业技术人员</span>,
      span: 1
    },
    {
      key: '70',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qd28</span>,
      span: 1
    },
    {
      key: '71',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_Employee_45"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=CompanyEmployeeInfo', {
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
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】企业人员概况信息" bordered items={items} />
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
              onClick={() => {window.location.href = '/auto_fill_test/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}