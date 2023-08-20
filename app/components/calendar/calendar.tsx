import classNames from "classnames";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Calendar({ calendarId }: any) {
  const [dates, setDates] = useState([]);

  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  //roseville 0
  // rosevilleloft 1
  //southfield 2
  // warreneast 3
  // warrenwest 4

  const calendarIDs = [
    "https://sheets.googleapis.com/v4/spreadsheets/1SNxVMUryO82g_-CVtAT56_jiETkWhiq5a4ML7aOcZ9Q/values/sheet1?alt=json&key=AIzaSyD1a5_18NbGFHLBZaegkNM8TmDFhzwyphc",
    "https://sheets.googleapis.com/v4/spreadsheets/1c5Z7sbqJaA2rRgwShbkxDYJ-1SS3Rh-qw-DnT2kVo8Y/values/sheet1?alt=json&key=AIzaSyD1a5_18NbGFHLBZaegkNM8TmDFhzwyphc",
    "https://sheets.googleapis.com/v4/spreadsheets/16tJE0oaJ69PjfXz_vPlBkOm9QgO737NlUwWORGB0SgA/values/sheet1?alt=json&key=AIzaSyD1a5_18NbGFHLBZaegkNM8TmDFhzwyphc",
    "https://sheets.googleapis.com/v4/spreadsheets/1TqjzH4SJTyj74SSdlSRrTBRDLRYrwl2W1G_9iLm3Y0Q/values/sheet1?alt=json&key=AIzaSyD1a5_18NbGFHLBZaegkNM8TmDFhzwyphc",
    "https://sheets.googleapis.com/v4/spreadsheets/12no0HZbif6oCv35Y_Se8dJlc2P-nMK8SRfZ0rq-bdGo/values/sheet1?alt=json&key=AIzaSyD1a5_18NbGFHLBZaegkNM8TmDFhzwyphc",
  ];
  //
  async function fetchData() {
    const response = await fetch(calendarIDs[calendarId]);
    return response.json();
  }

  const { data, isFetching } = useQuery(["dates"], fetchData);
  const isBooked = (dateCheck: any) =>
    data?.values.some((date: any) => {
      return date[0] === dateCheck;
    });

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full ">
        <div className="md:p-8 p-5 dark:bg-gray-800 rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex={0}
              className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
            >
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </span>
            <div className="flex items-center">
              <button
                onClick={previousMonth}
                aria-label="calendar backward"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                onClick={nextMonth}
                aria-label="calendar forward"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 mt-2 text-sm">
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              S
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              M
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              T
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              W
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              T
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              F
            </div>
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center"></div>

            {newDays.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  "py-2"
                )}
              >
                <button
                  type="button"
                  className={classNames(
                    isBooked(format(day, "yyyy-MM-dd")) &&
                      !isToday(day) &&
                      "text-base-200",
                    isBooked(format(day, "yyyy-MM-dd")) &&
                      !isSameMonth(day, today) &&
                      "text-error",
                    isSameMonth(day, today) && "text-gray-900",
                    !isToday(day) && "hover:bg-neutral-focus",
                    isToday(day) &&
                      "font-semibold bg-secondary text-white hover:bg-secondary-focus",
                    "text-black mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")} className="">
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shadow-2xl"></div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
