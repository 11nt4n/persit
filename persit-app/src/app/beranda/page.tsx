"use client";

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Image from "next/image";
import { dummyBerita, dummyKegiatan } from "@/data/dummy";

export default function BerandaPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-margin-mobile md:px-margin-desktop max-w-6xl mx-auto min-h-screen space-y-12">
        {/* Sambutan Ketua Section */}
        <section className="glass-panel p-8 md:p-12 rounded-2xl border border-border-light shadow-sm flex flex-col md:flex-row items-center gap-8 bg-surface/50">
          <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full bg-surface-variant overflow-hidden border-4 border-primary-container relative">
            {/* Placeholder for Ketua Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-outline bg-surface-container-highest">
              <span className="material-symbols-outlined text-6xl">person</span>
            </div>
          </div>
          <div className="text-center md:text-left space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">Sambutan Ketua Persit KCK</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              &quot;Selamat datang di Portal Informasi Persit Kartika Chandra Kirana. Melalui platform digital ini, kami berharap dapat lebih mendekatkan diri kepada seluruh anggota dan masyarakat, meningkatkan transparansi organisasi, serta memberikan manfaat nyata dalam kegiatan sosial, budaya, dan pendidikan.&quot;
            </p>
            <p className="font-label-md text-label-md text-text-primary italic mt-4">
              - Ketua Umum Persit KCK
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Berita Terbaru */}
          <section className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-border-light pb-2">
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">article</span>
                Berita & Kegiatan Terbaru
              </h3>
              <button className="text-primary font-label-md hover:underline">Lihat Semua</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dummyBerita.map((item) => (
                <div key={item.id} className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border-light hover:shadow-md transition-shadow group cursor-pointer flex flex-col">
                  <div className="h-40 bg-surface-variant w-full overflow-hidden relative">
                    <Image 
                      src={item.gambarUrl}
                      alt={item.judul}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2 flex-grow">
                    <div className="flex items-center gap-2 text-text-muted text-xs">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      <span>{item.tanggal}</span>
                    </div>
                    <h4 className="font-headline-sm text-lg font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                      {item.judul}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kalender Kegiatan & Akses Cepat */}
          <section className="space-y-8">
            {/* Kalender Kegiatan Terdekat */}
            <div className="bg-surface rounded-xl p-6 shadow-sm border border-border-light">
              <h3 className="font-headline-md text-xl font-semibold text-text-primary flex items-center gap-2 border-b border-border-light pb-3 mb-4">
                <span className="material-symbols-outlined text-warning">event</span>
                Kegiatan Terdekat
              </h3>
              <div className="space-y-4">
                {dummyKegiatan.map((event) => (
                  <div key={event.id} className="flex gap-4 items-start p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-border-light">
                    <div className="bg-primary-container/20 text-primary font-bold rounded-lg p-2 text-center w-14 shrink-0">
                      <div className="text-sm">{event.tanggal}</div>
                      <div className="text-xs uppercase">{event.bulan}</div>
                    </div>
                    <div>
                      <h4 className="font-label-md text-text-primary line-clamp-1">{event.judul}</h4>
                      <div className="flex items-center gap-1 text-text-muted text-xs mt-1">
                        <span className="material-symbols-outlined text-[12px]">schedule</span>
                        {event.waktu}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Akses Cepat */}
            <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined" style={{ fontSize: "150px" }}>admin_panel_settings</span>
              </div>
              <h3 className="font-headline-md text-xl font-semibold mb-4 relative z-10">Akses Pengurus</h3>
              <p className="font-body-sm text-on-primary/80 mb-6 relative z-10">
                Masuk ke sistem informasi manajemen untuk mengelola data anggota, kegiatan, dan laporan.
              </p>
              <button className="w-full bg-on-primary text-primary font-label-md py-3 rounded-lg shadow-sm hover:bg-on-primary/90 transition-all active:scale-[0.98] relative z-10 flex items-center justify-center gap-2">
                <span>Login ke SIM</span>
                <span className="material-symbols-outlined text-[18px]">login</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
