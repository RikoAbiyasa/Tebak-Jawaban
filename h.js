const flashcards = [{
        front: "Kosakata: Apple",
        answer: "Apel"
    },
    {
        front: "Kosakata: Book",
        answer: "Buku"
    },
    {
        front: "Kosakata: Car",
        answer: "Mobil"
    },
    {
        front: "Kosakata: Fish",
        answer: "Ikan"
    },
    {
        front: "Kosakata: Orange",
        answer: "Jeruk"
    },
    {
        front: "Kosakata: Tree",
        answer: "Pohon"
    },
    {
        front: "Kosakata: Sun",
        answer: "Matahari"
    },
    {
        front: "Kosakata: Moon",
        answer: "Bulan"
    },
    {
        front: "Kosakata: Computer",
        answer: "Komputer"
    },
    {
        front: "Kosakata: Food",
        answer: "Makanan"
    },
    {
        front: "Kosakata: Chair",
        answer: "Kursi"
    },
];

let currentIndex = 0;

const flashcardElement = document.getElementById("flashcard");
const front = flashcardElement.querySelector(".front");
const back = flashcardElement.querySelector(".back");
const cardImage = back.querySelector(".card-image");
const answerInput = document.getElementById("answer-input");
const answerButton = document.getElementById("answer");
const shuffleButton = document.getElementById("shuffle");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupText = document.getElementById("popup-text");
const popupImage = document.getElementById("popup-image");

function displayFlashcard() {
    const currentCard = flashcards[currentIndex];
    front.textContent = currentCard.front;
    // cardImage.src = currentCard.image; // Uncomment if using images
    back.querySelector(".back-text").textContent = currentCard.answer;
    flashcardElement.classList.remove("flip");
    flashcardElement.classList.remove("shake"); // Reset animasi shake
    answerInput.value = "";
}

answerButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase();

    flashcardElement.classList.add("flip"); // Tambahkan kelas flip saat pengguna menjawab

    if (userAnswer === correctAnswer) {
        showPopup("Kamu Cukup Pintar!", "Kelas.png"); // Ganti dengan path gambar yang sesuai
    } else {
        showPopup("Sedih Amat dah Bisa Salah", "Salah.webp"); // Ganti dengan path gambar yang sesuai
    }
});

shuffleButton.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * flashcards.length);
    flashcardElement.classList.add("shake"); // Tambahkan kelas shake saat diacak
    displayFlashcard();
});

function showPopup(message, image) {
    popupText.textContent = message;
    popupImage.src = image;
    popupWrapper.classList.add("show");
    setTimeout(() => {
        popupWrapper.classList.remove("show");
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    displayFlashcard();
    setInterval(createBubble, 500);
});

shuffleButton.addEventListener("click", () => {
    // Tambahkan kelas shake sebelum menampilkan kartu baru
    flashcardElement.classList.add("shake");

    // Tunggu sampai animasi shake selesai sebelum mengubah kartu
    setTimeout(() => {
        currentIndex = Math.floor(Math.random() * flashcards.length);
        displayFlashcard();
        flashcardElement.classList.remove("shake"); // Hapus kelas shake setelah animasi selesai
    }, 600); // Waktu harus sama dengan durasi animasi shake
});

// Warna bubble dan partikel yang lebih lembut dengan dominasi biru muda
const colors = [
    "rgba(173, 216, 230, 0.6)", // Light Blue (lebih terang dan terlihat)
    "rgba(144, 202, 249, 0.6)", // Sky Blue
    "rgba(100, 181, 246, 0.6)", // Lighter Blue
    "rgba(224, 247, 250, 0.7)", // Pastel Aqua
    "rgba(255, 183, 197, 0.6)", // Soft Pink
    "rgba(255, 218, 185, 0.6)", // Pastel Peach
];
// Fungsi untuk membuat bubble berwarna secara acak
function createColorfulBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * (60 - 20) + 20; // Ukuran bubble antara 20px dan 60px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posisi horizontal acak
    bubble.style.left = `${Math.random() * window.innerWidth}px`;

    document.querySelector(".bubbles").appendChild(bubble);

    bubble.addEventListener("animationend", () => {
        bubble.remove();
    });
}

// Membuat Partikel ini bang
function createColorfulParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Mengacak Posisi 
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;

    document.querySelector(".bubbles").appendChild(particle);

    particle.addEventListener("animationend", () => {
        particle.remove();
    });
}


// Interval untuk membuat bubble dan partikel secara acak
document.addEventListener("DOMContentLoaded", () => {
    setInterval(createColorfulBubble, 100); // Bubble besar setiap 500ms
    setInterval(createColorfulParticle, 1000); // Partikel kecil setiap 500ms
});
