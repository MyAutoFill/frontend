import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form, Select } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function NewSheBao(props) {

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
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('NewSheBao')
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
      label: '姓名',
      children: <Form.Item name="HumanSocial_NewSheBao_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '性别',
      children: <Form.Item name="HumanSocial_NewSheBao_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '民族',
      children: <Form.Item name="HumanSocial_NewSheBao_3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '证件类型',
      children: <Form.Item name="company_basicinfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '证件号码',
      children: <Form.Item name="HumanSocial_NewSheBao_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '手机号码',
      children: <Form.Item name="HumanSocial_NewSheBao_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '通讯地址',
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '8',
      label: '邮政编码',
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '10',
      label: '档案出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择档案出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '11',
      label: '文化程度',
      children: <Form.Item name="HumanSocial_NewSheBao_11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '所学专业',
      children: <Form.Item name="HumanSocial_NewSheBao_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '健康状况',
      children: <Form.Item name="HumanSocial_NewSheBao_13"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '婚姻状况',
      children: <Form.Item name="HumanSocial_NewSheBao_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '户口性质',
      children: <Form.Item name="HumanSocial_NewSheBao_15"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '户口所在地',
      children: <Form.Item name="HumanSocial_NewSheBao_16"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '户口所在地省级',
      children: <Form.Item name="HumanSocial_NewSheBao_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '户口所在地市级',
      children: <Form.Item name="HumanSocial_NewSheBao_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '户口所在地县级',
      children: <Form.Item name="HumanSocial_NewSheBao_19"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '户口所在地补充信息',
      children: <Form.Item name="HumanSocial_NewSheBao_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '用工形式',
      children: <Form.Item name="HumanSocial_NewSheBao_21"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '专业技术职务级别',
      children: <Form.Item name="HumanSocial_NewSheBao_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '宗教信仰',
      children: <Form.Item name="HumanSocial_NewSheBao_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '国家职业资格等级',
      children: <Form.Item name="HumanSocial_NewSheBao_24"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: '个人身份',
      children: <Form.Item name="HumanSocial_NewSheBao_25"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: '行政职务',
      children: <Form.Item name="HumanSocial_NewSheBao_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '联系人姓名',
      children: <Form.Item name="HumanSocial_NewSheBao_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '28',
      label: '联系人电话',
      children: <Form.Item name="HumanSocial_NewSheBao_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      label: '新增人员参保信息',
      children: '-',
      span: 3,
    },
    {
      key: '29',
      label: '个人编号',
      children: <Form.Item name="HumanSocial_NewSheBao_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: '增员年月',
      children: <Form.Item name="HumanSocial_NewSheBao_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '31',
      label: '缴费工资',
      children: <Form.Item name="HumanSocial_NewSheBao_31"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: '参加工作日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择参加工作日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '33',
      label: '街道编号',
      children: <Form.Item name="HumanSocial_NewSheBao_33"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: '街道名称',
      children: <Form.Item name="HumanSocial_NewSheBao_34"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '社区编号',
      children: <Form.Item name="HumanSocial_NewSheBao_35"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '社区名称',
      children: <Form.Item name="HumanSocial_NewSheBao_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '37',
      label: '险种标志',
      children: <Form.Item name="HumanSocial_NewSheBao_37"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: '缴费人员类别',
      children: <Form.Item name="HumanSocial_NewSheBao_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '参保日期',
      children: <Form.Item name="HumanSocial_NewSheBao_39"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '40',
      label: '缴费工资',
      children: <Form.Item name="HumanSocial_NewSheBao_40"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '缴费基数',
      children: <Form.Item name="HumanSocial_NewSheBao_41"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      label: '人员信息变更',
      children: '-',
      span: 3
    },
    {
      label: '个人关键信息',
      children: '-',
      span: 3
    },
    {
      key: '42',
      label: '社会保障号码',
      children: <Form.Item name="HumanSocial_NewSheBao_42"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '43',
      label: '姓名',
      children: <Form.Item name="HumanSocial_NewSheBao_43"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '44',
      label: '证件类型',
      children: <Form.Item name="HumanSocial_NewSheBao_44"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '45',
      label: '有效证件号码',
      children: <Form.Item name="HumanSocial_NewSheBao_45"><Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: '非关键信息',
      children: '-',
      span: 3
    },
    {
      key: '46',
      label: '性别',
      children: <Form.Item name="HumanSocial_NewSheBao_46"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '47',
      label: '出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '48',
      label: '档案出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择档案出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '49',
      label: '民族',
      children: <Form.Item name="HumanSocial_NewSheBao_49"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '50',
      label: '政治面貌',
      children: <Form.Item name="HumanSocial_NewSheBao_50"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '51',
      label: '手机号码',
      children: <Form.Item name="HumanSocial_NewSheBao_51"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '52',
      label: '联系人姓名',
      children: <Form.Item name="HumanSocial_NewSheBao_52"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '53',
      label: '联系人电话',
      children: <Form.Item name="HumanSocial_NewSheBao_53"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: '减员',
      children: '-',
      span: 3
    },
    {
      key: '54',
      label: '姓名',
      children: <Form.Item name="HumanSocial_NewSheBao_54"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '55',
      label: '社会保障号码',
      children: <Form.Item name="HumanSocial_NewSheBao_55"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '56',
      label: '减员年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择减员年月' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '57',
      label: '减员原因',
      children: <Form.Item name="HumanSocial_NewSheBao_57"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '58',
      label: '状态发生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态发生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      key: '59',
      label: '单位信息变更',
      children: '-',
      span: 3
    },
    {
      key: '60',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '61',
      label: '单位名称',
      children: <Form.Item name="company_basicinfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '62',
      label: '所属行政区划',
      children: <Form.Item name="HumanSocial_NewSheBao_61"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '63',
      label: '行业代码',
      children: <Form.Item name="company_basicinfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '64',
      label: '行业代码小类',
      children: <Form.Item name="HumanSocial_NewSheBao_63"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '65',
      label: '工商登记执照种类',
      children: <Form.Item name="HumanSocial_NewSheBao_64"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '66',
      label: '工商登记证发证日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态发证日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '67',
      label: '工商登记有效期（开始时间）',
      children: <Form.Item name="HumanSocial_NewSheBao_66"><DatePicker size='large' placeholder='请选择开始时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '68',
      label: '工商登记有效期限（年）',
      children: <Form.Item name="company_basicinfo_9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '69',
      label: '工商营业执照号码',
      children: <Form.Item name="HumanSocial_NewSheBao_68"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '70',
      label: '执照有效起始日期',
      children: <Form.Item name="HumanSocial_NewSheBao_69"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态起始日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '71',
      label: '执照有效终止日期',
      children: <Form.Item name="HumanSocial_NewSheBao_70"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态终止日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '72',
      label: '批准文号',
      children: <Form.Item name="HumanSocial_NewSheBao_71"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '73',
      label: '批准日期',
      children: <Form.Item name="HumanSocial_NewSheBao_72"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '74',
      label: '组织机构代码',
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '75',
      label: '经营范围',
      children: <Form.Item name="company_basicinfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '76',
      label: '隶属关系',
      children: 
				<Form.Item name="company_basicinfo_r9">
					<Select
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择隶属关系"
						optionFilterProp="label"
						options={[
							{
								value: '中央',
								label: '中央',
							},
							{
								value: '省',
								label: '省',
							},
							{
								value: '市、地区',
								label: '市、地区',
							},
							{
								value: '区',
								label: '区',
							},
							{
								value: '县',
								label: '县',
							},
							{
								value: '街道',
								label: '街道',
							},
							{
								value: '镇',
								label: '镇',
							},
							{
								value: '乡',
								label: '乡',
							},
							{
								value: '居民委员会',
								label: '居民委员会',
							},
							{
								value: '村民委员会',
								label: '村民委员会',
							},
							{
								value: '军队',
								label: '军队',
							},
							{
								value: '其他',
								label: '其他',
							}
						]}
					/>
				</Form.Item>,
      span: 1
    },
    {
      key: '77',
      label: '经济类型',
      children: 
        <Form.Item name="CompanyInfoChange_4">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择经济类型"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '内资',
                label: '内资',
              },
              {
                value: '国有全资',
                label: '国有全资',
              },
              {
                value: '集体全资',
                label: '集体全资',
              },
              {
                value: '股份合作',
                label: '股份合作',
              },
              {
                value: '国有联营',
                label: '国有联营',
              },
              {
                value: '集体联营',
                label: '集体联营',
              },
              {
                value: '国有与集体联营',
                label: '国有与集体联营',
              },
              {
                value: '其他联营',
                label: '其他联营',
              },
              {
                value: '国有独资（公司）',
                label: '国有独资（公司）',
              },
              {
                value: '其他有限责任公司（公司）',
                label: '其他有限责任公司（公司）',
              },
              {
                value: '股份有限（公司）',
                label: '股份有限（公司）',
              },
              {
                value: '私有独资',
                label: '私有独资',
              },
              {
                value: '私有合伙',
                label: '私有合伙',
              },
              {
                value: '私营有限责任（公司）',
                label: '私营有限责任（公司）',
              },
              {
                value: '私营股份有限（公司）',
                label: '私营股份有限（公司）',
              },
              {
                value: '个体经营',
                label: '个体经营',
              },
              {
                value: '其他私有',
                label: '其他私有',
              },
              {
                value: '其他内资',
                label: '其他内资',
              },
              {
                value: '内地和港、澳。台合资',
                label: '内地和港、澳。台合资',
              },
              {
                value: '内地和港、澳。台合作',
                label: '内地和港、澳。台合作',
              },
              {
                value: '港、澳。台独资',
                label: '港、澳。台独资',
              },
              {
                value: '港、澳。台投资股份有限（公司）',
                label: '港、澳。台投资股份有限（公司）',
              },
              {
                value: '其他港、澳。台投资',
                label: '其他港、澳。台投资',
              },
              {
                value: '中外合资',
                label: '中外合资',
              },
              {
                value: '中外合作',
                label: '中外合作',
              },
              {
                value: '外资',
                label: '外资',
              },
              {
                value: '国外投资股份有限（公司）',
                label: '国外投资股份有限（公司）',
              },
              {
                value: '其他国外投资',
                label: '其他国外投资',
              },
              {
                value: '其他',
                label: '其他',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: '经济类型明细',
      children: 
        <Form.Item name="HumanSocial_NewSheBao_77">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择经济类型明细"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '内资',
                label: '内资',
              },
              {
                value: '国有全资',
                label: '国有全资',
              },
              {
                value: '集体全资',
                label: '集体全资',
              },
              {
                value: '股份合作',
                label: '股份合作',
              },
              {
                value: '国有联营',
                label: '国有联营',
              },
              {
                value: '集体联营',
                label: '集体联营',
              },
              {
                value: '国有与集体联营',
                label: '国有与集体联营',
              },
              {
                value: '其他联营',
                label: '其他联营',
              },
              {
                value: '国有独资（公司）',
                label: '国有独资（公司）',
              },
              {
                value: '其他有限责任公司（公司）',
                label: '其他有限责任公司（公司）',
              },
              {
                value: '股份有限（公司）',
                label: '股份有限（公司）',
              },
              {
                value: '私有独资',
                label: '私有独资',
              },
              {
                value: '私有合伙',
                label: '私有合伙',
              },
              {
                value: '私营有限责任（公司）',
                label: '私营有限责任（公司）',
              },
              {
                value: '私营股份有限（公司）',
                label: '私营股份有限（公司）',
              },
              {
                value: '个体经营',
                label: '个体经营',
              },
              {
                value: '其他私有',
                label: '其他私有',
              },
              {
                value: '其他内资',
                label: '其他内资',
              },
              {
                value: '内地和港、澳。台合资',
                label: '内地和港、澳。台合资',
              },
              {
                value: '内地和港、澳。台合作',
                label: '内地和港、澳。台合作',
              },
              {
                value: '港、澳。台独资',
                label: '港、澳。台独资',
              },
              {
                value: '港、澳。台投资股份有限（公司）',
                label: '港、澳。台投资股份有限（公司）',
              },
              {
                value: '其他港、澳。台投资',
                label: '其他港、澳。台投资',
              },
              {
                value: '中外合资',
                label: '中外合资',
              },
              {
                value: '中外合作',
                label: '中外合作',
              },
              {
                value: '外资',
                label: '外资',
              },
              {
                value: '国外投资股份有限（公司）',
                label: '国外投资股份有限（公司）',
              },
              {
                value: '其他国外投资',
                label: '其他国外投资',
              },
              {
                value: '其他',
                label: '其他',
              },
              {
                value: '社会化管理（住院）',
                label: '社会化管理（住院）',
              },
              {
                value: '灵活就业人员（基本）',
                label: '灵活就业人员（基本）',
              },
              {
                value: '社会化管理（基本）',
                label: '社会化管理（基本）',
              },
              {
                value: '自愿参加医疗保险（基本）',
                label: '自愿参加医疗保险（基本）',
              },
              {
                value: '县以上集体企业',
                label: '县以上集体企业',
              },
              {
                value: '城镇小集体企业',
                label: '城镇小集体企业',
              },
              {
                value: '灵活就业人员（住院）',
                label: '灵活就业人员（住院）',
              },
              {
                value: '自愿参加医疗保险（住院）',
                label: '自愿参加医疗保险（住院）',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '79',
      label: '单位类型',
      children: <Form.Item name="company_basicinfo_r3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '80',
      label: '注册资本',
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '81',
      label: '其他登记证件种类',
      children: 
        <Form.Item name="HumanSocial_NewSheBao_80">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择其他登记证件种类"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '联合行医执照',
                label: '联合行医执照',
              },
              {
                value: '社会办医行医执照',
                label: '社会办医行医执照',
              },
              {
                value: '个体行医执照',
                label: '个体行医执照',
              },
              {
                value: '特种行业执照',
                label: '特种行业执照',
              },
              {
                value: '律师事务所执照许可证',
                label: '律师事务所执照许可证',
              },
              {
                value: '民办非企业单位登记证书',
                label: '民办非企业单位登记证书',
              },
              {
                value: '社会团体法人登记证书',
                label: '社会团体法人登记证书',
              },
              {
                value: '机关事业单位登记',
                label: '机关事业单位登记',
              },
              {
                value: '外地驻青办事机构登记证',
                label: '外地驻青办事机构登记证',
              },
              {
                value: '事业单位法人证书',
                label: '事业单位法人证书',
              },
              {
                value: '青岛市非正规就业劳动组织证书',
                label: '青岛市非正规就业劳动组织证书',
              },
              {
                value: '外国（地区）企业常驻代表机构登记证',
                label: '外国（地区）企业常驻代表机构登记证',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '82',
      label: '其他登记证件号码',
      children: <Form.Item name="HumanSocial_NewSheBao_81"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '83',
      label: '单位成立日期',
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker size='large' placeholder='请选择成立日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      key: '84',
      label: '地税机构',
      children: <Form.Item name="HumanSocial_NewSheBao_83"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '85',
      label: '地税税号',
      children: <Form.Item name="HumanSocial_NewSheBao_84"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '86',
      label: '批准成立单位',
      children: <Form.Item name="HumanSocial_NewSheBao_85"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: '电子邮箱',
      children: <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '88',
      label: '单位地址',
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '89',
      label: '邮政编码',
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: '联系人',
      children: <Form.Item name="HumanSocial_NewSheBao_89"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '91',
      label: '状态批准日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1,
    },
    {
      key: '92',
      label: '法人单位ID',
      children: <Form.Item name="HumanSocial_NewSheBao_91"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '93',
      label: '法人姓名',
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '94',
      label: '法人证件类型',
      children: 
        <Form.Item name="company_basicinfo_27">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人证件类型"
            optionFilterProp="label"
            options={[
              {
                value: '居民身份证（户口簿）',
                label: '居民身份证（户口簿）',
              },
              {
                value: '中国人民解放军军官证',
                label: '中国人民解放军军官证',
              },
              {
                value: '中国人民武装警察警官证',
                label: '中国人民武装警察警官证',
              },
              {
                value: '香港特区护照/港澳居民往来内地通行证',
                label: '香港特区护照/港澳居民往来内地通行证',
              },
              {
                value: '澳门特区护照/港澳居民往来内地通行证',
                label: '澳门特区护照/港澳居民往来内地通行证',
              },
              {
                value: '台湾居民往来大陆通行证',
                label: '台湾居民往来大陆通行证',
              },
              {
                value: '外国人永久居留身份',
                label: '外国人永久居留身份',
              },
              {
                value: '护照',
                label: '护照',
              },
              {
                value: '残疾人证',
                label: '残疾人证',
              },
              {
                value: '军烈属证明',
                label: '军烈属证明',
              },
              {
                value: '外国人工作许可证',
                label: '外国人工作许可证',
              },
              {
                value: '外国常驻记者证',
                label: '外国常驻记者证',
              },
              {
                value: '回国（来华）定居专家证',
                label: '回国（来华）定居专家证',
              },
              {
                value: '港澳居民居住证',
                label: '港澳居民居住证',
              },
              {
                value: '台湾居民居住证',
                label: '台湾居民居住证',
              },
              {
                value: '社会保障卡',
                label: '社会保障卡',
              },
              {
                value: '其他身份证件',
                label: '其他身份证件',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '95',
      label: '法人证件号码',
      children: <Form.Item name="company_basicinfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '96',
      label: '法人联系电话',
      children: <Form.Item name="company_basicinfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '97',
      label: '法人所任职务',
      children: <Form.Item name="HumanSocial_NewSheBao_96"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '98',
      label: '投资国家或地区',
      children: <Form.Item name="HumanSocial_NewSheBao_97"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '99',
      label: '特殊情况说明',
      children: <Form.Item name="HumanSocial_NewSheBao_98"><Input disabled={disableVar} size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=NewSheBao', {
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
          <Descriptions style={{width: '1300px'}} title="新增社保参保人员信息" bordered items={items} />
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