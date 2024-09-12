import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { ExtendedButton } from "@patternfly/ai-infra-ui-components";
const pageData = {
  "id": "AI-infra-ui-components",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "react",
  "tabName": null,
  "slug": "/extensions/ai-infra-ui-components/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/examples/basic.md",
  "relPath": "packages/module/patternfly-docs/content/examples/basic.md",
  "propComponents": [
    {
      "name": "ExtendedButton",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to render inside the extended button component"
        }
      ]
    }
  ],
  "examples": [
    "Example"
  ],
  "fullscreenExamples": [
    "Fullscreen example"
  ]
};
pageData.liveContext = {
  ExtendedButton
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExtendedButton } from '@patternfly/ai-infra-ui-components';\n\nexport const BasicExample: React.FunctionComponent = () => <ExtendedButton>My custom extension button</ExtendedButton>;\n","title":"Example","lang":"js","className":""}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExtendedButton } from '@patternfly/ai-infra-ui-components';\n\nexport const BasicExample: React.FunctionComponent = () => <ExtendedButton>My custom extension button</ExtendedButton>;\n","title":"Fullscreen example","lang":"js","isFullscreen":true,"className":""}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsAiInfraUiComponentsReactDocs';
Component.pageData = pageData;

export default Component;
