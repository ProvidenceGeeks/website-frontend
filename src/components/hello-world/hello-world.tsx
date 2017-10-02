import * as React from 'react';

interface HelloWorldPropsInterface {}

export default class HelloWorld extends React.Component<HelloWorldPropsInterface> {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return (
      <div className="col-xs-12 text-center">
        <h1>Hello World</h1>
      </div>
    );
  }

}