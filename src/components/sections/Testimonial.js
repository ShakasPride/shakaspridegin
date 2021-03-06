import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "Recipes",
    paragraph: 'Channel Your Inner Mixologist'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />


          <div className={tilesClasses}>
    
          <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner recipe-image">
              <Image
                src={require('./../../assets/images/ginger.JPG')}
                alt="Features tile icon 01"
                width={400}
                height={350} 
                />
              </div>
            </div>


            <div className="tiles-item reveal-from-right hide-desktop" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                      <ul className="text-sm mb-0">
        <li>50ml Shaka's Pride Gin
        </li>
        <li>200ml Ginger Beer
        </li>
        <li>25ml Kola Tonic Cordial
        </li>
        <li>1 Drop Bitters
        </li>
        <li>1 Stick Cinnamon
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Ginger Warrior
                  </span>
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-top" data-reveal-delay="200">
              <div className="tiles-item-inner recipe-image">
                <Image
                  src={require('./../../assets/images/negroni.JPG')}
                  alt="Features tile icon 01"
                  width={400}
                  height={350} 
                />
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hide-desktop">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                      <ul className="text-sm mb-0">
        <li>25ml Shaka's Pride Gin
        </li>
        <li>25ml Sweet Vermouth
        </li>
        <li>25ml Campari
        </li>
        <li>1 Strip Orange Zest
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Classic Negroni
                  </span>
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner recipe-image">
                <Image
                  src={require('./../../assets/images/mamba.JPG')}
                  alt="Features tile icon 01"
                  width={400}
                  height={350} 
                />
              </div>
            </div>


            <div className="tiles-item reveal-from-left hide-desktop" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">

                  <ul className="text-sm mb-0">
        <li>50ml Shaka's Pride Gin
        </li>
        <li>25ml Lime Cordial
        </li>
        <li>200ml Pink Tonic
        </li>
        <li>1 Slice Cucumber
        </li>
        <li>1 Black Pepper Grind
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Cucumber Mamba
                  </span>
                </div>
              </div>
            </div>




</div>






          <div className="hide-mobile">
          <div className={tilesClasses}>



            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  {/* <p className="text-sm mb-0">
                    ??? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p> */}
                      <ul className="text-sm mb-0">
        <li>50ml Shaka's Pride Gin
        </li>
        <li>200ml Ginger Beer
        </li>
        <li>25ml Kola Tonic Cordial
        </li>
        <li>1 Drop Bitters
        </li>
        <li>1 Stick Cinnamon
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Ginger Warrior
                  </span>
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  {/* <p className="text-sm mb-0">
                    ??? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p> */}
                      <ul className="text-sm mb-0">
        <li>25ml Shaka's Pride Gin
        </li>
        <li>25ml Sweet Vermouth
        </li>
        <li>25ml Campari
        </li>
        <li>1 Strip Orange Zest
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Classic Negroni
                  </span>
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  {/* <p className="text-sm mb-0">
                    ??? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p> */}
                                            <ul className="text-sm mb-0">
        <li>50ml Shaka's Pride Gin
        </li>
        <li>25ml Lime Cordial
        </li>
        <li>200ml Pink Tonic
        </li>
        <li>1 Slice Cucumber
        </li>
        <li>1 Black Pepper Grind
        </li>
      </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Recipe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    The Cucumber Mamba
                  </span>
                </div>
              </div>
            </div>



          </div>

</div>




        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;