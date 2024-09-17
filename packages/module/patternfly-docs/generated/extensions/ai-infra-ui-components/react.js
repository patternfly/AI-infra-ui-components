import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { ExtendedButton } from "@patternfly/ai-infra-ui-components";
import { DeleteModal } from "@patternfly/ai-infra-ui-components";
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
    },
    {
      "name": "DeleteModal",
      "description": "",
      "props": [
        {
          "name": "deleteVariant",
          "type": "'extra-destructive' | 'destructive' | 'easily-recoverable'",
          "description": "Delete variant. Destructive and extra-destructive variants will show a warning icon and danger button. For extra-destructive variant, text input confirmation is needed.",
          "defaultValue": "'destructive'"
        },
        {
          "name": "error",
          "type": "Error",
          "description": "Error indicating deletion has failed"
        },
        {
          "name": "message",
          "type": "{\n  toDelete?: string;\n  resourcesToDelete?: string;\n  endNote?: string;\n}",
          "description": "Message describing what will deleted",
          "defaultValue": "{\n  resourcesToDelete: '',\n  endNote: ''\n}"
        },
        {
          "name": "onCancel",
          "type": "() => void",
          "description": "Callback on clicking the cancel button"
        },
        {
          "name": "onDelete",
          "type": "() => void",
          "description": "Callback on clicking the delete button"
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
  ExtendedButton,
  DeleteModal
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  const [isModalMultiExtraDestructiveOpen, setIsModalMultiExtraDestructiveOpen] = React.useState(false);\n\n  const [isModalModelRegistryOpen, setIsModalModelRegistryOpen] = React.useState(false);\n  const [isModalPipelineServerOpen, setIsModalPipelineServerOpen] = React.useState(false);\n\n  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalRecoverableOpen(!isModalRecoverableOpen);\n  };\n\n  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalDestructiveOpen(!isModalDestructiveOpen);\n  };\n\n  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);\n  };\n\n  const handleModalMultiExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalMultiExtraDestructiveOpen(!isModalMultiExtraDestructiveOpen);\n  };\n\n  const handleModalModelRegistryToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalModelRegistryOpen(!isModalModelRegistryOpen);\n  };\n\n  const handleModalPipelineServerToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalPipelineServerOpen(!isModalPipelineServerOpen);\n  };\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <div>Modals with one item to delete</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalRecoverableToggle}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalDestructiveToggle}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalExtraDestructiveToggle}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <div>Modals with multiple items to delete</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalMultiExtraDestructiveToggle}>\n            Show delete modal - multiple items (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <Stack hasGutter>\n        <div>Modals with custom delete messages</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalModelRegistryToggle}>\n            Show delete modal - Model registry\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalPipelineServerToggle}>\n            Show delete modal - Pipeline server\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <DeleteModal\n        deleteVariant=\"easily-recoverable\"\n        item=\"user group\"\n        itemName=\"my-team-abc\"\n        isOpen={isModalRecoverableOpen}\n        onClose={handleModalRecoverableToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"destructive\"\n        item=\"pipeline\"\n        itemName=\"pipeline_456\"\n        isOpen={isModalDestructiveOpen}\n        onClose={handleModalDestructiveToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"project\"\n        itemName=\"super-123-project\"\n        isOpen={isModalExtraDestructiveOpen}\n        onClose={handleModalExtraDestructiveToggle}\n      />\n\n      {/* Modals with multiple items to delete */}\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        items=\"projects\"\n        itemNames={['random-project-101', 'super-123-project', 'anotherOne']}\n        isOpen={isModalMultiExtraDestructiveOpen}\n        onClose={handleModalMultiExtraDestructiveToggle}\n      />\n\n      {/* Modals with custom delete messages */}\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"model registry\"\n        itemName=\"registry-123\"\n        message={{\n          toDelete: ', its default group, and any permissions associated with it',\n          endNote: 'Data located in the database connected to the registry will be unaffected.'\n        }}\n        isOpen={isModalModelRegistryOpen}\n        onClose={handleModalModelRegistryToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"pipeline server\"\n        itemName=\"abc-server\"\n        message={{\n          resourcesToDelete: ', including pipelines and runs,',\n          endNote:\n            'You will not be able to create new pipelines or pipeline runs until you create a new pipeline server.'\n        }}\n        isOpen={isModalPipelineServerOpen}\n        onClose={handleModalPipelineServerToggle}\n        error={{ message: 'Error', name: 'deletion-error' }}\n      />\n    </>\n  );\n};\n","title":"Example","lang":"js","className":""}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  const [isModalMultiExtraDestructiveOpen, setIsModalMultiExtraDestructiveOpen] = React.useState(false);\n\n  const [isModalModelRegistryOpen, setIsModalModelRegistryOpen] = React.useState(false);\n  const [isModalPipelineServerOpen, setIsModalPipelineServerOpen] = React.useState(false);\n\n  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalRecoverableOpen(!isModalRecoverableOpen);\n  };\n\n  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalDestructiveOpen(!isModalDestructiveOpen);\n  };\n\n  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);\n  };\n\n  const handleModalMultiExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalMultiExtraDestructiveOpen(!isModalMultiExtraDestructiveOpen);\n  };\n\n  const handleModalModelRegistryToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalModelRegistryOpen(!isModalModelRegistryOpen);\n  };\n\n  const handleModalPipelineServerToggle = (_event: KeyboardEvent | React.MouseEvent) => {\n    setIsModalPipelineServerOpen(!isModalPipelineServerOpen);\n  };\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <div>Modals with one item to delete</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalRecoverableToggle}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalDestructiveToggle}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalExtraDestructiveToggle}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <div>Modals with multiple items to delete</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalMultiExtraDestructiveToggle}>\n            Show delete modal - multiple items (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <Stack hasGutter>\n        <div>Modals with custom delete messages</div>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalModelRegistryToggle}>\n            Show delete modal - Model registry\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalPipelineServerToggle}>\n            Show delete modal - Pipeline server\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <DeleteModal\n        deleteVariant=\"easily-recoverable\"\n        item=\"user group\"\n        itemName=\"my-team-abc\"\n        isOpen={isModalRecoverableOpen}\n        onClose={handleModalRecoverableToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"destructive\"\n        item=\"pipeline\"\n        itemName=\"pipeline_456\"\n        isOpen={isModalDestructiveOpen}\n        onClose={handleModalDestructiveToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"project\"\n        itemName=\"super-123-project\"\n        isOpen={isModalExtraDestructiveOpen}\n        onClose={handleModalExtraDestructiveToggle}\n      />\n\n      {/* Modals with multiple items to delete */}\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        items=\"projects\"\n        itemNames={['random-project-101', 'super-123-project', 'anotherOne']}\n        isOpen={isModalMultiExtraDestructiveOpen}\n        onClose={handleModalMultiExtraDestructiveToggle}\n      />\n\n      {/* Modals with custom delete messages */}\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"model registry\"\n        itemName=\"registry-123\"\n        message={{\n          toDelete: ', its default group, and any permissions associated with it',\n          endNote: 'Data located in the database connected to the registry will be unaffected.'\n        }}\n        isOpen={isModalModelRegistryOpen}\n        onClose={handleModalModelRegistryToggle}\n      />\n      <DeleteModal\n        deleteVariant=\"extra-destructive\"\n        item=\"pipeline server\"\n        itemName=\"abc-server\"\n        message={{\n          resourcesToDelete: ', including pipelines and runs,',\n          endNote:\n            'You will not be able to create new pipelines or pipeline runs until you create a new pipeline server.'\n        }}\n        isOpen={isModalPipelineServerOpen}\n        onClose={handleModalPipelineServerToggle}\n        error={{ message: 'Error', name: 'deletion-error' }}\n      />\n    </>\n  );\n};\n","title":"Fullscreen example","lang":"js","isFullscreen":true,"className":""}}>
      
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
