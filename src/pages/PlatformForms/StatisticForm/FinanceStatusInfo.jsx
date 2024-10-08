import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function FinanceStatusInfo(props) {

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('FinanceStatusInfo')
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
      label: '一、年初存货',
      children: <Form.Item name="FinanceStatusInfo_1"><Input disabled={true} addonBefore='代码' defaultValue={'1'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '127',
      label: '产成品',
      children: <Form.Item name="FinanceStatusInfo_127"><Input disabled={true} addonBefore='代码' defaultValue={'2'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '128',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_127_1"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '129',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '二、期末资产负债',
      children: <Form.Item name="FinanceStatusInfo_4"><Input disabled={true} addonBefore='代码' defaultValue={'3'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '流动资产合计',
      children: <Form.Item name="Tech_EcoInfo_3"><Input disabled={true} addonBefore='代码' defaultValue={'4'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '本年',
      children: <Form.Item name="company_runningsum_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '其中：应收账款',
      children: <Form.Item name="FinanceStatusInfo_10"><Input disabled={true} addonBefore='代码' defaultValue={'5'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '存货',
      children: <Form.Item name="FinanceStatusInfo_14"><Input disabled={true} addonBefore='代码' defaultValue={'6'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '固定资产原价',
      children: <Form.Item name="FinanceStatusInfo_16"><Input disabled={true} addonBefore='代码' defaultValue={'7'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '其中：房屋和构筑物',
      children: <Form.Item name="FinanceStatusInfo_19"><Input disabled={true} addonBefore='代码' defaultValue={'8'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '机器设备',
      children: <Form.Item name="FinanceStatusInfo_22"><Input disabled={true} addonBefore='代码' defaultValue={'9'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: '累计折扣',
      children: <Form.Item name="FinanceStatusInfo_25"><Input disabled={true} addonBefore='代码' defaultValue={'10'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_26"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '28',
      label: '其中：本年折扣',
      children: <Form.Item name="FinanceStatusInfo_28"><Input disabled={true} addonBefore='代码' defaultValue={'11'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '29',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '31',
      label: '无形资产',
      children: <Form.Item name="FinanceStatusInfo_32"><Input disabled={true} addonBefore='代码' defaultValue={'12'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: '本年',
      children: <Form.Item name="company_runningsum_24"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: '其中：土地使用权',
      children: <Form.Item name="FinanceStatusInfo_34"><Input disabled={true} addonBefore='代码' defaultValue={'13'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '37',
      label: '资产总计',
      children: <Form.Item name="FinanceStatusInfo_37"><Input disabled={true} addonBefore='代码' defaultValue={'14'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_38"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '40',
      label: '负债合计',
      children: <Form.Item name="FinanceStatusInfo_40"><Input disabled={true} addonBefore='代码' defaultValue={'15'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_41"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '43',
      label: '所有者权益合计',
      children: <Form.Item name="FinanceStatusInfo_44"><Input disabled={true} addonBefore='代码' defaultValue={'16'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '44',
      label: '本年',
      children: <Form.Item name="company_runningsum_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '46',
      label: '其中：实收资本',
      children: <Form.Item name="FinanceStatusInfo_47"><Input disabled={true} addonBefore='代码' defaultValue={'17'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '47',
      label: '本年',
      children: <Form.Item name="company_runningsum_32"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '49',
      label: '个人资本',
      children: <Form.Item name="FinanceStatusInfo_49"><Input disabled={true} addonBefore='代码' defaultValue={'18'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '50',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_50"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '52',
      label: '净服务收入',
      children: <Form.Item name="FinanceStatusInfo_52"><Input disabled={true} addonBefore='代码' defaultValue={'19'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '53',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_53"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '133',
      label: '补贴收入',
      children: <Form.Item name="FinanceStatusInfo_133"><Input disabled={true} addonBefore='代码' defaultValue={'20'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '134',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_134"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '135',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '136',
      label: '主营业务收入',
      children: <Form.Item name="FinanceStatusInfo_54"><Input disabled={true} addonBefore='代码' defaultValue={'21'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '137',
      label: '本年',
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '138',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '140',
      label: '主营业务成本',
      children: <Form.Item name="FinanceStatusInfo_55"><Input disabled={true} addonBefore='代码' defaultValue={'22'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '141',
      label: '本年',
      children: <Form.Item name="company_runningsum_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '142',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '143',
      label: '主营业务税金及附加',
      children: <Form.Item name="FinanceStatusInfo_56"><Input disabled={true} addonBefore='代码' defaultValue={'23'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '144',
      label: '本年',
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '145',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '55',
      label: '营业成本',
      children: <Form.Item name="FinanceStatusInfo_57"><Input disabled={true} addonBefore='代码' defaultValue={'24'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '56',
      label: '本年',
      children: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '58',
      label: '税金及附加',
      children: <Form.Item name="FinanceStatusInfo_59"><Input disabled={true} addonBefore='代码' defaultValue={'25'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '59',
      label: '本年',
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '61',
      label: '销售费用',
      children: <Form.Item name="FinanceStatusInfo_62"><Input disabled={true} addonBefore='代码' defaultValue={'26'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '62',
      label: '本年',
      children: <Form.Item name="company_runningsum_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '64',
      label: '管理费用',
      children: <Form.Item name="FinanceStatusInfo_65"><Input disabled={true} addonBefore='代码' defaultValue={'27'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '65',
      label: '本年',
      children: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '67',
      label: '研发费用',
      children: <Form.Item name="FinanceStatusInfo_68"><Input disabled={true} addonBefore='代码' defaultValue={'28'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '68',
      label: '本年',
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '70',
      label: '财务费用',
      children: <Form.Item name="FinanceStatusInfo_71"><Input disabled={true} addonBefore='代码' defaultValue={'29'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '71',
      label: '本年',
      children: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '73',
      label: '其中：利息收入',
      children: <Form.Item name="FinanceStatusInfo_73"><Input disabled={true} addonBefore='代码' defaultValue={'30'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '74',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_74"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '76',
      label: '利息支出',
      children: <Form.Item name="FinanceStatusInfo_76"><Input disabled={true} addonBefore='代码' defaultValue={'31'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '77',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_77"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '79',
      label: '资产减值损失',
      children: <Form.Item name="FinanceStatusInfo_80"><Input disabled={true} addonBefore='代码' defaultValue={'32'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '80',
      label: '本年',
      children: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '81',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '82',
      label: '信用减值损失',
      children: <Form.Item name="FinanceStatusInfo_83"><Input disabled={true} addonBefore='代码' defaultValue={'33'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '83',
      label: '本年',
      children: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '85',
      label: '公允价值变动收益',
      children: <Form.Item name="FinanceStatusInfo_86"><Input disabled={true} addonBefore='代码' defaultValue={'34'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '86',
      label: '本年',
      children: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '88',
      label: '投资收益',
      children: <Form.Item name="FinanceStatusInfo_89"><Input disabled={true} addonBefore='代码' defaultValue={'35'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '89',
      label: '本年',
      children: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '91',
      label: '净敞口套期收益',
      children: <Form.Item name="FinanceStatusInfo_92"><Input disabled={true} addonBefore='代码' defaultValue={'36'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '92',
      label: '本年',
      children: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '94',
      label: '资产处置收益',
      children: <Form.Item name="FinanceStatusInfo_95"><Input disabled={true} addonBefore='代码' defaultValue={'37'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '95',
      label: '本年',
      children: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '96',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '97',
      label: '其他收益',
      children: <Form.Item name="FinanceStatusInfo_98"><Input disabled={true} addonBefore='代码' defaultValue={'38'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '98',
      label: '本年',
      children: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '99',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '100',
      label: '营业利润',
      children: <Form.Item name="FinanceStatusInfo_101"><Input disabled={true} addonBefore='代码' defaultValue={'39'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '101',
      label: '本年',
      children: <Form.Item name="company_runningsum_14"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '102',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '103',
      label: '营业外收入',
      children: <Form.Item name="FinanceStatusInfo_104"><Input disabled={true} addonBefore='代码' defaultValue={'40'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '104',
      label: '本年',
      children: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '106',
      label: '营业外支出',
      children: <Form.Item name="FinanceStatusInfo_107"><Input disabled={true} addonBefore='代码' defaultValue={'41'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '107',
      label: '本年',
      children: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '108',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '109',
      label: '利润总额',
      children: <Form.Item name="FinanceStatusInfo_110"><Input disabled={true} addonBefore='代码' defaultValue={'42'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '110',
      label: '本年',
      children: <Form.Item name="company_runningsum_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '111',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '112',
      label: '所得税费用',
      children: <Form.Item name="FinanceStatusInfo_113"><Input disabled={true} addonBefore='代码' defaultValue={'43'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '113',
      label: '本年',
      children: <Form.Item name="company_runningsum_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '114',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '115',
      label: '四、成本费用及增值税',
      children: <Form.Item name="FinanceStatusInfo_115"><Input disabled={true} addonBefore='代码' defaultValue={'44'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '116',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_116"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '117',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '118',
      label: '应付职工薪酬（本期贷方累计发生额）',
      children: <Form.Item name="FinanceStatusInfo_119"><Input disabled={true} addonBefore='代码' defaultValue={'45'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '119',
      label: '本年',
      children: <Form.Item name="company_runningsum_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '120',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '121',
      label: '应交增值税（本期累计发生额）',
      children: <Form.Item name="FinanceStatusInfo_122"><Input disabled={true} addonBefore='代码' defaultValue={'46'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '122',
      label: '本年',
      children: <Form.Item name="company_runningsum_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '123',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '124',
      label: '五、期末用工人数',
      children: <Form.Item name="FinanceStatusInfo_124"><Input disabled={true} addonBefore='代码' defaultValue={'47'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '125',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_125"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '126',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '130',
      label: '平均用工人数',
      children: <Form.Item name="FinanceStatusInfo_130"><Input disabled={true} addonBefore='代码' defaultValue={'48'} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '131',
      label: '本年',
      children: <Form.Item name="FinanceStatusInfo_131"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '132',
      label: '上年同期',
      children: <Form.Item><Input disabled={true} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=FinanceStatusInfo', {
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
          <Descriptions title="财务状况信息" bordered items={items} />
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
              onClick={() => {window.location.href = '/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}