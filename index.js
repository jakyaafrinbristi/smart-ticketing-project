let totalPrice = 0;
let seatNumber = 0;
const buttons = document.querySelectorAll(".all-btn");

const seatNumberElement = document.getElementById("seat-number");
const seatLeftElement = document.getElementById("seats-left");
let seatLeft = parseInt(seatLeftElement.innerText);


// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    // console.log(button);
    button.addEventListener("click", function () {
        // console.log("clicked");

        const seat = button.querySelector("span").innerText;



        const tableContainer = document.getElementById('tbody-container');
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${seat}</td>
        <td>economy</td>
        <td>550</td>`
        tableContainer.appendChild(tr);
        totalPrice += 550;
        document.getElementById("total-id").innerText = totalPrice.toFixed(2);;
        document.getElementById("grand-total").innerText = totalPrice.toFixed(2);
        if (seatNumber < 4){
        button.style.backgroundColor = '#1DD100';
        }else{
            alert("You cannot click other sit number")
        }

        if (seatNumber < 8 && seatLeft > 0) {
           
            seatNumber++;
            updateSeatNumber(seatNumber);
            seatLeft--;
            seatLeftElement.innerText = seatLeft;
        }
    })
}
function updateSeatNumber(number) {
    seatNumberElement.innerText = number;
}
const btn =document.getElementById("apply-btn");
btn.addEventListener("click",function(){
    const couponElement = document.getElementById('input-field').value ;
    const couponCode =couponElement.split(' ').join("").toUpperCase();
    console.log(couponCode);
    
        if(couponCode === "NEW15"){
            const discountElement =document.getElementById('discountPrice');
            const discountAmount = totalPrice *0.15;
            discountElement.innerText=discountAmount.toFixed(2);
            const grandTotal =document.getElementById('grand-total');
            grandTotal.innerText= totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-field').value ="";
            

        }else{
            alert("Invalid coupone")
        }

})



