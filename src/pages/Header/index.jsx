import { Row, Col } from 'antd';

export default function Header(props) {
  const header = [
    {
      title: '首页',
      url: '/',
    },
    {
      title: '使用指导',
      url: '/',
    },
    {
      title: '报表报送',
      url: '/input',
    },
    {
      title: '数据分析',
      url: '/',
    },
    {
      title: '企业基本信息',
      url: '/company_info',
    }
  ];
  const menuChild = header.map((item, i) => {
    return (
      <Col key={i.toString()} span={4}>
        <span className="nav-title"><a href={item.url}>{item.title}</a></span>
      </Col>
    );
  });
  return (
    <header {...props}>
      <Row className="nav">
        {menuChild}
      </Row>
    </header>
  );
}
