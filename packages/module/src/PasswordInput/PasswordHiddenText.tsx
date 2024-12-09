import { Button, Flex, FlexItem, Content } from '@patternfly/react-core';
import { EyeIcon, EyeSlashIcon } from '@patternfly/react-icons';
import React from 'react';

export type PasswordHiddenTextProps = {
  /** Read only password text to display */
  password: string;
  /** Test id to pass to the view password toggle button */
  testId: string;
};

export const PasswordHiddenText: React.FunctionComponent<PasswordHiddenTextProps> = ({
  password, 
  testId 
}: PasswordHiddenTextProps) => {
  const [isHidden, setIsHidden] = React.useState(true);

  const passwordText = isHidden ? Array(password.length).fill('\u25CF').join('') : password;

  return (
    <Flex
      spaceItems={{ default: 'spaceItemsXs' }}
      spacer={{ default: 'spacerNone' }}
      alignItems={{ default: 'alignItemsCenter' }}
      flexWrap={{ default: 'nowrap' }}
    >
      <FlexItem>
        <Content>{passwordText}</Content>
      </FlexItem>
      <FlexItem>
        <Button
          variant="plain"
          onClick={() => setIsHidden(!isHidden)}
          data-testid={testId}
        >
          {isHidden ? <EyeSlashIcon /> : <EyeIcon />}
        </Button>
      </FlexItem>
    </Flex>
  );
};

export default PasswordHiddenText;