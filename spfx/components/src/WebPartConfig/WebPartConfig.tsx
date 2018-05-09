import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
import { IWebPartConfigProps } from './IWebPartConfigProps';

export class WebPartConfig extends React.Component<IWebPartConfigProps, {}> {
  public render(): JSX.Element {
    return (
      <Fabric>
        { this.props.displayMode === DisplayMode.Edit &&
          <Placeholder
            iconName='Edit'
            iconText='Configure'
            description='Configure your web part'
            buttonLabel='Configure'
            onConfigure={ this.props.configure } />
        }
        { this.props.displayMode === DisplayMode.Read &&
          <Placeholder
            iconName='Edit'
            iconText='Configure'
            description='Configure your web part' />
        }
      </Fabric>
    );
  }
}



// import * as React from 'react';
// import { IWebPartConfigProps } from './IWebPartConfigProps';

// export default class HelloWorld extends React.Component<any, any> {
//   renders() {
//     return (
//       <div style={{ color: this.props.color }}>
//         Hello world!
//       </div>
//     );
//   }
// }