
const shayaris = [
    "Zindagi se koi shikayat na ho, \nKisi ka saath ho ya tanha ho, \nKhud ko khud se pyaar karo, \nKyunki aap jaise koi aur kahan ho!",
    "Dosto ke saath muskurane ka maza alag hai, \nDil ke armaan chupane ka maza alag hai, \nApne dil ki baat kehna seekh lo, \nKyuki bekarar rehne ka maza alag hai!",
    "Chaand ko dekh kar dil bechain ho jata hai, \nTaron ki chamak se kuch yaad aata hai, \nZindagi mein bas ek cheez chahiye, \nJo hamesha saath ho, vo muskaan lata hai!",
    "Mohabbat ke safar mein hum chale, \nKhwabon ke ujaale mein hum pale, \nDil ki baatein dil se kehna seekh lo, \nKyunki zindagi mein pyaar ka maza alag hai!",
    "Har shaam ek kahani hai, \nHar raath ek nayi dastaan hai, \nDosto ke saath muskurana hai, \nZindagi ko khushiyo se sajana hai!",
  ];
  
  const shayariElement = document.getElementById("shayari");
  const generateButton = document.getElementById("generate-btn");
  
  generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * shayaris.length);
    shayariElement.textContent = shayaris[randomIndex];
  });
  