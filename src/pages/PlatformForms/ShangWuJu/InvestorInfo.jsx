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
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15-day

const { TextArea } = Input;
const { Option } = Select;

export default function ShangwuInvestorInfo(props) {

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
        reqRatioConfig('ShangwuInvestorInfo')
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

  const items = [
		{
			label: <span style={{fontSize: '16px'}}>投资者信息</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为投资者信息 ————————————————</span>,
			span: 3
		},
    {
      key: '1',
      label: <span style={{fontSize: '16px'}}>投资者中文名称</span>,
      children: 
				<Form.Item name="shangwu_investor1" >
					<span style={{ fontSize:'16px', marginLeft: '10px', marginTop: '10px' }}>投资者/合伙人/外国企业名称或姓名:</span>
					<Input size='large' addonBefore='中文' style={{ width: '200px', marginLeft: '10px' }}></Input>
				</Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>投资者英文名称</span>,
      children: 
				<Form.Item name="shangwu_investor2" >
					<span style={{ fontSize:'16px', marginLeft: '10px', marginTop: '10px' }}>投资者/合伙人/外国企业名称或姓名:</span>
					<Input size='large' addonBefore='英文' style={{ width: '200px', marginLeft: '10px' }}></Input>
				</Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>国别</span>,
      children: <Form.Item name="shangwu_investor3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>证件类型</span>,
      children: <Form.Item name="shangwu_investor4"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>证件号码</span>,
      children: <Form.Item name="shangwu_investor5"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>认缴出资额</span>,
      children: <Form.Item name="shangwu_investor6"><Input addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>实缴出资额</span>,
      children: <Form.Item name="shangwu_investor7"><Input addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '8',
      label: <span style={{fontSize: '16px'}}>资金来源地</span>,
      children: <Form.Item name="shangwu_investor8"><Input addonBefore='国别（地区）' size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
		{
      key: '9',
      label: <span style={{fontSize: '16px'}}>投资情况</span>,
      children: 
				<Form.Item name="shangwu_investor9" >
					<span style={{ fontSize:'16px', marginLeft: '10px', marginTop: '10px' }}>世界500企业参与投资情况:</span>
					<TextArea rows={4} placeholder="若有，请列举500强投资企业名称" />
				</Form.Item>,
      span: 3
    },
		{
      key: '10',
      label: <span style={{fontSize: '16px'}}>反向投资股权投资额</span>,
      children: <Form.Item name="shangwu_investor10"><Input addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '11',
      label: <span style={{fontSize: '16px'}}>反向投资股权比例</span>,
      children: <Form.Item name="shangwu_investor11"><Input addonAfter='%' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
		{
			label: <span style={{fontSize: '16px'}}>投资者类型</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为投资者类型 ————————————————</span>,
			span: 3
		},
    {
			key: '12',
			label: <span style={{fontSize: '16px'}}>境外投资者</span>,
			children: 
				<Form.Item name="shangwu_basic21">
					<Select
						allowClear
						style={{ width: '290px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="从选项中选择"
						optionFilterProp="label"
						dropdownMatchSelectWidth={false}
						options={[
							{
								value: '境外投资者（不属于以下投资类企业）',
								label: '境外投资者（不属于以下投资类企业）',
							},
							{
								value: '外商投资的投资性公司',
								label: '外商投资的投资性公司',
							},
							{
								value: '外商投资的创业投资公司',
								label: '外商投资的创业投资公司',
							},
							{
								value: '外商投资的以投资为主要业务的合伙企业',
								label: '外商投资的以投资为主要业务的合伙企业',
							}
						]}
					/>
				</Form.Item>,
			span: 1.5
		},
    {
			key: '13',
			label: <span style={{fontSize: '16px'}}>境内投资者</span>,
			children: 
				<Form.Item name="shangwu_investor13">
					<Select
						allowClear
						style={{ width: '290px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="从选项中选择"
						optionFilterProp="label"
						dropdownMatchSelectWidth={false}
						options={[
							{
								value: '境内投资者为外商投资企业或外商投资企业境内投资的企业（含多层次投资）',
								label: '境内投资者为外商投资企业或外商投资企业境内投资的企业（含多层次投资）',
							},
							{
								value: '不存在前述情况',
								label: '不存在前述情况',
							}
						]}
					/>
				</Form.Item>,
			span: 1.5
		},
		{
			key: '14',
			label: <span style={{fontSize: '16px'}}>是否为规定服务提供者</span>,
			children: 
				<Form.Item name="shangwu_basic11">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>境外投资者是否为内地与香港、澳门《CEPA 服务贸易协议》规定的香港/澳门 服务提供者:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
              {
                value: '请选择',
                label: '请选择',
              },
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
			key: '15',
			label: <span style={{fontSize: '16px'}}>境外投资者身份</span>,
			children: 
				<Form.Item name="shangwu_investor15">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>境外投资者是否为定居在国外的中国公民：</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
              {
                value: '请选择',
                label: '请选择',
              },
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
			label: <span style={{fontSize: '16px'}}>企业最终实际控制人</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为投资者/合伙人/外国（地区）企业最终实际控制人 ————————————————</span>,
			span: 3
		},
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>名称或姓名（中文）</span>,
      children: <Form.Item name="shangwu_investor16"><Input size='large' addonBefore='中文' style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>名称或姓名（英文）</span>,
      children: <Form.Item name="shangwu_investor17"><Input size='large' addonBefore='英文' style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>国别</span>,
      children: <Form.Item name="shangwu_investor18"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>证件类型</span>,
      children: <Form.Item name="shangwu_investor19"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>证件号码</span>,
      children: <Form.Item name="shangwu_investor20"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
		{
			key: '21',
			label: <span style={{fontSize: '16px'}}>类别</span>,
			children: 
				<Form.Item name="shangwu_investor21">
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="选择实控人类别"
						optionFilterProp="label"
						dropdownMatchSelectWidth={false}
						options={[
							{
								value: '境外上市公司',
								label: '境外上市公司',
							},
							{
								value: '境外自然人',
								label: '境外自然人',
							},
							{
								value: '外国政府机构（含政府基金）',
								label: '外国政府机构（含政府基金）',
							},
							{
								value: '国际组织',
								label: '国际组织',
							},
							{
								value: '境内上市公司',
								label: '境内上市公司',
							},
							{
								value: '境内自然人',
								label: '境内自然人',
							},
							{
								value: '境内国有/集体企业',
								label: '境内国有/集体企业',
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
			key: '22',
			label: <span style={{fontSize: '16px'}}>实际控制方式</span>,
			children: 
				<Form.Item name="shangwu_investor22">
					<Select
						allowClear
						style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="选择实际控制方式"
						optionFilterProp="label"
						dropdownMatchSelectWidth={false}
						options={[
							{
								value: '直接或者间接持有企业百分之五十以上的股份、股权、财产份额、表决权或者其他类似权益的。',
								label: '直接或者间接持有企业百分之五十以上的股份、股权、财产份额、表决权或者其他类似权益的。',
							},
							{
								value: '直接或者间接持有企业的股份、股权、财产份额、表决权或者其他类似权益虽不足百分之五十，但具有以下情形之一的：1.有权直接或者间接任命企业董事会或者类似决策机构半数以上成员；2.有能力确保其提名人员取得企业董事会或者类似决策机构半数以上席位；3.所享有的表决权足以对股东会、股东大会或者董事会等决策机构的决议产 生重大影响。',
								label: '直接或者间接持有企业的股份、股权、财产份额、表决权或者其他类似权益虽不足百分之五十，但具有以下情形之一的：1.有权直接或者间接任命企业董事会或者类似决策机构半数以上成员；2.有能力确保其提名人员取得企业董事会或者类似决策机构半数以上席位；3.所享有的表决权足以对股东会、股东大会或者董事会等决策机构的决议产 生重大影响。',
							},
							{
								value: '通过合同、信托或者其他方式能够决定企业的经营、财务、人事或者技术 等事项的。',
								label: '通过合同、信托或者其他方式能够决定企业的经营、财务、人事或者技术 等事项的。',
							}
						]}
					/>
				</Form.Item>,
			span: 3
		},
		{
			key: '23',
			label: <span style={{fontSize: '16px'}}>最终实际控制人</span>,
			children: 
				<Form.Item name="shangwu_investor23">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>是否为企业（机构）最终实际控制人：</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
              {
                value: '请选择',
                label: '请选择',
              },
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
		}
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=ShangwuInvestorInfo', {
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
          <span style={{ fontSize:'16px', fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize:'16px', fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1350px'}} title="【报表名称】投资者情况" bordered items={items} />
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