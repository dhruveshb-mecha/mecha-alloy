import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sideElement?: React.ReactNode;
  sideElementLeft?: React.ReactNode;
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      className,
      type,
      sideElement,
      sideElementLeft,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'flex h-[64px] flex-row items-center gap-3 rounded-full bg-[#28282A] pl-2 pr-2 py-2',
          {
            'pr-5': !sideElement,
          },
          {
            'pl-5': !sideElementLeft,
          }
        )}
      >
        {sideElementLeft}
        <input
          type={type}
          className={cn(
            'flex flex-1  bg-[#28282A] m-0  placeholder:font-medium text-xl text-white  transition-colors file:border-0 file:bg-transparent focus:outline-none file:text-sm file:font-medium placeholder:text-[#919191]  disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {sideElement}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
