import React from 'react';
import * as actions from '../background/actions';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe ('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
})
describe('actions', () => {
  it('schould add a new tab', () => {
    const urlList = "http://www.google.com";
    const add = {
      type: "ADD",
      urlList,
      expiry: new Date().getTime(),
    }
    expect(actions.addBookmark(urlList)).toEqual(add);
  })
})
