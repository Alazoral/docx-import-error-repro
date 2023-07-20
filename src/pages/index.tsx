import { Document } from 'docx'

export default function Home() {
  return (
    <div>
      This should not be undefined: {typeof Document}
    </div>
  )
}
