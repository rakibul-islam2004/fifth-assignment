function sectionCng(id){
    donation.classList.add('hidden');
    history.classList.add('hidden');
    id.classList.remove('hidden');
}

function input(inputValue,fund,fundElement,fundName){
         
    if (isNaN(inputValue) || inputValue < 0)
    {
        alert('Invalid Donation amount!')
    }
    else if (balance < inputValue){
        alert("Your account does not have enough balance!")
    }
    else{
        balance = balance - inputValue;
        fund = fund + inputValue;
        balanceElement.innerText = balance;
        fundElement.innerText = fund;

        // history
        let h2 = document.createElement('h2');
        h2.textContent = `${inputValue} Taka is Donated for ${fundName.innerText}`;
        h2.classList.add('text-xl', 'font-semibold');
        
        let date = document.createElement('p');
        date.textContent = new Date().toLocaleString(); 
        
        let div = document.createElement('div');
        div.classList.add('my-5', 'md:my-10','p-5', 'md:p-10','w-[90%]', 'md:w-[80%]', 'bg-gray-50', 'rounded-md', 'border-2', 'border-gray-100', 'mx-auto'); 
        div.append(h2, date);
        history.append(div);     
        
        // popUp
        popUp.classList.remove('hidden') 
    }
}