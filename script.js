const donationBtn = document.querySelector(".donation-btn");
const historyBtn = document.querySelector(".history-btn");
const donation = document.getElementById("donation");
const history = document.getElementById("history");

let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')

let donateBtn1 = document.getElementById('donateBtn1');
let donateBtn2 = document.getElementById('donateBtn2');
let donateBtn3 = document.getElementById('donateBtn3');

let balanceElement=document.getElementById("balance");
let fund1Element = document.getElementById("fund1");
let fund2Element = document.getElementById("fund2");
let fund3Element = document.getElementById("fund3");

let balance = parseFloat(balanceElement.innerText);
let fund1 = parseFloat(fund1Element.innerText);
let fund2 = parseFloat(fund2Element.innerText);
let fund3 = parseFloat(fund3Element.innerText);

let fundName1 = document.getElementById('fundName1');
let fundName2 = document.getElementById('fundName2');
let fundName3 = document.getElementById('fundName3');

donationBtn.addEventListener('click',function(){
    sectionCng(donation);
})
historyBtn.addEventListener('click',function(){
    sectionCng(history);
})

donationBtn.addEventListener("click", function() {
    donationBtn.classList.remove("bg-slate-200");
    donationBtn.classList.add("bg-green-400");
    historyBtn.classList.remove("bg-green-400");
    historyBtn.classList.add("bg-slate-200");
})
historyBtn.addEventListener("click", function() {
    donationBtn.classList.remove("bg-green-400");
    donationBtn.classList.add("bg-slate-200");
    historyBtn.classList.remove("bg-slate-200");
    historyBtn.classList.add("bg-green-400");
});

donateBtn1.addEventListener('click',function(){
    let inputValue = parseFloat(input1.value)    
    input(inputValue,fund1,fund1Element,fundName1)
    if (!isNaN(inputValue) && inputValue > 0 && balance > inputValue){
        fund1 = fund1 + inputValue;
    }
    input1.value=''
});
donateBtn2.addEventListener('click',function(){
    let inputValue = parseFloat(input2.value)
    input(inputValue,fund2,fund2Element,fundName2)
    if (!isNaN(inputValue) && inputValue > 0 && balance > inputValue){
        fund2 = fund2 + inputValue;
    }
    input2.value=''
});
donateBtn3.addEventListener('click',function(){
    let inputValue = parseFloat(input3.value)
    input(inputValue,fund3,fund3Element,fundName3)
    if (!isNaN(inputValue) && inputValue > 0 && balance > inputValue){
        fund3 = fund3 + inputValue;
    }
    input3.value=''
});

// popUp
const popUp = document.getElementById("pop-up");
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click',function(){
    popUp.classList.add('hidden')
});

// blog
const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click',function(){
    window.location.href = 'blog.html';
})

// home
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click',function(){
    window.location.href = 'index.html';
})