import React from 'react';

import { TruncatedText } from "@patternfly/ai-infra-ui-components";

export const TruncatedTextBasic: React.FunctionComponent = () => (
    <>
      <div style={{
        width: '320px',
        height: '100px',
      }}>
        <TruncatedText
          maxLines={2}
          content="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan."
        />
      </div>
      <div style={{
        width: '320px',
        height: '100px',
      }}>
        <TruncatedText
          maxLines={3}
          content="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan."
        />
      </div>
    </>
  )
