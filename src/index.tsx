import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from "resize-observer-polyfill";

interface AutoAnimateHeightProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
  ease?: 'ease' |  'ease-in' |  'ease-out' |  'ease-in-out' |  'linear' | string;
  delay?: string;
}
const AutoAnimateHeight = (props: AutoAnimateHeightProps) => {

  const {
    children,
    className,
    duration,
    ease,
    delay
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [ height, setHeight ] = useState<number | 'auto'>('auto');

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height)
      }
    });

    const targetElement = ref.current;
      if (targetElement) {
        observer.observe(targetElement);
      }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div
      className={ className }
      style={{
        height: height,
        position: 'relative',
        overflow: 'hidden',
        transitionProperty: 'height',
        transitionDuration: duration ? duration : '300ms',
        transitionDelay: delay ? delay : '0ms',
        transitionTimingFunction: ease ? ease : 'ease'
      }}
    >
      <div
        ref={ ref }
      >
        { children }
      </div>
    </div>
  )
}

export default AutoAnimateHeight;
