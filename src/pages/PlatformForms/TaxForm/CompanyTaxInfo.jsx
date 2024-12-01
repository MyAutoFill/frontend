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


export default function CompanyTaxInfo(props) {

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
        reqRatioConfig('CompanyTaxInfo')
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
      category: '销售额',
      project_name: '（一）按适用税率计税销售额',
      code: '1',
      normal_this_month: <Form.Item name="Tax_companyInfo_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_3"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_5"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      category: '销售额',      
      project_name: '其中：应税货物销售额',
      code: '2',
      normal_this_month: <Form.Item name="Tax_companyInfo_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_9"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_11"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      category: '销售额',      
      project_name: '应税劳务销售额',
      code: '3',
      normal_this_month: <Form.Item name="Tax_companyInfo_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_15"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_17"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      category: '销售额',      
      project_name: '纳税检查调整的销售额',
      code: '4',
      normal_this_month: <Form.Item name="Tax_companyInfo_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_22"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      category: '销售额',      
      project_name: '（二）按简易办法计税销售额',
      code: '5',
      normal_this_month: <Form.Item name="Tax_companyInfo_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_26"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_28"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      category: '销售额',      
      project_name: '其中：纳税检查调整的销售额',
      code: '6',
      normal_this_month: <Form.Item name="Tax_companyInfo_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_22"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      category: '销售额',      
      project_name: '（三）免、抵、退办法出口销售额',
      code: '7',
      normal_this_month: <Form.Item name="Tax_companyInfo_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_38"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      category: '销售额',      
      project_name: '（四）免税销售额',
      code: '8',
      normal_this_month: <Form.Item name="Tax_companyInfo_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_45"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_46"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      category: '销售额',      
      project_name: '其中：免税货物销售额',
      code: '9',
      normal_this_month: <Form.Item name="Tax_companyInfo_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_50"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_52"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      category: '销售额',
      project_name: '免税劳务销售额',
      code: '10',
      normal_this_month: <Form.Item name="Tax_companyInfo_55"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_56"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_58"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      category: '税款计算',
      project_name: '销项税额',
      code: '11',
      normal_this_month: <Form.Item name="Tax_companyInfo_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_62"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_64"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      category: '税款计算',
      project_name: '进项税额',
      code: '12',
      normal_this_month: <Form.Item name="Tax_companyInfo_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_68"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_70"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      category: '税款计算',
      project_name: '上期留抵税额',
      code: '13',
      normal_this_month: <Form.Item name="Tax_companyInfo_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_74"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_75"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_76"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      category: '税款计算',
      project_name: '进项税额转出',
      code: '14',
      normal_this_month: <Form.Item name="Tax_companyInfo_79"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_80"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_81"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_82"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      category: '税款计算',
      project_name: '免、抵、退应退税额',
      code: '15',
      normal_this_month: <Form.Item name="Tax_companyInfo_85"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_86"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_87"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_88"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      category: '税款计算',
      project_name: '按适用税率计算的纳税检查应补缴税额',
      code: '16',
      normal_this_month: <Form.Item name="Tax_companyInfo_91"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_92"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_93"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_94"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      category: '税款计算',
      project_name: '应抵扣税额合计',
      code: '17',
      normal_this_month: <Form.Item name="Tax_companyInfo_97"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_98"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_99"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_100"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      category: '税款计算',
      project_name: '实际抵扣税额',
      code: '18',
      normal_this_month: <Form.Item name="Tax_companyInfo_103"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_104"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_105"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_106"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      category: '税款计算',
      project_name: '应纳税额',
      code: '19',
      normal_this_month: <Form.Item name="Tax_companyInfo_109"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_110"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_111"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_112"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      category: '税款计算',
      project_name: '期末留抵税额',
      code: '20',
      normal_this_month: <Form.Item name="Tax_companyInfo_115"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_116"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_117"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_118"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      category: '税款计算',
      project_name: '简易计税办法计算的应纳税额',
      code: '21',
      normal_this_month: <Form.Item name="Tax_companyInfo_121"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_122"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_123"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_124"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      category: '税款计算',
      project_name: '按简易计税办法计算的纳税检查应补缴税额',
      code: '22',
      normal_this_month: <Form.Item name="Tax_companyInfo_127"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_128"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_129"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_130"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      category: '税款计算',
      project_name: '应纳税额减征额',
      code: '23',
      normal_this_month: <Form.Item name="Tax_companyInfo_133"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_134"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_135"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_136"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      category: '税款计算',
      project_name: '应纳税额合计',
      code: '24',
      normal_this_month: <Form.Item name="Tax_companyInfo_139"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_140"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_141"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_142"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      category: '税款缴纳',
      project_name: '期初未缴税额（多缴为负数）',
      code: '25',
      normal_this_month: <Form.Item name="Tax_companyInfo_145"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_146"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_147"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_148"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      category: '税款缴纳',
      project_name: '实收出口开具专用缴款书退税额',
      code: '26',
      normal_this_month: <Form.Item name="Tax_companyInfo_151"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_152"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_153"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_154"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      category: '税款缴纳',
      project_name: '本期已缴税额',
      code: '27',
      normal_this_month: <Form.Item name="Tax_companyInfo_157"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_158"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_159"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_160"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      category: '税款缴纳',
      project_name: '①分次预缴税额',
      code: '28',
      normal_this_month: <Form.Item name="Tax_companyInfo_163"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_164"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_165"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_166"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      category: '税款缴纳',
      project_name: '②出口开具专用缴款书预缴税额',
      code: '29',
      normal_this_month: <Form.Item name="Tax_companyInfo_169"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_170"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_171"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_172"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      category: '税款缴纳',
      project_name: '③本期缴纳上期应纳税额',
      code: '30',
      normal_this_month: <Form.Item name="Tax_companyInfo_175"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_176"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_177"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_178"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      category: '税款缴纳',
      project_name: '④本期缴纳欠缴税额',
      code: '31',
      normal_this_month: <Form.Item name="Tax_companyInfo_181"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_182"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_183"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_184"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      category: '税款缴纳',
      project_name: '期末未缴税额（多缴为负数）',
      code: '32',
      normal_this_month: <Form.Item name="Tax_companyInfo_187"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_188"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_189"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_190"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      category: '税款缴纳',
      project_name: '其中：欠缴税额（≥0）',
      code: '33',
      normal_this_month: <Form.Item name="Tax_companyInfo_193"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_194"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_195"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_196"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      category: '税款缴纳',
      project_name: '本期应补(退)税额',
      code: '34',
      normal_this_month: <Form.Item name="Tax_companyInfo_199"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_200"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_201"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_202"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      category: '税款缴纳',
      project_name: '即征即退实际退税额',
      code: '35',
      normal_this_month: <Form.Item name="Tax_companyInfo_205"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_206"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_207"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_208"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      category: '税款缴纳',
      project_name: '期初未缴查补税额',
      code: '36',
      normal_this_month: <Form.Item name="Tax_companyInfo_211"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_212"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_213"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_214"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      category: '税款缴纳',
      project_name: '本期入库查补税额',
      code: '37',
      normal_this_month: <Form.Item name="Tax_companyInfo_216"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_217"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_218"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_219"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      category: '税款缴纳',
      project_name: '期末未缴查补税额',
      code: '38',
      normal_this_month: <Form.Item name="Tax_companyInfo_222"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_223"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_224"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_225"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      category: '附加税费',
      project_name: '城市维护建设税本期应补（退）税额',
      code: '39',
      normal_this_month: <Form.Item name="Tax_companyInfo_228"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_229"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_230"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_231"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      category: '附加税费',
      project_name: '教育费附加本期应补（退）费额',
      code: '40',
      normal_this_month: <Form.Item name="Tax_companyInfo_234"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_235"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_236"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_237"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      category: '附加税费',
      project_name: '地方教育附加本期应补（退）费额',
      code: '41',
      normal_this_month: <Form.Item name="Tax_companyInfo_240"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_241"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_242"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_243"><Input disabled={true} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=CompanyTaxInfo', {
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
            <ColumnGroup title="单位税务信息" boarded>
              <ColumnGroup title="项目" boarded>
                <Column title="" dataIndex="category" key="category" boarded
                  onCell={(row, index) => {
                    // 销售额
                    if (index === 0) {
                      return { rowSpan: 10 }
                    }else if (index == 10){
                      return { rowSpan: 14 }
                    }else if (index == 24){
                      return { rowSpan: 14 }
                    }else if (index == 38){
                      return { rowSpan: 14 }
                    }else if (index == 52){
                      return { rowSpan: 3 }
                    }else{
                      return { rowSpan: 0 }
                    }
                  }}
                />
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