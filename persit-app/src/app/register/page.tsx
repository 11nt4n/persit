"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function RegisterPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto min-h-screen">
        {/* Registration Header */}
        <div className="mb-stack-lg text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg text-text-primary mb-2">
            Pendaftaran Anggota Baru
          </h2>
          <p className="font-body-md text-body-md text-text-muted max-w-2xl">
            Silakan lengkapi formulir pendaftaran di bawah ini dengan data yang valid
            sesuai dengan dokumen resmi keanggotaan Persit Kartika Chandra Kirana.
          </p>
        </div>

        <form className="space-y-stack-lg">
          {/* Bento Grid Section: Profile & Data Pribadi */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Profile Picture Upload (Left/Top) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="glass-panel w-full p-gutter rounded-xl shadow-sm border border-border-light text-center">
                <h3 className="font-label-md text-label-md text-primary mb-stack-md text-left">
                  Foto Profil
                </h3>
                <div
                  className="relative group cursor-pointer mx-auto w-48 h-48 rounded-full bg-surface-container-low border-2 border-dashed border-outline-variant flex items-center justify-center overflow-hidden transition-all hover:border-primary-container"
                  style={{
                    backgroundImage: previewImage ? `url(${previewImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!previewImage && (
                    <div className="text-center p-4">
                      <span className="material-symbols-outlined text-outline text-4xl mb-2">
                        add_a_photo
                      </span>
                      <p className="text-xs text-text-muted">Klik untuk upload pas foto</p>
                    </div>
                  )}
                  <input
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
                <p className="mt-4 text-[11px] text-text-muted leading-relaxed italic">
                  Gunakan seragam Persit dengan latar belakang biru atau merah sesuai ketentuan satuan.
                </p>
              </div>

              <div className="mt-gutter w-full glass-panel p-gutter rounded-xl shadow-sm border border-border-light">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                  <span className="font-label-md text-label-md text-primary">
                    Verifikasi Sistem
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  Data akan diverifikasi secara otomatis melalui database pusat sebelum aktivasi akun dilakukan.
                </p>
              </div>
            </div>

            {/* Data Pribadi Form (Right/Bottom) */}
            <div className="md:col-span-8">
              <div className="bg-surface p-gutter rounded-xl shadow-sm border border-border-light">
                <div className="flex items-center gap-2 mb-stack-lg border-b border-surface-container-highest pb-3">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h3 className="font-headline-md text-headline-md text-text-primary">
                    Data Pribadi
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {/* Full Name */}
                  <div className="md:col-span-2 flex flex-col gap-1.5 group">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Nama Lengkap (Sesuai KTP)
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                      placeholder="Masukkan nama lengkap"
                      type="text"
                    />
                  </div>

                  {/* Birthplace & DOB */}
                  <div className="flex flex-col gap-1.5 group">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Tempat Lahir
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                      placeholder="Kota/Kabupaten"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 group">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Tanggal Lahir
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                      type="date"
                    />
                  </div>

                  {/* Physical Stats */}
                  <div className="flex flex-col gap-1.5 group">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Tinggi Badan (cm)
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                      placeholder="165"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 group">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Berat Badan (kg)
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                      placeholder="55"
                      type="number"
                    />
                  </div>

                  {/* Education */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-stack-md pt-4">
                    <div className="flex flex-col gap-1.5 group">
                      <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                        Pendidikan Terakhir
                      </label>
                      <select className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md">
                        <option>SMA/SMK</option>
                        <option>D3</option>
                        <option>D4/S1</option>
                        <option>S2</option>
                        <option>S3</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                        Bulan Lulus
                      </label>
                      <select className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md">
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                        Gelar Akademik
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                        placeholder="Contoh: S.Pd"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2 flex flex-col gap-1.5 group pt-4">
                    <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                      Alamat Lengkap
                    </label>
                    <textarea
                      className="w-full p-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md resize-none"
                      placeholder="Masukkan alamat domisili saat ini"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Keanggotaan Section */}
          <div className="bg-surface p-gutter rounded-xl shadow-sm border border-border-light relative overflow-hidden">
            {/* Decorative Subtle Background Element */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-stack-lg border-b border-surface-container-highest pb-3">
              <span className="material-symbols-outlined text-primary">badge</span>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                Data Keanggotaan
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* NRP Suami */}
              <div className="flex flex-col gap-1.5 group">
                <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                  NRP Suami
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 pr-10 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                    placeholder="Masukkan NRP"
                    type="text"
                  />
                  <span
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant"
                    style={{ fontSize: "18px" }}
                  >
                    search
                  </span>
                </div>
                <p className="text-[10px] text-text-muted">
                  Gunakan 8 atau 10 digit NRP anggota TNI AD.
                </p>
              </div>

              {/* Pangkat Suami */}
              <div className="flex flex-col gap-1.5 group">
                <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                  Pangkat Suami
                </label>
                <select
                  className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                  defaultValue=""
                >
                  <option disabled value="">
                    Pilih Pangkat
                  </option>
                  <optgroup label="Perwira Tinggi">
                    <option>Jenderal TNI</option>
                    <option>Letnan Jenderal TNI</option>
                    <option>Mayor Jenderal TNI</option>
                    <option>Brigadir Jenderal TNI</option>
                  </optgroup>
                  <optgroup label="Perwira Menengah">
                    <option>Kolonel</option>
                    <option>Letnan Kolonel</option>
                    <option>Mayor</option>
                  </optgroup>
                  <optgroup label="Lainnya">
                    <option>Kapten</option>
                    <option>Lettu</option>
                    <option>Letda</option>
                    <option>Bintara/Tamtama</option>
                  </optgroup>
                </select>
              </div>

              {/* Jabatan Saat Ini */}
              <div className="flex flex-col gap-1.5 group">
                <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-primary transition-colors">
                  Jabatan Saat Ini
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border border-border-light bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md"
                  placeholder="Contoh: Pasi Ops / Danramil"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="flex flex-col items-center gap-stack-lg pt-4">
            <label className="flex items-start gap-3 cursor-pointer group max-w-xl">
              <input
                className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container transition-all"
                type="checkbox"
              />
              <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Saya menyatakan bahwa data yang saya berikan adalah benar dan bersedia mematuhi
                Anggaran Dasar (AD) serta Anggaran Rumah Tangga (ART) Persit Kartika Chandra Kirana.
              </span>
            </label>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <button
                className="w-full md:w-64 h-14 bg-primary-container text-on-primary-container font-semibold rounded-full shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                type="submit"
                onClick={(e) => { e.preventDefault(); alert("Registrasi berhasil diajukan!"); }}
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  person_add
                </span>
                Register
              </button>
              <button
                className="w-full md:w-48 h-14 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all flex items-center justify-center"
                type="button"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </main>

      <BottomNav />

      {/* Atmospheric Decorations */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-secondary-fixed/30 rounded-full blur-[100px]" />
      </div>
    </>
  );
}
