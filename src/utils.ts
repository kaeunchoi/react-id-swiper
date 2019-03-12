import { isValidElement, Children, ReactElement } from 'react';
import { SelectableElement } from './types';

export const classNames = (el: SelectableElement): string => {
  if (typeof el === 'string') {
    return el
      .split('.')
      .join(' ')
      .trim();
  } else if (el instanceof HTMLElement) {
    return el.className;
  }

  return '';
};

export const validateChildren = (children: any) => {
  if (!children) {
    return false;
  }

  let isValid = true;

  if (Array.isArray(children)) {
    Children.forEach(children, (child: string | number | ReactElement) => {
      if (!isValidElement(child)) {
        isValid = false;
      }
    });
  } else {
    isValid = isValidElement(children);
  }

  return isValid;
};

export const isReactElement = (element: ReactElement): boolean =>
  isValidElement(element) &&
  (typeof element.type === 'string' || typeof element.type === 'function');