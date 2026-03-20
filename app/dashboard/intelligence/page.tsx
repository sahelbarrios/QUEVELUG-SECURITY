"use client";

import React from 'react';

export default function InteligenciaTactica() {
    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>MÓDULO DE INTELIGENCIA TÁCTICA</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>ANÁLISIS PREDICTIVO Y SEGURIDAD PREVENTIVA</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                {/* MAPA DE CALOR DE INCIDENCIAS */}
                <div className="glass-panel" style={{ padding: '2rem', minHeight: '350px' }}>
                    <h3 className="hud-text" style={{ marginBottom: '1.5rem' }}>MAPA DE CALOR: PROBABILIDAD DE RIESGO</h3>
                    <div style={{
                        flex: 1,
                        height: '250px',
                        backgroundColor: '#050505',
                        position: 'relative',
                        backgroundImage: 'radial-gradient(circle, rgba(255, 68, 68, 0.1) 0%, transparent 60%)',
                        border: '1px solid #1a1a1a'
                    }}>
                        <div style={{ position: 'absolute', top: '20%', left: '30%', width: '40px', height: '40px', background: 'rgba(255, 68, 68, 0.4)', borderRadius: '50%', filter: 'blur(10px)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '60%', width: '60px', height: '60px', background: 'rgba(255, 68, 68, 0.2)', borderRadius: '50%', filter: 'blur(15px)' }}></div>
                        <div style={{ position: 'absolute', inset: 0, padding: '1rem', fontSize: '0.6rem', color: '#666' }}>
                            GENERANDO INSIGHTS PREDICTIVOS...
                        </div>
                    </div>
                </div>

                {/* MÉTRICAS DE INTELIGENCIA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '0.1em' }}>SCORE DE SEGURIDAD GLOBAL</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#44ff44', marginTop: '0.5rem' }}>92 / 100</div>
                        <p style={{ fontSize: '0.65rem', color: '#666', marginTop: '0.8rem' }}>+5% de eficiencia detectada en los últimos 7 días.</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h4 style={{ fontSize: '0.7rem', color: 'var(--gold-matte)', letterSpacing: '0.1em', marginBottom: '1rem' }}>RECOMENDACIONES DE LA IA</h4>
                        <ul style={{ fontSize: '0.75rem', paddingLeft: '1.2rem', color: '#999', lineHeight: '1.6' }}>
                            <li>Aumentar patrullaje en Sector Alpha entre las 02:00 y 04:00.</li>
                            <li>Verificar sensores de proximidad en Zona Sur por anomalías de red.</li>
                            <li>Revision de credenciales para visitantes de Larga Distancia.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
