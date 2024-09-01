import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';


export default function TechCompanyInfo() {

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

  const items = [
    {
      key: '1',
      label: '表号',
      children: 'GQ-002',
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
      children: <Form.Item name="Tech_EcoInfo_1"><DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 3
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '工业总产值（当年价格）',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc02'></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '营业收入',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc05_0'></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '其中：主营业务收入',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc55'></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '数量',
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '其中：技术收入',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc06'></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '其中：技术转让收入',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc06_1'></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '指标名称',
      children: '技术承包收入',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc06_2'></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '技术咨询与服务收入',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc06_3'></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '接受委托研究开发收入',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_16"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc06_4'></Input></Form.Item>,
      span: 1
    },
    {
      key: '29',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: '指标名称',
      children: '产品销售收入',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc07'></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '指标名称',
      children: '其中：高新技术产品',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc09'></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '商品销售收入',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc10'></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '其他营业收入',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_24"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc49'></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '进出口总额',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc52'></Input></Form.Item>,
      span: 1
    },
    {
      key: '44',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: '其中：出口总额',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc11'></Input></Form.Item>,
      span: 1
    },
    {
      key: '47',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '其中：高新技术产品出口',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc38'></Input></Form.Item>,
      span: 1
    },
    {
      key: '50',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '技术服务出口',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_32"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc11_1'></Input></Form.Item>,
      span: 1
    },
    {
      key: '53',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '营业成本',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_34"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc220'></Input></Form.Item>,
      span: 1
    },
    {
      key: '56',
      label: '数量',
      children: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: '税金及附加',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_36"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc221'></Input></Form.Item>,
      span: 1
    },
    {
      key: '59',
      label: '数量',
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: '指标名称',
      children: '销售费用',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc222'></Input></Form.Item>,
      span: 1
    },
    {
      key: '62',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_39"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: '指标名称',
      children: '管理费用',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_40"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc223'></Input></Form.Item>,
      span: 1
    },
    {
      key: '65',
      label: '数量',
      children: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: '指标名称',
      children: '研发费用',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_42"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc236'></Input></Form.Item>,
      span: 1
    },
    {
      key: '68',
      label: '数量',
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '财务费用',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_44"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc224'></Input></Form.Item>,
      span: 1
    },
    {
      key: '71',
      label: '数量',
      children: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: '指标名称',
      children: '资产减值损失',
      span: 1
    },
    {
      key: '73',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_46"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc228'></Input></Form.Item>,
      span: 1
    },
    {
      key: '74',
      label: '数量',
      children: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: '指标名称',
      children: '信用减值损失',
      span: 1
    },
    {
      key: '76',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_48"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc235'></Input></Form.Item>,
      span: 1
    },
    {
      key: '77',
      label: '数量',
      children: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: '指标名称',
      children: '公允价值变动收益',
      span: 1
    },
    {
      key: '79',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_50"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc229'></Input></Form.Item>,
      span: 1
    },
    {
      key: '80',
      label: '数量',
      children: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '81',
      label: '指标名称',
      children: '投资收益',
      span: 1
    },
    {
      key: '82',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_52"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc225'></Input></Form.Item>,
      span: 1
    },
    {
      key: '83',
      label: '数量',
      children: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: '指标名称',
      children: '净敞口套期收益',
      span: 1
    },
    {
      key: '85',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_54"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc239'></Input></Form.Item>,
      span: 1
    },
    {
      key: '86',
      label: '数量',
      children: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: '指标名称',
      children: '资产处置收益',
      span: 1
    },
    {
      key: '88',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_56"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc233'></Input></Form.Item>,
      span: 1
    },
    {
      key: '89',
      label: '数量',
      children: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: '指标名称',
      children: '其他收益',
      span: 1
    },
    {
      key: '91',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_58"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc232'></Input></Form.Item>,
      span: 1
    },
    {
      key: '92',
      label: '数量',
      children: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: '指标名称',
      children: '营业利润',
      span: 1
    },
    {
      key: '94',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_60"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc120'></Input></Form.Item>,
      span: 1
    },
    {
      key: '95',
      label: '数量',
      children: <Form.Item name="company_runningsum_14"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }, 
    {
      key: '96',
      label: '指标名称',
      children: '营业外收入',
      span: 1
    },
    {
      key: '97',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_62"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc227'></Input></Form.Item>,
      span: 1
    },
    {
      key: '98',
      label: '数量',
      children: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '99',
      label: '指标名称',
      children: '营业外支出',
      span: 1
    },
    {
      key: '100',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_64"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc230'></Input></Form.Item>,
      span: 1
    },
    {
      key: '101',
      label: '数量',
      children: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '续表',
      children: '-',
      span: 3
    },  
    {
      key: '102',
      label: '指标名称',
      children: '利润总额',
      span: 1
    },
    {
      key: '103',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_66"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc234'></Input></Form.Item>,
      span: 1
    },
    {
      key: '104',
      label: '数量',
      children: <Form.Item name="company_runningsum_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: '指标名称',
      children: '净利润',
      span: 1
    },
    {
      key: '106',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_68"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc12'></Input></Form.Item>,
      span: 1
    },
    {
      key: '107',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_69"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '108',
      label: '指标名称',
      children: '所得税费用',
      span: 1
    },
    {
      key: '109',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_70"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc231'></Input></Form.Item>,
      span: 1
    },
    {
      key: '110',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_71"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '111',
      label: '指标名称',
      children: '实际上缴税费总额',
      span: 1
    },
    {
      key: '112',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_72"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc13'></Input></Form.Item>,
      span: 1
    },
    {
      key: '113',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_73"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '114',
      label: '指标名称',
      children: '其中：增值税',
      span: 1
    },
    {
      key: '115',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_74"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc14'></Input></Form.Item>,
      span: 1
    },
    {
      key: '116',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_75"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '117',
      label: '指标名称',
      children: '所得税',
      span: 1
    },
    {
      key: '118',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_76"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc16'></Input></Form.Item>,
      span: 1
    },
    {
      key: '119',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_77"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '120',
      label: '指标名称',
      children: '减免税总额',
      span: 1
    },
    {
      key: '121',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_78"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc17'></Input></Form.Item>,
      span: 1
    },
    {
      key: '122',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_79"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '123',
      label: '指标名称',
      children: '其中：增值税',
      span: 1
    },
    {
      key: '124',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_80"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc18'></Input></Form.Item>,
      span: 1
    },
    {
      key: '125',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_81"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '126',
      label: '指标名称',
      children: '所得税',
      span: 1
    },
    {
      key: '127',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_82"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc20'></Input></Form.Item>,
      span: 1
    },
    {
      key: '128',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_83"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '129',
      label: '指标名称',
      children: '其中：享受高新技术企业所得税减免',
      span: 1
    },
    {
      key: '130',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_84"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc20_1'></Input></Form.Item>,
      span: 1
    },
    {
      key: '131',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_85"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '132',
      label: '指标名称',
      children: '研发加计扣除所得税减免',
      span: 1
    },
    {
      key: '133',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_86"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc20_2'></Input></Form.Item>,
      span: 1
    },
    {
      key: '134',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_87"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '135',
      label: '指标名称',
      children: '技术转让所得税减免',
      span: 1
    },
    {
      key: '136',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_88"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc20_3'></Input></Form.Item>,
      span: 1
    },
    {
      key: '137',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_89"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '138',
      label: '指标名称',
      children: '应交增值税',
      span: 1
    },
    {
      key: '139',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_90"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc62'></Input></Form.Item>,
      span: 1
    },
    {
      key: '140',
      label: '数量',
      children: <Form.Item name="company_runningsum_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '141',
      label: '指标名称',
      children: '本年应付职工薪酬（本年贷方累计发生额）',
      span: 1
    },
    {
      key: '142',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_92"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc51'></Input></Form.Item>,
      span: 1
    },
    {
      key: '143',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_93"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '144',
      label: '指标名称',
      children: '资产总计',
      span: 1
    },
    {
      key: '145',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_94"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc24'></Input></Form.Item>,
      span: 1
    },
    {
      key: '146',
      label: '数量',
      children: <Form.Item name="FinanceStatusInfo_38"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '147',
      label: '指标名称',
      children: '其中：流动资产合计',
      span: 1
    },
    {
      key: '148',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_96"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc25'></Input></Form.Item>,
      span: 1
    },
    {
      key: '149',
      label: '数量',
      children: <Form.Item name="company_runningsum_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '150',
      label: '指标名称',
      children: '非流动资产合计',
      span: 1
    },
    {
      key: '151',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_98"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc27_1'></Input></Form.Item>,
      span: 1
    },
    {
      key: '152',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_99"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '153',
      label: '指标名称',
      children: '其中：开发支出',
      span: 1
    },
    {
      key: '154',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_100"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc238'></Input></Form.Item>,
      span: 1
    },
    {
      key: '155',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_101"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '156',
      label: '指标名称',
      children: '其中：固定资产净值',
      span: 1
    },
    {
      key: '157',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_102"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc29'></Input></Form.Item>,
      span: 1
    },
    {
      key: '158',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_103"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '159',
      label: '指标名称',
      children: '无形资产',
      span: 1
    },
    {
      key: '160',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_104"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc30'></Input></Form.Item>,
      span: 1
    },
    {
      key: '161',
      label: '数量',
      children: <Form.Item name="company_runningsum_24"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '162',
      label: '指标名称',
      children: '其中：累计折旧',
      span: 1
    },
    {
      key: '163',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_106"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc65'></Input></Form.Item>,
      span: 1
    },
    {
      key: '164',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_107"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '165',
      label: '指标名称',
      children: '其中：本年折旧',
      span: 1
    },
    {
      key: '166',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_108"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc61'></Input></Form.Item>,
      span: 1
    },
    {
      key: '167',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_109"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '168',
      label: '指标名称',
      children: '流动负债合计',
      span: 1
    },
    {
      key: '169',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_110"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc237'></Input></Form.Item>,
      span: 1
    },
    {
      key: '170',
      label: '数量',
      children: <Form.Item name="company_runningsum_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '171',
      label: '指标名称',
      children: '年末负债合计',
      span: 1
    },
    {
      key: '172',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_112"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc31'></Input></Form.Item>,
      span: 1
    },
    {
      key: '173',
      label: '数量',
      children: <Form.Item name="company_runningsum_30"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '174',
      label: '指标名称',
      children: '其中：存量银行贷款额',
      span: 1
    },
    {
      key: '175',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_114"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc32'></Input></Form.Item>,
      span: 1
    },
    {
      key: '176',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_115"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '177',
      label: '指标名称',
      children: '年末所有者权益（股东权益）',
      span: 1
    },
    {
      key: '178',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_116"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc33'></Input></Form.Item>,
      span: 1
    },
    {
      key: '179',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_117"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '180',
      label: '指标名称',
      children: '其中：实收资本（股本）',
      span: 1
    },
    {
      key: '181',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_118"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc34'></Input></Form.Item>,
      span: 1
    },
    {
      key: '182',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_119"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '183',
      label: '指标名称',
      children: '其中：企业上市融资股本',
      span: 1
    },
    {
      key: '184',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_120"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc63'></Input></Form.Item>,
      span: 1
    },
    {
      key: '185',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_121"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '186',
      label: '指标名称',
      children: '其中：企业境外上市融资股本',
      span: 1
    },
    {
      key: '187',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_122"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc50'></Input></Form.Item>,
      span: 1
    },
    {
      key: '188',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_123"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '189',
      label: '指标名称',
      children: '对境外直接投资额',
      span: 1
    },
    {
      key: '190',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_124"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc39'></Input></Form.Item>,
      span: 1
    },
    {
      key: '191',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_125"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '192',
      label: '指标名称',
      children: '本年完成固定资产投资额',
      span: 1
    },
    {
      key: '193',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_126"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc40'></Input></Form.Item>,
      span: 1
    },
    {
      key: '194',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_127"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '195',
      label: '指标名称',
      children: '规模以上工业企业及重点耗能企业综合能源消费量',
      span: 1
    },
    {
      key: '196',
      label: '代码',
      children: <Form.Item name="Tech_EcoInfo_128"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc41 '></Input></Form.Item>,
      span: 1
    },
    {
      key: '197',
      label: '数量',
      children: <Form.Item name="Tech_EcoInfo_129"><Input disabled={disableVar} addonAfter='吨标准煤' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      label: '补充资料',
      children: '企业当年是否获得风险投资(QC226_1)：2.否若是，请注明企业获得的风险投资的阶段是 (QC226_2)：未选当年获得创业风险投资机构的风险投资额为(QC226)：0千元',
      span: 3
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
          <Descriptions title="企业经济概况信息" bordered items={items} />
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