import styles from './index.less';
import { useHistory } from 'umi';
import { Button } from 'antd';
export default function TwoPage(props) {
  const history = useHistory();
  return (
    <div>
      <h1 className={styles.title}>TwoPage</h1>
      <Button
        onClick={() => {
          history.push('/one');
        }}
      >
        跳转到one
      </Button>
      <Button type="primary">sss</Button>
    </div>
  );
}
