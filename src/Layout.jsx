import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <style>{`
        :root {
          --color-primary: #E10600;
          --color-background: #000000;
          --color-text: #FFFFFF;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) var(--color-background);
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: var(--color-background);
        }
        
        *::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 4px;
        }
      `}</style>
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}