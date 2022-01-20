import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            const optionClasses = ['ColorPicker__option'];

            if (index === activeOptionIdx) {
              optionClasses.push('ColorPicker__option--active');
            }
            return (
              <button
                key={label}
                className={optionClasses.join(' ')}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
