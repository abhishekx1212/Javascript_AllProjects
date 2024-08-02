const states = [
    {
        state: "Andhra Pradesh",
        districts: [
            "Select District",
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "Godavari",
            "Kadapa"
        ]
    },
    {
        state: "Arunachal Pradesh",
        districts: [
            "Select District",
            "Tawang",
            "Papum Pare",
            "Kurung Kumey",
            "Dibang Valley",
            "Changlang",
            "Tirap",
            "Longding"
        ]
    },
    {
        state: "Assam",
        districts: [
            "Select District",
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
        ]
    },
    {
        state: "Bihar",
        districts: [
            "Select District",
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
        ]
    },
    {
        state: "Chandigarh",
        districts: [
            "Select District",
            "Chandigarh"
        ]
    },
    {
        state: "Chhattisgarh",
        districts: [
            "Select District",
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada ",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham",
            "Kanker",
            "Kondagaon",
            "Korba",
            "Korea",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"
        ]
    },
    {
        state: "Dadra and Nagar Haveli",
        districts: [
            "Select District",
            "Dadra & Nagar Haveli"
        ]
    },
    {
        state: "Daman and Diu",
        districts: [
            "Select District",
            "Daman",
            "Diu"
        ]
    },
    {
        state: "Delhi",
        districts: [
            "Select District",
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "Shahdara",
            "West Delhi"
        ]
    },
    {
        state: "Goa",
        districts: [
            "Select District",
        ]
    },
    {
        state: "Gujarat",
        districts: [
            "Select District",
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Banaskantha",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dang",
            "Dwarka",
            "Gandhinagar",
            "Jamnagar",
            "Junagadh",
            "Kheda",
            "Mahisagar",
            "Morbi",
            "Narmada",
            "Navsari",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Surat",
            "Surendranagar",
            "Tapi",
            "Vadodara",
            "Valsad"
        ]
    },
    {
        state: "Haryana",
        districts: [
            "Select District",
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
        ]
    },
    {
        state: "Himachal Pradesh",
        districts: [
            "Select District",
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kinnaur",
            "Kullu",
            "Mandi",
            "Shimla",
            "Sirmaur",
            "Solan",
            "Una"
        ]
    },
    {
        state: "Jammu and Kashmir",
        districts: [
            "Select District",
            "Anantnag",
            "Bandipore",
            "Baramulla",
            "Budgam",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kargil",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Leh",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"
        ]
    },
    {
        state: "Jharkhand",
        districts: [
            "Select District",
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
        ]
    },
    {
        state: "Karnataka",
        districts: [
            "Select District",
            "Bagalkot",
            "Ballari (Bellary)",
            "Belagavi (Belgaum)",
            "Bengaluru (Bangalore) Rural",
            "Bengaluru (Bangalore) Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikballapur",
            "Chikkamagaluru (Chikmagalur)",
            "Chitradurga",
            "Dakshina Kannada",
            "Davangere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi (Gulbarga)",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru (Mysore)",
            "Raichur",
            "Ramanagara",
            "Shivamogga (Shimoga)",
            "Tumakuru (Tumkur)",
            "Udupi",
            "Uttara Kannada (Karwar)",
            "Vijayapura (Bijapur)",
            "Yadgir"
        ]
    },
    {
        state: "Kerala",
        districts: [
            "Select District",
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
        ]
    },
    {
        state: "Madhya Pradesh",
        districts: [
            "Select District",
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
        ]
    },
    {
        state: "Maharashtra",
        districts: [
            "Select District",
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
        ]
    },
    {
        state: "Manipur",
        districts: [
            "Select District",
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
        ]
    },
    {
        state: "Meghalaya",
        districts: [
            "Select District",
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
        ]
    },
    {
        state: "Mizoram",
        districts: [
            "Select District",
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"
        ]
    },
    {
        state: "Nagaland",
        districts: [
            "Select District",
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ]
    },
    {
        state: "Odisha",
        districts: [
            "Select District",
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Sonepur",
            "Sundargarh"
        ]
    },
    {
        state: "Puducherry",
        districts: [
            "Select District",
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"
        ]
    },
    {
        state: "Punjab",
        districts: [
            "Select District",
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"
        ]
    },
    {
        state: "Rajasthan",
        districts: [
            "Select District",
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
        ]
    },
    {
        state: "Sikkim",
        districts: [
            "Select District",
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
        ]
    },
    {
        state: "Tamil Nadu",
        districts: [
            "Select District",
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Salem",
            "Sivaganga",
            "Thanjavur",
            "Theni",
            "Thoothukudi (Tuticorin)",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
        ]
    },
    {
        state: "Telangana",
        districts: [
            "Select District",
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhoopalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal (Rural)",
            "Warangal (Urban)",
            "Yadadri Bhuvanagiri"
        ]
    },
    {
        state: "Tripura",
        districts: [
            "Select District",
            "Dhalai",
            "Gomati",
            "Khowai",
            "Sepahijala",
            "Unakoti",
        ]
    },
    {
        state: "Uttarakhand",
        districts: [
            "Select District",
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
        ]
    },
    {
        state: "Uttar Pradesh",
        districts: [
            "Select District",
            "Agra",
            "Aligarh",
            "Allahabad",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Faizabad",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "RaeBareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
        ]
    },
    {
        state: "West Bengal",
        districts: [
            "Select District",
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Burdwan (Bardhaman)",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
        ]
    }
]

for (let val of states) {
    document.querySelector('#selectValue').innerHTML += `
    <option id="opt" value="${val.state}">${val.state}</option>
    `
}

let API = 'enter your id';
let mySelect = document.querySelector('#selectValue');
let mySelect2 = document.querySelector('#selectValue2');

const commonSelect = (place) => {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API}`,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var weather = response.main;
            var humidity = weather.humidity;
            var pressure = weather.pressure;
            var temp = weather.temp;
            var place = response.name;

            document.querySelector('#result').innerHTML = `
            <ul class="p-0 ps-2">
                <li><span style="color:lightcoral;"><i class="fa-solid fa-location-dot"></i> PLACE: ${place}</span></li>
                <li class="py-3"><span style="color:lightsalmon;"><i class="fa-solid fa-temperature-half"></i> TEMPERATURE: ${temp}</span></li>
                <li><span style="color:lightskyblue;"><i class="fa-solid fa-fire"></i> HUMIDITY: ${humidity}%</span></li>
                <li class="pt-3"><span style="color:violet;"><i class="fa-solid fa-gauge-high"></i> PRESSURE: ${pressure} psi</span></li>
            </ul>
            `
        }
    })
}

mySelect.addEventListener('change', function stateSelect() {
    let Selectstate = this.value;
    commonSelect(Selectstate);
    citySelect(Selectstate);
});

function citySelect(SelectedState) {
    const result = states.find((item) => {
        return item.state === SelectedState
    })

    document.querySelector('#selectValue2').innerHTML = "";

    let cities = result.districts;

    for (let val of cities) {
        document.querySelector('#selectValue2').innerHTML += `
        <option id="opt" value="${val}">${val}</option>
        `
    }

}

mySelect2.addEventListener('change', function citySelect() {
    let city = this.value;
    commonSelect(city);
});

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    for (let val of states) {
        document.querySelector('#selectValue').innerHTML += `
        <option id="opt" value="${val.state}">${val.state}</option>
        `
    }

    document.querySelector('#selectValue2').innerHTML = `<option id="opt" value="">Select District</option>`;
    document.querySelector('#result').innerHTML = "";
})



