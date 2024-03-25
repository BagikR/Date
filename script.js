document.getElementById('digitsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const digits = document.getElementById('digits').value; // Отримати рядок цифр
    const birthDigits = digits.substr(0, 5); // Перші 5 цифр - дата народження
    const genderDigit = digits.charAt(8); // 9 цифра - позначення статі

    const birthDate = formatDate(birthDigits);
    const gender = determineGender(parseInt(genderDigit));

    document.getElementById('result').innerHTML = `
        <p>Ваша дата народження: ${birthDate}</p>
        <p>Ваша стать: ${gender}</p>
    `;
});

function formatDate(digits) {
    const birthDate = new Date(1899, 11, 31);
    const days = parseInt(digits);
    birthDate.setDate(birthDate.getDate() + days);
    const day = String(birthDate.getDate()).padStart(2, '0');
    const month = String(birthDate.getMonth() + 1).padStart(2, '0');
    const year = birthDate.getFullYear();

    return `${day}.${month}.${year}`;
}

function determineGender(digit) {
    return digit % 2 === 0 ? 'жінка' : 'чоловік';
}
