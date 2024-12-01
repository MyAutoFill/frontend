import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Form, Input, Button, FloatButton, message, Table} from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function PropertyDebtForm(props) {

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
        reqRatioConfig('PropertyDebtForm')
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
      project_name: '货币资金',
      code: '1',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_1"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      project_name: '短期投资',
      code: '2',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_2"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      project_name: '应收票据',
      code: '3',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_3"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      project_name: '应收股利',
      code: '4',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_4"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      project_name: '应收利息',
      code: '5',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_5"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      project_name: '应收账款',
      code: '6',
      normal_this_month: <Form.Item rules={[{required: true}]} name="FinanceStatusInfo_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_6"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      project_name: '其他应收款',
      code: '7',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_7"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_7"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      project_name: '预付账款',
      code: '8',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_8"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      project_name: '应收补贴款',
      code: '9',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_9"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      project_name: '存货',
      code: '10',
      normal_this_month: <Form.Item rules={[{required: true}]} name="FinanceStatusInfo_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_10"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      project_name: '待摊费用',
      code: '11',
      normal_this_month: <Form.Item rules={[{required: true}]} name="company_research_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_11"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      project_name: '一年内到期的长期债权投资',
      code: '12',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_12"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      project_name: '其他流动资产',
      code: '13',
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_13"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      project_name: '长期股权投资',
      code: '14',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_14"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      project_name: '长期债权投资',
      code: '15',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_15"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      project_name: '固定资产原价',
      code: '16',
      normal_this_month: <Form.Item rules={[{required: false}]} name="FinanceStatusInfo_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_16"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      project_name: '累计折旧',
      code: '17',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_17"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      project_name: '固定资产减值准备',
      code: '18',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_18"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_18"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      project_name: '工程物资',
      code: '19',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_19"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      project_name: '在建工程',
      code: '20',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      project_name: '固定资产清理',
      code: '21',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_21"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      project_name: '无形资产',
      code: '22',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_24"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_22"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      project_name: '长期待摊费用',
      code: '23',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_research_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_23"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      project_name: '其他长期资产',
      code: '24',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_24"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_24"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      project_name: '递延税款借项',
      code: '25',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_25"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      project_name: '短期借款',
      code: '26',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_26"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      project_name: '应付票据',
      code: '27',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_27"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      project_name: '应付账款',
      code: '28',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_28"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_28"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      project_name: '预收账款',
      code: '29',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_29"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      project_name: '应付工资',
      code: '30',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_employee_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_30"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      project_name: '应付福利费',
      code: '31',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_31"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_31"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      project_name: '应付股利',
      code: '32',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_32"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      project_name: '应交税金',
      code: '33',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      project_name: '其他应交款',
      code: '34',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_34"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_34"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      project_name: '其他应付款',
      code: '35',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_35"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      project_name: '预提费用',
      code: '36',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_36"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_36"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      project_name: '预计负债',
      code: '37',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_37"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      project_name: '一年内到期的长期负债',
      code: '38',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_38"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      project_name: '其他流动负债',
      code: '39',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_39"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      project_name: '长期借款',
      code: '40',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      project_name: '应付债券',
      code: '41',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_41"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '42',
      project_name: '长期应付款',
      code: '42',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_42"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_42"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '43',
      project_name: '专项应付款',
      code: '43',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_43"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '44',
      project_name: '其他长期负债',
      code: '44',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '45',
      project_name: '递延税款贷项',
      code: '45',
      normal_this_month: <Form.Item rules={[{required: false}]} name="cash_flow_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '46',
      project_name: '实收资本(或股本)',
      code: '46',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_46"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '47',
      project_name: '已归还投资',
      code: '47',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_47"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '48',
      project_name: '资本公积',
      code: '48',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_48"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_48"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '49',
      project_name: '盈余公积',
      code: '49',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_49"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '50',
      project_name: '法定公益金',
      code: '50',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_50"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_50"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '51',
      project_name: '未分配利润',
      code: '51',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_51"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '52',
      project_name: '长期投资合计',
      code: '52',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_52"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_52"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '53',
      project_name: '长期负债合计',
      code: '53',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_53"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '54',
      project_name: '固定资产净额',
      code: '54',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_54"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_54"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '55',
      project_name: '固定资产合计',
      code: '55',
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_22"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_55"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '56',
      project_name: '交易性金融资产',
      code: '56',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_56"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_56"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '57',
      project_name: '交易性金融负债',
      code: '57',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_57"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '58',
      project_name: '衍生金融资产',
      code: '58',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_58"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_58"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '59',
      project_name: '衍生金融负债',
      code: '59',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_59"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '60',
      project_name: '应收款项融资',
      code: '60',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_60"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_60"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '61',
      project_name: '预收款项',
      code: '61',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_61"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '62',
      project_name: '预付款项',
      code: '62',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_62"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_62"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '63',
      project_name: '合同负债',
      code: '63',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_63"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '64',
      project_name: '合同资产',
      code: '64',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_64"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_64"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '65',
      project_name: '持有待售资产',
      code: '65',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_65"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_65"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '66',
      project_name: '持有待售负债',
      code: '66',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_66"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_66"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '67',
      project_name: '一年内到期的非流动资产',
      code: '67',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_67"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '68',
      project_name: '一年内到期的非流动负债',
      code: '68',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_68"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_68"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '69',
      project_name: '流动负债合计',
      code: '69',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_69"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '70',
      project_name: '其他债权投资',
      code: '70',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_70"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_70"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '71',
      project_name: '长期应收款',
      code: '71',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_71"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_71"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '72',
      project_name: '其中：优先股',
      code: '72',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_72"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_72"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '73',
      project_name: '永续债',
      code: '73',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_73"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '74',
      project_name: '其他权益工具投资',
      code: '74',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_74"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_74"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '75',
      project_name: '租赁负债',
      code: '75',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_75"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_75"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '76',
      project_name: '其他非流动金融资产',
      code: '76',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_76"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '77',
      project_name: '投资性房地产',
      code: '77',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_77"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_77"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '78',
      project_name: '递延收益',
      code: '78',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_78"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_78"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '79',
      project_name: '递延所得税负债',
      code: '79',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_79"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_79"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '80',
      project_name: '生产性生物资产',
      code: '80',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_80"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_80"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '81',
      project_name: '其他非流动负债',
      code: '81',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_81"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_81"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '82',
      project_name: '油气资产',
      code: '82',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_82"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_82"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '83',
      project_name: '使用权资产',
      code: '83',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_83"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_83"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '84',
      project_name: '商誉',
      code: '84',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_84"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_84"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '85',
      project_name: '其他权益工具',
      code: '85',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_85"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_85"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '86',
      project_name: '递延所得税资产',
      code: '86',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_86"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_86"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '87',
      project_name: '其他非流动资产',
      code: '87',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_87"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_87"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '88',
      project_name: '减:库存股',
      code: '88',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_88"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_88"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '89',
      project_name: '其他综合收益',
      code: '89',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_89"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_89"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '90',
      project_name: '专项储备',
      code: '90',
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_90"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_90"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=PropertyDebtForm', {
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
          <Table dataSource={data} style={{width: '1300px'}} pagination={false}>
            <ColumnGroup title="资产负债信息" boarded>
              <Column title="项目名" dataIndex="project_name" key="project_name" />
              <Column title="栏次" dataIndex="code" key="code" />
              <Column title="本月数" dataIndex="normal_this_month" key="normal_this_month" />
              <Column title="本年累计" dataIndex="normal_this_year" key="normal_this_year" />
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