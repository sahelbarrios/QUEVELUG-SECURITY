"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function GuardPortal() {
    const [isPatrolling, setIsPatrolling] = useState(false);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--bg-deep)',
            color: 'var(--text-high)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'var(--font-tactical)'
        }}>
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
            }}>
                <div>
                    <h1 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--gold-matte)', margin: 0 }}>PORTAL DE GUARDIAS</h1>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-low)' }}>ID AGENTE: QVL-9921</span>
                </div>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid var(--gold-matte)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '0.8rem' }}>👤</span>
                </div>
            </header>

            {/* Main Status */}
            <div style={{
                background: 'var(--surface-tactical)',
                border: '1px solid #1a1a1a',
                padding: '1.5rem',
                borderRadius: '4px',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2rem',
                    color: 'var(--text-low)',
                    marginBottom: '0.5rem'
                }}>ESTADO ACTUAL</div>
                <div style={{
                    fontSize: '1.5rem',
                    color: isPatrolling ? '#00ff00' : 'var(--text-mid)',
                    fontWeight: 500
                }}>
                    {isPatrolling ? 'EN PATRULLA ACTIVA' : 'EN ESPERA / DISPONIBLE'}
                </div>
            </div>

            {/* Action Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
                <button
                    onClick={() => setIsPatrolling(!isPatrolling)}
                    style={{
                        gridColumn: 'span 2',
                        padding: '2rem',
                        backgroundColor: isPatrolling ? '#ff4d4d' : 'var(--gold-matte)',
                        color: 'white',
                        border: 'none',
                        fontSize: '1.1rem',
                        letterSpacing: '0.1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {isPatrolling ? 'FINALIZAR PATRULLA' : 'INICIAR PATRULLA'}
                </button>

                <button style={{
                    padding: '1.5rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid #333',
                    color: 'var(--text-high)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1rem',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>📷</span>
                    REPORTAR INCIDENTE
                </button>

                <button style={{
                    padding: '1.5rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid #333',
                    color: 'var(--text-high)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1rem',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>📖</span>
                    LIBRO DIARIO
                </button>

                <button style={{
                    gridColumn: 'span 2',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    border: '1px solid var(--gold-matte)',
                    color: 'var(--gold-matte)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1rem',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <span style={{ fontSize: '1.2rem' }}>📱</span>
                    ESCANEAR CÓDIGO QR
                </button>
            </div>

            {/* Footer Navigation */}
            <footer style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid #1a1a1a',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Link href="/" style={{ fontSize: '0.8rem', color: 'var(--text-low)', textDecoration: 'none' }}>VOLVER AL INICIO</Link>
            </footer>
        </div>
    );
}
