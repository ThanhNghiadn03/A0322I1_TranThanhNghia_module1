let fibo1 = 1;
let fibo2 = 1;
let number = 0;
while (number == 0) {
    fibo1 = fibo1 + fibo2;
    fibo2 = fibo2 + fibo1;
    if (fibo1%5==0) {
        number = fibo1;
    } else if (fibo2%5==0) {
        number = fibo2;
    }
}
document.write('Số đầu tiên trong dãy fibonacci chia hết cho 5 là : ' + number);