import { Card, Spin, Button, } from 'antd';
const { Meta } = Card;
import { useEffect, useState, useRef } from 'react';

export default function SelectFormPage() {

  const [status, setStatus] = useState('checking');
  const retryCount = useRef(0);
  const maxRetries = 8;
  const health_check_url = 'http://127.0.0.1:8088/button?select_name=&address=&button_addr=&uuid=';
  const open_url = 'autofillurl://'

  const exist = localStorage.getItem("currentUser");
  const uuid = JSON.parse(exist).uuid;
  if (uuid == undefined || uuid == null || uuid === '') {
    history.push('/auto_fill/user/login')
  }

  const launchProtocol = () => {
    try {
      window.location.href = open_url;
    } catch (e) {
      setStatus('requires_manual');
    }
  };

  const checkService = async () => {
    try {
      const response = await fetch(health_check_url);
      if (response.ok) {
        setStatus('active');
        return true;
      }
    } catch (error) {
      launchProtocol()
      curCheckService()
    }
    return false;
  };

  const curCheckService = async () => {
    try {
      const response = await fetch(health_check_url);
      if (response.ok) {
        setStatus('active');
        return true;
      }
    } catch (error) {
      if (retryCount.current < maxRetries) {
        retryCount.current += 1;
        const delay = retryCount.current <= 3 ? 
          1000 : 
          Math.min(1000 * 2 ** (retryCount.current - 3), 10000);
        setTimeout(curCheckService, delay);
      } else {
        setStatus(status => status !== 'active' ? 'inactive' : status);
      }
    }
    return false;
  }

  useEffect(() => {
    const initializeCheck = async () => {
      await checkService();
    };
    initializeCheck();
  }, []);

  const clickFunc = async (url) => {
    try {
      const response = await fetch(health_check_url);
      if (response.ok) {
        window.open(url, '_blank')
      }
    } catch (error) {
      launchProtocol()
    }
  }

  return (
    <>
      <div style={{height: 1200}}>
        <br></br>
        {status === 'active' && <>
            <span style={{fontSize:'24px'}}><b>点击下列卡片进入平台网站，登录后进入需要填写的表格后进行填充</b></span>
            <div style={{ textAlign: 'center', margin: 'auto' }}>
              <div style={{display: 'flex', flexWrap: 'wrap', overflow: 'auto', height: '700px'}}>
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://etax.shandong.chinatax.gov.cn:8443/loginb/") + "&select_name=山东省电子税务局&uuid=" + uuid)} style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://tjylwzb.stats.gov.cn/survey/") + "&select_name=山东省统计联网直报平台&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("http://103.239.153.109/sdjyweb/index.action") + "&select_name=山东公共就业人才服务&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://rsjwsfw.weihai.cn/hso/logonDialog_113.jsp") + "&select_name=威海市人力资源和社会保障&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://sd.gsxt.gov.cn/index.html") + "&select_name=国家企业信用信息公示系统&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://fuwu.most.gov.cn/") + "&select_name=科学技术部政务服务平台&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
                  <Card
                    hoverable
                    style={{
                      height: 220,
                      width: 300,
                      textAlign: 'center', 
                      margin: 'auto',
                      marginTop: '20px'
                    }}
                    cover={<img style={{height: 100}} alt="example" src="./images/科学技术部政务服务平台.png" />}
                  >
                    <Meta title="科学技术部政务服务平台" description="https://fuwu.most.gov.cn/"  style={{fontSize: '16px'}}/>
                  </Card>
                </a>
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://ucenter.miit.gov.cn/login.jsp?toUrl=http%3A%2F%2Fxxcyqiye.miit.gov.cn%2F") + "&select_name=信息产业运行监测平台&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                <a onClick={() => clickFunc("http://127.0.0.1:8088/api/data?url=" + btoa("https://rsjjyfw.weihai.cn/zhaopin/login") + "&select_name=威海市就业服务平台&uuid=" + uuid)} target='_blank' style={{ height: 220, textAlign: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
          </>}
        {status === 'checking' && (
          <div>
            <Spin spinning={status === 'checking'}>
              检测到本地报表助手未启动，正在启动中，请稍后...
            </Spin>
          </div>
        )}
        {status === 'inactive' && (
          <div>
            <p>无法自动启动程序，请点击按钮手动启动后，刷新网页</p>
            <Button type='primary' onClick={launchProtocol}>手动启动</Button>
          </div>
        )}
        {status === 'requires_manual' && (
          <div>
            <a href="https://xcyb.weihai.cn/api/download_exe">下载应用程序</a>
          </div>
        )}
      </div>
    </>
  );
}