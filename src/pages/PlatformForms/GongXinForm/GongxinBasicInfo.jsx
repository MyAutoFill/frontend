import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select } from 'antd';
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

export default function GongXinBasicInfo(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

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
        reqRatioConfig('InfoTechMonthlyForm')
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
			label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
			children: <Form.Item name='company_basicinfo_1' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
    },
    {
			label: <span style={{fontSize: '16px'}}>单位详细名称</span>,
			children: <Form.Item name='company_basicinfo_2' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
    },
		{
			label: <span style={{fontSize: '16px'}}>登记注册统计类别</span>,
			children: 
				<Form.Item name="Gongxin_basic1">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择登记注册统计类别"
            optionFilterProp="label"
            options={[
              {
                value: '111 国有独资企业',
                label: '111 国有独资企业',
              },
              {
                value: '112 私营有限责任公司',
                label: '112 私营有限责任公司',
              },
              {
                value: '119 其他有限责任公司',
                label: '119 其他有限责任公司',
              },
              {
                value: '121 私营股份有限公司',
                label: '121 私营股份有限公司',
              },
							{
                value: '129 其他股份有限责任公司',
                label: '129 其他股份有限责任公司',
              },
              {
                value: '131 全民所有制企业（国有企业）',
                label: '131 全民所有制企业（国有企业）',
              },
              {
                value: '132 集体所有制企业（集体企业）',
                label: '132 集体所有制企业（集体企业）',
              },
              {
                value: '133 股份合作企业',
                label: '133 股份合作企业',
              },
							{
                value: '134 联营企业',
                label: '134 联营企业',
              },
              {
                value: '140 个人独资企业',
                label: '140 个人独资企业',
              },
              {
                value: '150 合伙企业',
                label: '150 合伙企业',
              },
              {
                value: '190 其他内资企业',
                label: '190 其他内资企业',
              },
              {
                value: '210 港澳台投资有限责任公司',
                label: '210 港澳台投资有限责任公司',
              },
              {
                value: '220 港澳台投资股份有限公司',
                label: '220 港澳台投资股份有限公司',
              },
              {
                value: '230 港澳台投资合伙企业',
                label: '230 港澳台投资合伙企业',
              },
              {
                value: '290 其他港澳台投资企业',
                label: '290 其他港澳台投资企业',
              },
              {
                value: '310 外商投资有限责任公司',
                label: '310 外商投资有限责任公司',
              },
              {
                value: '320 外商投资股份有限公司',
                label: '320 外商投资股份有限公司',
              },
              {
                value: '330 外商投资合伙企业',
                label: '330 外商投资合伙企业',
              },
              {
                value: '390 其他外商投资企业',
                label: '390 其他外商投资企业',
              },
              {
                value: '400 农民专业合作社（联合社）',
                label: '400 农民专业合作社（联合社）',
              },
              {
                value: '500 个体工商户',
                label: '500 个体工商户',
              },
              {
                value: '900 其他市场主体',
                label: '900 其他市场主体',
              }
            ]}
          />
        </Form.Item>,
			span: 1
		},
    {
        label: <span style={{fontSize: '16px'}}>省自治区直辖市</span>,
        children: <Form.Item name='company_basicinfo_11' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>地市州盟</span>,
        children: <Form.Item name='company_basicinfo_12' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>县市区旗</span>,
        children: <Form.Item name='company_basicinfo_13' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>乡镇街道</span>,
        children: <Form.Item name='company_basicinfo_14' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>村居委会</span>,
        children: <Form.Item name='company_basicinfo_15' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>街路门牌号</span>,
        children: <Form.Item name='company_basicinfo_16' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>长途区号</span>,
        children: <Form.Item name='company_basicinfo_32' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>行业代码(GB/T 4754-2017)</span>,
        children: <Form.Item name='company_basicinfo_7' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>固定电话</span>,
        children: <Form.Item name='company_basicinfo_33' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>固定电话 - 2</span>,
        children: <Form.Item name='Gongxin_basic2' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: <span style={{fontSize: '16px'}}>移动电话</span>,
        children: <Form.Item name='company_basicinfo_36' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
		{
      label: <span style={{fontSize: '16px'}}>企业控股情况</span>,
      children: 
        <Form.Item name="company_basicinfo_r8">
          {/* <span style={{ width: '200px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span> */}
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="请选择企业控股情况"
            optionFilterProp="label"
            options={[
              {
                value: '国有控股',
                label: '国有控股',
              },
              {
                value: '集体控股',
                label: '集体控股',
              },
              {
                value: '私人控股',
                label: '私人控股',
              },
              {
                value: '港澳台控股',
                label: '港澳台控股',
              },
              {
                value: '外商控股',
                label: '外商控股',
              },
              {
                value: '其他',
                label: '其他',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    }
	];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=GongXinBasicInfo', {
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
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】工信基本信息" bordered items={items} />
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