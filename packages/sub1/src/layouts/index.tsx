import { ConfigProvider } from 'antd';
import { useMount } from 'ahooks';
import 'antd/dist/antd.variable.less';

export default function Layout(props) {
  useMount(() => {
    window.addEventListener('qiankun:changeTheme', (event: any) => {
      ConfigProvider.config({
        theme: {
          primaryColor: event.detail.color,
        },
      });
    });
  });
  return <ConfigProvider>{props.children} </ConfigProvider>;
}
