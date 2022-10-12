export type { SelectorContextType } from './type/selector-context.type';
export type { SwipeDirectionType } from './type/swipe-direction.type';
export type { ElSelectorFn } from './type/el-selector-fn.type';
export type { ElsSelectorFn } from './type/els-selector-fn.type';
export type { ElsIndexSelectorFn } from './type/els-index-selector-fn.type';
export type { ComponentConfigInterface } from './type/component-config-arg.type';
export type { ComponentWithSelectors } from './type/component-with-selectors.type';
export type { ComponentInputArg } from './type/component-input-arg.type';
export type { ComponentWithSelectorsCtor } from './type/component-with-selectors-ctor.type';
export type { ComponentType } from './type/component.type';
export type { RootedComponentWithSelectors } from './type/rooted-component-with-selectors.type';
export type { RootedComponentWithSelectorsCtor } from './type/rooted-component-with-selectors-ctor.type';

export type { WebTestIDProps } from './interface/web-test-id-props.interface';
export type { TestIDProps } from './interface/test-id-props.interface';
export type { AndroidTestIDProps } from './interface/android-test-id-props.interface';

export { androidTestIDSelector } from './selector/android-testid.selector';
export { iosTestIDSelector } from './selector/ios-testid.selector';
export { mobileTestIDSelector } from './selector/mobile-testid.selector';
export { webTestIDSelector } from './selector/web-testid.selector';
export { testIDSelector } from './selector/test-id.selector';

export { setTestID } from './util/set-test-id/set-test-id';
export { getTestID } from './util/get-test-id/get-test-id';
export { setPropTestID } from './util/set-prop-test-id/set-prop-test-id';

export { isAndroidCapability } from './capability/is-android.capability';
export { isBrowserCapability } from './capability/is-browser.capability';
export { isIOSCapability } from './capability/is-ios.capability';

export { testID$ } from './command/test-id.command';
export { testID$$ } from './command/test-ids.command';
export { testID$$Index } from './command/test-id-index.command';
export { slowInputCommand } from './command/slow-input.command';
export { clearInputCommand } from './command/clear-input.command';
export { byIndex$$ } from './command/by-index.command';
export { openDeepLinkCommand } from './command/mobile/open-deep-link.command';
export { relativeClickCommand } from './command/mobile/relative-click.command';

export { Component } from './component/component';
export { getExtendedComponent } from './component/get-exteded-component/get-extended-component';
export { getComponent } from './component/get-component/get-component';
export { get$Component } from './component/get$-component/get$-component';
export { createComponent } from './component/create-component/create-component';
export { create$Component } from './component/create$-component/create$-component';

export { RootedComponent } from './rooted-component/rooted-component';
export { getExtendedRootedComponent } from './rooted-component/get-extended-rooted-component/get-extended-rooted-component';
export { getRootedComponent } from './rooted-component/get-rooted-component/get-rooted-component';
export { get$RootedComponent } from './rooted-component/get$-rooted-component/get$-rooted-component';
export { createRootedComponent } from './rooted-component/create-rooted-component/create-rooted-component';
export { create$RootedComponent } from './rooted-component/create$-rooted-component/create$-rooted-component';

export { addWdioCommands } from './add-wdio-commands';
