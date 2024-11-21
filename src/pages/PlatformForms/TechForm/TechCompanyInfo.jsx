import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Select, Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function TechCompanyInfo(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('TechCompanyInfo')
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
      children: 'GQ-001',
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
      span: 13
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '已进区企业被批准入区时间',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: 'qb08',
      span: 1
    },
    {
      key: '8',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '企业隶属关系',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: 'qb101',
      span: 1
    },
    {
      key: '11',
      label: '内容',
      children: <Form.Item name="company_basicinfo_r9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '主要业务活动或主要产品',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: 'qb03_0',
      span: 1
    },
    {
      key: '14',
      label: '内容',
      children: <Form.Item name="company_basicinfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '行业代码',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: 'qb03_1',
      span: 1
    },
    {
      key: '17',
      label: '内容',
      children: <Form.Item name="company_basicinfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '企业执行会计标准类别',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: 'qb20_1',
      span: 1
    },
    {
      key: '20',
      label: '内容',
      children: <Form.Item name="company_basicinfo_r10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '指标名称',
      children: '企业执行会计准则情况',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: 'qb20',
      span: 1
    },
    {
      key: '23',
      label: '内容',
      children: <Form.Item name="company_basicinfo_r11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '企业注册时间',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: 'qb04',
      span: 1
    },
    {
      key: '26',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择企业注册时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '注册资金',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: 'qb04_0',
      span: 1
    },
    {
      key: '29',
      label: '内容',
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: '指标名称',
      children: '登记注册类型',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: 'qb06',
      span: 1
    },
    {
      key: '32',
      label: '内容',
      children: <Form.Item name="company_basicinfo_r4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '企业投资信息填报',
      children: '限港澳台商和外商投资企业填报，主要外资来源国或地区的国别（地区）名称代码及外资出资比例',
      span: 3
    },
    {
      key: '33',
      label: '指标名称',
      children: '国别或地区代码',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: 'qb06_1',
      span: 1
    },
    {
      key: '35',
      label: '内容',
      children: <Form.Item name="company_basicinfo_c1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '出资比例',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: 'qb06_2',
      span: 1
    },
    {
      key: '38',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '企业控股情况',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: 'qb18',
      span: 1
    },
    {
      key: '41',
      label: '内容',
      children: <Form.Item name="company_basicinfo_r8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '企业集团情况',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: 'qb09',
      span: 1
    },
    {
      key: '44',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: 'QB09如为2，请填直接上级法人',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: 'qb10',
      span: 1
    },
    {
      key: '47',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '单位统一社会信用代码',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: 'qb10',
      span: 1
    },
    {
      key: '50',
      label: '内容',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '或上级法人组织机构代码',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: 'qb10',
      span: 1
    },
    {
      key: '53',
      label: '内容',
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '是否为经过认定的高新技术企业',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: 'qb11',
      span: 1
    },
    {
      key: '56',
      label: '内容',
      children:         
        <Form.Item name="Tech_commpanyInfo_30">
          <Select
            showSearch
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否领取"
            optionFilterProp="label"
            options={[
              {
                value: '是',
                label: '是',
              },
              {
                value: '否',
                label: '否',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: 'QB11如为是，高企认定证书编号',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: 'qb13',
      span: 1
    },
    {
      key: '59',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: '指标名称',
      children: '企业被认定为高新技术企业的时间',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: 'qb12',
      span: 1
    },
    {
      key: '62',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '63',
      label: '指标名称',
      children: '与科技企业孵化器关系',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: 'qb14',
      span: 1
    },
    {
      key: '65',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_40"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: '指标名称',
      children: '入孵时间',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: 'qb14_1',
      span: 1
    },
    {
      key: '68',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择入孵时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '毕业时间',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: 'qb14_2',
      span: 1
    },
    {
      key: '71',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择毕业时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '72',
      label: '指标名称',
      children: '境外上市情况',
      span: 1
    },
    {
      key: '73',
      label: '代码',
      children: 'qb15',
      span: 1
    },
    {
      key: '74',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_46"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: '指标名称',
      children: '证券代码',
      span: 1
    },
    {
      key: '76',
      label: '代码',
      children: 'qb15_1',
      span: 1
    },
    {
      key: '77',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_48"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: '指标名称',
      children: '上市时间',
      span: 1
    },
    {
      key: '79',
      label: '代码',
      children: 'qb15_2',
      span: 1
    },
    {
      key: '80',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择上市时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '81',
      label: '指标名称',
      children: '年末市值',
      span: 1
    },
    {
      key: '82',
      label: '代码',
      children: 'qb15_5',
      span: 1
    },
    {
      key: '83',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_52"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: '指标名称',
      children: '企业所属技术领域',
      span: 1
    },
    {
      key: '85',
      label: '代码',
      children: 'qb16',
      span: 1
    },
    {
      key: '86',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_54"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: '指标名称',
      children: '企业核心技术所属',
      span: 1
    },
    {
      key: '88',
      label: '代码',
      children: 'qb16_1',
      span: 1
    },
    {
      key: '89',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_56"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: '指标名称',
      children: '《国家重点支持的高新技术领域》',
      span: 1
    },
    {
      key: '91',
      label: '代码',
      children: 'qb16_1',
      span: 1
    },
    {
      key: '92',
      label: '内容',
      children: <Form.Item name="Tech_commpanyInfo_58"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=TechCompanyInfo', {
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
          <Descriptions style={{width: '1300px'}} title="企业概况信息" bordered items={items} />
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