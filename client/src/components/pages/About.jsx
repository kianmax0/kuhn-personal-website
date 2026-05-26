import React, { useEffect, useRef, useState, useContext } from "react";
import { Chart, registerables } from "chart.js";
import { ThemeContext } from "../../context/ThemeContext";
import "./About.css";

Chart.register(...registerables);

const About = () => {
  const { isDark } = useContext(ThemeContext);
  const brainChartRef = useRef(null);
  const projectChartRef = useRef(null);
  const [timeSinceBug, setTimeSinceBug] = useState(0);
  const [status, setStatus] = useState("Running Experiments");
  const [sanityLevel, setSanityLevel] = useState(25);
  const [missionProgress, setMissionProgress] = useState(8);
  const [caffeineLevel, setCaffeineLevel] = useState(85);
  const [focusIndex, setFocusIndex] = useState(45);

  // 控制台彩蛋
  useEffect(() => {
    console.log(
      "%cHey, you found me! 🕵️\u200d♂️\n" +
        "Hope my code (and my vagus nerve research) looks good.\n" +
        "BTW, if you know why this bug exists, please contact me.\n" +
        "Or if you're single too. 😉\n" +
        "\n" +
        "-- Neuroscience Researcher & Code Explorer\n" +
        "-- Currently debugging both neurons and JavaScript",
      "color: #00ff88; font-size: 14px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,255,136,0.3);",
    );
  }, []);

  // 提取常量避免重复创建
  const STATUS_MESSAGES = [
    "Poking Ears... 👂",
    "Staring at Neurons... 🧠",
    "Compiling Brain... 🤯",
    "Saving the World... 🎮",
    "Questioning Reality... 🤔",
    "Caffeinating... ☕",
    "Exploring Rabbit Holes... 🕳️",
    "Debugging Life... 🐛",
    "Decoding DNA... 🧬",
    "Peer Reviewing... 📝",
    "Procrastinating Productively... 😅",
    "Contemplating P-values... 📊",
    "Hunting for Grants... 💰",
    "Surviving Academia... 🎓",
    "Optimizing Protocols... 🔬",
    "Battling Imposter Syndrome... 😰",
    "Channeling Inner Sherlock... 🔍",
    "Achieving Work-Life Balance... ⚖️",
    "Looking for Girlfriend... 👀💕",
    "Swiping Right... 📱💖",
    "Gaming at 3AM... 🎮🌙",
    "Rage Quitting... 😡🎯",
    "Building PC... 🖥️🔧",
    "Watching Anime... 📺✨",
    "Ordering Takeout... 🎮📞",
    "Learning Guitar... 🎸🎵",
    "Pretending to Exercise... 🏃‍♂️😴",
    "Scrolling Memes... 📱😂",
    "Planning World Domination... 🌍👑",
    "Avoiding Responsibilities... 🙈📚",
    "Living My Best Life... ✨🎉",
    "Embracing Chaos... 🌪️😎",
  ];

  // Chart configuration constants
  const CHART_COLORS = {
    backgrounds: [
      "rgba(50, 50, 50, 0.8)",
      "rgba(90, 90, 90, 0.8)",
      "rgba(130, 130, 130, 0.8)",
      "rgba(170, 170, 170, 0.8)",
      "rgba(210, 210, 210, 0.8)",
    ],
    borders: [
      "rgba(50, 50, 50, 1)",
      "rgba(90, 90, 90, 1)",
      "rgba(130, 130, 130, 1)",
      "rgba(170, 170, 170, 1)",
      "rgba(210, 210, 210, 1)",
    ],
  };

  const PROJECT_COLORS = {
    backgrounds: [
      "rgba(30, 30, 30, 0.8)",
      "rgba(70, 70, 70, 0.8)",
      "rgba(110, 110, 110, 0.8)",
      "rgba(150, 150, 150, 0.8)",
      "rgba(190, 190, 190, 0.8)",
    ],
    borders: [
      "rgba(30, 30, 30, 1)",
      "rgba(70, 70, 70, 1)",
      "rgba(110, 110, 110, 1)",
      "rgba(150, 150, 150, 1)",
      "rgba(190, 190, 190, 1)",
    ],
  };

  const APPLE_FONT =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

  const TOOLTIP_CONFIG = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    titleColor: "#fff",
    bodyColor: "#fff",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    cornerRadius: 8,
  };

  // Chart data constants
  const BRAIN_LABELS = [
    "Enjoying My Life",
    "Coding",
    "Paper Reading",
    "Lab Experiments",
    "Random Thoughts",
  ];
  const BRAIN_DATA = [25, 10, 20, 20, 25];

  const PROJECT_LABELS = [
    "New Ideas",
    "Started Projects",
    "Half-Done",
    "Actually Finished",
    "Currently Working",
  ];
  const PROJECT_DATA = [95, 80, 60, 15, 2];

  // Calculate age and version based on birthday 2006-04-13
  const calculateAgeAndVersion = () => {
    const birthday = new Date("2006-04-13");
    const now = new Date();

    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    // Adjust for negative values
    if (days < 0) {
      months--;
      days += 30; // Approximate
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const patchVersion = Math.floor(days / 7); // weeks as patch version

    return {
      age: `${years}y ${months}m ${days}d`,
      version: `v${years}.${months}.${patchVersion}`,
    };
  };

  // Create common chart configurations
  // Chart utility functions
  const createCommonOptions = () => ({
    responsive: true,
    maintainAspectRatio: false,
  });

  const createTicksConfig = (callback) => ({
    color: isDark ? "#ffffff" : "#333333",
    font: { family: APPLE_FONT, size: 11 },
    ...(callback && { callback }),
  });

  const createLegendConfig = (position = "bottom") => ({
    position,
    labels: {
      padding: 12,
      usePointStyle: true,
      font: { size: 11, family: APPLE_FONT },
      color: isDark ? "#ffffff" : "#333333",
    },
  });

  // 优化的图表初始化
  useEffect(() => {
    // 清理现有图表实例
    if (brainChartRef.current?.chart) {
      brainChartRef.current.chart.destroy();
    }
    if (projectChartRef.current?.chart) {
      projectChartRef.current.chart.destroy();
    }

    // Brain composition pie chart
    const brainCtx = brainChartRef.current?.getContext("2d");
    if (brainCtx) {
      const brainChart = new Chart(brainCtx, {
        type: "pie",
        data: {
          labels: BRAIN_LABELS,
          datasets: [
            {
              data: BRAIN_DATA,
              backgroundColor: CHART_COLORS.backgrounds,
              borderWidth: 3,
              borderColor: CHART_COLORS.borders,
            },
          ],
        },
        options: {
          ...createCommonOptions(),
          plugins: {
            legend: createLegendConfig(),
            tooltip: TOOLTIP_CONFIG,
          },
        },
      });
      brainChartRef.current.chart = brainChart;
    }

    // Project status bar chart
    const projectCtx = projectChartRef.current?.getContext("2d");
    if (projectCtx) {
      const projectChart = new Chart(projectCtx, {
        type: "bar",
        data: {
          labels: PROJECT_LABELS,
          datasets: [
            {
              data: PROJECT_DATA,
              backgroundColor: PROJECT_COLORS.backgrounds,
              borderWidth: 3,
              borderColor: PROJECT_COLORS.borders,
              borderRadius: 8,
              borderSkipped: false,
            },
          ],
        },
        options: {
          ...createCommonOptions(),
          plugins: {
            legend: { display: false },
            tooltip: TOOLTIP_CONFIG,
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: createTicksConfig(),
            },
            y: {
              beginAtZero: true,
              max: 100,
              grid: { display: false },
              ticks: createTicksConfig((value) => value + "%"),
            },
          },
        },
      });
      projectChartRef.current.chart = projectChart;
    }
  }, [isDark]);

  // 优化的定时器逻辑
  useEffect(() => {
    const createRandomUpdater =
      (setter, changeRange, bias = 0, min = 0, max = 100) =>
      () =>
        setter((prev) => {
          const change = (Math.random() - (0.5 + bias)) * changeRange;
          return Math.max(min, Math.min(max, prev + change));
        });

    const getRandomStatus = () =>
      STATUS_MESSAGES[Math.floor(Math.random() * STATUS_MESSAGES.length)];

    const intervalConfigs = [
      { fn: () => setTimeSinceBug((prev) => prev + 1), delay: 1000 },
      { fn: () => setStatus(getRandomStatus()), delay: 8000 },
      { fn: createRandomUpdater(setSanityLevel, 4, -0.1, 0, 30), delay: 2000 },
      {
        fn: createRandomUpdater(setMissionProgress, 2, -0.2, 0, 10),
        delay: 2500,
      },
      {
        fn: createRandomUpdater(setCaffeineLevel, 4, 0.1, 80, 100),
        delay: 1800,
      },
      { fn: createRandomUpdater(setFocusIndex, 4, -0.2, 0, 60), delay: 2200 },
    ];

    const intervals = intervalConfigs.map(({ fn, delay }) =>
      setInterval(fn, delay),
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="me-dashboard animated-grid-background">
      {(() => {
        const { version, age } = calculateAgeAndVersion();
        return (
          <div className="dashboard-header">
            <h1 className="grand-finale">👻 My Personal OS {version}</h1>
            <p>Personal Operating System - Running for {age}!</p>
          </div>
        );
      })()}

      {/* Live Vitals Status Bar - Enhanced Personal Edition */}
      <div className="vitals-status-bar">
        <div className="vitals-bar-container ultimate-effect">
          <div className="vital-bar-item">
            <span className="vital-bar-label">🧠 Sanity Level</span>
            <div className="vital-bar-progress sanity-progress">
              <div
                className="vital-bar-fill sanity-bar"
                style={{ width: `${sanityLevel}%` }}
              ></div>
              <span className="vital-bar-text">{Math.round(sanityLevel)}%</span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">🌍 World Saving</span>
            <div className="vital-bar-progress mission-progress">
              <div
                className="vital-bar-fill mission-bar"
                style={{ width: `${missionProgress}%` }}
              ></div>
              <span className="vital-bar-text">
                {Math.round(missionProgress)}%
              </span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">🧬 Current Activity</span>
            <span className="vital-bar-value status-indicator">{status}</span>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">☕ Caffeine Intake</span>
            <div className="vital-bar-progress caffeine-progress">
              <div
                className="vital-bar-fill caffeine-bar"
                style={{ width: `${caffeineLevel}%` }}
              ></div>
              <span className="vital-bar-text">
                {Math.round(caffeineLevel)}%
              </span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">🎯 Focus Index</span>
            <div className="vital-bar-progress focus-progress">
              <div
                className="vital-bar-fill focus-bar"
                style={{ width: `${focusIndex}%` }}
              ></div>
              <span className="vital-bar-text">{Math.round(focusIndex)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 上方并列区域 */}
      <div className="dashboard-top-row">
        {/* System Specs - Left */}
        <div className="widget enhanced-widget top-widget">
          <div className="widget-header">
            <h2>⚙️ Core Processes</h2>
            <div className="widget-status">System Info</div>
          </div>
          <div className="specs-container">
            <dl className="specs-list compact-specs">
              <dt>🖥️ CPU:</dt>
              <dd>Over-caffeinated Brain v3.0 (Triple-core: NEU+CS+ECON)</dd>

              <dt>💾 RAM:</dt>
              <dd>32GB (10GB studying, 10GB playing, 12GB random thoughts)</dd>

              <dt>💽 Storage:</dt>
              <dd>∞ TB (mostly useless knowledge + stackoverflow solutions)</dd>

              <dt>🎮 Graphics:</dt>
              <dd>Imagination GTX 5090 (performance drops after 10pm)</dd>

              <dt>⚡ Power Supply:</dt>
              <dd>Coffee-X 850W 80+ Caffeine (never fails at 3AM)</dd>

              <dt>🌐 Network:</dt>
              <dd>Lab WiFi: Unstable but persistent connection</dd>

              <dt>💿 OS:</dt>
              <dd>ProcrastinationOS 2026 (surprisingly stable system)</dd>
            </dl>
          </div>
        </div>

        {/* Personal Status - Right */}
        <div className="widget enhanced-widget top-widget ultimate-effect">
          <div className="widget-header">
            <h2>🖥️ System Monitor</h2>
            <div className="widget-status">Live Stats</div>
          </div>
          <div className="personal-status-container">
            <div className="status-item">
              <dt>📍 Current Location:</dt>
              <dd>Hangzhou, China</dd>
            </div>

            <div className="status-item">
              <dt>🎂 Earth Online Runtime:</dt>
              <dd>
                Loaded for{" "}
                {(() => {
                  const birthday = new Date("2006-04-13");
                  const now = new Date();
                  const years = (
                    (now - birthday) /
                    (365.25 * 24 * 60 * 60 * 1000)
                  ).toFixed(6);
                  return years;
                })()}{" "}
              </dd>
            </div>

            <div className="status-item">
              <dt>❤️ Relationship Status:</dt>
              <dd>In a committed bug-free relationship 🥰</dd>
            </div>

            <div className="status-item">
              <dt>🎮 Gaming:</dt>
              <dd>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  💻 CSGO & Apex Legends
                  <span style={{ color: "#ff9800", fontSize: "0.8em" }}>
                    [Status: Hibernating]
                  </span>
                </span>
              </dd>
            </div>

            <div className="status-item">
              <dt>📚 Reading Queue:</dt>
              <dd>"THEORETICAL NRUROSCIENCE" - XIAO-JING WANG</dd>
            </div>

            <div className="status-item">
              <dt>🧠 Personality.config:</dt>
              <dd>
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#64b5f6",
                    fontWeight: "bold",
                  }}
                  onClick={() =>
                    alert(
                      '🤣 They say I\'m ENTJ-A - "The Commander"\n\nBut honestly, I think it\'s more like:\n🧠 "Eternally Needs Toジ Analyze"\n☕ "Extremely Neurotic, Thinks Alot"\n🔍 "Explores Neural Tissue Actively"\n\n👁️ Click around to discover more about this chaotic system!',
                    )
                  }
                  title="Click me for personality insights!"
                >
                  ENTJ-A
                </span>
                (The Commander... of my own chaos 😅)
              </dd>
            </div>

            <div className="status-item">
              <dt>🛠️ Runtime.dependencies:</dt>
              <dd>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "1.05em",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    📚 Zotero
                    <span style={{ color: "#4caf50", fontSize: "0.9em" }}>
                      [Running]
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    🌍 Safari
                    <span style={{ color: "#2196f3", fontSize: "0.9em" }}>
                      [Active]
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    💻 Cursor
                    <span style={{ color: "#ff5722", fontSize: "0.9em" }}>
                      [Always On]
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    🎧 Spotify
                    <span style={{ color: "#1db954", fontSize: "0.9em" }}>
                      [Background]
                    </span>
                  </div>
                </div>
              </dd>
            </div>

            <div className="status-item">
              <dt>💡 Current Mood:</dt>
              <dd>
                Caffeinated & Optimistic (with occasional existential dread)
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* 下方横版Memory Cache区域 */}
      <div className="dashboard-bottom-section">
        <div className="widget analytics-widget enhanced-widget horizontal-widget ultimate-effect">
          <div className="widget-header">
            <h2>💾 Memory Cache</h2>
            <div className="widget-status">Brain Analytics</div>
          </div>
          <div className="analytics-container">
            <div className="horizontal-charts">
              <div className="chart-section horizontal-chart">
                <h3>⏰ Time Usage Distribution</h3>
                <div className="chart-container horizontal-chart-container">
                  <canvas ref={brainChartRef}></canvas>
                </div>
              </div>
              <div className="chart-section horizontal-chart">
                <h3>📈 Project Status Overview</h3>
                <div className="chart-container horizontal-chart-container">
                  <canvas ref={projectChartRef}></canvas>
                </div>
              </div>
            </div>
            <div className="stats-summary horizontal-stats">
              <div className="stat-item">
                <span className="stat-label">💾 Cache Hit Rate:</span>
                <span className="stat-value">94.2%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🔄 Active Processes:</span>
                <span className="stat-value">127</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
