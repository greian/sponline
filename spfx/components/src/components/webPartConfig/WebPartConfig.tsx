import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';

import { IWebPartConfigProps, IWebPartConfigState } from '.';

import styles from './WebPartConfig.module.scss';

export class WebPartConfig extends React.Component<IWebPartConfigProps, IWebPartConfigState>  {

  /**
 * Constructor
 */
  constructor(props: IWebPartConfigProps) {
    super(props);

    this.state = {
      width: null
    };
  }

  /**
   * componentDidMount lifecycle hook
   */
  public componentDidMount(): void {
  }

  /**
   * componentDidUpdate lifecycle hook
   * @param prevProps
   * @param prevState
   */
  public componentDidUpdate(prevProps: IWebPartConfigProps, prevState: IWebPartConfigState): void {

  }

  /**
   * shouldComponentUpdate lifecycle hook
   * @param nextProps
   * @param nextState
   */
  public shouldComponentUpdate(nextProps: IWebPartConfigProps, nextState: IWebPartConfigState): boolean {
    return this.state.width !== nextState.width;
  }

  public render(): React.ReactElement<IWebPartConfigProps> {
    return (
      <Fabric>
        { this.props.displayMode === DisplayMode.Edit &&
          <Placeholder
            iconName='Edit (TH)'
            iconText='Configure'
            description='Configure your web part'
            buttonLabel='Configure'
            onConfigure={ this.props.configure } />
        }
        { this.props.displayMode === DisplayMode.Read &&
          <Placeholder
            iconName='Edit (TH)'
            iconText='Configure'
            description='Configure your web part' />
        }
      </Fabric>);
  }
}