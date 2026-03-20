"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function LoginPage() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Lógica inteligente: Si ya es un email, úsalo. Si es solo ID, añade el dominio corporativo.
            const emailPlaceholder = userId.includes('@') ? userId : `${userId}@quevelug.com`;

            console.log('Intentando enlace con:', emailPlaceholder); // Debug táctico

            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email: emailPlaceholder,
                password: password,
            });

            if (authError) throw authError;

            if (data.user) {
                // Redirección exitosa al panel de comando
                router.push('/dashboard');
                router.refresh();
            }
        } catch (err: any) {
            setError('ERROR DE AUTENTICACIÓN: CREDENCIALES INVÁLIDAS O FALLO DE ENLACE');
            console.error('Login error:', err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#030303',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '450px',
                padding: '3rem',
                border: '1px solid #1a1a1a',
                textAlign: 'center'
            }}>
                {/* LOGO CORPORATIVO */}
                <div style={{ position: 'relative', width: '200px', height: '80px', margin: '0 auto 2.5rem' }}>
                    <Image
                        src="/brand/logo.jpg"
                        alt="QUEVELUG"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                <h2 className="font-display" style={{
                    fontSize: '1rem',
                    letterSpacing: '0.4em',
                    color: 'var(--gold-matte)',
                    marginBottom: '2.5rem'
                }}>CONEXIÓN SEGURA</h2>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>IDENTIFICADOR OPERATIVO</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder="XXXXXXXX"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.02)',
                                border: '1px solid #1a1a1a',
                                color: 'white',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                            required
                        />
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>CLAVE DE ACCESO ENCRIPTADA</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.02)',
                                border: '1px solid #1a1a1a',
                                color: 'white',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                            required
                        />
                    </div>

                    {error && (
                        <div style={{ color: '#ff4444', fontSize: '0.7rem', letterSpacing: '0.05em', backgroundColor: 'rgba(255,68,68,0.05)', padding: '0.5rem' }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            marginTop: '1rem',
                            padding: '1.2rem',
                            backgroundColor: 'var(--gold-matte)',
                            color: 'white',
                            border: 'none',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'opacity 0.2s'
                        }}
                    >
                        {loading ? 'AUTENTICANDO...' : 'INICIAR ENLACE'}
                    </button>
                </form>

                <footer style={{ marginTop: '3rem', fontSize: '0.55rem', color: '#333', letterSpacing: '0.2em' }}>
                    PROTOCOL AES-256 | NIVEL DE SEGURIDAD ELITE
                </footer>
            </div>
        </div>
    );
}
