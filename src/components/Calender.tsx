import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../styles/calender.css";
import { EventContentArg } from "@fullcalendar/core";

function Calender() {
  // デフォルトのものとカスタムプロパティも追加できる
  const events = [
    { title: "Meeting", start: new Date(), veggie: 0, fruit: 0, total: 0 },
    { title: "aaa", start: "2024-12-05", veggie: 3, fruit: 0, total: 0 },
  ];

  const renderEventContent = (eventInfo: EventContentArg) => {
    console.log(eventInfo);
    return (
      <div>
        <div>veggie:{eventInfo.event.extendedProps.veggie}</div>
        <div>fruit:{eventInfo.event.extendedProps.fruit}</div>
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
