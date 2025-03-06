var lang = 'EN'

async function translateIDtoEn() {

    let inputText = document.getElementById("text").value;
    if (inputText === "") {
        // validasi jika input
        alert("Please masukan text yang ingin di translate");
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

