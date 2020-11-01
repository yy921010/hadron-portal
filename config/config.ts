// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        }
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      name: 'userList',
      icon: 'user',
      path: '/user-list',
      component: './user/List',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name: 'channel',
      icon: 'PicLeftOutlined',
      path: '/channel',
      component: './Channel',
      routes:[
        {
          name: '高级详情页',
          icon: 'smile',
          path: '/channel/detail',
          component: './Channel/ChannelDetail',
      },
        {
          name: 'program',
          icon: 'smile',
          path: '/program',
          component: './Channel/Program',
        },
        {
          name: '基础详情页',
          icon: 'smile',
          path: '/program/detail',
          component: './Channel/Program/components/Detail',
        },
      ]
    },
    {
      name: '个人设置',
      icon: 'smile',
      path: '/setting',
      component: './Setting',
    },
    {
      name: '查询表格',
      icon: 'smile',
      path: '/vod',
      component: './Video',
    },
    {
      name: '空白页面',
      icon: 'smile',
      path: '/menus',
      component: './Menus',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
