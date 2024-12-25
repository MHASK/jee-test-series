export const exportAsImage = async (element: HTMLElement, format: string) => {
  const canvas = await html2canvas(element);
  const link = document.createElement('a');
  link.download = `marketing-asset.${format}`;
  link.href = canvas.toDataURL(`image/${format}`);
  link.click();
}; 