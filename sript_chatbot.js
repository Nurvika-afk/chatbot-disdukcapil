
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message !== '') {
        addUserMessage(message);
        userInput.value = '';
        
        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            addBotMessage(botResponse);
        }, 1000);
    }
}

function addUserMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = message;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function askQuickQuestion(question) {
    addUserMessage(question);
    
    setTimeout(() => {
        const botResponse = generateBotResponse(question);
        addBotMessage(botResponse);
    }, 800);
}

function showComplexForm() {
    document.getElementById('complex-form').style.display = 'block';
    scrollToBottom();
}

function hideComplexForm() {
    document.getElementById('complex-form').style.display = 'none';
}

function submitComplexQuestion() {
    const questionType = document.getElementById('question-type').value;
    const questionDetail = document.getElementById('question-detail').value.trim();
    const userEmail = document.getElementById('user-email').value.trim();
    
    if (questionDetail === '') {
        alert('Silakan isi detail pertanyaan Anda');
        return;
    }
    
    const fullQuestion = `[Pertanyaan Kompleks - ${questionType || 'Umum'}] ${questionDetail}`;
    addUserMessage(fullQuestion);
    
    hideComplexForm();
    
    setTimeout(() => {
        addBotMessage(`Terima kasih atas pertanyaan kompleks Anda. Pertanyaan Anda telah direkam dengan detail sebagai berikut:<br><br>
            <strong>Jenis:</strong> ${questionType || 'Tidak ditentukan'}<br>
            <strong>Detail:</strong> ${questionDetail}<br><br>
            Tim ahli kami akan menganalisis pertanyaan Anda dan akan menghubungi Anda melalui email ${userEmail || 'yang Anda daftarkan'} dalam waktu 1-3 hari kerja.`);
        
        console.log('Complex question submitted:', {questionType, questionDetail, userEmail});
    }, 1500);
}

function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('wna') || lowerMessage.includes('asing')) {
            return `Untuk pembuatan KTP-el Warga Negara Asing (WNA) di Semarang, berikut persyaratannya:<br><br>
            1. Fotokopi paspor dan KITAS/KITAP yang masih berlaku<br>
            2. Surat keterangan domisili dari kelurahan<br>
            3. Surat nikah/buku nikah (jika sudah menikah dengan WNI)<br>
            4. Mengisi formulir permohonan<br>
            Proses dapat dilakukan di Kantor Disdukcapil Kota Semarang dengan membuat janji terlebih dahulu melalui aplikasi Jaga Warga atau website <a href="https://sidnok.semarangkota.go.id//ktp-wna" target="_blank" style="color: #0056b3; text-decoration: underline;">Si D'Nok</a><br>`;
        } else if (lowerMessage.includes('baru') || lowerMessage.includes('elektronik'))  {
            return `Untuk perekaman KTP-el baru untuk WNI, persyaratannya adalah:<br><br>
            1. Berusia minimal 17 tahun atau sudah menikah<br>
            2. Membawa KK asli<br>
            3. Surat pengantar dari RT/RW<br>
            4. Fotokopi akta kelahiran<br>
            Proses cetak KTP-el bisa dilakukan sehari setelah perekaman data. Anda bisa mengajukan di kelurahan setempat atau langsung ke Kantor Disdukcapil.`;
        } else if (lowerMessage.includes('rusak') || lowerMessage.includes('ganti') || lowerMessage.includes('ktp')) {
            return `Untuk Pembuatan KTP-el baru karena ada perubahan data, persyaratannya adalah:<br><br>
            1. KTP-el lama atau rusak <br>
            2. KK yang sudah diperbarui data nya (jika ada perubahan data)<br>
            3. Surat kehilangan dari kepolisian (jika KTP-el hilang)<br>
            4. Surat keterangan pindah datang (jika terjadi pindah datang)<br>
            5. Datang langsung ke kantor dinas atau TPDK terdekat<br>
            Proses pembuatan KTP-el bisa ditunggu apabila blanko KTP-el tersedia.`;
        }
    else if (lowerMessage.includes('kk') || lowerMessage.includes('kartu keluarga') || lowerMessage.includes('kartu keluarga')) {
    if (lowerMessage.includes('baru') || lowerMessage.includes('buat') || lowerMessage.includes('pembuatan')) {
        return `Untuk pembuatan Kartu Keluarga baru/pisah Kartu Keluarga, persyaratannya adalah:<br><br>
        1. Surat nikah/akta perkawinan (bagi yang sudah menikah)<br>
        2. KTP asli suami dan istri<br>
        3. Surat keterangan pindah (jika berasal dari luar kota)<br>
        4. Surat pengantar dari RT/RW setempat<br>
        5. Fotokopi akta kelahiran anak (jika ada)<br>
        6. Surat Pernyataan Rumah Milik Sendiri<br>
        <a href="https://drive.google.com/file/d/1s6vTXBMTIJJMlkFLA2ctk-skRh4P9RYK/view" target="_blank" style="color: #0056b3; text-decoration: underline;">7. Surat Pernyataan Alamat Digunakan Dalam Administrasi Kependudukan( apabila kontrak )</a><br><br>
        <strong>Prosedur:</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pengajuan Kedatangan (jika berasal dari luar kota dan luar kecamatan)<br>
        - Pengajuan Perubahan Biodata KK (jika alamat masih sama)<br>
        - Mengisi formulir permohonan perubahan data (jika ada perubahan)<br>
        - Proses selesai dalam 3-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK baru<br>

        <a href="https://disdukcapil.semarangkota.go.id/layanan/kk" target="_blank" style="color: #0056b3; text-decoration: underline;">Info lebih lanjut</a>`;
    }
    else if (lowerMessage.includes('perubahan') || lowerMessage.includes('ubah') || lowerMessage.includes('ganti')) {
        return `Untuk perubahan data di Kartu Keluarga, berikut persyaratannya:<br><br>
        1. Formulir permohonan perubahan data<br>
        2. KK asli yang masih berlaku<br>
        3. Dokumen pendukung sesuai perubahan:<br>
        - Akta nikah/Akta cerai untuk perubahan status perkawinan<br>
        - Ijazah untuk perubahan pendidikan<br>
        - Akta kelahiran untuk perubahan nama ibu/bapak atau perubahan nama sesuai akta<br>
        - SK pekerjaan untuk perubahan pekerjaan<br>
        4. KTP asli pemohon<br>
        5. Surat pengantar dari kelurahan<br><br>
        <strong>Prosedur Pengajuan:</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pilih pelayanan perubahan biodata KK<br>
        - Mengisi semua data yang diminta pada website Si D'Nok<br>
        - Upload semua dokumen pendukung (wajib dokumen asli)<br>
        - Proses memakan waktu estimasi 1-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK<br><br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;

    }
    else if (lowerMessage.includes('hilang') || lowerMessage.includes('rusak')) {
        return `Untuk mengurus KK hilang/rusak:<br><br>
        1. Membuat surat kehilangan di kepolisian (jika hilang)<br>
        2. Fotokopi KK yang rusak (jika masih ada)<br>
        3. KTP asli kepala keluarga<br>
        4. Pengajuan KK baru di Si D'Nok atau IKD (jika KK masih yang lama atau belum barcode)<br>
        5. Cetak ulang melalui IKD (jika KK sudah barcode)<br><br>
        <strong>Prosedur Pengajuan IKD</strong><br>
        - Download dan buat akun IKD (jika belum punya akun)<br>
        - Aktivasi IKD datang langsung ke Kantor Dinas atau TPDK terdekat diwilayah Kota Semarang pada jam kerja<br>
        - Pengajuan KK baru di bagian pelayanan, proses pengajuan memakan waktu estimasi 1-5 hari kerja (jika kk belum barcode)<br>
        - Cetak KK baru melalui Dokumenku, lalu bagikan dan akan muncul barcode untuk cetak KK dimesin ADM di Kantor (jika KK sudah barcode)<br>
        Note : Aktivasi IKD harus dilakukan yang bersangkutan langsung, dan dapat diakses melalui <a href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi IKD</a><br><br>
        <strong>Prosedur Pengajuan Si D'Nok</strong><br>
        - Pengajuan melalui Si D'Nok<br>
        - Membuat akun Si D'Nok (bagi yang belum memiliki akun)<br>
        - Pengajuan perubahan biodata KK<br>
        - Mengisi semua data yang diminta pada website Si D'Nok<br>
        - Upload semua dokumen pendukung (wajib dokumen asli)<br>
        - Proses memakan waktu estimasi 1-5 hari kerja<br>
        - Jika proses selesai akan mendapat email verifikasi dan barcode untuk cetak KK<br><br>
        Layanan Online Si D'Nok dapat diakses melalui <a href="https://sidnok.semarangkota.go.id/" target="_blank" style="color: #0056b3; text-decoration: underline;">Website Si D'Nok</a> atau melalui <a href="https://play.google.com/store/apps/details?id=semarangkota.sidnok" target="_blank" style="color: #0056b3; text-decoration: underline;">Aplikasi Si D'Nok</a>`;
        }
    else {
        return `Informasi umum tentang Kartu Keluarga:<br><br>
        - Dokumen penting yang memuat data seluruh anggota keluarga<br>
        - Wajib dimiliki setiap keluarga di Indonesia<br>
        - Harus diperbarui ketika ada perubahan data keluarga<br><br>
        <strong>Layanan terkait:</strong><br>
        1. <a href="#" onclick="askQuickQuestion('Bagaimana cara membuat KK baru?')">Pembuatan KK Baru</a><br>
        2. <a href="#" onclick="askQuickQuestion('Apa syarat perubahan KK?')">Perubahan Data KK</a><br>
        3. <a href="#" onclick="askQuickQuestion('Bagaimana jika KK hilang?')">Kehilangan KK</a>`;
}
}
     else if (lowerMessage.includes('hilang') || lowerMessage.includes('rusak')) {
         
            return `Untuk melaporkan akta kelahiran yang hilang/rusak dan mengurus duplikat, berikut prosedurnya:<br><br>
            1. Membuat surat kehilangan di kepolisian<br>
            2. Fotokopi akta kelahiran (jika ada)<br>
            3. Fotokopi KK dan KTP orang tua<br>
            4. Surat pengantar dari kelurahan<br>
            5. Mengisi formulir permohonan duplikat<br><br>
            Biaya pengurusan sekitar Rp50.000-Rp100.000 tergantung tingkat kerusakan dokumen. Proses memakan waktu 7-14 hari kerja.`;
    }
    else if (lowerMessage.includes('akta') || lowerMessage.includes('kelahiran')) {
            return `Untuk membuat akta kelahiran baru, persyaratan dokumennya adalah:<br><br>
            1. Surat keterangan kelahiran dari dokter/bidan/rumah sakit<br>
            2. KK asli orang tua<br>
            3. KTP asli kedua orang tua<br>
            4. Surat nikah/akta perkawinan orang tua<br>
            5. Surat pengantar dari RT/RW<br>
            6. KTP saksi<br>
            7. Surat pernyataan anak ibu (jika anak ibu atau kawin belum tercatat)<br>
            <strong>Prosedur Pembuatan Akta Kelahiran</strong><br>
            - Pengajuan melalui SI D'Nok<br>
            - Yang melakukan pengajuan harus orang tua bayi, jika anak ibu maka harus ibu kandungnya sendiri<br>
            - Membuat akun Si D'Nok (jika belum memiliki akun)<br>
            - Pengajuan Pelayanan Akta kelahiran<br>
            - Upload semua dokumen yang diperlukan (wajib asli, discan atau difoto)<br>
            - Upload Buku nikah lembar pertama, kedua, dan ketiga (bagi yang ber agama islam)<br><br>
            <strong>Estimasi Verifikasi :</strong> 1-5 hari kerja, setelah proses selesai akan mendapat email verifikasi dan 3 barcode yang berisi KK baru, Akta kelahiran, dan KIA dicetak di mesin ADM di kantor dinas atau TPDK terdekat<br><br>`;
        }
     else if (lowerMessage.includes('online') || lowerMessage.includes('daring')) {
        return `Disdukcapil Semarang menyediakan beberapa layanan online melalui:<br><br>
        1. <strong>Website Resmi</strong>: <a href="https://disdukcapil.semarangkota.go.id" target="_blank" style="color: #0056b3; text-decoration: underline;">disdukcapil.semarangkota.go.id</a><br>
        - Permohonan dokumen kependudukan<br>
        - Cek status pengajuan<br>
        - Pengaduan layanan<br><br>
        2. <strong>Aplikasi Jaga Warga</strong>:<br>
        - Janji temu pelayanan<br>
        - Notifikasi status dokumen<br>
        - Informasi persyaratan<br><br>
        3. <strong>WhatsApp Service</strong>: <a href="https://wa.me/628112657890" target="_blank" style="color: #0056b3; text-decoration: underline;">0811-265-7890</a><br>
        - Konsultasi cepat<br>
        - Pengiriman dokumen pendukung`;
    } else {
        return `Maaf, saya tidak sepenuhnya memahami pertanyaan Anda. Berikut beberapa informasi yang mungkin membantu:<br><br>
        1. Jam layanan Disdukcapil Semarang: Senin-Jumat pukul 08.00-15.00 WIB<br>
        2. Lokasi: <a href="https://maps.google.com/maps?q=Jl.+Pemuda+No.+148,+Semarang" target="_blank" style="color: #0056b3; text-decoration: underline;">Jl. Pemuda No. 148, Semarang</a><br>
        3. Nomor telepon: (024) 1234567<br>
        4. Email: <a href="mailto:disdukcapil@semarangkota.go.id" style="color: #0056b3; text-decoration: underline;">disdukcapil@semarangkota.go.id</a><br><br>
        Untuk pertanyaan lebih spesifik, silakan ajukan pertanyaan lebih detail atau gunakan formulir pertanyaan kompleks.`;
    }


    const input = document.getElementById('user-input');
input.onkeydown = function(e) {
if (e.keyCode === 13) { // KeyCode untuk Enter
e.preventDefault();
sendMessage();
}
};
}
