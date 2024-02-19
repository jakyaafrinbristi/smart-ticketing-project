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
            alert("you can not click other sit number")
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



