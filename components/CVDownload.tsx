import { BsCloudDownload } from "react-icons/bs";

const CVDownload = () => {
  const downloadCV = () => {
    window.open("/CV.pdf", "_blank");
  };
  return (
    <button
      onClick={downloadCV}
      className="inline-flex items-center ml-4 text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
    >
      CV
      <BsCloudDownload className="ml-4" />
    </button>
  );
};

export default CVDownload;
