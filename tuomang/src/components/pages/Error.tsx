import * as React from 'react';
import "roboto-fontface"
import './Error.css'


class Error extends React.Component {
  public render() {
    return (
      <div className="error">
        Error 404: Page not found
      </div>
    );
  }
}

export default Error;