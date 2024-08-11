import { Descriptions, Input} from 'antd';


export default function CompanyEmployedInfo() {

    const items = [
      {
        key: '1',
        label: '从业人员期末人数',
        children: <Input size='large' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '2',
        label: '上年同期',
        children: <Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '4',
        label: '其中：女性',
        children: <Input size='large' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '3',
        label: '上年同期',
        children: <Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '5',
        label: '中层及以上管理人员',
        children: <Input size='large' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '7',
        label: '上年同期',
        children: <Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '11',
        label: '专业技术人员',
        children: <Input size='large' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '8',
        label: '上年同期',
        children: <Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '6',
        label: '从业人员平均人数',
        children: <Input size='large' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '9',
        label: '上年同期',
        children: <Input size='large' addonAfter='人' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '10',
        label: '从业人员工资总额',
        children: <Input size='large' addonAfter='元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      },
      {
        key: '12',
        label: '上年同期',
        children: <Input size='large' addonAfter='元' disabled={true} style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
        span: 1.5
      }
    ];
  
    return (
      <>
        <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
          <Descriptions title="企业参保信息" bordered items={items} />
        </div>
      </>
    );
}