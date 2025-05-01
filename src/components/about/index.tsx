/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            likyCoder
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base">
            As likyCoder my digital journey is fueled by creativity,
            innovation, and a deep passion for technology. With JavaScript at the heart
            of our projects, we bring ideas to life using powerful tools like React.js,
            HTML, and CSS. Each project we build — from dynamic job platforms to
            donation systems — is carefully designed to offer seamless, interactive
            experiences. Our commitment to clean design, smooth animations, and user-first
            solutions defines everything we create. Step into our world where technology
            meets purpose, and discover how we&apos;re reshaping the web for tomorrow.
            <p className="font-semibold">
              my projects speak louder than words. 💡
            </p>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Software Engineer & Passionate Trader
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link href="#" target="_blank">
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Time</p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  I work on a project which is based on
                  <b className="font-extrabold">css,html,</b>
                  <b className="font-extrabold">Bootsrap</b>
                </li>
                <li>Finished half complete project in 2 weeks.</li>
                <li>
                  Implemented my <b className="font-extrabold">Javascript</b>{" "}
                  and
                  <b className="font-extrabold"> </b> knowledge to build the
                  client&apos;s project.
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                December 2024 - January 2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link href="#" target="_blank">
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                sec Project <br />
                <span className="font-semibold text-base">@Liky Lancers Company</span>
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Contributed to the
                  <b className="font-extrabold"> Deep relation </b>between me and
                  the CEO of the company.
                </li>
                <li>
                  Utilized <b className="font-extrabold">Html, Css </b> and
                  <b className="font-extrabold"> Javascript</b> for development.
                </li>
                <li>
                  Made <b className="font-extrabold">50+ commits</b> and
                  implemented <b className="font-extrabold">10+ </b>new
                  features.
                </li>
                <li>
                  Released a my Portifolio on its url is{" "}
                  <a href="http://likyjosh.likesyou.org"></a>
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                January 2025 - Present
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link href="#" target="_blank">
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                <span className="font-semibold text-base">@ Gregs Hill School</span>
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  I worked on a project which is based on Gregs Hill School.
                </li>
                <li>I developmented a project in 2 months.</li>
                <li>
                  The project is based on
                  <b className="font-extrabold">Html, Css </b> and
                  <b className="font-extrabold"> Javascript</b>.
                </li>
                <li>Actively participated in a Flutter project over two months.</li>
              </ul>
              <p className="float-end font-semibold text-xs">
                October 2024 - December 2024
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,ai,babel,bootstrap,css,docker,dart,discord,firebase,git,github,html,htmx,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,postman,prisma,react,threejs,vercel,php,vscode,`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full text-accent cursor-pointer"}>
          <footer className="w-full text-center py-8 text-sm text-gray-400">
            <div className="container mx-auto px-4">
              <p>© {new Date().getFullYear()} Liky Josh. All rights reserved.</p>
              <p className="mt-2">
                Built with passion by{" "}
                <a
                  href="https://likyjosh.likesyou.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LikyCoder
                </a>
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <a href="/privacy" className="hover:text-gray-300 mr-4">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-gray-300 mr-4">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-gray-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </footer>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
