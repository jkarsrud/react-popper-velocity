import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import { VelocityTransitionGroup } from 'velocity-react';
import './Popover.css';

function isOpenCheck(props, state) {
  const isOpenStateControllerViaProp = props.isOpen !== undefined;
  return isOpenStateControllerViaProp ? props.isOpen : state.isOpen;
}

class Popover extends Component {
  constructor(props) {
    super(props);
    this.handleTogglePopover = this.handleTogglePopover.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  handleTogglePopover() {
    this.setState({
			isOpen: !this.state.isOpen,
		});
  }

  render() {
    const isOpen = isOpenCheck(this.props, this.state);
    const { className } = this.props;

    const enter = {
      animation: 'fadeIn'
    };
    const leave = {
      animation: 'fadeOut'
    };

    return (
      <Manager>
        <Target onClick={this.handleTogglePopover}>
          {this.props.target}
        </Target>
        <VelocityTransitionGroup enter={enter} leave={leave} component="div" className="transitionGroup">
          {isOpen ? (
            <Popper
              onClick={this.handleTogglePopover}
              className={classNames(className, 'popper')}
              placement={this.props.placement}
							>
							<div className="popper__content">
								{this.props.children}
							</div>
              <Arrow className="popper__arrow" />
            </Popper>
          ) : null}
        </VelocityTransitionGroup>
      </Manager>
    );
  }
}

Popover.defaultProps = {
  target: <span>Popover placeholder</span>,
  placement: 'bottom',
};

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  target: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string, // Of the actual popper
  placement: PropTypes.string,
};

export default Popover;
