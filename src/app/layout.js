import './styles/styles.css'
import './styles/navbar.css'
import './styles/contactmodal.css'
import './styles/scrollbar.css'
import './styles/header.css'
import './styles/funfact.css'
import './styles/services.css'
import './styles/carousel.css'
import './styles/section.css'
import './styles/brands.css'
import './styles/team.css'
import './styles/title.css'
import './styles/aboutus.css'
import './styles/funfact-ab.css'
import './styles/footer.css'
import './styles/aboutbg.css'
import './styles/aboutwho.css'
import './styles/pricelist.css'
import './styles/contacts.css'
import './styles/portfolio.css'
import './styles/teamdetail.css'

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
