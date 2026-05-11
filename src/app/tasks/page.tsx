"use client"

import { useState } from "react"
import { Calendar, Mic, CheckSquare, Users, BarChart3, Menu, X, TrendingUp, MoreVertical, UserPlus, ChevronRight, Bell, LogOut, Search, Filter, Plus, Clock, CheckCircle, AlertCircle } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3, current: false },
  { name: "Meetings", href: "/meetings", icon: Calendar, current: false },
  { name: "Transcripts", href: "/transcripts", icon: Mic, current: false },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, current: true },
  { name: "Team", href: "/team", icon: Users, current: false },
  { name: "Settings", href: "/settings", icon: Users, current: false }
]

const tasks = [
  { id: 1, title: "Update product roadmap", priority: "high", dueDate: "2024-01-15", assignee: "John Doe", status: "in-progress", progress: 75 },
  { id: 2, title: "Prepare client presentation", priority: "high", dueDate: "2024-01-12", assignee: "Jane Smith", status: "pending", progress: 0 },
  { id: 3, title: "Schedule follow-up calls", priority: "medium", dueDate: "2024-01-20", assignee: "Mike Johnson", status: "pending", progress: 0 },
  { id: 4, title: "Review Q3 metrics", priority: "medium", dueDate: "2024-01-18", assignee: "Sarah Chen", status: "in-progress", progress: 30 },
  { id: 5, title: "Update documentation", priority: "low", dueDate: "2024-01-25", assignee: "Tom Wilson", status: "completed", progress: 100 },
  { id: 6, title: "Fix authentication bug", priority: "high", dueDate: "2024-01-10", assignee: "Alex Kumar", status: "completed", progress: 100 }
]

export default function TasksPage() {
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
              <h1 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>Tasks</h1>
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
                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>All Tasks</h2>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Manage and track all your action items and tasks</p>
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
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.375rem', backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer', fontSize: '0.875rem' }}>
                  <Plus style={{ height: '1rem', width: '1rem' }} />
                  Add Task
                </button>
              </div>
            </div>

            {/* Tasks Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
              {tasks.map((task) => (
                <div key={task.id} style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', lineHeight: '1.4' }}>{task.title}</h3>
                      <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: task.priority === 'high' ? '#fee2e2' : task.priority === 'medium' ? '#fef3c7' : '#f1f5f9', color: task.priority === 'high' ? '#ef4444' : task.priority === 'medium' ? '#f59e0b' : '#64748b' }}>
                        {task.priority === 'high' ? 'High' : task.priority === 'medium' ? 'Medium' : 'Low'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Calendar style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Due: {task.dueDate}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Users style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{task.assignee}</span>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Progress</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>{task.progress}%</span>
                      </div>
                      <div style={{ height: '0.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.25rem', overflow: 'hidden' }}>
                        <div style={{ height: '100%', backgroundColor: task.status === 'completed' ? '#10b981' : task.status === 'in-progress' ? '#3b82f6' : '#64748b', width: `${task.progress}%`, transition: 'width 0.3s ease' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: task.status === 'completed' ? '#dcfce7' : task.status === 'in-progress' ? '#fef3c7' : '#f1f5f9', color: task.status === 'completed' ? '#16a34a' : task.status === 'in-progress' ? '#f59e0b' : '#64748b' }}>
                        {task.status === 'completed' ? 'Completed' : task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {task.status === 'completed' && <CheckCircle style={{ height: '1rem', width: '1rem', color: '#16a34a' }} />}
                        {task.status === 'in-progress' && <AlertCircle style={{ height: '1rem', width: '1rem', color: '#f59e0b' }} />}
                        <button style={{ padding: '0.25rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                          <MoreVertical style={{ height: '1rem', width: '1rem', color: '#64748b' }} />
                        </button>
                      </div>
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
