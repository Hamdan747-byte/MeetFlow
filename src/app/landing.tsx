"use client"

import { ArrowRight, Play, Mic, CheckSquare, BarChart3, ChevronRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50, 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e2e8f0',
        padding: '0 2rem'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          height: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              height: '2rem', 
              width: '2rem', 
              borderRadius: '0.5rem', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.875rem'
            }}>
              ⚡
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>MeetFlow AI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.875rem', fontWeight: '500' }}>Features</a>
            <a href="#testimonials" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.875rem', fontWeight: '500' }}>Testimonials</a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.875rem', fontWeight: '500' }}>Pricing</a>
            <a 
              href="/dashboard"
              style={{
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              Try Demo Dashboard
              <ArrowRight style={{ height: '1rem', width: '1rem' }} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: '8rem', 
        paddingBottom: '4rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              Transform Your Meetings with AI
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Automatically transcribe meetings, extract action items, and gain insights with our intelligent meeting assistant.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
              <a 
                href="/dashboard"
                style={{
                  padding: '0.875rem 2rem',
                  backgroundColor: 'white',
                  color: '#667eea',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none'
                }}
              >
                <Play style={{ height: '1.25rem', width: '1.25rem' }} />
                Try Live Demo
              </a>
              <a 
                href="#pricing"
                style={{
                  padding: '0.875rem 2rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                Watch Video
              </a>
            </div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
              No credit card required • 14-day free trial • Setup in 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>
              Everything You Need for Productive Meetings
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Our AI-powered platform handles everything from transcription to task management, so you can focus on what matters.
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem', 
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ 
                height: '3rem', 
                width: '3rem', 
                borderRadius: '0.75rem', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Mic style={{ height: '1.5rem', width: '1.5rem', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem' }}>
                AI-Powered Transcripts
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6' }}>
                Automatic transcription with high accuracy and speaker identification
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem', 
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ 
                height: '3rem', 
                width: '3rem', 
                borderRadius: '0.75rem', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <CheckSquare style={{ height: '1.5rem', width: '1.5rem', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem' }}>
                Smart Task Management
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6' }}>
                Automatically extract and assign action items from meetings
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem', 
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ 
                height: '3rem', 
                width: '3rem', 
                borderRadius: '0.75rem', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <BarChart3 style={{ height: '1.5rem', width: '1.5rem', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem' }}>
                Meeting Analytics
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6' }}>
                Get insights on meeting patterns, participation, and productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Ready to Transform Your Meetings?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join thousands of teams already using MeetFlow AI to make their meetings more productive.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
            <a 
              href="/dashboard"
              style={{
                padding: '0.875rem 2rem',
                backgroundColor: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
              }}
            >
              Try Demo Dashboard
              <ChevronRight style={{ height: '1.25rem', width: '1.25rem' }} />
            </a>
            <a 
              href="#pricing"
              style={{
                padding: '0.875rem 2rem',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              Start Free Trial
            </a>
          </div>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
            No credit card required • Instant setup • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', backgroundColor: '#1e293b', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            paddingTop: '2rem', 
            textAlign: 'center',
            fontSize: '0.875rem',
            opacity: 0.8
          }}>
            <p>&copy; 2024 MeetFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
