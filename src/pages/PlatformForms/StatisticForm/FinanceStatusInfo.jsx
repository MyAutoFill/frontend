import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
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

export default function FinanceStatusInfo(props) {

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('FinanceStatusInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              if (new_res[key] !== '') {
                let a = BigNumber(new_res[key])
                let b = BigNumber(config[key])
                new_res[key] = a.times(b).toString();
              }
            }
          });
          form.resetFields();
          form.setFieldsValue(new_res);
        })
      })
  }

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

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

  const [form] = Form.useForm();
  
  const items = [
    {
      key: '1',
      label: <span style={{fontSize: '16px'}}>一、年初存货</span>,
      children: <Form.Item name="FinanceStatusInfo_1"><Input disabled={true} addonBefore='代码' defaultValue={'1'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '127',
      label: <span style={{fontSize: '16px'}}>产成品</span>,
      children: <Form.Item name="FinanceStatusInfo_127"><Input disabled={true} addonBefore='代码' defaultValue={'2'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '128',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_127_1"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '129',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>二、期末资产负债</span>,
      children: <Form.Item name="FinanceStatusInfo_4"><Input disabled={true} addonBefore='代码' defaultValue={'3'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>流动资产合计</span>,
      children: <Form.Item name="company_runningsum_20"><Input disabled={true} addonBefore='代码' defaultValue={'4'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>其中：应收账款</span>,
      children: <Form.Item name="FinanceStatusInfo_10"><Input disabled={true} addonBefore='代码' defaultValue={'5'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>存货</span>,
      children: <Form.Item name="FinanceStatusInfo_14"><Input disabled={true} addonBefore='代码' defaultValue={'6'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>固定资产原价</span>,
      children: <Form.Item name="FinanceStatusInfo_16"><Input disabled={true} addonBefore='代码' defaultValue={'7'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>其中：房屋和构筑物</span>,
      children: <Form.Item name="FinanceStatusInfo_19"><Input disabled={true} addonBefore='代码' defaultValue={'8'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>机器设备</span>,
      children: <Form.Item name="FinanceStatusInfo_22"><Input disabled={true} addonBefore='代码' defaultValue={'9'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>累计折扣</span>,
      children: <Form.Item name="FinanceStatusInfo_25"><Input disabled={true} addonBefore='代码' defaultValue={'10'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_26"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>其中：本年折扣</span>,
      children: <Form.Item name="FinanceStatusInfo_28"><Input disabled={true} addonBefore='代码' defaultValue={'11'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>无形资产</span>,
      children: <Form.Item name="FinanceStatusInfo_32"><Input disabled={true} addonBefore='代码' defaultValue={'12'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_24"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>其中：土地使用权</span>,
      children: <Form.Item name="FinanceStatusInfo_34"><Input disabled={true} addonBefore='代码' defaultValue={'13'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>资产总计</span>,
      children: <Form.Item name="FinanceStatusInfo_37"><Input disabled={true} addonBefore='代码' defaultValue={'14'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_18"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>负债合计</span>,
      children: <Form.Item name="FinanceStatusInfo_40"><Input disabled={true} addonBefore='代码' defaultValue={'15'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_41"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '43',
      label: <span style={{fontSize: '16px'}}>所有者权益合计</span>,
      children: <Form.Item name="company_runningsum_31"><Input disabled={true} addonBefore='代码' defaultValue={'16'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '44',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '46',
      label: <span style={{fontSize: '16px'}}>其中：实收资本</span>,
      children: <Form.Item name="FinanceStatusInfo_47"><Input disabled={true} addonBefore='代码' defaultValue={'17'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '47',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_32"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '49',
      label: <span style={{fontSize: '16px'}}>个人资本</span>,
      children: <Form.Item name="FinanceStatusInfo_49"><Input disabled={true} addonBefore='代码' defaultValue={'18'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '50',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_50"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '52',
      label: <span style={{fontSize: '16px'}}>净服务收入</span>,
      children: <Form.Item name="FinanceStatusInfo_52"><Input disabled={true} addonBefore='代码' defaultValue={'19'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '53',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_53"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '133',
      label: <span style={{fontSize: '16px'}}>补贴收入</span>,
      children: <Form.Item name="FinanceStatusInfo_133"><Input disabled={true} addonBefore='代码' defaultValue={'20'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '134',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_134"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '135',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '136',
      label: <span style={{fontSize: '16px'}}>主营业务收入</span>,
      children: <Form.Item name="FinanceStatusInfo_54"><Input disabled={true} addonBefore='代码' defaultValue={'21'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '137',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '138',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '140',
      label: <span style={{fontSize: '16px'}}>主营业务成本</span>,
      children: <Form.Item name="FinanceStatusInfo_55"><Input disabled={true} addonBefore='代码' defaultValue={'22'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '141',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '142',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '143',
      label: <span style={{fontSize: '16px'}}>主营业务税金及附加</span>,
      children: <Form.Item name="FinanceStatusInfo_56"><Input disabled={true} addonBefore='代码' defaultValue={'23'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '144',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '145',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '55',
      label: <span style={{fontSize: '16px'}}>营业成本</span>,
      children: <Form.Item name="FinanceStatusInfo_57"><Input disabled={true} addonBefore='代码' defaultValue={'24'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '56',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '58',
      label: <span style={{fontSize: '16px'}}>税金及附加</span>,
      children: <Form.Item name="FinanceStatusInfo_59"><Input disabled={true} addonBefore='代码' defaultValue={'25'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '59',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '61',
      label: <span style={{fontSize: '16px'}}>销售费用</span>,
      children: <Form.Item name="FinanceStatusInfo_62"><Input disabled={true} addonBefore='代码' defaultValue={'26'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '62',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '64',
      label: <span style={{fontSize: '16px'}}>管理费用</span>,
      children: <Form.Item name="FinanceStatusInfo_65"><Input disabled={true} addonBefore='代码' defaultValue={'27'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '65',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '67',
      label: <span style={{fontSize: '16px'}}>研发费用</span>,
      children: <Form.Item name="company_runningsum_7"><Input disabled={true} addonBefore='代码' defaultValue={'28'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '68',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '70',
      label: <span style={{fontSize: '16px'}}>财务费用</span>,
      children: <Form.Item name="FinanceStatusInfo_71"><Input disabled={true} addonBefore='代码' defaultValue={'29'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '71',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '73',
      label: <span style={{fontSize: '16px'}}>其中：利息收入</span>,
      children: <Form.Item name="FinanceStatusInfo_73"><Input disabled={true} addonBefore='代码' defaultValue={'30'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '74',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_74"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '76',
      label: <span style={{fontSize: '16px'}}>利息支出</span>,
      children: <Form.Item name="FinanceStatusInfo_76"><Input disabled={true} addonBefore='代码' defaultValue={'31'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '77',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_77"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '79',
      label: <span style={{fontSize: '16px'}}>资产减值损失</span>,
      children: <Form.Item name="FinanceStatusInfo_80"><Input disabled={true} addonBefore='代码' defaultValue={'32'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '80',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '81',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '82',
      label: <span style={{fontSize: '16px'}}>信用减值损失</span>,
      children: <Form.Item name="FinanceStatusInfo_83"><Input disabled={true} addonBefore='代码' defaultValue={'33'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '83',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '85',
      label: <span style={{fontSize: '16px'}}>公允价值变动收益</span>,
      children: <Form.Item name="FinanceStatusInfo_86"><Input disabled={true} addonBefore='代码' defaultValue={'34'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '86',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '88',
      label: <span style={{fontSize: '16px'}}>投资收益</span>,
      children: <Form.Item name="FinanceStatusInfo_89"><Input disabled={true} addonBefore='代码' defaultValue={'35'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '89',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '91',
      label: <span style={{fontSize: '16px'}}>净敞口套期收益</span>,
      children: <Form.Item name="FinanceStatusInfo_92"><Input disabled={true} addonBefore='代码' defaultValue={'36'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '92',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '94',
      label: <span style={{fontSize: '16px'}}>资产处置收益</span>,
      children: <Form.Item name="FinanceStatusInfo_95"><Input disabled={true} addonBefore='代码' defaultValue={'37'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '95',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '96',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '97',
      label: <span style={{fontSize: '16px'}}>其他收益</span>,
      children: <Form.Item name="FinanceStatusInfo_98"><Input disabled={true} addonBefore='代码' defaultValue={'38'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '98',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '99',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '100',
      label: <span style={{fontSize: '16px'}}>营业利润</span>,
      children: <Form.Item name="FinanceStatusInfo_101"><Input disabled={true} addonBefore='代码' defaultValue={'39'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '101',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_14"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '102',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '103',
      label: <span style={{fontSize: '16px'}}>营业外收入</span>,
      children: <Form.Item name="FinanceStatusInfo_104"><Input disabled={true} addonBefore='代码' defaultValue={'40'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '104',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '106',
      label: <span style={{fontSize: '16px'}}>营业外支出</span>,
      children: <Form.Item name="FinanceStatusInfo_107"><Input disabled={true} addonBefore='代码' defaultValue={'41'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '107',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '108',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '109',
      label: <span style={{fontSize: '16px'}}>利润总额</span>,
      children: <Form.Item name="FinanceStatusInfo_110"><Input disabled={true} addonBefore='代码' defaultValue={'42'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '110',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '111',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '112',
      label: <span style={{fontSize: '16px'}}>所得税费用</span>,
      children: <Form.Item name="FinanceStatusInfo_113"><Input disabled={true} addonBefore='代码' defaultValue={'43'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '113',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '114',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '115',
      label: <span style={{fontSize: '16px'}}>四、成本费用及增值税</span>,
      children: <Form.Item name="FinanceStatusInfo_115"><Input disabled={true} addonBefore='代码' defaultValue={'44'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '116',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_116"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '117',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '118',
      label: <span style={{fontSize: '16px'}}>应付职工薪酬（本期贷方累计发生额）</span>,
      children: <Form.Item name="FinanceStatusInfo_119"><Input disabled={true} addonBefore='代码' defaultValue={'45'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '119',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '120',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '121',
      label: <span style={{fontSize: '16px'}}>应交增值税（本期累计发生额）</span>,
      children: <Form.Item name="FinanceStatusInfo_122"><Input disabled={true} addonBefore='代码' defaultValue={'46'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '122',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="company_runningsum_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '123',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '124',
      label: <span style={{fontSize: '16px'}}>五、期末用工人数</span>,
      children: <Form.Item name="FinanceStatusInfo_124"><Input disabled={true} addonBefore='代码' defaultValue={'47'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '125',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_125"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '126',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '130',
      label: <span style={{fontSize: '16px'}}>平均用工人数</span>,
      children: <Form.Item name="FinanceStatusInfo_130"><Input disabled={true} addonBefore='代码' defaultValue={'48'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '131',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_131"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '132',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '133',
      label: <span style={{fontSize: '16px'}}>储备基金</span>,
      children: <Form.Item><Input disabled={true} addonBefore='代码' defaultValue={'49'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '134',
      label: <span style={{fontSize: '16px'}}>本年</span>,
      children: <Form.Item name="FinanceStatusInfo_cbjj"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '135',
      label: <span style={{fontSize: '16px'}}>上年同期</span>,
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=FinanceStatusInfo', {
      method: 'GET',
    })
    .then(function (config) {
      const new_res = JSON.parse(JSON.stringify(values));
      Object.keys(config).forEach(key => {
        if (key in new_res) {
          if (new_res[key] !== '') {
            let a = BigNumber(new_res[key])
            let b = BigNumber(config[key])
            new_res[key] = a.div(b).toString();
          }
        }
      });
      const exist = localStorage.getItem("currentUser");
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill/user/login')
      }
      request('/api/save', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】财务状况信息" bordered items={items} />
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
              htmlType="submit"
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
              onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}