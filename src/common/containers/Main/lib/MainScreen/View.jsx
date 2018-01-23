import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import Button from 'src/common/components/Button';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

const IndexMainScreen = ({ onNewClientClick, onGetClientClick, animated }) => (
  <MainScreen
    title={<FormattedHTMLMessage id="home.main.title" />}
    text={<FormattedMessage id="home.main.text" />}
    buttons={[
      <Button
        onClick={onGetClientClick}
        key="main_cta_button"
        target="_blank"
        href={url('online-client')}
        bordered
      >
        <FormattedMessage id="cta.onlineClientOld" />
      </Button>,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        withLoader
        secondary
        key="main_cta_button2"
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
    animated={animated}
  />
);

export default IndexMainScreen;
