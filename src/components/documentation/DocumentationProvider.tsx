import { useState } from 'react';

import DocumentationContext from './DocumentationContext';

export default function DocumentationProvider({ children }): React.PropsWithChildren<{}> {
  const [ name, setName ] = useState('World');
  const value = {
    state: { name },
    actions: { setName },
  };

  return (
    <DocumentationContext.Provider value={value}>
      {children}
    </DocumentationContext.Provider>
  )
}
