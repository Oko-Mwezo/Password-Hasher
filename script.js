async function hashPassword() {
  const password = document.getElementById('passwordInput').value;
  if (!password) {
    alert("Please enter a password.");
    return;
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  try {
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById('hashedOutput').value = hashHex;
  } catch (error) {
    console.error("Hashing error:", error);
    document.getElementById('hashedOutput').value = "Error generating hash.";
  }
}
