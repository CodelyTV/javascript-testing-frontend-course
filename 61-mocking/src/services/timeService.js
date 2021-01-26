import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function getTimeAgo(time) {
  return dayjs(time).fromNow();
}
