import React from 'react';
import cx from 'classnames';

class CardPanel extends React.Component {
  render() {
    let classes = {
      'card-panel': true
    };
    let {className, children, ...props} = this.props;
    return (
      <div className={cx(classes, className)}>
        {children}
      </div>
    );
  }
}

export default CardPanel;
