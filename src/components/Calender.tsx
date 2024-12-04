import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../styles/calender.css";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import { calculateDailyTotals } from "../utils/calculateDailyTotals";
import { CalenderContent, Contents, Total } from "../types";
import { formatNumber } from "../utils/formatting";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

interface CalenderProps {
  monthlyContents: Contents[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
}

function Calender({
  monthlyContents,
  setCurrentMonth,
  setCurrentDay,
}: CalenderProps) {
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

  // 日ごとのデータを計算する関数
  const dailyTotal = calculateDailyTotals(monthlyContents);
  console.log(dailyTotal);

  // カレンダー用のイベントを作成する関数
  const createCalenderEvents = (
    dailyTotals: Record<string, Total>
  ): CalenderContent[] => {
    return Object.keys(dailyTotals).map((date) => {
      // 日付をkeyにして、値を展開する。これはnumber型なので、文字列に変換する必要がある
      const { veggieCount, fruitCount, total } = dailyTotals[date];
      return {
        start: date,
        veggieCount: formatNumber(veggieCount),
        fruitCount: formatNumber(fruitCount),
        total: formatNumber(total),
      };
    });
  };
  const CalenderEvents = createCalenderEvents(dailyTotal);
  console.log(CalenderEvents);

  const handleDateSet = (datesetInfo: DatesSetArg) => {
    // console.log(datesetInfo);
    // date-fnsで、下記にカレンダーの矢印をクリックされたときの日付が格納されている
    setCurrentMonth(datesetInfo.view.currentStart);
  };

  // 選択した日付を取得
  const handleDateClick = (dateInfo: DateClickArg) => {
    console.log(dateInfo);
    setCurrentDay(dateInfo.dateStr);
  };

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
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={CalenderEvents}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
      dateClick={handleDateClick}
    ></FullCalendar>
  );
}

export default Calender;
