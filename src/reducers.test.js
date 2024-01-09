import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_SOCIALS_PENDING, 
    REQUEST_SOCIALS_SUCCESS, 
    REQUEST_SOCIALS_FAILED
} from "./constants";

import * as reducers from './reducers';

describe('searchApps', () => {
    const intialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchApps(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchApps(intialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField:'abc'
        })
    })
})

describe('requestApps', () => {
    const initialStateSocials = {
        socials: [],
        isPending: false,
        error: null
    }

    it('should return the initial state', () => {
        expect(reducers.requestApps(undefined, {})).toEqual(initialStateSocials)
    })

    it('should handle REQUEST_SOCIALS_PENDING action', () => {
        expect(reducers.requestApps(initialStateSocials, {
            type: REQUEST_SOCIALS_PENDING
        })).toEqual({
            socials: [],
            isPending: true,
            error: null
        })
    })

    it('should handle REQUEST_SOCIALS_SUCCESS action', () => {
        expect(reducers.requestApps(initialStateSocials, {
            type: REQUEST_SOCIALS_SUCCESS,
            payload: [{
                id: '1',
                name: 'test',
                domain: 'test',
                link: 'www.test.pl'
            }]
        })).toEqual({
            socials: [{
                id: '1',
                name: 'test',
                domain: 'test',
                link: 'www.test.pl'
            }],
            isPending: false,
            error: null
        })
    })

    it('should handle REQUEST_SOCIALS_FAILED action', () => {
        expect(reducers.requestApps(initialStateSocials, {
            type: REQUEST_SOCIALS_FAILED,
            payload: []
        })).toEqual({
            isPending: false,
            error: undefined,
            socials: []
        })
    })
})