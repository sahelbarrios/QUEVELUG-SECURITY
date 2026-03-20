"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MasterDashboard() {
    const [activeSegment, setActiveSegment] = useState('MONITORING');

    const stats = [
        { label: 'AGENTES EN CAMPO', value: '12', trend: '+2', color: 'var(--gold-matte)' },
        { label: 'INCIDENTES ACTIVOS', value: '03', trend: '-1', color: '#ff4444' },
        { label: 'RONDAS COMPLETADAS', value: '89%', trend: '+5%', color: '#44ff44' },
        { label: 'ESTADO DEL SISTEMA', value: 'ÓPTIMO', trend: 'SECURE', color: '#44ccff' },
    ];

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            backgroundColor: 'var(--bg-deep)',
            color: 'var(--text-high)',
            overflow: 'hidden',
            fontFamily: 'var(--font-tactical)'
        }}>
            {/* SIDEBAR TÁCTICA */}
            <aside className="glass-panel" style={{
                width: '80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 0',
                zIndex: 100
            }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', border: '2px solid var(--gold-matte)', rotate: '45deg', position: 'absolute' }}></div>
                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold', fontSize: '10px' }}>Q</span>
                    </div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {['HUB', 'MAP', 'LOG', 'USER', 'SET'].map((item) => (
                        <button key={item} style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-low)',
                            fontSize: '0.6rem',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <div style={{ width: '20px', height: '20px', border: '1px solid currentColor' }}></div>
                            {item}
                        </button>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <Link href="/login" style={{ fontSize: '0.5rem', color: '#ff4444', textDecoration: 'none' }}>EXIT</Link>
                </div>
            </aside>

            {/* MAIN COMMAND AREA */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1.5rem' }}>

                {/* TOP HUD */}
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 className="font-display" style={{ fontSize: '1.2rem', letterSpacing: '0.4em', color: 'var(--gold-matte)', margin: 0 }}>COMMAND CENTER</h1>
                        <div className="hud-text" style={{ fontSize: '0.6rem' }}>OPERACIONES DIRECTIVAS | NIVEL 5 ACCESO</div>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {stats.map((stat, i) => (
                            <div key={i} className="glass-card tactical-glow" style={{ padding: '0.8rem 1.5rem', minWidth: '150px' }}>
                                <div className="hud-text" style={{ fontSize: '0.5rem' }}>{stat.label}</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                                <div style={{ fontSize: '0.5rem', opacity: 0.6 }}>{stat.trend} VS PREV</div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* HUD CENTRAL */}
                <section style={{ display: 'flex', flex: 1, gap: '1.5rem', minHeight: 0 }}>

                    {/* MAPA DINÁMICO (60%) */}
                    <div className="glass-panel tactical-glow" style={{ flex: 1.5, position: 'relative', overflow: 'hidden' }}>
                        {/* Simulación de Mapa */}
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
                            <div style={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        </div>

                        {/* Capa Estratégica HUD */}
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div className="glass-card" style={{ padding: '0.4rem 0.8rem', fontSize: '0.6rem' }}>LAT: 10.4850° N</div>
                            <div className="glass-card" style={{ padding: '0.4rem 0.8rem', fontSize: '0.6rem' }}>LON: 66.8895° W</div>
                        </div>

                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--gold-matte)', marginBottom: '1rem' }}>SISTEMA DE RASTREO SATELITAL CARGANDO...</div>
                                <div style={{ width: '200px', height: '2px', backgroundColor: '#111', position: 'relative' }}>
                                    <div style={{ position: 'absolute', height: '100%', width: '40%', backgroundColor: 'var(--gold-matte)', boxShadow: '0 0 10px var(--gold-matte)' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Marcadores Mockup */}
                        <div style={{ position: 'absolute', top: '40%', left: '30%', width: '10px', height: '10px', backgroundColor: 'var(--gold-matte)', rotate: '45deg', boxShadow: '0 0 10px var(--gold-matte)' }}></div>
                        <div style={{ position: 'absolute', top: '60%', left: '50%', width: '10px', height: '10px', backgroundColor: '#ff4444', rotate: '45deg', boxShadow: '0 0 10px #ff4444' }}></div>
                    </div>

                    {/* LOG TÁCTICO (40%) */}
                    <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                        <div className="hud-text" style={{ paddingBottom: '1rem', borderBottom: '1px solid #1a1a1a', marginBottom: '1rem' }}>EVENTOS EN TIEMPO REAL</div>

                        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { time: '13:45:22', user: 'GUARD_02', event: 'QR_CHECKPOINT_A3', status: 'OK' },
                                { time: '13:42:01', user: 'SYSTEM', event: 'GPS_RECALIBRATION', status: 'WARN' },
                                { time: '13:40:15', user: 'GUARD_05', event: 'INCIDENT_REPORTED', status: 'CRIT' },
                                { time: '13:38:55', user: 'CLIENT_01', event: 'PANIC_SIGNAL_CHECK', status: 'TEST' },
                            ].map((log, i) => (
                                <div key={i} className="glass-card" style={{ padding: '0.6rem', fontSize: '0.65rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--text-low)' }}>{log.time}</span>
                                    <span style={{ color: 'var(--gold-matte)', width: '60px' }}>{log.user}</span>
                                    <span style={{ flex: 1 }}>{log.event}</span>
                                    <span style={{ color: log.status === 'CRIT' ? '#ff4444' : log.status === 'WARN' ? '#ffcc00' : '#44ff44' }}>{log.status}</span>
                                </div>
                            ))}
                        </div>

                        <button style={{
                            marginTop: '1rem',
                            padding: '0.8rem',
                            background: 'var(--gold-matte)',
                            color: 'white',
                            border: 'none',
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            letterSpacing: '0.2rem'
                        }}>EXPORTAR LOG DIARIO</button>
                    </div>
                </section>

                {/* BOTTOM QUICK CONTROLS */}
                <section style={{ display: 'flex', gap: '1.5rem', height: '100px' }}>
                    <div className="glass-panel" style={{ flex: 2, display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '2rem' }}>
                        <div className="hud-text">GESTIÓN RÁPIDA:</div>
                        <button className="glass-card" style={{ padding: '0.5rem 1rem', background: 'none', cursor: 'pointer', fontSize: '0.6rem' }}>DESPLEGAR AGENTES</button>
                        <button className="glass-card" style={{ padding: '0.5rem 1rem', background: 'none', cursor: 'pointer', fontSize: '0.6rem' }}>ENVIAR ALERTA GLOBAL</button>
                        <button className="glass-card" style={{ padding: '0.5rem 1rem', background: 'none', cursor: 'pointer', fontSize: '0.6rem' }}>BLOQUEO DE PUERTAS</button>
                    </div>
                    <div className="glass-panel" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#44ff44', borderRadius: '50%', boxShadow: '0 0 10px #44ff44' }}></div>
                        <div className="hud-text" style={{ fontSize: '0.6rem' }}>ENLACE SATELITAL SEGURO</div>
                    </div>
                </section>

            </main>
        </div>
    );
}
