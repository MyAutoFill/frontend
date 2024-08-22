import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';


export default function ResearchActivityInfo() {

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
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '3',
      label: '其中：管理和服务人员',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '4',
      label: '其中：女性',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '5',
      label: '其中：全职人员',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '6',
      label: '其中：本科毕业及以上人员',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '7',
      label: '其中：外聘人员',
      children:
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
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
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '10',
      label: '1.人员人工费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '11',
      label: '2.直接投入费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '12',
      label: '3.折旧费用与长期待摊费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '13',
      label: '4.无形资产摊销费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '14',
      label: '5.设计费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '15',
      label: '6.装备调试费用与试验费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '16',
      label: '7.委托外部研究开发费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '17',
      label: '①委托境内研究机构',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '②委托境内高等学校',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '19',
      label: '③委托境内企业',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '20',
      label: '④委托境外机构',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '21',
      label: '8.其他费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '23',
      label: '其中：仪器和设备',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '25',
      label: '2.来自政府部门',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '26',
      label: '3.来自银行贷款',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '58',
      label: '4.来自风险投资',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '27',
      label: '5.来自其他渠道',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '29',
      label: '加计扣除减免税金额',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1,
    },
    {
      key: '30',
      label: '高新技术企业减免税金额',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
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
      children: <Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '33',
      label: '机构研究开发人员',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '34',
      label: '其中：博士毕业',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '35',
      label: '硕士毕业',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '36',
      label: '机构研究开发费用',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '37',
      label: '期末仪器和设备原价',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
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
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '39',
      label: '其中：发明专利',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '40',
      label: '期末有效发明专利数',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '41',
      label: '其中：已被实施',
      children: 
        <>
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '42',
      label: '专利所有权转让及许可数',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '43',
      label: '专利所有权转让及许可收入',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '46',
      label: '*其中：出口',
      children: <Input disabled={disableVar} addonAfter='千元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
          <Input disabled={disableVar} addonBefore='代码' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} addonBefore='数量' addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1
    },
    {
      key: '49',
      label: '*发表科技论文',
      children: <Input disabled={disableVar} addonAfter='篇' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '50',
      label: '形成国家或行业标准',
      children: <Input disabled={disableVar} addonAfter='项' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '54',
      label: '购买境内技术经费支出',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '55',
      label: '引进境外技术经费支出',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '56',
      label: '引进境外技术的消化吸收经费支出',
      children: <Input disabled={disableVar} addonAfter='件' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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
      children: <Input disabled={disableVar} addonAfter='个' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
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