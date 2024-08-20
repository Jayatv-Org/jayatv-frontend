import { StaticImageData } from "next/image";
import { IconProps, Icons } from "./ui/Icons";

import row1Image1 from "../../public/assets/galleryComponentAssests/row-1-1.jpg";
import row1Image2 from "../../public/assets/galleryComponentAssests/row-1-2.jpeg";
import row1Image3 from "../../public/assets/galleryComponentAssests/row-1-3.jpg";
import row1Image4 from "../../public/assets/galleryComponentAssests/row-1-4.jpeg";
import row2Image1 from "../../public/assets/galleryComponentAssests/row-2-1.jpg";
import row2Image2 from "../../public/assets/galleryComponentAssests/row-2-2.jpg";
import row2Image3 from "../../public/assets/galleryComponentAssests/row-2-3.jpg";
import row2Image4 from "../../public/assets/galleryComponentAssests/row-2-4.jpeg";
import row3Image1 from "../../public/assets/galleryComponentAssests/row-3-1.jpeg";
import row3Image2 from "../../public/assets/galleryComponentAssests/row-3-2.jpeg";
import row3Image3 from "../../public/assets/galleryComponentAssests/row-3-3.jpeg";
import row3Image4 from "../../public/assets/galleryComponentAssests/row-3-4.jpeg";

export const row1: StaticImageData[] = [
    row1Image1,
    row1Image2,
    row1Image3,
    row1Image4,
  ];
  export const row2: StaticImageData[] = [
    row2Image1,
    row2Image2,
    row2Image3,
    row2Image4,
  ];
  export const row3: StaticImageData[] = [
    row3Image1,
    row3Image2,
    row3Image3,
    row3Image4,
  ];
export type contact = {
  href: string;
  title: string;
  Icon: (props: IconProps) => JSX.Element;
  description: string;
  details: string;
};

export const contacts: contact[] = [

  {
    title: "Phone",
    href: "tel:12345678",
    description: "Mon-Fri from 8am to 5pm.",
    details: "+xxxxxxxx",
    Icon: Icons.phone,
  },
  {
    title: "Address",
    href: "https://maps.app.goo.gl/D8UvitobhSkhsyJZ6",
    description: "Jaya tv head office.",
    details:
      "Jaya Tv,",
    Icon: Icons.map,
  },
];

export type socialLink = {
  Icon: (props: IconProps) => JSX.Element;
  linkText: string;
  to: string;
};

export const socialLinks: socialLink[] = [
  {
    Icon: Icons.facebook,
    linkText: "Facebook",
    to: "https://web.facebook.com/Jayatv.lk/?_rdc=1&_rdr",
  },
  {
    Icon: Icons.youtube,
    linkText: "Youtube",
    to: "https://www.youtube.com/channel/UCzbjAV5aqbJ790BcD3LkSJg",
  },
  {
    Icon: Icons.linkedIn,
    linkText: "Instergram",
    to: "https://www.instagram.com/jaya_television/",
  },
];
