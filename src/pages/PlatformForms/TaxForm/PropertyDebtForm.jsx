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

const dateFormat = 'YYYY-MM-DD';
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15-day

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
      project_name: <span style={{fontSize: '16px'}}>货币资金</span>,
      code: <span style={{fontSize: '16px'}}>1</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_1"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      project_name: <span style={{fontSize: '16px'}}>短期投资</span>,
      code: <span style={{fontSize: '16px'}}>2</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_2"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      project_name: <span style={{fontSize: '16px'}}>应收票据</span>,
      code: <span style={{fontSize: '16px'}}>3</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_3"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      project_name: <span style={{fontSize: '16px'}}>应收股利</span>,
      code: <span style={{fontSize: '16px'}}>4</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_4"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      project_name: <span style={{fontSize: '16px'}}>应收利息</span>,
      code: <span style={{fontSize: '16px'}}>5</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_5"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      project_name: <span style={{fontSize: '16px'}}>应收账款</span>,
      code: <span style={{fontSize: '16px'}}>6</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="FinanceStatusInfo_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_6"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      project_name: <span style={{fontSize: '16px'}}>其他应收款</span>,
      code: <span style={{fontSize: '16px'}}>7</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_7"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_7"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      project_name: <span style={{fontSize: '16px'}}>预付账款</span>,
      code: <span style={{fontSize: '16px'}}>8</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_8"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      project_name: <span style={{fontSize: '16px'}}>应收补贴款</span>,
      code: <span style={{fontSize: '16px'}}>9</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_9"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      project_name: <span style={{fontSize: '16px'}}>存货</span>,
      code: <span style={{fontSize: '16px'}}>10</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="FinanceStatusInfo_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_10"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      project_name: <span style={{fontSize: '16px'}}>待摊费用</span>,
      code: <span style={{fontSize: '16px'}}>11</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="company_research_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_11"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      project_name: <span style={{fontSize: '16px'}}>一年内到期的长期债权投资</span>,
      code: <span style={{fontSize: '16px'}}>12</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_12"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      project_name: <span style={{fontSize: '16px'}}>其他流动资产</span>,
      code: <span style={{fontSize: '16px'}}>13</span>,
      normal_this_month: <Form.Item rules={[{required: true}]} name="tax_debt_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_13"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      project_name: <span style={{fontSize: '16px'}}>长期股权投资</span>,
      code: <span style={{fontSize: '16px'}}>14</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_14"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      project_name: <span style={{fontSize: '16px'}}>长期债权投资</span>,
      code: <span style={{fontSize: '16px'}}>15</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_15"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      project_name: <span style={{fontSize: '16px'}}>固定资产原价</span>,
      code: <span style={{fontSize: '16px'}}>16</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="FinanceStatusInfo_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_16"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      project_name: <span style={{fontSize: '16px'}}>累计折旧</span>,
      code: <span style={{fontSize: '16px'}}>17</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_17"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      project_name: <span style={{fontSize: '16px'}}>固定资产减值准备</span>,
      code: <span style={{fontSize: '16px'}}>18</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_18"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_18"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      project_name: <span style={{fontSize: '16px'}}>工程物资</span>,
      code: <span style={{fontSize: '16px'}}>19</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_19"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      project_name: <span style={{fontSize: '16px'}}>在建工程</span>,
      code: <span style={{fontSize: '16px'}}>20</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      project_name: <span style={{fontSize: '16px'}}>固定资产清理</span>,
      code: <span style={{fontSize: '16px'}}>21</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_21"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      project_name: <span style={{fontSize: '16px'}}>无形资产</span>,
      code: <span style={{fontSize: '16px'}}>22</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_24"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_22"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      project_name: <span style={{fontSize: '16px'}}>长期待摊费用</span>,
      code: <span style={{fontSize: '16px'}}>23</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_research_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_23"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      project_name: <span style={{fontSize: '16px'}}>其他长期资产</span>,
      code: <span style={{fontSize: '16px'}}>24</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_24"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_24"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      project_name: <span style={{fontSize: '16px'}}>递延税款借项</span>,
      code: <span style={{fontSize: '16px'}}>25</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_25"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      project_name: <span style={{fontSize: '16px'}}>短期借款</span>,
      code: <span style={{fontSize: '16px'}}>26</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_26"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      project_name: <span style={{fontSize: '16px'}}>应付票据</span>,
      code: <span style={{fontSize: '16px'}}>27</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_27"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      project_name: <span style={{fontSize: '16px'}}>应付账款</span>,
      code: <span style={{fontSize: '16px'}}>28</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_28"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_28"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      project_name: <span style={{fontSize: '16px'}}>预收账款</span>,
      code: <span style={{fontSize: '16px'}}>29</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_29"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      project_name: <span style={{fontSize: '16px'}}>应付工资</span>,
      code: <span style={{fontSize: '16px'}}>30</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_employee_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_30"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      project_name: <span style={{fontSize: '16px'}}>应付福利费</span>,
      code: <span style={{fontSize: '16px'}}>31</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_31"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_31"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      project_name: <span style={{fontSize: '16px'}}>应付股利</span>,
      code: <span style={{fontSize: '16px'}}>32</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_32"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      project_name: <span style={{fontSize: '16px'}}>应交税金</span>,
      code: <span style={{fontSize: '16px'}}>33</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      project_name: <span style={{fontSize: '16px'}}>其他应交款</span>,
      code: <span style={{fontSize: '16px'}}>34</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_34"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_34"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      project_name: <span style={{fontSize: '16px'}}>其他应付款</span>,
      code: <span style={{fontSize: '16px'}}>35</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_35"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      project_name: <span style={{fontSize: '16px'}}>预提费用</span>,
      code: <span style={{fontSize: '16px'}}>36</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_36"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_36"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      project_name: <span style={{fontSize: '16px'}}>预计负债</span>,
      code: <span style={{fontSize: '16px'}}>37</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_37"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      project_name: <span style={{fontSize: '16px'}}>一年内到期的长期负债</span>,
      code: <span style={{fontSize: '16px'}}>38</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_38"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      project_name: <span style={{fontSize: '16px'}}>其他流动负债</span>,
      code: <span style={{fontSize: '16px'}}>39</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_39"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      project_name: <span style={{fontSize: '16px'}}>长期借款</span>,
      code: <span style={{fontSize: '16px'}}>40</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      project_name: <span style={{fontSize: '16px'}}>应付债券</span>,
      code: <span style={{fontSize: '16px'}}>41</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_41"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '42',
      project_name: <span style={{fontSize: '16px'}}>长期应付款</span>,
      code: <span style={{fontSize: '16px'}}>42</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_42"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_42"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '43',
      project_name: <span style={{fontSize: '16px'}}>专项应付款</span>,
      code: <span style={{fontSize: '16px'}}>43</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_43"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '44',
      project_name: <span style={{fontSize: '16px'}}>其他长期负债</span>,
      code: <span style={{fontSize: '16px'}}>44</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '45',
      project_name: <span style={{fontSize: '16px'}}>递延税款贷项</span>,
      code: <span style={{fontSize: '16px'}}>45</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="cash_flow_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '46',
      project_name: <span style={{fontSize: '16px'}}>实收资本(或股本)</span>,
      code: <span style={{fontSize: '16px'}}>46</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_46"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '47',
      project_name: <span style={{fontSize: '16px'}}>已归还投资</span>,
      code: <span style={{fontSize: '16px'}}>47</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_47"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '48',
      project_name: <span style={{fontSize: '16px'}}>资本公积</span>,
      code: <span style={{fontSize: '16px'}}>48</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_48"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_48"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '49',
      project_name: <span style={{fontSize: '16px'}}>盈余公积</span>,
      code: <span style={{fontSize: '16px'}}>49</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_49"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '50',
      project_name: <span style={{fontSize: '16px'}}>法定公益金</span>,
      code: <span style={{fontSize: '16px'}}>50</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_50"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_50"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '51',
      project_name: <span style={{fontSize: '16px'}}>未分配利润</span>,
      code: <span style={{fontSize: '16px'}}>51</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_51"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '52',
      project_name: <span style={{fontSize: '16px'}}>长期投资合计</span>,
      code: <span style={{fontSize: '16px'}}>52</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_52"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_52"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '53',
      project_name: <span style={{fontSize: '16px'}}>长期负债合计</span>,
      code: <span style={{fontSize: '16px'}}>53</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_53"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '54',
      project_name: <span style={{fontSize: '16px'}}>固定资产净额</span>,
      code: <span style={{fontSize: '16px'}}>54</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_54"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_54"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '55',
      project_name: <span style={{fontSize: '16px'}}>固定资产合计</span>,
      code: <span style={{fontSize: '16px'}}>55</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="company_runningsum_22"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_55"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '56',
      project_name: <span style={{fontSize: '16px'}}>交易性金融资产</span>,
      code: <span style={{fontSize: '16px'}}>56</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_56"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_56"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '57',
      project_name: <span style={{fontSize: '16px'}}>交易性金融负债</span>,
      code: <span style={{fontSize: '16px'}}>57</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_57"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '58',
      project_name: <span style={{fontSize: '16px'}}>衍生金融资产</span>,
      code: <span style={{fontSize: '16px'}}>58</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_58"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_58"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '59',
      project_name: <span style={{fontSize: '16px'}}>衍生金融负债</span>,
      code: <span style={{fontSize: '16px'}}>59</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_59"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '60',
      project_name: <span style={{fontSize: '16px'}}>应收款项融资</span>,
      code: <span style={{fontSize: '16px'}}>60</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_60"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_60"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '61',
      project_name: <span style={{fontSize: '16px'}}>预收款项</span>,
      code: <span style={{fontSize: '16px'}}>61</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_61"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '62',
      project_name: <span style={{fontSize: '16px'}}>预付款项</span>,
      code: <span style={{fontSize: '16px'}}>62</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_62"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_62"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '63',
      project_name: <span style={{fontSize: '16px'}}>合同负债</span>,
      code: <span style={{fontSize: '16px'}}>63</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_63"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '64',
      project_name: <span style={{fontSize: '16px'}}>合同资产</span>,
      code: <span style={{fontSize: '16px'}}>64</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_64"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_64"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '65',
      project_name: <span style={{fontSize: '16px'}}>持有待售资产</span>,
      code: <span style={{fontSize: '16px'}}>65</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_65"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_65"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '66',
      project_name: <span style={{fontSize: '16px'}}>持有待售负债</span>,
      code: <span style={{fontSize: '16px'}}>66</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_66"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_66"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '67',
      project_name: <span style={{fontSize: '16px'}}>一年内到期的非流动资产</span>,
      code: <span style={{fontSize: '16px'}}>67</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_67"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '68',
      project_name: <span style={{fontSize: '16px'}}>一年内到期的非流动负债</span>,
      code: <span style={{fontSize: '16px'}}>68</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_68"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_68"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '69',
      project_name: <span style={{fontSize: '16px'}}>流动负债合计</span>,
      code: <span style={{fontSize: '16px'}}>69</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_69"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '70',
      project_name: <span style={{fontSize: '16px'}}>其他债权投资</span>,
      code: <span style={{fontSize: '16px'}}>70</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_70"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_70"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '71',
      project_name: <span style={{fontSize: '16px'}}>长期应收款</span>,
      code: <span style={{fontSize: '16px'}}>71</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_71"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_71"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '72',
      project_name: <span style={{fontSize: '16px'}}>其中：优先股</span>,
      code: <span style={{fontSize: '16px'}}>72</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_72"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_72"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '73',
      project_name: <span style={{fontSize: '16px'}}>永续债</span>,
      code: <span style={{fontSize: '16px'}}>73</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_73"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '74',
      project_name: <span style={{fontSize: '16px'}}>其他权益工具投资</span>,
      code: <span style={{fontSize: '16px'}}>74</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_74"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_74"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '75',
      project_name: <span style={{fontSize: '16px'}}>租赁负债</span>,
      code: <span style={{fontSize: '16px'}}>75</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_75"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_75"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '76',
      project_name: <span style={{fontSize: '16px'}}>其他非流动金融资产</span>,
      code: <span style={{fontSize: '16px'}}>76</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_76"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '77',
      project_name: <span style={{fontSize: '16px'}}>投资性房地产</span>,
      code: <span style={{fontSize: '16px'}}>77</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_77"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_77"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '78',
      project_name: <span style={{fontSize: '16px'}}>递延收益</span>,
      code: <span style={{fontSize: '16px'}}>78</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_78"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_78"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '79',
      project_name: <span style={{fontSize: '16px'}}>递延所得税负债</span>,
      code: <span style={{fontSize: '16px'}}>79</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_79"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_79"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '80',
      project_name: <span style={{fontSize: '16px'}}>生产性生物资产</span>,
      code: <span style={{fontSize: '16px'}}>80</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_80"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_80"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '81',
      project_name: <span style={{fontSize: '16px'}}>其他非流动负债</span>,
      code: <span style={{fontSize: '16px'}}>81</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_81"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_81"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '82',
      project_name: <span style={{fontSize: '16px'}}>油气资产</span>,
      code: <span style={{fontSize: '16px'}}>82</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_82"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_82"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '83',
      project_name: <span style={{fontSize: '16px'}}>使用权资产</span>,
      code: <span style={{fontSize: '16px'}}>83</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_83"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_83"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '84',
      project_name: <span style={{fontSize: '16px'}}>商誉</span>,
      code: <span style={{fontSize: '16px'}}>84</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_84"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_84"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '85',
      project_name: <span style={{fontSize: '16px'}}>其他权益工具</span>,
      code: <span style={{fontSize: '16px'}}>85</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_85"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_85"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '86',
      project_name: <span style={{fontSize: '16px'}}>递延所得税资产</span>,
      code: <span style={{fontSize: '16px'}}>86</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_86"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_86"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '87',
      project_name: <span style={{fontSize: '16px'}}>其他非流动资产</span>,
      code: <span style={{fontSize: '16px'}}>87</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_87"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_87"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '88',
      project_name: <span style={{fontSize: '16px'}}>减:库存股</span>,
      code: <span style={{fontSize: '16px'}}>88</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_88"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_88"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '89',
      project_name: <span style={{fontSize: '16px'}}>其他综合收益</span>,
      code: <span style={{fontSize: '16px'}}>89</span>,
      normal_this_month: <Form.Item rules={[{required: false}]} name="tax_debt_89"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_debt_total_89"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '90',
      project_name: <span style={{fontSize: '16px'}}>专项储备</span>,
      code: <span style={{fontSize: '16px'}}>90</span>,
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
          <span style={{ fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span><br></br>
          <span style={{ fontSize: '17px' }}>【报表名称】资产负债表</span>
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