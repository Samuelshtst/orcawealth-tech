"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [simulatedError, setSimulatedError] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // EF-01 Penanganan Error & Muat Ulang sesuai acceptance criteria PB-01
  if (simulatedError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
        <div className="max-w-md w-full bg-white rounded-[16px] p-8 shadow-lg border border-slate-200 text-center">
          <div className="w-16 h-16 bg-amber-50 text-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0B192C] font-['Plus_Jakarta_Sans'] mb-2">
            Terjadi Gangguan Pemuatan
          </h2>
          <p className="text-sm text-[#334155] mb-6 leading-relaxed">
            Sistem gagal memuat data halaman landing page Orca Wealthtech karena kendala koneksi atau server sementara.
          </p>
          <button
            onClick={() => setSimulatedError(false)}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0B192C] hover:bg-[#1A5F7A] text-white font-semibold rounded-[12px] transition duration-200 cursor-pointer shadow-sm"
          >
            Muat Ulang Halaman
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0B192C] to-[#1A5F7A] flex items-center justify-center text-white shadow-md">
                {/* Whale / Orca Fin Icon */}
                <svg
                  className="w-6 h-6 text-[#48CFCB]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.38-.83-4.57-2.21-6.3L12 2z" />
                  <path d="M7 13c1.5 0 3-1 3-3" />
                  <path d="M14 9c0 2 1.5 3 3 3" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#0B192C] font-['Plus_Jakarta_Sans']">
                Orca<span className="text-[#1A5F7A] font-semibold text-xl ml-1">Wealthtech</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#334155]">
              <a
                href="#tentang"
                className="hover:text-[#1A5F7A] transition"
              >
                Tentang Kami
              </a>
              <a
                href="#manfaat"
                className="hover:text-[#1A5F7A] transition"
              >
                Solusi & Peran
              </a>
              <a
                href="#layanan"
                className="hover:text-[#1A5F7A] transition"
              >
                Layanan & Fitur
              </a>
              <a
                href="#faq"
                className="hover:text-[#1A5F7A] transition"
              >
                FAQ
              </a>
            </nav>

            {/* CTA Buttons: Login & Register (PB-02 & PB-04) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] hover:text-[#1A5F7A] transition rounded-[12px] border border-slate-300 hover:border-[#1A5F7A]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#48CFCB] hover:bg-[#3dbdb9] transition rounded-[12px] shadow-sm hover:shadow"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Buka navigasi"
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#334155] hover:text-[#1A5F7A]"
            >
              Tentang Kami
            </a>
            <a
              href="#manfaat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#334155] hover:text-[#1A5F7A]"
            >
              Solusi & Peran
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#334155] hover:text-[#1A5F7A]"
            >
              Layanan & Fitur
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#334155] hover:text-[#1A5F7A]"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                className="w-full text-center py-3 text-sm font-semibold text-[#0B192C] border border-slate-300 rounded-[12px]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-full text-center py-3 text-sm font-semibold text-[#0B192C] bg-[#48CFCB] rounded-[12px]"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="tentang" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A5F7A]/10 text-[#1A5F7A] text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#48CFCB] animate-pulse"></span>
                Infrastruktur Finansial B2B2C & Behavioral Guardian
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight font-['Plus_Jakarta_Sans'] leading-[1.2]">
                Membangun Kesejahteraan Finansial{" "}
                <span className="text-[#1A5F7A] underline decoration-[#48CFCB] decoration-4 underline-offset-8">
                  Tanpa Friksi
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Orca Wealthtech menghubungkan ekosistem payroll korporasi dengan penyedia reksa dana terlisensi. Membantu karyawan berinvestasi rutin otomatis tanpa beban administrasi, dengan perlindungan pendampingan cerdas non-direktif.
              </p>

              {/* Call to Actions (PB-02 & PB-04) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#48CFCB] hover:bg-[#3dbdb9] text-[#0B192C] font-bold rounded-[12px] shadow-sm hover:shadow-md transition text-center"
                >
                  Daftar Sekarang (Register)
                </Link>
                <Link
                  href="/login"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 hover:border-[#1A5F7A] text-[#0B192C] font-semibold rounded-[12px] transition text-center shadow-sm"
                >
                  Masuk ke Akun (Login)
                </Link>
                <a
                  href="#manfaat"
                  className="text-sm font-semibold text-[#1A5F7A] hover:underline flex items-center gap-1.5 px-3 py-2"
                >
                  Pelajari Layanan
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>

              {/* Compliance / Disclaimer Banner */}
              <div className="pt-4 flex items-center gap-3 text-xs text-slate-500 justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 text-[#1A5F7A] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>
                  Orca berperan sebagai middleware SaaS & teknologi enabler. Pengelolaan portofolio & kustodi berada di bawah mitra APERD & Manajer Investasi berizin OJK.
                </span>
              </div>
            </div>

            {/* Right Column: Hero Graphic / Interactive Card Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-[16px] shadow-xl border border-slate-200/80 p-6 space-y-6">
                {/* Simulated Widget Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Program Otomasi
                    </span>
                    <h3 className="text-lg font-bold text-[#0B192C]">
                      Orca Stream (Payroll Save)
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Aktif
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-[12px] bg-[#F8FAFC] border border-slate-100">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Progres Target Dana Darurat</span>
                      <span className="font-semibold text-[#0B192C]">65%</span>
                    </div>
                    {/* Goal-based progress bar */}
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-[#48CFCB] h-2.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-3 pt-2 border-t border-slate-200/60">
                      <span className="text-slate-500">Auto-Debit Gajian</span>
                      <span className="font-semibold text-[#0B192C]">
                        Rp 500.000 / bln
                      </span>
                    </div>
                  </div>

                  {/* Behavioral Nudging Pill: Orca Sonar */}
                  <div className="p-3.5 rounded-[12px] bg-slate-50 border border-[#1A5F7A]/20 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-[#48CFCB]/20 text-[#1A5F7A] shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-[#0B192C]">
                        Orca Sonar Guardian
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        Menjaga ketenangan emosional Anda saat pasar berfluktuasi tanpa rekomendasi spekulatif.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs text-slate-400 font-medium">
                    Terhubung langsung dengan sistem HR & Payroll perusahaan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANFAAT BERDASARKAN PERAN (KARYAWAN, PERUSAHAAN, INDIVIDU) */}
      <section id="manfaat" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1A5F7A] mb-2">
              Solusi Tiga Pilar (B2B2C)
            </h2>
            <p className="text-3xl font-extrabold text-[#0B192C] font-['Plus_Jakarta_Sans'] tracking-tight">
              Manfaat Nyata Sesuai Peran Anda
            </p>
            <p className="mt-3 text-[#334155] text-base">
              Setiap pihak mendapatkan akses dan nilai optimal yang dirancang khusus untuk memenuhi kebutuhan finansial secara aman dan patuh regulasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1: Karyawan */}
            <div className="flex flex-col bg-[#F8FAFC] rounded-[16px] p-8 border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-[12px] bg-[#1A5F7A] text-white flex items-center justify-center mb-6 shadow-sm">
                <svg
                  className="w-6 h-6 text-[#48CFCB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-100/60 text-[#1A5F7A]">
                  Pengguna Karyawan
                </span>
                <h3 className="text-xl font-bold text-[#0B192C] font-['Plus_Jakarta_Sans'] mt-2">
                  Karyawan Perusahaan
                </h3>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Akses ke program investasi berkala otomatis yang terhubung langsung dengan payroll gaji bulanan di perusahaan yang berpartisipasi.
              </p>

              <ul className="space-y-3 text-sm text-[#334155] mb-8 flex-1">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Investasi Tak Kasat Mata:</strong> Otomasi potong gaji tanpa perlu transfer manual setiap bulan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Goal-Based Tracking:</strong> Pemantauan fokus pada progres target (dana darurat, pensiun, dll).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Orca Sonar Guardian:</strong> Meredakan kepanikan investasi dengan panduan psikologis yang objektif.</span>
                </li>
              </ul>

              <Link
                href="/register?role=karyawan"
                className="w-full text-center py-3 bg-white hover:bg-slate-50 text-[#0B192C] font-semibold rounded-[12px] border border-slate-300 transition text-sm shadow-sm"
              >
                Daftar Sebagai Karyawan
              </Link>
            </div>

            {/* Pilar 2: Perusahaan */}
            <div className="flex flex-col bg-[#F8FAFC] rounded-[16px] p-8 border-2 border-[#1A5F7A] relative shadow-md">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B192C] text-[#48CFCB] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Rekomendasi B2B
              </div>

              <div className="w-12 h-12 rounded-[12px] bg-[#0B192C] text-white flex items-center justify-center mb-6 shadow-sm">
                <svg
                  className="w-6 h-6 text-[#48CFCB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0B192C]/10 text-[#0B192C]">
                  Klien Korporasi & HR
                </span>
                <h3 className="text-xl font-bold text-[#0B192C] font-['Plus_Jakarta_Sans'] mt-2">
                  Perusahaan & HR
                </h3>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Fasilitas kesejahteraan finansial karyawan (Employee Financial Wellness) terintegrasi tanpa menambah beban kas atau operasional HR.
              </p>

              <ul className="space-y-3 text-sm text-[#334155] mb-8 flex-1">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Zero OPEX / CAPEX:</strong> Implementasi fleksibel tanpa membebani arus kas operasional kantor.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Privasi & Kepatuhan UU PDP:</strong> HR hanya melihat metrik agregat anonim (tingkat partisipasi), bukan saldo individu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Laporan ESG Otomatis:</strong> Ekspor metrik pilar Sosial (S) dalam satu klik untuk sustainability report.</span>
                </li>
              </ul>

              <Link
                href="/register?role=perusahaan"
                className="w-full text-center py-3 bg-[#0B192C] hover:bg-[#1A5F7A] text-white font-semibold rounded-[12px] transition text-sm shadow-sm"
              >
                Daftar Akun Perusahaan
              </Link>
            </div>

            {/* Pilar 3: Customer Individu */}
            <div className="flex flex-col bg-[#F8FAFC] rounded-[16px] p-8 border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-[12px] bg-slate-200 text-[#0B192C] flex items-center justify-center mb-6 shadow-sm">
                <svg
                  className="w-6 h-6 text-[#1A5F7A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-700">
                  Pengguna Mandiri
                </span>
                <h3 className="text-xl font-bold text-[#0B192C] font-['Plus_Jakarta_Sans'] mt-2">
                  Customer Individu
                </h3>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Informasi dan modul edukasi cerdas bagi pengguna mandiri yang belum terdaftar di perusahaan mitra Orca.
              </p>

              <ul className="space-y-3 text-sm text-[#334155] mb-8 flex-1">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Akses Modul Edukasi Finansial:</strong> Pelajari literasi dasar investasi dan manajemen dana darurat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-[#48CFCB] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span><strong>Simulasi Perencanaan Finansial:</strong> Alat hitung tujuan investasi masa depan secara personal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs text-slate-500">
                    <em>Batasan Akses:</em> Fitur auto-debit payroll memerlukan kemitraan resmi antara instansi perusahaan tempat bekerja dan Orca.
                  </span>
                </li>
              </ul>

              <Link
                href="/register?role=individu"
                className="w-full text-center py-3 bg-white hover:bg-slate-50 text-[#0B192C] font-semibold rounded-[12px] border border-slate-300 transition text-sm shadow-sm"
              >
                Daftar Sebagai Individu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAYANAN & FITUR UTAMA */}
      <section id="layanan" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1A5F7A] mb-2">
              Layanan Utama Orca
            </h2>
            <p className="text-3xl font-extrabold text-[#0B192C] font-['Plus_Jakarta_Sans'] tracking-tight">
              Inovasi Finansial Terencana & Aman
            </p>
            <p className="mt-3 text-base text-[#334155]">
              Kami menghadirkan fondasi teknologi yang menghubungkan sistem HR dengan layanan keuangan mitra berlisensi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-[#1A5F7A]/10 text-[#1A5F7A] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Otomasi Payroll (Orca Stream)
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Pengaturan instruksi investasi berkala berupa nominal tetap atau persentase gaji yang tervalidasi secara transparan dan sukarela.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-[#48CFCB]/20 text-[#1A5F7A] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Instrumen RDPU Berisiko Rendah
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Fokus fase awal pada Reksa Dana Pasar Uang (RDPU) yang stabil, likuid, dan cocok untuk pembentukan dana darurat pemula.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Behavioral Guardian (Orca Sonar)
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Pendampingan edukatif saat terjadi fluktuasi pasar untuk mencegah penarikan impulsif (panic selling) tanpa membatasi hak pengguna.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B192C] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Dashboard Agregat HR (Orca Pod)
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Menyajikan metrik partisipasi program dan laporan ESG secara agregat tanpa mengekspos rincian finansial pribadi karyawan.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Privasi & Kontrol Penuh
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Karyawan memegang kendali penuh untuk mengaktifkan, mengubah persentase, atau membatalkan instruksi potong gaji kapan saja.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white rounded-[16px] border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2 font-['Plus_Jakarta_Sans']">
                Konektivitas Terbuka (API Middleware)
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Mudah dihubungkan dengan berbagai aplikasi HRIS atau bank payroll yang sudah digunakan tanpa merombak sistem yang berjalan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1A5F7A] mb-2">
              Pertanyaan Umum
            </h2>
            <p className="text-3xl font-extrabold text-[#0B192C] font-['Plus_Jakarta_Sans']">
              Frequently Asked Questions (FAQ)
            </p>
            <p className="mt-2 text-sm text-[#334155]">
              Informasi lengkap seputar mekanisme kerja, izin operasional, dan kepatuhan privasi Orca.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah Orca Wealthtech mengelola dana investasi pengguna?",
                a: "Tidak. Orca berperan sebagai middleware SaaS enabler infrastruktur teknologi yang menghubungkan payroll dengan mitra berlisensi. Dana investasi pengguna disimpan dan dikelola langsung oleh Manajer Investasi dan Bank Kustodian melalui Agen Penjual Efek Reksa Dana (APERD) resmi yang diawasi OJK.",
              },
              {
                q: "Bagaimana cara kerja potong gaji otomatis untuk investasi?",
                a: "Karyawan memberikan persetujuan opt-in secara sukarela di aplikasi. Saat tanggal gajian, sistem payroll perusahaan secara otomatis mengalokasikan nominal atau persentase yang telah dipilih ke produk Reksa Dana Pasar Uang (RDPU) mitra tanpa repot transfer manual.",
              },
              {
                q: "Apakah HR perusahaan bisa melihat saldo atau jenis investasi individu karyawan?",
                a: "Sama sekali tidak. Sesuai prinsip UU Pelindungan Data Pribadi (UU PDP), HR hanya dapat mengakses dasbor analitik agregat anonim (misalnya jumlah total partisipan program) tanpa mengetahui rincian portofolio perorangan.",
              },
              {
                q: "Apakah karyawan dapat membatalkan atau mengubah nominal investasi kapan saja?",
                a: "Ya. Karyawan memiliki kendali penuh atas akun mereka untuk menjeda, mengubah nominal setoran, atau menghentikan instruksi pemotongan payroll kapan pun sesuai batas waktu cut-off payroll bulanan.",
              },
              {
                q: "Apa itu Orca Sonar dan apakah menghalangi pencairan dana?",
                a: "Orca Sonar adalah fitur behavioral nudging yang memberikan pengingat edukatif yang menenangkan saat terjadi fluktuasi pasar. Orca Sonar tidak pernah memblokir penarikan dana atau transaksi pengguna; kontrol mutlak tetap berada di tangan pengguna.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-[16px] overflow-hidden bg-[#F8FAFC]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-[#0B192C] flex items-center justify-between hover:bg-slate-100 transition"
                >
                  <span className="font-['Plus_Jakarta_Sans'] text-base pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-slate-500 shrink-0 transform transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#334155] leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Test Error Boundary Simulator Button according to EF-01 criteria */}
          <div className="mt-12 text-center pt-8 border-t border-slate-100">
            <button
              onClick={() => setSimulatedError(true)}
              className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
            >
              Simulasi Kegagalan Koneksi (EF-01 Error Flow Test)
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (BOTTOM) */}
      <section className="bg-[#0B192C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-['Plus_Jakarta_Sans'] mb-4">
            Mulai Langkah Kesejahteraan Finansial Hari Ini
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-base mb-8">
            Daftarkan diri Anda atau daftarkan perusahaan Anda untuk mengaktifkan fasilitas investasi berkala bebas stres.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#48CFCB] hover:bg-[#3dbdb9] text-[#0B192C] font-bold rounded-[12px] transition shadow-md"
            >
              Buat Akun Baru (Register)
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-slate-400 hover:border-white text-white font-semibold rounded-[12px] transition"
            >
              Masuk (Login)
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#0B192C] border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Orca<span className="text-[#48CFCB]">Wealthtech</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Platform B2B2C SaaS Enabler yang menghubungkan sistem HRIS/payroll dengan layanan investasi reksa dana terlisensi. Membantu membangun kebiasaan finansial yang sehat secara terotomasi.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Navigasi</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#tentang" className="hover:text-white transition">
                    Tentang Platform
                  </a>
                </li>
                <li>
                  <a href="#manfaat" className="hover:text-white transition">
                    Solusi Peran
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="hover:text-white transition">
                    Layanan & Fitur
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Akses Akun</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/login" className="hover:text-white transition">
                    Masuk (PB-02)
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white transition">
                    Pendaftaran Akun (PB-04)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Orca Wealthtech. Seluruh hak cipta dilindungi.</p>
            <p>
              Penafian: Investasi mengandung risiko. Kinerja masa lalu tidak menjamin hasil di masa depan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
