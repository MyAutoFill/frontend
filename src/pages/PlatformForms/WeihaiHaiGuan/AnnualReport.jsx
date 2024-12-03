import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Select, Radio, Form } from 'antd';
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

export default function HaiguanAnnualReport(props) {

	const { TextArea } = Input;

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('HaiguanAnnualReport')
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
			label: '注册信息',
			children: '以下信息为单位注册信息',
			span: 3
		},
    {
      key: '1',
      label: '英文名称',
      children: <Form.Item name="Tech_stat_3"><Input disabled={disableVar} size='large' style={{ width: '850px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '2',
      label: '英文地址',
      children: <Form.Item name="haiguan1"><Input disabled={disableVar} size='large' style={{ width: '850px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '3',
      label: '跨境贸易电子商务企业类型',
      children: 
				<Form.Item name="haiguan2">
					<Select
						showSearch
            allowClear
						style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择电子商务企业类型"
						optionFilterProp="label"
						options={[
							{
								value: '电子商务企业',
								label: '电子商务企业',
							},
							{
								value: '支付企业',
								label: '支付企业',
							},
							{
								value: '电子商务交易平台',
								label: '电子商务交易平台',
							},
							{
								value: '监管场所运营人',
								label: '监管场所运营人',
							},
							{
								value: '物流企业',
								label: '物流企业',
							},
							{
								value: '非跨境贸易电子商务企业类型',
								label: '非跨境贸易电子商务企业类型',
							}
						]}
					/>
				</Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '开户银行',
      children: <Form.Item name="HumanSocial_yigongdaixun_5"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '开户账号',
      children: <Form.Item name="company_insurance_11"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '特殊贸易区域',
      children: <Form.Item name="haiguan6"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '经济区划',
      children: <Form.Item name="haiguan7"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      label: '关务责任人',
      children: '以下为关务责任人信息',
      span: 3
    },
		{
      key: '8',
      label: '姓名',
      children: <Form.Item name="haiguan8"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '身份证类型',
      children: <Form.Item name="haiguan9"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '身份证号',
      children: <Form.Item name="haiguan10"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '固定电话',
      children: <Form.Item name="haiguan11"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '移动电话',
      children: <Form.Item name="haiguan12"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '电子邮箱',
      children: <Form.Item name="haiguan13"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      label: '海关业务联系人',
      children: '以下为海关业务联系人信息',
      span: 3
    },
		{
      key: '14',
      label: '姓名',
      children: <Form.Item name="haiguan14"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '15',
      label: '固定电话',
      children: <Form.Item name="haiguan15"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '16',
      label: '移动电话',
      children: <Form.Item name="haiguan16"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: '电子邮箱',
      children: <Form.Item name="haiguan17"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
		{
      label: '企业经营信息',
      children: '以下为企业经营信息',
      span: 3
    },
    {
      key: '18',
      label: '经营场所性质',
      children: 
        <Form.Item name="haiguan18">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="经营场所性质"
            optionFilterProp="label"
            options={[
              {
                value: '自有',
                label: '自有',
              },
              {
                value: '租赁',
                label: '租赁',
              },
              {
                value: '借用',
                label: '借用',
              },
              {
                value: '其他',
                label: '其他',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
		{
      key: '19',
      label: '是否上市公司',
      children: 
        <Form.Item name="haiguan19">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否上市公司"
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
        </Form.Item>,span: 1
    },
    {
      key: '20',
      label: '是否实行会计电算化',
      children: 
        <Form.Item name="haiguan20">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否实行会计电算化"
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
      key: '21',
      label: '财务管理软件名称',
      children: <Form.Item name="haiguan21"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '22',
      label: '记账方式',
      children: 
        <Form.Item name="haiguan22">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="记账方式"
            optionFilterProp="label"
            options={[
              {
                value: '自理记账',
                label: '自理记账',
              },
              {
                value: '委托代理记账',
                label: '委托代理记账',
              }
            ]}
          />
        </Form.Item>,
			span: 1
    },
    {
      key: '23',
      label: '委托代理记账单位名称',
      children: <Form.Item name="haiguan23"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '委托代理记账单位统一社会信用代码',
      children: <Form.Item name="haiguan24"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: '委托代理记账单位地址',
      children: <Form.Item name="haiguan25"><Input disabled={disableVar} size='large' style={{ width: '620px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
		{
      key: '26',
      label: '委托代理记账单位联系人',
      children: <Form.Item name="haiguan26"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '27',
      label: '委托代理记账单位联系人电话',
      children: <Form.Item name="haiguan27"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
		{
      label: '经营补充信息',
      children: '币种（人民币 CNY）',
      span: 3
    },
		{
      key: '28',
      label: '存货',
      children: <Form.Item name="FinanceStatusInfo_14"><Input addonAfter='万元' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '29',
      label: '流动负债合计',
      children: <Form.Item name="company_runningsum_29"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '30',
      label: '流动资产合计',
      children: <Form.Item name="company_runningsum_20"><Input size='large' addonAfter='万元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '31',
      label: '经营现金净流量',
      children: <Form.Item name="tax_benefits_42"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '32',
      label: '营业利润',
      children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='万元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '33',
      label: '年初所有者权益',
      children: <Form.Item name="haiguan33"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: '最近三年是否连续亏损',
      children: 
        <Form.Item name="haiguan34">
          <Select
            showSearch
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="最近三年是否连续亏损"
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
      span: 3
    },
		{
      label: '企业自律管理情况',
      children: '以下为企业自律管理情况',
      span: 3
    },
    {
      key: '35',
      label: '年度内是否开展内外部审计',
      children:
        <Form.Item name="haiguan35">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="年度内是否开展内外部审计"
            optionFilterProp="label"
            options={[
              {
                value: '内审',
                label: '内审',
              },
              {
                value: '外审',
                label: '外审',
              }
            ]}
          />
        </Form.Item>,
      span: 3,
    },
    {
      label: '序号',
      children: '1',
      span: 1,
    },
    {
      key: '36',
      label: '审计执行机构名称',
      children: <Form.Item name="haiguan36"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '37',
      label: '审计时间',
      children: <Form.Item name="hiaguan37"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      label: '序号',
      children: '2',
      span: 1,
    },
    {
      key: '38',
      label: '审计执行机构名称',
      children: <Form.Item name="haiguan38"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '审计时间',
      children: <Form.Item name="hiaguan39"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      label: '序号',
      children: '3',
      span: 1,
    },
    {
      key: '40',
      label: '审计执行机构名称',
      children: <Form.Item name="haiguan40"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '审计时间',
      children: <Form.Item name="hiaguan41"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '是否存在违反海关规定的问题',
      children:
        <Form.Item name="haiguan42">
					<span>在内外部审计等企业自律管理中，是否发现一般贸易业务、加工贸易及保税业务、减免税业务或其他进出口业务存在违反海关规定的问题</span>
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否存在"
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
      span: 3
    },
    {
      key: '43',
      label: '具体问题',
      children: <Form.Item name="haiguan43"><TextArea rows={4} placeholder="若选择存在，请详细写出具体问题" /></Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=HaiguanAnnualReport', {
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
          <span style={{ fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1400px'}} title="【报表名称】海关年报事项" bordered items={items} />
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