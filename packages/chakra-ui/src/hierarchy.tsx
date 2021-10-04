import { createContext, useContext } from 'react';

import { WithChildren } from './react';

export const HierarchyValidator = createContext<symbol | undefined>(undefined);

interface RootProps extends WithChildren {
  id: symbol;
  parent?: symbol;
}

export const Root = ({ parent, id, children }: RootProps): JSX.Element => {
  const parentId = useContext(HierarchyValidator);
  if (parent !== undefined && parentId !== parent) {
    throw new Error(
      `Expected ${id.description} to be child of ${parent.description}, but found ${parentId?.description}.`
    );
  }
  return (
    <HierarchyValidator.Provider value={id}>
      {children}
    </HierarchyValidator.Provider>
  );
};
