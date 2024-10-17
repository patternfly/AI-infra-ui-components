import React from 'react';
import { Tooltip } from '@patternfly/react-core';

export type TruncatedTextProps = React.HTMLProps<HTMLSpanElement> & {
  /** Maximum number of lines before the text gets truncated */
  maxLines: number;
  /** Content to be conditionally truncated */
  content: string;
};

export const TruncatedText: React.FunctionComponent<TruncatedTextProps> = ({
  maxLines,
  content,
  ...props
}: TruncatedTextProps) => {
  const outerElementRef = React.useRef<HTMLElement>(null);
  const textElementRef = React.useRef<HTMLElement>(null);
  const [isTruncated, setIsTruncated] = React.useState<boolean>(false);

  const updateTruncation = React.useCallback(() => {
    if (textElementRef.current && outerElementRef.current) {
      setIsTruncated(textElementRef.current.offsetHeight > outerElementRef.current.offsetHeight);
    }
  }, []);

  const truncateBody = (
    <span
      {...props}
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflowWrap: 'anywhere',
        overflow: 'hidden',
        WebkitLineClamp: maxLines,
        ...(props.style || {}),
      }}
      ref={outerElementRef}
      onMouseEnter={(e) => {
        props.onMouseEnter?.(e);
        updateTruncation();
      }}
      onFocus={(e) => {
        props.onFocus?.(e);
        updateTruncation();
      }}
    >
      <span ref={textElementRef}>{content}</span>
    </span>
  );

  return (
    <Tooltip hidden={!isTruncated ? true : undefined} content={content}>
      {truncateBody}
    </Tooltip>
  );
};

