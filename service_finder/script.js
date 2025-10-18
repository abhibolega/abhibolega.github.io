document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationInput');
    const getLocationBtn = document.getElementById('getLocationBtn');
    const checkServicesBtn = document.getElementById('checkServicesBtn');
    const loadingDiv = document.getElementById('loading');
    const currentLocationDisplay = document.getElementById('currentLocationDisplay');
    const errorDiv = document.getElementById('error');
    const errorMessageP = errorDiv.querySelector('.error-message');
    const resultsContainer = document.getElementById('results-container');
    const detectedLocationName = document.getElementById('detectedLocationName');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const resultsSections = document.querySelectorAll('.results-section');
    const overallNoServicesMessage = document.getElementById('overallNoServicesMessage');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";

    // --- Theme Toggling Logic ---
    function setTheme(theme) {
        body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
    themeToggle.addEventListener('click', toggleTheme);

    // --- Service Data ---
    // Expanded Dummy service data - Still a simplified approach, but more comprehensive.
    // In a real app, this would be far more granular and come from a backend.
    // We're mapping common services to major cities/regions they operate in.
    // City names must be lowercase for matching.
    const serviceData = {
        "food": [
            { name: "Swiggy Food", link: "https://www.swiggy.com/food-delivery", cities: ["bangalore", "mumbai", "delhi", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] },
            { name: "Zomato", link: "https://www.zomato.com/", cities: ["bangalore", "mumbai", "delhi", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] },
            { name: "Magicpin (Food & Local Deals)", link: "https://magicpin.in/", cities: ["delhi", "bangalore", "mumbai", "gurgaon", "noida", "ghaziabad", "faridabad", "pune", "hyderabad", "chennai", "kolkata", "ahmedabad", "chandigarh"] },
            // Add more food delivery services
        ],
        "groceries": [
            { name: "Swiggy Instamart", link: "https://www.swiggy.com/instamart", cities: ["bangalore", "mumbai", "delhi", "chennai", "hyderabad", "pune", "ahmedabad", "jaipur", "kolkata", "nagpur", "vadodara", "surat"] },
            { name: "Zepto (10-min)", link: "https://www.zeptonow.com/", cities: ["bangalore", "mumbai", "delhi", "chennai", "hyderabad", "pune", "kolkata", "noida", "gurgaon"] },
            { name: "BlinkIt (10-min)", link: "https://blinkit.com/", cities: ["bangalore", "mumbai", "delhi", "gurgaon", "hyderabad", "pune", "kolkata", "ahmedabad", "lucknow", "noida", "faridabad"] },
            { name: "BigBasket", link: "https://www.bigbasket.com/", cities: ["bangalore", "mumbai", "delhi", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad", "coimbatore", "mysore", "chandigarh", "jaipur"] },
            { name: "Amazon Fresh/Pantry", link: "https://www.amazon.in/fresh", cities: ["bangalore", "mumbai", "delhi", "chennai", "hyderabad", "kolkata", "pune", "ahmedabad", "chandigarh", "kochi"] },
            { name: "Reliance JioMart", link: "https://www.jiomart.com/", cities: ["all_major_cities", "bangalore", "mumbai", "delhi", "chennai", "hyderabad", "kolkata", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] }, // Broad availability
        ],
        "rides": [
            { name: "Ola Cabs", link: "https://www.olacabs.com/", cities: ["bangalore", "mumbai", "delhi", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] },
            { name: "Uber", link: "https://www.uber.com/in/en/", cities: ["bangalore", "mumbai", "delhi", "chennai", "kolkata", "hyderabad", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] },
            { name: "Rapido (Bike Taxi)", link: "https://www.rapido.bike/", cities: ["bangalore", "chennai", "hyderabad", "mumbai", "delhi", "kolkata", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat", "chandigarh"] },
        ],
        "home": [
            { name: "Urban Company (formerly UrbanClap)", link: "https://www.urbancompany.com/", cities: ["bangalore", "mumbai", "delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "chennai", "hyderabad", "pune", "kolkata", "ahmedabad", "chandigarh", "lucknow"] },
            { name: "Local Service Providers (Justdial)", link: "https://www.justdial.com/", cities: ["all_major_cities", "bangalore", "mumbai", "delhi", "chennai", "hyderabad", "kolkata", "pune", "ahmedabad", "jaipur", "lucknow", "kochi", "chandigarh", "goa", "bhubaneswar", "indore", "patna", "nagpur", "vadodara", "surat"] },
            { name: "Pepperfry (Furniture & Home Goods)", link: "https://www.pepperfry.com/", cities: ["all_major_cities", "bangalore", "mumbai", "delhi", "chennai", "hyderabad", "kolkata", "pune", "ahmedabad", "jaipur", "lucknow", "coimbatore", "chandigarh"] },
        ],
        "ecom": [
            { name: "Amazon India", link: "https://www.amazon.in/", cities: ["pan_india"] }, // Pan India
            { name: "Flipkart", link: "https://www.flipkart.com/", cities: ["pan_india"] }, // Pan India
            { name: "Myntra (Fashion)", link: "https://www.myntra.com/", cities: ["pan_india"] }, // Pan India
            { name: "Meesho (Reselling/E-commerce)", link: "https://meesho.com/", cities: ["pan_india"] }, // Pan India
            { name: "OLX (Classifieds)", link: "https://www.olx.in/", cities: ["pan_india"] }, // Pan India
            { name: "Quikr (Classifieds)", link: "https://www.quikr.com/", cities: ["pan_india"] }, // Pan India
        ],
        "auto": [
            { name: "Cars24 (Used Cars)", link: "https://www.cars24.com/", cities: ["bangalore", "mumbai", "delhi", "gurgaon", "noida", "hyderabad", "pune", "chennai", "kolkata", "ahmedabad", "chandigarh", "jaipur"] },
            { name: "CarDekho (New/Used Cars)", link: "https://www.cardekho.com/", cities: ["pan_india"] }, // Pan India (deals/info, not necessarily transactional at all locations)
            { name: "GoMechanic (Car Services)", link: "https://gomechanic.in/", cities: ["bangalore", "mumbai", "delhi", "gurgaon", "noida", "hyderabad", "pune", "chennai", "kolkata", "ahmedabad", "chandigarh", "jaipur", "lucknow"] },
            { name: "Spinny (Used Cars)", link: "https://www.spinny.com/", cities: ["bangalore", "mumbai", "delhi", "gurgaon", "noida", "hyderabad", "pune", "chennai"] },
        ]
        // Add more categories and services as needed
    };

    // --- Geolocation and Geocoding ---
    let userLocation = {
        lat: null,
        lon: null,
        city: null, // This will be the detected primary city/town name
        display_name: null // Full address string from geocoding
    };

    function showLoading(message = "Detecting location...") {
        currentLocationDisplay.textContent = message;
        loadingDiv.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        errorDiv.classList.add('hidden');
        overallNoServicesMessage.classList.add('hidden');
    }

    function hideLoading() {
        loadingDiv.classList.add('hidden');
    }

    function showError(message) {
        errorMessageP.textContent = message;
        errorDiv.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        hideLoading();
    }

    function hideError() {
        errorDiv.classList.add('hidden');
    }

    async function reverseGeocode(lat, lon) {
        try {
            const response = await fetch(`${NOMINATIM_BASE_URL}reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`);
            const data = await response.json();
            if (data && data.address) {
                // Prioritize city, then town, then village, then state
                userLocation.city = (data.address.city || data.address.town || data.address.village || data.address.state || 'Unknown').toLowerCase();
                userLocation.display_name = data.display_name;
                locationInput.value = data.address.city || data.address.town || data.address.village || data.address.postcode || data.display_name.split(',')[0]; // Pre-fill
                return true;
            }
            return false;
        } catch (e) {
            console.error("Reverse geocoding error:", e);
            // Don't show generic error here, `fetchAndDisplayServices` will handle if `userLocation.city` is null
            return false;
        }
    }

    async function forwardGeocode(address) {
        try {
            const response = await fetch(`${NOMINATIM_BASE_URL}search?format=json&q=${encodeURIComponent(address)}&limit=1&countrycodes=in`);
            const data = await response.json();
            if (data && data.length > 0) {
                userLocation.lat = parseFloat(data[0].lat);
                userLocation.lon = parseFloat(data[0].lon);
                // Now reverse geocode to get the city name from the coordinates found
                await reverseGeocode(userLocation.lat, userLocation.lon);
                return true;
            }
            showError("Could not find coordinates for the entered address. Please be more specific or try another location in India.");
            return false;
        } catch (e) {
            console.error("Forward geocoding error:", e);
            showError("Could not process the address. Please check your input or try again.");
            return false;
        }
    }

    // --- Service Display Logic (Fix for Segregator Tabs) ---
    function displayServices(selectedCategory = 'all') {
        // Clear all previous results and hide all no-services messages
        resultsSections.forEach(section => {
            const list = section.querySelector('.service-list');
            if (list) list.innerHTML = '';
            const noMsg = section.querySelector('.no-services-message');
            if (noMsg) noMsg.classList.add('hidden');
            section.classList.add('hidden'); // Hide all sections initially
        });
        overallNoServicesMessage.classList.add('hidden'); // Hide overall message

        let totalServicesFound = 0;
        const currentCity = userLocation.city;

        // Iterate through all categories to populate their lists and the 'all' list
        for (const categoryKey in serviceData) {
            const servicesForCategory = serviceData[categoryKey].filter(service =>
                currentCity && (service.cities.includes(currentCity) || service.cities.includes("all_major_cities") || service.cities.includes("pan_india"))
            );

            const targetList = document.getElementById(`${categoryKey}ServiceList`);
            const allServiceList = document.getElementById('allServiceList');

            if (servicesForCategory.length > 0) {
                servicesForCategory.forEach(service => {
                    const listItem = `<li><span>${service.name}</span> <a href="${service.link}" target="_blank" rel="noopener noreferrer">Visit Site</a></li>`;
                    
                    // Add to specific category list
                    if (targetList) {
                        targetList.innerHTML += listItem;
                    }
                    // Add to "All Services" list (only once per service)
                    if (allServiceList && categoryKey !== 'all' && !allServiceList.innerHTML.includes(listItem)) { // Prevent duplicates in "All" if services appear in multiple categories (though not in this data structure)
                        allServiceList.innerHTML += listItem;
                    }
                });
                totalServicesFound += servicesForCategory.length;
            } else {
                const noSvcMsg = document.querySelector(`#${categoryKey}-section .no-services-message`);
                if (noSvcMsg) noSvcMsg.classList.remove('hidden');
            }
        }
        
        // Handle "All Services" category separately for its no message
        if (document.getElementById('allServiceList').children.length === 0) {
            document.querySelector('#all-services-section .no-services-message').classList.remove('hidden');
        }

        // Set the results header
        detectedLocationName.textContent = userLocation.display_name || (currentCity ? currentCity.charAt(0).toUpperCase() + currentCity.slice(1) : 'your area');

        // Show/hide overall message
        if (totalServicesFound === 0) {
            overallNoServicesMessage.classList.remove('hidden');
        } else {
            overallNoServicesMessage.classList.add('hidden');
        }
        
        // Now, activate the chosen category's button and show its section
        categoryBtns.forEach(btn => {
            if (btn.dataset.category === selectedCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        document.getElementById(`${selectedCategory}-services-section`).classList.remove('hidden');
        
        resultsContainer.classList.remove('hidden');
    }

    async function fetchAndDisplayServices(locationText = null) {
        showLoading(locationText ? `Checking services for "${locationText}"...` : "Detecting services...");
        hideError();

        userLocation.city = null; // Reset
        userLocation.display_name = null; // Reset

        if (locationText) {
            const success = await forwardGeocode(locationText);
            if (!success || !userLocation.city) {
                hideLoading();
                // Error message already shown by forwardGeocode/reverseGeocode if applicable
                if (!userLocation.city) showError("Could not determine a recognizable city from your input. Please try entering a different location.");
                return;
            }
        } else { // Current location
            // Geolocation already handled lat/lon and city via reverseGeocode
            if (!userLocation.lat || !userLocation.lon || !userLocation.city) {
                showError("Location not fully available. Please use 'Use Current Location' or enter manually.");
                hideLoading();
                return;
            }
        }
        
        displayServices('all'); // Display 'all' by default initially after fetching
        hideLoading();
    }

    // --- Event Listeners ---
    checkServicesBtn.addEventListener('click', () => {
        fetchAndDisplayServices(locationInput.value);
    });

    getLocationBtn.addEventListener('click', () => {
        showLoading("Detecting your current location...");
        hideError();
        userLocation.lat = null; // Reset
        userLocation.lon = null; // Reset
        userLocation.city = null; // Reset
        userLocation.display_name = null; // Reset

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    userLocation.lat = position.coords.latitude;
                    userLocation.lon = position.coords.longitude;
                    const success = await reverseGeocode(userLocation.lat, userLocation.lon);
                    if (success && userLocation.city) {
                        fetchAndDisplayServices();
                    } else {
                        showError("Could not determine your city from current location. Please try entering it manually.");
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    hideLoading();
                    if (error.code === error.PERMISSION_DENIED) {
                        showError("Location access denied. Please allow location access in your browser settings or enter your location manually.");
                    } else if (error.code === error.POSITION_UNAVAILABLE) {
                        showError("Location information is unavailable. Check your device settings.");
                    } else if (error.code === error.TIMEOUT) {
                        showError("Request for location timed out. Try again or enter manually.");
                    } else {
                        showError("An unknown error occurred while retrieving your location. Please try manually.");
                    }
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 } // Geolocation options
            );
        } else {
            hideLoading();
            showError("Geolocation is not supported by your browser. Please enter your location manually.");
        }
    });

    categoryBtns.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            displayServices(category); // Call displayServices with the new category
        });
    });

    locationInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkServicesBtn.click();
        }
    });
});