# PRD: Orca Wealthtech

> **Status:** Draft v1 — Sprint 1 (Discovery dan fondasi)  
> **Jenis produk:** B2B2C SaaS Enabler / Embedded Finance  
> **Dokumen:** `docs/prd.md`  
> **Sumber utama:** Paper *Orca Wealthtech: Inovasi Agregator B2B2C dan Behavioral Guardian Melalui Pendekatan Embedded Finance* dan panduan proyek Scrum.  
> **Catatan:** Orca Wealthtech dalam paper merupakan rancangan produk. PRD ini mendefinisikan kebutuhan MVP untuk prototipe proyek, bukan menyatakan bahwa integrasi, izin, kemitraan, atau transaksi riil telah tersedia.

## 1. Ringkasan

Orca Wealthtech adalah platform infrastruktur teknologi finansial dengan model B2B2C SaaS Enabler yang menghubungkan sistem HRIS/payroll perusahaan dengan layanan investasi dari mitra keuangan berizin. Karyawan dapat secara sukarela mengatur investasi berkala melalui payroll ke Reksa Dana Pasar Uang (RDPU), memantau tujuan dan status investasinya, serta memperoleh pengingat edukatif melalui Orca Sonar. Orca berperan sebagai middleware penghubung data dan instruksi, bukan sebagai pengelola dana atau portofolio investasi karyawan.

Produk memiliki dua kelompok pengguna utama: karyawan sebagai pengguna akhir dan perusahaan/HR sebagai klien korporasi. Mitra APERD, manajer investasi, bank, serta penyedia HRIS merupakan pihak eksternal dalam ekosistem.

## 2. Problem Statement

Karyawan yang ingin membangun kebiasaan investasi membutuhkan cara menyisihkan penghasilan secara konsisten karena transfer manual, friksi administrasi, dan kecenderungan menunda dapat membuat investasi tidak rutin.

Karyawan investor pemula membutuhkan informasi risiko dan konteks edukatif ketika pasar berfluktuasi karena keputusan emosional, seperti panic selling, dapat mengganggu rencana keuangan jangka panjang.

Perusahaan membutuhkan sarana employee financial wellness yang terintegrasi dengan proses HR dan dapat dievaluasi secara agregat karena perusahaan tidak seharusnya mengelola portofolio investasi individual karyawan.

Mitra investasi membutuhkan kanal distribusi B2B2C yang terhubung dengan ekosistem perusahaan, sementara proses akuisisi dan onboarding pengguna tetap harus mengikuti ketentuan mitra berizin.

## 3. Persona

Detail demografis persona perlu divalidasi melalui riset pengguna dan dicatat lebih lanjut di `personas.md`. Persona peran awal untuk PRD:

### Persona P-01 — Karyawan / Investor Pemula
- Memiliki penghasilan rutin melalui perusahaan yang terhubung dengan Orca.
- Ingin mulai berinvestasi secara terencana dengan nominal tetap atau persentase kecil dari gaji.
- Membutuhkan proses yang transparan, persetujuan yang jelas, informasi risiko, dan kendali untuk mengubah atau menghentikan instruksi.
- Menggunakan aplikasi untuk mengatur setoran, melihat status investasi, dan memantau tujuan finansial.

### Persona P-02 — HR / Administrator Perusahaan
- Mengelola program employee benefit dan financial wellness.
- Membutuhkan integrasi payroll yang dapat diandalkan dan ringkasan partisipasi program.
- Hanya boleh melihat informasi agregat yang tidak mengungkap saldo, pilihan produk, atau identitas finansial individual karyawan.

### Persona P-03 — Mitra Keuangan / APERD
- Menyediakan proses pembukaan akun, e-KYC, informasi produk, dan pemrosesan transaksi investasi sesuai kewenangannya.
- Membutuhkan instruksi dan data yang terotorisasi, lengkap, serta dapat direkonsiliasi.

## 4. Tujuan dan Metrik

### Tujuan produk
1. Memungkinkan karyawan mengatur instruksi investasi berkala berbasis payroll secara sukarela dan transparan.
2. Mengurangi langkah manual dalam proses investasi rutin tanpa menghilangkan persetujuan dan kontrol pengguna.
3. Menyediakan informasi status instruksi dan investasi yang mudah dipahami.
4. Membantu karyawan mempertahankan keputusan yang selaras dengan tujuan melalui edukasi dan pengingat non-direktif.
5. Memberikan HR gambaran agregat mengenai partisipasi program financial wellness tanpa membuka data individual.

### Metrik keberhasilan
Target numerik belum ditetapkan dalam paper dan harus ditentukan setelah baseline serta uji pengguna. Metrik yang akan diukur:
- **Activation rate:** jumlah karyawan yang menyelesaikan onboarding dan mengaktifkan instruksi investasi dibagi jumlah karyawan yang memulai onboarding.
- **Opt-in conversion:** jumlah pengguna yang memberi persetujuan aktif dibagi jumlah pengguna yang memenuhi syarat.
- **Instruction success rate:** persentase instruksi payroll yang berhasil diterima dan diproses mitra dibanding seluruh instruksi yang dijadwalkan.
- **Recurring contribution consistency:** persentase pengguna aktif yang berhasil menjalankan setoran sesuai jadwal.
- **KYC completion rate:** persentase pengguna yang menyelesaikan e-KYC pada mitra.
- **Task completion:** persentase responden uji yang dapat mengatur instruksi investasi dan menemukan statusnya tanpa bantuan.
- **Risk comprehension:** jumlah responden uji yang dapat menjelaskan bahwa produk investasi memiliki risiko dan siapa mitra penyedia produk.
- **HR dashboard usefulness:** umpan balik HR mengenai keterbacaan dan kegunaan laporan agregat.
- **System reliability:** tingkat keberhasilan API, jumlah kegagalan sinkronisasi, dan waktu pemulihan gangguan.

Kriteria uji awal yang diusulkan untuk prototipe: minimal 4 dari 5 responden uji dapat menyelesaikan alur pengaturan instruksi pada prototipe tanpa bantuan. Angka ini adalah target pengujian usability awal, bukan hasil yang sudah dicapai.

## 5. Scope MVP

### Masuk dalam MVP
- Login dan onboarding pengguna karyawan pada lingkungan prototipe.
- Informasi perusahaan/tenant dan simulasi koneksi HRIS/payroll.
- Penjelasan produk RDPU, risiko, pihak mitra, dan alur dana.
- Persetujuan opt-in yang tercatat sebelum instruksi payroll dibuat.
- Pengaturan instruksi investasi berkala berupa nominal tetap atau persentase gaji (dalam prototipe dapat menggunakan data simulasi).
- Validasi instruksi, tampilan jadwal, status, dan riwayat instruksi.
- Tampilan ringkasan portofolio/status investasi dari data simulasi atau data sandbox mitra jika tersedia.
- Modul edukasi dan pengingat Orca Sonar yang bersifat informatif, opsional, dan tidak memberi rekomendasi beli/jual produk tertentu.
- Dashboard HR yang hanya menampilkan data agregat dan anonim.
- Penanganan kondisi gagal, tertunda, atau tidak tersinkron pada alur simulasi.
- Kontrol pengguna untuk mengubah atau menghentikan instruksi sesuai status dan ketentuan mitra.

### Tidak masuk dalam MVP
- Pemrosesan uang atau transaksi investasi riil apabila belum ada persetujuan, integrasi, dan kesiapan mitra berizin.
- Orca bertindak sebagai APERD, manajer investasi, bank, kustodian, penasihat investasi, atau pengelola dana.
- Penyimpanan dana pengguna oleh Orca.
- Penawaran instrumen selain RDPU pada fase awal.
- Rekomendasi investasi personal, prediksi harga, atau keputusan jual/beli otomatis oleh AI.
- Pemblokiran penarikan atau transaksi pengguna oleh Orca Sonar.
- KYC riil yang dilakukan sendiri oleh Orca; proses verifikasi dilakukan oleh mitra berwenang.
- Integrasi produksi ke seluruh HRIS, bank, APERD, atau payroll perusahaan.
- Fitur pinjaman, kasbon, Earned Wage Access (EWA), atau fasilitas kredit.
- Pelaporan individual kepada HR atau atasan.

## 6. Fitur dan Prioritas

Prioritas menggunakan MoSCoW. Daftar ini adalah prioritas kebutuhan MVP, bukan klaim bahwa fitur telah dibangun.

### Must Have
- **F-01 — Onboarding dan autentikasi:** karyawan dapat masuk dan melihat konteks perusahaan yang terhubung.
- **F-02 — Informasi produk dan mitra:** pengguna dapat melihat informasi RDPU, risiko, biaya yang tersedia, identitas mitra, dan penjelasan alur dana.
- **F-03 — Persetujuan opt-in:** pengguna memberikan persetujuan eksplisit sebelum instruksi pemotongan payroll dibuat.
- **F-04 — Orca Stream / pengaturan investasi rutin:** pengguna mengatur nominal tetap atau persentase gaji serta jadwal kontribusi.
- **F-05 — Validasi dan pengelolaan instruksi:** sistem memvalidasi input dan memungkinkan pengguna meninjau, mengubah, atau menghentikan instruksi sesuai statusnya.
- **F-06 — Status dan riwayat:** pengguna melihat status instruksi dan riwayat aktivitas, termasuk kegagalan atau penundaan.
- **F-07 — Ringkasan investasi:** pengguna melihat ringkasan portofolio/status investasi yang bersumber dari data mitra atau data simulasi.
- **F-08 — Orca Shield sebagai baseline keamanan:** kontrol akses berbasis peran, perlindungan data, pencatatan aktivitas penting, dan pembatasan akses.
- **F-09 — Penanganan integrasi:** sistem menampilkan status koneksi dan pesan yang jelas ketika API HRIS atau mitra tidak tersedia.

### Should Have
- **F-10 — Orca Sonar:** pengingat tujuan dan edukasi perilaku finansial yang kontekstual serta dapat diatur pengguna.
- **F-11 — Orca Goals:** pengguna membuat tujuan seperti dana darurat, pendidikan, atau pensiun dan melihat progresnya.
- **F-12 — Orca Pod:** HR melihat dashboard agregat partisipasi dan indikator program financial wellness tanpa data finansial individual.
- **F-13 — Notifikasi:** pemberitahuan tentang jadwal, status instruksi, kegagalan sinkronisasi, dan informasi edukatif.

### Could Have
- Ekspor laporan agregat Orca Pod untuk kebutuhan evaluasi program perusahaan.
- Pengaturan preferensi frekuensi dan kanal notifikasi.
- Dukungan beberapa penyedia HRIS dan mitra APERD setelah integrasi awal tervalidasi.

### Won't Have (untuk versi ini)
- Transaksi riil end-to-end sebelum kesiapan hukum, operasional, keamanan, dan mitra dikonfirmasi.
- Instrumen investasi selain RDPU.
- Rekomendasi beli/jual atau pengelolaan portofolio otomatis.
- Akses HR ke saldo atau detail investasi per karyawan.

## 7. Aturan Bisnis

- **BR-01 — Keikutsertaan sukarela:** status karyawan atau keikutsertaan perusahaan tidak otomatis mengaktifkan investasi; karyawan harus melakukan opt-in secara eksplisit.
- **BR-02 — Persetujuan terinformasi:** sebelum menyetujui instruksi, pengguna harus dapat melihat nominal/persentase, jadwal, tujuan, pihak pemroses, informasi biaya dan risiko yang tersedia, serta cara mengubah atau menghentikan instruksi.
- **BR-03 — Tidak ada instruksi tanpa persetujuan:** sistem tidak boleh membuat atau mengirim instruksi payroll sebelum persetujuan pengguna tercatat.
- **BR-04 — Batas peran Orca:** Orca hanya memproses dan meneruskan data/instruksi sesuai kewenangannya; dana dan aktivitas investasi ditangani oleh pihak keuangan berizin.
- **BR-05 — Pemisahan aliran data dan dana:** Orca tidak menampung dana investasi pengguna. Aliran dana diproses oleh bank dan mitra keuangan sesuai struktur kerja sama.
- **BR-06 — Verifikasi pengguna:** proses KYC/e-KYC dan penetapan profil nasabah dilakukan oleh mitra yang berwenang, bukan diasumsikan telah dipenuhi hanya karena pengguna terdaftar di HRIS.
- **BR-07 — Fokus instrumen awal:** produk investasi pada fase awal dibatasi pada RDPU sebagaimana rancangan paper.
- **BR-08 — Validasi nominal:** nominal kontribusi harus berupa angka positif dan mengikuti batas minimum/maksimum yang ditetapkan mitra serta konfigurasi program. Nilai batas belum ditentukan dalam paper.
- **BR-09 — Perubahan instruksi:** perubahan atau penghentian instruksi harus melalui autentikasi dan menghasilkan catatan waktu serta status baru.
- **BR-10 — Kegagalan transaksi:** instruksi gagal atau tertunda harus ditandai secara jelas; sistem tidak boleh menampilkan status berhasil sebelum menerima konfirmasi dari sistem mitra.
- **BR-11 — Hak pengguna:** pengingat atau jeda refleksi Orca Sonar bersifat opsional dan tidak boleh menghalangi hak transaksi maupun pencairan yang sah.
- **BR-12 — Batas Orca Sonar:** Sonar hanya memberi edukasi umum, pengingat tujuan, dan refleksi perilaku; Sonar tidak memprediksi harga atau memberi rekomendasi spesifik untuk membeli/menjual efek.
- **BR-13 — Privasi dashboard HR:** Orca Pod hanya menampilkan data agregat yang telah melalui pengendalian anonimisasi; HR tidak melihat saldo, pilihan investasi, atau identitas finansial individual.
- **BR-14 — Minimalisasi data:** sistem hanya mengumpulkan dan memproses data yang diperlukan untuk fungsi, persetujuan, keamanan, dan kewajiban mitra.
- **BR-15 — Jejak audit:** persetujuan, perubahan instruksi, pengiriman instruksi, respons mitra, dan perubahan status harus dapat ditelusuri untuk rekonsiliasi serta penanganan pengaduan.

## 8. Kebutuhan Non-Fungsional

### Keamanan dan privasi
- Data sensitif harus dilindungi saat dikirim dan disimpan menggunakan mekanisme keamanan yang sesuai.
- Password tidak boleh disimpan dalam bentuk teks biasa.
- Sistem menerapkan autentikasi dan otorisasi berdasarkan peran karyawan, HR, administrator, dan integrasi.
- Akses terhadap data dibatasi berdasarkan prinsip least privilege.
- Aktivitas penting dicatat dalam audit log tanpa mengekspos rahasia autentikasi.
- Data yang ditampilkan kepada HR harus agregat dan tidak memungkinkan identifikasi kembali individu.
- Persetujuan pengguna harus dapat dibuktikan dan riwayatnya dapat ditelusuri.

### Keandalan dan integrasi
- Kegagalan API tidak boleh menghasilkan status transaksi sukses palsu.
- Sistem harus menangani timeout, respons duplikat, dan percobaan ulang secara aman.
- Setiap instruksi memiliki ID unik untuk membantu rekonsiliasi dan mencegah pemrosesan ganda.
- Status sinkronisasi HRIS dan mitra ditampilkan dengan jelas.
- Integrasi harus mengikuti standar dan ketentuan yang relevan berdasarkan klasifikasi layanan serta peran masing-masing pihak.

### Usability dan aksesibilitas
- Alur utama pengaturan instruksi harus dapat dipahami pengguna pemula.
- Nominal, jadwal, risiko, biaya yang tersedia, status, dan pihak penerima dana ditampilkan dengan bahasa yang jelas.
- Antarmuka responsif untuk perangkat mobile dan desktop.
- Pesan kesalahan harus menjelaskan masalah dan tindakan berikutnya.

### Kinerja dan operasional
- Target waktu respons, ketersediaan layanan, kapasitas, dan recovery time ditetapkan setelah baseline teknis dan kebutuhan mitra diketahui.
- Sistem menyediakan pemantauan integrasi dan mekanisme pelaporan gangguan.
- Data transaksi dan instruksi harus konsisten antara catatan Orca dan konfirmasi mitra.

## 9. Asumsi dan Risiko

### Asumsi
- Perusahaan bersedia menjadi kanal distribusi program financial wellness dan menyediakan akses integrasi HRIS/payroll sesuai persetujuan.
- Karyawan memiliki akses ke perangkat dan bersedia mengikuti program secara sukarela.
- APERD/mitra keuangan berizin menyediakan API atau mekanisme pertukaran data yang diperlukan.
- Mitra berwenang menjalankan pembukaan akun, e-KYC, penyediaan produk, dan pemrosesan investasi.
- RDPU menjadi instrumen awal sesuai rancangan paper.
- Prototipe akademik dapat menggunakan data dummy atau sandbox apabila integrasi produksi belum tersedia.

### Risiko dan mitigasi awal
- **R-01 — Kepatuhan dan batas aktivitas:** terdapat risiko peran Orca ditafsirkan sebagai aktivitas berizin yang tidak sesuai. Mitigasi: pemetaan peran dan tanggung jawab, kontrak/SLA, serta opini hukum independen sebelum peluncuran.
- **R-02 — Perlindungan data dan serangan siber:** data payroll dan finansial bersifat sensitif. Mitigasi: minimisasi data, enkripsi, kontrol akses, audit log, pengujian keamanan, dan respons insiden.
- **R-03 — Ketergantungan API pihak ketiga:** gangguan HRIS, bank, atau APERD dapat menghambat instruksi. Mitigasi: pemantauan, status transaksi yang transparan, rekonsiliasi, prosedur retry, dan SLA.
- **R-04 — Persetujuan payroll tidak jelas:** pengguna dapat merasa gajinya dipotong tanpa persetujuan. Mitigasi: opt-in eksplisit, ringkasan instruksi sebelum konfirmasi, bukti persetujuan, dan kontrol perubahan/penghentian.
- **R-05 — Salah paham risiko investasi:** pengguna dapat menganggap RDPU bebas risiko. Mitigasi: tampilkan penjelasan risiko dan identitas mitra; jangan menjanjikan keuntungan atau menyebut modal bebas risiko.
- **R-06 — Intervensi Sonar berlebihan:** pengingat dapat dianggap sebagai rekomendasi investasi atau menghalangi pencairan. Mitigasi: batasi pada edukasi umum, buat opsional, dan jangan memblokir hak transaksi.
- **R-07 — Kebocoran informasi karyawan melalui Orca Pod:** data agregat berpotensi mengidentifikasi individu pada kelompok kecil. Mitigasi: ambang agregasi minimum, anonimisasi yang diuji, dan pembatasan ekspor.
- **R-08 — Adopsi perusahaan dan karyawan belum tervalidasi:** proposisi nilai, retensi, dan efisiensi akuisisi belum dibuktikan melalui pilot. Mitigasi: validasi kebutuhan HR, uji usability, pilot terbatas, dan ukur metrik produk.
- **R-09 — Kesiapan mitra dan sandbox:** status kerja sama, integrasi, dan proses regulatory sandbox tidak boleh diasumsikan telah final. Mitigasi: verifikasi status secara tertulis sebelum transaksi riil atau klaim pemasaran.

## Catatan Pengembangan Scrum

- PRD ini merupakan versi awal dan harus ditinjau kembali pada setiap sprint.
- Perubahan kebutuhan, scope, aturan bisnis, dan prioritas harus dicatat melalui commit GitHub.
- Dokumen turunan yang disarankan: `personas.md`, `user-stories.md`, `user-flow.md`, `database.md`, `success-criteria`, dan `test-case`.
- Setiap fitur Must Have perlu dipecah menjadi user story dengan acceptance criteria Given–When–Then.
- Nilai nominal minimum/maksimum, target SLA, target konversi, dan target bisnis yang belum memiliki dasar validasi harus diputuskan bersama Product Owner, mitra, dan hasil pengujian; jangan mengisinya dengan angka asumsi tanpa penandaan.
