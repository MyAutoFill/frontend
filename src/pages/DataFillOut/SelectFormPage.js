import { Card, } from 'antd';
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

  const exist = localStorage.getItem("currentUser");
  const uuid = JSON.parse(exist).uuid;
  if (uuid == undefined || uuid == null || uuid === '') {
    history.push('/auto_fill_test/user/login')
  }

  return (
    <>
      <div style={{height: 1200}}>
        <br></br>
        <span style={{fontSize:'24px'}}><b>点击下列卡片进入平台网站，登录后进入需要填写的表格后进行填充</b></span>
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <div style={{display: 'flex', flexWrap: 'wrap', overflow: 'auto', height: '700px'}}>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://etax.shandong.chinatax.gov.cn:8443/loginb/") + "&select_name=山东省电子税务局&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="山东省电子税务局" description="https://etax.shandong.chinatax.gov.cn:8443/loginb/"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://tjylwzb.stats.gov.cn/survey/") + "&select_name=山东省统计联网直报平台&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="山东省统计联网直报平台" description="https://tjylwzb.stats.gov.cn/survey/" style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("http://103.239.153.109/sdjyweb/index.action") + "&select_name=山东公共就业人才服务&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="山东公共就业人才服务" description="http://103.239.153.109/sdjyweb/index.action"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp") + "&select_name=威海市人力资源和社会保障&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="威海市人力资源和社会保障" description="https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://sd.gsxt.gov.cn/index.html") + "&select_name=国家企业信用信息公示系统&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="国家企业信用信息公示系统" description="https://sd.gsxt.gov.cn/index.html"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://tyrz.chinatorch.org.cn/hjismp/a/login") + "&select_name=火炬中心业务办理平台&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="火炬中心业务办理平台" description="https://tyrz.chinatorch.org.cn/hjismp/a/login"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F") + "&select_name=信息产业运行监测平台&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <Meta title="信息产业运行监测平台" description="https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
            <a href={"http://127.0.0.1:8088/api/data?url=" + btoa("https://rsjjyfw.weihai.cn/zhaopin/login") + "&select_name=威海市就业服务平台&uuid=" + uuid} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
              <Card
                hoverable
                style={{
                  height: 220,
                  width: 300,
                  textAlign: 'center', 
                  margin: 'auto',
                  marginTop: '20px'
                }}
                cover={<img style={{height: 100}} alt="example" src="./images/威海市就业服务平台.png" />}
              >
                <Meta title="威海市就业服务平台" description="https://rsjjyfw.weihai.cn/zhaopin/login"  style={{fontSize: '16px'}}/>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}