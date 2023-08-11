import { PhoneIcon } from "@heroicons/react/24/solid";
import EmailIcon from '@mui/icons-material/Email';
import React from "react";

export default function Contact() {
  return (
    <div className="text-center card bg-base-100 shadow-2xl gap-4 p-4">
      <div className="text-3xl font-semibold">Contact Me</div>
      <hr className="border-yellow" />
      <div className="flex ">
        <PhoneIcon className="h-6"/>
        <div>(248) 892-6270</div>
      </div>
      <div className="flex ">
        <EmailIcon className="h-6"/>
        <div>peacefulescapesaccomodations@gmail.com</div>
      </div>
      
    </div>
  );
}
