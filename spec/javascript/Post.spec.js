import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import Post from 'components/Post';

configure({ adapter: new Adapter() });

// configure mock route component with call via axios
const mock = new MockAdapter(Axios);
mock.onGet('/api/posts/1').reply(200, {
  post: {
    id: 1,
    title: 'Foo',
    body: 'bar',
  },
});

// add csrf meta tag
const meta = document.createElement('meta');
meta.setAttribute('name', 'csrf-token');
meta.content = 'fooo';
document.querySelector('head').appendChild(meta);

describe('home component', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Post match={{ params: { id: '1' } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
