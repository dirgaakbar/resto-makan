const reviews = [
    {
        name: "Deborah Daat",
        text: "Tempat yg sangat nyaman untuk kumpul² dng keluarga🥰, untuk makanannya recommended sapi lada hitam dan cumi goreng menteganya enak!",
        role: "Local Guide"
    },
    {
        name: "Melissa Salmon",
        text: "I absolutely love their berry squash drinks, especially the berry. We ate here at least four, maybe five, times during our visit.",
        role: "Pelanggan Internasional"
    },
    {
        name: "Azhari Fauzi",
        text: "Surprisingly tempatnya menarik dan makanannya enak! Posisinya persis di seberang markas Yonif 751. Menunya cukup lengkap.",
        role: "Pelanggan"
    }
];

function loadReviews() {
    const container = document.getElementById('testimonial-container');
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p>"${review.text}"</p>
            <h4 style="margin-top:10px; color:#2d5a27;">- ${review.name} <small>(${review.role})</small></h4>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadReviews);
