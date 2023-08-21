import { useContext } from 'react';

import DocumentationContext from './DocumentationContext';

export default function useDocumentation() {
  return useContext(DocumentationContext);
}
