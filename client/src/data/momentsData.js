import girlfriendGraduated from "../assets/girlfriend_graduated.jpg";
import kuhn040925 from "../assets/kuhn_040925.jpg";
import skiing from "../assets/skiing.jpg";
import selfie021025 from "../assets/selfie_021025.jpg";
import selfie120124 from "../assets/selfie_120124.jpg";
import selfie081424 from "../assets/selfie_081424.jpg";
import lecturing from "../assets/lecturing.jpg";
import adult from "../assets/adult.jpg";
import admission from "../assets/admission.jpg";
import game1 from "../assets/game_1.jpg";
import game2 from "../assets/game_2.jpg";
import game3 from "../assets/game_3.jpg";
import game4 from "../assets/game_4.jpg";
import game5 from "../assets/game_5.jpg";
import game6 from "../assets/game_6.jpg";
import game7 from "../assets/game_7.jpg";
import game8 from "../assets/game_8.jpg";
import game9 from "../assets/game_9.jpg";
import ziqiDeng from "../assets/Ziqi_Deng.jpg";
// 导入所有需要的图片资源
import goldenGate from "../assets/golden_gate.jpg";
import losAngeles1 from "../assets/los_angeles_1.jpg";
import losAngeles2 from "../assets/los_angeles_2.jpg";
import losAngeles3 from "../assets/los_angeles_3.jpg";
import losAngeles4 from "../assets/los_angeles_4.jpg";
import losAngeles5 from "../assets/los_angeles_5.jpg";
import losAngeles6 from "../assets/los_angeles_6.jpg";
import losAngeles7 from "../assets/los_angeles_7.jpg";
import losAngeles8 from "../assets/los_angeles_8.jpg";
import losAngeles9 from "../assets/los_angeles_9.jpg";
import go1 from "../assets/go_1.jpg";
import go2 from "../assets/go_2.jpg";
import go3 from "../assets/go_3.jpg";
import go4 from "../assets/go_4.jpg";
import go5 from "../assets/go_5.jpg";
import go6 from "../assets/go_6.jpg";
import go7 from "../assets/go_7.jpg";
import go8 from "../assets/go_8.jpg";
import go9 from "../assets/go_9.jpg";
import macau1 from "../assets/macau_1.jpg";
import macau2 from "../assets/macau_2.jpg";
import macau3 from "../assets/macau3.jpg";
import macau4 from "../assets/macau_4.jpg";
import macau5 from "../assets/macau_5.jpg";
import macau6 from "../assets/macau_6.jpg";
import macau7 from "../assets/macau_7.jpg";
import macau8 from "../assets/macau_8.jpg";
import macau9 from "../assets/macau_9.jpg";
import shanghai1 from "../assets/shagnhai_1.jpg";
import shanghai2 from "../assets/shanghai_2.jpg";
import shanghai3 from "../assets/shanghai_3.jpg";
import shanghai4 from "../assets/shanghai_4.jpg";
import shanghai5 from "../assets/shanghai_5.jpg";
import shanghai6 from "../assets/shanghai_6.jpg";
import shanghai7 from "../assets/shanghai_7.jpg";
import shanghai8 from "../assets/shanghai_8.jpg";
import shanghai9 from "../assets/shanghai_9.jpg";
import stanford1 from "../assets/Stanford_1.jpg";
import stanford2 from "../assets/Stanford_2.jpg";
import stanford3 from "../assets/Stanford_3.jpg";
import stanford4 from "../assets/Stanford_4.jpg";
import stanford5 from "../assets/Stanford_5.jpg";
import stanford6 from "../assets/Stanford_6.jpg";

// 共享的moments数据 - 按时间顺序，最早的ID最小，最新的ID最大
export const momentsData = [
  {
    id: 15,
    timestamp: "Apr 9, 2025",
    text: "kuhn",
    location: "杭州西湖",
    imageUrl: kuhn040925,
  },
  {
    id: 14,
    timestamp: "Feb 16, 2025",
    text: "🏂",
    imageUrl: skiing,
  },
  {
    id: 13,
    timestamp: "Feb 10, 2025",
    text: "selfie",
    location: "Macau, Special administrative regions of China",
    imageUrl: selfie021025,
  },
  {
    id: 12,
    timestamp: "Dec 1, 2024",
    text: "selfie",
    imageUrl: selfie120124,
  },
  {
    id: 11,
    timestamp: "Aug 14, 2024",
    text: "selfie",
    imageUrl: selfie081424,
  },
  {
    id: 10,
    timestamp: "Jun 28, 2024",
    text: "讲座累了发会呆O.0\n（其实我在认真听同学的问题。）",
    location: "宁波市第十五中学",
    imageUrl: lecturing,
  },
  {
    id: 9,
    timestamp: "May 25, 2024",
    text: "coooool~",
    imageUrl: adult,
    location: "杭州市西湖大学云谷校区",
  },
  {
    id: 8,
    timestamp: "Jul 7, 2023",
    text: "？鼠标垫到了 🐶",
    imageUrl: admission,
  },
  {
    id: 7,
    timestamp: "Jan 20, 2023",
    text: "kian_maxのgaming time",
    images: [game1, game2, game3, game4, game5, game6, game7, game8, game9],
  },
  {
    id: 6,
    timestamp: "Nov 15, 2024",
    text: "❤️❤️❤️",
    location: "杭州奥体中心体育场",
    imageUrl: ziqiDeng,
  },
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
  {
    id: 16,
    timestamp: "Dec 19, 2025",
    text: "Die Luft der Freiheit weht",
    images: [stanford1, stanford2, stanford3, stanford4, stanford5, stanford6],
    location: "Stanford, CA",
  },
  {
    id: 17,
    timestamp: "Jun 15, 2026",
    text: "Congrats to my girl on graduating 🎓🎉",
    imageUrl: girlfriendGraduated,
    location: "浙江中医药大学",
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
