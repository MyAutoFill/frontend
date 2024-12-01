import { Row, Col } from 'antd';
import { history } from '@umijs/max';

export default function Header(props) {
  
  const logout = () => {
    localStorage.removeItem('currentUser');
    history.push('/auto_fill_test');
  }

  return (
    <header {...props}>
      <Row className="nav">
        <Col key='首页' span={6}>
          <span className="nav-title" ><a href='/auto_fill_test/' style={{color: 'white'}}>首页</a></span>
        </Col>
        <Col key='报表报送' span={6}>
          <span className="nav-title" ><a href='/auto_fill_test/input' style={{color: 'white'}}>报表报送</a></span>
        </Col>
        <Col key='企业基本信息' span={6}>
          <span className="nav-title" ><a href='/auto_fill_test/company_info' style={{color: 'white'}}>企业基本信息</a></span>
        </Col>
        <Col key='退出登录' span={6}>
          <span className="nav-title" ><a onClick={() => {logout()}} style={{color: 'white'}}>退出登录</a></span>
        </Col>
      </Row>
    </header>
  );
}
