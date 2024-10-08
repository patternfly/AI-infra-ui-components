import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { DeleteModal } from "@patternfly/ai-infra-ui-components";
const pageData = {
  "id": "DeleteModal",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "react",
  "tabName": null,
  "slug": "/extensions/deletemodal/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/examples/basic.md",
  "relPath": "packages/module/patternfly-docs/content/examples/basic.md",
  "propComponents": [
    {
      "name": "DeleteModal",
      "description": "",
      "props": [
        {
          "name": "cancelButtonText",
          "type": "string",
          "description": "Text of the cancel button",
          "defaultValue": "'Cancel'"
        },
        {
          "name": "confirmationMessage",
          "type": "(deleteName: string) => React.ReactNode",
          "description": "Message describing what should the user type in to confirm deletion (only for extra-destructive delete variant)",
          "defaultValue": "(deleteName) => (\n  <>\n    Type <strong>{deleteName}</strong> to confirm deletion:\n  </>\n)"
        },
        {
          "name": "deleteName",
          "type": "string",
          "description": "Text which the user should type in to confirm deletion (only for extra-destructive delete variant)",
          "required": true
        },
        {
          "name": "deleteVariant",
          "type": "'extra-destructive' | 'destructive' | 'easily-recoverable'",
          "description": "Delete variant. Destructive and extra-destructive variants will show a warning icon and danger button. For extra-destructive variant, text input confirmation is needed.",
          "defaultValue": "'extra-destructive'"
        },
        {
          "name": "deleting",
          "type": "boolean",
          "description": "Flag indicating that deletion is currently in progress"
        },
        {
          "name": "error",
          "type": "Error",
          "description": "Error indicating deletion has failed"
        },
        {
          "name": "errorAlertProps",
          "type": "AlertProps",
          "description": "Additional props for error alert"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "Callback on clicking the close button",
          "required": true
        },
        {
          "name": "onDelete",
          "type": "() => void",
          "description": "Callback on clicking the delete button",
          "required": true
        },
        {
          "name": "ref",
          "type": "React.RefObject<Modal>",
          "description": "Modal ref"
        },
        {
          "name": "submitButtonLabel",
          "type": "string",
          "description": "Text of the delete button",
          "defaultValue": "'Delete'"
        },
        {
          "name": "testId",
          "type": "string",
          "description": "Id of the modal for testing purposes (defaults to \"delete-modal\")"
        },
        {
          "name": "textInputProps",
          "type": "TextInputProps",
          "description": "Additional props for confirmation text input (only for extra-destructive delete variant)"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Content rendered inside the modal header title.",
          "required": true
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
  DeleteModal
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalRecoverableOpen(true)}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalDestructiveOpen(true)}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalExtraDestructiveOpen(true)}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      {isModalRecoverableOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"easily-recoverable\"\n          onClose={() => setIsModalRecoverableOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted.\n        </DeleteModal>\n      )}\n\n      {isModalDestructiveOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"destructive\"\n          onClose={() => setIsModalDestructiveOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].\n        </DeleteModal>\n      )}\n\n      {isModalExtraDestructiveOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"extra-destructive\"\n          onClose={() => setIsModalExtraDestructiveOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].\n        </DeleteModal>\n      )}\n    </>\n  );\n};\n","title":"Example","lang":"js","className":""}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalRecoverableOpen(true)}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalDestructiveOpen(true)}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={() => setIsModalExtraDestructiveOpen(true)}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      {isModalRecoverableOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"easily-recoverable\"\n          onClose={() => setIsModalRecoverableOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted.\n        </DeleteModal>\n      )}\n\n      {isModalDestructiveOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"destructive\"\n          onClose={() => setIsModalDestructiveOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].\n        </DeleteModal>\n      )}\n\n      {isModalExtraDestructiveOpen && (\n        <DeleteModal\n          title=\"Delete [item]?\"\n          deleteName=\"item-name\"\n          onDelete={() => {}}\n          deleteVariant=\"extra-destructive\"\n          onClose={() => setIsModalExtraDestructiveOpen(false)}\n        >\n          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].\n        </DeleteModal>\n      )}\n    </>\n  );\n};\n","title":"Fullscreen example","lang":"js","isFullscreen":true,"className":""}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Note: this component is an upgrade of an `}
      <PatternflyThemeLink {...{"to":"https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/pages/projects/components/DeleteModal.tsx","className":""}}>
        {`existing DeleteModal`}
      </PatternflyThemeLink>
      {` in odh-dashboard`}
    </p>
    <AutoLinkHeader {...{"id":"basic-usage","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsDeletemodalReactDocs';
Component.pageData = pageData;

export default Component;
