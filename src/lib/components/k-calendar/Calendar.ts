import dayjs from "dayjs";
export interface Day {
  value: number;
  gray?: boolean;
}
export class Calendar {
  readonly day: dayjs.Dayjs;

  static titles = ["一", "二", "三", "四", "五", "六", "日"];

  constructor(day?: dayjs.Dayjs) {
    day ? (this.day = day) : (this.day = dayjs());
  }

  public getRenderItems(): Day[][] {
    // 读取关键日期
    const endDay = this.day.endOf("month").date(); // 本月最后一天是几号
    const startWeek = this.day.startOf("month").get("day") || 7; // 本月第一天是周几
    const upMonthDay = this.day
      .set("month", dayjs().month() || 12)
      .endOf("month")
      .get("date"); // 上月最后一天是几号
    // push日历表
    const items: Day[] = [];
    for (let n = startWeek - 2; n >= 0; n--) {
      items.push({
        value: upMonthDay - n,
        gray: true,
      });
    }
    for (let i = 1; i <= endDay; i++) {
      items.push({ value: i });
    }
    const len = items.length;
    for (let i = 1; i <= 6 * 7 - len; i++) {
      items.push({
        value: i,
        gray: true,
      });
    }
    // 改造为六行七列
    const renderItems: Day[][] = [];
    for (let i = 0; i < 6; i++) {
      renderItems.push([]);
      for (let j = 0; j < 7; j++) {
        renderItems[i].push(items[i * 7 + j]);
      }
    }
    return renderItems;
  }
}
