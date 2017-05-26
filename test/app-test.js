import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import Index from '../src/index';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders one <App /> container component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(App)).to.have.length(1);
  });

  it('should have proper data types for state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('score')).to.be.an('integer');
    expect(wrapper.state('round')).to.be.an('integer');
    expect(wrapper.state('game')).to.be.an('integer');
    expect(wrapper.state('answers')).to.be.an('object');
  });

  it('should set state of Score input on each change', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('score')).to.eql(0);
    wrapper.find('incorrect').simulate('click');
    expect(wrapper.state('score')).to.eql(0);
  });
  
  it('should set state of Score input on each change', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('score')).to.eql(0);
    wrapper.find('correct').simulate('click');
    expect(wrapper.state('score')).to.eql(1);
  });

  it('should change round # to 1 when clicking on btn', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('round')).to.eql(0);
    wrapper.find('btn').simulate('click');
    expect(wrapper.state('round')).to.eql(1);
  });
  
  it('should change game # to 2 when clicking on new game button', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('game')).to.eql(1);
    wrapper.find('newGame').simulate('click');
    expect(wrapper.state('game')).to.eql(2);
  });
});

