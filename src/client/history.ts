import { createBrowserHistory } from 'history';

interface IWindowIObj extends Window{
  __SECRETS__: {
    PUBLIC_BASE_PATH: string;
  };
}

type IWindow = IWindowIObj & Window & typeof globalThis;

export default process.env.BROWSER && createBrowserHistory(
  {basename: (window as IWindow).__SECRETS__.PUBLIC_BASE_PATH || '' }
);
