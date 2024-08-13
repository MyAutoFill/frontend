import 'rc-banner-anim/assets/index.css';
import { Button, Descriptions, Input, Checkbox, DatePicker, Space, Radio } from 'antd';


export default function CompanyRunningSumInfo() {

    const items = [
      {
        key: '1',
        label: '营业收入',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '3',
        label: '营业成本',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '2',
        label: '-- 其中：主营业务收入',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '4',
        label: '税金及附加',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '5',
        label: '销售费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '7',
        label: '管理费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '10',
        label: '研发费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '财务费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '8',
        label: '资产减值损失',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '9',
        label: '信用减值损失',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '11',
        label: '公允价值变动收益（损失以“-”号记）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '12',
        label: '投资收益（损失以“-”号记）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '7',
        label: '其他收益',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '14',
        label: '营业利润',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '15',
        label: '营业外收入',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '16',
        label: '营业外支出',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '17',
        label: '利润总额',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '21',
        label: '资产总计',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '19',
        label: '应交增值税',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '22',
        label: '--其中：流动资产合计',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '18',
        label: '所得税费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '23',
        label: '---- 其中：固定资产净值',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '20',
        label: '本年应付职工薪酬（本年贷方累计发生额）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '24',
        label: '------ 无形资产',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '13',
        label: '净敞口套期收益(损失以“-”号记)',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '25',
        label: '-- 其中：累计折旧',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '资产处置收益（损失以“-”号记）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '26',
        label: '---- 其中：本年折旧',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '27',
        label: '流动负债合计',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '28',
        label: '年末负债合计',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '29',
        label: '年末所有者权益（股东权益）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '30',
        label: '-- 其中：实收资本（股本）',
        children: <Input size='large' addonAfter='千元' style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      }
    ];
  
    return (
      <>
        <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
          <Descriptions title="企业经济状况信息" bordered items={items} />
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '330px', marginTop: '30px' }} >修改</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }} >保存</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }} >取消</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}>检查</Button>
        </div>
      </>
    );
  }