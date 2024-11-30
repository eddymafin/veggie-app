import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../styles/calender.css";
import { EventContentArg } from "@fullcalendar/core";

function Calender() {
  const events = [{ title: "Meeting", start: new Date() }];

  const renderEventContent = (eventInfo: EventContentArg) => {};
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
