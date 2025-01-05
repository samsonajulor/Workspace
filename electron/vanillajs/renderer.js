const infoElement = document.getElementById('info');

(async () => {
  const result = await window.quikdbAPI.init();
  if (result.success) {
    infoElement.innerText = `QuikDB initialized successfully! Response: ${JSON.stringify(result)}`;
  } else {
    infoElement.innerText = `Failed to initialize QuikDB: ${JSON.stringify(result)}`;
  }
})();
