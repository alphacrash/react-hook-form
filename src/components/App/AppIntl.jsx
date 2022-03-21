import { IntlProvider } from "react-intl";
import App from "./App";

import messages_en from "../../languages/en.json";

const AppIntl = () => {
  return (
    <IntlProvider locale="en" messages={messages_en}>
      <App />
    </IntlProvider>
  );
};

export default AppIntl;
