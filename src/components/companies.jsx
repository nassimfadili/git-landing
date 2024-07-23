import React from "react";
import "../style/tailwind.css";

const brandsData = [
  {
    imageSrc: "/logogit/googleblack.svg",
    lightImageSrc: "/logogit/googlewhite.svg",
    altText: "google",
    link: "https://www.google.fr/",
  },
  {
    imageSrc: "/logogit/microsoftblack.svg",
    lightImageSrc: "/logogit/microsoftwhite.svg",
    altText: "microsoft",
    link: "https://www.microsoft.com/fr-fr/",
  },
  {
    imageSrc: "/logogit/twitterblack.svg",
    lightImageSrc: "/logogit/twitterwhite.svg",
    altText: "twitter",
    link: "https://x.com/",
  },
  {
    imageSrc: "/logogit/linkedinblack.svg",
    lightImageSrc: "/logogit/linkedinwhite.svg",
    altText: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    imageSrc: "/logogit/netflixblack.svg",
    lightImageSrc: "/logogit/netflixblack.svg",
    altText: "netflix",
    link: "https://www.netflix.com/fr/",
  },
  {
    imageSrc: "/logogit/postgreblack.svg",
    lightImageSrc: "/logogit/postgrewhite.svg",
    altText: "postgre SQL",
    link: "https://www.postgresql.org/",
  },
  {
    imageSrc: "/logogit/androidblack.svg",
    lightImageSrc: "/logogit/androidblack.svg",
    altText: "Android",
    link: "https://www.android.com/intl/fr_fr/",
  },
  {
    imageSrc: "/logogit/linuxblack.svg",
    lightImageSrc: "/logogit/linuxwhite.svg",
    altText: "linux",
    link: "https://www.gnu.org/home.fr.html",
  },
  {
    imageSrc: "/logogit/rubyonrailswhite.svg",
    lightImageSrc: "/logogit/rubyonrailswhite.svg",
    altText: "Ruby On Rails",
    link: "https://rubyonrails.org/",
  },
  {
    imageSrc: "/logogit/gnomeblack.svg",
    lightImageSrc: "/logogit/gnomewhite.svg",
    altText: "Gnome",
    link: "https://www.gnome.org/",
  },
];

export default function Brand1() {
  return (
    <div className=" flex flex-col gap-20	py-20 lg:py-[120px] overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gitBlack tracking-tight">
          Gitted Companies & Projects:
        </h1>
      </div>
      <div className="relative">
        <div className="logo-scroll-container">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...brandsData, ...brandsData].map((brand, i) => (
              <SingleImage key={i} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const SingleImage = ({ brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <a
      href={link}
      target="_blank"
      className="inline-flex items-center justify-center mx-12"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="h-36 w-auto transition-opacity duration-300 ease-in-out hover:opacity-75"
      />
    </a>
  );
};
