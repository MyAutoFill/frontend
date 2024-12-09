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

export default function BenefitsForm(props) {

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
        reqRatioConfig('BenefitsForm')
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
      project_name: <span style={{fontSize: '16px'}}>主营业务收入</span>,
      code: <span style={{fontSize: '16px'}}>1</span>,
      normal_this_month: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_251"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      project_name: <span style={{fontSize: '16px'}}>主营业务成本</span>,
      code: <span style={{fontSize: '16px'}}>2</span>,
      normal_this_month: <Form.Item name="company_runningsum_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_256"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      project_name: <span style={{fontSize: '16px'}}>主营业务税金及附加</span>,
      code: <span style={{fontSize: '16px'}}>3</span>,
      normal_this_month: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_261"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      project_name: <span style={{fontSize: '16px'}}>其他业务利润</span>,
      code: <span style={{fontSize: '16px'}}>4</span>,
      normal_this_month: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_267"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      project_name: <span style={{fontSize: '16px'}}>营业费用</span>,
      code: <span style={{fontSize: '16px'}}>5</span>,
      normal_this_month: <Form.Item name="tax_benefits_month_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_273"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      project_name: <span style={{fontSize: '16px'}}>管理费用</span>,
      code: <span style={{fontSize: '16px'}}>6</span>,
      normal_this_month: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_278"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      project_name: <span style={{fontSize: '16px'}}>财务费用</span>,
      code: <span style={{fontSize: '16px'}}>7</span>,
      normal_this_month: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_283"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      project_name: <span style={{fontSize: '16px'}}>投资收益</span>,
      code: <span style={{fontSize: '16px'}}>8</span>,
      normal_this_month: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_288"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      project_name: <span style={{fontSize: '16px'}}>补贴收入</span>,
      code: <span style={{fontSize: '16px'}}>9</span>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_134"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_293"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      project_name: <span style={{fontSize: '16px'}}>营业外收入</span>,
      code: <span style={{fontSize: '16px'}}>10</span>,
      normal_this_month: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_298"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      project_name: <span style={{fontSize: '16px'}}>营业外支出</span>,
      code: <span style={{fontSize: '16px'}}>11</span>,
      normal_this_month: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_303"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      project_name: <span style={{fontSize: '16px'}}>所得税</span>,
      code: <span style={{fontSize: '16px'}}>12</span>,
      normal_this_month: <Form.Item name="company_runningsum_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_308"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      project_name: <span style={{fontSize: '16px'}}>出售、处置部门或被投资单位所得收益</span>,
      code: <span style={{fontSize: '16px'}}>13</span>,
      normal_this_month: <Form.Item name="tax_benefit_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_13"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      project_name: <span style={{fontSize: '16px'}}>自然灾害发生的损失</span>,
      code: <span style={{fontSize: '16px'}}>14</span>,
      normal_this_month: <Form.Item name="tax_benefit_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_14"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      project_name: <span style={{fontSize: '16px'}}>会计政策变更增加(或减少)利润总额</span>,
      code: <span style={{fontSize: '16px'}}>15</span>,
      normal_this_month: <Form.Item name="tax_benefit_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_15"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      project_name: <span style={{fontSize: '16px'}}>会计估计变更增加(或减少)利润总额</span>,
      code: <span style={{fontSize: '16px'}}>16</span>,
      normal_this_month: <Form.Item name="tax_benefit_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_332"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      project_name: <span style={{fontSize: '16px'}}>债务重组损失</span>,
      code: <span style={{fontSize: '16px'}}>17</span>,
      normal_this_month: <Form.Item name="tax_benefit_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_338"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      project_name: <span style={{fontSize: '16px'}}>营业收入</span>,
      code: <span style={{fontSize: '16px'}}>18</span>,
      normal_this_month: <Form.Item name="company_runningsum_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_344"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      project_name: <span style={{fontSize: '16px'}}>营业成本</span>,
      code: <span style={{fontSize: '16px'}}>19</span>,
      normal_this_month: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_349"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      project_name: <span style={{fontSize: '16px'}}>销售费用</span>,
      code: <span style={{fontSize: '16px'}}>20</span>,
      normal_this_month: <Form.Item name="company_runningsum_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_354"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      project_name: <span style={{fontSize: '16px'}}>研发费用</span>,
      code: <span style={{fontSize: '16px'}}>21</span>,
      normal_this_month: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_359"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      project_name: <span style={{fontSize: '16px'}}>利息费用</span>,
      code: <span style={{fontSize: '16px'}}>22</span>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_365"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      project_name: <span style={{fontSize: '16px'}}>利息收入</span>,
      code: <span style={{fontSize: '16px'}}>23</span>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_370"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      project_name: <span style={{fontSize: '16px'}}>其他收益</span>,
      code: <span style={{fontSize: '16px'}}>24</span>,
      normal_this_month: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_375"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      project_name: <span style={{fontSize: '16px'}}>对联营企业和合营企业的投资收益</span>,
      code: <span style={{fontSize: '16px'}}>25</span>,
      normal_this_month: <Form.Item name="tax_benefit_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_381"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      project_name: <span style={{fontSize: '16px'}}>以摊余成本计量的金融资产终止确认收益</span>,
      code: <span style={{fontSize: '16px'}}>26</span>,
      normal_this_month: <Form.Item name="tax_benefit_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_387"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      project_name: <span style={{fontSize: '16px'}}>净敞口套期收益</span>,
      code: <span style={{fontSize: '16px'}}>27</span>,
      normal_this_month: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_393"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      project_name: <span style={{fontSize: '16px'}}>公允价值波动收益</span>,
      code: <span style={{fontSize: '16px'}}>28</span>,
      normal_this_month: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_398"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      project_name: <span style={{fontSize: '16px'}}>信用减值损失</span>,
      code: <span style={{fontSize: '16px'}}>29</span>,
      normal_this_month: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_403"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      project_name: <span style={{fontSize: '16px'}}>资产减值损失</span>,
      code: <span style={{fontSize: '16px'}}>30</span>,
      normal_this_month: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_408"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      project_name: <span style={{fontSize: '16px'}}>资产处置收益</span>,
      code: <span style={{fontSize: '16px'}}>31</span>,
      normal_this_month: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_413"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      project_name: <span style={{fontSize: '16px'}}>（一）持续经营净利润</span>,
      code: <span style={{fontSize: '16px'}}>32</span>,
      normal_this_month: <Form.Item name="tax_benefits_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_32"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      project_name: <span style={{fontSize: '16px'}}>（二）终止经营净利润</span>,
      code: <span style={{fontSize: '16px'}}>33</span>,
      normal_this_month: <Form.Item name="tax_benefits_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      project_name: <span style={{fontSize: '16px'}}>1.重新计量设定受益计划变动额</span>,
      code: <span style={{fontSize: '16px'}}>34</span>,
      normal_this_month: <Form.Item name="tax_benefits_34"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_34"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      project_name: <span style={{fontSize: '16px'}}>2.权益法下不能转损益的其他综合收益</span>,
      code: <span style={{fontSize: '16px'}}>35</span>,
      normal_this_month: <Form.Item name="tax_benefits_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_35"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      project_name: <span style={{fontSize: '16px'}}>3.其他权益工具投资公允价值变动</span>,
      code: <span style={{fontSize: '16px'}}>36</span>,
      normal_this_month: <Form.Item name="tax_benefits_36"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_36"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      project_name: <span style={{fontSize: '16px'}}>4.企业自身信用风险公允价值变动</span>,
      code: <span style={{fontSize: '16px'}}>37</span>,
      normal_this_month: <Form.Item name="tax_benefits_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_37"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      project_name: <span style={{fontSize: '16px'}}>1.权益法下可转损益的其他综合收益</span>,
      code: <span style={{fontSize: '16px'}}>38</span>,
      normal_this_month: <Form.Item name="tax_benefits_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_38"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      project_name: <span style={{fontSize: '16px'}}>2.其他债权投资公允价值变动</span>,
      code: <span style={{fontSize: '16px'}}>39</span>,
      normal_this_month: <Form.Item name="tax_benefits_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_39"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      project_name: <span style={{fontSize: '16px'}}>3.金融资产重分类计入其他综合收益的金额</span>,
      code: <span style={{fontSize: '16px'}}>40</span>,
      normal_this_month: <Form.Item name="tax_benefits_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      project_name: <span style={{fontSize: '16px'}}>4.其他债权投资信用减值准备</span>,
      code: <span style={{fontSize: '16px'}}>41</span>,
      normal_this_month: <Form.Item name="tax_benefits_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_41"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '42',
      project_name: <span style={{fontSize: '16px'}}>5.现金流量套期储备</span>,
      code: <span style={{fontSize: '16px'}}>42</span>,
      normal_this_month: <Form.Item name="tax_benefits_42"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_42"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '43',
      project_name: <span style={{fontSize: '16px'}}>6.外币财务报表折算差额</span>,
      code: <span style={{fontSize: '16px'}}>43</span>,
      normal_this_month: <Form.Item name="tax_benefits_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_43"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '44',
      project_name: <span style={{fontSize: '16px'}}>（一）基本每股收益</span>,
      code: <span style={{fontSize: '16px'}}>44</span>,
      normal_this_month: <Form.Item name="tax_benefits_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '45',
      project_name: <span style={{fontSize: '16px'}}>（二）稀释每股收益</span>,
      code: <span style={{fontSize: '16px'}}>45</span>,
      normal_this_month: <Form.Item name="tax_benefits_45"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_45"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '46',
      project_name: <span style={{fontSize: '16px'}}>主营业务利润</span>,
      code: <span style={{fontSize: '16px'}}>46</span>,
      normal_this_month: <Form.Item name="tax_benefits_46"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="tax_benefits_total_46"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=BenefitsForm', {
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
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span><br></br>
          <span style={{ fontSize: '17px' }}>【报表名称】利润表</span>
          <Table dataSource={data} style={{width: '1300px'}} pagination={false}>
            <ColumnGroup title="利润信息" boarded>
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
              onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}