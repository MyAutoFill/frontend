import { Footer, Question, SelectLang, AvatarDropdown, AvatarName } from '@/components';
import { LinkOutlined, UserOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser, queryCompanyInfo } from '@/services/ant-design-pro/api';
import React from 'react';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = 'https://tysfrz.isdapp.shandong.gov.cn/jis-web/login?appMark=WUEUSVJXVC&userType=2&backUrl=https://xcyb.weihai.cn/auto_fill';
const privateLoginPath = '/auto_fill/user/login'
import sensetime_logo from '../public/images/logo_svg.svg'

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  console.log('init')
  const fetchUserInfo = async () => {
    console.log('fetchUserInfo 1')
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const ticket = searchParams.get('ticket');
      console.log('fetchUserInfo 2')
      console.log(ticket)
      if (ticket == null || ticket == undefined) {
        console.log('fetchUserInfo 3 ticket is null')
        console.log(ticket)
        history.push(privateLoginPath);
        return undefined;
      }
      const msg = await queryCurrentUser(ticket);
      console.log(msg);
      return msg.obj;
    } catch (error) {
      history.push(privateLoginPath);
    }
    return undefined;
  };
  console.log(window.location.href)
  if (window.location.href === 'https://xcyb.weihai.cn/auto_fill' || window.location.href === 'https://xcyb.weihai.cn/auto_fill/') {
    return {
      fetchUserInfo,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  console.log('init2') 
  const exist = localStorage.getItem("currentUser");
  console.log('init3')
  console.log(exist)
  if (exist != undefined || exist != null) {
    console.log('init4')
    console.log(window.location.href);
    if (window.location.href.indexOf('cor') != -1 && window.location.href.indexOf('ticket') != -1) {
      console.log('init5')
      history.push('/auto_fill');
    }
    const company_info = await queryCompanyInfo(JSON.parse(exist).uuid);
    if (Object.keys(company_info).length == 0) {
      alert('请先填写企业基本信息！')
      history.push('/auto_fill/company_info');
    }
    return {
      fetchUserInfo,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  // 如果storage没存入currentUser的话
  const { location } = history;
  console.log('init7')
  console.log(location)
  const currentUser = await fetchUserInfo();
  console.log('init8')
  console.log(currentUser)
  if (currentUser != undefined || currentUser != null) {
    console.log('init9')
    console.log(currentUser)
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log('init10')
    console.log(window.location.href);
    // 只要登录成功都只跳到首页
    history.push('/auto_fill');
  }
  return {
    fetchUserInfo,
    currentUser,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    avatarProps: {
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
      icon: <UserOutlined />
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      console.log('onPageChange')
      console.log(initialState?.currentUser)
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        console.log('如果没有登录，重定向到 login')
        console.log(initialState?.currentUser)
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    ...initialState?.settings,
    logo: <img src={sensetime_logo}></img>,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
