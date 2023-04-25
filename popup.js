function sendWhatsapp(e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.replace(/\W/g, "");
  const message = document.getElementById("message").value;
  const url = `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

  if (phone.length < 10) {
    alert("Please enter a valid phone number");
    return;
  }

  chrome.tabs.query({ url: 'https://web.whatsapp.com/*' }, (tabs) => {
    if (tabs.length) {
      chrome.tabs.update(tabs[0].id, { active: true, url });
    } else {
      chrome.tabs.create({ url });
    }
  });
}

document.getElementById("form").addEventListener("submit", sendWhatsapp);