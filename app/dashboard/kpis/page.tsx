"use client";

import React from 'react';

export default function AnalisisKPI() {
    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>ANÁLISIS DE RENDIMIENTO (KPI)</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>INDICADORES GERENCIALES Y MÉTRICAS DE COBERTURA</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                    { label: 'CUMPLIMIENTO DE RONDAS', val: '94.2%', sub: '+3.1% vs mes anterior' },
                    { label: 'TIEMPO MEDIO DE RESPUESTA', val: '2.5 min', sub: '-30s optimización' },
                    { label: 'INCIDENTES REPORTADOS', val: '42', sub: 'Tendencia estable' },
                    { label: 'COBERTURA DE PUNTOS QR', val: '98%', sub: 'Nivel crítico: 90%' },
                ].map((kpi, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '0.15em' }}>{kpi.label}</div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{kpi.val}</div>
                        <div style={{ fontSize: '0.7rem', color: '#44ff44' }}>{kpi.sub}</div>
                    </div>
                ))}
            </div>

            <div className="glass-panel" style={{ marginTop: '3rem', padding: '3rem' }}>
                <h3 className="hud-text" style={{ marginBottom: '2rem' }}>GRÁFICO DE ACTIVIDAD MENSUAL</h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                    {[40, 60, 45, 90, 100, 80, 50, 70, 85, 95, 110, 120].map((h, i) => (
                        <div key={i} style={{ flex: 1, backgroundColor: 'var(--gold-matte)', height: `${h}px`, opacity: 0.3 + (h / 200) }}></div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '1rem', color: '#444', fontSize: '0.7rem' }}>SIMULACIÓN DE DATOS OPERATIVOS MES ACTUAL</div>
            </div>
        </div>
    );
}
