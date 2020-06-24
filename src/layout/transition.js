import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import { connect } from 'react-redux';

const timeout = 500;

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location ? location.pathname : ''}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {
            status => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default connect(
  state => ({ location: state.app.location }),
  null,
)(Transition);