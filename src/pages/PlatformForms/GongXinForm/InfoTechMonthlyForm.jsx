import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Table, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function InfoTechMonthlyForm() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData()
      .then(function (res) {
        reqRatioConfig('InfoTechMonthlyForm')
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

  const data = [
    {
      key: '1',
      index_name: '主营业务收入',
      code: <Form.Item name="GongXin_MonthlyReport_1"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }} defaultValue={'2010'}></Input></Form.Item>,
      total_this_year: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_3"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_4"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_5"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_6"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      index_name: '软件业务收入合计（自动计算）',
      code: <Form.Item name="GongXin_MonthlyReport_7"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2020'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_8"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_9"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_10"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_11"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_12"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      index_name: '其中 1. 软件产品收入',
      code: <Form.Item name="GongXin_MonthlyReport_13"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2021'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_14"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_15"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_16"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_17"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_18"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      index_name: '其中基础软件收入',
      code: <Form.Item name="GongXin_MonthlyReport_19"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20211'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_20"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_21"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_22"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_23"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_24"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      index_name: '工业软件收入',
      code: <Form.Item name="GongXin_MonthlyReport_25"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20212'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_26"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_27"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_28"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_29"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_30"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      index_name: '2.  信息技术服务收入',
      code: <Form.Item name="GongXin_MonthlyReport_31"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2022'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_32"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_33"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_34"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_35"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_36"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      index_name: '其中云服务收入',
      code: <Form.Item name="GongXin_MonthlyReport_37"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20221'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_38"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_39"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_40"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_41"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_42"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      index_name: '大数据服务收入',
      code: <Form.Item name="GongXin_MonthlyReport_43"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20222'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_44"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_45"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_46"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_47"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_48"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      index_name: '工业互联网平台服务收入',
      code: <Form.Item name="GongXin_MonthlyReport_49"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20223'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_50"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_51"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_52"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_53"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_54"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      index_name: '电子商务平台技术服务收入',
      code: <Form.Item name="GongXin_MonthlyReport_55"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20224'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_56"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_57"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_58"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_59"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_60"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      index_name: '集成电路设计收入',
      code: <Form.Item name="GongXin_MonthlyReport_61"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20225'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_62"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_63"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_64"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_65"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_66"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      index_name: '3.信息安全收入',
      code: <Form.Item name="GongXin_MonthlyReport_67"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2023'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_68"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_69"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_70"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_71"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_72"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      index_name: '其中工控安全收入',
      code: <Form.Item name="GongXin_MonthlyReport_73"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20231'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_74"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_75"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_76"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_77"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_78"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      index_name: '*4.嵌入式系统软件收入（自动计算）',
      code: <Form.Item name="GongXin_MonthlyReport_79"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2024'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_80"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_81"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_82"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_83"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_84"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      index_name: '（二）按出口方式分列',
      code: <Form.Item name="GongXin_MonthlyReport_85"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2020b'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_86"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_87"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_88"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_89"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_90"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      index_name: '其中1.软件外包服务出口',
      code: <Form.Item name="GongXin_MonthlyReport_91"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2041'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_92"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_93"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_94"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_95"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_96"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      index_name: '*2.应用嵌入式系统软件的产品出口额',
      code: <Form.Item name="GongXin_MonthlyReport_97"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20421'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_98"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_99"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_100"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_101"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_102"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      index_name: '2-1嵌入式系统软件出口（自动计算）',
      code: <Form.Item name="GongXin_MonthlyReport_103"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2042'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_104"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_105"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_106"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_107"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_108"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      index_name: '3.其他软件业务出口',
      code: <Form.Item name="GongXin_MonthlyReport_109"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2043'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_110"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_111"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_112"><Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_113"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_114"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      index_name: '主营业务成本',
      code: <Form.Item name="GongXin_MonthlyReport_115"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2050'}></Input></Form.Item>,
      total_this_year: <Form.Item name="company_runningsum_33"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_117"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_118"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_119"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_120"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      index_name: '其中硬件成本',
      code: <Form.Item name="GongXin_MonthlyReport_121"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2051'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_122"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_123"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_124"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_125"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_126"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      index_name: '费用总额',
      code: <Form.Item name="GongXin_MonthlyReport_127"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2080'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_128"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_129"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_130"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_131"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_132"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      index_name: '利润总额',
      code: <Form.Item name="GongXin_MonthlyReport_1333"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2090'}></Input></Form.Item>,
      total_this_year: <Form.Item name="company_runningsum_17"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_135"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_136"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_137"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_138"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      index_name: '研发经费',
      code: <Form.Item name="GongXin_MonthlyReport_139"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2110'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_140"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_141"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_142"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_143"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_144"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      index_name: '从业人员工资总额',
      code: <Form.Item name="GongXin_MonthlyReport_"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2111'}></Input></Form.Item>,
      total_this_year: <Form.Item name="company_employee_11"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_146"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_147"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_148"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_149"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      index_name: '平均用工人数',
      code: <Form.Item name="GongXin_MonthlyReport_150"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2112'}></Input></Form.Item>,
      total_this_year: <Form.Item name="FinanceStatusInfo_131"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_152"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_153"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_154"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_155"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      index_name: '订单同比增长',
      code: <Form.Item name="GongXin_MonthlyReport_156"><Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2113'}></Input></Form.Item>,
      total_this_year: <Form.Item name="GongXin_MonthlyReport_157"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_year: <Form.Item name="GongXin_MonthlyReport_158"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      total_last_term: <Form.Item name="GongXin_MonthlyReport_159"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_same: <Form.Item name="GongXin_MonthlyReport_160"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="GongXin_MonthlyReport_161"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const items = [
    {
      key: '1',
      label: '表名',
      children: '软统企6表',
      span: 3
    },
    {
      key: '2',
      label: '制定机关',
      children: '工业和信息化部',
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
      children: '国统制〔2021〕136号',
      span: 1
    },
    {
      key: '5',
      label: '有效期至',
      children: <Form.Item name="GongXin_MonthlyReport_162"><DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '150px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 3
    },
    {
      label: '组织机构代码',
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '6',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '7',
      label: '单位详细名称',
      children: <Form.Item name="GongXin_MonthlyReport_165"><Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '8',
      label: '是否有嵌入式系统软件业务',
      children: 
        <Form.Item name="GongXin_MonthlyReport_166">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '9',
      label: '单位负责人',
      children: <Form.Item name="company_basicinfo_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },,
    {
      key: '10',
      label: '统计负责人',
      children: <Form.Item name="GongXin_MonthlyReport_168"><Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },,
    {
      key: '11',
      label: '填表人',
      children: <Form.Item name="GongXin_MonthlyReport_169"><Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },,
    {
      key: '12',
      label: '移动电话',
      children: <Form.Item name="company_basicinfo_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },,
    {
      key: '13',
      label: '固定电话',
      children: <Form.Item name="company_basicinfo_33"><Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=InfoTechMonthlyForm', {
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
          <Descriptions title="软件和信息技术服务业企业月报表" bordered items={items} />
          <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
            <Column title="指标名称" dataIndex="index_name" key="index_name" />
            <Column title="代码" dataIndex="code" key="code" />
            <Column title="本年本期累计" dataIndex="total_this_year" key="total_this_year" />
            <Column title="去年同期累计" dataIndex="total_last_year" key="total_last_year" />
            <Column title="本年上期累计" dataIndex="total_last_term" key="total_last_term" />
            <Column title="同比（%）" dataIndex="compare_same" key="compare_same" />
            <Column title="环比（%）" dataIndex="compare_round" key="compare_round" />,
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