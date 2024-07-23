import { Search } from "lucide-react";
import "../style/tailwind.css"; // Assurez-vous que ce fichier existe et contient des styles personnalisés si nécessaire

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row m-5 gap-3">
        <img src="../images/social.svg" className="w-12" alt="Social Icon" />
        <img src="../images/git.svg" className="w-12" alt="Git Icon" />
      </div>
      <div>
        <ul className="flex flex-row gap-10 m-5 text-XL text-slate-900 items-center cursor-pointer">
          <li className="text-shadow-orange-light">About</li>
          <li className="text-shadow-orange-light">Documentation</li>
          <li className="text-shadow-orange-light">Downloads</li>
          <li className="text-shadow-orange-light">Community</li>
          <li>
            <Search size={20} className="text-shadow-orange-light" />
          </li>
        </ul>
      </div>
    </div>
  );
}
