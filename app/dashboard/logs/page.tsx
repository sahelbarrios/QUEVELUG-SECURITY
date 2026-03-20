"use client";

import React from 'react';

export default function LibroDiario() {
    const logs = [
        { id: 1, fecha: '2026-03-20', hora: '14:22', agente: 'SAHEL BARRIOS', evento: 'INICIO DE SESIÓN GERENCIAL', sector: 'CENTRO MANDO' },
        { id: 2, fecha: '2026-03-20', hora: '13:45', agente: 'GUARDIA_02', evento: 'RODAJE ALPHA COMPLETADO', sector: 'ZONA NORTE' },
        { id: 3, fecha: '2026-03-20', hora: '12:10', agente: 'SISTEMA', evento: 'REINICIO DE SERVIDORES', sector: 'IT' },
        { id: 4, fecha: '2026-03-19', hora: '23:55', agente: 'GUARDIA_05', evento: 'ALERTA PERIMETRAL: FALSA ALARMA', sector: 'ZONA SUR' },
    ];

    return (
        <div style={{ padding: '3rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-matte)', letterSpacing: '0.2em' }}>LIBRO DIARIO DIGITAL</h1>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>REGISTRO HISTÓRICO DE NOVEDADES Y NOTAS DE TURNO</p>
            </header>

            <div className="glass-panel" style={{ overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8rem' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #333', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                            <th style={{ padding: '1.2rem', color: '#666' }}>FECHA / HORA</th>
                            <th style={{ padding: '1.2rem', color: '#666' }}>AGENTE / USUARIO</th>
                            <th style={{ padding: '1.2rem', color: '#666' }}>EVENTO / NOVEDAD</th>
                            <th style={{ padding: '1.2rem', color: '#666' }}>SECTOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} style={{ borderBottom: '1px solid #111' }}>
                                <td style={{ padding: '1.2rem' }}>
                                    <div style={{ color: 'white' }}>{log.fecha}</div>
                                    <div style={{ fontSize: '0.7rem', color: '#555' }}>{log.hora}</div>
                                </td>
                                <td style={{ padding: '1.2rem', color: 'var(--gold-matte)' }}>{log.agente}</td>
                                <td style={{ padding: '1.2rem' }}>{log.evento}</td>
                                <td style={{ padding: '1.2rem', color: '#666' }}>{log.sector}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
