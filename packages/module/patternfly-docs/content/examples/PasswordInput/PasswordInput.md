---
# Sidenav top-level section
# should be the same for all markdown files
section: AI-infra-ui-components
# Sidenav secondary level section
# should be the same for all markdown files
id: PasswordInput
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['PasswordInput, PasswordHiddenText']
---

import { PasswordInput, PasswordHiddenText } from "@patternfly/ai-infra-ui-components";

Note: these component document the API and enhance the [existing PasswordInput](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/components/PasswordInput.tsx) component and [existing PasswordHiddenText](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/components/PasswordHiddenText.tsx) components from odh-dashboard. It can be imported from [@patternfly/ai-infra-ui-components](https://www.npmjs.com/package/@patternfly/AI-infra-ui-components). Alternatively, they can be used within the odh-dashboard via the `~/components/PasswordInput` and `~/components/PasswordHiddenText` imports.

### Password input example

```js file="./PasswordInputExample.tsx"

```

### Password hidden text example

```js file="./PasswordHiddenTextExample.tsx"

```
