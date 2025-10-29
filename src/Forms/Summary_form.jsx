import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiTrash2 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";


export default function Summary_form() {
  const [text, setText] = useState("");



  return (

    <section>
      <div className="p-4 bg-white h-[500px]  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">
        <h1 className="text-[24px] font-roboto font-semibold text-[#2e404a] mb-2">Summary

        </h1>
        <p className="text-[#3e5679] text-[16px] font-nunito font-normal mb-8">
          Write a short introduction that highlights your experience, key skills, and career goals.        </p>

        <div>
          <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
            Description
          </label>
          <div>
            <div className="card rounded-lg">
              <Editor className="rounded-lg" onTextChange={(e) => setText(e.htmlValue)} style={{ height: '150px' }} />
            </div>
          </div>


        </div>


      </div>


    </section>
  );
}

