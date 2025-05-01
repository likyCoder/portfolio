import Image from "next/image";
import bg from "../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/Hat"), {
  ssr: false,
});

export const metadata = {
  title: "About - likyCoder",
  description:
    "Discover the journey of likyCoder, a passionate software engineer and trader. Explore innovative projects and a commitment to reshaping the web.",
  openGraph: {
    title: "About - likyCoder",
    description:
      "Discover the journey of likyCoder, a passionate software engineer and trader. Explore innovative projects and a commitment to reshaping the web.",
    url: "https://likycoder.com/about",
    siteName: "likyCoder",
    images: [
      {
        url: "https://likyjosh.likesyou.org/assets/img/hero-bg.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - likyCoder",
    description:
      "Discover the journey of likyCoder, a passionate software engineer and trader. Explore innovative projects and a commitment to reshaping the web.",
    images: ["https://likyjosh.likesyou.org/assets/img/hero-bg.jpg"],
    creator: "@likycoder",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  appleWebApp: {
    statusBarStyle: "default",
    title: "likyCoder",
    capable: true,
    launch: {
      argument: "/about",
      url: "/about",
    },
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      name: "other-verification",
      // This is an example, replace with your actual verification code
      code: "your-verification-code",
      // This is an example, replace with your actual verification URL
      url: "https://example.com/verification.txt",
    },
  }
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] sm:top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            likyCoder
          </h1><br />
          <p className="font-light text-foreground text-lg">
            Scroll down to know more about me
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
