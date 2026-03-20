"use client";

import React from 'react';

export default function VerificacionQR() {
    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>VERIFICACIÓN DE PUNTOS (QR)</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>CONTROL DE ASISTENCIA Y RONDA TÁCTICA</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                <div className="glass-panel" style={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <div style={{ width: '80%', height: '80%', border: '2px dashed var(--gold-matte)', opacity: 0.5 }}></div>
                    <div style={{ position: 'absolute', fontSize: '0.7rem', color: 'var(--gold-matte)' }}>ACCEDIENDO A LA CÁMARA...</div>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '600px' }}>
                    <h3 className="hud-text" style={{ marginBottom: '1rem' }}>ÚLTIMOS PUNTOS VERIFICADOS</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            { time: '14:05', point: 'ALMACÉN PRINCIPAL', status: 'VERIFICADO' },
                            { time: '13:50', point: 'PUERTA ACCESO VEHICULAR', status: 'VERIFICADO' },
                        ].map((v, i) => (
                            <div key={i} style={{ fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #111', paddingBottom: '0.5rem' }}>
                                <span>{v.point}</span>
                                <span style={{ color: '#666' }}>{v.time}</span>
                                <span style={{ color: '#44ff44' }}>{v.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
