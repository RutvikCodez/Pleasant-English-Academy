import React from 'react'

const page = ({ params }: { params: { cource: string } }) => {
  return (
    <div>{params.cource}</div>
  )
}

export default page