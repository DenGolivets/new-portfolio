import { useGlobalState } from '@/contexts/GlobalStateContext'
import React from 'react'

type Props = {}

const MenuItem = ({ title }: { title: string }) => {

  const { exitMenu } = useGlobalState();

  return (
    <a href={'/#'+title} onClick={exitMenu}>
      {title}
    </a>
  )
}

export default MenuItem