import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Select, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function HumanSocialCompanyInfo(props) {

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
        reqRatioConfig('HumanSocialCompanyInfo')
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
      label: '人员查询',
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_1">
          <Select
            showSearch
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择或搜索您想要查找的对象"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                  value: '张三',
                  label: '张三',
              },
              {
                  value: '李四',
                  label: '李四',
              },
              {
                  value: '王五',
                  label: '王五',
              },
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '2',
      label: '证件类型',
      children: <Form.Item name="company_basicinfo_27"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '证件号码',
      children: <Form.Item name="HumanSocial_CompanyInfo_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '个人基本信息',
      children: '-',
      span: 3
    },
    {
      key: '5',
      label: '证件号码',
      children: <Form.Item name="HumanSocial_CompanyInfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '姓名',
      children: <Form.Item name="HumanSocial_CompanyInfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '性别',
      children: <Form.Item name="HumanSocial_CompanyInfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '民族',
      children: <Form.Item name="HumanSocial_CompanyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '户口性质',
      children: <Form.Item name="HumanSocial_CompanyInfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '联系电话',
      children: <Form.Item name="HumanSocial_CompanyInfo_9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '户籍地地址',
      children: <Form.Item name="HumanSocial_CompanyInfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '常住地址',
      children: <Form.Item name="HumanSocial_CompanyInfo_11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '就业登记信息',
      children: '-',
      span: 3
    },
    {
      key: '14',
      label: '业务办理区',
      children: <Form.Item name="HumanSocial_CompanyInfo_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '业务办理街道',
      children: <Form.Item name="HumanSocial_CompanyInfo_13"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '用工形式',
      children: <Form.Item name="HumanSocial_CompanyInfo_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '人员类别一类',
      children: <Form.Item name="HumanSocial_CompanyInfo_15"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '人员类别二类',
      children: <Form.Item name="HumanSocial_CompanyInfo_16"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '人员类别三类',
      children: <Form.Item name="HumanSocial_CompanyInfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '工资待遇',
      children: <Form.Item name="HumanSocial_CompanyInfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '是否企业法人',
      children: <Form.Item name="HumanSocial_CompanyInfo_19"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '工种',
      children: <Form.Item name="HumanSocial_CompanyInfo_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '劳动合同类型',
      children: <Form.Item name="HumanSocial_CompanyInfo_21"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '合同开始日期',
      children: <Form.Item name="HumanSocial_CompanyInfo_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: '合同终止日期',
      children: <Form.Item name="HumanSocial_CompanyInfo_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '26',
      label: '是否创业',
      children: <Form.Item name="HumanSocial_CompanyInfo_24"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '27',
      label: '单位所在区县',
      children: <Form.Item name="HumanSocial_CompanyInfo_25"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '28',
      label: '单位所在街道（镇）',
      children: <Form.Item name="HumanSocial_CompanyInfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '29',
      label: '单位所在社区（村）',
      children: <Form.Item name="HumanSocial_CompanyInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '30',
      label: '备注',
      children: <Form.Item name="HumanSocial_CompanyInfo_28"><Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '31',
      label: '就失业登记证领取信息',
      children: '-',
      span: 3
    },
    {
      key: '32',
      label: '是否领取',
      children:
        <Form.Item name="HumanSocial_CompanyInfo_29">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '证书领取方式',
      children: <Form.Item name="HumanSocial_CompanyInfo_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: '收件人姓名',
      children: <Form.Item name="HumanSocial_CompanyInfo_31"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '收件人电话',
      children: <Form.Item name="HumanSocial_CompanyInfo_32"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '36',
      label: '收件人地址',
      children: <Form.Item name="HumanSocial_CompanyInfo_33"><Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=HumanSocialCompanyInfo', {
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
          <Descriptions title="单位就业登记信息" bordered items={items} />
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