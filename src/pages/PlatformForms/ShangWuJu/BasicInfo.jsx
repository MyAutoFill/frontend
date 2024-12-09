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

export default function ShangwuBasicInfo(props) {

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
        reqRatioConfig('ShangwuBasicInfo')
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
			label: <span style={{fontSize: '16px'}}>企业信息</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为企业信息 ————————————————</span>,
			span: 3
		},
    {
      key: '1',
      label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>单位名称（中文）</span>,
      children: <Form.Item name="company_basicinfo_2"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>单位名称（英文）</span>,
      children: <Form.Item name="Tech_stat_3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>联系电话</span>,
      children: <Form.Item name="company_basicinfo_29"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>电子邮箱</span>,
      children: <Form.Item name="company_basicinfo_35"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>通信地址</span>,
      children: <Form.Item name="company_basicinfo_34"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>邮政编码</span>,
      children: <Form.Item name="company_basicinfo_38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
		{
			label: <span style={{fontSize: '16px'}}>经营范围</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为经营范围 ————————————————</span>,
			span: 3
		},
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>经营范围</span>,
      children: <Form.Item name="company_basicinfo_8"><Input size='large' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
			key: '9',
			label: <span style={{fontSize: '16px'}}>是否涉及特别管理措施</span>,
			children: 
				<Form.Item name="shangwu_basic9">
					<span style={{ fontSize:'16px', width: '200px', marginTop: '10px' }}>经营范围是否涉及国家规定实施的外商投资准入特别管理措施:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
							{
								value: '是',
								label: <span style={{fontSize: '16px'}}>是</span>,
							},
							{
								value: '否',
								label: <span style={{fontSize: '16px'}}>否</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 3
		},
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>特别管理措施</span>,
      children: <Form.Item name="shangwu_basic10"><TextArea rows={4} placeholder="若是，请列举特别管理措施" /></Form.Item>,
      span: 3
    },
    {
			key: '11',
			label: <span style={{fontSize: '16px'}}>是否符合条件</span>,
			children: 
				<Form.Item name="shangwu_basic11">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>是否符合条件的港澳投资者、服务提供者经营范围是否涉及内地与香港、澳门 《CEPA 服务贸易协议》《CEPA 投资协议》负面清单内的领域:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
							{
								value: '是',
								label: <span style={{fontSize: '16px'}}>是</span>,
							},
							{
								value: '否',
								label: <span style={{fontSize: '16px'}}>否</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 3
		},
		{
			label: <span style={{fontSize: '16px'}}>行业许可情况</span>,
			children: <span style={{fontSize: '16px'}}>———————————————— 以下信息为行业许可情况 ————————————————</span>,
			span: 3
		},
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>许可名称</span>,
      children: <Form.Item name="shangwu_basic12"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>许可编号</span>,
      children: <Form.Item name="shangwu_basic13"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>许可时间</span>,
      children: <Form.Item name="shangwu_basic14"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
			label: <span style={{fontSize: '16px'}}>企业属性</span>,
			children: <span style={{fontSize: '16px'}}>————————————————— 以下信息为企业属性 —————————————————</span>,
			span: 3
		},
    {
			key: '15',
			label: <span style={{fontSize: '16px'}}>是否是上市公司</span>,
			children: 
				<Form.Item name="shangwu_basic15">
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="是/否"
						optionFilterProp="label"
						options={[
							{
								value: '上市公司',
								label: <span style={{fontSize: '16px'}}>上市公司</span>,
							},
							{
								value: '非上市的公众公司',
								label: <span style={{fontSize: '16px'}}>非上市的公众公司</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>若是上市公司请选择</span>,
      children: 
        <Form.Item name="shangwu_basic16">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="若是上市公司请选择"
            optionFilterProp="label"
            options={[
              {
                value: 'A股票上市',
                label: <span style={{fontSize: '16px'}}>A股票上市</span>,
              },
              {
                value: 'B股票上市',
                label: <span style={{fontSize: '16px'}}>B股票上市</span>,
              },
              {
                value: 'H股票上市',
                label: <span style={{fontSize: '16px'}}>H股票上市</span>,
              },
              {
                value: 'N股票上市',
                label: <span style={{fontSize: '16px'}}>N股票上市</span>,
              },
              {
                value: 'S股票上市',
                label: <span style={{fontSize: '16px'}}>S股票上市</span>,
              },
              {
                value: '其他证券市场上市',
                label: <span style={{fontSize: '16px'}}>其他证券市场上市</span>,
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
			key: '17',
			label: <span style={{fontSize: '16px'}}>是否是功能性机构</span>,
			children: 
				<Form.Item name="shangwu_basic17">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请选择:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="若是请选择"
						optionFilterProp="label"
						options={[
							{
								value: '地区总部',
								label: <span style={{fontSize: '16px'}}>地区总部</span>,
							},
							{
								value: '采购中心',
								label: <span style={{fontSize: '16px'}}>采购中心</span>,
							},
							{
								value: '财务管理中心',
								label: <span style={{fontSize: '16px'}}>财务管理中心</span>,
							},							
							{
								value: '结算中心',
								label: <span style={{fontSize: '16px'}}>结算中心</span>,
							},
							{
								value: '销售中心',
								label: <span style={{fontSize: '16px'}}>销售中心</span>,
							},
							{
								value: '分拨中心',
								label: <span style={{fontSize: '16px'}}>分拨中心</span>,
							},
							{
								value: '其他',
								label: <span style={{fontSize: '16px'}}>其他</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
			key: '18',
			label: <span style={{fontSize: '16px'}}>是否是研发中心</span>,
			children: 
				<Form.Item name="shangwu_basic18">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请选择:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="若是请选择"
						optionFilterProp="label"
						options={[
							{
								value: '独立法人研发中心',
								label: <span style={{fontSize: '16px'}}>独立法人研发中心</span>,
							},
							{
								value: '非独立法人研发中心',
								label: <span style={{fontSize: '16px'}}>非独立法人研发中心</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>设立分公司研发中心</span>,
      children: <Form.Item name="shangwu_basic19"><Input size='large' addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>内设独立研发部门</span>,
      children: <Form.Item name="shangwu_basic20" ><Input size='large' addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
			key: '21',
			label: <span style={{fontSize: '16px'}}>是否是外商投资公司</span>,
			children: 
				<Form.Item name="shangwu_basic21">
					<Select
						allowClear
						style={{ width: '290px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择具体类型"
						optionFilterProp="label"
						options={[
							{
								value: '境外投资者（不属于以下投资类企业）',
								label: <span style={{fontSize: '16px'}}>境外投资者（不属于以下投资类企业）</span>,
							},
							{
								value: '外商投资的投资性公司',
								label: <span style={{fontSize: '16px'}}>外商投资的投资性公司</span>,
							},
							{
								value: '外商投资的创业投资公司',
								label: <span style={{fontSize: '16px'}}>外商投资的创业投资公司</span>,
							},
							{
								value: '外商投资的以投资为主要业务的合伙企业',
								label: <span style={{fontSize: '16px'}}>外商投资的以投资为主要业务的合伙企业</span>,
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>是否是高新技术企业</span>,
      children: 
				<Form.Item name="shangwu_basic22">
					<span style={{ fontSize:'16px', width: '250px', marginLeft: '10px', marginTop: '10px' }}>若是请填写 <b>高新技术企业认定证号:</b></span>
					<Input placeholder='高新技术企业认定证号' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
				</Form.Item>,
      span: 2,
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>是否是技术先进型服务企业</span>,
      children: 
				<Form.Item name="shangwu_basic22">
					<span style={{ fontSize:'16px', width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请填写 <b>技术先进型服务企业认定证号:</b></span>
					<Input placeholder='技术先进型服务企业认定证号' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>
				</Form.Item>,
      span: 3,
    },
		{
			label: <span style={{fontSize: '16px'}}>年末从业人数</span>,
			children: <span style={{fontSize: '16px'}}>————————————————— 以下信息为年末从业人数 —————————————————</span>,
			span: 3
		},
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>总计</span>,
      children: <Form.Item name="company_employee_1"><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>其中：外籍职工</span>,
      children: <Form.Item name="Tech_Employee_7"><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>大学及以上学历</span>,
      children: <Form.Item name="shangwu_basic26" ><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>本年职工薪酬</span>,
      children: <Form.Item name="company_runningsum_23" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
		{
			label: <span style={{fontSize: '16px'}}>有效发明专利数</span>,
			children: <span style={{fontSize: '16px'}}>————————————————— 以下信息为有效发明专利数 —————————————————</span>,
			span: 3
		},
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>境内知识产权</span>,
      children: 
				<Form.Item name="Tech_activity_67" >
					<span style={{ fontSize: '16px', marginLeft: '10px', marginTop: '10px' }}>境内知识产权行政部门授权数:</span>
					<Input size='large' addonAfter='项' style={{ width: '200px', marginLeft: '10px' }}></Input>
				</Form.Item>,
      span: 3
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>境外知识产权</span>,
      children: 
				<Form.Item name="Tech_activity_69" >
					<span style={{ fontSize: '16px', marginLeft: '10px', marginTop: '10px'}}>境外知识产权行政部门授权数:</span>
					<Input size='large' addonAfter='项' style={{ width: '200px', marginLeft: '10px' }}></Input>
				</Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=ShangwuBasicInfo', {
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
          <Descriptions style={{width: '1350px'}} title="【报表名称】基本情况" bordered items={items} />
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
              onClick={() => {window.location.href = '/auto_fill_test/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}