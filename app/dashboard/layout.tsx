"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const menuItems = [
        { id: 'home', label: 'INICIO / RESUMEN', path: '/dashboard' },
        { id: 'monitoreo', label: 'MONITOREO TÁCTICO', path: '/dashboard/monitoring' },
        { id: 'patrullaje', label: 'PATRULLAJE ACTIVO', path: '/dashboard/patrol' },
        { id: 'escaneo', label: 'VERIFICACIÓN QR', path: '/dashboard/scan' },
        { id: 'incidentes', label: 'REPORTAR INCIDENTE', path: '/dashboard/incidents' },
        { id: 'libro', label: 'LIBRO DIARIO', path: '/dashboard/logs' },
        { id: 'kpis', label: 'ANÁLISIS KPI', path: '/dashboard/kpis' },
        { id: 'inteligencia', label: 'MÓDULO DE INTELIGENCIA', path: '/dashboard/intelligence' },
        { id: 'admin', label: 'GESTIÓN / USUARIOS', path: '/dashboard/admin' },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#030303', overflow: 'hidden' }}>
            {/* SIDEBAR OPERATIVA */}
            <aside style={{
                width: '280px',
                borderRight: '1px solid #1a1a1a',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
                backgroundColor: '#050505'
            }}>
                {/* LOGO CORPORATIVO */}
                <div style={{ marginBottom: '3rem', position: 'relative', width: '100%', height: '50px' }}>
                    <Image
                        src="/brand/logo.jpg"
                        alt="QUEVELUG"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                    />
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <div style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '0.2em', marginBottom: '1rem', paddingLeft: '0.5rem' }}>OPERACIONES PRINCIPALES</div>
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.path}
                            style={{
                                textDecoration: 'none',
                                color: pathname === item.path ? 'var(--gold-matte)' : '#999',
                                fontSize: '0.75rem',
                                padding: '0.8rem 1rem',
                                borderRadius: '4px',
                                backgroundColor: pathname === item.path ? 'rgba(197, 160, 89, 0.05)' : 'transparent',
                                borderLeft: pathname === item.path ? '2px solid var(--gold-matte)' : '2px solid transparent',
                                transition: 'all 0.2s',
                                letterSpacing: '0.1em'
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white' }}>SAHEL BARRIOS</div>
                    <div style={{ fontSize: '0.6rem', color: '#666' }}>DIRECTOR GENERAL</div>
                    <Link href="/login" style={{ fontSize: '0.6rem', color: '#ff4444', textDecoration: 'none', marginTop: '0.5rem', display: 'block' }}>CERRAR SESIÓN</Link>
                </div>
            </aside>

            {/* ÁREA DE CONTENIDO DINÁMICO */}
            <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#030303', position: 'relative' }}>
                {children}
            </main>
        </div>
    );
}
