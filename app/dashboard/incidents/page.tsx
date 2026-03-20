"use client";

import React, { useState } from 'react';

export default function ReporteIncidentes() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            alert('REPORTE ENVIADO EXITOSAMENTE AL CENTRO DE OPERACIONES');
            setLoading(false);
        }, 1500);
    };

    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>REPORTAR INCIDENCIA</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>REGISTRO OFICIAL DE ANOMALÍAS Y NOVEDADES</p>
            </header>

            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', marginBottom: '0.5rem' }}>TIPO DE INCIDENTE</label>
                        <select style={{ width: '100%', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid #333', color: 'white' }}>
                            <option>ANOMALÍA PERIMETRAL</option>
                            <option>FALLO DE EQUIPAMIENTO</option>
                            <option>INGRESO NO AUTORIZADO</option>
                            <option>ACTIVACIÓN DE ALARMA</option>
                            <option>OTRO</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', marginBottom: '0.5rem' }}>UBICACIÓN / ZONA</label>
                        <input type="text" placeholder="Sector Alpha / Planta Baja" style={{ width: '100%', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid #333', color: 'white' }} />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', marginBottom: '0.5rem' }}>DESCRIPCIÓN DETALLADA</label>
                    <textarea rows={6} placeholder="Describa la situación observada..." style={{ width: '100%', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid #333', color: 'white', resize: 'none' }}></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '1.2rem',
                        backgroundColor: 'var(--gold-matte)',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        letterSpacing: '0.15em'
                    }}
                >
                    {loading ? 'ENVIANDO...' : 'ENVIAR REPORTE A OPERACIONES'}
                </button>
            </form>
        </div>
    );
}
