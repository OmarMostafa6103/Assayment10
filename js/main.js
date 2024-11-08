var siteNameInput= document.getElementById('siteNameInput');
var siteURLInput= document.getElementById('siteURLInput');
var sitesList=[];

if (localStorage.getItem("sites") != null){
sitesList = JSON.parse(localStorage.getItem("sites"))
displayData();
}

function addSite(){
    if(validationName() == true && validationURL() == true ){
    var sites={
        name: siteNameInput.value,
        link: siteURLInput.value,
    }

    sitesList.push(sites);
    displayData();
    clearForm();
    siteNameInput.classList.remove("is-valid");
    siteURLInput.classList.remove("is-valid");
    }else{
        document.getElementById("modal").click();

    }}

function clearForm(){
    siteNameInput.value="";
    siteURLInput.value="";
}

function displayData(){
    var cartona="";
    for(i=0 ; i< sitesList.length ; i++){
        cartona+=`<tr>
            <td>${i+1}</td>
            <td class="s-col">${sitesList[i].name}</td>
            <td>
            <a href="${sitesList[i].link}" target="_blank"><button class="btn btn-sm visit"><i class="fa-solid fa-eye">  </i>  visit</button></a>
            </td>
            <td>
            <button onclick="deletItem(${i})" class="btn btn-sm delet"><i class="fa-solid fa-trash-can"> </i>  Delete</button>
            </td>
            </tr>`;
    }
    document.getElementById('tableBody').innerHTML= cartona;
    localStorage.setItem("sites" , JSON.stringify(sitesList) )
}
function deletItem(index){
    sitesList.splice( index , 1 );
    displayData();
}
function validationName(){
    var text= siteNameInput.value;
    var regexName= /^\w{4}/;

    if( regexName.test(text) == true){
        siteNameInput.classList.add("is-valid");
        siteNameInput.classList.remove("is-invalid");
        return true;
    }else if( regexName.test(text) == false){
        siteNameInput.classList.add("is-invalid");
        siteNameInput.classList.remove("is-valid");
        return false;
    }
}
function validationURL(){
    var text= siteURLInput.value;
    var regexName= /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;

    if( regexName.test(text) == true){
        siteURLInput.classList.add("is-valid");
        siteURLInput.classList.remove("is-invalid");
        return true;
    }else if( regexName.test(text) == false){
        siteURLInput.classList.add("is-invalid");
        siteURLInput.classList.remove("is-valid");
        return false;
    }
}
