import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;
beforeEach(() =>{
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
})

afterEach(() =>{
    wrapped.unmount();
})

it('has a button and a text area', () =>{
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})
describe('the text area', () => {
    beforeEach(() => {
                //change is the real html event
        expect(wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        }))
        wrapped.update();
    })
    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('when form is submitted, text area gets empty', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})
