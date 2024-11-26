import * as React from 'react';
import { Button, InputGroup, TextInput, TextInputProps, InputGroupItem } from '@patternfly/react-core';
import { EyeIcon, EyeSlashIcon } from '@patternfly/react-icons';

export type PasswordInputProps = TextInputProps & {
  /** Aria label to display on the view password toggle while the password is hidden */
  ariaLabelShow?: string;
  /** Aria label to display on the view password toggle while the password is visible */
  ariaLabelHide?: string;
};

export const PasswordInput: React.FunctionComponent<PasswordInputProps> = ({
  ariaLabelShow = 'Show password',
  ariaLabelHide = 'Hide password',
  ...props
}: PasswordInputProps) => {
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);

  return (
    <InputGroup>
      <InputGroupItem isFill>
        <TextInput {...props} type={isPasswordHidden ? 'password' : 'text'} />
      </InputGroupItem>
      <InputGroupItem>
        <Button
          aria-label={isPasswordHidden ? ariaLabelShow : ariaLabelHide}
          variant="control"
          onClick={() => setPasswordHidden(!isPasswordHidden)}
        >
          {isPasswordHidden ? <EyeSlashIcon /> : <EyeIcon />}
        </Button>
      </InputGroupItem>
    </InputGroup>
  );
};

export default PasswordInput;