import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
