import 'rc-banner-anim/assets/index.css';
import { Badge, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function CompanyResearchInfo() {

    const items = [
      {
        key: '1',
        label: '一、研发人员情况',
        children: '-',
        span: 3
      },
      {
        key: '3',
        label: '研发人员合计',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '2',
        label: '其中：管理和服务人员',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '4',
        label: '其中：全职人员',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '5',
        label: '其中：本科毕业及以上人员',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '7',
        label: '其中：外聘人员',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '10',
        label: '二、研究开发费用情况',
        children: '-',
        span: 3
      },
      {
        key: '6',
        label: '研究开发费用合计',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3,
      },
      {
        key: '8',
        label: '1.人员人工费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '9',
        label: '2.直接投入费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '11',
        label: '3.折旧费用与长期待摊费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '12',
        label: '4.无形资产摊销费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '7',
        label: '5.设计费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '14',
        label: '6.装备调试费用与试验费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1
      },
      {
        key: '15',
        label: '7.委托外部研究开发费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '16',
        label: '其中：委托境内研究机构',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '17',
        label: '委托境内高等学校',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '21',
        label: '委托境内企业',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '19',
        label: '委托境外机构',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '22',
        label: '8.其他费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '18',
        label: '三、研究开发活动资产情况',
        children: '-',
        span: 3,
      },
      {
        key: '23',
        label: '当年形成用于研究开发的固定资产',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '20',
        label: '其中：仪器和设备',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '24',
        label: '四、研究开发支出资金来源情况',
        children: '-',
        span: 3,
      },
      {
        key: '13',
        label: '1.来自企业自筹',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '25',
        label: '2.来自政府部门',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '3.来自银行贷款',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '26',
        label: '4.来自风险投资',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '27',
        label: '5.来自其他渠道',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '28',
        label: '五、企业办（境内）研发机构情况',
        children: '-',
        span: 3
      },
      {
        key: '29',
        label: '期末机构数',
        children: <Input size='large' addonAfter='家' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '30',
        label: '机构研究开发人员合计',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '32',
        label: '其中：博士毕业',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '56',
        label: '其中：硕士毕业',
        children: <Input size='large' addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '33',
        label: '机构研究开发费用',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '34',
        label: '六、研究开发产出及相关情况',
        children: '-',
        span: 3
      },
      {
        key: '35',
        label: '（一）自主知识产权情况',
        children: '-',
        span: 3
      },
      {
        key: '36',
        label: '当年专利申请数',
        children: <Input size='large' addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '37',
        label: '其中：申请发明专利',
        children: <Input size='large' addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '38',
        label: '期末拥有有效专利数',
        children: <Input size='large' addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3,
      },
      {
        key: '39',
        label: '专利所有权转让及许可',
        children: <Input size='large' addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '40',
        label: '（二）新产品生产及销售情况',
        children: '-',
        span: 3
      },
      {
        key: '41',
        label: '新产品销售收入',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '42',
        label: '其中：出口',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '43',
        label: '（三）其他情况',
        children: '-',
        span: 3
      },
      {
        key: '44',
        label: '发表科技论文',
        children: <Input size='large' addonAfter='篇' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '45',
        label: '期末拥有注册商标',
        children: <Input size='large' addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      },
      {
        key: '46',
        label: '累计形成国家或行业标准',
        children: <Input size='large' addonAfter='项' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '47',
        label: '其中：当年形成国家或行业标准',
        children: <Input size='large' addonAfter='项' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '48',
        label: '八、其他相关情况',
        children: '-',
        span: 3
      },
      {
        key: '49',
        label: '（一）技术改造和技术获取情况',
        children: '-',
        span: 3
      },
      {
        key: '50',
        label: '技术改造经费支出',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '51',
        label: '购买境内技术经费支出',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5,
      },
      {
        key: '52',
        label: '引进境外技术经费支出',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '53',
        label: '引进境外技术的消化吸收经费支出',
        children: <Input size='large' addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '54',
        label: '（二）企业在境外设立分支机构情况',
        children: '-',
        span: 3,
      },
      {
        key: '55',
        label: '企业当年在境外设立分支机构数量',
        children: <Input size='large' addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 3
      }
    ];
  
    return (
      <>
        <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
          <Descriptions title="企业研究开发及相关信息" bordered items={items} />
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '330px', marginTop: '30px' }} >修改</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }} >保存</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }} >取消</Button>
          <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}>检查</Button>
        </div>
      </>
    );
  }