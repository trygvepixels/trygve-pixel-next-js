"use client";

import { FiTwitter, FiInstagram, FiDribbble, FiGithub } from "react-icons/fi";
import { AuroraText } from "./magicui/aurora-text";

export default function Footer() {
  return (
    <footer className="border-t relative overflow-clip border-white/10 bg-black/100 backdrop-blur-sm text-white/70">
          <div className="h-30 w-screen bgc2 3d absolute -bottom-20  rounded-full left-1/ blur-3xl"></div>
       <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">Trygve Pixel</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-xs">
              Global website design & Development partner helping startups, brands, and
              enterprises create beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="mb-3 font-medium text-white">Company</h4>
              <ul className="space-y-2">
                
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-white">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/blogs" className="hover:text-white">Blog</a></li>
                {/* <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li> */}
              </ul>
            </div>
          </div>

          {/* Socials */}
          {/* <div className="flex flex-col items-start md:items-end">
            <h4 className="mb-3 font-medium text-white">Follow us</h4>
            <div className="flex gap-4 text-lg">
              <a href="https://twitter.com" className="hover:text-white"><FiTwitter /></a>
              <a href="https://instagram.com" className="hover:text-white"><FiInstagram /></a>
              <a href="https://dribbble.com" className="hover:text-white"><FiDribbble /></a>
              <a href="https://github.com" className="hover:text-white"><FiGithub /></a>
            </div>
          </div> */}
        </div>

       <div className="w-full flex items-center justify-center opacity-20">
         <AuroraText className="md:text-9xl text-4xl text-center mt-10 text- special-font tracking-widest">
         Trygve Pixel 
        </AuroraText>
       </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Trygve Pixel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}