import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../../Root';
import App from '../../components/App';

beforeEach(() => {
    moxios.install();//stop axios requests
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
})

afterEach(() => {
    moxios.uninstall();
})
it('can fetch comments and display them', (done) => {
    //render entire app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    )

    //find the 'fetchComment' button and click it
    wrapped.find('.fetch-comments').simulate('click')
    // Expect to find a list o comments
    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done();
        wrapped.unmount();
    });
})