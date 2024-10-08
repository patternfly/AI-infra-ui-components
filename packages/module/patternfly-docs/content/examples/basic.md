---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: DeleteModal
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['DeleteModal']
---

import { DeleteModal } from "@patternfly/ai-infra-ui-components";

Note: this component is an upgrade of an [existing DeleteModal](https://github.com/opendatahub-io/odh-dashboard/blob/main/frontend/src/pages/projects/components/DeleteModal.tsx) in odh-dashboard 

## Basic usage

### Example

```js file="./Basic.tsx"

```

### Fullscreen example

```js file="./Basic.tsx" isFullscreen

```

### DeleteModal implementation

```ts
import React from 'react';
import {
  Alert,
  AlertProps,
  Button,
  Flex,
  FlexItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Stack,
  StackItem,
  TextInput,
  TextInputProps
} from '@patternfly/react-core';

export type DeleteModalProps = ModalProps & {
  /** Content rendered inside the modal header title. */
  title: React.ReactNode;
  /** Delete variant. Destructive and extra-destructive variants will show a warning icon and danger button. For extra-destructive variant, text input confirmation is needed. */
  deleteVariant?: 'extra-destructive' | 'destructive' | 'easily-recoverable';
  /** Text which the user should type in to confirm deletion (only for extra-destructive delete variant) */
  deleteName: string;
  /** Message describing what should the user type in to confirm deletion (only for extra-destructive delete variant) */
  confirmationMessage?: (deleteName: string) => React.ReactNode;
  /** Text of the delete button */
  deleteButtonText?: string;
  /** Text of the cancel button */
  cancelButtonText?: string;
  /** Callback on clicking the delete button */
  onDelete: () => void;
  /** Flag indicating that deletion is currently in progress */
  isDeleting?: boolean;
  /** Error indicating deletion has failed */
  error?: Error;
  /** Id of the modal for testing purposes (defaults to "delete-modal") */
  testId?: string;
  /** Additional props for confirmation text input (only for extra-destructive delete variant) */
  textInputProps?: TextInputProps;
  /** Additional props for error alert */
  errorAlertProps?: AlertProps;
  /** Modal ref */
  ref?: React.RefObject<Modal>;
};

export const DeleteModal: React.FunctionComponent<DeleteModalProps> = ({
  children,
  title,
  deleteVariant = 'extra-destructive',
  deleteName,
  confirmationMessage = (deleteName) => (
    <>
      Type <strong>{deleteName}</strong> to confirm deletion:
    </>
  ),
  deleteButtonText = 'Delete',
  cancelButtonText = 'Cancel',
  onDelete,
  isDeleting,
  error,
  testId,
  textInputProps,
  errorAlertProps,
  onClose,
  isOpen,
  ...props
}: DeleteModalProps) => {
  const [confirmationText, setConfirmationText] = React.useState('');
  const confirmed = deleteVariant === 'extra-destructive' ? confirmationText.trim() === deleteName : true;

  React.useEffect(() => {
    if (!isOpen) {
      setConfirmationText('');
    }
  }, [isOpen]);

  return (
    <Modal variant="small" onClose={onClose} isOpen={isOpen} data-testid={testId || 'delete-modal'} {...props}>
      <ModalHeader title={title} titleIconVariant={deleteVariant !== 'easily-recoverable' ? 'warning' : undefined} />
      <ModalBody>
        <Stack hasGutter>
          <StackItem>{children}</StackItem>
          {deleteVariant === 'extra-destructive' && (
            <StackItem>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>{confirmationMessage(deleteName)}</FlexItem>
                <TextInput
                  id={textInputProps?.id ?? 'delete-modal-input'}
                  data-testid={textInputProps?.id ?? 'delete-modal-input'}
                  aria-label={textInputProps?.['aria-label'] ?? 'Delete modal input'}
                  value={confirmationText}
                  onChange={(_e, value) => setConfirmationText(value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && confirmed && !isDeleting) {
                      event.preventDefault();
                      onDelete();
                    }
                  }}
                />
              </Flex>
            </StackItem>
          )}
          {error && (
            <StackItem>
              <Alert
                data-testid={errorAlertProps?.id ?? 'delete-modal-error-message-alert'}
                title={errorAlertProps?.title ?? `Error deleting ${deleteName}`}
                isInline
                variant="danger"
              >
                {error.message}
              </Alert>
            </StackItem>
          )}
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button
          variant={deleteVariant !== 'easily-recoverable' ? 'danger' : 'primary'}
          isDisabled={isDeleting || !confirmed}
          isLoading={isDeleting}
          onClick={() => onDelete()}
        >
          {deleteButtonText}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          {cancelButtonText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

```
