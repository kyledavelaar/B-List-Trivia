import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/containers/App.js';
import TodoContainer from '../../src/containers/TodoContainer.js';
import TodoHeader from '../../src/components/TodoHeader.js';
import TodoList from '../../src/components/TodoList.js';
import AddTodo from '../../src/components/AddTodo.js';
import Task from '../../src/components/Task.js';

describe('<App />', () => {

  it('renders one <TodoContainer /> container component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodoContainer)).to.have.length(1);
  });
});

describe('<TodoContainer />', () => {

  it('renders one <TodoHeader /> component & one <TodoList /> component', () => {
    const wrapper = mount(<TodoContainer />);
    expect(wrapper.find(TodoHeader)).to.have.length(1);
    expect(wrapper.find(TodoList)).to.have.length(1);
  });

  it('should have proper data types for state', () => {
    const wrapper = mount(<TodoContainer />);
    expect(wrapper.state('tasks')).to.be.an('array');
    expect(wrapper.state('task')).to.be.a('string');
  });

  it('should set state of taskName input on each change', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    expect(wrapper.state('task')).to.eql('z');
  });

  it('should add correct task object to tasks state upon clicking return key', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('tasks')).to.have.length(1);

    const task = wrapper.state('tasks')[0];
    expect(task.description).to.eql('z');
    expect(task.isDone).to.be.false;
    expect(task.createdAt).to.be.a('string');
  });

  it('should not add task object to tasks state upon clicking return key with no input', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: '' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('tasks')).to.have.length(0);
  });

  it('should add .strike class to task upon clicking task', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    wrapper.find('form').simulate('submit');

    wrapper.find('span').simulate('click');
    expect(wrapper.find('span').hasClass('strike')).to.be.true;
  });

  it('should not have .strike class from task upon clicking task twice', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    wrapper.find('form').simulate('submit');

    wrapper.find('span').simulate('click');
    wrapper.find('span').simulate('click');
    expect(wrapper.find('span').hasClass('strike')).to.be.false;
  });

  it('should delete task from tasks state upon clicking task', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    wrapper.find('form').simulate('submit');

    wrapper.find('button').simulate('click');
    expect(wrapper.state('tasks')).to.have.length(0);
  });

  it('should render TodoHeader with proper props', () => {
    const wrapper = mount(<TodoContainer />);
    expect(Object.keys(wrapper.find(TodoHeader).props())).to.have.length(3);
  });

  it('should render TodoList with proper props', () => {
    const wrapper = mount(<TodoContainer />);
    expect(Object.keys(wrapper.find(TodoList).props())).to.have.length(3);
  });

  it('should render AddTodo with proper props', () => {
    const wrapper = mount(<TodoContainer />);
    expect(Object.keys(wrapper.find(AddTodo).props())).to.have.length(3);
  });

  it('should render Task with proper props', () => {
    const wrapper = mount(<TodoContainer />);
    wrapper.find('input').simulate('change', { target: { value: 'z' } });
    wrapper.find('form').simulate('submit');

    expect(Object.keys(wrapper.find(Task).props())).to.have.length(3);
  });
});

describe('<TodoHeader />', () => {
  it('should be a stateless functional component', () => {
    expect(TodoHeader).to.be.a('function');
  });
});

describe('<TodoList />', () => {
  it('should be a stateless functional component', () => {
    expect(TodoList).to.be.a('function');
  });
});

describe('<AddTodo />', () => {
  it('should be a stateless functional component', () => {
    expect(AddTodo).to.be.a('function');
  });
});

describe('<Task />', () => {
  it('should be a stateless functional component', () => {
    expect(Task).to.be.a('function');
  });
});