import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  title: string | number;
  description?: string;
  href?: string;
  label?: string;
}

export const Widget = ({ title, description, Icon, label, href }: Props) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50">
      <div className="flex flex-col">
        {label && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{label}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {Icon}
            <div className="text-center">
              <h4 className="text-4xl">{title}</h4>
              {description && (
                <p className="text-xs text-gray-500">{description}</p>
              )}
            </div>
          </div>
        </div>
        {href && (
          <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2 pt-2">
            <Link
              href={href}
              className="flex text-indigo-800 text-xs font-medium text-end"
            >
              Detalle
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
