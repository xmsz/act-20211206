import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import Logo from '../../components/Logo';
import { Button } from '@alifd/meet';

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Button>如果是大圆角则正确</Button>
    </View>
  );
}
