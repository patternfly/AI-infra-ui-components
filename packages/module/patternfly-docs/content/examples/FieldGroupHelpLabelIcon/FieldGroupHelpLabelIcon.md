---
# Sidenav top-level section
# should be the same for all markdown files
section: AI-infra-ui-components
# Sidenav secondary level section
# should be the same for all markdown files
id: FieldGroupHelpLabelIcon
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['FieldGroupHelpLabelIcon']
---

import { FieldGroupHelpLabelIcon } from "@patternfly/ai-infra-ui-components";

Note: this component documents the API and enhances the [existing FieldGroupHelpLabelIcon](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/components/FieldGroupHelpLabelIcon.tsx) component from odh-dashboard. It can be imported from [@patternfly/ai-infra-ui-components](https://www.npmjs.com/package/@patternfly/AI-infra-ui-components). Alternatively, it can be used within the odh-dashboard via the import: `~/components/FieldGroupHelpLabelIcon`

This AI-infra-ui-components version of `FieldGroupHelpLabelIcon` uses internally a new PatternFly's `FormGroupLabelHelp` component instead of odh-dasboard's `DashboardPopupIconButton`.
**We recommend** replacing occurences of `<DashboardPopupIconButton icon={<OutlinedQuestionCircleIcon />} aria-label="More info"/>` with `<FormGroupLabelHelp aria-label="More info" />`.

### Example

```js file="./FieldGroupHelpLabelIconBasic.tsx"

```
