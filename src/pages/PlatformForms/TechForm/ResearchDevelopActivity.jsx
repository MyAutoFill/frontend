import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function ResearchDevelopActivity(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
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

  const [OuterResearchInstituteLocation, setOuterResearchInstituteLocation] = useState('')

  const items = [
    {
      key: '1',
      label: '表号',
      children: 'GQ-005',
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
      children: <DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      label: '一、研究开发人员情况',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '研究开发人员合计',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: 'qj09',
      span: 1
    },
    {
      key: '8',
      label: '数量',
      children: <Form.Item name="company_research_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '其中：管理和服务人员',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: 'qj67',
      span: 1
    },
    {
      key: '11',
      label: '数量',
      children: <Form.Item name="Tech_activity_5"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '其中：全职人员',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: 'qj09_1',
      span: 1
    },
    {
      key: '14',
      label: '数量',
      children: <Form.Item name="Tech_activity_7"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '其中：本科毕业及以上人员',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: 'qj09_2',
      span: 1
    },
    {
      key: '17',
      label: '数量',
      children: <Form.Item name="Tech_activity_9"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '其中：外聘人员',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: 'qj09_3',
      span: 1
    },
    {
      key: '20',
      label: '数量',
      children: <Form.Item name="Tech_activity_11"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '二、研究开发费用情况',
      children: '',
      span: 3
    },
    {
      key: '21',
      label: '指标名称',
      children: '研究开发费用合计',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: 'qj20',
      span: 1
    },
    {
      key: '23',
      label: '数量',
      children: <Form.Item name="Tech_activity_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '1.人员人工费用',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: 'qj23_1',
      span: 1
    },
    {
      key: '26',
      label: '数量',
      children: <Form.Item name="Tech_activity_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '2.直接投入费用',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: 'qj23_2',
      span: 1
    },
    {
      key: '29',
      label: '数量',
      children: <Form.Item name="Tech_activity_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: '指标名称',
      children: '3.折旧费用与长期待摊费用',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: 'qj23_3',
      span: 1
    },
    {
      key: '32',
      label: '数量',
      children: <Form.Item name="company_research_9"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '指标名称',
      children: '4.无形资产摊销费用',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: 'qj23_4',
      span: 1
    },
    {
      key: '35',
      label: '数量',
      children: <Form.Item name="company_research_10"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '5.设计费用',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: 'qj23_6',
      span: 1
    },
    {
      key: '38',
      label: '数量',
      children: <Form.Item name="Tech_activity_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '6.装备调试费用与试验费用',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: 'qj23_7',
      span: 1
    },
    {
      key: '41',
      label: '数量',
      children: <Form.Item name="Tech_activity_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '7.委托外部研究开发费用',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: 'qj33',
      span: 1
    },
    {
      key: '44',
      label: '数量',
      children: <Form.Item name="Tech_activity_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: '其中：委托境内研究机构',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: 'qj33_1',
      span: 1
    },
    {
      key: '47',
      label: '数量',
      children: <Form.Item name="Tech_activity_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '委托境内高等学校',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: 'qj33_2',
      span: 1
    },
    {
      key: '50',
      label: '数量',
      children: <Form.Item name="Tech_activity_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '委托境内企业',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: 'qj33_4',
      span: 1
    },
    {
      key: '53',
      label: '数量',
      children: <Form.Item name="Tech_activity_33"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '委托境外机构',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: 'qj33_3',
      span: 1
    },
    {
      key: '56',
      label: '数量',
      children: <Form.Item name="Tech_activity_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: '8.其他费用',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: 'qj23_5',
      span: 1
    },
    {
      key: '59',
      label: '数量',
      children: <Form.Item name="Tech_activity_37"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '三、研究开发活动资产情况',
      children: '',
      span: 3
    },
    {
      key: '60',
      label: '指标名称',
      children: '当年形成用于研究开发的固定资产',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: 'qj250',
      span: 1
    },
    {
      key: '62',
      label: '数量',
      children: <Form.Item name="Tech_activity_39"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '63',
      label: '指标名称',
      children: '其中：仪器和设备',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: 'qj251',
      span: 1
    },
    {
      key: '65',
      label: '数量',
      children: <Form.Item name="Tech_activity_41"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '四、研究开发支出资金来源情况',
      children: '',
      span: 3
    },
    {
      key: '66',
      label: '指标名称',
      children: '1.来自企业自筹',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: 'qj256',
      span: 1
    },
    {
      key: '68',
      label: '数量',
      children: <Form.Item name="Tech_activity_43"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '2.来自政府部门',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: 'qj252',
      span: 1
    },
    {
      key: '71',
      label: '数量',
      children: <Form.Item name="Tech_activity_45"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '72',
      label: '指标名称',
      children: '3.来自银行贷款',
      span: 1
    },
    {
      key: '73',
      label: '代码',
      children: 'qj253',
      span: 1
    },
    {
      key: '74',
      label: '数量',
      children: <Form.Item name="Tech_activity_47"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '75',
      label: '指标名称',
      children: '4.来自风险投资',
      span: 1
    },
    {
      key: '76',
      label: '代码',
      children: 'qj254',
      span: 1
    },
    {
      key: '77',
      label: '数量',
      children: <Form.Item name="Tech_activity_49"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '78',
      label: '指标名称',
      children: '5.来自其他渠道',
      span: 1
    },
    {
      key: '79',
      label: '代码',
      children: 'qj255',
      span: 1
    },
    {
      key: '80',
      label: '数量',
      children: <Form.Item name="Tech_activity_51"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '五、企业办（境内）研发机构情况',
      children: '',
      span: 3
    },
    {
      key: '81',
      label: '指标名称',
      children: '期末机构数',
      span: 1
    },
    {
      key: '82',
      label: '代码',
      children: 'qi01',
      span: 1
    },
    {
      key: '83',
      label: '数量',
      children: <Form.Item name="Tech_activity_53"><Input disabled={disableVar} addonAfter='家' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '84',
      label: '指标名称',
      children: '机构研究开发人员合计',
      span: 1
    },
    {
      key: '85',
      label: '代码',
      children: 'qi07_0',
      span: 1
    },
    {
      key: '86',
      label: '数量',
      children: <Form.Item name="company_research_27"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '87',
      label: '指标名称',
      children: '其中：博士毕业',
      span: 1
    },
    {
      key: '88',
      label: '代码',
      children: 'qi07_1',
      span: 1
    },
    {
      key: '89',
      label: '数量',
      children: <Form.Item name="Tech_activity_57"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '90',
      label: '指标名称',
      children: '其中：硕士毕业',
      span: 1
    },
    {
      key: '91',
      label: '代码',
      children: 'qi07_2',
      span: 1
    },
    {
      key: '92',
      label: '数量',
      children: <Form.Item name="Tech_activity_59"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '93',
      label: '指标名称',
      children: '机构研究开发费用',
      span: 1
    },
    {
      key: '94',
      label: '代码',
      children: 'qi14_1',
      span: 1
    },
    {
      key: '95',
      label: '数量',
      children: <Form.Item name="Tech_activity_61"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    }, 
    {
      label: '六、研究开发产出及相关情况',
      children: '',
      span: 3
    },
    {
      label: '（一）自主知识产权情况',
      children: '',
      span: 3
    },
    {
      key: '96',
      label: '指标名称',
      children: '当年专利申请数',
      span: 1
    },
    {
      key: '97',
      label: '代码',
      children: 'qj55',
      span: 1
    },
    {
      key: '98',
      label: '数量',
      children: <Form.Item name="Tech_activity_63"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '99',
      label: '指标名称',
      children: '其中：申请发明专利',
      span: 1
    },
    {
      key: '100',
      label: '代码',
      children: 'qj56',
      span: 1
    },
    {
      key: '101',
      label: '数量',
      children: <Form.Item name="Tech_activity_65"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '102',
      label: '指标名称',
      children: '其中：申请国内发明专利',
      span: 1
    },
    {
      key: '103',
      label: '代码',
      children: 'qj56_1',
      span: 1
    },
    {
      key: '104',
      label: '数量',
      children: <Form.Item name="Tech_activity_67"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '105',
      label: '指标名称',
      children: '其中：申请欧美日专利',
      span: 1
    },
    {
      key: '106',
      label: '代码',
      children: 'qj55_1',
      span: 1
    },
    {
      key: '107',
      label: '数量',
      children: <Form.Item name="Tech_activity_69"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '108',
      label: '指标名称',
      children: '其中：申请PCT专利',
      span: 1
    },
    {
      key: '109',
      label: '代码',
      children: 'qj55_2',
      span: 1
    },
    {
      key: '110',
      label: '数量',
      children: <Form.Item name="Tech_activity_71"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '111',
      label: '指标名称',
      children: '当年专利授权数',
      span: 1
    },
    {
      key: '112',
      label: '代码',
      children: 'qj74',
      span: 1
    },
    {
      key: '113',
      label: '数量',
      children: <Form.Item name="Tech_activity_73"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '114',
      label: '指标名称',
      children: '其中：授权发明专利',
      span: 1
    },
    {
      key: '115',
      label: '代码',
      children: 'qj57',
      span: 1
    },
    {
      key: '116',
      label: '数量',
      children: <Form.Item name="Tech_activity_75"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '117',
      label: '指标名称',
      children: '其中：授权国内发明专利',
      span: 1
    },
    {
      key: '118',
      label: '代码',
      children: 'qj57_1',
      span: 1
    },
    {
      key: '119',
      label: '数量',
      children: <Form.Item name="Tech_activity_77"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '120',
      label: '指标名称',
      children: '其中：授权欧美日专利',
      span: 1
    },
    {
      key: '121',
      label: '代码',
      children: 'qj75',
      span: 1
    },
    {
      key: '122',
      label: '数量',
      children: <Form.Item name="Tech_activity_79"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '123',
      label: '指标名称',
      children: '期末拥有有效专利数',
      span: 1
    },
    {
      key: '124',
      label: '代码',
      children: 'qj83',
      span: 1
    },
    {
      key: '125',
      label: '数量',
      children: <Form.Item name="Tech_activity_81"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '126',
      label: '指标名称',
      children: '其中：拥有境外授权专利',
      span: 1
    },
    {
      key: '127',
      label: '代码',
      children: 'qj83_1',
      span: 1
    },
    {
      key: '128',
      label: '数量',
      children: <Form.Item name="Tech_activity_83"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '129',
      label: '指标名称',
      children: '其中：拥有欧美日专利',
      span: 1
    },
    {
      key: '130',
      label: '代码',
      children: 'qj82',
      span: 1
    },
    {
      key: '131',
      label: '数量',
      children: <Form.Item name="Tech_activity_85"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '132',
      label: '指标名称',
      children: '其中：拥有发明专利',
      span: 1
    },
    {
      key: '133',
      label: '代码',
      children: 'qj73',
      span: 1
    },
    {
      key: '134',
      label: '数量',
      children: <Form.Item name="Tech_activity_87"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '135',
      label: '指标名称',
      children: '其中：境外授权发明专利',
      span: 1
    },
    {
      key: '136',
      label: '代码',
      children: 'qj73_1',
      span: 1
    },
    {
      key: '137',
      label: '数量',
      children: <Form.Item name="Tech_activity_89"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: '',
      children: '',
      span: 3
    },
    {
      label: '续表',
      children: '',
      span: 3
    },
    {
      key: '138',
      label: '指标名称',
      children: '专利所有权转让及许可',
      span: 1
    },
    {
      key: '139',
      label: '代码',
      children: 'qi23',
      span: 1
    },
    {
      key: '140',
      label: '数量',
      children: <Form.Item name="Tech_activity_91"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '141',
      label: '指标名称',
      children: '专利所有权转让及许可收入',
      span: 1
    },
    {
      key: '142',
      label: '代码',
      children: 'qi24',
      span: 1
    },
    {
      key: '143',
      label: '数量',
      children: <Form.Item name="Tech_activity_93"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: '（二）新产品生产及销售情况',
      children: '',
      span: 3
    },
    {
      key: '144',
      label: '指标名称',
      children: '新产品产值',
      span: 1
    },
    {
      key: '145',
      label: '代码',
      children: 'qj70',
      span: 1
    },
    {
      key: '146',
      label: '数量',
      children: <Form.Item name="Tech_activity_95"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '147',
      label: '指标名称',
      children: '新产品销售收入',
      span: 1
    },
    {
      key: '148',
      label: '代码',
      children: 'qj71',
      span: 1
    },
    {
      key: '149',
      label: '数量',
      children: <Form.Item name="company_research_35"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '150',
      label: '指标名称',
      children: '其中：出口',
      span: 1
    },
    {
      key: '151',
      label: '代码',
      children: 'qj72',
      span: 1
    },
    {
      key: '152',
      label: '数量',
      children: <Form.Item name="company_research_36"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      label: '（三）其他情况',
      children: '',
      span: 3
    },
    {
      key: '153',
      label: '指标名称',
      children: '发表科技论文',
      span: 1
    },
    {
      key: '154',
      label: '代码',
      children: 'qi25',
      span: 1
    },
    {
      key: '155',
      label: '数量',
      children: <Form.Item name="Tech_activity_101"><Input disabled={disableVar} addonAfter='篇' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '156',
      label: '指标名称',
      children: '期末拥有注册商标',
      span: 1
    },
    {
      key: '157',
      label: '代码',
      children: 'qj79',
      span: 1
    },
    {
      key: '158',
      label: '数量',
      children: <Form.Item name="Tech_activity_103"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '159',
      label: '指标名称',
      children: '其中：当年注册商标',
      span: 1
    },
    {
      key: '160',
      label: '代码',
      children: 'qj77',
      span: 1
    },
    {
      key: '161',
      label: '数量',
      children: <Form.Item name="Tech_activity_105"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '162',
      label: '指标名称',
      children: '其中：境外注册商标',
      span: 1
    },
    {
      key: '163',
      label: '代码',
      children: 'qj79_1',
      span: 1
    },
    {
      key: '164',
      label: '数量',
      children: <Form.Item name="Tech_activity_107"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '165',
      label: '指标名称',
      children: '其中：当年境外注册商标',
      span: 1
    },
    {
      key: '166',
      label: '代码',
      children: 'qj79_2',
      span: 1
    },
    {
      key: '167',
      label: '数量',
      children: <Form.Item name="Tech_activity_109"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '168',
      label: '指标名称',
      children: '拥有软件著作权',
      span: 1
    },
    {
      key: '169',
      label: '代码',
      children: 'qj85',
      span: 1
    },
    {
      key: '170',
      label: '数量',
      children: <Form.Item name="Tech_activity_111"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '171',
      label: '指标名称',
      children: '其中：当年获得软件著作权',
      span: 1
    },
    {
      key: '172',
      label: '代码',
      children: 'qj85_1',
      span: 1
    },
    {
      key: '173',
      label: '数量',
      children: <Form.Item name="Tech_activity_113"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '174',
      label: '指标名称',
      children: '拥有集成电路布图',
      span: 1
    },
    {
      key: '175',
      label: '代码',
      children: 'qj86',
      span: 1
    },
    {
      key: '176',
      label: '数量',
      children: <Form.Item name="Tech_activity_115"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '177',
      label: '指标名称',
      children: '其中：当年获得集成电路布图',
      span: 1
    },
    {
      key: '178',
      label: '代码',
      children: 'qj86_1',
      span: 1
    },
    {
      key: '179',
      label: '数量',
      children: <Form.Item name="Tech_activity_117"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '180',
      label: '指标名称',
      children: '拥有植物新品种',
      span: 1
    },
    {
      key: '181',
      label: '代码',
      children: 'qj87',
      span: 1
    },
    {
      key: '182',
      label: '数量',
      children: <Form.Item name="Tech_activity_119"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '183',
      label: '指标名称',
      children: '其中：当年获得植物新品种',
      span: 1
    },
    {
      key: '184',
      label: '代码',
      children: 'qj87_1',
      span: 1
    },
    {
      key: '185',
      label: '数量',
      children: <Form.Item name="Tech_activity_121"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '186',
      label: '指标名称',
      children: '拥有国家一类新药品种',
      span: 1
    },
    {
      key: '187',
      label: '代码',
      children: 'qj101',
      span: 1
    },
    {
      key: '188',
      label: '数量',
      children: <Form.Item name="Tech_activity_123"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '189',
      label: '指标名称',
      children: '其中：当年获得国家一类新药证书',
      span: 1
    },
    {
      key: '190',
      label: '代码',
      children: 'qj101_1',
      span: 1
    },
    {
      key: '191',
      label: '数量',
      children: <Form.Item name="Tech_activity_125"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '192',
      label: '指标名称',
      children: '拥有国家一级中药保护品种',
      span: 1
    },
    {
      key: '193',
      label: '代码',
      children: 'qj100',
      span: 1
    },
    {
      key: '194',
      label: '数量',
      children: <Form.Item name="Tech_activity_127"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },  
    {
      key: '195',
      label: '指标名称',
      children: '其中：当年获得国家一级中药保护品证书',
      span: 1
    },
    {
      key: '196',
      label: '代码',
      children: 'qj100_1',
      span: 1
    },
    {
      key: '197',
      label: '数量',
      children: <Form.Item name="Tech_activity_129"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '198',
      label: '指标名称',
      children: '累计形成国际标准',
      span: 1
    },
    {
      key: '199',
      label: '代码',
      children: 'qj98',
      span: 1
    },
    {
      key: '200',
      label: '数量',
      children: <Form.Item name="Tech_activity_131"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '201',
      label: '指标名称',
      children: '其中：当年形成国际标准',
      span: 1
    },
    {
      key: '202',
      label: '代码',
      children: 'qj98_1',
      span: 1
    },
    {
      key: '203',
      label: '数量',
      children: <Form.Item name="Tech_activity_133"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '204',
      label: '指标名称',
      children: '累计形成国家或行业标准',
      span: 1
    },
    {
      key: '205',
      label: '代码',
      children: 'qi27',
      span: 1
    },
    {
      key: '206',
      label: '数量',
      children: <Form.Item name="Tech_activity_135"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '207',
      label: '指标名称',
      children: '其中：当年形成国家或行业标准',
      span: 1
    },
    {
      key: '208',
      label: '代码',
      children: 'qi27_1',
      span: 1
    },
    {
      key: '209',
      label: '数量',
      children: <Form.Item name="Tech_activity_137"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '七、技术合同交易情况',
      children: '',
      span: 3
    },
    {
      key: '210',
      label: '指标名称',
      children: '认定登记的技术合同项数',
      span: 1
    },
    {
      key: '211',
      label: '代码',
      children: 'qj80_1',
      span: 1
    },
    {
      key: '212',
      label: '数量',
      children: <Form.Item name="Tech_activity_139"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '213',
      label: '指标名称',
      children: '其中：从境外引进技术合同数',
      span: 1
    },
    {
      key: '214',
      label: '代码',
      children: 'qj80_2',
      span: 1
    },
    {
      key: '215',
      label: '数量',
      children: <Form.Item name="Tech_activity_141"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '216',
      label: '指标名称',
      children: '其中：向境外输出技术合同数',
      span: 1
    },
    {
      key: '217',
      label: '代码',
      children: 'qj80_3',
      span: 1
    },
    {
      key: '218',
      label: '数量',
      children: <Form.Item name="Tech_activity_143"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '219',
      label: '指标名称',
      children: '认定登记的技术合同成交金额',
      span: 1
    },
    {
      key: '220',
      label: '代码',
      children: 'qj80',
      span: 1
    },
    {
      key: '221',
      label: '数量',
      children: <Form.Item name="Tech_activity_145"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '222',
      label: '指标名称',
      children: '其中：从境外引进技术合同成交金额',
      span: 1
    },
    {
      key: '223',
      label: '代码',
      children: 'qj80_4',
      span: 1
    },
    {
      key: '224',
      label: '数量',
      children: <Form.Item name="Tech_activity_147"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '225',
      label: '指标名称',
      children: '其中：向境外输出技术合同成交金额',
      span: 1
    },
    {
      key: '226',
      label: '代码',
      children: 'qj80_5',
      span: 1
    },
    {
      key: '227',
      label: '数量',
      children: <Form.Item name="Tech_activity_149"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '八、其他相关情况',
      children: '',
      span: 3
    },
    {
      label: '（一）技术改造和技术获取情况',
      children: '',
      span: 3
    },
    {
      key: '228',
      label: '指标名称',
      children: '技术改造经费支出',
      span: 1
    },
    {
      key: '229',
      label: '代码',
      children: 'qj58',
      span: 1
    },
    {
      key: '230',
      label: '数量',
      children: <Form.Item name="Tech_activity_151"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '231',
      label: '指标名称',
      children: '购买境内技术经费支出',
      span: 1
    },
    {
      key: '232',
      label: '代码',
      children: 'qj62',
      span: 1
    },
    {
      key: '233',
      label: '数量',
      children: <Form.Item name="Tech_activity_153"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '234',
      label: '指标名称',
      children: '引进境外技术经费支出',
      span: 1
    },
    {
      key: '235',
      label: '代码',
      children: 'qj59',
      span: 1
    },
    {
      key: '236',
      label: '数量',
      children: <Form.Item name="Tech_activity_155"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '237',
      label: '指标名称',
      children: '引进境外技术的消化吸收经费支出',
      span: 1
    },
    {
      key: '238',
      label: '代码',
      children: 'qj61',
      span: 1
    },
    {
      key: '239',
      label: '数量',
      children: <Form.Item name="Tech_activity_157"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '（二）企业在境外设立分支机构情况',
      children: '',
      span: 3
    },
    {
      key: '240',
      label: '指标名称',
      children: '期末境外营销服务机构数',
      span: 1
    },
    {
      key: '241',
      label: '代码',
      children: 'qj99',
      span: 1
    },
    {
      key: '242',
      label: '数量',
      children: <Form.Item name="Tech_activity_159"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '243',
      label: '指标名称',
      children: '期末境外技术研发机构数',
      span: 1
    },
    {
      key: '244',
      label: '代码',
      children: 'qj90',
      span: 1
    },
    {
      key: '245',
      label: '数量',
      children: <Form.Item name="Tech_activity_161"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '246',
      label: '指标名称',
      children: '期末境外生产制造基地数',
      span: 1
    },
    {
      key: '247',
      label: '代码',
      children: 'qj92',
      span: 1
    },
    {
      key: '248',
      label: '数量',
      children: <Form.Item name="Tech_activity_163"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '249',
      label: '指标名称',
      children: '企业当年在境外设立分支机构数量',
      span: 1
    },
    {
      key: '250',
      label: '代码',
      children: 'qj102',
      span: 1
    },
    {
      key: '251',
      label: '数量',
      children: <Form.Item name="Tech_activity_165"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      key: '252',
      label: '企业在境外设立的技术研发机构所在的国家',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setOuterResearchInstituteLocation(e.target.value)} value={OuterResearchInstituteLocation}>
          <Radio value={'美国'}>美国</Radio>
          <Radio value={'欧盟'} style={{ marginLeft: '10px'}}>欧盟</Radio>
          <Radio value={'日本'} style={{ marginLeft: '10px'}}>日本</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {OuterResearchInstituteLocation === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '253',
      label: '知识产权获取方式',
      children: 
        <Radio.Group style={{marginTop: '10px' }}>
          <Radio value={'自主研发'}>自主研发</Radio>
          <Radio value={'受让'} style={{ marginLeft: '10px'}}>受让</Radio>
          <Radio value={'受赠'} style={{ marginLeft: '10px'}}>受赠</Radio>
          <Radio value={'并购'} style={{ marginLeft: '10px'}}>并购</Radio>
          <Radio value={'通过5年以上的独占许可'} style={{ marginLeft: '10px'}}>通过5年以上的独占许可</Radio>
        </Radio.Group>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=ResearchDevelopActivity', {
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
          <Descriptions title="研究开发活动及相关情况" bordered items={items} />
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