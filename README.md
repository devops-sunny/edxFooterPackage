# edxfooter

```sh
npm i edxfooter --f
```

# CODE

```sh
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig } from '@edx/frontend-platform';
import Footer from 'edxfooter';
ensureConfig(
  [
    'LMS_BASE_URL',
    'LOGOUT_URL',
    'LOGIN_URL',
    'SITE_NAME',
    'LOGO_URL',
    'ORDER_HISTORY_URL',
  ],
  'Header component'
);

const FooterComponent = () => {
  const { config } = useContext(AppContext);
  return <Footer config={config} />;
};

export default FooterComponent;
```
