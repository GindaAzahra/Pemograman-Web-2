import Link from 'next/link';

export default function About() {
  return (
    <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#F0F8FF', // AliceBlue
        padding: '50px', 
        textAlign: 'center', 
        fontFamily: 'Segoe UI, sans-serif' 
    }}>
      <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '20px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          display: 'inline-block',
          width: '80%',
          maxWidth: '400px'
      }}>
        <h1 style={{ color: '#4682B4' }}>Profil Pembuat</h1>
        <hr style={{ border: '1px solid #87CEFA' }} />
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
            <strong>Nama:</strong> Ginda Azahra <br/>
            <strong>NIM:</strong> 23552011281 <br/>
            <strong>Kelas:</strong> TIF RM 23B
        </p>
        <br />
        <Link href="/" style={{ 
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4682B4', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontWeight: 'bold' 
        }}>← Kembali ke Task Hub</Link>
      </div>
    </div>
  );
}