import { Card, Row, } from 'antd';
const { Meta } = Card;
import { request } from 'umi';

export default function SelectFormPage() {

  const clickFunction = (url, name) => {
    request('', {
      method: 'POST',
      data: {
        url: url,
        select_name: name
      }
    })
  }

  return (
    <>
      <div style={{height: 1200, width:1750, overflow: 'scroll'}}>
        <br></br>
        <span style={{fontSize:'24px'}}><b>点击下列卡片进入平台网站，登录后进入需要填写的表格后进行填充</b></span>
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <Row>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://www.weihai.gov.cn/col/col127216/index.html") + "&select_name=威海市政府"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{  
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/威海市人民政府.png" />}
              >
                <Meta title="威海市政府" description="https://www.weihai.gov.cn/col/col127216/index.html" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://etax.shandong.chinatax.gov.cn:8443/loginb/") + "&select_name=山东省电子税务局"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/电子税务局.png" />}
              >
                <Meta title="山东省电子税务局" description="https://etax.shandong.chinatax.gov.cn:8443/loginb/" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("http://103.239.153.109/sdjyweb/index.action") + "&select_name=山东公共就业人才服务"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/山东公共就业人才服务.png" />}
              >
                <Meta title="山东公共就业人才服务" description="http://103.239.153.109/sdjyweb/index.action" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp") + "&select_name=威海市人力资源和社会保障"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/威海市人力资源和社会保障.png" />}
              >
                <Meta title="威海市人力资源和社会保障" description="https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://whybdwwt.weihai.cn/SmPsc/#/Header/Index") + "&select_name=医保网上申报系统"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/医保局.png" />}
              >
                <Meta title="医保网上申报系统" description="https://whybdwwt.weihai.cn/SmPsc/#/Header/Index" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://sd.gsxt.gov.cn/index.html") + "&select_name=国家企业信用信息公示系统"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/国家企业信用体系公示系统.png" />}
              >
                <Meta title="国家企业信用信息公示系统" description="https://sd.gsxt.gov.cn/index.html" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://www.whzfgjj.com/whwsyyt") + "&select_name=威海住房公积金管理中心"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/威海市住房公积金管理中心.png" />}
              >
                <Meta title="威海住房公积金管理中心" description="https://www.whzfgjj.com/whwsyyt" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://pmos.sd.sgcc.com.cn/#/outNet") + "&select_name=山东电力交易平台"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/山东电力交易中心.png" />}
              >
                <Meta title="山东电力交易平台" description="https://pmos.sd.sgcc.com.cn/#/outNet" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://tyrz.chinatorch.org.cn/hjismp/a/login") + "&select_name=火炬中心业务办理平台"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/火炬中心业务办理平台.png" />}
              >
                <Meta title="火炬中心业务办理平台" description="https://tyrz.chinatorch.org.cn/hjismp/a/login" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F") + "&select_name=信息产业运行监测平台"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/信息产业运行监测平台.png" />}
              >
                <Meta title="信息产业运行监测平台" description="https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("http://whzwfw.sd.gov.cn/wh/public/index") + "&select_name=山东省政务服务网"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/山东政务服务网.png" />}
              >
                <Meta title="山东省政务服务网" description="http://whzwfw.sd.gov.cn/wh/public/index" />
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://tjylwzb.stats.gov.cn/survey/") + "&select_name=山东省统计联网直报平台"} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/山东省统计联网直报平台.png" />}
              >
                <Meta title="山东省统计联网直报平台" description="https://tjylwzb.stats.gov.cn/survey/" />
              </Card>
            </a>
          </Row>
        </div>
      </div>
    </>
  );
}