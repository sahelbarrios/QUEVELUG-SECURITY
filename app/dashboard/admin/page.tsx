"use client";

import React, { useState } from 'react';

export default function GestionUsuarios() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([
        { id: '1', nombre: 'SAHEL BARRIOS', rol: 'DIRECTOR', empresa: 'QUEVELUG HQ' },
        { id: '2', nombre: 'JUAN PEREZ', rol: 'SUPERVISOR', empresa: 'ZONA NORTE' },
        { id: '3', nombre: 'EMP_XYZ', rol: 'CLIENTE', empresa: 'LOGÍSTICA INTERNACIONAL' },
    ]);

    const addUser = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            alert('USUARIO REGISTRADO EXITOSAMENTE');
            setLoading(false);
        }, 1000);
    };

    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>GESTIÓN DE USUARIOS Y ROLES</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>CONTROL CENTRALIZADO DE ALTAS, BAJAS Y ASIGNACIONES</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
                {/* LISTADO DE USUARIOS */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 className="hud-text" style={{ marginBottom: '1.5rem' }}>PERSONAL Y CLIENTES ACTIVOS</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #222', textAlign: 'left', color: '#666' }}>
                                <th style={{ padding: '1rem' }}>NOMBRE / ID</th>
                                <th style={{ padding: '1rem' }}>ROL</th>
                                <th style={{ padding: '1rem' }}>EMPRESA / ZONA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id} style={{ borderBottom: '1px solid #111' }}>
                                    <td style={{ padding: '1rem', color: 'white' }}>{u.nombre}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            backgroundColor: 'rgba(197, 160, 89, 0.1)',
                                            color: 'var(--gold-matte)',
                                            padding: '0.2rem 0.5rem',
                                            fontSize: '0.6rem',
                                            borderRadius: '2px'
                                        }}>{u.rol}</span>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#666' }}>{u.empresa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* REGISTRO DE NUEVO USUARIO */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 className="hud-text" style={{ marginBottom: '1.5rem' }}>NUEVO REGISTRO</h3>
                    <form onSubmit={addUser} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.6rem', color: '#666', marginBottom: '0.4rem' }}>NOMBRE COMPLETO</label>
                            <input type="text" required style={{ width: '100%', padding: '0.8rem', backgroundColor: '#111', border: '1px solid #333', color: 'white' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.6rem', color: '#666', marginBottom: '0.4rem' }}>ROL DEL SISTEMA</label>
                            <select style={{ width: '100%', padding: '0.8rem', backgroundColor: '#111', border: '1px solid #333', color: 'white' }}>
                                <option>AGENTE DE CAMPO</option>
                                <option>SUPERVISOR</option>
                                <option>MONITORISTA</option>
                                <option>CLIENTE CORPORATIVO</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.6rem', color: '#666', marginBottom: '0.4rem' }}>EMPRESA ASIGNADA (SOLO PARA CLIENTES)</label>
                            <input type="text" placeholder="Solo si es Cliente" style={{ width: '100%', padding: '0.8rem', backgroundColor: '#111', border: '1px solid #333', color: 'white' }} />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: 'var(--gold-matte)',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                letterSpacing: '0.2em',
                                fontSize: '0.75rem'
                            }}
                        >
                            {loading ? 'REGISTRANDO...' : 'REGISTRAR ELEMENTO'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
