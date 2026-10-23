// Bike Database - 10 High-End Bikes
const bikesData = [
    {
        id: 1,
        name: "Kawasaki Ninja H2R",
        brand: "Kawasaki",
        category: "hyperbike",
        price: "₹79,90,000",
        engine: "998cc Supercharged",
        power: "326 PS @ 14,000 RPM",
        topSpeed: "400+ km/h",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",
        description: "The ultimate track-only hyperbike featuring a centrifugal supercharger, carbon-fiber wings, and unrivaled aerodynamic downforce."
    },
    {
        id: 2,
        name: "BMW S1000RR M Package",
        brand: "BMW Motorrad",
        category: "superbike",
        price: "₹25,25,000",
        engine: "999cc Inline-4 ShiftCam",
        power: "210 HP @ 13,750 RPM",
        topSpeed: "303 km/h",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "Engineering perfection crafted for track domination, featuring dynamic damping control and ultra-light M Carbon wheels."
    },
    {
        id: 3,
        name: "Ducati Panigale V4 R",
        brand: "Ducati",
        category: "superbike",
        price: "₹69,99,000",
        engine: "998cc Desmosedici Stradale R",
        power: "240.5 HP @ 16,500 RPM",
        topSpeed: "320 km/h",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        description: "The closest thing to a road-legal MotoGP machine. Carbon wings, dry clutch, and high-revving racing soul."
    },
    {
        id: 4,
        name: "TVS Apache RR310 BTO",
        brand: "TVS Racing",
        category: "superbike",
        price: "₹2,72,000",
        engine: "312.2cc Single-Cylinder Liquid Cooled",
        power: "34 PS @ 9,700 RPM",
        topSpeed: "160 km/h",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Built To Order (BTO) track weapon with fully adjustable KYB suspension, race ergonomics, and drag-reduction aero."
    },
    {
        id: 5,
        name: "Yamaha YZF-R1M",
        brand: "Yamaha",
        category: "superbike",
        price: "₹28,00,000",
        engine: "998cc Crossplane Inline-4",
        power: "200 HP @ 13,500 RPM",
        topSpeed: "299 km/h",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "Pure MotoGP technology on the street. Equipped with Öhlins Electronic Racing Suspension and carbon bodywork."
    },
    {
        id: 6,
        name: "Kawasaki Z H2",
        brand: "Kawasaki",
        category: "naked",
        price: "₹23,40,000",
        engine: "998cc Supercharged Inline-4",
        power: "200 PS @ 11,000 RPM",
        topSpeed: "280 km/h",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",
        description: "The flagship hypernaked machine. Blistering supercharged acceleration matched with bold SUGOMI styling."
    },
    {
        id: 7,
        name: "Ducati Streetfighter V4 SP2",
        brand: "Ducati",
        category: "naked",
        price: "₹35,50,000",
        engine: "1103cc Desmosedici Stradale",
        power: "208 HP @ 13,000 RPM",
        topSpeed: "290 km/h",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        description: "The Fight Formula in 'Winter Test' livery. Carbon rims, STM-EVO SBK dry clutch, and ultimate naked aggression."
    },
    {
        id: 8,
        name: "Suzuki Hayabusa 1300",
        brand: "Suzuki",
        category: "hyperbike",
        price: "₹16,90,000",
        engine: "1340cc Inline-4",
        power: "190 PS @ 9,700 RPM",
        topSpeed: "299 km/h",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "The undisputed Peregrine Falcon of hyper-touring. Unmatched stability, legendary torque, and timeless aero."
    },
    {
        id: 9,
        name: "BMW R1250 GS Adventure",
        brand: "BMW Motorrad",
        category: "cruiser",
        price: "₹22,50,000",
        engine: "1254cc Boxer Twin ShiftCam",
        power: "136 HP @ 7,750 RPM",
        topSpeed: "200+ km/h",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "The king of world exploration. Built to conquer mountain passes, deserts, and endless highway miles with ease."
    },
    {
        id: 10,
        name: "Harley-Davidson CVO Street Glide",
        brand: "Harley-Davidson",
        category: "cruiser",
        price: "₹41,50,000",
        engine: "1977cc Milwaukee-Eight VVT 121",
        power: "115 HP @ 5,020 RPM",
        topSpeed: "180 km/h",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        description: "The pinnacle of American luxury touring. Premium Rockford Fosgate audio, custom show paint, and immense V-twin power."
    }
];

// DOM Elements
const bikesGrid = document.getElementById('bikes-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const modal = document.getElementById('bike-modal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.getElementById('modal-body-content');
const bookingForm = document.getElementById('booking-form');

// Render Bikes
function renderBikes(data) {
    bikesGrid.innerHTML = '';
    if (data.length === 0) {
        bikesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No bikes found matching your search.</p>`;
        return;
    }

    data.forEach(bike => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.innerHTML = `
            <div class="bike-img-wrapper">
                <img src="${bike.image}" alt="${bike.name}">
                <span class="category-tag">${bike.category}</span>
            </div>
            <div class="bike-info">
                <span class="bike-brand">${bike.brand}</span>
                <h3 class="bike-title">${bike.name}</h3>
                <div class="bike-specs-preview">
                    <span><i class="fa-solid fa-bolt"></i> ${bike.power.split('@')[0]}</span>
                    <span><i class="fa-solid fa-gauge"></i> ${bike.topSpeed}</span>
                </div>
                <div class="bike-price-row">
                    <span class="bike-price">${bike.price}</span>
                    <button class="btn btn-secondary" onclick="openBikeModal(${bike.id})">Details</button>
                </div>
            </div>
        `;
        bikesGrid.appendChild(card);
    });
}

// Open Modal Details
window.openBikeModal = function(id) {
    const bike = bikesData.find(b => b.id === id);
    if (!bike) return;

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div>
                <img src="${bike.image}" alt="${bike.name}" class="modal-img">
            </div>
            <div>
                <span class="bike-brand">${bike.brand}</span>
                <h2>${bike.name}</h2>
                <h3 style="color: var(--accent-color); margin: 10px 0;">${bike.price}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${bike.description}</p>
                <ul class="spec-list">
                    <li><strong>Engine:</strong> <span>${bike.engine}</span></li>
                    <li><strong>Max Power:</strong> <span>${bike.power}</span></li>
                    <li><strong>Top Speed:</strong> <span>${bike.topSpeed}</span></li>
                    <li><strong>Category:</strong> <span style="text-transform: capitalize;">${bike.category}</span></li>
                </ul>
                <a href="#contact" class="btn btn-primary btn-full" onclick="selectBikeInForm('${bike.name}')">Book Test Ride</a>
            </div>
        </div>
    `;
    modal.classList.add('active');
};

// Select bike in contact form automatically
window.selectBikeInForm = function(bikeName) {
    modal.classList.remove('active');
    const bikeSelect = document.getElementById('selected-bike');
    if (bikeSelect) {
        bikeSelect.value = bikeName;
    }
};

// Close Modal
closeModal.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Filter Bikes Functionality
let currentFilter = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        filterAndSearch();
    });
});

// Search Input Functionality
searchInput.addEventListener('input', filterAndSearch);

function filterAndSearch() {
    const query = searchInput.value.toLowerCase();
    const filtered = bikesData.filter(bike => {
        const matchesFilter = currentFilter === 'all' || bike.category === currentFilter;
        const matchesSearch = bike.name.toLowerCase().includes(query) || bike.brand.toLowerCase().includes(query);
        return matchesFilter && matchesSearch;
    });
    renderBikes(filtered);
}

// Theme Switcher (Dark / Light)
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
});

// Form Submission Simulation
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const bike = document.getElementById('selected-bike').value;
    alert(`Thank you ${name}! Your VIP consultation for ${bike} has been booked. Our agent will contact you shortly.`);
    bookingForm.reset();
});

// Initial Render
renderBikes(bikesData);