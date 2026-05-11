import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            height: '3rem',
            width: '3rem',
            backgroundColor: '#667eea',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            ⚡
          </div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
            Welcome Back
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Sign in to your MeetFlow AI account
          </p>
        </div>
        
        <SignIn 
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: {
                backgroundColor: '#667eea',
                color: 'white',
                fontSize: '1rem',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              },
              card: {
                boxShadow: 'none',
                border: 'none'
              },
              headerTitle: {
                display: 'none'
              },
              headerSubtitle: {
                display: 'none'
              }
            }
          }}
        />
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Don't have an account?{' '}
            <a 
              href="/sign-up" 
              style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
