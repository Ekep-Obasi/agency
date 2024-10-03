'use client';

import React, { useEffect } from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <main className="grow bg-neutral-100 z-10">{children}</main>

      {/*<Footer />*/}
    </React.Fragment>
  );
}
