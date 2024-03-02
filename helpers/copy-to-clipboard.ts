export async function copyToClipboard(content: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(content);
  } else {
    return document.execCommand('copy', true, content);
  }
}
