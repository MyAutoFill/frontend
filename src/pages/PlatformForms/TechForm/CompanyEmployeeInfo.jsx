import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


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
      label: '表号',
      children: 'GQ-003',
      span: 3
    },
    {
      key: '2',
      label: '制定机关',
      children: '科学技术部',
      span: 1
    },
    {
      key: '3',
      label: '批准机关',
      children: '国家统计局',
      span: 3
    },
    {
      key: '4',
      label: '批准文号',
      children: '国统制〔2022〕11号',
      span: 1
    },
    {
      key: '5',
      label: '有效期至',
      children: <DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      label: '一、从业人员数',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '从业人员期末人数',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: 'qd01',
      span: 1
    },
    {
      key: '8',
      label: '数量',
      children: <Form.Item name="Tech_Employee_3"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '其中：留学归国人员',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: 'qd03',
      span: 1
    },
    {
      key: '11',
      label: '数量',
      children: <Form.Item name="Tech_Employee_5"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '其中：外籍常驻人员',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: 'qd25',
      span: 1
    },
    {
      key: '14',
      label: '数量',
      children: <Form.Item name="Tech_Employee_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '其中：引进外籍专家',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: 'qd21',
      span: 1
    },
    {
      key: '17',
      label: '数量',
      children: <Form.Item name="Tech_Employee_9"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '其中：当年新增从业人员',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: 'qd26',
      span: 1
    },
    {
      key: '20',
      label: '数量',
      children: <Form.Item name="Tech_Employee_11"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '指标名称',
      children: '其中：吸纳高校应届毕业生',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: 'qd14',
      span: 1
    },
    {
      key: '23',
      label: '数量',
      children: <Form.Item name="Tech_Employee_13"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '其中：从事科研或科研辅助工作的应届毕业生',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: 'qd14_0',
      span: 1
    },
    {
      key: '26',
      label: '数量',
      children: <Form.Item name="Tech_Employee_15"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '从业人员平均人数',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: 'qd05',
      span: 1
    },
    {
      key: '29',
      label: '数量',
      children: <Form.Item name="Tech_Employee_17"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '二、从业人员构成',
      children: '',
      span: 3
    },
    {
      label: '（一）按学历、学位及技能分',
      children: '',
      span: 3
    },
    {
      key: '30',
      label: '指标名称',
      children: '具有研究生学历（位）人员',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: 'qd18',
      span: 1
    },
    {
      key: '32',
      label: '数量',
      children: <Form.Item name="Tech_Employee_19"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '指标名称',
      children: '其中：博士',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: 'qd06',
      span: 1
    },
    {
      key: '35',
      label: '数量',
      children: <Form.Item name="Tech_Employee_21"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '其中：硕士',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: 'qd07',
      span: 1
    },
    {
      key: '38',
      label: '数量',
      children: <Form.Item name="Tech_Employee_23"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '具有大学本科学历（位）人员',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: 'qd08',
      span: 1
    },
    {
      key: '41',
      label: '数量',
      children: <Form.Item name="Tech_Employee_25"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '具有大学专科学历人员',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: 'qd09',
      span: 1
    },
    {
      key: '44',
      label: '数量',
      children: <Form.Item name="Tech_Employee_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: '技能人员',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: 'qd31',
      span: 1
    },
    {
      key: '47',
      label: '数量',
      children: <Form.Item name="Tech_Employee_29"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '其中：高级技师（国家职业资格一级）',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: 'qd32',
      span: 1
    },
    {
      key: '50',
      label: '数量',
      children: <Form.Item name="Tech_Employee_31"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '其中：技师（国家职业资格二级）',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: 'qd33',
      span: 1
    },
    {
      key: '53',
      label: '数量',
      children: <Form.Item name="Tech_Employee_33"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '其中：高级技能人员（国家职业资格三级）',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: 'qd34 ',
      span: 1
    },
    {
      key: '56',
      label: '数量',
      children: <Form.Item name="Tech_Employee_35"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: '其中：中级技能人员（国家职业资格四级）',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: 'qd35',
      span: 1
    },
    {
      key: '59',
      label: '数量',
      children: <Form.Item name="Tech_Employee_37"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: '指标名称',
      children: '其中：初级技能人员（国家职业资格五级）',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: 'qd36',
      span: 1
    },
    {
      key: '62',
      label: '数量',
      children: <Form.Item name="Tech_Employee_39"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '（二）按职业类型分',
      children: '',
      span: 3
    },
    {
      key: '63',
      label: '指标名称',
      children: '中层及以上管理人员',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: 'qd27',
      span: 1
    },
    {
      key: '65',
      label: '数量',
      children: <Form.Item name="Tech_Employee_41"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: '指标名称',
      children: '研发费用',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: 'qc236',
      span: 1
    },
    {
      key: '68',
      label: '数量',
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '专业技术人员',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: 'qd28',
      span: 1
    },
    {
      key: '71',
      label: '数量',
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
          <Descriptions style={{width: '1300px'}} title="企业人员概况信息" bordered items={items} />
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