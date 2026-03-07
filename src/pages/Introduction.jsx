import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const Introduction = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            {/* Navbar */}
            <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#0f172a' }}>
                    <ShieldCheck size={32} style={{ color: '#3b82f6' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em' }}>ResolveIt</span>
                </div>
                <Link to="/role-selection" style={{
                    padding: '0.5rem 1.25rem',
                    background: '#ffffff',
                    color: '#0f172a',
                    borderRadius: '2rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease'
                }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)'; }}>
                    Sign In
                </Link>
            </nav>

            {/* Hero Section */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
                <div style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#2563eb',
                    borderRadius: '2rem',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                    ✨ The New Standard for Campus Management
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    color: '#0f172a',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    maxWidth: '800px',
                    letterSpacing: '-0.025em'
                }}>
                    A smarter way to handle <br />
                    <span style={{
                        background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>campus complaints.</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: '#475569',
                    maxWidth: '600px',
                    marginBottom: '3rem',
                    lineHeight: '1.6'
                }}>
                    Streamline your institution's issue resolution process. Empower students to report problems easily and give administrators the tools to solve them efficiently.
                </p>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link to="/role-selection" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: '#2563eb',
                        color: '#ffffff',
                        borderRadius: '3rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
                        transition: 'all 0.2s ease'
                    }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#1d4ed8'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#2563eb'; }}>
                        Get Started <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Features */}
                <div style={{
                    marginTop: '5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '1000px'
                }}>
                    {[
                        { icon: Zap, title: 'Lightning Fast', desc: 'Submit complaints in seconds with an intuitive, seamless interface.' },
                        { icon: ShieldCheck, title: 'Secure & Transparent', desc: 'Track your complaint status in real-time. Full transparency from start to finish.' },
                        { icon: BarChart3, title: 'Powerful Dashboard', desc: 'Administrators get rich analytics overviews to manage and resolve issues at scale.' }
                    ].map((feature, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(12px)',
                            padding: '2rem',
                            borderRadius: '1.5rem',
                            textAlign: 'left',
                            border: '1px solid rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                        }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '1rem', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <feature.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>{feature.title}</h3>
                            <p style={{ color: '#64748b', lineHeight: '1.6' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Introduction;
