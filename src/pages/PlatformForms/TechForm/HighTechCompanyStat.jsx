import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select, DatePicker } from 'antd';
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

export default function HighTechCompanyStat(props) {

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
        reqRatioConfig('HighTechCompanyStat')
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
      key: '1',
      label: <span style={{fontSize: '16px'}}>国家高新技术产业开发区法人基本信息表</span>,
      children: <span style={{fontSize: '16px'}}>（区外经各地方高新技术企业认定管理机构认定的高新技术企业同时适用）</span>,
      span: 3
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>法人姓名</span>,
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>企业法人性别(qd19)</span>,
      children: <Form.Item name="Tech_stat_8"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>移动电话(qa09)</span>,
      children: <Form.Item name="company_basicinfo_29"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人传真</span>,
      children: <Form.Item name="Tech_stat_cz"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人邮箱</span>,
      children: <Form.Item name="Tech_stat_yx"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人证件类型</span>,
      children: 
        <Form.Item name="Tech_stat_frzjlx">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人证件类型"
            optionFilterProp="label"
            options={[
              {
                value: '居民身份证',
                label: '居民身份证',
              },
              {
                value: '外国人永久居留身份证',
                label: '外国人永久居留身份证',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人证件号码</span>,
      children: <Form.Item name="company_basicinfo_28" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>身份证有效期开始时间</span>,
      children: <Form.Item name="Tech_stat_IDstart"><DatePicker format="YYYY-MM-DD" size='large' placeholder='身份证有效期开始时间' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>身份证有效期结束时间</span>,
      children: <Form.Item name="Tech_stat_IDend"><DatePicker format="YYYY-MM-DD" size='large' placeholder='身份证有效期结束时间' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>统一社会信用代码(qa03)</span>,
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>企业(单位)详细名称(qa04)</span>,
      children: <Form.Item name="Tech_stat_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>企业(单位)英文名称(sname_0)</span>,
      children: <Form.Item name="Tech_stat_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位简称</span>,
      children: <Form.Item name="Electric_UserInfo_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位主页</span>,
      children: <Form.Item name="Electric_UserInfo_8"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人所在地区类型</span>,
      children:         
        <Form.Item name="Tech_stat_address">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人所在地区类型"
            optionFilterProp="label"
            options={[
              {
                value: '境内单位',
                label: '境内单位',
              },
              {
                value: '港澳台地区单位',
                label: '港澳台地区单位',
              },
              {
                value: '境外单位',
                label: '境外单位',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>法人类型</span>,
      children:         
        <Form.Item name="Tech_stat_type">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人类型"
            optionFilterProp="label"
            options={[
              {
                value: '企业法人',
                label: '企业法人',
              },
              {
                value: '社会组织法人',
                label: '社会组织法人',
              },
              {
                value: '机关事业单位法人',
                label: '机关事业单位法人',
              },
              {
                value: '个体工商户法人',
                label: '个体工商户法人',
              },
              {
                value: '其他（军队下属医院等没有统一社会信用代码的法人选择”其他“社会团体、民办非企业、基金会选择社会组织法人）',
                label: '其他（军队下属医院等没有统一社会信用代码的法人选择”其他“社会团体、民办非企业、基金会选择社会组织法人）',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位性质</span>,
      children:         
        <Form.Item name="Tech_stat_dwxz">
          <Select
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择单位性质"
            optionFilterProp="label"
            options={[
              {
                value: '私营企业',
                label: '私营企业',
              },
              {
                value: '国有企业',
                label: '国有企业',
              },
              {
                value: '其他企业',
                label: '其他企业',
              },
              {
                value: '转制型企业',
                label: '转制型企业',
              },
              {
                value: '合资企业',
                label: '合资企业',
              },
              {
                value: '外商投资企业',
                label: '外商投资企业',
              },
              {
                value: '港、澳、台投资企业',
                label: '港、澳、台投资企业',
              },
              {
                value: '集体所有制企业',
                label: '集体所有制企业',
              }
            ]}
          />
        </Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位地址</span>,
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>邮政编码</span>,
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>单位邮箱</span>,
      children: <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>单位成立日期</span>,
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择成立日期' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位注册资本币种</span>,
      children: <Form.Item name="company_basicinfo_currency"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位注册资金</span>,
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位登记机关</span>,
      children: <Form.Item name="company_basicinfo_djjg"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>单位登记状态</span>,
      children: <Form.Item name="company_basicinfo_djzt"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: <span style={{fontSize: '16px'}}>执照有效起始日期</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_69"><DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择状态起始日期' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>执照有效终止日期</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_70"><DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择状态终止日期' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>单位电话</span>,
      children: <Form.Item name="company_basicinfo_33"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>单位传真</span>,
      children: <Form.Item name="company_basicinfo_37"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      label: <span style={{fontSize: '16px'}}>是否独立法人</span>,
      children: 
        <Form.Item name="Tech_stat_dlfr">
          <Select
            showSearch
            allowClear
            style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否独立法人"
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
      key: '6',
      label: <span style={{fontSize: '16px'}}>行政区划代码(qa19)</span>,
      children: <Form.Item name="Tech_stat_4"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>法人性质(qa15)</span>,
      children: <Form.Item name="Tech_stat_5"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>出生年份(qd20)</span>,
      children: <Form.Item name="Tech_stat_6"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>学历(qd22)</span>,
      children: <Form.Item name="Tech_stat_7"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>企业通讯地址(qa05) </span>,
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>邮政编码(qa06)</span>,
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>企业注册地址(qa07)</span>,
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>企业负责人(qa08)</span>,
      children: <Form.Item name="company_basicinfo_30"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>统计负责人(qa20)</span>,
      children: <Form.Item name="Tech_stat_14"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>填报人(qa11)</span>,
      children: <Form.Item name="Tech_stat_15"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>填报人电话(qa17)</span>,
      children: <Form.Item name="Tech_stat_16"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>填报人手机(qa17_1)</span>,
      children: <Form.Item name="Tech_stat_17"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>填报时间(qa12)</span>,
      children: <Form.Item name="Tech_stat_18"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>填报人电子邮箱地址(qa13)</span>,
      children: <Form.Item name="Tech_stat_19"><Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=HighTechCompanyStat', {
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
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】法人基本信息表" bordered items={items} />
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