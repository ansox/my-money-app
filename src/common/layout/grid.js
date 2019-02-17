import React, { Component } from 'react';

export default class Grid extends Component {
  toCssClasses(numbers) {
    const formats = ['xs', 'sm', 'md', 'lg'];
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    classes = cols
      .map((col, index) => index < 4 ? `col-${formats[index]}-${col}` : '')
      .join(' ')
      .trim();

    return classes;
  }


  render() {
    const gridClasses = this.toCssClasses(this.props.cols || '12');

    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}