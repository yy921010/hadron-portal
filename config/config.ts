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
        },
        {
          name: '标准列表',
          icon: 'smile',
          path: '/user-list/device',
          component: './user/Devices',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      name: '查询表格',
      icon: 'smile',
      path: '/user-list',
      component: './user/List',
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name: '高级详情页',
      icon: 'smile',
      path: '/channel/detail',
      component: './Channel/ChannelDetail',
    },
    {
      name: '频道',
      icon: 'smile',
      path: '/channel',
      component: './Channel',
    },
    {
      name: '基础详情页',
      icon: 'smile',
      path: '/program/detail',
      component: './Channel/Program/components/Detail',
    },
    {
      name: '标准列表',
      icon: 'smile',
      path: '/program',
      component: './Channel/Program',
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
