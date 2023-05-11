import { checkForURL } from "../js/urlChecker";
import { expect } from '@jest/globals';


describe('Testing urlChecker functionality', () => {
        test('Test should check the validity of the url', () => {
            expect(checkForURL('https://tetw.org/Travel')).toBeTruthy();
            expect(checkForURL('https://tetw.org/Climate_Change_')).toBeTruthy();
            expect(checkForURL('https://tetw.org/Science_and_Technology')).toBeTruthy();
            expect(checkForURL('')).toBeFalsy();
            expect(checkForURL('22')).toBeFalsy();
            expect(checkForURL('number)')).toBeFalsy();
          });

    })




