export interface Berita {
  id: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  gambarUrl: string;
}

export interface Kegiatan {
  id: string;
  tanggal: string;
  bulan: string;
  judul: string;
  waktu: string;
}

export const dummyBerita: Berita[] = [
  {
    id: "1",
    tanggal: "12 Juni 2026",
    judul: "Pelaksanaan Donor Darah Serentak dalam Rangka HUT Persit",
    deskripsi: "Kegiatan donor darah yang diselenggarakan oleh Persit bekerja sama dengan PMI daerah sebagai bentuk kepedulian sosial terhadap masyarakat sekitar.",
    gambarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpU5Y05onODnhILTNXgE5-jFBX2uByAAC2J9PUVVirbnpea6UGPvy3E2hZf_nJ5eEQU9k11RAN66zINPpynbJoBTgo1CYj9UPYj9MYQSpWWSFYUdJWe0I2DF36V_383SobS63wTXwg_NG3YSPtCW_jJ-AXxDDPrR2WsS8mnVXVrnGfX6XJH5d2iVzH03anV2Lc0so0RClwUVcwCjIH2Agfd75pIx_KUzFoPBybz1Sa_Z3yqMmV7d_OMvCKRijWda8rsAL-9fc48",
  },
  {
    id: "2",
    tanggal: "05 Juni 2026",
    judul: "Kunjungan Kerja Ketua Umum ke Ranting Daerah",
    deskripsi: "Ketua Umum Persit KCK melakukan kunjungan kerja ke ranting daerah untuk meninjau langsung pelaksanaan program kerja posyandu dan pendidikan usia dini.",
    gambarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpU5Y05onODnhILTNXgE5-jFBX2uByAAC2J9PUVVirbnpea6UGPvy3E2hZf_nJ5eEQU9k11RAN66zINPpynbJoBTgo1CYj9UPYj9MYQSpWWSFYUdJWe0I2DF36V_383SobS63wTXwg_NG3YSPtCW_jJ-AXxDDPrR2WsS8mnVXVrnGfX6XJH5d2iVzH03anV2Lc0so0RClwUVcwCjIH2Agfd75pIx_KUzFoPBybz1Sa_Z3yqMmV7d_OMvCKRijWda8rsAL-9fc48",
  },
  {
    id: "3",
    tanggal: "28 Mei 2026",
    judul: "Pelatihan Keterampilan UMKM bagi Anggota Persit",
    deskripsi: "Meningkatkan kemandirian ekonomi keluarga, anggota Persit diberikan pelatihan membatik dan pembuatan kerajinan tangan dari bahan daur ulang.",
    gambarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpU5Y05onODnhILTNXgE5-jFBX2uByAAC2J9PUVVirbnpea6UGPvy3E2hZf_nJ5eEQU9k11RAN66zINPpynbJoBTgo1CYj9UPYj9MYQSpWWSFYUdJWe0I2DF36V_383SobS63wTXwg_NG3YSPtCW_jJ-AXxDDPrR2WsS8mnVXVrnGfX6XJH5d2iVzH03anV2Lc0so0RClwUVcwCjIH2Agfd75pIx_KUzFoPBybz1Sa_Z3yqMmV7d_OMvCKRijWda8rsAL-9fc48",
  },
  {
    id: "4",
    tanggal: "20 Mei 2026",
    judul: "Peringatan Hari Kebangkitan Nasional",
    deskripsi: "Upacara bersama dan anjangsana ke panti werdha sebagai wujud penghormatan atas perjuangan pahlawan dan penerapan nilai kebangsaan.",
    gambarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpU5Y05onODnhILTNXgE5-jFBX2uByAAC2J9PUVVirbnpea6UGPvy3E2hZf_nJ5eEQU9k11RAN66zINPpynbJoBTgo1CYj9UPYj9MYQSpWWSFYUdJWe0I2DF36V_383SobS63wTXwg_NG3YSPtCW_jJ-AXxDDPrR2WsS8mnVXVrnGfX6XJH5d2iVzH03anV2Lc0so0RClwUVcwCjIH2Agfd75pIx_KUzFoPBybz1Sa_Z3yqMmV7d_OMvCKRijWda8rsAL-9fc48",
  }
];

export const dummyKegiatan: Kegiatan[] = [
  { id: "e1", tanggal: "15", bulan: "Jun", judul: "Rapat Pleno Pengurus Cabang", waktu: "09:00 WIB" },
  { id: "e2", tanggal: "18", bulan: "Jun", judul: "Kunjungan Panti Asuhan Bina Mandiri", waktu: "10:00 WIB" },
  { id: "e3", tanggal: "22", bulan: "Jun", judul: "Pelatihan Keterampilan Tata Boga (UMKM)", waktu: "08:30 WIB" },
  { id: "e4", tanggal: "25", bulan: "Jun", judul: "Senam Bersama dan Cek Kesehatan Gratis", waktu: "06:30 WIB" },
  { id: "e5", tanggal: "01", bulan: "Jul", judul: "Pertemuan Rutin Bulanan", waktu: "09:00 WIB" },
];
