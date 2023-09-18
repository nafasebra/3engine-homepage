import React from 'react'

interface PropType {
  children: React.ReactNode;
  otherClass?: String;
}

function Container(props: PropType) {
  const { children, otherClass } = props;

  return (
    <div className={`w-full max-w-[1152px] mx-auto px-4 ${otherClass || ''}`}>
      {children}
    </div>
  )
}

export default Container