import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../util/calender";
import cn from "../../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div>
    <div >
      <div  className="flex-col">
        <div className="flex justify-between items-center">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectDate
                        .toDate()
                        .toDateString() === date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div >
        
       
        {/* <p className="text-gray-400">No meetings for today.</p> */}
      </div>

      <div className="p-4  bg-[]text-xl rounded flex justify-between">
      {selectDate.toDate().toDateString()}
      <div className="flex-col">
    <h1 className="text-center text-xl">Time slots</h1>
    <div className="flex space-between space-x-3">
    <div className='bg-[#E16A2E] text-white rounded  text-center font-bold p-1'>8:00-9:00</div>
    <div className='bg-[#E16A2E] text-white rounded font-bold text-center p-1'>9:00-10:00</div>
    <div className='bg-[#E16A2E] text-white rounded font-bold text-center p-1'>10:00-11:00</div>
    </div>
    </div>
      
</div>

     

      <div>
       
      </div>
      
    </div>
   
</div>
  );
}
