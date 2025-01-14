import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '威海市企业统一报表服务平台',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    sider: {
      colorMenuBackground: 'white',
      colorTextMenu: 'black',
      colorTextMenuSelected: '#1677ff',
      colorBgMenuItemSelected: '#e6f4ff',
      colorTextMenuItemHover: '',
      colorBgMenuItemHover: '#e6f4ff',
    }
  },
  footerRender: false,
  pageTitleRender: false,
  breadcrumbRender: false,
};

export default Settings;
