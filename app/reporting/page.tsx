"use client";

import React from 'react';
import Link from 'next/link';

export default function ReportingPage() {
    const kpis = [
        { label: 'PATRULLAS COMPLETADAS', value: '1,284', trend: '+12%', color: 'var(--gold-matte)' },
        { label: 'TIEMPO DE RESPUESTA PROMEDIO', value: '4:20 min', trend: '-15%', color: '#00ff00' },
        { label: 'INCIDENTES REPORTADOS', value: '12', trend: '+2', color: '#ff4d4d' },
        { label: 'PUNTOS DE VERIFICACIÓN (QR)', value: '450', trend: '100%', color: 'var(--text-high)' },
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-deep)', color: 'var(--text-high)', padding: '2rem', fontFamily: 'var(--font-tactical)' }}>
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 className="font-display" style={{ fontSize: '2rem', color: 'var(--gold-matte)', margin: 0 }}>REPORTES Y ANALÍTICA</h1>
                    <p style={{ margin: 0, color: 'var(--text-low)', fontSize: '0.8rem' }}>SISTEMA DE GESTIÓN PATRIMONIAL - QUEVELUG</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ backgroundColor: 'transparent', color: 'var(--text-high)', border: '1px solid #333', padding: '0.5rem 1rem', fontSize: '0.8rem', cursor: 'pointer' }}>EXPORTAR PDF</button>
                    <Link href="/" style={{ backgroundColor: 'var(--gold-matte)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}>DESLOGUEAR</Link>
                </div>
            </header>

            {/* KPI Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {kpis.map(kpi => (
                    <div key={kpi.label} style={{
                        background: 'var(--surface-tactical)',
                        border: '1px solid #1a1a1a',
                        padding: '1.5rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: kpi.color }}></div>
                        <span className="tag" style={{ fontSize: '0.6rem', marginBottom: '1rem' }}>{kpi.label}</span>
                        <div style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-high)' }}>{kpi.value}</div>
                        <div style={{ fontSize: '0.7rem', color: kpi.trend.startsWith('+') ? '#00ff00' : '#ff4d4d', marginTop: '0.5rem' }}>
                            {kpi.trend} vs mes anterior
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                {/* Daily Log Table */}
                <section style={{ background: 'var(--surface-tactical)', border: '1px solid #1a1a1a', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 className="font-display" style={{ margin: 0 }}>Libro Diario Digital</h3>
                        <span className="tag" style={{ margin: 0 }}>Últimas 24 Horas</span>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #333', textAlign: 'left', color: 'var(--text-low)' }}>
                                <th style={{ padding: '1rem 0' }}>HORA</th>
                                <th>AGENTE</th>
                                <th>EVENTO / ACTIVIDAD</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { time: '14:30', agent: 'L. Gomez', event: 'Cambio de turno - Postun 1', status: 'OK' },
                                { time: '14:15', agent: 'M. Soto', event: 'Reporte de novedad: Valla perimeteral', status: 'WARN' },
                                { time: '13:50', agent: 'J. Perez', event: 'Recorrido completado Alpha-Zone', status: 'OK' },
                                { time: '12:00', agent: 'L. Gomez', event: 'Apertura de portón principal', status: 'OK' },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                    <td style={{ padding: '1rem 0', color: 'var(--gold-matte)' }}>{row.time}</td>
                                    <td>{row.agent}</td>
                                    <td style={{ color: 'var(--text-mid)' }}>{row.event}</td>
                                    <td>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            backgroundColor: row.status === 'OK' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)',
                                            color: row.status === 'OK' ? '#00ff00' : '#ff4d4d',
                                            padding: '2px 8px',
                                            borderRadius: '2px'
                                        }}>{row.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Heatmap/Insights Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <section style={{ background: 'var(--surface-tactical)', border: '1px solid #1a1a1a', padding: '2rem' }}>
                        <h3 className="font-display" style={{ marginBottom: '1.5rem' }}>Mapa de Calor (Actividad)</h3>
                        <div style={{ height: '200px', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.4), transparent)',
                                boxShadow: '0 0 40px rgba(197, 160, 89, 0.2)'
                            }}></div>
                            <span style={{ position: 'absolute', fontSize: '0.7rem', color: 'var(--text-low)' }}>GRID DINÁMICO ACTIVO</span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-low)', marginTop: '1rem', fontStyle: 'italic' }}>
                            * La densidad representa la frecuencia de patrullaje en los últimos 7 días.
                        </p>
                    </section>

                    <section style={{ background: 'var(--surface-tactical)', border: '1px solid #1a1a1a', padding: '2rem' }}>
                        <h3 className="font-display" style={{ marginBottom: '1rem' }}>Alertas Tácticas</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div style={{ color: '#ff4d4d', fontSize: '0.8rem', borderLeft: '2px solid #ff4d4d', paddingLeft: '0.8rem' }}>
                                Zona Norte presenta 15% menos cobertura semanal.
                            </div>
                            <div style={{ color: 'var(--gold-matte)', fontSize: '0.8rem', borderLeft: '2px solid var(--gold-matte)', paddingLeft: '0.8rem' }}>
                                Punto QR "Bodega Este" no ha sido escaneado en 4 horas.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
