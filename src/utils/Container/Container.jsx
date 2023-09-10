import React, { Component } from 'react';
import css from './Container.module.css';

class Container extends Component {
  render() {
    return (
      <section className={css.section}>
        <div className={css.container}>

          {this.props.children}
        
        </div>
      </section>
    );
  }
}

export default Container;
