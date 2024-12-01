import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../styles/calender.css";
import { EventContentArg } from "@fullcalendar/core";
import { calculateDailyTotals } from "../utils/calculateDailyTotals";
import { Contents } from "../types";

interface CalenderProps {
  monthlyContents: Contents[];
}

function Calender({ monthlyContents }: CalenderProps) {
  // デフォルトのものとカスタムプロパティも追加できる
  const events = [
    {
      title: "Meeting",
      start: new Date(),
      veggieCount: 0,
      fruitCount: 0,
      total: 0,
    },
    {
      title: "aaa",
      start: "2024-12-05",
      veggieCount: 3,
      fruitCount: 0,
      total: 0,
    },
  ];

  const dailyTotal = calculateDailyTotals(monthlyContents);
  console.log(dailyTotal);

  const renderEventContent = (eventInfo: EventContentArg) => {
    // console.log(eventInfo);
    return (
      <div>
        <div>veggie:{eventInfo.event.extendedProps.veggieCount}</div>
        <div>fruit:{eventInfo.event.extendedProps.fruitCount}</div>
        <div>total:{eventInfo.event.extendedProps.total}</div>
      </div>
    );
  };
  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
    ></FullCalendar>
  );
}

export default Calender;
