"use client";

import React, { useState } from 'react';

export default function PatrullajeActivo() {
    const [activePatrol, setActivePatrol] = useState(false);

    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>GESTIÓN DE PATRULLAJE</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>CONTROL DE RONDAS Y RECORRIDOS DE SEGURIDAD</p>
            </header>

            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.7rem', color: activePatrol ? '#44ff44' : '#666', marginBottom: '1rem' }}>
                        {activePatrol ? 'PATRULLA EN CURSO' : 'SISTEMA EN ESPERA'}
                    </div>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{activePatrol ? '00:15:32' : '00:00:00'}</div>
                </div>

                <button
                    onClick={() => setActivePatrol(!activePatrol)}
                    style={{
                        padding: '1.5rem 3rem',
                        backgroundColor: activePatrol ? '#ff4444' : 'var(--gold-matte)',
                        color: 'white',
                        border: 'none',
                        fontSize: '1rem',
                        letterSpacing: '0.2em',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-tactical)',
                        width: '100%'
                    }}
                >
                    {activePatrol ? 'FINALIZAR PATRULLA' : 'INICIAR RECORRIDO'}
                </button>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.6rem', color: '#666' }}>PUNTOS VISITADOS</div>
                        <div style={{ fontSize: '1.2rem' }}>0 / 12</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.6rem', color: '#666' }}>NOVEDADES</div>
                        <div style={{ fontSize: '1.2rem' }}>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
