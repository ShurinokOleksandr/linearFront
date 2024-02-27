import { describe, expect, test } from '@jest/globals';

import { nameToInitials } from './index';

describe('Testing function nameToInitials', () =>{
    test('Get initial from 1 word', () =>{
        expect(nameToInitials('TestingName')).toBe('TE');
    });
    test('Get initial from 2 words', () =>{
        expect(nameToInitials('Testing Name')).toBe('TN');
    });
    test('Get empty string from no arguments', () =>{
        expect(nameToInitials()).toBe('');
    });
    test('Get empty string from undefined ', () =>{
        expect(nameToInitials(undefined)).toBe('');
    });
    test('Get empty string from null ', () =>{
        expect(nameToInitials(null)).toBe('');
    });
});