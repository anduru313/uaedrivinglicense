import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faBuilding,
  faCarSide,
  faCircleCheck,
  faCircleInfo,
  faCircleQuestion,
  faClipboardList,
  faCoins,
  faCommentDots,
  faEnvelope,
  faEye,
  faFileCircleCheck,
  faFileLines,
  faGaugeHigh,
  faGlobe,
  faGraduationCap,
  faIdCard,
  faLock,
  faMagnifyingGlass,
  faRightLeft,
  faSackDollar,
  faShieldHalved,
  faStar,
  faStethoscope,
  faTriangleExclamation,
  faUser,
  faUsers,
  faWallet,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { ComponentProps } from "react";

type IconProps = Omit<ComponentProps<typeof FontAwesomeIcon>, "icon">;

function createIcon(icon: IconDefinition) {
  return function SiteIcon({ className = "", ...props }: IconProps) {
    return (
      <FontAwesomeIcon
        icon={icon}
        className={className.replace(/\bw-(\d+(?:\.\d+)?)\b/g, "w-auto")}
        {...props}
      />
    );
  };
}

export const AlertTriangle = createIcon(faTriangleExclamation);
export const ArrowLeft = createIcon(faArrowLeft);
export const ArrowRight = createIcon(faArrowRight);
export const ArrowRightLeft = createIcon(faRightLeft);
export const BadgeCheck = createIcon(faCircleCheck);
export const BadgeDollarSign = createIcon(faSackDollar);
export const BookCheck = createIcon(faBookOpen);
export const Building2 = createIcon(faBuilding);
export const CarFront = createIcon(faCarSide);
export const CircleDollarSign = createIcon(faCoins);
export const ClipboardList = createIcon(faClipboardList);
export const Eye = createIcon(faEye);
export const FileCheck = createIcon(faFileCircleCheck);
export const FileText = createIcon(faFileLines);
export const Gauge = createIcon(faGaugeHigh);
export const Globe2 = createIcon(faGlobe);
export const GraduationCap = createIcon(faGraduationCap);
export const HelpCircle = createIcon(faCircleQuestion);
export const IdCard = createIcon(faIdCard);
export const Info = createIcon(faCircleInfo);
export const LockKeyhole = createIcon(faLock);
export const Mail = createIcon(faEnvelope);
export const Menu = createIcon(faBars);
export const MessageCircle = createIcon(faCommentDots);
export const MessageCircleQuestion = createIcon(faCircleQuestion);
export const SearchCheck = createIcon(faMagnifyingGlass);
export const SearchX = createIcon(faMagnifyingGlass);
export const ShieldCheck = createIcon(faShieldHalved);
export const Star = createIcon(faStar);
export const Stethoscope = createIcon(faStethoscope);
export const UserRound = createIcon(faUser);
export const Users = createIcon(faUsers);
export const WalletCards = createIcon(faWallet);
export const WhatsApp = createIcon(faWhatsapp);