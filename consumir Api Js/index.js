const API = "http://127.0.0.1:8000/api/companies/";
let companies = null;

const getCompanies = async () => {
    const res = await fetch(API);
    const data = await res.json();
    companies = data.companies;
}

window.addEventListener("load", function () {
    getCompanies();
})