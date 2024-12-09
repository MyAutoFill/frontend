import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Upload, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function ElectricUserInfo(props) {

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
        reqRatioConfig('ElectricUserInfo')
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

  const uploadprops = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== '上传') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === '完成') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const items = [
    {
      key: '1',
      label: '工商信息',
      children: '-',
      span: 3
    },
    {
      key: '2',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '组织机构代码',
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '税务登记证号',
      children: <Form.Item name="Statistic_CompanyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '名称',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '简称',
      children: <Form.Item name="Electric_UserInfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '曾用名（选填）',
      children: <Form.Item name="company_basicinfo_3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '类型',
      children: <Form.Item name="company_basicinfo_r3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '住所',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '注册资本',
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '成立日期',
      children: <DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择成立日期' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '12',
      label: '营业期限',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '经营范围',
      children: <Form.Item name="company_basicinfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '法定代表人信息',
      children: '-',
      span: 3
    },
    {
      key: '15',
      label: '证件类型',
      children: <Form.Item name="company_basicinfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '证件',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '姓名',
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '证件号码',
      children: <Form.Item name="company_basicinfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '手机号码',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '20',
      label: '银行开户信息',
      children: '-',
      span: 3
    },
    {
      key: '21',
      label: '账户信息（选填）',
      children: <Form.Item name="Electric_UserInfo_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '22',
      label: '开户银行',
      children: <Form.Item name="HumanSocial_yigongdaixun_5"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '23',
      label: '开户名称',
      children: <Form.Item name="Electric_UserInfo_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '24',
      label: '开户账户',
      children: <Form.Item name="Electric_UserInfo_4"><Input disabled={disableVar} size='large' style={{ width: '250px  ', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '25',
      label: '联系信息',
      children: '-',
      span: 3
    },
    {
      key: '26',
      label: '地理区域',
      children: <Form.Item name="Electric_UserInfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '邮政编码（选填）',
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '28',
      label: '传真号码（选填）',
      children: <Form.Item name="company_basicinfo_37"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '29',
      label: '企业网址（选填）',
      children: <Form.Item name="Electric_UserInfo_8"><Input disabled={disableVar} size='large' style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '30',
      label: '通讯详细地址',
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '31',
      label: '通讯所在地区',
      children: <Form.Item name="Electric_UserInfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: '入退市状态',
      children:
        <Form.Item name="Electric_UserInfo_11">
          <Radio.Group disabled={disableVar}  style={{marginTop: '10px' }}>
            <Radio value={1}>入市</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>退市</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: '注册失效时间',
      children: <DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择注册失效时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '34',
      label: '行业性质',
      children: <Form.Item name="company_basicinfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '行业类别',
      children: <Form.Item name="company_basicinfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '36',
      label: '高新技术证书编号',
      children: <Form.Item name="Electric_UserInfo_15"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '37',
      label: '证明材料',
      children:       
        <Form.Item name="Electric_UserInfo_16">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传证明材料</Button>
          </Upload>
        </Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: '电力用户类型',
      children:
        <Form.Item name="Electric_UserInfo_17">
          <Radio.Group disabled={disableVar}  style={{marginTop: '10px' }}>
            <Radio value={1}>零售用户</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>直接交易用户</Radio>
            <Radio value={3} style={{ marginLeft: '10px'}}>已注册未交易用户</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '用电电压等级',
      children: <Form.Item name="Electric_UserInfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '40',
      label: '电价行业类别',
      children: <Form.Item name="Electric_UserInfo_19"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '定价策略类型',
      children: <Form.Item name="Electric_UserInfo_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '42',
      label: '注册生效时间',
      children: <DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择注册生效时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      label: '联系人信息',
      children: '-',
      span: 3
    },
    {
      key: '44',
      label: '姓名',
      children: <Form.Item name="Electric_UserInfo_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '45',
      label: '专业',
      children: <Form.Item name="Electric_UserInfo_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '46',
      label: '手机号',
      children: <Form.Item name="Electric_UserInfo_24"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '47',
      label: '办公电话',
      children: <Form.Item name="Electric_UserInfo_25"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '48',
      label: '邮箱',
      children: <Form.Item name="Electric_UserInfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '49',
      label: '第一联系人',
      children: <Form.Item name="Electric_UserInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '50',
      label: '附件信息',
      children: '-',
      span: 3
    },

    {
      key: '51',
      label: '准入目录文件',
      children:         
        <Form.Item name="Electric_UserInfo_28">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传准入目录文件</Button>
          </Upload>
        </Form.Item>,
      span: 1
    },
    {
      key: '53',
      label: '备注',
      children: <Form.Item name="Electric_UserInfo_29"><Input disabled={disableVar} size='large' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '54',
      label: '第一联系人授权文件（模板）',
      children: 
        <Form.Item name="Electric_UserInfo_30">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传授权文件</Button>
          </Upload>
        </Form.Item>,
      span: 1
    },
    {
      key: '56',
      label: '备注',
      children: <Form.Item name="Electric_UserInfo_31"><Input disabled={disableVar} size='large' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '57',
      label: '其他附件',
      children:
        <Form.Item name="Electric_UserInfo_32">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传其他附件</Button>
          </Upload>
        </Form.Item>,
      span: 1
    },
    {
      key: '59',
      label: '备注',
      children: <Form.Item name="Electric_UserInfo_33"><Input disabled={disableVar} size='large' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=ElectricUserInfo', {
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
          <Descriptions style={{width: '1300px'}} title="电力用户基本信息" bordered items={items} />
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