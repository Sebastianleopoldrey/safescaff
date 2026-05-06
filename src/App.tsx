import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Projects } from '@/pages/Projects'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { ServiceByggnadsstallningar } from '@/pages/ServiceByggnadsstallningar'
import { ServiceVaderskydd } from '@/pages/ServiceVaderskydd'
import { ServiceSkyltstall } from '@/pages/ServiceSkyltstall'
import { ServiceByggstaket } from '@/pages/ServiceByggstaket'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/byggnadsstallningar" element={<ServiceByggnadsstallningar />} />
        <Route path="/vaderskydd" element={<ServiceVaderskydd />} />
        <Route path="/skyltstall" element={<ServiceSkyltstall />} />
        <Route path="/byggstaket" element={<ServiceByggstaket />} />
        <Route path="/om-safescaff" element={<About />} />
        <Route path="/projekt" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/integritetspolicy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
