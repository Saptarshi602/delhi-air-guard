import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Delhi Smart Health Assistant',
  description: 'Website to track AQI, give health alerts and safe travel advice',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#0f172a',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          Delhi Smart Health Assistant
        </header>

        <main
          style={{
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {children}
        </main>

        <footer
          style={{
            textAlign: 'center',
            padding: '1rem',
            borderTop: '1px solid #cbd5e1',
            marginTop: '2rem',
            color: '#64748b',
          }}
        >
          &copy; Made with ❤️ by Saptarshi Goswami and Sakshi Tiwari
        </footer>
      </body>
    </html>
  );
}
