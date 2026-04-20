# Pertemuan 14 — GUI Ringan Octave, Callback, dan Proyek Mini Integrasi

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Gagasan GUI di Octave: dialog, progress bar, dan UI elements.

## Capaian pembelajaran
- Memahami bahwa Octave punya fasilitas GUI sederhana walaupun berbeda dari MATLAB GUIDE.
- Membuat antarmuka kecil dengan `figure`, `uicontrol`, dan callback.
- Mengintegrasikan materi fungsi, kontrol alur, dan plotting dalam mini proyek.

## Pokok materi
- Gagasan GUI di Octave: dialog, progress bar, dan UI elements.
- `uicontrol` untuk pushbutton, edit text, checkbox, slider, dan lain-lain.
- Callback berbasis function handle.
- Proyek mini: kalkulator grafik atau analisis data mini.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
function gui_sederhana ()
  f = figure ("position", [200 200 400 250], "name", "GUI Sederhana");

  uicontrol (f, "style", "text", ...
                "string", "Masukkan nilai x:", ...
                "position", [20 180 120 30]);

  hEdit = uicontrol (f, "style", "edit", ...
                        "string", "0", ...
                        "position", [150 180 100 30]);

  hOut = uicontrol (f, "style", "text", ...
                       "string", "Hasil: -", ...
                       "position", [20 120 230 30]);

  uicontrol (f, "style", "pushbutton", ...
                "string", "Hitung sin(x)", ...
                "position", [20 60 120 40], ...
                "callback", @(h, e) hitung_sin(hEdit, hOut));
endfunction

function hitung_sin (hEdit, hOut)
  x = str2double(get(hEdit, "string"));
  y = sin(x);
  set(hOut, "string", sprintf("Hasil: %.6f", y));
endfunction
```

## Ide proyek mini
- Kalkulator luas bangun datar
- Plotter fungsi satu variabel
- Ringkasan statistik data acak
- Konversi satuan dengan GUI kecil

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat GUI kecil dengan satu kotak input dan satu tombol.
2. Saat tombol ditekan, tampilkan hasil perhitungan pada label.
3. Tambahkan satu tombol kedua untuk membersihkan input.
4. Jika waktu cukup, buat tombol yang memunculkan grafik sederhana.

## Proyek penutup
Gabungkan minimal 3 kemampuan:
- input pengguna
- keputusan atau perulangan
- fungsi buatan sendiri atau plotting

## Catatan pengajar
Bagian PDF tentang GUIDE MATLAB tidak dipindahkan mentah-mentah, karena di Octave fokus GUI-nya berbeda. Sesi ini sengaja diarahkan ke GUI ringan dan callback yang realistis untuk praktikum dasar.

## Referensi utama

- PDF modul: GUIDE MATLAB, hal. 41–44, diadaptasi menjadi GUI ringan khas Octave.
- Manual GNU Octave (tautan bab terkait):
  - [GUI Development](https://docs.octave.org/latest/GUI-Development.html)
  - [UI Elements](https://docs.octave.org/latest/UI-Elements.html)
  - [Callbacks](https://docs.octave.org/latest/Callbacks.html)
