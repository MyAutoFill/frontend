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
      <div style={{height: 1200, overflow: 'scroll'}}>
        <br></br>
        <span style={{fontSize:'24px'}}><b>点击下列卡片进入平台网站，登录后进入需要填写的表格后进行填充</b></span>
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <Row>
            <div onClick={() => clickFunction("https://www.weihai.gov.cn/col/col127216/index.html", "威海市政府")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{  
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/威海市人民政府.png" />}
              >
                <Meta title="威海市政府" description="https://www.weihai.gov.cn/col/col127216/index.html" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://etax.shandong.chinatax.gov.cn:8443/loginb/", "山东省电子税务局")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/电子税务局.png" />}
              >
                <Meta title="山东省电子税务局" description="https://etax.shandong.chinatax.gov.cn:8443/loginb/" />
              </Card>
            </div>
            <div onClick={() => clickFunction("http://103.239.153.109/sdjyweb/index.action", "山东公共就业人才服务")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/山东公共就业人才服务.png" />}
              >
                <Meta title="山东公共就业人才服务" description="http://103.239.153.109/sdjyweb/index.action" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp", "威海市人力资源和社会保障")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/威海市人力资源和社会保障.png" />}
              >
                <Meta title="威海市人力资源和社会保障" description="https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://whybdwwt.weihai.cn/SmPsc/#/Header/Index", "医保网上申报系统")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/医保局.png" />}
              >
                <Meta title="医保网上申报系统" description="https://whybdwwt.weihai.cn/SmPsc/#/Header/Index" />
              </Card>
            </div>
          </Row>
          <Row>
            <div onClick={() => clickFunction("https://www.gsxt.gov.cn/index.html", "国家企业信用信息公示系统")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/国家企业信用体系公示系统.png" />}
              >
                <Meta title="国家企业信用信息公示系统" description="https://www.gsxt.gov.cn/index.html" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://www.whzfgjj.com/whwsyyt", "威海住房公积金管理中心")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/威海市住房公积金管理中心.png" />}
              >
                <Meta title="威海住房公积金管理中心" description="https://www.whzfgjj.com/whwsyyt" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://pmos.sd.sgcc.com.cn/#/outNet", "山东电力交易平台")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
            <Card
              hoverable
              style={{
                height: 220,
                width: 300,
                textAlign: 'center', 
                margin: 'auto',
                marginTop: '20px'
              }}
              cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/山东电力交易中心.png" />}
            >
              <Meta title="山东电力交易平台" description="https://pmos.sd.sgcc.com.cn/#/outNet" />
            </Card>
            </div>
            <div onClick={() => clickFunction("https://tyrz.chinatorch.org.cn/hjismp/a/login", "火炬中心业务办理平台")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/火炬中心业务办理平台.png" />}
              >
                <Meta title="火炬中心业务办理平台" description="https://tyrz.chinatorch.org.cn/hjismp/a/login" />
              </Card>
            </div>
            <div onClick={() => clickFunction("https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F", "信息产业运行监测平台")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/信息产业运行监测平台.png" />}
              >
                <Meta title="信息产业运行监测平台" description="https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F" />
              </Card>
            </div>
          </Row>
          <Row>
            <div onClick={() => clickFunction("http://whzwfw.sd.gov.cn/wh/public/index", "山东省政务服务网")} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/山东政务服务网.png" />}
              >
                <Meta title="山东省政务服务网" description="http://whzwfw.sd.gov.cn/wh/public/index" />
              </Card>
            </div>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("http://127.0.0.1:8088/power") + "&select_name=山东省统计联网直报平台"} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="https://coscdn.htmlpage.cn/user-upload-images/7574/山东省统计联网直报平台.png" />}
              >
                <Meta title="山东省统计联网直报平台" description="http://localhost:8088/power" />
              </Card>
            </a>
          </Row>
        </div>
      </div>
    </>
  );
}