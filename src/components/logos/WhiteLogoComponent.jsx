import Image from "next/image";
import Link from "next/link";

const WhiteLogoComponent = ({ className, lang }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Link aria-label="light-logo" href={`/${lang}/`}>
        <Image
          alt="image"
          src={"/logos/hudson_Intl_full_logo_white.webp"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto`}
        />
      </Link>
    </div>
  );
};

export default WhiteLogoComponent;
