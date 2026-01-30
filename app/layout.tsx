import Providers from './providers';
import TopNavbar from './components/TopNavbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
