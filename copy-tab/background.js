function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

browser.commands.onCommand.addListener(async (command) => {
  if (command === "copy-tab-info") {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      const markdown = `[${tab.title}](${tab.url})`;
      copyToClipboard(markdown);
      console.log("Tab info copied to clipboard:", markdown);
    }
  }
});
