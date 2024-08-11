import { FiDownload } from 'react-icons/fi'

function DownloadResume(): JSX.Element {
  const handleDownload = (): void => {
    const pdfUrl = '/ivymariequillosa.pdf' // Path to your PDF file
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `IvyMarieQuillosa2024.pdf` // Name of the downloaded file
    link.click()
  }

  return (
    <button
      className="flex items-center gap-x-1 text-xs"
      onClick={handleDownload}
      type="button"
    >
      <FiDownload className="h-3 w-3" />
      Resume
    </button>
  )
}

export default DownloadResume
