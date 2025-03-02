'use client'

import { useState } from "react"


export default function Projects() {
  const [name, setName] = useState<string>('WNN')

  return <p>{name}</p>
}