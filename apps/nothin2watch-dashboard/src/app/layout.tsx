'use-client';
import SideBar from '../features/SideBar';
import './global.css';

export const metadata = {
  title: 'nothin2watch',
  description: 'One stop place to track your tv progress.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
