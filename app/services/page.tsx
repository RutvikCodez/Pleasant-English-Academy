import UnderstandingVisaTypes from '@/components/visa/UnderstandingVisaTypes'
import VisaProcess from '@/components/visa/VisaProcess'
import VisaSection from '@/components/visa/VisaSection'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col gap-12 lg:gap-16 py-12">
        <VisaSection />
        <UnderstandingVisaTypes />
        <VisaProcess />
    </main>
  )
}

export default page