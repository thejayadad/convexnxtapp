import Header from '@/components/header/header';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Header />0
        {children}
    </div>
  )
}

export default layout