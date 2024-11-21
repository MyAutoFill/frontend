import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Select, DatePicker, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function CompanyInfoChange(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('CompanyInfoChange')
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

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

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
      key: '3',
      label: '单位所属行业',
      children: <Form.Item name="CompanyInfoChange_1">
        <Select name="dwsshy" id="dwsshy" disabled="">
            <Select.Option value="农、林、牧、渔业">农、林、牧、渔业</Select.Option>
            <Select.Option value="采矿业">采矿业</Select.Option>
            <Select.Option value="制造业">制造业</Select.Option>
            <Select.Option value="电力、燃气及水的生产和供应业">电力、燃气及水的生产和供应业</Select.Option>
            <Select.Option value="建筑业">建筑业</Select.Option>
            <Select.Option value="批发和零售业">批发和零售业</Select.Option>
            <Select.Option value="交通运输、仓储和邮政业">交通运输、仓储和邮政业</Select.Option>
            <Select.Option value="住宿和餐饮业">住宿和餐饮业</Select.Option>
            <Select.Option value="信息传输、软件和信息技术服务业">信息传输、软件和信息技术服务业</Select.Option>
            <Select.Option value="金融业">金融业</Select.Option>
            <Select.Option value="房地产业">房地产业</Select.Option>
            <Select.Option value="租赁和商务服务业">租赁和商务服务业</Select.Option>
            <Select.Option value="科学研究、技术服务业">科学研究、技术服务业</Select.Option>
            <Select.Option value="水利、环境和公共设施管理业">水利、环境和公共设施管理业</Select.Option>
            <Select.Option value="居民服务、修理和其他服务业">居民服务、修理和其他服务业</Select.Option>
            <Select.Option value="教育">教育</Select.Option>
            <Select.Option value="卫生和社会工作">卫生和社会工作</Select.Option>
            <Select.Option value="文化、体育和娱乐业">文化、体育和娱乐业</Select.Option>
            <Select.Option value="公共管理、社会保障和社会组织">公共管理、社会保障和社会组织</Select.Option>
            <Select.Option value="国际组织">国际组织</Select.Option>
        </Select>
        </Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '单位性质',
      children: <Form.Item name="CompanyInfoChange_2"><Select name="dwxz" id="dwxz">
      <Select.Option value="国家机关">国家机关</Select.Option>
      <Select.Option value="全额事业">全额事业</Select.Option>
      <Select.Option value="差额事业">差额事业</Select.Option>
      <Select.Option value="自收自支事业单位">自收自支事业单位</Select.Option>
      <Select.Option value="地方国有企业">地方国有企业</Select.Option>
      <Select.Option value="集体企业">集体企业</Select.Option>
      <Select.Option value="股份制企业">股份制企业</Select.Option>
      <Select.Option value="有限责任公司">有限责任公司</Select.Option>
      <Select.Option value="三资企业">三资企业</Select.Option>
      <Select.Option value="外地驻威行政事业">外地驻威行政事业</Select.Option>
      <Select.Option value="外资企业">外资企业</Select.Option>
      <Select.Option value="私营企业">私营企业</Select.Option>
      <Select.Option value="社会团体">社会团体</Select.Option>
      <Select.Option value="个体工商户">个体工商户</Select.Option>
      <Select.Option value="自由职业者">自由职业者</Select.Option>
      <Select.Option value="其他">其他</Select.Option>
      <Select.Option value="部队">部队</Select.Option>
      </Select></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '隶属关系',
      children: 
				<Form.Item name="company_basicinfo_r9">
					<Select
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择隶属关系"
						optionFilterProp="label"
						onChange={peopleSearchOnChange}
						onSearch={peopleSearchOnSearch}
						options={[
							{
								value: '中央',
								label: '中央',
							},
							{
								value: '省',
								label: '省',
							},
							{
								value: '市、地区',
								label: '市、地区',
							},
							{
								value: '区',
								label: '区',
							},
							{
								value: '县',
								label: '县',
							},
							{
								value: '街道',
								label: '街道',
							},
							{
								value: '镇',
								label: '镇',
							},
							{
								value: '乡',
								label: '乡',
							},
							{
								value: '居民委员会',
								label: '居民委员会',
							},
							{
								value: '村民委员会',
								label: '村民委员会',
							},
							{
								value: '军队',
								label: '军队',
							},
							{
								value: '其他',
								label: '其他',
							}
						]}
					/>
				</Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '经济类型',
      children: 
        <Form.Item name="CompanyInfoChange_4">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择经济类型"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '内资',
                label: '内资',
              },
              {
                value: '国有全资',
                label: '国有全资',
              },
              {
                value: '集体全资',
                label: '集体全资',
              },
              {
                value: '股份合作',
                label: '股份合作',
              },
              {
                value: '国有联营',
                label: '国有联营',
              },
              {
                value: '集体联营',
                label: '集体联营',
              },
              {
                value: '国有与集体联营',
                label: '国有与集体联营',
              },
              {
                value: '其他联营',
                label: '其他联营',
              },
              {
                value: '国有独资（公司）',
                label: '国有独资（公司）',
              },
              {
                value: '其他有限责任公司（公司）',
                label: '其他有限责任公司（公司）',
              },
              {
                value: '股份有限（公司）',
                label: '股份有限（公司）',
              },
              {
                value: '私有独资',
                label: '私有独资',
              },
              {
                value: '私有合伙',
                label: '私有合伙',
              },
              {
                value: '私营有限责任（公司）',
                label: '私营有限责任（公司）',
              },
              {
                value: '私营股份有限（公司）',
                label: '私营股份有限（公司）',
              },
              {
                value: '个体经营',
                label: '个体经营',
              },
              {
                value: '其他私有',
                label: '其他私有',
              },
              {
                value: '其他内资',
                label: '其他内资',
              },
              {
                value: '内地和港、澳。台合资',
                label: '内地和港、澳。台合资',
              },
              {
                value: '内地和港、澳。台合作',
                label: '内地和港、澳。台合作',
              },
              {
                value: '港、澳。台独资',
                label: '港、澳。台独资',
              },
              {
                value: '港、澳。台投资股份有限（公司）',
                label: '港、澳。台投资股份有限（公司）',
              },
              {
                value: '其他港、澳。台投资',
                label: '其他港、澳。台投资',
              },
              {
                value: '中外合资',
                label: '中外合资',
              },
              {
                value: '中外合作',
                label: '中外合作',
              },
              {
                value: '外资',
                label: '外资',
              },
              {
                value: '国外投资股份有限（公司）',
                label: '国外投资股份有限（公司）',
              },
              {
                value: '其他国外投资',
                label: '其他国外投资',
              },
              {
                value: '其他',
                label: '其他',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '单位邮编',
      children: <Form.Item name="CompanyInfoChange_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: '单位电子信箱',
      children: <Form.Item name="CompanyInfoChange_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: '单位设立日期',
      children: <Form.Item name="CompanyInfoChange_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: '单位发薪日',
      children: <Form.Item name="CompanyInfoChange_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: '主管部门',
      children: <Form.Item name="CompanyInfoChange_9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: '经办人姓名',
      children: <Form.Item name="CompanyInfoChange_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '13',
      label: '经办人证件类型',
      children: <Form.Item name="CompanyInfoChange_11"><Select>
      <Select.Option value="身份证">身份证</Select.Option>
      <Select.Option value="军官证">军官证</Select.Option>
      <Select.Option value="护照">护照</Select.Option>
      <Select.Option value="外国人永久居留证">外国人永久居留证</Select.Option>
      <Select.Option value="户口本">户口本</Select.Option>
      <Select.Option value="带照片的户籍证明">带照片的户籍证明</Select.Option>
      </Select></Form.Item>,
      span: 1.5
    },
    {
      key: '14',
      label: '经办人证件号码',
      children: <Form.Item name="CompanyInfoChange_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '15',
      label: '经办人固定电话号码',
      children: <Form.Item name="CompanyInfoChange_13"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '16',
      label: '经办人手机号码',
      children: <Form.Item name="CompanyInfoChange_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: '变更备注',
      children: <Form.Item name="CompanyInfoChange_15"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanyInfoChange', {
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
          <Descriptions style={{width: '1300px'}} title="单位信息变更" bordered items={items} />
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