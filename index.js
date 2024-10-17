const dataKata = [
    ["anjing", "kucing"],
    ["laut", "danau"],
    ["mobil", "motor"],
    ["sepeda", "skuter"],
    ["rumah", "apartemen"],
    ["burung", "kelelawar"],
    ["kopi", "teh"],
    ["es", "salju"],
    ["emas", "perak"],
    ["buku", "majalah"],
    ["gunung", "bukit"],
    ["lampu", "lilin"],
    ["sepatu", "sandal"],
    ["jaket", "sweater"],
    ["sungai", "kolam"],
    ["jendela", "pintu"],
    ["piring", "mangkuk"],
    ["garpu", "sendok"],
    ["topi", "helm"],
    ["gelas", "cangkir"],
    ["batu", "kerikil"],
    ["pisau", "gunting"],
    ["jam", "kalender"],
    ["kue", "roti"],
    ["gitar", "piano"],
    ["film", "serial"],
    ["rusa", "kambing"],
    ["padi", "jagung"],
    ["angin", "badai"],
    ["bulan", "bintang"],
    ["kunci", "gembok"],
    ["rak", "lemari"],
    ["kupu-kupu", "lebah"],
    ["kamera", "telepon"],
    ["kasur", "sofa"],
    ["pulpen", "pensil"],
    ["bunga", "rumput"],
    ["ember", "galon"],
    ["langit", "awan"],
    ["pasir", "kerikil"],
    ["dinding", "tembok"],
    ["ular", "buaya"],
    ["sepak bola", "bola basket"],
    ["gambar", "foto"],
    ["kertas", "kain"],
    ["api", "bara"],
    ["layar", "papan tulis"],
    ["tas", "ransel"],
    ["sapu", "pel"],
    ["panci", "wajan"],
    ["laptop", "komputer"],
    ["radio", "televisi"],
    ["kaca", "cermin"],
    ["kelinci", "hamster"],
    ["salju", "hujan"],
    ["jari", "jempol"],
    ["rantai", "tali"],
    ["gelombang", "arus"],
    ["bel", "sirene"],
    ["kota", "desa"],
    ["tenda", "gubuk"],
    ["kuda", "keledai"],
    ["kue tar", "puding"],
    ["paku", "sekrup"],
    ["roti", "donat"],
    ["lukisan", "patung"],
    ["jalan", "gang"],
    ["jembatan", "terowongan"],
    ["udara", "oksigen"],
    ["kulkas", "microwave"],
    ["mangga", "jeruk"],
    ["pohon", "tumbuhan"],
    ["kertas tisu", "tisu basah"],
    ["senter", "lampion"],
    ["batu bata", "beton"],
    ["tali sepatu", "ikat pinggang"],
    ["nanas", "semangka"],
    ["kecap", "saus"],
    ["serigala", "singa"],
    ["putih", "hitam"],
    ["listrik", "baterai"],
    ["mie", "pasta"],
    ["sawah", "ladang"],
    ["padi", "gandum"],
    ["tomat", "mentimun"],
    ["kucing besar", "macan tutul"],
    ["jamur", "lumut"],
    ["koper", "ransel"],
    ["telinga", "hidung"],
    ["tangan", "kaki"],
    ["kunci inggris", "obeng"],
    ["jendela", "ventilasi"],
    ["obat", "suplemen"],
    ["tas kerja", "tas jinjing"],
    ["udara segar", "asap"],
    ["sepeda motor", "sepeda listrik"],
    ["kaki lima", "restoran"],
    ["susu", "yogurt"],
    ["kue kering", "kue basah"],
    ["gelang", "cincin"],
    ["harimau", "macan"],
    ["balon", "layang-layang"],
    ["bintang", "planet"],
    ["kereta", "pesawat"],
    ["sabun", "shampoo"],
    ["kaca mata", "lensa kontak"],
    ["permata", "mutiara"],
    ["tinta", "cat"],
    ["atap", "genteng"],
    ["sikat gigi", "pasta gigi"],
    ["piring", "gelas"],
    ["terompet", "seruling"],
    ["dadu", "kartu"],
    ["dompet", "kantong"],
    ["tikus", "kelelawar"],
    ["lapangan", "stadion"],
    ["sumpit", "sendok"],
    ["penghapus", "pena"],
    ["lemari", "laci"],
    ["sapu tangan", "kain lap"],
    ["kereta bayi", "kursi roda"],
    ["balok", "batang"],
    ["penggaris", "kompas"],
    ["sabuk", "ikat kepala"],
    ["kursi", "meja"],
    ["layar sentuh", "keyboard"],
    ["buah naga", "sirsak"],
    ["piring terbang", "balon udara"],
    ["sirsak", "belimbing"],
    ["kapal", "sampan"],
    ["lukisan", "grafiti"],
    ["semangka", "melon"],
    ["hutan", "rimba"],
    ["pasar", "mall"],
    ["krayon", "pensil warna"],
    ["gula", "garam"],
    ["pisang", "mangga"],
    ["gitar bass", "gitar akustik"],
    ["batu kali", "batu bata"],
    ["kayu", "bambu"],
    ["stiker", "poster"],
    ["surat", "paket"],
    ["jam tangan", "jam dinding"],
    ["tongkat", "palu"],
    ["obor", "lampu"],
    ["selimut", "bantal"],
    ["lantai", "ubin"],
    ["kardus", "kertas karton"],
    ["topeng", "helm"],
    ["selang", "pipa"],
    ["obeng", "palu"],
    ["tali jemuran", "tali tambang"],
    ["hujan deras", "gerimis"],
    ["kapal selam", "perahu"],
    ["kemeja", "kaos"],
    ["baret", "topi koboi"],
    ["peti", "lemari es"],
    ["keranjang", "ember"],
    ["susu bubuk", "susu cair"],
    ["sendal jepit", "sepatu bot"],
    ["permukaan", "dasar"],
    ["gedung", "rumah"],
    ["bekas", "baru"],
    ["kering", "basah"],
    ["keringat", "air mata"],
    ["daging sapi", "daging kambing"],
    ["popcorn", "keripik"],
    ["gandum", "jagung"],
    ["karpet", "ubin"],
    ["teratai", "anggrek"],
    ["rambut pirang", "rambut hitam"],
    ["bubur", "sup"],
    ["udang", "lobster"],
    ["papan selancar", "perahu kano"],
    ["sarung tangan", "kaus kaki"],
    ["jaket kulit", "jaket jeans"],
    ["tikar", "karpet"],
    ["daun", "rumput"],
    ["kaki meja", "kaki kursi"],
    ["seragam", "baju olahraga"],
    ["sandal hotel", "sepatu olahraga"],
    ["jam meja", "jam tangan"],
    ["kolam renang", "sungai"],
    ["sepeda gunung", "sepeda balap"],
    ["kerudung", "topi"],
    ["burung hantu", "elang"],
    ["roti tawar", "roti gandum"],
    ["kemoceng", "pengki"],
    ["pengukur suhu", "pengukur tekanan"],
    ["kipas angin", "AC"],
    ["biola", "cello"],
    ["handuk", "serbet"],
    ["lemari es", "pendingin ruangan"],
    ["lilin aroma", "lilin biasa"],
    ["tisu toilet", "tisu wajah"],
    ["buku komik", "novel"],
    ["bekicot", "siput"],
    ["motor balap", "motor matic"],
    ["kompor", "oven"],
    ["uang receh", "uang kertas"],
    ["bak mandi", "shower"],
    ["kubis", "sawi"],
    ["sayap ayam", "paha ayam"],
    ["rusa kutub", "kambing gunung"],
    ["kapur", "spidol"],
    ["cermin", "jendela"],
    ["layang-layang", "balon"],
    ["buah apel", "buah pir"],
    ["suling", "terompet"],
    ["selai", "mentega"],
    ["tali sepatu", "tali tambang"],
    ["cat air", "cat minyak"],
    ["perban", "plester"],
    ["kompor listrik", "kompor gas"],
    ["kantong plastik", "kantong kertas"],
    ["spatula", "sutil"],
    ["nanas", "pepaya"],
    ["lampu meja", "lampu gantung"],
    ["keju", "susu"],
    ["kapal pesiar", "kapal nelayan"],
    ["bedak", "lipstik"],
    ["beras", "gandum"],
    ["ikan paus", "ikan hiu"],
    ["sayur kangkung", "sayur bayam"],
    ["sabun cair", "sabun batangan"],
    ["buah kelapa", "buah mangga"],
    ["pohon kelapa", "pohon pisang"],
    ["keripik kentang", "keripik singkong"],
    ["seruling", "biola"],
    ["cokelat", "permen"],
    ["topi cowboy", "topi fedora"],
    ["kapak", "gergaji"],
    ["es krim", "puding"],
    ["susu kedelai", "susu sapi"],
    ["tikar bambu", "karpet wol"],
    ["penggaris besi", "penggaris plastik"],
    ["ember plastik", "ember logam"],
    ["rambut panjang", "rambut pendek"],
    ["cendol", "es buah"],
    ["daun salam", "daun pandan"],
    ["meja kaca", "meja kayu"],
    ["jaket denim", "jaket kulit"],
    ["es batu", "es serut"],
    ["kaca spion", "kaca mobil"],
    ["perahu dayung", "perahu layar"],
    ["kain batik", "kain sutra"],
    ["pisau dapur", "pisau cukur"],
    ["kaos oblong", "kaos kerah"],
    ["kulit jeruk", "kulit pisang"],
    ["buah alpukat", "buah melon"],
    ["kursi goyang", "kursi malas"],
    ["kertas koran", "kertas majalah"],
    ["kerupuk", "keripik"],
    ["botol kaca", "botol plastik"],
    ["kardus besar", "kardus kecil"],
    ["meja bundar", "meja persegi"],
    ["bunga mawar", "bunga melati"],
    ["telinga kiri", "telinga kanan"],
    ["tombol power", "tombol reset"],
    ["buah pisang", "buah anggur"],
    ["komik manga", "komik barat"],
    ["sendal jepit", "sendal hotel"],
    ["bantal bulu", "bantal busa"],
    ["buku harian", "buku catatan"],
    ["pohon jati", "pohon mahoni"],
    ["kopi hitam", "kopi susu"],
    ["sepatu olahraga", "sepatu kasual"],
    ["dompet kulit", "dompet kain"],
    ["kursi lipat", "kursi plastik"],
    ["tas kanvas", "tas nilon"],
    ["payung hitam", "payung putih"],
    ["sisir kayu", "sisir plastik"],
    ["buah semangka", "buah sirsak"],
    ["baju batik", "baju bordir"],
    ["lem kertas", "lem kayu"],
    ["roda mobil", "roda sepeda"],
    ["pohon anggur", "pohon apel"],
    ["kapal kayu", "kapal besi"],
    ["pot bunga", "vas bunga"],
    ["jaket parasut", "jaket tebal"],
    ["jam pasir", "jam dinding"],
    ["kacamata hitam", "kacamata baca"],
    ["mobil jeep", "mobil sedan"],
    ["ikan gurame", "ikan lele"],
    ["sabuk kulit", "sabuk kain"],
    ["buku gambar", "buku mewarnai"],
    ["ranting pohon", "daun pohon"],
    ["lampu neon", "lampu bohlam"],
    ["handuk besar", "handuk kecil"],
    ["bantal kursi", "bantal tidur"],
    ["kemeja lengan panjang", "kemeja lengan pendek"],
    ["koin emas", "koin perak"],
    ["tas jinjing", "tas punggung"],
    ["kompor mini", "kompor besar"],
    ["sapu lidi", "sapu ijuk"],
    ["serutan pensil", "runcing pensil"],
    ["kertas minyak", "kertas tisu"],
    ["buku cerita", "buku pelajaran"],
    ["bunga matahari", "bunga lili"],
    ["penggorengan", "panci kukus"],
    ["buku resep", "buku novel"],
    ["kompas magnet", "kompas digital"],
    ["helm sepeda", "helm motor"],
    ["jaring ikan", "jaring bola"],
    ["komputer desktop", "laptop"]
];

const kataElement = document.getElementById("kata");
let dataKataSelected = getRandomKata();
let kataSelected = dataKataSelected[0];

function getRandomKata() {
    const randomIndex = Math.floor(Math.random() * dataKata.length);
    return dataKata[randomIndex];
}

function kataSelectedToggle() {
    kataSelected = kataSelected === dataKataSelected[0] ? dataKataSelected[1] : dataKataSelected[0];
    kataElement.innerHTML = kataSelected;
}

function generate() {
    dataKataSelected = getRandomKata();
    kataSelectedToggle();
}

async function showMessages() {
    await Swal.fire("Selamat datang! Di sini, kamu bisa mendapatkan kata-kata yang memiliki ciri-ciri sama namun berbeda.");
    await Swal.fire("Tekan layar atau teks untuk mengganti kata yang memiliki ciri-ciri serupa.");
    await Swal.fire("Gunakan tombol 'Ganti' untuk mengganti kata.");
}
