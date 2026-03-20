"use client";

import React from 'react';

export default function DashboardOverview() {
    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '2rem', color: 'var(--gold-matte)', letterSpacing: '0.2em', margin: 0 }}>BIENVENIDO AL CENTRO DE MANDO</h1>
                <p style={{ color: '#666', marginTop: '0.5rem' }}>RESUMEN OPERATIVO DE SEGURIDAD EN TIEMPO REAL</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {[
                    { label: 'AGENTES EN CAMPO', val: '14', color: 'white' },
                    { label: 'DISPOSITIVOS ACTIVOS', val: '28', color: 'white' },
                    { label: 'ALERTAS ABIERTAS', val: '03', color: '#ff4444' },
                    { label: 'ESTADO DEL SISTEMA', val: 'PROTEGIDO', color: '#44ccff' },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '0.15em' }}>{stat.label}</div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color, marginTop: '0.5rem' }}>{stat.val}</div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem' }} className="glass-panel">
                <div style={{ padding: '2rem', borderBottom: '1px solid #1a1a1a' }}>
                    <h3 className="hud-text">ÚLTIMAS NOVEDADES</h3>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { t: '14:22', msg: 'ACCESO DETECTADO: DIRECTOR (SAHEL BARRIOS)' },
                        { t: '14:15', msg: 'SISTEMA: SINCRONIZACIÓN SATELITAL COMPLETADA' },
                        { t: '13:45', msg: 'GUARDIA_02: INICIÓ RONDA EN SECTOR ALPHA' },
                    ].map((log, i) => (
                        <div key={i} style={{ fontSize: '0.85rem', display: 'flex', gap: '1.5rem', opacity: 0.8 }}>
                            <span style={{ color: 'var(--text-low)' }}>[{log.t}]</span>
                            <span>{log.msg}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
