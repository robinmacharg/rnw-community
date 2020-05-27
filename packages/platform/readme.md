# Platform - React native web community
Platform specific helpers and utils for react native web.

### Platform constants
Global constants for simple identifying of the platform:
 - `isWeb`
 - 'isIOS'
 - 'isAndroid'
 - 'isMobile' - IOS or Android

### Platform styling
Simple platform-specific styling helpers:
 - `webStyles(style)`
 - `androidStyles(style)`
 - `iosStyles(style)`
 - `mobileStyles(style)`

Example usage:
```ts
import { StyleSheet } from 'react-native';
import { webStyles, androidStyles } from '@rnw-community/shared';

export const Styles = StyleSheet.create({
    root: {
        width: 200,
        ...webStyles({
            width: 400,
        }),
        ...androidStyles({
            paddingBottom: 5
        })
    }
});

```

### setTestId
Setting _testID_ for each platform can produce warning, `setTestId(...ids)` fixes it and has support for dynamically
generated components.

Example usage:
```tsx
import React, { FC } from 'react';
import { Text } from 'react-native';

import { setTestId } from '@shared/util/render.util';

interface Props {
    testID: string;
}

export const DynamicComponent: FC<Props> = ({testID = 'ParentTestID'}) => (
    <Text {...setTestId(testID, `Text`)}>Text</Text>
);
```
Which will generate `ParentTestID_Text`;