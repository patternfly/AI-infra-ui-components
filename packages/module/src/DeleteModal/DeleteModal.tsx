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
  const [inputValue, setInputValue] = React.useState('');
  const confirmed = deleteVariant === 'extra-destructive' ? inputValue.trim() === deleteName : true;

  React.useEffect(() => {
    if (!isOpen) {
      setInputValue('');
    }
  }, [isOpen]);

  return (
    <Modal variant="small" onClose={onClose} isOpen={isOpen} data-testid={testId ?? 'delete-modal'} {...props}>
      <ModalHeader title={title} titleIconVariant={deleteVariant !== 'easily-recoverable' ? 'warning' : undefined} />
      <ModalBody>
        <Stack hasGutter>
          <StackItem>{children}</StackItem>
          {deleteVariant === 'extra-destructive' && (
            <StackItem>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem id="confirmation-message">{confirmationMessage(deleteName)}</FlexItem>
                <TextInput
                  id={textInputProps?.id ?? 'delete-modal-input'}
                  data-testid={textInputProps?.id ?? 'delete-modal-input'}
                  aria-labelledby="confirmation-message"
                  value={inputValue}
                  onChange={(_e, value) => setInputValue(value)}
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
