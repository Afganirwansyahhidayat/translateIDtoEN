# Translate Indonesia to English

Proyek ini adalah aplikasi web sederhana untuk menerjemahkan teks dari Bahasa Indonesia ke Bahasa Inggris menggunakan API dari MyMemory Translated.

## Fitur
- Input teks dalam Bahasa Indonesia
- Tombol untuk menerjemahkan teks
- Menampilkan hasil terjemahan

## Teknologi yang Digunakan
- **HTML**: Struktur halaman
- **CSS**: Styling halaman (terhubung dengan `style.css`)
- **JavaScript**: Menggunakan `fetch` untuk mengambil data dari API (terdapat pada `main.js`)
- **API**: Menggunakan MyMemory Translated API

## Cara Menggunakan
1. Buka file `index.html` di browser.
2. Masukkan teks dalam Bahasa Indonesia ke dalam input field.
3. Klik tombol **Translate**.
4. Hasil terjemahan akan ditampilkan di bawah tombol.

## Struktur Proyek
```
📂 project-folder
│── 📄 index.html      # Halaman utama
│── 📄 style.css       # Styling halaman (tidak disertakan dalam kode di atas)
│── 📄 main.js         # Skrip utama untuk menerjemahkan teks
```

## Kode Utama
### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translate Indonesia to English</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
</head>
<body>
    <div class="container">
        <h2>Translate Indonesia to English</h2>
        <input type="text" id="text" placeholder="Masukkan teks yang mau di translate">
        <button onclick="translateIDtoEn()">Translate</button>
        <p id="translate"></p>
        <p class="footer">© Afgan Irwansyah Hidayat</p>
    </div>
</body>
</html>
```

### `main.js`
```javascript
var lang = 'EN';

async function translateIDtoEn() {
    let inputText = document.getElementById("text").value;
    if (inputText === "") {
        alert("Please masukkan text yang ingin di translate");
        return;
    }

    const apiUrl = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=id|en`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const translatedText = data.responseData.translatedText;
            document.getElementById("translate").textContent = translatedText;
        } else {
            console.error("Gagal membuat untuk di translate");
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}
```

## Lisensi
Hak Cipta © 2025 Afgan Irwansyah Hidayat. Semua Hak Dilindungi.
