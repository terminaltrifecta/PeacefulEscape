import { PhoneIcon } from "@heroicons/react/24/solid";
import EmailIcon from '@mui/icons-material/Email';
import React from "react";

export default function Contact() {
  return (
    <div className="text-center card bg-base-100 shadow-2xl p-8 gap-4">
      <div className="text-3xl font-semibold">Contact Me</div>
      <hr className="border-yellow" />
      <div className="flex gap-x-3">
        <PhoneIcon className="h-6"/>
        <div>(586) 907-6261</div>
      </div>
      <div className="flex gap-x-3">
        <EmailIcon className="h-6"/>
        <div>gmandwee@gmail.com</div>
      </div>
      
    </div>
  );
}
