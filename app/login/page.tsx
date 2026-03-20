"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate authentication and role-based redirect
        setTimeout(() => {
            // User requested credentials (Director Level)
            if (email === '20389331' && password === '20.Gym..20') {
                document.cookie = "quevelug-auth-mock=true; path=/";
                router.push('/reporting');
            }
            // Fallback for testing
            else if (email.includes('director')) {
                document.cookie = "quevelug-auth-mock=true; path=/";
                router.push('/reporting'); // Directors go to full dashboard
            } else if (email.includes('guard')) {
                document.cookie = "quevelug-auth-mock=true; path=/";
                router.push('/guards'); // Guards go to patrol app
            } else {
                alert('ERROR DE AUTENTICACIÓN: CREDENCIALES INVÁLIDAS');
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--bg-deep)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'var(--font-tactical)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                padding: '3rem',
                background: 'rgba(10,10,10,0.8)',
                border: '1px solid #1a1a1a',
                boxShadow: '0 0 40px rgba(0,0,0,0.5)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 className="font-display" style={{ fontSize: '1.5rem', letterSpacing: '0.3em', color: 'var(--gold-matte)', margin: 0 }}>QUEVELUG</h1>
                    <span className="tag" style={{ fontSize: '0.6rem', marginTop: '0.5rem' }}>ACCESO TÁCTICO CENTRALIZADO</span>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-low)', marginBottom: '0.5rem', letterSpacing: '0.1rem' }}>IDENTIFICACIÓN / EMAIL</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="agente_id@quevelug.com"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid #333',
                                color: 'white',
                                fontSize: '0.9rem',
                                outline: 'none',
                                fontFamily: 'var(--font-tactical)'
                            }}
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-low)', marginBottom: '0.5rem', letterSpacing: '0.1rem' }}>CÓDIGO DE ACCESO</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid #333',
                                color: 'white',
                                fontSize: '0.9rem',
                                outline: 'none',
                                fontFamily: 'var(--font-tactical)'
                            }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '1rem',
                            backgroundColor: loading ? '#333' : 'var(--gold-matte)',
                            color: 'white',
                            border: 'none',
                            fontSize: '0.9rem',
                            letterSpacing: '0.15rem',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            marginTop: '1rem',
                            transition: 'background-color 0.2s',
                            fontFamily: 'var(--font-tactical)'
                        }}
                    >
                        {loading ? 'AUTENTICANDO...' : 'INGRESAR AL SISTEMA'}
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-low)' }}>
                    PROTOCOLO DE SEGURIDAD AES-256 ACTIVO. <br />
                    TODA ACTIVIDAD ESTÁ SIENDO MONITOREADA.
                </div>
            </div>
        </div>
    );
}
