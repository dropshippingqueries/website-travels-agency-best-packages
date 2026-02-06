document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Itinerary Data - New Format
    const itineraries = {
        dubai: {
            options: [
                {
                    nights: "5 Nights",
                    price: "INR 29,999",
                    itinerary: [
                        "Creek Dhow Cruise with Dinner",
                        "Half Day Dubai City Tour",
                        "Abu Dhabi City Tour With Ferrari World",
                        "Atlantis Aqua Venture & Lost Chamber Aquarium",
                        "Burj Khalifa - 124 & 125 Level - Non Prime",
                        "Airport Transfer from Dubai Airport (DXB) to Deira/Bur Dubai Hotel",
                        "Airport Transfer from Deira/Bur Dubai Hotel to Dubai Airport (DXB)"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                }
            ]
        },
        // Maldives - Special resort display format
        maldives: {
            type: "resorts", // Special flag for resort display
            exclusions: [
                "Flight Bookings",
                "Visas"
            ],
            resorts: [
                {
                    name: "Villa Nautica",
                    image: "Images/Villa Nautica.webp",
                    nights: "4 Nights",
                    roomType: "Sunset Deluxe Beach Pool Villa + 01N Water Villa",
                    originalPrice: "INR 249,000",
                    salePrice: "INR 199,000",
                    perCouple: true
                },
                {
                    name: "Taj Exotica",
                    image: "Images/taj exotica.webp",
                    nights: "4 Nights",
                    roomType: "Sunrise Water Villa",
                    originalPrice: "INR 313,300",
                    salePrice: "INR 263,300",
                    perCouple: true
                },
                {
                    name: "Siyam World",
                    image: "Images/siyam world.webp",
                    nights: "4 Nights",
                    roomType: "Water Villa with Pool + Slide",
                    originalPrice: "INR 325,700",
                    salePrice: "INR 275,700",
                    perCouple: true
                },
                {
                    name: "Varu by Atmosphere",
                    image: "Images/varu by atmosphere.webp",
                    nights: "4 Nights",
                    roomType: "Water Villa",
                    originalPrice: "INR 339,000",
                    salePrice: "INR 289,000",
                    perCouple: true
                },
                {
                    name: "Raaya by Atmosphere",
                    image: "Images/raaya by atmosphere-final.webp",
                    nights: "4 Nights",
                    roomType: "Water Villa",
                    originalPrice: "INR 347,000",
                    salePrice: "INR 297,000",
                    perCouple: true
                }
            ]
        },
        thailand: {
            options: [
                {
                    nights: "4 Nights",
                    price: "INR 20,599",
                    itinerary: [
                        "Alcazar Show (Normal Seat)",
                        "Coral Island Tour by Speed Boat with Lunch",
                        "Transfer from Pattaya hotel to Bangkok hotel",
                        "Bangkok City Tour with Gems Gallery (Golden Buddha & Marble Temple) With Transfers",
                        "Transfer from Bangkok hotel to Suvarnabhumi Bangkok Airport"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                },
                {
                    nights: "5 Nights",
                    price: "INR 31,899",
                    itinerary: [
                        "Full Day Safari World with Marine Park including Lunch",
                        "Bangkok City Tour with Gems Gallery (Golden Buddha & Marble Temple) With Transfers",
                        "Transfer from Bangkok hotel to Suvarnabhumi Bangkok Airport",
                        "Transfer from Suvarnabhumi Bangkok Airport to Pattaya Hotel",
                        "Alcazar Show (Normal Seat)",
                        "Under Water World (SIC)",
                        "Coral Island Tour by Speed Boat with Lunch",
                        "Transfer from Pattaya hotel to Bangkok hotel"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                }
            ]
        },
        bali: {
            options: [
                {
                    nights: "4 Nights",
                    price: "INR 23,999",
                    itinerary: [
                        "Watersports (Banana Boat + Parasailing + Jet Ski), Photo stop at Tanah Barak, Uluwatu Temple, Kecak Dance",
                        "Nusa Penida West Day Trip from Bali: Kelingking cliff, Broken beach, Angel Billabong, Crystal bay, local lunch (complimentary snorkeling)",
                        "Aloha Ubud Swing, Tegalalang Rice Terraces (photo stop), Mount Batur view with lunch at Amora cafe, coffee plantation visit",
                        "Transfer from Kuta/Legian to Airport"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                },
                {
                    nights: "5 Nights",
                    price: "INR 27,999",
                    itinerary: [
                        "Watersports (Banana Boat + Parasailing + Jet Ski), Photo stop at Tanah Barak, Uluwatu Temple, Kecak Dance",
                        "Nusa Penida West Day Trip from Bali: Kelingking cliff, Broken beach, Angel Billabong, Crystal bay, local lunch (complimentary snorkeling)",
                        "Inter Hotel Transfer from Kuta/Legian/Seminyak to Ubud/Gianyar/Sanur",
                        "Desa Swing (1 x Extreme Swing + 1 x nest) with lunch, Tegalalang Rice Terraces (photo stop), Mount Batur view point, coffee plantation visit",
                        "Bedugul Tour 1: Wanagiri View Point, Handara Gate, Beratan Temple, Tanah Lot Temple",
                        "Transfer from Ubud/Gianyar Hotel to Airport"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                },
                {
                    nights: "6 Nights",
                    price: "INR 32,599",
                    itinerary: [
                        "Watersports (Banana Boat + Parasailing + Jet Ski), Photo stop at Tanah Barak, Uluwatu Temple, Kecak Dance",
                        "Nusa Penida West Day Trip from Bali: Kelingking cliff, Broken beach, Angel Billabong, Crystal bay, local lunch (complimentary snorkeling)",
                        "River Ayung Rafting with Indonesian Lunch, Jambe Asri ATV ride Full Circuit (tandem - 120 mins)",
                        "Inter Hotel Transfer from Kuta/Legian/Seminyak to Ubud/Gianyar/Sanur",
                        "Desa Swing Package 3 (Unlimited swings + 5 nests + Gate Paradise), Tegalalang Rice Terraces (photo stop), Mount Batur view with lunch at Amora Cafe",
                        "Ubud Cultural Tour 1: Celuk and Mas Artisan Villages, Cantik Coffee Plantation, Saraswati Temple, Ubud Palace with Legang/Barong Dance",
                        "Transfer from Ubud/Gianyar Hotel to Airport"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                }
            ]
        },
        singapore: {
            options: [
                {
                    nights: "4 Nights",
                    price: "INR 31,100",
                    itinerary: [
                        "Universal Studios Singapore",
                        "Transfer from Singapore Airport to Singapore Hotel",
                        "Sentosa [ Cable Car + Sky Helix + Wings of time ]",
                        "Singapore Zoo & Night Safari Combo",
                        "Transfer from Singapore Hotel to Singapore Airport"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                },
                {
                    nights: "5 Nights",
                    price: "INR 50,599",
                    itinerary: [
                        "Universal Studios Singapore",
                        "Singapore City Tour with Flyer ticket",
                        "Universal Studios + Singapore Oceanarium (Non - Peak)",
                        "Transfer from Singapore Hotel to Singapore Airport",
                        "Transfer from Singapore Airport to Singapore Hotel",
                        "Marina Bay Sands Sky Park and Gardens By the Bay Tour (Flower Dome + Cloud Forest + Supertree Observatory {Before 4:00 PM}) Combo",
                        "Sentosa [ Cable Car+ Luge & Skyline (3 Rides - 10am-03pm) + Madame Tussauds - 4 in 1 + Wings of Time ]"
                    ],
                    exclusions: [
                        "Flight Bookings",
                        "Visas",
                        "Hotel bookings"
                    ]
                }
            ]
        }
    };

    // Destination Images for Itinerary Modals
    const destinationImages = {
        dubai: [
            'Images/Dubai-itinerary/2.webp',
            'Images/Dubai-itinerary/3.webp',
            'Images/Dubai-itinerary/4.webp'
        ],
        thailand: [
            'Images/Thailand-itinerary/1.webp',
            'Images/Thailand-itinerary/2.webp',
            'Images/Thailand-itinerary/3.webp'
        ],
        bali: [
            'Images/Bali-itinerary/1.webp',
            'Images/Bali-itinerary/2.webp',
            'Images/Bali-itinerary/3.webp',
            'Images/Bali-itinerary/4.webp',
            'Images/Bali-itinerary/5.webp',
            'Images/Bali-itinerary/6.webp',
            'Images/Bali-itinerary/7.webp'
        ],
        singapore: [
            'Images/Singapore-itinerary/2.webp',
            'Images/Singapore-itinerary/3.webp',
            'Images/Singapore-itinerary/4.webp',
            'Images/Singapore-itinerary/5.webp'
        ]
    };

    // Modal Logic
    const modal = document.getElementById("itinerary-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll(".itinerary-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const dest = btn.getAttribute("data-dest");
            const destData = itineraries[dest];

            if (destData) {
                // Set destination background
                document.querySelector('.modal-content').setAttribute('data-destination', dest);

                // Check if this is a resort display (Maldives)
                if (destData.type === 'resorts' && destData.resorts) {
                    // Maldives: Show resort cards
                    modalTitle.innerHTML = `
                        <div class="modal-header-row">
                            <span class="modal-destination-name">Choose Your ${dest.charAt(0).toUpperCase() + dest.slice(1)} Resort</span>
                        </div>
                    `;

                    modalBody.innerHTML = renderResortCards(destData.resorts) + renderExclusions(destData.exclusions);
                    modal.classList.add("show");
                } else if (destData.options) {
                    // Standard itinerary display
                    const firstOption = destData.options[0];
                    const isMobile = window.innerWidth <= 768;

                    let navigationHtml = '';

                    if (isMobile) {
                        // Mobile: Dropdown
                        navigationHtml = `
                            <div class="night-dropdown-container">
                                <select class="night-select">
                                    ${destData.options.map((opt, index) => `
                                        <option value="${index}">${opt.nights}</option>
                                    `).join('')}
                                </select>
                            </div>
                        `;
                    } else {
                        // Desktop: Tabs
                        navigationHtml = `
                            <div class="night-tabs">
                                ${destData.options.map((opt, index) => `
                                    <button class="night-tab ${index === 0 ? 'active' : ''}" data-index="${index}">
                                        ${opt.nights}
                                    </button>
                                `).join('')}
                            </div>
                        `;
                    }

                    // Update title with tabs/dropdown inline
                    modalTitle.innerHTML = `
                        <div class="modal-header-row">
                            <span class="modal-destination-name">${dest.charAt(0).toUpperCase() + dest.slice(1)} Packages</span>
                            ${navigationHtml}
                        </div>
                    `;

                    // Check if destination has images
                    const hasImages = destinationImages[dest];
                    const imageGalleryHtml = hasImages ? `
                        <div class="itinerary-slideshow">
                            <div class="slideshow-container">
                                ${destinationImages[dest].map((img, index) => `
                                    <div class="slideshow-slide ${index === 0 ? 'active' : ''}">
                                        <img src="${img}" alt="${dest} destination">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="slideshow-nav prev" onclick="changeSlide(-1, this)">&#10094;</button>
                            <button class="slideshow-nav next" onclick="changeSlide(1, this)">&#10095;</button>
                            <div class="slideshow-indicators">
                                ${destinationImages[dest].map((_, index) => `
                                    <span class="indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index}, this)"></span>
                                `).join('')}
                            </div>
                        </div>
                    ` : '';

                    modalBody.innerHTML = `
                        <div class="modal-body-wrapper ${hasImages ? 'with-images' : ''}">
                            <div class="itinerary-section">
                                <div class="itinerary-content">
                                    ${renderItinerary(firstOption)}
                                    ${renderExclusions(firstOption.exclusions)}
                                </div>
                                <div class="itinerary-pricing">
                                    <span class="price-label">Package Price:</span>
                                    <span class="price-value">${firstOption.price}</span>
                                </div>
                            </div>
                            ${imageGalleryHtml}
                        </div>
                    `;

                    // Add Event Listeners
                    if (isMobile) {
                        const nightSelect = document.querySelector('.night-select');
                        nightSelect.addEventListener('change', (e) => {
                            const index = parseInt(e.target.value);
                            updateModalContent(destData.options[index]);
                        });
                    } else {
                        document.querySelectorAll('.night-tab').forEach(tab => {
                            tab.addEventListener('click', () => {
                                const index = parseInt(tab.getAttribute('data-index'));

                                // Update active tab
                                document.querySelectorAll('.night-tab').forEach(t => t.classList.remove('active'));
                                tab.classList.add('active');

                                updateModalContent(destData.options[index]);
                            });
                        });
                    }

                    modal.classList.add("show");
                }
            }
        });
    });

    function updateModalContent(selectedOption) {
        document.querySelector('.itinerary-content').innerHTML = renderItinerary(selectedOption) + renderExclusions(selectedOption.exclusions);
        document.querySelector('.itinerary-pricing .price-value').textContent = selectedOption.price;
    }

    // Function to render resort cards (for Maldives)
    function renderResortCards(resorts) {
        return `
            <div class="resort-grid">
                ${resorts.map(resort => `
                    <div class="resort-card">
                        <div class="resort-image">
                            <img src="${resort.image}" alt="${resort.name}">
                        </div>
                        <div class="resort-info">
                            <h3 class="resort-name">${resort.name}</h3>
                            <div class="resort-details">
                                <p class="resort-nights"><strong>${resort.nights}</strong></p>
                                <p class="resort-room-type">${resort.roomType}</p>
                            </div>
                            <div class="resort-pricing">
                                <span class="price-original">${resort.originalPrice}</span>
                                <span class="price-sale">${resort.salePrice}</span>
                                <span class="price-suffix">${resort.perCouple ? 'per couple' : ''}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Function to render itinerary content
    function renderItinerary(option) {
        const isNewFormat = typeof option.itinerary[0] === 'string';

        if (isNewFormat) {
            return `
                <ul class="itinerary-list">
                    ${option.itinerary.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        } else {
            return `
                <div class="day-items">
                    ${option.itinerary.map(item => `
                        <div class="day-item">
                            <strong>${item.day}:</strong> ${item.desc}
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.classList.remove("show");
        }
    });


    // Responsive GSAP Logic
    let mm = gsap.matchMedia();

    mm.add("(min-width: 801px)", () => {
        // Desktop: Parallax for visa section background only
        let visaBg = document.querySelector(".visa-bg-image");
        if (visaBg) {
            gsap.to(visaBg, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".visa-section",
                    scrub: 1
                }
            });
        }
    });

    mm.add("(max-width: 800px)", () => {
        // Mobile: Vertical Scroll Simple Animations
        gsap.utils.toArray(".horizontal-section").forEach(section => {
            gsap.from(section.querySelector(".content"), {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%"
                }
            });
        });
    });


    // Navigation Link Logic
    document.querySelector('.dropbtn').addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, { scrollTo: 0, duration: 1 });
    });

    // Dropdown Item Logic - Scroll to packages section and open modal
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const dest = e.target.getAttribute('href').substring(1);

            // Scroll to packages section
            const packagesSection = document.querySelector('.packages-section');
            if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // After scrolling, open the modal for that destination
                setTimeout(() => {
                    const itineraryBtn = document.querySelector(`.itinerary-btn[data-dest="${dest}"]`);
                    if (itineraryBtn) {
                        itineraryBtn.click();
                    }
                }, 800);
            }
        });
    });

    // --- VISA SECTION ANIMATIONS ---
    // Parallax Background
    gsap.to(".visa-bg-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".visa-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Staggered Entry for Badges
    gsap.from(".visa-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".visa-grid",
            start: "top 80%",
        }
    });

    // Floating Animation loop for badges to feel alive
    // Using transform instead to avoid layout shifts
    gsap.to(".visa-badge", {
        y: -8,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0 // All start at same position
    });
});

// Helper Function for Exclusions
function renderExclusions(exclusions) {
    if (!exclusions || exclusions.length === 0) return '';

    return `
        <div class="exclusion-section">
            <h4 class="exclusion-title">Exclusions:</h4>
            <ul class="exclusion-list">
                ${exclusions.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

// --- NAVBAR SCROLL EFFECT ---
// Make navbar opaque when leaving hero section and entering packages
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        // Trigger when we've scrolled past 80% of the hero section
        const heroHeight = heroSection.offsetHeight;
        const triggerPoint = heroHeight * 0.8;

        if (window.scrollY > triggerPoint) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Slideshow Navigation Functions
window.changeSlide = function (direction, button) {
    const slideshow = button.closest('.itinerary-slideshow');
    const slides = slideshow.querySelectorAll('.slideshow-slide');
    const indicators = slideshow.querySelectorAll('.indicator');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    // Remove active class from current slide and indicator
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    // Calculate new index
    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    // Add active class to new slide and indicator
    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
};

window.goToSlide = function (index, indicator) {
    const slideshow = indicator.closest('.itinerary-slideshow');
    const slides = slideshow.querySelectorAll('.slideshow-slide');
    const indicators = slideshow.querySelectorAll('.indicator');

    // Remove all active classes
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Add active to selected
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
};
