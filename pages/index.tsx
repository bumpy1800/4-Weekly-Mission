import Link from 'next/link';

const tempStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  fontSize: '27px',
};

function Main() {
  return (
    <main>
      <div style={tempStyle}>
        <Link href="/shared">shared</Link>
        <Link href="/folder">folder</Link>
      </div>
    </main>
  );
}

export default Main;
