import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select, DatePicker } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
const { TextArea } = Input;

export default function ShangwuOperationInfo(props) {

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
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('ShangwuOperationInfo')
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
			label: '经营情况',
			children: '———————————————— 以下信息为经营情况 ————————————————',
			span: 3
		},
    {
      key: '1',
      label: '进口额',
      children: <Form.Item name="shangwu_operation1" ><Input size='large' addonAfter='万美元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '出口额',
      children: <Form.Item name="Tech_EcoInfo_29" ><Input size='large' addonAfter='万美元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '销售（营业）收入',
      children: <Form.Item name="company_runningsum_1"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: '其中：主营业务收入',
      children: <Form.Item name="company_runningsum_3"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: '营业成本',
      children: <Form.Item name="company_runningsum_2"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: '营业费用',
      children: <Form.Item name="tax_benefits_month_5"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: '研发投入',
      children: <Form.Item name="company_runningsum_7"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
		{
      label: '-',
      children: '-',
      span: 3,
    },
		{
      key: '8',
      label: '纳税总额',
      children: <Form.Item name="GongShang_property_7" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '其中：增值税',
      children: <Form.Item name="company_runningsum_19" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '其中：消费税',
      children: <Form.Item name="shangwu_operation10"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '11',
      label: '其中：企业所得税',
      children: <Form.Item name="company_runningsum_21"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '12',
      label: '其中：个人所得税',
      children: <Form.Item name="shangwu_operation12"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '13',
      label: '其中：关税',
      children: <Form.Item name="shangwu_operation13"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      label: '-',
      children: '-',
      span: 3,
    },
    {
      key: '14',
      label: '利润总额',
      children: <Form.Item name="company_runningsum_17"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '15',
      label: '净利润',
      children: <Form.Item name="GongShang_property_6" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '其中：外方股东享有的净利润',
      children: <Form.Item name="shangwu_operation16" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '其中：消分配外方股东的利润',
      children: <Form.Item name="shangwu_operation17"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '18',
      label: '其中：汇往外方股东的利润',
      children: <Form.Item name="shangwu_operation18"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
      label: '-',
      children: '-',
      span: 3,
    },
    {
      key: '19',
      label: '外方股东利润转投资',
      children: <Form.Item name="shangwu_operation19"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '20',
      label: '其中：转赠本企业（机构）注册资本',
      children: <Form.Item name="shangwu_operation20"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '21',
      label: '其中：转赠其他企业（机构）注册资本',
      children: <Form.Item name="shangwu_operation21"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
			label: '债权、债务情况',
			children: '———————————————— 以下信息为债权、债务情况 ————————————————',
			span: 3
		},
		{
      key: '22',
      label: '本年外方股东贷款借款',
      children: <Form.Item name="shangwu_operation22" ><Input size='large' addonAfter='万美元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '本年外方股东贷款还款',
      children: <Form.Item name="shangwu_operation23" ><Input size='large' addonAfter='万美元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '对境外投资者的债务合计',
      children: <Form.Item name="shangwu_operation24"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: '在境内投资者的存款合计',
      children: <Form.Item name="shangwu_operation25"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '26',
      label: '对境外投资者的债权合计',
      children: <Form.Item name="shangwu_operation26"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
			label: '进口设备减免税情况',
			children: '———————————————— 以下信息为进口设备减免税情况 ————————————————',
			span: 3
		},
		{
			key: '27',
			label: '是否享受国家规定减免税',
			children: 
				<Form.Item name="shangwu_operation27">
					<span style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}>是否享受国家规定的进口设备减免税:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
							{
								value: '是',
								label: '是',
							},
							{
								value: '否',
								label: '否',
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
		{
			key: '28',
			label: '项目性质及适用产业政策条目',
			children: 
				<Form.Item name="shangwu_operation28">
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择政策条目"
						optionFilterProp="label"
						dropdownMatchSelectWidth={false}
						options={[
							{
								value: '国家鼓励外商投资的产业',
								label: '国家鼓励外商投资的产业',
							},
							{
								value: '中西部地区外商投资优势产业',
								label: '中西部地区外商投资优势产业',
							},
							{
								value: '其他（研发中心）',
								label: '其他（研发中心）',
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
		{
      label: '本年度减免税',
      children: <Form.Item name="Tech_EcoInfo_79"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
			label: '资产负债情况',
			children: '————————————————— 以下信息为资产负债情况 —————————————————',
			span: 3
		},
    {
      key: '29',
      label: '资产总额',
      children: <Form.Item name="company_runningsum_18"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '30',
      label: '其中：流动资产',
      children: <Form.Item name="company_runningsum_20"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '31',
      label: '其中：其他应收款',
      children: <Form.Item name="tax_debt_7"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '32',
      label: '非流动资产',
      children: <Form.Item name="Tech_EcoInfo_99"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '33',
      label: '其中：长期股权投资',
      children: <Form.Item name="tax_debt_14"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '34',
      label: '固定资产',
      children: <Form.Item name="company_runningsum_22"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '35',
      label: '无形资产',
      children: <Form.Item name="company_runningsum_24"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
		{
      label: '-',
      children: '-',
      span: 3,
    },
		{
      key: '36',
      label: '负债总额',
      children: <Form.Item name="company_runningsum_30"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '37',
      label: '其中：流动负债',
      children: <Form.Item name="company_runningsum_29"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '38',
      label: '其中：应付外方股利',
      children: <Form.Item name="tax_debt_32"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '39',
      label: '其他应付款',
      children: <Form.Item name="tax_debt_35"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '40',
      label: '非流动负债',
      children: <Form.Item name="property_29_yearEnd_2"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
      label: '-',
      children: '-',
      span: 3,
    },
		{
      key: '41',
      label: '所有者权益合计',
      children: <Form.Item name="company_runningsum_31"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
		{
      key: '42',
      label: '其中：实收资本',
      children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '43',
      label: '资本公积',
      children: <Form.Item name="tax_debt_48"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '44',
      label: '盈余公积',
      children: <Form.Item name="tax_debt_49"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '45',
      label: '未分配利润',
      children: <Form.Item name="tax_debt_51"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '46',
      label: '其他',
      children: <Form.Item name="shangwu_operation46"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
      key: '47',
      label: '其中：归属于外方股东的权益',
      children: <Form.Item name="shangwu_operation47"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
		{
      key: '48',
      label: '其中：实收资本',
      children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '49',
      label: '其中：资本公积',
      children: <Form.Item name="shangwu_operation49"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '50',
      label: '其中：盈余公积',
      children: <Form.Item name="shangwu_operation50"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '51',
      label: '其中：未分配利润',
      children: <Form.Item name="shangwu_operation51"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '52',
      label: '其他',
      children: <Form.Item name="shangwu_operation52"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2,
    },
		{
			label: '投资性公司子公司情况',
			children: '————————————————— 以下信息为外商投资的投资性公司子公司情况（仅投资性公司填写） —————————————————',
			span: 3
		},
		{
      key: '53',
      label: '子公司应付外方股利',
      children: <Form.Item name="shangwu_operation53"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
		{
      key: '54',
      label: '子公司归属于外方股东的权益',
      children: <Form.Item name="shangwu_operation54"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
		{
      key: '55',
      label: '其中：实收资本',
      children: <Form.Item name="shangwu_operation55"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '56',
      label: '其中：资本公积',
      children: <Form.Item name="shangwu_operation56"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '57',
      label: '其中：盈余公积',
      children: <Form.Item name="shangwu_operation57"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
      key: '58',
      label: '其中：未分配利润',
      children: <Form.Item name="shangwu_operation58"><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=ShangwuOperationInfo', {
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
          <Descriptions style={{width: '1350px'}} title="经营情况" bordered items={items} />
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