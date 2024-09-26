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
          "name": "deleteButtonText",
          "type": "string",
          "description": "Text of the delete button",
          "defaultValue": "'Delete'"
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
          "name": "isDeleting",
          "type": "boolean",
          "description": "Flag indicating that deletion is currently in progress"
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
    "Example",
    "DeleteModal implementation"
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
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalRecoverableOpen(!isModalRecoverableOpen);\n  };\n\n  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalDestructiveOpen(!isModalDestructiveOpen);\n  };\n\n  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);\n  };\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalRecoverableToggle}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalDestructiveToggle}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalExtraDestructiveToggle}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <DeleteModal\n        title=\"Delete user group?\"\n        deleteName=\"123\"\n        onDelete={() => handleModalRecoverableToggle(undefined)}\n        deleteVariant=\"easily-recoverable\"\n        isOpen={isModalRecoverableOpen}\n        onClose={handleModalRecoverableToggle}\n      >\n        User group 123 will be deleted.\n      </DeleteModal>\n      <DeleteModal\n        title=\"Delete experiment?\"\n        deleteName=\"cool-exp\"\n        onDelete={() => handleModalDestructiveToggle(undefined)}\n        deleteVariant=\"destructive\"\n        isOpen={isModalDestructiveOpen}\n        onClose={handleModalDestructiveToggle}\n      >\n        Experiment cool-exp will be deleted.\n      </DeleteModal>\n      <DeleteModal\n        title=\"Delete project?\"\n        deleteName=\"RedHatAwesome\"\n        onDelete={() => handleModalExtraDestructiveToggle(undefined)}\n        deleteVariant=\"extra-destructive\"\n        isOpen={isModalExtraDestructiveOpen}\n        onClose={handleModalExtraDestructiveToggle}\n      >\n        Project RedHatAwesome will be deleted.\n      </DeleteModal>\n    </>\n  );\n};\n","title":"Example","lang":"js","className":""}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Stack, StackItem } from '@patternfly/react-core';\nimport { DeleteModal } from '@patternfly/ai-infra-ui-components';\n\nexport const DeleteModalBasic: React.FunctionComponent = () => {\n  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);\n  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);\n  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);\n\n  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalRecoverableOpen(!isModalRecoverableOpen);\n  };\n\n  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalDestructiveOpen(!isModalDestructiveOpen);\n  };\n\n  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {\n    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);\n  };\n\n  return (\n    <>\n      <Stack hasGutter style={{ marginBottom: '2rem' }}>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalRecoverableToggle}>\n            Show delete modal (Easily recoverable)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalDestructiveToggle}>\n            Show delete modal (Destructive)\n          </Button>\n        </StackItem>\n        <StackItem>\n          <Button variant=\"primary\" onClick={handleModalExtraDestructiveToggle}>\n            Show delete modal (Extra destructive)\n          </Button>\n        </StackItem>\n      </Stack>\n\n      <DeleteModal\n        title=\"Delete user group?\"\n        deleteName=\"123\"\n        onDelete={() => handleModalRecoverableToggle(undefined)}\n        deleteVariant=\"easily-recoverable\"\n        isOpen={isModalRecoverableOpen}\n        onClose={handleModalRecoverableToggle}\n      >\n        User group 123 will be deleted.\n      </DeleteModal>\n      <DeleteModal\n        title=\"Delete experiment?\"\n        deleteName=\"cool-exp\"\n        onDelete={() => handleModalDestructiveToggle(undefined)}\n        deleteVariant=\"destructive\"\n        isOpen={isModalDestructiveOpen}\n        onClose={handleModalDestructiveToggle}\n      >\n        Experiment cool-exp will be deleted.\n      </DeleteModal>\n      <DeleteModal\n        title=\"Delete project?\"\n        deleteName=\"RedHatAwesome\"\n        onDelete={() => handleModalExtraDestructiveToggle(undefined)}\n        deleteVariant=\"extra-destructive\"\n        isOpen={isModalExtraDestructiveOpen}\n        onClose={handleModalExtraDestructiveToggle}\n      >\n        Project RedHatAwesome will be deleted.\n      </DeleteModal>\n    </>\n  );\n};\n","title":"Fullscreen example","lang":"js","isFullscreen":true,"className":""}}>
      
    </Example>,
  'DeleteModal implementation': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  Button,\n  Flex,\n  FlexItem,\n  Modal,\n  ModalBody,\n  ModalFooter,\n  ModalHeader,\n  ModalProps,\n  Stack,\n  StackItem,\n  TextInput,\n  TextInputProps\n} from '@patternfly/react-core';\n\nexport type DeleteModalProps = ModalProps & {\n  /** Content rendered inside the modal header title. */\n  title: React.ReactNode;\n  /** Delete variant. Destructive and extra-destructive variants will show a warning icon and danger button. For extra-destructive variant, text input confirmation is needed. */\n  deleteVariant?: 'extra-destructive' | 'destructive' | 'easily-recoverable';\n  /** Text which the user should type in to confirm deletion (only for extra-destructive delete variant) */\n  deleteName: string;\n  /** Message describing what should the user type in to confirm deletion (only for extra-destructive delete variant) */\n  confirmationMessage?: (deleteName: string) => React.ReactNode;\n  /** Text of the delete button */\n  deleteButtonText?: string;\n  /** Text of the cancel button */\n  cancelButtonText?: string;\n  /** Callback on clicking the delete button */\n  onDelete: () => void;\n  /** Flag indicating that deletion is currently in progress */\n  isDeleting?: boolean;\n  /** Error indicating deletion has failed */\n  error?: Error;\n  /** Id of the modal for testing purposes (defaults to \"delete-modal\") */\n  testId?: string;\n  /** Additional props for confirmation text input (only for extra-destructive delete variant) */\n  textInputProps?: TextInputProps;\n  /** Additional props for error alert */\n  errorAlertProps?: AlertProps;\n  /** Modal ref */\n  ref?: React.RefObject<Modal>;\n};\n\nexport const DeleteModal: React.FunctionComponent<DeleteModalProps> = ({\n  children,\n  title,\n  deleteVariant = 'extra-destructive',\n  deleteName,\n  confirmationMessage = (deleteName) => (\n    <>\n      Type <strong>{deleteName}</strong> to confirm deletion:\n    </>\n  ),\n  deleteButtonText = 'Delete',\n  cancelButtonText = 'Cancel',\n  onDelete,\n  isDeleting,\n  error,\n  testId,\n  textInputProps,\n  errorAlertProps,\n  onClose,\n  isOpen,\n  ...props\n}: DeleteModalProps) => {\n  const [confirmationText, setConfirmationText] = React.useState('');\n  const confirmed = deleteVariant === 'extra-destructive' ? confirmationText.trim() === deleteName : true;\n\n  React.useEffect(() => {\n    if (!isOpen) {\n      setConfirmationText('');\n    }\n  }, [isOpen]);\n\n  return (\n    <Modal variant=\"small\" onClose={onClose} isOpen={isOpen} data-testid={testId || 'delete-modal'} {...props}>\n      <ModalHeader title={title} titleIconVariant={deleteVariant !== 'easily-recoverable' ? 'warning' : undefined} />\n      <ModalBody>\n        <Stack hasGutter>\n          <StackItem>{children}</StackItem>\n          {deleteVariant === 'extra-destructive' && (\n            <StackItem>\n              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsSm' }}>\n                <FlexItem>{confirmationMessage(deleteName)}</FlexItem>\n                <TextInput\n                  id={textInputProps?.id ?? 'delete-modal-input'}\n                  data-testid={textInputProps?.id ?? 'delete-modal-input'}\n                  aria-label={textInputProps?.['aria-label'] ?? 'Delete modal input'}\n                  value={confirmationText}\n                  onChange={(_e, value) => setConfirmationText(value)}\n                  onKeyDown={(event) => {\n                    if (event.key === 'Enter' && confirmed && !isDeleting) {\n                      event.preventDefault();\n                      onDelete();\n                    }\n                  }}\n                />\n              </Flex>\n            </StackItem>\n          )}\n          {error && (\n            <StackItem>\n              <Alert\n                data-testid={errorAlertProps?.id ?? 'delete-modal-error-message-alert'}\n                title={errorAlertProps?.title ?? `Error deleting ${deleteName}`}\n                isInline\n                variant=\"danger\"\n              >\n                {error.message}\n              </Alert>\n            </StackItem>\n          )}\n        </Stack>\n      </ModalBody>\n      <ModalFooter>\n        <Button\n          variant={deleteVariant !== 'easily-recoverable' ? 'danger' : 'primary'}\n          isDisabled={isDeleting || !confirmed}\n          isLoading={isDeleting}\n          onClick={() => onDelete()}\n        >\n          {deleteButtonText}\n        </Button>\n        <Button variant=\"secondary\" onClick={onClose}>\n          {cancelButtonText}\n        </Button>\n      </ModalFooter>\n    </Modal>\n  );\n};","title":"DeleteModal implementation","lang":"ts","className":""}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
    {React.createElement(pageData.examples["DeleteModal implementation"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsAiInfraUiComponentsReactDocs';
Component.pageData = pageData;

export default Component;
