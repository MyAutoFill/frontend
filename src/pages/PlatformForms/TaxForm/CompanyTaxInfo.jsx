import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Form, Input, Button, FloatButton, message, Table} from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import { request } from 'umi';
import { useEffect } from 'react';


export default function TechCompanyInfo() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    request('/api/load_data', {
      method: 'POST',
      data: {
        date: '2024-08'
      }
    })
      .then(function (res) {
        form.setFieldsValue(res);
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
      category: '销售额',
      project_name: '（一）按适用税率计税销售额',
      code: <Form.Item name="Tax_companyInfo_1"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      category: '销售额',      
      project_name: '其中：应税货物销售额',
      code: <Form.Item name="Tax_companyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      category: '销售额',      
      project_name: '应税劳务销售额',
      code: <Form.Item name="Tax_companyInfo_13"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      category: '销售额',      
      project_name: '纳税检查调整的销售额',
      code: <Form.Item name="Tax_companyInfo_18"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_22"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_23"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      category: '销售额',      
      project_name: '（二）按简易办法计税销售额',
      code: <Form.Item name="Tax_companyInfo_24"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_28"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      category: '销售额',      
      project_name: '其中：纳税检查调整的销售额',
      code: <Form.Item name="Tax_companyInfo_30"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_31"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_34"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      category: '销售额',      
      project_name: '（三）免、抵、退办法出口销售额',
      code: <Form.Item name="Tax_companyInfo_36"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      category: '销售额',      
      project_name: '（四）免税销售额',
      code: <Form.Item name="Tax_companyInfo_42"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_45"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_46"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      category: '销售额',      
      project_name: '其中：免税货物销售额',
      code: <Form.Item name="Tax_companyInfo_48"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_50"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_52"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      category: '销售额',
      project_name: '免税劳务销售额',
      code: <Form.Item name="Tax_companyInfo_54"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_55"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_56"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_58"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      category: '税款计算',
      project_name: '销项税额',
      code: <Form.Item name="Tax_companyInfo_60"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_62"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_64"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_65"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      category: '税款计算',
      project_name: '进项税额',
      code: <Form.Item name="Tax_companyInfo_66"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_68"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_70"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_71"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      category: '税款计算',
      project_name: '上期留抵税额',
      code: <Form.Item name="Tax_companyInfo_72"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_74"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_75"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_77"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      category: '税款计算',
      project_name: '进项税额转出',
      code: <Form.Item name="Tax_companyInfo_78"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_79"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_80"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_81"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_82"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_83"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      category: '税款计算',
      project_name: '免、抵、退应退税额',
      code: <Form.Item name="Tax_companyInfo_84"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_85"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_86"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_87"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_88"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_89"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      category: '税款计算',
      project_name: '按适用税率计算的纳税检查应补缴税额',
      code: <Form.Item name="Tax_companyInfo_90"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_91"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_92"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_93"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_94"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_95"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      category: '税款计算',
      project_name: '应抵扣税额合计',
      code: <Form.Item name="Tax_companyInfo_96"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_97"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_98"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_99"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_100"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_101"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      category: '税款计算',
      project_name: '实际抵扣税额',
      code: <Form.Item name="Tax_companyInfo_102"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_103"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_104"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_105"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_106"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_107"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      category: '税款计算',
      project_name: '应纳税额',
      code: <Form.Item name="Tax_companyInfo_108"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_109"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_110"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_111"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_112"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_113"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      category: '税款计算',
      project_name: '期末留抵税额',
      code: <Form.Item name="Tax_companyInfo_114"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_115"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_116"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_117"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_118"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_119"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      category: '税款计算',
      project_name: '简易计税办法计算的应纳税额',
      code: <Form.Item name="Tax_companyInfo_120"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_121"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_122"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_123"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_124"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_125"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      category: '税款计算',
      project_name: '按简易计税办法计算的纳税检查应补缴税额',
      code: <Form.Item name="Tax_companyInfo_126"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_127"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_128"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_129"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_130"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_131"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      category: '税款计算',
      project_name: '应纳税额减征额',
      code: <Form.Item name="Tax_companyInfo_132"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_133"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_134"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_135"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_136"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_137"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      category: '税款计算',
      project_name: '应纳税额合计',
      code: <Form.Item name="Tax_companyInfo_138"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_139"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_140"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_141"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_142"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_143"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      category: '税款缴纳',
      project_name: '期初未缴税额（多缴为负数）',
      code: <Form.Item name="Tax_companyInfo_144"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_145"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_146"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_147"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_148"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_149"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      category: '税款缴纳',
      project_name: '实收出口开具专用缴款书退税额',
      code: <Form.Item name="Tax_companyInfo_150"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_151"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_152"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_153"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_154"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_155"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      category: '税款缴纳',
      project_name: '本期已缴税额',
      code: <Form.Item name="Tax_companyInfo_156"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_157"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_158"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_159"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_160"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_161"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      category: '税款缴纳',
      project_name: '①分次预缴税额',
      code: <Form.Item name="Tax_companyInfo_162"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_163"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_164"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_165"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_166"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_167"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      category: '税款缴纳',
      project_name: '②出口开具专用缴款书预缴税额',
      code: <Form.Item name="Tax_companyInfo_168"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_169"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_170"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_171"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_172"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_173"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      category: '税款缴纳',
      project_name: '③本期缴纳上期应纳税额',
      code: <Form.Item name="Tax_companyInfo_174"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_175"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_176"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_177"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_178"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_179"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      category: '税款缴纳',
      project_name: '④本期缴纳欠缴税额',
      code: <Form.Item name="Tax_companyInfo_180"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_181"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_182"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_183"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_184"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_185"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      category: '税款缴纳',
      project_name: '期末未缴税额（多缴为负数）',
      code: <Form.Item name="Tax_companyInfo_186"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_187"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_188"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_189"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_190"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_191"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      category: '税款缴纳',
      project_name: '其中：欠缴税额（≥0）',
      code: <Form.Item name="Tax_companyInfo_192"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_193"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_194"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_195"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_196"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_197"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      category: '税款缴纳',
      project_name: '本期应补(退)税额',
      code: <Form.Item name="Tax_companyInfo_198"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_199"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_200"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_201"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_202"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_203"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      category: '税款缴纳',
      project_name: '即征即退实际退税额',
      code: <Form.Item name="Tax_companyInfo_204"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_205"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_206"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_207"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_208"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_209"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      category: '税款缴纳',
      project_name: '期初未缴查补税额',
      code: <Form.Item name="Tax_companyInfo_210"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_211"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_212"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_213"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_214"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      category: '税款缴纳',
      project_name: '本期入库查补税额',
      code: <Form.Item name="Tax_companyInfo_215"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_216"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_217"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_218"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_219"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_220"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      category: '税款缴纳',
      project_name: '期末未缴查补税额',
      code: <Form.Item name="Tax_companyInfo_221"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_222"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_223"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_224"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_225"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_226"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      category: '附加税费',
      project_name: '城市维护建设税本期应补（退）税额',
      code: <Form.Item name="Tax_companyInfo_227"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_228"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_229"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_230"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_231"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_232"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      category: '附加税费',
      project_name: '教育费附加本期应补（退）费额',
      code: <Form.Item name="Tax_companyInfo_233"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_234"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_235"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_236"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_237"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_238"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      category: '附加税费',
      project_name: '地方教育附加本期应补（退）费额',
      code: <Form.Item name="Tax_companyInfo_239"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_240"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_241"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_242"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_243"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_244"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const onFinish = (values) => {
    request('/api/save', {
      method: 'POST',
      data: {
        date: '2024-08',
        data: values
      }
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Table dataSource={data} style={{width: '1300px'}} pagination={false}>
            <ColumnGroup title="单位税务信息" boarded>
              <ColumnGroup title="项目" boarded>
                <Column title="" dataIndex="category" key="category" boarded
                  onCell={(row, index) => {
                    // 销售额
                    if (index === 0) {
                      return { rowSpan: 10 }
                    }
                    if (index === 1) {
                      return { rowSpan: 0 }
                    }
                    if (index === 2) {
                      return { rowSpan: 0 }
                    }
                    if (index === 3) {
                      return { rowSpan: 0 }
                    }
                    if (index === 4) {
                      return { rowSpan: 0 }
                    }
                    if (index === 5) {
                      return { rowSpan: 0 }
                    }
                    if (index === 6) {
                      return { rowSpan: 0 }
                    }
                    if (index === 7) {
                      return { rowSpan: 0 }
                    }
                    if (index === 8) {
                      return { rowSpan: 0 }
                    }
                    if (index === 9) {
                      return { rowSpan: 0 }
                    }

                    // 税款计算
                    if (index === 10) {
                      return { rowSpan: 14 }
                    }
                    if (index === 11) {
                      return { rowSpan: 0 }
                    }
                    if (index === 12) {
                      return { rowSpan: 0 }
                    }
                    if (index === 13) {
                      return { rowSpan: 0 }
                    }
                    if (index === 14) {
                      return { rowSpan: 0 }
                    }
                    if (index === 15) {
                      return { rowSpan: 0 }
                    }
                    if (index === 16) {
                      return { rowSpan: 0 }
                    }
                    if (index === 17) {
                      return { rowSpan: 0 }
                    }
                    if (index === 18) {
                      return { rowSpan: 0 }
                    }
                    if (index === 19) {
                      return { rowSpan: 0 }
                    }
                    if (index === 20) {
                      return { rowSpan: 0 }
                    }
                    if (index === 21) {
                      return { rowSpan: 0 }
                    }
                    if (index === 22) {
                      return { rowSpan: 0 }
                    }
                    if (index === 23) {
                      return { rowSpan: 0 }
                    }

                    // 税款缴纳
                    if (index === 24) {
                      return { rowSpan: 14 }
                    }
                    if (index === 25) {
                      return { rowSpan: 0 }
                    }
                    if (index === 26) {
                      return { rowSpan: 0 }
                    }
                    if (index === 27) {
                      return { rowSpan: 0 }
                    }
                    if (index === 28) {
                      return { rowSpan: 0 }
                    }
                    if (index === 29) {
                      return { rowSpan: 0 }
                    }
                    if (index === 30) {
                      return { rowSpan: 0 }
                    }
                    if (index === 31) {
                      return { rowSpan: 0 }
                    }
                    if (index === 32) {
                      return { rowSpan: 0 }
                    }
                    if (index === 33) {
                      return { rowSpan: 0 }
                    }
                    if (index === 34) {
                      return { rowSpan: 0 }
                    }
                    if (index === 35) {
                      return { rowSpan: 0 }
                    }
                    if (index === 36) {
                      return { rowSpan: 0 }
                    }
                    if (index === 37) {
                      return { rowSpan: 0 }
                    }
                    
                    // 附加税费
                    if (index === 38) {
                      return { rowSpan: 3 }
                    }
                    if (index === 39) {
                      return { rowSpan: 0 }
                    }
                    if (index === 40) {
                      return { rowSpan: 0 }
                    }
                  }
                }/>
                <Column title="项目名" dataIndex="project_name" key="project_name" />
              </ColumnGroup>
              <Column title="栏次" dataIndex="code" key="code" />
              <ColumnGroup title="一般项目" boarded>
                <Column title="本月数" dataIndex="normal_this_month" key="normal_this_month" />
                <Column title="本年累计" dataIndex="normal_this_year" key="normal_this_year" />
              </ColumnGroup>
              <ColumnGroup title="即征即退项目" boarded>
                <Column title="本月数" dataIndex="immediate_this_month" key="immediate_this_month" />
                <Column title="本年累计" dataIndex="immediate_this_year" key="immediate_this_year" />
              </ColumnGroup>
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