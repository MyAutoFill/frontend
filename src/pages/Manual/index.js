import 'rc-banner-anim/assets/index.css';
import { Row, Col } from 'antd';
import ReactPlayer from 'react-player'

export default function CompanyInfo() {

  return (
    <>
      <div style={{height: '100%'}}>
        <div className="mybanner page-wrapper" style={{overflow: 'auto', width: '100%', overflowY: 'auto'}}>
          <div className="page" style={{maxWidth: 2000, height: 1250}}>
            <div style={{display: 'flex', margin: '70px auto 40px'}}>
              <div className="logo" />
              <div>
              </div>
            </div>
            <div style={{padding: 50, height: 1050}} class="mybanner-anim">
              <Row style={{height: 1000}}>
                <Col style={{height: 800, overflowX: 'auto'}}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}