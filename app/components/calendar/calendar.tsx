/* global gapi */
import classNames from "classnames";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  getDay,
} from "date-fns";
import { Truculenta } from "next/font/google";
import { useEffect, useState } from "react";

export default function Calendar() {
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

  function getData() {
    
  }

  function handleChange() {}

  function isBooked(dayCheck: string) {

    let dateArray: any[] = [];

    fetch("https://sheets.googleapis.com/v4/spreadsheets/1EPEXPpsttWpdh-QIXULjpiok70Esaa1f3Z3nIGhxCQ8/values/sheet1?alt=json&key=AIzaSyA88Y6YyRePlgmbaDbrvt_f27x4vNSHEGI")
      .then((response) => response.json())
      .then((json) => {
        json.values.map((event: any) => {
          let firstDayEvent = parse(event[0], "yyyy-MM-dd", new Date());
          let lastDayEvent = parse(event[1], "yyyy-MM-dd", new Date());
          let eventDays = eachDayOfInterval({
            //for each event we create an array of all dates it contains
            start: firstDayEvent,
            end: lastDayEvent,
          });
          eventDays.map((day: any, i: any) => {
            //we map through each of the days
            dateArray.push(format(day, "yyyy-MM-dd"));
          });
        });
      });

    return dateArray.includes(dayCheck);
  }

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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <div className="font-light text-secondary-focus mx-auto flex h-8 w-8 items-center justify-center">
              S
            </div>

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
                    isSameMonth(day, today) && "text-gray-900",
                    !isToday(day) && "bg-gray-900 hover:bg-neutral-focus",
                    !isSameMonth(day, today) && "text-base-300",
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
