import React from 'react'
import { useParams } from 'react-router-dom'
export const UserDet = () => {
  const{userid}=useParams();
  return (
    <div>
      hello from user {userid}
    </div>
  )
}
