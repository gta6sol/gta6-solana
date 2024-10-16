import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/big6.jpg";
import benefitTwoImg from "../../public/img/gta6_lolo.png";

const benefitOne = {
  title: "Maximize your passion",
  desc: "You can show your love for your favorite game by purchasing our token. It’s just like buying something you truly cherish—not for the return, but simply to support what has always captured your heart.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand our Community",
      desc: "We know what everyone wants, included us.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Increase bond",
      desc: "The community can strengthen the bond between each other.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Make money while supporting your passion",
      desc: "By purchasing our token, you not only support what you love but also have the opportunity to earn along the way.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mystery Rewards Coming Soon...",
  desc: "Supporting our GTA6 community offers more than just emotional satisfaction. we will be giving special rewards once its released, might be anything...",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Fast Notification to Updates",
      desc: "Be the earliest to receive updates on GTA6 news, trailers, and special announcements before the others.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Special Giveaways and Events",
      desc: "Participate in exclusive giveaways, including GTA6 copies, community events, and more exciting rewards.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
