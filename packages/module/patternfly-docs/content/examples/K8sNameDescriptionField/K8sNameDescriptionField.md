---
# Sidenav top-level section
# should be the same for all markdown files
section: AI-infra-ui-components
# Sidenav secondary level section
# should be the same for all markdown files
id: K8sNameDescriptionField
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['K8sNameDescriptionField']
---

import { K8sNameDescriptionField } from "@patternfly/ai-infra-ui-components";

Note: this component documents the API and enhances the [existing K8sNameDescriptionField](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/concepts/k8s/K8sNameDescriptionField/K8sNameDescriptionField.tsx) component from odh-dashboard. It can be imported from [@patternfly/ai-infra-ui-components](https://www.npmjs.com/package/@patternfly/AI-infra-ui-components). Alternatively, it can be used within the odh-dashboard via the import: `~/concepts/k8s/K8sNameDescriptionField/K8sNameDescriptionField`

In the following examples, sample `data` and `onDataChange` props are provided. To obtain these props properly, you should use the [useK8sNameDescriptionFieldData hook](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/concepts/k8s/K8sNameDescriptionField/K8sNameDescriptionField.tsx#L23).

### Example

```js file="./K8sNameDescriptionFieldBasic.tsx"

```
