import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Select, Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Form } from 'antd';
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

export default function TechCompanyInfo(props) {

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
      label: <span style={{fontSize: '16px'}}>表号</span>,
      children: <span style={{fontSize: '16px'}}>GQ-001</span>,
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
      span: 13
    },
    {
      label: '',
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>已进区企业被批准入区时间</span>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb08</span>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业隶属关系</span>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb101</span>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_r9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>主要业务活动或主要产品</span>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb03_0</span>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>行业代码</span>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb03_1</span>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业执行会计标准类别</span>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb20_1</span>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_r10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业执行会计准则情况</span>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb20</span>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_r11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业注册时间</span>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb04</span>,
      span: 1
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择企业注册时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>注册资金</span>,
      span: 1
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb04_0</span>,
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>登记注册类型</span>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb06</span>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_r4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>企业投资信息填报</span>,
      children: <span style={{fontSize: '16px'}}>限港澳台商和外商投资企业填报，主要外资来源国或地区的国别（地区）名称代码及外资出资比例</span>,
      span: 3
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>国别或地区代码</span>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb06_1</span>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_c1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>出资比例</span>,
      span: 1
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb06_2</span>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业控股情况</span>,
      span: 1
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb18</span>,
      span: 1
    },
    {
      key: '41',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_r8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业集团情况</span>,
      span: 1
    },
    {
      key: '43',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb09</span>,
      span: 1
    },
    {
      label: '内容',
      children: 
        <Form.Item name="Statistic_CompanyInfo_58">
          <span style={{ width: '200px', marginLeft: '10px', fontSize: '16px' }}>限企业集团母公司及成员企业填写</span>
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="请选择企业控股情况"
            optionFilterProp="label"
            options={[
              {
                value: '集团母公司',
                label: '1.集团母公司（核心企业或集团总部）',
              },
              {
                value: '成员企业',
                label: '2.成员企业——请填直接上级法人统一社会信用代码（尚未领取统一社会信用代码的填原组织机构代码）',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>QB09如为2，请填直接上级法人</span>,
      span: 1
    },
    {
      key: '46',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb10</span>,
      span: 1
    },
    {
      key: '47',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>单位统一社会信用代码</span>,
      span: 1
    },
    {
      key: '49',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb10</span>,
      span: 1
    },
    {
      key: '50',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>或上级法人组织机构代码</span>,
      span: 1
    },
    {
      key: '52',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb10</span>,
      span: 1
    },
    {
      key: '53',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>是否为经过认定的高新技术企业</span>,
      span: 1
    },
    {
      key: '55',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb11</span>,
      span: 1
    },
    {
      key: '56',
      label: <span style={{fontSize: '16px'}}>内容</span>,
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
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>QB11如为是，高企认定证书编号</span>,
      span: 1
    },
    {
      key: '58',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb13</span>,
      span: 1
    },
    {
      key: '59',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业被认定为高新技术企业的时间</span>,
      span: 1
    },
    {
      key: '61',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb12</span>,
      span: 1
    },
    {
      key: '62',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '63',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>与科技企业孵化器关系</span>,
      span: 1
    },
    {
      key: '64',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb14</span>,
      span: 1
    },
    {
      key: '65',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_40"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>入孵时间</span>,
      span: 1
    },
    {
      key: '67',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb14_1</span>,
      span: 1
    },
    {
      key: '68',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择入孵时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '69',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>毕业时间</span>,
      span: 1
    },
    {
      key: '70',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb14_2</span>,
      span: 1
    },
    {
      key: '71',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择毕业时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '72',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>境外上市情况</span>,
      span: 1
    },
    {
      key: '73',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb15</span>,
      span: 1
    },
    {
      key: '74',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_46"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>证券代码</span>,
      span: 1
    },
    {
      key: '76',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb15_1</span>,
      span: 1
    },
    {
      key: '77',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_48"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>上市时间</span>,
      span: 1
    },
    {
      key: '79',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb15_2</span>,
      span: 1
    },
    {
      key: '80',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <DatePicker format="YYYY" disabled={disableVar} size='large' placeholder='请选择上市时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '81',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>年末市值</span>,
      span: 1
    },
    {
      key: '82',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb15_5</span>,
      span: 1
    },
    {
      key: '83',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_52"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业所属技术领域</span>,
      span: 1
    },
    {
      key: '85',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb16</span>,
      span: 1
    },
    {
      key: '86',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_54"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业核心技术所属</span>,
      span: 1
    },
    {
      key: '88',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb16_1</span>,
      span: 1
    },
    {
      key: '89',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_56"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>《国家重点支持的高新技术领域》</span>,
      span: 1
    },
    {
      key: '91',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qb16_1</span>,
      span: 1
    },
    {
      key: '92',
      label: <span style={{fontSize: '16px'}}>内容</span>,
      children: <Form.Item name="Tech_commpanyInfo_58"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=TechCompanyInfo', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】企业概况信息" bordered items={items} />
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