function download(filename, content) {
	const blob = new Blob([content], { type: 'text/markdown' });
	const url = URL.createObjectURL(blob);
	
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	
	setTimeout(() => {
	  document.body.removeChild(a);
	  URL.revokeObjectURL(url);
	}, 0);
  }
  
  browser.commands.onCommand.addListener(async (command) => {
	if (command === "save-tab-info") {
	  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	  if (tab) {
		const filename = `${tab.title}.md`;
		const content = `\n[${tab.title}](${tab.url})\n___\n\n`;
		download(filename, content);
	  }
	}
  });
  