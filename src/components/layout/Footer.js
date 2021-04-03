import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import { Link } from 'react-router-dom';


const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xs">
            {/* <Logo /> */}
            {/* <div>  */}
            <Link href="mailto:shakaspridegin@gmail.com">All Rights Reserved</Link>
            {/* </div>
            <div> */}
            <Link href="mailto:shakaspridegin@gmail.com">Contact Us</Link>

            {/* </div> */}

            {/* <div className="footer-copyright">Contact Us</div> */}

            {/* <FooterSocial /> */}
          </div>
          {/* <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">All rights reserved</div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;