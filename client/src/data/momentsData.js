// 导入所有需要的图片资源
import goldenGate from "../assets/golden_gate.png";
import losAngeles1 from "../assets/Los_Angeles_1.png";
import losAngeles2 from "../assets/Los_Angeles_2.png";
import losAngeles3 from "../assets/Los_Angeles_3.png";
import losAngeles4 from "../assets/Los_Angeles_4.png";
import losAngeles5 from "../assets/Los_Angeles_5.png";
import losAngeles6 from "../assets/Los_Angeles_6.png";
import losAngeles7 from "../assets/Los_Angeles_7.png";
import losAngeles8 from "../assets/Los_Angeles_8.png";
import losAngeles9 from "../assets/Los_Angeles_9.png";
import go1 from "../assets/go_1.png";
import go2 from "../assets/go_2.png";
import go3 from "../assets/go_3.png";
import go4 from "../assets/go_4.png";
import go5 from "../assets/go_5.png";
import go6 from "../assets/go_6.png";
import go7 from "../assets/go_7.png";
import go8 from "../assets/go_8.png";
import go9 from "../assets/go_9.png";
import macau1 from "../assets/macau_1.png";
import macau2 from "../assets/macau_2.png";
import macau3 from "../assets/macau_3.png";
import macau4 from "../assets/macau_4.png";
import macau5 from "../assets/macau_5.png";
import macau6 from "../assets/macau_6.png";
import macau7 from "../assets/macau_7.png";
import macau8 from "../assets/macau_8.png";
import macau9 from "../assets/macau_9.png";
import shanghai1 from "../assets/shanghai_1.png";
import shanghai2 from "../assets/shanghai_2.png";
import shanghai3 from "../assets/shanghai_3.png";
import shanghai4 from "../assets/shanghai_4.png";
import shanghai5 from "../assets/shanghai_5.png";
import shanghai6 from "../assets/shanghai_6.png";
import shanghai7 from "../assets/shanghai_7.png";
import shanghai8 from "../assets/shanghai_8.png";
import shanghai9 from "../assets/shanghai_9.png";

// 共享的moments数据 - 按时间顺序，最早的ID最小，最新的ID最大
export const momentsData = [
  {
    id: 1,
    timestamp: "Feb 8, 2025",
    text: "Shanghai's heartbeats 🌇",
    images: [
      shanghai1,
      shanghai2,
      shanghai3,
      shanghai4,
      shanghai5,
      shanghai6,
      shanghai7,
      shanghai8,
      shanghai9,
    ],
    location: "Shanghai, China",
  },
  {
    id: 2,
    timestamp: "Feb 10, 2025",
    text: 'A solo trip to Macao 🇲🇴\n"Who am I, where am I and why are there casinos everywhere"',
    images: [
      macau1,
      macau2,
      macau3,
      macau4,
      macau5,
      macau6,
      macau7,
      macau8,
      macau9,
    ],
    location: "Macau, Special administrative regions of China",
  },
  {
    id: 3,
    timestamp: "Mar 8, 2025",
    text: "☕️⚫️⚪️\nSavor the brew, master the play.",
    images: [go1, go2, go3, go4, go5, go6, go7, go8, go9],
    location: "木野狐茶咖, Hangzhou, China",
  },
  {
    id: 4,
    timestamp: "Aug 13, 2025",
    text: "Los Angeles 🏴",
    images: [
      losAngeles1,
      losAngeles2,
      losAngeles3,
      losAngeles4,
      losAngeles5,
      losAngeles6,
      losAngeles7,
      losAngeles8,
      losAngeles9,
    ],
    location: "Los Angeles, CA",
  },
  {
    id: 5,
    timestamp: "Aug 17, 2025",
    text: "Golden Gate 🌉",
    imageUrl: goldenGate,
    location: "San Francisco, CA",
  },
];

// 获取按时间排序的moments（最新的在前）
export const getSortedMoments = () => {
  return [...momentsData].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
};

// 获取最新的N条moments
export const getLatestMoments = (count = 2) => {
  return getSortedMoments().slice(0, count);
};
