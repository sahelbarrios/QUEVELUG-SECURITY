"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function MonitoringPage() {
    const [activeTab, setActiveTab] = useState('all');

    const incidents = [
        { id: 1, type: 'Vulnerabilidad Detectada', zone: 'Sector Norte', time: '14:20', priority: 'high' },
        { id: 2, type: 'Patrulla Completada', zone: 'Bodega Central', time: '14:15', priority: 'low' },
        { id: 3, type: 'Acceso No Autorizado', zone: 'Puerta 4', time: '13:58', priority: 'critical' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-deep)' }}>
            {/* Top Header / KPI Bar */}
            <header style={{
                height: '70px',
                borderBottom: '1px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem',
                justifyContent: 'space-between',
                background: 'rgba(10,10,10,0.95)',
                zIndex: 10
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <h2 className="font-display" style={{ fontSize: '1.2rem', letterSpacing: '0.1em', color: 'var(--gold-matte)', margin: 0 }}>
                        CONTROL TOWER
                    </h2>
                    <div style={{ width: '1px', height: '30px', backgroundColor: '#333' }}></div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div className="kpi">
                            <span className="tag" style={{ margin: 0, fontSize: '0.6rem' }}>Agentes Online</span>
                            <div style={{ color: 'var(--text-high)', fontSize: '1.1rem' }}>24 / 30</div>
                        </div>
                        <div className="kpi">
                            <span className="tag" style={{ margin: 0, fontSize: '0.6rem' }}>Incidencias Hoy</span>
                            <div style={{ color: '#ff4d4d', fontSize: '1.1rem' }}>03</div>
                        </div>
                        <div className="kpi">
                            <span className="tag" style={{ margin: 0, fontSize: '0.6rem' }}>Cobertura</span>
                            <div style={{ color: 'var(--gold-matte)', fontSize: '1.1rem' }}>98.2%</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/" className="font-tactical" style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>SALIR</Link>
                    <div style={{ width: '35px', height: '35px', borderRadius: '4px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.7rem' }}>AD</span>
                    </div>
                </div>
            </header>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Left Sidebar - Navigation/Tactical Info */}
                <aside style={{
                    width: '300px',
                    borderRight: '1px solid #1a1a1a',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(10,10,10,0.8)',
                    padding: '1.5rem'
                }}>
                    <span className="tag">Zonas de Vigilancia</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                        {['Zona Alpha', 'Zona Bravo', 'Zona Delta'].map(zone => (
                            <div key={zone} style={{
                                padding: '0.75rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid #1a1a1a',
                                fontSize: '0.8rem',
                                color: 'var(--text-mid)',
                                cursor: 'pointer'
                            }}>
                                {zone}
                            </div>
                        ))}
                    </div>

                    <span className="tag">Feed Táctico</span>
                    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {incidents.map(inc => (
                            <div key={inc.id} style={{
                                padding: '1rem',
                                borderLeft: `2px solid ${inc.priority === 'critical' ? '#ff4d4d' : inc.priority === 'high' ? 'var(--gold-matte)' : '#333'}`,
                                background: 'rgba(255,255,255,0.02)',
                                fontSize: '0.75rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-high)', fontWeight: 500 }}>{inc.type}</span>
                                    <span style={{ color: 'var(--text-low)' }}>{inc.time}</span>
                                </div>
                                <div style={{ color: 'var(--text-low)', fontSize: '0.7rem' }}>Ubicación: {inc.zone}</div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Center - Map View */}
                <main style={{ flex: 1, position: 'relative', background: '#050505' }}>
                    {/* Map Placeholder */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'radial-gradient(circle, #111 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.5
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--gold-matte)', opacity: 0.2 }}>[ MAPA TÁCTICO ]</div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-low)', marginTop: '1rem' }}>Inicializando geolocalización de activos...</p>
                        </div>
                    </div>

                    {/* Floating HUD Elements */}
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        zIndex: 5,
                        padding: '1rem',
                        background: 'rgba(3,3,3,0.8)',
                        border: '1px solid var(--gold-matte)',
                        borderRadius: '2px'
                    }}>
                        <div className="font-tactical" style={{ fontSize: '0.7rem', color: 'var(--gold-matte)', letterSpacing: '0.1rem' }}>COORDENADAS ACTUALES</div>
                        <div style={{ fontSize: '1rem', color: 'white', marginTop: '0.5rem' }}>10.4806° N, 66.8983° W</div>
                    </div>
                </main>
            </div>
        </div>
    );
}
