import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
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

export default function CompanyEcoInfo(props) {

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
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('CompanyEcoInfo')
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
      children: <span style={{fontSize: '16px'}}>GQ-002</span>,
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
      children: <DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}></span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>工业总产值（当年价格）</span>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc02</span>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>营业收入</span>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc05_0</span>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_1"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：主营业务收入</span>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc55</span>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：技术收入</span>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc06</span>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：技术转让收入</span>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc06_1</span>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技术承包收入</span>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc06_2</span>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技术咨询与服务收入</span>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc06_3</span>,
      span: 1
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>接受委托研究开发收入</span>,
      span: 1
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc06_4</span>,
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>产品销售收入</span>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc07</span>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：高新技术产品</span>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc09</span>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>商品销售收入</span>,
      span: 1
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc10</span>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其他营业收入</span>,
      span: 1
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc49</span>,
      span: 1
    },
    {
      key: '41',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>进出口总额</span>,
      span: 1
    },
    {
      key: '43',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc52</span>,
      span: 1
    },
    {
      key: '44',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：出口总额</span>,
      span: 1
    },
    {
      key: '46',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc11</span>,
      span: 1
    },
    {
      key: '47',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：高新技术产品出口</span>,
      span: 1
    },
    {
      key: '49',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc38</span>,
      span: 1
    },
    {
      key: '50',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技术服务出口</span>,
      span: 1
    },
    {
      key: '52',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc11_1</span>,
      span: 1
    },
    {
      key: '53',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>营业成本</span>,
      span: 1
    },
    {
      key: '55',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc220</span>,
      span: 1
    },
    {
      key: '56',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>税金及附加</span>,
      span: 1
    },
    {
      key: '58',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc221</span>,
      span: 1
    },
    {
      key: '59',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '60',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>销售费用</span>,
      span: 1
    },
    {
      key: '61',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc222</span>,
      span: 1
    },
    {
      key: '62',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_5"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>管理费用</span>,
      span: 1
    },
    {
      key: '64',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc223</span>,
      span: 1
    },
    {
      key: '65',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '66',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>研发费用</span>,
      span: 1
    },
    {
      key: '67',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc236</span>,
      span: 1
    },
    {
      key: '68',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>财务费用</span>,
      span: 1
    },
    {
      key: '70',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc224</span>,
      span: 1
    },
    {
      key: '71',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>资产减值损失</span>,
      span: 1
    },
    {
      key: '73',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc228</span>,
      span: 1
    },
    {
      key: '74',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>信用减值损失</span>,
      span: 1
    },
    {
      key: '76',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc235</span>,
      span: 1
    },
    {
      key: '77',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>公允价值变动收益</span>,
      span: 1
    },
    {
      key: '79',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc229</span>,
      span: 1
    },
    {
      key: '80',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '81',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>投资收益</span>,
      span: 1
    },
    {
      key: '82',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc225</span>,
      span: 1
    },
    {
      key: '83',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>净敞口套期收益</span>,
      span: 1
    },
    {
      key: '85',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc239</span>,
      span: 1
    },
    {
      key: '86',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>资产处置收益</span>,
      span: 1
    },
    {
      key: '88',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc233</span>,
      span: 1
    },
    {
      key: '89',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其他收益</span>,
      span: 1
    },
    {
      key: '91',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc232</span>,
      span: 1
    },
    {
      key: '92',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>营业利润</span>,
      span: 1
    },
    {
      key: '94',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc120</span>,
      span: 1
    },
    {
      key: '95',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_14"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }, 
    {
      key: '96',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>营业外收入</span>,
      span: 1
    },
    {
      key: '97',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc227</span>,
      span: 1
    },
    {
      key: '98',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '99',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>营业外支出</span>,
      span: 1
    },
    {
      key: '100',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc230</span>,
      span: 1
    },
    {
      key: '101',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>续表</span>,
      children: <span style={{fontSize: '16px'}}>-</span>,
      span: 3
    },  
    {
      key: '102',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>利润总额</span>,
      span: 1
    },
    {
      key: '103',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc234</span>,
      span: 1
    },
    {
      key: '104',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>净利润</span>,
      span: 1
    },
    {
      key: '106',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc12</span>,
      span: 1
    },
    {
      key: '107',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="GongShang_property_6"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '108',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>所得税费用</span>,
      span: 1
    },
    {
      key: '109',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc231</span>,
      span: 1
    },
    {
      key: '110',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '111',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>实际上缴税费总额</span>,
      span: 1
    },
    {
      key: '112',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc13</span>,
      span: 1
    },
    {
      key: '113',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="GongShang_property_7"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '114',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：增值税</span>,
      span: 1
    },
    {
      key: '115',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc14</span>,
      span: 1
    },
    {
      key: '116',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_75"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '117',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>所得税</span>,
      span: 1
    },
    {
      key: '118',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc16</span>,
      span: 1
    },
    {
      key: '119',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_77"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '120',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>减免税总额</span>,
      span: 1
    },
    {
      key: '121',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc17</span>,
      span: 1
    },
    {
      key: '122',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_79"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '123',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：增值税</span>,
      span: 1
    },
    {
      key: '124',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc18</span>,
      span: 1
    },
    {
      key: '125',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_81"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '126',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>所得税</span>,
      span: 1
    },
    {
      key: '127',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc20</span>,
      span: 1
    },
    {
      key: '128',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_83"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '129',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：享受高新技术企业所得税减免</span>,
      span: 1
    },
    {
      key: '130',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc20_1</span>,
      span: 1
    },
    {
      key: '131',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_85"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '132',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>研发加计扣除所得税减免</span>,
      span: 1
    },
    {
      key: '133',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc20_2</span>,
      span: 1
    },
    {
      key: '134',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_87"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '135',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技术转让所得税减免</span>,
      span: 1
    },
    {
      key: '136',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc20_3</span>,
      span: 1
    },
    {
      key: '137',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_89"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '138',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>应交增值税</span>,
      span: 1
    },
    {
      key: '139',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc62</span>,
      span: 1
    },
    {
      key: '140',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '141',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>本年应付职工薪酬（本年贷方累计发生额）</span>,
      span: 1
    },
    {
      key: '142',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc51</span>,
      span: 1
    },
    {
      key: '143',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '144',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>资产总计</span>,
      span: 1
    },
    {
      key: '145',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc24</span>,
      span: 1
    },
    {
      key: '146',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="FinanceStatusInfo_38"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '147',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：流动资产合计</span>,
      span: 1
    },
    {
      key: '148',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc25</span>,
      span: 1
    },
    {
      key: '149',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '150',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>非流动资产合计</span>,
      span: 1
    },
    {
      key: '151',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc27_1</span>,
      span: 1
    },
    {
      key: '152',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_99"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '153',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：开发支出</span>,
      span: 1
    },
    {
      key: '154',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc238</span>,
      span: 1
    },
    {
      key: '155',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_101"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '156',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：固定资产净值</span>,
      span: 1
    },
    {
      key: '157',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc29</span>,
      span: 1
    },
    {
      key: '158',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_22"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '159',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>无形资产</span>,
      span: 1
    },
    {
      key: '160',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc30</span>,
      span: 1
    },
    {
      key: '161',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_24"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '162',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：累计折旧</span>,
      span: 1
    },
    {
      key: '163',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc65</span>,
      span: 1
    },
    {
      key: '164',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_26"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '165',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：本年折旧</span>,
      span: 1
    },
    {
      key: '166',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc61</span>,
      span: 1
    },
    {
      key: '167',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_109"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '168',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>流动负债合计</span>,
      span: 1
    },
    {
      key: '169',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc237</span>,
      span: 1
    },
    {
      key: '170',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '171',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>年末负债合计</span>,
      span: 1
    },
    {
      key: '172',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc31</span>,
      span: 1
    },
    {
      key: '173',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_30"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '174',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：存量银行贷款额</span>,
      span: 1
    },
    {
      key: '175',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc32</span>,
      span: 1
    },
    {
      key: '176',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_115"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '177',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>年末所有者权益（股东权益）</span>,
      span: 1
    },
    {
      key: '178',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc33</span>,
      span: 1
    },
    {
      key: '179',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '180',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：实收资本（股本）</span>,
      span: 1
    },
    {
      key: '181',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc34</span>,
      span: 1
    },
    {
      key: '182',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_runningsum_32"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '183',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：企业上市融资股本</span>,
      span: 1
    },
    {
      key: '184',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc63</span>,
      span: 1
    },
    {
      key: '185',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_121"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '186',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：企业境外上市融资股本</span>,
      span: 1
    },
    {
      key: '187',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc50</span>,
      span: 1
    },
    {
      key: '188',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_123"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '189',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>对境外直接投资额</span>,
      span: 1
    },
    {
      key: '190',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc39</span>,
      span: 1
    },
    {
      key: '191',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_125"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '192',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>本年完成固定资产投资额</span>,
      span: 1
    },
    {
      key: '193',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc40</span>,
      span: 1
    },
    {
      key: '194',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_127"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '195',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>规模以上工业企业及重点耗能企业综合能源消费量</span>,
      span: 1
    },
    {
      key: '196',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qc41 </span>,
      span: 1
    },
    {
      key: '197',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_EcoInfo_129"><Input disabled={disableVar} addonAfter='吨标准煤' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}></span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>补充资料</span>,
      children: <span style={{fontSize: '16px'}}>企业当年是否获得风险投资(QC226_1)：2.否若是，请注明企业获得的风险投资的阶段是 (QC226_2)：未选当年获得创业风险投资机构的风险投资额为(QC226)：0千元</span>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=CompanyEcoInfo', {
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
        history.push('/auto_fill/user/login')
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】企业经济概况信息" bordered items={items} />
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
              onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}