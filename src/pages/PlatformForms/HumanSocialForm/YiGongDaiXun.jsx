import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';



export default function YiGongDaiXun() {

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
    load_data();
  }, []);

  const load_data = () => {
    request('/api/load_data', {
      method: 'POST',
      data: {
        platform_name: "人社局",
        table_name: '以工代训补贴申领信息',
        date: '2024-08'
      }
    })
      .then(function (res) {
        form.setFieldsValue(res);
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

  const items = [
    {
      key: '1',
      label: '单位信息',
      children: '-',
      span: 3
    },
    {
      key: '2',
      label: '单位名称',
      children: <Form.Item name="HumanSocial_yigongdaixun_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '统一信用代码',
      children: <Form.Item name="HumanSocial_yigongdaixun_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '法人姓名',
      children: <Form.Item name="HumanSocial_yigongdaixun_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '法人身份证号码',
      children: <Form.Item name="HumanSocial_yigongdaixun_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '基本账户开户银行',
      children: <Form.Item name="HumanSocial_yigongdaixun_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '基本账户银行账号',
      children: <Form.Item name="HumanSocial_yigongdaixun_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: '联系电话',
      children: <Form.Item name="HumanSocial_yigongdaixun_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '企业规模',
      children: <Form.Item name="HumanSocial_yigongdaixun_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '所属行业',
      children: <Form.Item name="HumanSocial_yigongdaixun_9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '补贴年月',
      children: <Form.Item name="HumanSocial_yigongdaixun_10"><DatePicker size='large' placeholder='请选择补贴年月' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '补贴类型',
      children: <Form.Item name="HumanSocial_yigongdaixun_11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '企业所属规划',
      children: <Form.Item name="HumanSocial_yigongdaixun_12"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '是否当月首次申领',
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_13">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '以工代训培训情况',
      children: <Form.Item name="HumanSocial_yigongdaixun_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '是否为劳务派遣',
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_15">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '劳务派遣单位名称',
      children: <Form.Item name="HumanSocial_yigongdaixun_16"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '派遣单位的统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '是否在省直参保',
      children:
        <Form.Item name="HumanSocial_yigongdaixun_18">    
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </Form.Item>,
      span: 1
    }
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Descriptions title="以工代训补贴申领信息" bordered items={items} />
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
          >立即填报</Button>
        </FloatButton.Group>
      </div>
    </>
  );
}