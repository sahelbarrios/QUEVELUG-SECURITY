"use client";

import React from 'react';

export default function MonitoreoTactico() {
    return (
        <div style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>MONITOREO TÁCTICO EN VIVO</h1>
                <div style={{ fontSize: '0.7rem', color: '#44ccff', letterSpacing: '0.1em' }}>SISTEMA DE RASTREO SATELITAL ACTIVO</div>
            </header>

            <div style={{ flex: 1, display: 'flex', gap: '2rem' }}>
                <div className="glass-panel" style={{ flex: 2, position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
                    {/* Simulación de Mapa */}
                    <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-low)', fontSize: '0.8rem' }}>
                        CARGANDO MAPA DE OPERACIONES...
                    </div>
                    {/* Marcadores de Agentes */}
                    <div style={{ position: 'absolute', top: '30%', left: '40%', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: '#44ff44', borderRadius: '50%', boxShadow: '0 0 10px #44ff44' }}></div>
                        <span style={{ fontSize: '0.6rem' }}>AGENTE_01</span>
                    </div>
                </div>

                <div className="glass-panel" style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <h3 className="hud-text" style={{ marginBottom: '1rem', borderBottom: '1px solid #1a1a1a', paddingBottom: '0.5rem' }}>LOG DE EVENTOS</h3>
                    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            { t: '14:25:01', u: 'A_01', e: 'POSICIÓN ACTUALIZADA' },
                            { t: '14:24:45', u: 'SIS', e: 'ALERTA: ZONA B - PERÍMETRO SEGURO' },
                        ].map((log, i) => (
                            <div key={i} style={{ fontSize: '0.7rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#666' }}>{log.t}</span>
                                <span style={{ color: 'var(--gold-matte)' }}>{log.u}</span>
                                <span style={{ flex: 1 }}>{log.e}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
