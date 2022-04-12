import styles from './index.less';
import 'antd/dist/antd.css';

import { Button } from 'antd';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function IndexPage() {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  return (
    <div id="home_iframe">
      <div className={fullScreen ? styles.btnFullScreen : styles.btn}>
        <Button
          type="primary"
          ghost
          onClick={() => {
            const target = document.querySelector('#home_iframe');
            if (fullScreen) {
              document?.exitFullscreen();
            } else {
              target?.requestFullscreen();
            }
            setFullScreen((prev) => !prev);
          }}
        >
          {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </Button>
      </div>
      <iframe
        allow="fullscreen"
        className={fullScreen ? styles.iframeFullScreen : styles.iframe}
        src={'https://f2e.tech/'}
      />
    </div>
  );
}
