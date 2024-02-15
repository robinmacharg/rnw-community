import { describe, expect, it } from '@jest/globals';

import { mockElement } from '../../element.mock';
import { Component$SelectorsMock } from '../mocks/component$-selectors.mock';

import { createComponent$ } from './create-component$';

describe('create-component$', () => {
    it('should create Component$ instance with selectors and $* selector functions', async () => {
        expect.assertions(3);

        const component = createComponent$(Component$SelectorsMock);

        await expect(component.Button$.el()).resolves.toStrictEqual(mockElement);
        await expect(component.Button$.els()).resolves.toStrictEqual([mockElement]);
        await expect(component.Button$.byIdx(1)).resolves.toStrictEqual(mockElement);
    });
});
