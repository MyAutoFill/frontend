import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'


export default function TechCompanyInfo() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData()
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
      children: <Form.Item name="Tech_Employee_1"><DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd01'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd03'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd25'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd21'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd26'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd14'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd14_0'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_16"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd05'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd18'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd06'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd07'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_24"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd08'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd09'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd31'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd32'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_32"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd33'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_34"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd34 '></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd35'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd36'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_40"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd27'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_42"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc236'></Input></Form.Item>,
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
      children: <Form.Item name="Tech_Employee_44"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd28'></Input></Form.Item>,
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
    request('/api/get_ratio_config?table=CompanyEmployeeInfo', {
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
          date: '2024-09',
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
          <Descriptions title="企业人员概况信息" bordered items={items} />
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
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}