document.getElementById('saveButton').addEventListener('click', async () => {
  const { tabInfo } = await browser.storage.local.get('tabInfo');
  if (tabInfo) {
    const filename = `${tabInfo.title}.md`;
    const content = `\n[${tabInfo.title}](${tabInfo.url})\n___\n\n`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: 'Markdown Files',
          accept: { 'text/markdown': ['.md'] },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();

    window.close();
  }
});
