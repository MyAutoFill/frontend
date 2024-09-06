import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Upload, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function HospitalHelpInfos() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();
  
  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData()
      .then(function (res) {
        reqRatioConfig('HospitalHelpInfos')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              let a = BigNumber(new_res[key])
              let b = BigNumber(config[key])
              new_res[key] = a.times(b).toString();
            }
          });
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

  const props = {
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
      label: '单位信息',
      children: '-',
      span: 3
    },
    {
      key: '2',
      label: '单位编号',
      children: <Form.Item name="company_insurance_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '单位名',
      children: <Form.Item name="yibao_securityinfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '经办人姓名',
      children: <Form.Item name="yibao_securityinfo_3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '经办人电话',
      children: <Form.Item name="yibao_securityinfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '住院医疗互助保障',
      children: '-',
      span: 3
    },
    {
      key: '7',
      label: '参保单位',
      children: <Form.Item name="yibao_securityinfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '参保人数',
      children: <Form.Item name="yibao_securityinfo_6"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '经办人姓名',
      children: <Form.Item name="yibao_securityinfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '经办人手机号',
      children: <Form.Item name="yibao_securityinfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '缴费总金额',
      children: <Form.Item name="yibao_securityinfo_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '社保缴费凭证图片（上传文件）',
      children: 
        <Upload {...props} >
          <Button size='large' disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传凭证</Button>
        </Upload>,
      span: 1
    },
    {
      key: '13',
      label: '使用电子印章',
      children: <Form.Item name="yibao_securityinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '参保人数占社保缴费人数比例',
      children: <Form.Item name="yibao_securityinfo_11"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '电子印章（上传文件）',
      children: 
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传电子印章</Button>
        </Upload>,
      span: 1
    },
    {
      key: '16',
      label: '接收发票邮箱',
      children: <Form.Item name="yibao_securityinfo_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '参保年份',
      children: <Form.Item name="yibao_securityinfo_13"><DatePicker disabled={disableVar} size='large' placeholder='请选择参保年份' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '发票单位名称与注册名称是否一致',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={1}>是</Radio>
          <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 1
    },
    {
      key: '19',
      label: '社保缴费人数',
      children: <Form.Item name="yibao_securityinfo_14"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '20',
      label: '住院津贴互助保障',
      children: '-',
      span: 3
    },
    {
      key: '21',
      label: '注册单位',
      children: <Form.Item name="yibao_securityinfo_15"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '参保人数',
      children: <Form.Item name="yibao_securityinfo_16"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '经办人姓名',
      children: <Form.Item name="yibao_securityinfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '经办人手机号',
      children: <Form.Item name="yibao_securityinfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: '每人参保份数',
      children: <Form.Item name="yibao_securityinfo_19"><Input disabled={disableVar} addonAfter='份' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: '缴费总金额',
      children: <Form.Item name="yibao_securityinfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '使用电子印章（是/否）',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={1}>是</Radio>
          <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 1,
    },
    {
      key: '28',
      label: '参保人数占社保缴费人数比例',
      children: <Form.Item name="yibao_securityinfo_21"><Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '29',
      label: '电子印章（上传文件）',
      children: 
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传电子印章</Button>
        </Upload>,
      span: 3
    },
    {
      key: '30',
      label: '上传经办人身份证正反面',
      children: 
      <>
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传身份证正面</Button>
        </Upload>
        <br></br>
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传身份证反面</Button>
        </Upload>
      </>,
      span: 3
    },
    {
      key: '31',
      label: '统一社会信用代码证或工会法人资格证（上传文件）',
      children: '-',
      span: 3
    },
    {
      key: '32',
      label: '请选择是否打印发票（是/否）',
      children:
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={1}>是</Radio>
          <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 1
    },
    {
      key: '33',
      label: '参保年份',
      children: <Form.Item name="yibao_securityinfo_22"><DatePicker disabled={disableVar} size='large' placeholder='请选择参保年份' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: '职工总数',
      children: <Form.Item name="yibao_securityinfo_23"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '备注',
      children: <Form.Item name="yibao_securityinfo_24"><Input disabled={disableVar} size='large' style={{ width: '810px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=HospitalHelpInfos', {
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
          date: '2024-09',
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
          <Descriptions title="住院医疗互助信息" bordered items={items} />
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
              onClick={() => {history.push('/input?tab=4');}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}