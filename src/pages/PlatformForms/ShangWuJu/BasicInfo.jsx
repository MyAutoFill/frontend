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
			label: '企业信息',
			children: '———————————————— 以下信息为企业信息 ————————————————',
			span: 3
		},
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '单位名称（中文）',
      children: <Form.Item name="company_basicinfo_2" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '单位名称（英文）',
      children: <Form.Item name="Tech_stat_3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: '联系电话',
      children: <Form.Item name="company_basicinfo_29"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: '电子邮箱',
      children: <Form.Item name="company_basicinfo_35"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: '通信地址',
      children: <Form.Item name="company_basicinfo_34"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: '邮政编码',
      children: <Form.Item name="company_basicinfo_38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
		{
			label: '经营范围',
			children: '———————————————— 以下信息为经营范围 ————————————————',
			span: 3
		},
    {
      key: '8',
      label: '经营范围',
      children: <Form.Item name="company_basicinfo_8"><Input size='large' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
			key: '9',
			label: '是否涉及特别管理措施',
			children: 
				<Form.Item name="shangwu_basic9">
					<span style={{ width: '200px', marginTop: '10px' }}>经营范围是否涉及国家规定实施的外商投资准入特别管理措施:</span>
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
			span: 1.5
		},
    {
      key: '10',
      label: '特别管理措施',
      children: <Form.Item name="shangwu_basic10"><TextArea rows={4} placeholder="若是，请列举特别管理措施" /></Form.Item>,
      span: 3
    },
    {
			key: '11',
			label: '是否符合条件',
			children: 
				<Form.Item name="shangwu_basic11">
					<span style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}>是否符合条件的港澳投资者、服务提供者经营范围是否涉及内地与香港、澳门 《CEPA 服务贸易协议》《CEPA 投资协议》负面清单内的领域:</span>
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
			span: 3
		},
		{
			label: '行业许可情况',
			children: '———————————————— 以下信息为行业许可情况 ————————————————',
			span: 3
		},
    {
      key: '12',
      label: '许可名称',
      children: <Form.Item name="shangwu_basic12"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '许可编号',
      children: <Form.Item name="shangwu_basic13"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '许可时间',
      children: <Form.Item name="shangwu_basic14"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
			label: '企业属性',
			children: '————————————————— 以下信息为企业属性 —————————————————',
			span: 3
		},
    {
			key: '15',
			label: '是否是上市公司',
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
								label: '上市公司',
							},
							{
								value: '非上市的公众公司',
								label: '非上市的公众公司',
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
      key: '16',
      label: '若是上市公司请选择',
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
                label: 'A股票上市',
              },
              {
                value: 'B股票上市',
                label: 'B股票上市',
              },
              {
                value: 'H股票上市',
                label: 'H股票上市',
              },
              {
                value: 'N股票上市',
                label: 'N股票上市',
              },
              {
                value: 'S股票上市',
                label: 'S股票上市',
              },
              {
                value: '其他证券市场上市',
                label: '其他证券市场上市',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
			key: '17',
			label: '是否是功能性机构',
			children: 
				<Form.Item name="shangwu_basic17">
					<span style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请选择:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="若是请选择"
						optionFilterProp="label"
						options={[
							{
								value: '地区总部',
								label: '地区总部',
							},
							{
								value: '采购中心',
								label: '采购中心',
							},
							{
								value: '财务管理中心',
								label: '财务管理中心',
							},							
							{
								value: '结算中心',
								label: '结算中心',
							},
							{
								value: '销售中心',
								label: '销售中心',
							},
							{
								value: '分拨中心',
								label: '分拨中心',
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
			key: '18',
			label: '是否是研发中心',
			children: 
				<Form.Item name="shangwu_basic18">
					<span style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请选择:</span>
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="若是请选择"
						optionFilterProp="label"
						options={[
							{
								value: '独立法人研发中心',
								label: '独立法人研发中心',
							},
							{
								value: '非独立法人研发中心',
								label: '非独立法人研发中心',
							}
						]}
					/>
				</Form.Item>,
			span: 1
		},
    {
      key: '19',
      label: '设立分公司研发中心',
      children: <Form.Item name="shangwu_basic19"><Input size='large' addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '20',
      label: '内设独立研发部门',
      children: <Form.Item name="shangwu_basic20" ><Input size='large' addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
			key: '21',
			label: '是否是外商投资公司',
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
			span: 1
		},
    {
      key: '22',
      label: '是否是高新技术企业',
      children: 
				<Form.Item name="shangwu_basic22">
					<span style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}>若是请填写 <b>高新技术企业认定证号:</b></span>
					<Input placeholder='高新技术企业认定证号' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
				</Form.Item>,
      span: 1,
    },
    {
      key: '23',
      label: '是否是技术先进型服务企业',
      children: 
				<Form.Item name="shangwu_basic22">
					<span style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}>若是请填写 <b>技术先进型服务企业认定证号:</b></span>
					<Input placeholder='技术先进型服务企业认定证号' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
				</Form.Item>,
      span: 1,
    },
		{
			label: '年末从业人数',
			children: '————————————————— 以下信息为年末从业人数 —————————————————',
			span: 3
		},
    {
      key: '24',
      label: '总计',
      children: <Form.Item name="company_employee_1"><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: '其中：外籍职工',
      children: <Form.Item name="Tech_Employee_7"><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '26',
      label: '大学及以上学历',
      children: <Form.Item name="shangwu_basic26" ><Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '本年职工薪酬',
      children: <Form.Item name="company_runningsum_23" ><Input size='large' addonAfter='万元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
		{
			label: '有效发明专利数',
			children: '————————————————— 以下信息为有效发明专利数 —————————————————',
			span: 3
		},
    {
      key: '28',
      label: '境内知识产权',
      children: 
				<Form.Item name="Tech_activity_67" >
					<span style={{ marginLeft: '10px', marginTop: '10px' }}>境内知识产权行政部门授权数:</span>
					<Input size='large' addonAfter='项' style={{ width: '200px', marginLeft: '10px' }}></Input>
				</Form.Item>,
      span: 3
    },
    {
      key: '29',
      label: '境外知识产权',
      children: 
				<Form.Item name="Tech_activity_69" >
					<span style={{ marginLeft: '10px', marginTop: '10px'}}>境外知识产权行政部门授权数:</span>
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
          <Descriptions style={{width: '1350px'}} title="基本情况" bordered items={items} />
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