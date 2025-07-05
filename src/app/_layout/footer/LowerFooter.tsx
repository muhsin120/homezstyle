import Link from "next/link";

const LowerFooter = () => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <div className="bg-blue-950 text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} malbriz infotech. All rights reserved.
      </div>
    </div>
  );
};

export default LowerFooter;
