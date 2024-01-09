import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_SOCIALS_PENDING, 
    REQUEST_SOCIALS_SUCCESS, 
    REQUEST_SOCIALS_FAILED
} from "./constants";

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import  { thunk }  from "redux-thunk";

const mockStore = configureMockStore([thunk])

describe('setSearchField', () => {
    it('should create an action to search socials', () => {
        const text = 'test';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('requestSocials', () => {
    it('handles requesting socials API', () => {
        const store = mockStore();
        store.dispatch(actions.requestSocials());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_SOCIALS_PENDING
        }

        expect(action[0]).toEqual(expectedAction)
    })
})