import * as dayjs from "dayjs";

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

  getItems(): number[][] {
    const one = this.getFirst();
    const two = this.getMiddle(one.at(-1) as number);
    const three = this.getMiddle(two.at(-1) as number);
    const four = this.getMiddle(three.at(-1) as number);
    const five = this.getLast(four.at(-1) as number);
    const six = this.getLast(five.at(-1) as number);
    return [one, two, three, four, five, six];
  }

  private getFirst(): number[] {
    // 本月第一天是周几
    const startWeek = this.day.startOf("month").get("day") || 7;
    // 上个月最后一天是几号
    const lastMonthDay = this.day
      .set("month", dayjs().month() || 12)
      .endOf("month")
      .get("date");
    const head: number[] = [];
    for (let n = startWeek - 2; n >= 0; n--) {
      head[n] = lastMonthDay - n;
    }
    head.reverse();
    const tail: number[] = [];
    for (let n = 1; n <= 7 - head.length; n++) {
      tail.push(n);
    }
    return [...head, ...tail];
  }

  private getMiddle(lastEnd: number): number[] {
    lastEnd += 1;
    const value = [];
    for (let n = 0; n < 7; n++) {
      value.push(lastEnd);
      lastEnd++;
    }
    return value;
  }

  private getLast(lastEnd: number): number[] {
    // 本月最后一天是几号
    const lastDay = this.day.endOf("month").get("date");
    const value = this.getMiddle(lastEnd);
    // 本行是否包含本月最后一天
    const isLast = value.includes(lastDay);
    if (!isLast) {
      return value;
    }
    // 包含最后一天的计算逻辑
    const index = value.indexOf(lastDay);
    let num = 0;
    for (let n = index + 1; n < 7; n++) {
      num++;
      value[n] = num;
    }
    return value;
  }
}
