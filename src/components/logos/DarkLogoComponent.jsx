import Image from "next/image";
import Link from "next/link";

const DarkLogoComponent = ({ className }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Link aria-label="dark-logo" href={"/"}>
        <Image
          alt="image"
          src={"/logos/logo_dark_h.webp"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto`}
        />
      </Link>
    </div>
  );
};

export default DarkLogoComponent;
