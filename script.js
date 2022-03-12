function compute()
{
    yearInFuture = new Date().getFullYear()+parseInt(years.value);
    if(principal.value <= 0){
        result.innerHTML = "<p> Enter a positive number.</p>"
        principal.focus()
        return
    } else {
        let interest = principal.value * years.value * rate.value / 100;

        result = document.getElementById("result")
        result.innerHTML = "<p>If you deposit <mark>" + principal.value + "</mark>,<br>an interest rate of <mark>"
            + rate.value + "%</mark>.<br>You will receive an amount of <mark>"
            + interest + "</mark>,<br>in the year <mark>" + yearInFuture + "</mark></p>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}