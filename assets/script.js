const wrapper = document.querySelectorAll(".wrapper")[0],
selectBtn = document.querySelectorAll(".select-btn")[0],
searchInp = document.querySelectorAll("input")[0],
options = document.querySelectorAll(".options")[0];
console.log(options);

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

                 
function addCountry(cntrs,selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

addCountry(countries)

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));



// opt 1

const wrapper1 = document.querySelectorAll(".wrapper")[1],
selectBtn1 = document.querySelectorAll(".select-btn")[1],
searchInp1 = document.querySelectorAll("input")[1];
let options1 = document.querySelectorAll(".options")[1];
console.log(options1);

let countries1 = ["fghj", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
"Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland",];


function addCountry1(selectedCountry) {
    options1.innerHTML = "";
    countries1.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName1(this)" class="${isSelected}">${country}</li>`;
        options1.insertAdjacentHTML("beforeend", li);
    });
}
addCountry1(options1);

function updateName1(selectedLi) {
    searchInp1.value = "";
    addCountry1(selectedLi.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi.innerText;
}

searchInp1.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp1.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName1(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options1.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));
