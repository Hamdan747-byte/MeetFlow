"use client"

import { useState } from "react"
import { Calendar, Mic, CheckSquare, Users, BarChart3, Menu, X, TrendingUp, MoreVertical, UserPlus, ChevronRight, Bell, LogOut, Search, Filter, Settings, Shield, Eye, EyeOff, Volume2, Smartphone, Mail } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3, current: false },
  { name: "Meetings", href: "/meetings", icon: Calendar, current: false },
  { name: "Transcripts", href: "/transcripts", icon: Mic, current: false },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, current: false },
  { name: "Team", href: "/team", icon: Users, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: true }
]

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)

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
              <h1 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Settings</h1>
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
            {/* Profile Section */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Profile Settings</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Full Name</label>
                    <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Email</label>
                    <input type="email" defaultValue="john@company.com" style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Role</label>
                    <input type="text" defaultValue="Product Manager" style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem' }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <button style={{ padding: '0.5rem 1.5rem', border: 'none', borderRadius: '0.375rem', backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer', fontSize: '0.875rem' }}>Save Changes</button>
              </div>
            </div>

            {/* Notification Settings */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Notification Settings</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Bell style={{ height: '1.25rem', width: '1.25rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>Push Notifications</span>
                    </div>
                    <button 
                      onClick={() => setNotifications(!notifications)}
                      style={{ position: 'relative', width: '3rem', height: '1.5rem', backgroundColor: notifications ? '#3b82f6' : '#d1d5db', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
                    >
                      <div style={{ position: 'absolute', top: '50%', left: '0.25rem', transform: 'translateY(-50%)', width: '2.5rem', height: '0.75rem', backgroundColor: notifications ? '#10b981' : '#64748b', borderRadius: '0.25rem', transition: 'all 0.3s ease' }} />
                      {notifications ? <Eye style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} /> : <EyeOff style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} />}
                    </button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail style={{ height: '1.25rem', width: '1.25rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>Email Alerts</span>
                    </div>
                    <button 
                      onClick={() => setEmailAlerts(!emailAlerts)}
                      style={{ position: 'relative', width: '3rem', height: '1.5rem', backgroundColor: emailAlerts ? '#3b82f6' : '#d1d5db', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
                    >
                      <div style={{ position: 'absolute', top: '50%', left: '0.25rem', transform: 'translateY(-50%)', width: '2.5rem', height: '0.75rem', backgroundColor: emailAlerts ? '#10b981' : '#64748b', borderRadius: '0.25rem', transition: 'all 0.3s ease' }} />
                      {emailAlerts ? <Eye style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} /> : <EyeOff style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Security Settings</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Shield style={{ height: '1.25rem', width: '1.25rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>Two-Factor Authentication</span>
                    </div>
                    <button 
                      onClick={() => setTwoFactor(!twoFactor)}
                      style={{ position: 'relative', width: '3rem', height: '1.5rem', backgroundColor: twoFactor ? '#3b82f6' : '#d1d5db', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
                    >
                      <div style={{ position: 'absolute', top: '50%', left: '0.25rem', transform: 'translateY(-50%)', width: '2.5rem', height: '0.75rem', backgroundColor: twoFactor ? '#10b981' : '#64748b', borderRadius: '0.25rem', transition: 'all 0.3s ease' }} />
                      {twoFactor ? <Eye style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} /> : <EyeOff style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} />}
                    </button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Smartphone style={{ height: '1.25rem', width: '1.25rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>Mobile App Access</span>
                    </div>
                    <button style={{ position: 'relative', width: '3rem', height: '1.5rem', backgroundColor: '#3b82f6', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>
                      <div style={{ position: 'absolute', top: '50%', left: '0.25rem', transform: 'translateY(-50%)', width: '2.5rem', height: '0.75rem', backgroundColor: '#10b981', borderRadius: '0.25rem', transition: 'all 0.3s ease' }} />
                      <Eye style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '1rem', width: '1rem', color: 'white' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
