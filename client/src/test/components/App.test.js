// Square/square.test.js
import React from 'react'
import App from '../../components/App'
import {shallow} from 'enzyme'

describe('App component' , () => {

    it('renders without crashing', () => {
        shallow(<App/>);
      });

      it('calls componentDidMount', () => {
        jest.spyOn(App.prototype, 'componentDidMount')
        const wrapper = shallow(<App />)
        expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
      })

})
