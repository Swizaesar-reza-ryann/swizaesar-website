/**
 * Utility function for downloading files
 */

/**
 * Downloads a file from the given path
 * @param filePath - Path to the file to download
 * @param fileName - Name of the file when downloaded
 * @param openInNewTab - Whether to open in new tab (default: false)
 */
export const downloadFile = (
  filePath: string,
  fileName: string,
  openInNewTab: boolean = false
) => {
  if (openInNewTab) {
    // Open in new tab
    window.open(filePath, '_blank');
  } else {
    // Create download link
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Downloads CV PDF
 * @param openInNewTab - Whether to open in new tab (default: false)
 */
export const downloadCV = (openInNewTab: boolean = false) => {
  downloadFile(
    '/assets/document/Swizaesar_CV.pdf',
    'Swizaesar_CV.pdf',
    openInNewTab
  );
};
