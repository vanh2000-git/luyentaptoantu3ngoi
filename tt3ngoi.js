// Bai 1
let a = prompt("a: ");
let b = prompt("b: ");
result = (a + b < 4) ? 'Below' : 'Over';
document.write(result);
// BAI 2
let login = prompt("Enter:");
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);