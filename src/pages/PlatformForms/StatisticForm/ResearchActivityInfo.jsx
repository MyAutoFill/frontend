import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';


export default function ResearchActivityInfo() {

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
        platform_name: "统计局",
        table_name: '研究开发活动及相关情况信息',
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
      label: '一、研究开发人员情况',
      children: '-',
      span: 3
    },
    {
      key: '2',
      label: '研究开发人员合计',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_1"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_2"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '3',
      label: '其中：管理和服务人员',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_3"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_4"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '4',
      label: '其中：女性',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_5"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_6"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '5',
      label: '其中：全职人员',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_7"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_8"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '6',
      label: '其中：本科毕业及以上人员',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_9"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_10"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '7',
      label: '其中：外聘人员',
      children:
        <>
          <Form.Item name="Statistic_ResearchActivity_11"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_12"><Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '8',
      label: '二、研究开发费用情况',
      children: '-',
      span: 3
    },
    {
      key: '9',
      label: '研究开发费用合计  ',
      children: <Form.Item name="Statistic_ResearchActivity_13"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '1.人员人工费用',
      children: <Form.Item name="Statistic_ResearchActivity_14"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '2.直接投入费用',
      children: <Form.Item name="Statistic_ResearchActivity_15"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '3.折旧费用与长期待摊费用',
      children: <Form.Item name="Statistic_ResearchActivity_16"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: '4.无形资产摊销费用',
      children: <Form.Item name="Statistic_ResearchActivity_17"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '5.设计费用',
      children: <Form.Item name="Statistic_ResearchActivity_18"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '6.装备调试费用与试验费用',
      children: <Form.Item name="Statistic_ResearchActivity_19"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '7.委托外部研究开发费用',
      children: <Form.Item name="Statistic_ResearchActivity_20"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '①委托境内研究机构',
      children: <Form.Item name="Statistic_ResearchActivity_21"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '②委托境内高等学校',
      children: <Form.Item name="Statistic_ResearchActivity_22"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '③委托境内企业',
      children: <Form.Item name="Statistic_ResearchActivity_23"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '④委托境外机构',
      children: <Form.Item name="Statistic_ResearchActivity_24"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '8.其他费用',
      children: <Form.Item name="Statistic_ResearchActivity_25"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },

    {
      label: '三、研究开发资产情况',
      children: '-',
      span: 3
    },
    {
      key: '22',
      label: '当年形成用于研究开发的固定资产',
      children: <Form.Item name="Statistic_ResearchActivity_26"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '23',
      label: '其中：仪器和设备',
      children: <Form.Item name="Statistic_ResearchActivity_27"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },

    {
      label: '四、研究开发支出资金来源',
      children: '-',
      span: 3
    },
    {
      key: '24',
      label: '1.来自企业自筹',
      children: <Form.Item name="Statistic_ResearchActivity_28"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: '2.来自政府部门',
      children: <Form.Item name="Statistic_ResearchActivity_29"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '26',
      label: '3.来自银行贷款',
      children: <Form.Item name="Statistic_ResearchActivity_30"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '58',
      label: '4.来自风险投资',
      children: <Form.Item name="Statistic_ResearchActivity_31"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: '5.来自其他渠道',
      children: <Form.Item name="Statistic_ResearchActivity_32"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      label: '五、相关政策落实情况',
      children: '-',
      span: 3
    },
    {
      key: '28',
      label: '报加计扣除减免税的研究开发支出',
      children:
        <>
          <Form.Item name="Statistic_ResearchActivity_33"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_34"><Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '29',
      label: '加计扣除减免税金额',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_35"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_36"><Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1,
    },
    {
      key: '30',
      label: '高新技术企业减免税金额',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_37"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_38"><Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '31',
      label: '六、企业办研究开发机构（境内）情况',
      children: '-',
      span: 3
    },
    {
      key: '32',
      label: '期末机构数',
      children: <Form.Item name="Statistic_ResearchActivity_39"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '33',
      label: '机构研究开发人员',
      children: <Form.Item name="Statistic_ResearchActivity_40"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '34',
      label: '其中：博士毕业',
      children: <Form.Item name="Statistic_ResearchActivity_41"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '硕士毕业',
      children: <Form.Item name="Statistic_ResearchActivity_42"><Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: '机构研究开发费用',
      children: <Form.Item name="Statistic_ResearchActivity_43"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '37',
      label: '期末仪器和设备原价',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_44"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_45"><Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      label: '七、研究开发产出及相关情况',
      children: '-',
      span: 3
    },
    {
      label: '(一)专利情况',
      children: '-',
      span: 3
    },
    {
      key: '38',
      label: '当年专利申请数',
      children: <Form.Item name="Statistic_ResearchActivity_46"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '39',
      label: '其中：发明专利',
      children: <Form.Item name="Statistic_ResearchActivity_47"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '40',
      label: '期末有效发明专利数',
      children: <Form.Item name="Statistic_ResearchActivity_48"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '41',
      label: '其中：已被实施',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_49"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_50"><Input disabled={disableVar} addonBefore='数量' addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '42',
      label: '专利所有权转让及许可数',
      children: <Form.Item name="Statistic_ResearchActivity_51"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '43',
      label: '专利所有权转让及许可收入',
      children: <Form.Item name="Statistic_ResearchActivity_52"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '44',
      label: '(二)新产品情况',
      children: '-',
      span: 3
    },
    {
      key: '45',
      label: '*新产品销售收入',
      children: <Form.Item name="Statistic_ResearchActivity_53"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '46',
      label: '*其中：出口',
      children: <Form.Item name="Statistic_ResearchActivity_54"><Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '47',
      label: '(三)其他情况',
      children: '-',
      span: 3
    },
    {
      key: '48',
      label: '*期末拥有注册商标',
      children: 
        <>
          <Form.Item name="Statistic_ResearchActivity_55"><Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
          <br></br>
          <Form.Item name="Statistic_ResearchActivity_56"><Input disabled={disableVar} addonBefore='数量' addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
        </>,
      span: 1
    },
    {
      key: '49',
      label: '*发表科技论文',
      children: <Form.Item name="Statistic_ResearchActivity_57"><Input disabled={disableVar} addonAfter='篇' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '50',
      label: '形成国家或行业标准',
      children: <Form.Item name="Statistic_ResearchActivity_58"><Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '51',
      label: '八、其他相关情况',
      children: '-',
      span: 3
    },
    {
      key: '52',
      label: '(一)技术改造和技术获取情况',
      children: '-',
      span: 3
    },
    {
      key: '53',
      label: '技术改造经费支出',
      children: <Form.Item name="Statistic_ResearchActivity_59"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '54',
      label: '购买境内技术经费支出',
      children: <Form.Item name="Statistic_ResearchActivity_60"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '55',
      label: '引进境外技术经费支出',
      children: <Form.Item name="Statistic_ResearchActivity_61"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '56',
      label: '引进境外技术的消化吸收经费支出',
      children: <Form.Item name="Statistic_ResearchActivity_62"><Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      label: '(二)企业办研究开发机构（境外）情况',
      children: '-',
      span: 3
    },
    {
      key: '57',
      label: '期末企业在境外设立的研究开发机构数',
      children: <Form.Item name="Statistic_ResearchActivity_63"><Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Descriptions title="研究开发活动及相关情况信息" bordered items={items} />
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