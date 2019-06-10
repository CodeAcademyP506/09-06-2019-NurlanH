// ROOT DOCUMENT BODY
var body = document.getElementsByTagName("body")[0];
body.style.padding = "0";
body.style.margin = "0";




// HEADER ELEMENT
var header = document.createElement("header");

header.style.width = "100%";
header.style.height = "70px";
header.style.boxSizing = "border-box";
header.style.backgroundImage = "url('images/img1.jpg')";
header.style.backgroundPosition = "71% 47%";
header.style.backgroundRepeat = "no-repeat";
header.style.backgroundSize = "cover";

body.appendChild(header);


// Inside Header
var hSection = document.createElement("div");
hSection.style.width = "80%";
hSection.style.height = "85px";
hSection.style.backgroundColor = "white";
hSection.style.transform = "translate(12%,34%)";
hSection.style.boxShadow = "1px 1px 3px";
hSection.style.display = "flex";
hSection.style.justifyContent = "space-around";
hSection.style.alignItems = "center";

header.appendChild(hSection);



// Inside hSection
var inputCategoryDiv = document.createElement("div");
var category = document.createElement("select");
var categoryOption = document.createElement("option");
var searchInput = document.createElement("input");
var searchBtn = document.createElement("button");

searchBtn.innerText = "Search Course";
searchBtn.style.height = "43px";
searchBtn.style.boxShadow = "2px 2px 0px rgb(255,161,44)";
searchBtn.style.backgroundColor = "rgb(255,161,44)";
searchBtn.style.border = "4px solid white";
searchBtn.style.fontSize = "1em";
searchBtn.style.color = "white";


searchInput.setAttribute("type", "text");


categoryOption.value = "category"
categoryOption.innerText = "All CATEGORIES"


category.style.marginRight = "5px";
category.style.width = "40%";
category.style.border = "1px solid #cdcdcd";
category.style.padding = "10px";


inputCategoryDiv.setAttribute("class", "inptCtgrDiv")
inputCategoryDiv.appendChild(category);
inputCategoryDiv.appendChild(searchInput);


category.appendChild(categoryOption)

inputCategoryDiv.style.width = "60%";
inputCategoryDiv.style.display = "flex";


hSection.appendChild(inputCategoryDiv);
hSection.appendChild(searchBtn);

var selectDefInput = document.querySelectorAll(".inptCtgrDiv input");

selectDefInput[0].style.width = "60%";
selectDefInput[0].style.height = "20px";
selectDefInput[0].style.border = "1px solid #cdcdcd";
selectDefInput[0].style.fontSize = "1.1em";
selectDefInput[0].style.padding = "10px";
selectDefInput[0].setAttribute("placeholder", "COURE KEYWORD");




// MAIN SECTION
var mainSection = document.createElement("section");
var mainSectionDiv = document.createElement("div");
var mainSectionDiv2 = document.createElement("div");
var sDiv1 = document.createElement("div");
var sDiv2 = document.createElement("div");
var sDiv3 = document.createElement("div");
var sDiv4 = document.createElement("div");




mainSection.style.height = "596px";
mainSection.style.backgroundColor = "#ccc";
mainSection.style.boxSizing = "border-box";
mainSection.style.padding = "50px";

body.appendChild(mainSection);



mainSectionDiv.style.height = "auto";
mainSectionDiv.style.textAlign = "center";
mainSectionDiv.style.padding = "50px";
mainSectionDiv.style.fontSize = "1.3em";



var text1 = document.createElement("h2");
var text2 = document.createElement("h2");
var text3 = document.createElement("p");

text1.innerText = "OFFERING THE BEST"
text1.style.marginBottom = "3px"
text2.innerText = "IN EDUCATION TO THE  WORLD"
text2.style.marginTop = "3px"
text2.style.marginBottom = "3px"

text3.innerText = "Sign-up today to join over 6 million learners already on ALISON"
text3.style.marginTop = "3px"
text3.style.marginBottom = "3px"
text3.style.color = "#878787"


mainSectionDiv.appendChild(text1);
mainSectionDiv.appendChild(text2);
mainSectionDiv.appendChild(text3);




// div 2
var image1 = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");
var image4 = document.createElement("img");

var stexth1 = document.createElement("h3")
var stexth2 = document.createElement("h3")
var stexth3 = document.createElement("h3")
var stexth4 = document.createElement("h3")
var stextp1 = document.createElement("p")
var stextp2 = document.createElement("p")
var stextp3 = document.createElement("p")
var stextp4 = document.createElement("p")

mainSectionDiv2.style.height = "300px";
mainSectionDiv2.style.display = "flex";
mainSectionDiv2.style.justifyContent = "space-between";


mainSectionDiv2.setAttribute("id", "mainSdiv")

mainSectionDiv2.appendChild(sDiv1)
mainSectionDiv2.appendChild(sDiv2)
mainSectionDiv2.appendChild(sDiv3)
mainSectionDiv2.appendChild(sDiv4)

mainSectionDiv2.appendChild(stexth1)
mainSectionDiv2.appendChild(stexth2)
mainSectionDiv2.appendChild(stexth3)
mainSectionDiv2.appendChild(stexth4)
mainSectionDiv2.appendChild(stextp1)
mainSectionDiv2.appendChild(stextp2)
mainSectionDiv2.appendChild(stextp3)
mainSectionDiv2.appendChild(stextp4)



mainSection.appendChild(mainSectionDiv);
mainSection.appendChild(mainSectionDiv2);

var selectDivs = document.querySelectorAll("#mainSdiv div")

image1.setAttribute("src", 'images/icon1.png')
image2.setAttribute("src", 'images/icon2.png')
image3.setAttribute("src", 'images/icon3.png')
image4.setAttribute("src", 'images/icon4.png')



selectDivs[0].appendChild(image1)
selectDivs[1].appendChild(image2)
selectDivs[2].appendChild(image3)
selectDivs[3].appendChild(image4)


stexth1.innerText = "Best Learning Comuties"
stexth2.innerText = "Online Teaching Jobs"
stexth3.innerText = "Learn Courses Online"
stexth4.innerText = "Book Library & Store"

stextp1.innerText = "The ideas is to keep the discoussions going after class ends"
stextp2.innerText = "The ideas is to keep the discoussions going after class ends"
stextp3.innerText = "The ideas is to keep the discoussions going after class ends"
stextp4.innerText = "The ideas is to keep the discoussions going after class ends"

selectDivs[0].appendChild(stexth1)
selectDivs[1].appendChild(stexth2)
selectDivs[2].appendChild(stexth3)
selectDivs[3].appendChild(stexth4)
selectDivs[0].appendChild(stextp1)
selectDivs[1].appendChild(stextp2)
selectDivs[2].appendChild(stextp3)
selectDivs[3].appendChild(stextp4)


for (var i = 0; i < selectDivs.length; i++) {
    selectDivs[i].style.width = "24%";
    selectDivs[i].style.height = "250px";
    selectDivs[i].getElementsByTagName("img")[0].style.width = "100px"
    selectDivs[i].style.textAlign = "center";
    selectDivs[i].getElementsByTagName("p")[0].style.color = "#878787"
}



console.log(selectDivs)
