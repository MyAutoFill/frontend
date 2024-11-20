import {
  LoginFormPage,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { Tabs } from 'antd';
import { useState } from 'react';
import { history } from '@umijs/max'

type LoginType = 'phone' | 'account';

const Page = () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const loginPath = 'https://tysfrz.isdapp.shandong.gov.cn/jis-web/login?appMark=WUEUSVJXVC&userType=2&backUrl=https://xcyb.weihai.cn/auto_fill';
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        submitter={{ searchConfig: { submitText: '通过山东省统一身份认证平台登录'}}}
        backgroundImageUrl="/auto_static/images/login.png"
        containerStyle={{
          backgroundColor: 'rgba(255, 255, 255)',
        }}
        onFinish={() => { history.push(loginPath); }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div style={{height: 100}}></div>
            <a
              style={{
                color: '#3954e6',
                fontWeight: 'normal',
                fontSize: 14,
              }}
            >
              填报客户端下载
            </a>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'企业登录'} />
          <Tabs.TabPane key={'phone'} tab={'部门登录'} />
        </Tabs>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider>
      <Page />
    </ProConfigProvider>
  );
};