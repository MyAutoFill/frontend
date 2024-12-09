import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Select, Form } from 'antd';
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

export default function ResearchDevelopActivity(props) {

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
        reqRatioConfig('ResearchDevelopActivity')
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
      children: <span style={{fontSize: '16px'}}>GQ-005</span>,
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
      label: <span style={{fontSize: '16px'}}>一、研究开发人员情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>研究开发人员合计</span>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj09</span>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：管理和服务人员</span>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj67</span>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_5"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：全职人员</span>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj09_1</span>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：本科毕业及以上人员</span>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj09_2</span>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_9"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：外聘人员</span>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj09_3</span>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_11"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>二、研究开发费用情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>研究开发费用合计</span>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj20</span>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>1.人员人工费用</span>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_1</span>,
      span: 1
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>2.直接投入费用</span>,
      span: 1
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_2</span>,
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>3.折旧费用与长期待摊费用</span>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_3</span>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>4.无形资产摊销费用</span>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_4</span>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>5.设计费用</span>,
      span: 1
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_6</span>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>6.装备调试费用与试验费用</span>,
      span: 1
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_7</span>,
      span: 1
    },
    {
      key: '41',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>7.委托外部研究开发费用</span>,
      span: 1
    },
    {
      key: '43',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj33</span>,
      span: 1
    },
    {
      key: '44',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：委托境内研究机构</span>,
      span: 1
    },
    {
      key: '46',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj33_1</span>,
      span: 1
    },
    {
      key: '47',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>委托境内高等学校</span>,
      span: 1
    },
    {
      key: '49',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj33_2</span>,
      span: 1
    },
    {
      key: '50',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>委托境内企业</span>,
      span: 1
    },
    {
      key: '52',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj33_4</span>,
      span: 1
    },
    {
      key: '53',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>委托境外机构</span>,
      span: 1
    },
    {
      key: '55',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj33_3</span>,
      span: 1
    },
    {
      key: '56',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>8.其他费用</span>,
      span: 1
    },
    {
      key: '58',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj23_5</span>,
      span: 1
    },
    {
      key: '59',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_37"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>三、研究开发活动资产情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '60',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>当年形成用于研究开发的固定资产</span>,
      span: 1
    },
    {
      key: '61',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj250</span>,
      span: 1
    },
    {
      key: '62',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_39"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：仪器和设备</span>,
      span: 1
    },
    {
      key: '64',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj251</span>,
      span: 1
    },
    {
      key: '65',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_41"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>四、研究开发支出资金来源情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '66',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>1.来自企业自筹</span>,
      span: 1
    },
    {
      key: '67',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj256</span>,
      span: 1
    },
    {
      key: '68',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_43"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>2.来自政府部门</span>,
      span: 1
    },
    {
      key: '70',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj252</span>,
      span: 1
    },
    {
      key: '71',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_45"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>3.来自银行贷款</span>,
      span: 1
    },
    {
      key: '73',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj253</span>,
      span: 1
    },
    {
      key: '74',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_47"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>4.来自风险投资</span>,
      span: 1
    },
    {
      key: '76',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj254</span>,
      span: 1
    },
    {
      key: '77',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_49"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>5.来自其他渠道</span>,
      span: 1
    },
    {
      key: '79',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj255</span>,
      span: 1
    },
    {
      key: '80',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_51"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>五、企业办（境内）研发机构情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '81',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末机构数</span>,
      span: 1
    },
    {
      key: '82',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi01</span>,
      span: 1
    },
    {
      key: '83',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_53"><Input disabled={disableVar} addonAfter='家' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>机构研究开发人员合计</span>,
      span: 1
    },
    {
      key: '85',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi07_0</span>,
      span: 1
    },
    {
      key: '86',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：博士毕业</span>,
      span: 1
    },
    {
      key: '88',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi07_1</span>,
      span: 1
    },
    {
      key: '89',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_57"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：硕士毕业</span>,
      span: 1
    },
    {
      key: '91',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi07_2</span>,
      span: 1
    },
    {
      key: '92',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_59"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>机构研究开发费用</span>,
      span: 1
    },
    {
      key: '94',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi14_1</span>,
      span: 1
    },
    {
      key: '95',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_61"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }, 
    {
      label: <span style={{fontSize: '16px'}}>六、研究开发产出及相关情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>（一）自主知识产权情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '96',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>当年专利申请数</span>,
      span: 1
    },
    {
      key: '97',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj55</span>,
      span: 1
    },
    {
      key: '98',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_63"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '99',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：申请发明专利</span>,
      span: 1
    },
    {
      key: '100',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj56</span>,
      span: 1
    },
    {
      key: '101',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_65"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '102',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：申请国内发明专利</span>,
      span: 1
    },
    {
      key: '103',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj56_1</span>,
      span: 1
    },
    {
      key: '104',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_67"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：申请欧美日专利</span>,
      span: 1
    },
    {
      key: '106',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj55_1</span>,
      span: 1
    },
    {
      key: '107',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_69"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '108',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：申请PCT专利</span>,
      span: 1
    },
    {
      key: '109',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj55_2</span>,
      span: 1
    },
    {
      key: '110',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_71"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '111',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>当年专利授权数</span>,
      span: 1
    },
    {
      key: '112',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj74</span>,
      span: 1
    },
    {
      key: '113',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_73"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '114',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：授权发明专利</span>,
      span: 1
    },
    {
      key: '115',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj57</span>,
      span: 1
    },
    {
      key: '116',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_75"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '117',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：授权国内发明专利</span>,
      span: 1
    },
    {
      key: '118',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj57_1</span>,
      span: 1
    },
    {
      key: '119',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_77"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '120',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：授权欧美日专利</span>,
      span: 1
    },
    {
      key: '121',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj75</span>,
      span: 1
    },
    {
      key: '122',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_79"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '123',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末拥有有效专利数</span>,
      span: 1
    },
    {
      key: '124',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj83</span>,
      span: 1
    },
    {
      key: '125',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_81"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '126',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：拥有境外授权专利</span>,
      span: 1
    },
    {
      key: '127',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj83_1</span>,
      span: 1
    },
    {
      key: '128',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_83"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '129',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：拥有欧美日专利</span>,
      span: 1
    },
    {
      key: '130',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj82</span>,
      span: 1
    },
    {
      key: '131',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_85"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '132',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：拥有发明专利</span>,
      span: 1
    },
    {
      key: '133',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj73</span>,
      span: 1
    },
    {
      key: '134',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_87"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '135',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：境外授权发明专利</span>,
      span: 1
    },
    {
      key: '136',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj73_1</span>,
      span: 1
    },
    {
      key: '137',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_89"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: <span style={{fontSize: '16px'}}></span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>续表</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '138',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>专利所有权转让及许可</span>,
      span: 1
    },
    {
      key: '139',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi23</span>,
      span: 1
    },
    {
      key: '140',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_91"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '141',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>专利所有权转让及许可收入</span>,
      span: 1
    },
    {
      key: '142',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi24</span>,
      span: 1
    },
    {
      key: '143',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_93"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: <span style={{fontSize: '16px'}}>（二）新产品生产及销售情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '144',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>新产品产值</span>,
      span: 1
    },
    {
      key: '145',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj70</span>,
      span: 1
    },
    {
      key: '146',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_95"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '147',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>新产品销售收入</span>,
      span: 1
    },
    {
      key: '148',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj71</span>,
      span: 1
    },
    {
      key: '149',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '150',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：出口</span>,
      span: 1
    },
    {
      key: '151',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj72</span>,
      span: 1
    },
    {
      key: '152',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="company_research_36"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: <span style={{fontSize: '16px'}}>（三）其他情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '153',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>发表科技论文</span>,
      span: 1
    },
    {
      key: '154',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi25</span>,
      span: 1
    },
    {
      key: '155',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_101"><Input disabled={disableVar} addonAfter='篇' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '156',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末拥有注册商标</span>,
      span: 1
    },
    {
      key: '157',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj79</span>,
      span: 1
    },
    {
      key: '158',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_103"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '159',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年注册商标</span>,
      span: 1
    },
    {
      key: '160',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj77</span>,
      span: 1
    },
    {
      key: '161',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_105"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '162',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：境外注册商标</span>,
      span: 1
    },
    {
      key: '163',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj79_1</span>,
      span: 1
    },
    {
      key: '164',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_107"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '165',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年境外注册商标</span>,
      span: 1
    },
    {
      key: '166',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj79_2</span>,
      span: 1
    },
    {
      key: '167',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_109"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '168',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>拥有软件著作权</span>,
      span: 1
    },
    {
      key: '169',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj85</span>,
      span: 1
    },
    {
      key: '170',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_111"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '171',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年获得软件著作权</span>,
      span: 1
    },
    {
      key: '172',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj85_1</span>,
      span: 1
    },
    {
      key: '173',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_113"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '174',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>拥有集成电路布图</span>,
      span: 1
    },
    {
      key: '175',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj86</span>,
      span: 1
    },
    {
      key: '176',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_115"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '177',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年获得集成电路布图</span>,
      span: 1
    },
    {
      key: '178',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj86_1</span>,
      span: 1
    },
    {
      key: '179',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_117"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '180',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>拥有植物新品种</span>,
      span: 1
    },
    {
      key: '181',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj87</span>,
      span: 1
    },
    {
      key: '182',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_119"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '183',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年获得植物新品种</span>,
      span: 1
    },
    {
      key: '184',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj87_1</span>,
      span: 1
    },
    {
      key: '185',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_121"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '186',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>拥有国家一类新药品种</span>,
      span: 1
    },
    {
      key: '187',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj101</span>,
      span: 1
    },
    {
      key: '188',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_123"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '189',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年获得国家一类新药证书</span>,
      span: 1
    },
    {
      key: '190',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj101_1</span>,
      span: 1
    },
    {
      key: '191',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_125"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '192',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>拥有国家一级中药保护品种</span>,
      span: 1
    },
    {
      key: '193',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj100</span>,
      span: 1
    },
    {
      key: '194',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_127"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '195',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年获得国家一级中药保护品证书</span>,
      span: 1
    },
    {
      key: '196',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj100_1</span>,
      span: 1
    },
    {
      key: '197',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_129"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '198',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>累计形成国际标准</span>,
      span: 1
    },
    {
      key: '199',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj98</span>,
      span: 1
    },
    {
      key: '200',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_131"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '201',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年形成国际标准</span>,
      span: 1
    },
    {
      key: '202',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj98_1</span>,
      span: 1
    },
    {
      key: '203',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_133"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '204',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>累计形成国家或行业标准</span>,
      span: 1
    },
    {
      key: '205',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi27</span>,
      span: 1
    },
    {
      key: '206',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_135"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '207',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：当年形成国家或行业标准</span>,
      span: 1
    },
    {
      key: '208',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qi27_1</span>,
      span: 1
    },
    {
      key: '209',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_137"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>七、技术合同交易情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '210',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>认定登记的技术合同项数</span>,
      span: 1
    },
    {
      key: '211',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80_1</span>,
      span: 1
    },
    {
      key: '212',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_139"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '213',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：从境外引进技术合同数</span>,
      span: 1
    },
    {
      key: '214',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80_2</span>,
      span: 1
    },
    {
      key: '215',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_141"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '216',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：向境外输出技术合同数</span>,
      span: 1
    },
    {
      key: '217',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80_3</span>,
      span: 1
    },
    {
      key: '218',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_143"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '219',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>认定登记的技术合同成交金额</span>,
      span: 1
    },
    {
      key: '220',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80</span>,
      span: 1
    },
    {
      key: '221',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_145"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '222',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：从境外引进技术合同成交金额</span>,
      span: 1
    },
    {
      key: '223',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80_4</span>,
      span: 1
    },
    {
      key: '224',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_147"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '225',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>其中：向境外输出技术合同成交金额</span>,
      span: 1
    },
    {
      key: '226',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj80_5</span>,
      span: 1
    },
    {
      key: '227',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_149"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>八、其他相关情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      label: <span style={{fontSize: '16px'}}>（一）技术改造和技术获取情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '228',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>技术改造经费支出</span>,
      span: 1
    },
    {
      key: '229',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj58</span>,
      span: 1
    },
    {
      key: '230',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_151"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '231',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>购买境内技术经费支出</span>,
      span: 1
    },
    {
      key: '232',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj62</span>,
      span: 1
    },
    {
      key: '233',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_153"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '234',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>引进境外技术经费支出</span>,
      span: 1
    },
    {
      key: '235',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj59</span>,
      span: 1
    },
    {
      key: '236',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_155"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '237',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>引进境外技术的消化吸收经费支出</span>,
      span: 1
    },
    {
      key: '238',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj61</span>,
      span: 1
    },
    {
      key: '239',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_157"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}>（二）企业在境外设立分支机构情况</span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '240',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末境外营销服务机构数</span>,
      span: 1
    },
    {
      key: '241',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj99</span>,
      span: 1
    },
    {
      key: '242',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_159"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '243',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末境外技术研发机构数</span>,
      span: 1
    },
    {
      key: '244',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj90</span>,
      span: 1
    },
    {
      key: '245',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_161"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '246',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>期末境外生产制造基地数</span>,
      span: 1
    },
    {
      key: '247',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj92</span>,
      span: 1
    },
    {
      key: '248',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_163"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '249',
      label: <span style={{fontSize: '16px'}}>指标名称</span>,
      children: <span style={{fontSize: '16px'}}>企业当年在境外设立分支机构数量</span>,
      span: 1
    },
    {
      key: '250',
      label: <span style={{fontSize: '16px'}}>代码</span>,
      children: <span style={{fontSize: '16px'}}>qj102</span>,
      span: 1
    },
    {
      key: '251',
      label: <span style={{fontSize: '16px'}}>数量</span>,
      children: <Form.Item name="Tech_activity_165"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: <span style={{fontSize: '16px'}}></span>,
      children: <span style={{fontSize: '16px'}}></span>,
      span: 3
    },
    {
      key: '252',
      label: <span style={{fontSize: '16px'}}>企业在境外设立的技术研发机构所在的国家</span>,
      children: 
        <Form.Item name="Tech_activity_252">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择对应国家或地区"
            optionFilterProp="label"
            options={[
              {
                value: '美国',
                label: '美国',
              },
              {
                value: '欧盟',
                label: '欧盟',
              },
              {
                value: '日本',
                label: '日本',
              },
              {
                value: '其他',
                label: '其他',
              }
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '253',
      label: <span style={{fontSize: '16px'}}>知识产权获取方式</span>,
      children: 
        <Form.Item name="Tech_activity_253">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择对应获取方式"
            optionFilterProp="label"
            options={[
              {
                value: '自主研发',
                label: '自主研发',
              },
              {
                value: '受让',
                label: '受让',
              },
              {
                value: '受赠',
                label: '受赠',
              },
              {
                value: '并购',
                label: '并购',
              },
              {
                value: '通过5年以上的独占许可',
                label: '通过5年以上的独占许可',
              }
            ]}
          />
        </Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=ResearchDevelopActivity', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】研究开发活动及相关情况" bordered items={items} />
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