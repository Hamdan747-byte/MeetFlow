"use client"

import { useState } from "react"
import { Calendar, Mic, CheckSquare, Users, BarChart3, Menu, X, TrendingUp, MoreVertical, UserPlus, ChevronRight, Bell, LogOut, Search, Filter, Download, Eye, Clock } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3, current: false },
  { name: "Meetings", href: "/meetings", icon: Calendar, current: false },
  { name: "Transcripts", href: "/transcripts", icon: Mic, current: true },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, current: false },
  { name: "Team", href: "/team", icon: Users, current: false },
  { name: "Settings", href: "/settings", icon: Users, current: false }
]

const transcripts = [
  { id: 1, title: "Product Strategy Meeting", date: "2024-01-15", duration: "45 min", speakerCount: 5, accuracy: "98%", wordCount: 3420, status: "processed" },
  { id: 2, title: "Q4 Planning Session", date: "2024-01-15", duration: "1h 30min", speakerCount: 8, accuracy: "97%", wordCount: 6890, status: "processed" },
  { id: 3, title: "Client Review Call", date: "2024-01-14", duration: "30 min", speakerCount: 3, accuracy: "99%", wordCount: 2280, status: "processed" },
  { id: 4, title: "Team Standup", date: "2024-01-13", duration: "15 min", speakerCount: 6, accuracy: "96%", wordCount: 1140, status: "processed" },
  { id: 5, title: "Design Review", date: "2024-01-12", duration: "1h", speakerCount: 4, accuracy: "98%", wordCount: 4560, status: "processing" }
]

export default function TranscriptsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'block' }}>
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'fixed', top: 0, left: 0, width: '16rem', height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', height: '4rem', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>MeetFlow AI</h2>
              <button style={{ padding: '0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setSidebarOpen(false)}>
                <X style={{ height: '1.5rem', width: '1.5rem', color: '#64748b' }} />
              </button>
            </div>
            <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} style={{ display: 'flex', alignItems: 'center', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: item.current ? '#3b82f6' : '#64748b', backgroundColor: item.current ? '#eff6ff' : 'transparent', textDecoration: 'none', marginBottom: '0.25rem' }}>
                  <item.icon style={{ marginRight: '0.75rem', height: '1.25rem', width: '1.25rem' }} />
                  {item.name}
                </a>
              ))}
            </nav>
            <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.5rem' }}>
                <div style={{ height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: '600' }}>JD</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e293b' }}>John Doe</p>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>john@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '16rem', height: '100vh', backgroundColor: 'white', display: 'none', flexDirection: 'column', borderRight: '1px solid #e2e8f0' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', height: '4rem', alignItems: 'center', padding: '0 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>MeetFlow AI</h2>
          </div>
          <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} style={{ display: 'flex', alignItems: 'center', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: item.current ? '#3b82f6' : '#64748b', backgroundColor: item.current ? '#eff6ff' : 'transparent', textDecoration: 'none', marginBottom: '0.25rem' }}>
                <item.icon style={{ marginRight: '0.75rem', height: '1.25rem', width: '1.25rem' }} />
                {item.name}
              </a>
            ))}
          </nav>
          <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.5rem' }}>
              <div style={{ height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: '600' }}>JD</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e293b' }}>John Doe</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>john@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ marginLeft: '0', paddingLeft: '16rem' }}>
        {/* Header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 40, display: 'flex', height: '4rem', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #e2e8f0', backgroundColor: 'white', padding: '0 1rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
          <button style={{ display: 'flex', padding: '0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setSidebarOpen(true)}>
            <Menu style={{ height: '1.5rem', width: '1.5rem', color: '#64748b' }} />
          </button>
          <div style={{ display: 'flex', flex: 1, gap: '1rem', alignSelf: 'stretch', alignItems: 'center' }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
              <h1 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Transcripts</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button style={{ position: 'relative', padding: '0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <Bell style={{ height: '1.25rem', width: '1.25rem', color: '#64748b' }} />
                <span style={{ position: 'absolute', top: '0.25rem', right: '0.25rem', height: '0.5rem', width: '0.5rem', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              </button>
              <button style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LogOut style={{ height: '1rem', width: '1rem' }} />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main style={{ padding: '1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header with actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>Meeting Transcripts</h2>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>View and search through all your meeting transcripts</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                  <Search style={{ height: '1rem', width: '1rem' }} />
                  Search
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                  <Filter style={{ height: '1rem', width: '1rem' }} />
                  Filter
                </button>
              </div>
            </div>

            {/* Transcripts Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
              {transcripts.map((transcript) => (
                <div key={transcript.id} style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', lineHeight: '1.4' }}>{transcript.title}</h3>
                      <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: transcript.status === 'processed' ? '#dcfce7' : '#fef3c7', color: transcript.status === 'processed' ? '#16a34a' : '#f59e0b' }}>
                        {transcript.status === 'processed' ? 'Processed' : 'Processing'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Calendar style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{transcript.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Clock style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{transcript.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Users style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{transcript.speakerCount} speakers</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Accuracy:</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: '600', color: transcript.accuracy === '99%' ? '#16a34a' : transcript.accuracy === '98%' ? '#10b981' : '#f59e0b' }}>{transcript.accuracy}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Words:</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>{transcript.wordCount}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                      <Eye style={{ height: '1rem', width: '1rem' }} />
                      View Transcript
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                        <Download style={{ height: '1rem', width: '1rem' }} />
                        Download
                      </button>
                      <button style={{ padding: '0.25rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                        <MoreVertical style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
