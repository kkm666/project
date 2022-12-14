const timeago = (datetime) => { // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。

  const dateTimeStamp = new Date(datetime).getTime() - 8 * 60 * 60 * 1000;// 这里要减去中国的时区8小时
  const minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const halfamonth = day * 15;
  const month = day * 30;
  const now = new Date().getTime(); // 获取当前时间毫秒
  const diffValue = now - dateTimeStamp; // 时间差

  if (diffValue < 0) {
    return "刚刚";
  }
  const minC = diffValue / minute; // 计算时间差的分，时，天，周，月
  const hourC = diffValue / hour;
  const dayC = diffValue / day;
  const weekC = diffValue / week;
  const monthC = diffValue / month;
  let result = "2";
  if (monthC >= 1 && monthC <= 3) {
    result = ` ${parseInt(monthC)}月前`;
  } else if (weekC >= 1 && weekC <= 3) {
    result = ` ${parseInt(weekC)}周前`;
  } else if (dayC >= 1 && dayC <= 6) {
    result = ` ${parseInt(dayC)}天前`;
  } else if (hourC >= 1 && hourC <= 23) {
    result = ` ${parseInt(hourC)}小时前`;
  } else if (minC >= 1 && minC <= 59) {
    result = ` ${parseInt(minC)}分钟前`;
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚";
  } else {
    // eslint-disable-next-line vars-on-top, no-var
    var datetime = new Date();
    datetime.setTime(dateTimeStamp);
    const Nyear = datetime.getFullYear(); {}
    const Nmonth = datetime.getMonth() + 1 < 10 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1;
    const Ndate = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate();
    const Nhour = datetime.getHours() < 10 ? `0${datetime.getHours()}` : datetime.getHours();
    const Nminute = datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}` : datetime.getMinutes();
    const Nsecond = datetime.getSeconds() < 10 ? `0${datetime.getSeconds()}` : datetime.getSeconds();
    result = `${Nyear}-${Nmonth}-${Ndate}`;
  }
  return result;
};

export { timeago };
