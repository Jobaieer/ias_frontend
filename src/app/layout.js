import Bottom from '@/components/common/Bottom';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/global.css'

export const metadata = {
  title: "INN Administration System",
  description: "Inn Administration System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
