import { DisplayMode } from '@microsoft/sp-core-library';

export interface IWebPartConfigProps {
  displayMode: DisplayMode;
  configure?: () => void;
}