document.getElementById('sortBtn').addEventListener('click', async () => {
  const term = document.getElementById('searchTerm').value;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (searchTerm) => {
      const rawText = document.body.innerText || document.body.textContent;
      const lines = rawText.split('\n').filter(line => line.trim() !== "");

      // Case-insensitive search
      const matches = lines.filter(line => line.toLowerCase().includes(searchTerm.toLowerCase()));
      const others = lines.filter(line => !line.toLowerCase().includes(searchTerm.toLowerCase()));

      document.body.innerHTML = `<pre style="font-family: monospace; padding: 20px;">${[...matches, ...others].join('\n')}</pre>`;
    },
    args: [term]
  });
});
