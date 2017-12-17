import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrinterIcon from './printer-icon';

configure({ adapter: new Adapter() });

describe('Printer Icon component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<PrinterIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one printer svg icon', () => {
    expect(icon.find('svg.printer-icon').length).toEqual(1);
  });
});