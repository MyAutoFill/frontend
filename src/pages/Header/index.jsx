import { Row, Col } from 'antd';
import { history } from '@umijs/max';

export default function Header(props) {
  
  const logout = () => {
    localStorage.removeItem('currentUser');
    history.push('/auto_fill');
  }

  return (
    <header {...props}>
      <Row className="nav">
        <Col key='首页' span={5}>
          <span className="nav-title" ><a href='/auto_fill/' style={{color: 'white'}}>首页</a></span>
        </Col>
        <Col key='报表报送' span={4}>
          <span className="nav-title" ><a href='/auto_fill/input' style={{color: 'white'}}>报表报送</a></span>
        </Col>
        <Col key='企业基本信息' span={5}>
          <span className="nav-title" ><a href='/auto_fill/company_info' style={{color: 'white'}}>企业基本信息</a></span>
        </Col>
        <Col key='消息中心' span={5}>
          <span className="nav-title" ><a href='/auto_fill/message_center' style={{color: 'white'}}>消息中心</a></span>
        </Col>
        <Col key='填报客户端下载' span={5}>
          <span className="nav-title" ><a href='https://xcyb.weihai.cn/api/download_exe' style={{color: 'white'}}>填报客户端下载</a></span>
        </Col>
      </Row>
    </header>
  );
}
