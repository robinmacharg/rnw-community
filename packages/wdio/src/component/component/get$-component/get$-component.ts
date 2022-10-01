import { default$ComponentConfig } from '../../default$-component.config';
import { getComponent } from '../get-component/get-component';

export const get$Component: typeof getComponent = selectors => getComponent(selectors, default$ComponentConfig());