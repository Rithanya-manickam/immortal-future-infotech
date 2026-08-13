import shotIis from "@/assets/shot-iis.png.asset.json";
import shotHrm from "@/assets/shot-hrm.png.asset.json";
import shotCampus from "@/assets/shot-campus.png.asset.json";
import shotWorktrack from "@/assets/shot-worktrack.png.asset.json";
import holoAskbot from "@/assets/holo-askbot.jpg";

export type ExhibitLayout = {
  image: string;
  /** where the card sits in the zig-zag composition */
  align: "left" | "right" | "center";
  /** relative card width on desktop */
  width: string;
  /** media aspect */
  media: string;
  /** vertical nudge for the asymmetric rhythm */
  offset: string;
  /** entrance direction */
  from: "left" | "right" | "up";
  rotate: number;
  radius: string;
  /** image cropping focus */
  fit: string;
};

export const PRODUCT_IMAGES: Record<string, string> = {
  iis: shotIis.url,
  askbot: holoAskbot,
  hrm: shotHrm.url,
  campus: shotCampus.url,
  worktrack: shotWorktrack.url,
};

/** Each product gets its own shape, position and motion — never the same card twice. */
export const EXHIBIT: Record<string, ExhibitLayout> = {
  iis: {
    image: shotIis.url,
    align: "left",
    width: "lg:w-[62%]",
    media: "aspect-[16/9]",
    offset: "lg:mt-0",
    from: "left",
    rotate: -1.4,
    radius: "rounded-[28px]",
    fit: "object-left-top",
  },
  askbot: {
    image: holoAskbot,
    align: "right",
    width: "lg:w-[46%]",
    media: "aspect-[4/5]",
    offset: "lg:-mt-24",
    from: "right",
    rotate: 2.2,
    radius: "rounded-[40px]",
    fit: "object-center",
  },
  hrm: {
    image: shotHrm.url,
    align: "center",
    width: "lg:w-[70%]",
    media: "aspect-[21/9]",
    offset: "lg:-mt-10",
    from: "up",
    rotate: -0.8,
    radius: "rounded-[20px]",
    fit: "object-left-top",
  },
  campus: {
    image: shotCampus.url,
    align: "left",
    width: "lg:w-[54%]",
    media: "aspect-[3/2]",
    offset: "lg:-mt-8",
    from: "left",
    rotate: 1.6,
    radius: "rounded-[34px]",
    fit: "object-left-top",
  },
  worktrack: {
    image: shotWorktrack.url,
    align: "right",
    width: "lg:w-[44%]",
    media: "aspect-[5/4]",
    offset: "lg:-mt-28",
    from: "right",
    rotate: -2.4,
    radius: "rounded-[24px]",
    fit: "object-left-top",
  },
};

/** display order for the exhibition (left → right → center → left → right) */
export const EXHIBIT_ORDER = ["iis", "askbot", "hrm", "campus", "worktrack"];
