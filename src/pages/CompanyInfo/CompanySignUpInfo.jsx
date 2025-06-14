import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, DatePicker, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, transferDate, saveDateAsString } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

export default function CompanySignUpInfo(props) {
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  const dateFormat = "YYYY-MM-DD";

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    requestCompanyData(uuid)
      .then(function (res) {
        reqRatioConfig('CompanySignUpInfo')
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
          var after = transferDate(new_res);
          form.resetFields();
          form.setFieldsValue(after);
        })
      })
  }

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanySignUpInfo', {
      method: 'GET',
    })
    .then(function (config) {
      var after = saveDateAsString(values);
      const new_res = JSON.parse(JSON.stringify(after));
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
      request('/api/save_company_data', {
        method: 'POST',
        data: {
          data: new_res,
          uuid: uuid
        }
      })
    })
  };

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
      label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '28',
      label: <span style={{fontSize: '16px'}}>纳税人识别号</span>,
      children: <Form.Item name="company_investor28"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>特定经营地域</span>,
      children: <Form.Item name="company_basicinfo_12"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>信用级别</span>,
      children: <Form.Item name="company_signup1"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>风险等级</span>,
      children: <Form.Item name="company_signup2"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>市场标志</span>,
      children: <Form.Item name="company_signup5"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>企业状态</span>,
      children: <Form.Item name="company_signup6"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>名称核准号</span>,
      children: <Form.Item name="company_signup7"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>经营场所邮政编码</span>,
      children: <Form.Item name="company_basicinfo_38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>投资者人数</span>,
      children: <Form.Item name="company_signup9"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>主体身份代码</span>,
      children: <Form.Item name="company_signup10"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>企业(机构)名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>企业名称拼音</span>,
      children: <Form.Item name="company_signup13"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>注册号</span>,
      children: <Form.Item name="company_signup14"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>老注册号</span>,
      children: <Form.Item name="company_signup15"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>企业(机构)类型</span>,
      children: <Form.Item name="company_basicinfo_r3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '17',
      label: <span style={{fontSize: '16px'}}>注册资本</span>,
      children: <Form.Item name="company_basicinfo_45"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>行业门类</span>,
      children: <Form.Item name="company_basicinfo_4"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>行业代码</span>,
      children: <Form.Item name="company_basicinfo_7"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>登记机关</span>,
      children: <Form.Item name="company_basicinfo_djjg"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
		{
      key: '21',
      label: <span style={{fontSize: '16px'}}>成立日期</span>,
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker format={dateFormat} onChange={(date, dateString) => {console.log(date, dateString)}} size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
		{
			key: '22',
			label: <span style={{fontSize: '16px'}}>邮政编码</span>,
			children: <Form.Item name="company_basicinfo_38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '23',
			label: <span style={{fontSize: '16px'}}>联系电话</span>,
			children: <Form.Item name="company_basicinfo_29"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '24',
			label: <span style={{fontSize: '16px'}}>电子邮箱</span>,
			children: <Form.Item name="company_basicinfo_35"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '25',
			label: <span style={{fontSize: '16px'}}>传真</span>,
			children: <Form.Item name="company_basicinfo_37"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '26',
			label: <span style={{fontSize: '16px'}}>网址</span>,
			children: <Form.Item name="company_signup26"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '27',
			label: <span style={{fontSize: '16px'}}>经营(业务)范围</span>,
			children: <Form.Item name="company_basicinfo_8"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '54',
			label: <span style={{fontSize: '16px'}}>许可经营项目</span>,
			children: <Form.Item name="company_signup54"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '55',
			label: <span style={{fontSize: '16px'}}>一般经营项目</span>,
			children: <Form.Item name="company_signup55"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '28',
			label: <span style={{fontSize: '16px'}}>经营类别</span>,
			children: <Form.Item name="company_signup28"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '29',
			label: <span style={{fontSize: '16px'}}>营业期限（年限）</span>,
			children: <Form.Item name="company_basicinfo_9"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '30',
			label: <span style={{fontSize: '16px'}}>实收资本</span>,
			children: <Form.Item name="company_runningsum_32"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '31',
			label: <span style={{fontSize: '16px'}}>经营场所行政区划</span>,
			children: <Form.Item name="company_signup31"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '32',
			label: <span style={{fontSize: '16px'}}>经营场所</span>,
			children: <Form.Item name="company_signup32"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '33',
			label: <span style={{fontSize: '16px'}}>经营场所产权</span>,
			children: <Form.Item name="company_signup33"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '34',
			label: <span style={{fontSize: '16px'}}>经营方式(营业)</span>,
			children: <Form.Item name="company_signup34"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '35',
			label: <span style={{fontSize: '16px'}}>隶属关系(营业)</span>,
			children: <Form.Item name="company_basicinfo_r9"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '36',
			label: <span style={{fontSize: '16px'}}>经济性质</span>,
			children: <Form.Item name="company_signup36"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '37',
			label: <span style={{fontSize: '16px'}}>合伙人数</span>,
			children: <Form.Item name="company_signup37"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '38',
			label: <span style={{fontSize: '16px'}}>合伙方式</span>,
			children: <Form.Item name="company_signup38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '39',
			label: <span style={{fontSize: '16px'}}>执行人数</span>,
			children: <Form.Item name="company_signup39"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '40',
			label: <span style={{fontSize: '16px'}}>从业人数</span>,
			children: <Form.Item name="company_employee_1"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '41',
			label: <span style={{fontSize: '16px'}}>投资总额</span>,
			children: <Form.Item name="company_signup41"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '42',
			label: <span style={{fontSize: '16px'}}>投资总额币种</span>,
			children: <Form.Item name="company_signup42"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '43',
			label: <span style={{fontSize: '16px'}}>批准文号</span>,
			children: <Form.Item name="company_signup43"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
      key: '44',
      label: '批准日期',
      children: <Form.Item name="company_signup44"><DatePicker format={dateFormat} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
		{
			key: '45',
			label: <span style={{fontSize: '16px'}}>法定代表人</span>,
			children: <Form.Item name="company_basicinfo_26"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '46',
			label: <span style={{fontSize: '16px'}}>执照信息（有效期限）</span>,
			children: <Form.Item name="company_basicinfo_9"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '47',
			label: <span style={{fontSize: '16px'}}>经营状态</span>,
			children: <Form.Item name="company_signup6"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '48',
			label: <span style={{fontSize: '16px'}}>下岗失业人数</span>,
			children: <Form.Item name="company_signup48"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '49',
			label: <span style={{fontSize: '16px'}}>高校毕业生人数-经营者</span>,
			children: <Form.Item name="company_signup49"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '50',
			label: <span style={{fontSize: '16px'}}>高校毕业生人数-雇员</span>,
			children: <Form.Item name="company_signup50"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '52',
			label: <span style={{fontSize: '16px'}}>退役士兵人数-经营者</span>,
			children: <Form.Item name="company_signup52"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '56',
			label: <span style={{fontSize: '16px'}}>退役士兵人数-雇员</span>,
			children: <Form.Item name="company_signup56"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '57',
			label: <span style={{fontSize: '16px'}}>其中残疾人人数-经营者</span>,
			children: <Form.Item name="company_signup57"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '58',
			label: <span style={{fontSize: '16px'}}>其中残疾人人数-雇员</span>,
			children: <Form.Item name="company_signup58"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '49',
			label: <span style={{fontSize: '16px'}}>其中失业再就业人数-经营者</span>,
			children: <Form.Item name="company_signup59"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
    {
			key: '50',
			label: <span style={{fontSize: '16px'}}>其中失业再就业人数-雇员</span>,
			children: <Form.Item name="company_signup60"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '51',
			label: <span style={{fontSize: '16px'}}>档案编号</span>,
			children: <Form.Item name="company_signup51"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '52',
			label: <span style={{fontSize: '16px'}}>组织机构代码</span>,
			children: <Form.Item name="company_basicinfo_10"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
			key: '53',
			label: <span style={{fontSize: '16px'}}>税务登记证号</span>,
			children: <Form.Item name="company_signup53"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
			span: 1
		},
		{
      key: '50',
      label: <span style={{fontSize: '16px'}}>单位注册地区划及详细地址</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_11"><Input size='large' addonBefore="省（自治区、直辖市）" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12"><Input size='large' addonBefore="市（地、州、盟)" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13"><Input size='large' addonBefore="县（市、区、旗)" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input size='large' addonBefore="乡（镇、街道办事处）" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input size='large' addonBefore="村（居）委会" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16"><Input size='large' addonBefore="街（路）、门牌" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17"><Input size='large' addonBefore="详细地址" style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 2
    }
  ];

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 950, width: 'auto', padding: 20, overflow:'auto'}} >
        <Form onFinish={onFinish} form={form}>
          <Descriptions style={{width: '1300px' }} title="企业登记信息" bordered items={items} />
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