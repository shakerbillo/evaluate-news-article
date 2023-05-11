import { handleSubmit } from "../js/formHandler";
import { expect } from '@jest/globals';

describe('Testing the submit functionality', ()=>{

    test('Testing the handleSubmit() function', ()=>{

        expect(handleSubmit).toBeDefined();
    })
})