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

export default function CashFlowForm(props) {

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
        reqRatioConfig('CashFlowForm')
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
      project_name: <span style={{fontSize: '16px'}}>销售商品.提供劳务收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>1</span>,
      normal_this_month: <Form.Item name="cash_flow_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_1"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      project_name: <span style={{fontSize: '16px'}}>收到的税费返还</span>,
      code: <span style={{fontSize: '16px'}}>2</span>,
      normal_this_month: <Form.Item name="cash_flow_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_2"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      project_name: <span style={{fontSize: '16px'}}>收到的其他与经营活动有关的资金</span>,
      code: <span style={{fontSize: '16px'}}>3</span>,
      normal_this_month: <Form.Item name="cash_flow_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_3"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      project_name: <span style={{fontSize: '16px'}}>购买商品.接受劳务支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>4</span>,
      normal_this_month: <Form.Item name="cash_flow_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_4"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      project_name: <span style={{fontSize: '16px'}}>支付给职工以及为职工支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>5</span>,
      normal_this_month: <Form.Item name="cash_flow_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_5"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      project_name: <span style={{fontSize: '16px'}}>支付的各项税费</span>,
      code: <span style={{fontSize: '16px'}}>6</span>,
      normal_this_month: <Form.Item name="cash_flow_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_6"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      project_name: <span style={{fontSize: '16px'}}>支付的其他与经营活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>7</span>,
      normal_this_month: <Form.Item name="cash_flow_7"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_7"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      project_name: <span style={{fontSize: '16px'}}>收回投资所收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>8</span>,
      normal_this_month: <Form.Item name="cash_flow_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_8"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      project_name: <span style={{fontSize: '16px'}}>取得投资收益所收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>9</span>,
      normal_this_month: <Form.Item name="cash_flow_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_9"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      project_name: <span style={{fontSize: '16px'}}>处置固定资产.无形资产和其他长期资产所收回的现金净额</span>,
      code: <span style={{fontSize: '16px'}}>10</span>,
      normal_this_month: <Form.Item name="cash_flow_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_10"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      project_name: <span style={{fontSize: '16px'}}>收到其他与投资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>11</span>,
      normal_this_month: <Form.Item name="cash_flow_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_11"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      project_name: <span style={{fontSize: '16px'}}>购建固定资产.无形资产和其他长期资产所支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>12</span>,
      normal_this_month: <Form.Item name="cash_flow_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_12"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      project_name: <span style={{fontSize: '16px'}}>投资所支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>13</span>,
      normal_this_month: <Form.Item name="cash_flow_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_13"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      project_name: <span style={{fontSize: '16px'}}>支付的其他与投资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>14</span>,
      normal_this_month: <Form.Item name="cash_flow_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_14"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      project_name: <span style={{fontSize: '16px'}}>吸收投资所收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>15</span>,
      normal_this_month: <Form.Item name="cash_flow_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_15"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      project_name: <span style={{fontSize: '16px'}}>借款所收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>16</span>,
      normal_this_month: <Form.Item name="cash_flow_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_16"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      project_name: <span style={{fontSize: '16px'}}>收到的其他与筹资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>17</span>,
      normal_this_month: <Form.Item name="cash_flow_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_17"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      project_name: <span style={{fontSize: '16px'}}>偿还债务所支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>18</span>,
      normal_this_month: <Form.Item name="cash_flow_18"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_18"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      project_name: <span style={{fontSize: '16px'}}>分配股利.利润或偿付利息所支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>19</span>,
      normal_this_month: <Form.Item name="cash_flow_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_19"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      project_name: <span style={{fontSize: '16px'}}>支付的其他与筹资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>20</span>,
      normal_this_month: <Form.Item name="cash_flow_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_20"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      project_name: <span style={{fontSize: '16px'}}>汇率变动对现金的影响</span>,
      code: <span style={{fontSize: '16px'}}>21</span>,
      normal_this_month: <Form.Item name="cash_flow_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_21"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      project_name: <span style={{fontSize: '16px'}}>净利润</span>,
      code: <span style={{fontSize: '16px'}}>22</span>,
      normal_this_month: <Form.Item name="GongShang_property_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_22"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      project_name: <span style={{fontSize: '16px'}}>计提的资产减值准备</span>,
      code: <span style={{fontSize: '16px'}}>23</span>,
      normal_this_month: <Form.Item name="cash_flow_23"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_23"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      project_name: <span style={{fontSize: '16px'}}>固定资产折旧</span>,
      code: <span style={{fontSize: '16px'}}>24</span>,
      normal_this_month: <Form.Item name="cash_flow_24"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_24"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      project_name: <span style={{fontSize: '16px'}}>无形资产摊销</span>,
      code: <span style={{fontSize: '16px'}}>25</span>,
      normal_this_month: <Form.Item name="cash_flow_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_25"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      project_name: <span style={{fontSize: '16px'}}>长期待摊费用摊销</span>,
      code: <span style={{fontSize: '16px'}}>26</span>,
      normal_this_month: <Form.Item name="cash_flow_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_26"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      project_name: <span style={{fontSize: '16px'}}>待摊费用减少</span>,
      code: <span style={{fontSize: '16px'}}>27</span>,
      normal_this_month: <Form.Item name="cash_flow_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_27"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      project_name: <span style={{fontSize: '16px'}}>预提费用增加</span>,
      code: <span style={{fontSize: '16px'}}>28</span>,
      normal_this_month: <Form.Item name="cash_flow_28"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_28"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      project_name: <span style={{fontSize: '16px'}}>处置固定资产.无形资产和其他长期资产的损失</span>,
      code: <span style={{fontSize: '16px'}}>29</span>,
      normal_this_month: <Form.Item name="cash_flow_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_29"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      project_name: <span style={{fontSize: '16px'}}>固定资产报废损失</span>,
      code: <span style={{fontSize: '16px'}}>30</span>,
      normal_this_month: <Form.Item name="cash_flow_30"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_30"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      project_name: <span style={{fontSize: '16px'}}>财务费用</span>,
      code: <span style={{fontSize: '16px'}}>31</span>,
      normal_this_month: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_31"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      project_name: <span style={{fontSize: '16px'}}>投资损失</span>,
      code: <span style={{fontSize: '16px'}}>32</span>,
      normal_this_month: <Form.Item name="cash_flow_32"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_32"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      project_name: <span style={{fontSize: '16px'}}>递延税款贷项</span>,
      code: <span style={{fontSize: '16px'}}>33</span>,
      normal_this_month: <Form.Item name="cash_flow_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_33"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      project_name: <span style={{fontSize: '16px'}}>存货的减少</span>,
      code: <span style={{fontSize: '16px'}}>34</span>,
      normal_this_month: <Form.Item name="cash_flow_34"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_34"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      project_name: <span style={{fontSize: '16px'}}>经营性应收项目的减少</span>,
      code: <span style={{fontSize: '16px'}}>35</span>,
      normal_this_month: <Form.Item name="cash_flow_35"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_35"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      project_name: <span style={{fontSize: '16px'}}>经营性应付项目的增加</span>,
      code: <span style={{fontSize: '16px'}}>36</span>,
      normal_this_month: <Form.Item name="cash_flow_36"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_36"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      project_name: <span style={{fontSize: '16px'}}>其他</span>,
      code: <span style={{fontSize: '16px'}}>37</span>,
      normal_this_month: <Form.Item name="cash_flow_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_37"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      project_name: <span style={{fontSize: '16px'}}>债务转为资本</span>,
      code: <span style={{fontSize: '16px'}}>38</span>,
      normal_this_month: <Form.Item name="cash_flow_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_38"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      project_name: <span style={{fontSize: '16px'}}>一年内到期的可转换公司债券</span>,
      code: <span style={{fontSize: '16px'}}>39</span>,
      normal_this_month: <Form.Item name="cash_flow_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_39"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      project_name: <span style={{fontSize: '16px'}}>融资租入固定资产</span>,
      code: <span style={{fontSize: '16px'}}>40</span>,
      normal_this_month: <Form.Item name="cash_flow_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_40"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      project_name: <span style={{fontSize: '16px'}}>现金的期末余额</span>,
      code: <span style={{fontSize: '16px'}}>41</span>,
      normal_this_month: <Form.Item name="cash_flow_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_41"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '42',
      project_name: <span style={{fontSize: '16px'}}>现金的期初余额</span>,
      code: <span style={{fontSize: '16px'}}>42</span>,
      normal_this_month: <Form.Item name="cash_flow_42"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_42"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '43',
      project_name: <span style={{fontSize: '16px'}}>现金等价物的期末余额</span>,
      code: <span style={{fontSize: '16px'}}>43</span>,
      normal_this_month: <Form.Item name="cash_flow_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_43"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '44',
      project_name: <span style={{fontSize: '16px'}}>现金等价物的期初余额</span>,
      code: <span style={{fontSize: '16px'}}>44</span>,
      normal_this_month: <Form.Item name="cash_flow_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_44"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '46',
      project_name: <span style={{fontSize: '16px'}}>现金流入小计</span>,
      code: <span style={{fontSize: '16px'}}>46</span>,
      normal_this_month: <Form.Item name="cash_flow_46"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_46"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '47',
      project_name: <span style={{fontSize: '16px'}}>收到的其他与经营活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>47</span>,
      normal_this_month: <Form.Item name="cash_flow_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_47"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '51',
      project_name: <span style={{fontSize: '16px'}}>支付其他与经营活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>51</span>,
      normal_this_month: <Form.Item name="cash_flow_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_51"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '52',
      project_name: <span style={{fontSize: '16px'}}>收回投资收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>52</span>,
      normal_this_month: <Form.Item name="cash_flow_52"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_52"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '53',
      project_name: <span style={{fontSize: '16px'}}>取得投资收益收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>53</span>,
      normal_this_month: <Form.Item name="cash_flow_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_53"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '54',
      project_name: <span style={{fontSize: '16px'}}>处置固定资产、无形资产和其他长期资产收回的现金净额</span>,
      code: <span style={{fontSize: '16px'}}>54</span>,
      normal_this_month: <Form.Item name="cash_flow_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_54"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '55',
      project_name: <span style={{fontSize: '16px'}}>处置子公司及其他营业单位收到的现金净额</span>,
      code: <span style={{fontSize: '16px'}}>55</span>,
      normal_this_month: <Form.Item name="cash_flow_55"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_55"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '57',
      project_name: <span style={{fontSize: '16px'}}>购建固定资产、无形资产和其他长期资产所支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>57</span>,
      normal_this_month: <Form.Item name="cash_flow_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_57"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '58',
      project_name: <span style={{fontSize: '16px'}}>投资支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>58</span>,
      normal_this_month: <Form.Item name="cash_flow_58"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_58"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '59',
      project_name: <span style={{fontSize: '16px'}}>取得子公司及其他营业单位支付的现金净额</span>,
      code: <span style={{fontSize: '16px'}}>59</span>,
      normal_this_month: <Form.Item name="cash_flow_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_59"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '60',
      project_name: <span style={{fontSize: '16px'}}>支付其他与投资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>60</span>,
      normal_this_month: <Form.Item name="cash_flow_60"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_60"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '61',
      project_name: <span style={{fontSize: '16px'}}>吸收投资收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>61</span>,
      normal_this_month: <Form.Item name="cash_flow_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_61"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '62',
      project_name: <span style={{fontSize: '16px'}}>取得借款收到的现金</span>,
      code: <span style={{fontSize: '16px'}}>62</span>,
      normal_this_month: <Form.Item name="cash_flow_62"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_62"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '63',
      project_name: <span style={{fontSize: '16px'}}>收到其他与筹资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>63</span>,
      normal_this_month: <Form.Item name="cash_flow_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_63"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '64',
      project_name: <span style={{fontSize: '16px'}}>偿还债务支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>64</span>,
      normal_this_month: <Form.Item name="cash_flow_64"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_64"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '65',
      project_name: <span style={{fontSize: '16px'}}>分配股利、利润或偿付利息支付的现金</span>,
      code: <span style={{fontSize: '16px'}}>65</span>,
      normal_this_month: <Form.Item name="cash_flow_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_65"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '66',
      project_name: <span style={{fontSize: '16px'}}>支付其他与筹资活动有关的现金</span>,
      code: <span style={{fontSize: '16px'}}>66</span>,
      normal_this_month: <Form.Item name="cash_flow_66"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_66"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '67',
      project_name: <span style={{fontSize: '16px'}}>四、汇率变动对现金及现金等价物的影响</span>,
      code: <span style={{fontSize: '16px'}}>67</span>,
      normal_this_month: <Form.Item name="cash_flow_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_67"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '68',
      project_name: <span style={{fontSize: '16px'}}>加：期初现金及现金等价物余额</span>,
      code: <span style={{fontSize: '16px'}}>68</span>,
      normal_this_month: <Form.Item name="cash_flow_68"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_68"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '69',
      project_name: <span style={{fontSize: '16px'}}>投资活动产生的现金流量净额</span>,
      code: <span style={{fontSize: '16px'}}>69</span>,
      normal_this_month: <Form.Item name="cash_flow_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_69"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '70',
      project_name: <span style={{fontSize: '16px'}}>现金流出小计</span>,
      code: <span style={{fontSize: '16px'}}>70</span>,
      normal_this_month: <Form.Item name="cash_flow_70"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_70"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '71',
      project_name: <span style={{fontSize: '16px'}}>经营活动产生的现金流量净额</span>,
      code: <span style={{fontSize: '16px'}}>71</span>,
      normal_this_month: <Form.Item name="cash_flow_71"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_71"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '72',
      project_name: <span style={{fontSize: '16px'}}>筹资活动产生的现金流量净额</span>,
      code: <span style={{fontSize: '16px'}}>72</span>,
      normal_this_month: <Form.Item name="cash_flow_72"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_72"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '73',
      project_name: <span style={{fontSize: '16px'}}>五.现金及现金等价物净增加额</span>,
      code: <span style={{fontSize: '16px'}}>73</span>,
      normal_this_month: <Form.Item name="cash_flow_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="cash_flow_total_73"><Input disabled={true} addonAfter='元' size='large' style={{ width: '250px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CashFlowForm', {
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
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span><br></br>
          <span style={{ fontSize: '17px' }}>【报表名称】现金流量表</span>
          <Table dataSource={data} style={{width: '1300px'}} pagination={false}>
            <ColumnGroup title="现金流量信息" boarded>
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
              insetInlineEnd: 0,
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