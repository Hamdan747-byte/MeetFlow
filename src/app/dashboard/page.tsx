"use client"

import { useState } from "react"
import { Calendar, Mic, CheckSquare, Users, BarChart3, Menu, X, TrendingUp, MoreVertical, UserPlus, ChevronRight, Bell, LogOut } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3, current: true },
  { name: "Meetings", href: "/meetings", icon: Calendar, current: false },
  { name: "Transcripts", href: "/transcripts", icon: Mic, current: false },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, current: false },
  { name: "Team", href: "/team", icon: Users, current: false },
  { name: "Settings", href: "/settings", icon: Users, current: false }
]

const recentMeetings = [
  { id: 1, title: "Product Strategy Meeting", time: "2 hours ago", duration: "45 min", participants: 5, type: "Zoom", recording: true },
  { id: 2, title: "Q4 Planning Session", time: "3 hours ago", duration: "1h 30min", participants: 8, type: "Google Meet", recording: true },
  { id: 3, title: "Client Review Call", time: "5 hours ago", duration: "30 min", participants: 3, type: "Zoom", recording: true }
]

const tasks = [
  { id: 1, title: "Update product roadmap", priority: "high", dueDate: "2024-01-15", assignee: "John Doe", status: "in-progress" },
  { id: 2, title: "Prepare client presentation", priority: "high", dueDate: "2024-01-12", assignee: "Jane Smith", status: "pending" },
  { id: 3, title: "Schedule follow-up calls", priority: "medium", dueDate: "2024-01-20", assignee: "Mike Johnson", status: "pending" }
]

const teamMembers = [
  { id: 1, name: "John Doe", role: "Product Manager", avatar: "JD", status: "online", meetingsAttended: 24, tasksCompleted: 18 },
  { id: 2, name: "Jane Smith", role: "Designer", avatar: "JS", status: "online", meetingsAttended: 18, tasksCompleted: 22 },
  { id: 3, name: "Mike Johnson", role: "Developer", avatar: "MJ", status: "offline", meetingsAttended: 15, tasksCompleted: 31 }
]

export default function SimpleDashboard() {
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
      <div style={{ position: 'fixed', top: 0, left: 0, width: '16rem', height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e8f0' }}>
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
      <div style={{ marginLeft: '0', paddingLeft: '0' }}>
        {/* Header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 40, display: 'flex', height: '4rem', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #e2e8f0', backgroundColor: 'white', padding: '0 1rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
          <button style={{ display: 'flex', padding: '0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setSidebarOpen(true)}>
            <Menu style={{ height: '1.5rem', width: '1.5rem', color: '#64748b' }} />
          </button>
          <div style={{ display: 'flex', flex: 1, gap: '1rem', alignSelf: 'stretch', alignItems: 'center' }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
              <h1 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Dashboard</h1>
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
            {/* Stats Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '3rem', width: '3rem', borderRadius: '0.5rem', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <Calendar style={{ height: '1.5rem', width: '1.5rem', color: '#3b82f6' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#64748b' }}>Total Meetings</p>
                      <p style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', lineHeight: '1' }}>24</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#dcfce7' }}>
                    <TrendingUp style={{ height: '1rem', width: '1rem', color: '#16a34a' }} />
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '500' }}>12%</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>+3 from last week</p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '3rem', width: '3rem', borderRadius: '0.5rem', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <Mic style={{ height: '1.5rem', width: '1.5rem', color: '#16a34a' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#64748b' }}>Transcripts</p>
                      <p style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', lineHeight: '1' }}>18</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#dcfce7' }}>
                    <TrendingUp style={{ height: '1rem', width: '1rem', color: '#16a34a' }} />
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '500' }}>8%</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>+2 from last week</p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '3rem', width: '3rem', borderRadius: '0.5rem', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <CheckSquare style={{ height: '1.5rem', width: '1.5rem', color: '#8b5cf6' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#64748b' }}>Tasks Created</p>
                      <p style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', lineHeight: '1' }}>142</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#dcfce7' }}>
                    <TrendingUp style={{ height: '1rem', width: '1rem', color: '#16a34a' }} />
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '500' }}>24%</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>+28 from last week</p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '3rem', width: '3rem', borderRadius: '0.5rem', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <Users style={{ height: '1.5rem', width: '1.5rem', color: '#f59e0b' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#64748b' }}>Team Members</p>
                      <p style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', lineHeight: '1' }}>8</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#dcfce7' }}>
                    <TrendingUp style={{ height: '1rem', width: '1rem', color: '#16a34a' }} />
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '500' }}>2</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>+2 new this month</p>
              </div>
            </div>

            {/* Recent Meetings */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Recent Meetings</h2>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                  View All
                  <ChevronRight style={{ height: '1rem', width: '1rem' }} />
                </button>
              </div>
              <div style={{ padding: '1rem' }}>
                {recentMeetings.map((meeting) => (
                  <div key={meeting.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <CheckSquare style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e293b' }}>{meeting.title}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{meeting.time} • {meeting.type} • {meeting.participants} participants • {meeting.duration}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {meeting.recording && <div style={{ height: '0.5rem', width: '0.5rem', borderRadius: '50%', backgroundColor: '#ef4444' }} />}
                      <button style={{ padding: '0.25rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                        <MoreVertical style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Tasks */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Recent Tasks</h2>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                  View All
                  <ChevronRight style={{ height: '1rem', width: '1rem' }} />
                </button>
              </div>
              <div style={{ padding: '1rem' }}>
                {tasks.map((task) => (
                  <div key={task.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', backgroundColor: task.priority === 'high' ? '#fee2e2' : task.priority === 'medium' ? '#fef3c7' : '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                      <CheckSquare style={{ height: '1.25rem', width: '1.25rem', color: task.priority === 'high' ? '#ef4444' : task.priority === 'medium' ? '#f59e0b' : '#3b82f6' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e293b' }}>{task.title}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{task.assignee} • Due {task.dueDate}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: task.status === 'completed' ? '#dcfce7' : task.status === 'in-progress' ? '#fef3c7' : '#f1f5f9', color: task.status === 'completed' ? '#16a34a' : task.status === 'in-progress' ? '#f59e0b' : '#64748b' }}>
                        {task.status === 'completed' ? 'Done' : task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                      <button style={{ padding: '0.25rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                        <MoreVertical style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Team Members</h2>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: 'white', color: '#64748b', cursor: 'pointer', fontSize: '0.875rem' }}>
                  Invite Member
                  <UserPlus style={{ height: '1rem', width: '1rem' }} />
                </button>
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {teamMembers.map((member) => (
                    <div key={member.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
                      <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', color: 'white', fontSize: '0.875rem', fontWeight: '600' }}>
                        {member.avatar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e293b' }}>{member.name}</p>
                          <div style={{ height: '0.5rem', width: '0.5rem', borderRadius: '50%', backgroundColor: member.status === 'online' ? '#16a34a' : '#64748b' }} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{member.role}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{member.meetingsAttended} meetings</span>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{member.tasksCompleted} tasks</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
