import * as dayjs from "dayjs";
interface Day {
  title: number;
  gray?: boolean;
  key: number;
}
/**
 * 查询当前年月的日历
 * @param day 输入年月
 * @returns 输出六行七列的日历
 */
export class Calendar {
  private readonly day: dayjs.Dayjs;

  static titles = ["一", "二", "三", "四", "五", "六", "日"];

  constructor(day?: dayjs.Dayjs) {
    day ? (this.day = day) : (this.day = dayjs());
  }

  getItems(): Day[][] {
    const one = this.getRow();
    const two = this.getRow(one.at(-1) as Day);
    const three = this.getRow(two.at(-1) as Day);
    const four = this.getRow(three.at(-1) as Day);
    const five = this.getRow(four.at(-1) as Day);
    const six = this.getRow(five.at(-1) as Day);
    return [one, two, three, four, five, six];
  }

  private getRow(lastEnd?: Day): Day[] {
    if (!lastEnd) {
      return this.getFirst();
    }
    const value: Day[] = [];
    // 如果上一行已经是灰的了,不再计算
    let k = lastEnd.gray ? lastEnd.title : 0;
    if (k) {
      for (let n = 0; n < 7; n++) {
        k++;
        value.push({
          title: k,
          gray: true,
          key: -k,
        });
        k++;
      }
      return value;
    }
    // 本月最后一天是几号
    const lastDay = this.day.endOf("month").get("date");
    let l = lastEnd.title;
    l += 1;
    for (let n = 0; n < 7; n++) {
      value.push({
        title: l,
        gray: false,
        key: l,
      });
      l++;
    }
    // 本行是否包含本月最后一天
    const isLast =
      value.map(({ title }) => title).includes(lastDay) || lastEnd.gray;
    if (!isLast) {
      return value;
    }
    // 包含最后一天的计算逻辑
    const index = value.map(({ title }) => title).indexOf(lastDay);
    let t = 0;
    for (let n = index + 1; n < 7; n++) {
      t++;
      value[n] = {
        title: t,
        gray: true,
        key: -t,
      };
    }
    return value;
  }

  private getFirst(): Day[] {
    // 本月第一天是周几
    const startWeek = this.day.startOf("month").get("day") || 7;
    // 上个月最后一天是几号
    const lastMonthDay = this.day
      .set("month", dayjs().month() || 12)
      .endOf("month")
      .get("date");
    const head: Day[] = [];
    for (let n = startWeek - 2; n >= 0; n--) {
      head[n] = {
        title: lastMonthDay - n,
        gray: true,
        key: -lastMonthDay - n,
      };
    }
    head.reverse();
    const tail: Day[] = [];
    for (let n = 1; n <= 7 - head.length; n++) {
      tail.push({
        title: n,
        gray: false,
        key: n,
      });
    }
    return [...head, ...tail];
  }
}
