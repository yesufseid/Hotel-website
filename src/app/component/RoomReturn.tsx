'use client'

import Room from "./Room"
import { useSearchParams } from 'next/navigation'

export default function RoomReturn() {
    const searchParams = useSearchParams()
  return (
    <Room  url={searchParams.getAll("url")} text={searchParams.get('text')||"loading" }  />
  )
}
