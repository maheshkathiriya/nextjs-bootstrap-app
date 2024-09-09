// components/BootstrapClient.tsx
'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function BootstrapClient() {
  useEffect(() => {
    // The import above ensures Bootstrap's JavaScript is loaded
    // No additional logic is needed here
  }, []);

  return null;
}
