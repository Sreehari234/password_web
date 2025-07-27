function generatepassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("includelowercase").checked;
    const includeUppercase = document.getElementById("includeuppercase").checked;
    const includeNumbers = document.getElementById("includenumbers").checked;
    const includeSymbols = document.getElementById("includesymbols").checked;

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars = "";
    if (includeLowercase) allChars += lowercasechars;
    if (includeUppercase) allChars += uppercasechars;
    if (includeNumbers) allChars += numberchars;
    if (includeSymbols) allChars += symbolchars;

    if (allChars.length === 0) {
        document.getElementById("result").textContent = "Please select at least one character type.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
    }

    document.getElementById("result").textContent = password;
}
