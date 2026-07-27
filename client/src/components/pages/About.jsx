import React, { useEffect, useRef, useState, useContext } from "react";
import { Chart, registerables } from "chart.js";
import { ThemeContext } from "../../context/ThemeContext";
import "./About.css";

Chart.register(...registerables);

const About = () => {
  const { isDark } = useContext(ThemeContext);
  const brainChartRef = useRef(null);
  const projectChartRef = useRef(null);
  const [status, setStatus] = useState("Running Experiments");
  const [focusLevel, setFocusLevel] = useState(72);
  const [experimentProgress, setExperimentProgress] = useState(58);
  const [energyLevel, setEnergyLevel] = useState(70);
  const [readingQueue, setReadingQueue] = useState(64);

  useEffect(() => {
    console.log(
      "%cHey, you found me!\n" +
        "Hope my code and neuroscience work look solid.\n" +
        "If something seems off, feel free to reach out.\n" +
        "\n" +
        "-- Computational & Systems Neuroscience\n" +
        "-- Building models of neural population dynamics",
      "color: #00ff88; font-size: 14px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,255,136,0.3);",
    );
  }, []);

  const STATUS_MESSAGES = [
    "Analyzing calcium imaging data... 🔬",
    "Fitting state-space models... 📊",
    "Reading theoretical neuroscience... 📚",
    "Running lab experiments... 🧪",
    "Training recurrent networks... 🧠",
    "Quantifying mouse behavior... 🐭",
    "Playing Go... ⚫⚪",
    "Coding analysis pipelines... 💻",
    "Reviewing papers... 📝",
    "Skiing weekend recharge... ⛷️",
    "Badminton break... 🏸",
    "Debugging model training... 🐛",
    "Writing up results... ✍️",
    "Exploring population dynamics... 🌊",
  ];

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

  const BRAIN_LABELS = [
    "Research & Lab",
    "Paper Reading",
    "Coding & Modeling",
    "Sports & Outdoors",
    "Rest & Recharge",
  ];
  const BRAIN_DATA = [30, 20, 25, 15, 10];

  const PROJECT_LABELS = [
    "Ideas",
    "In Progress",
    "Under Review",
    "Completed",
    "Active Focus",
  ];
  const PROJECT_DATA = [40, 55, 25, 70, 45];

  const calculateAgeAndVersion = () => {
    const birthday = new Date("2006-04-13");
    const now = new Date();

    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const patchVersion = Math.floor(days / 7);

    return {
      age: `${years}y ${months}m ${days}d`,
      version: `v${years}.${months}.${patchVersion}`,
    };
  };

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

  useEffect(() => {
    if (brainChartRef.current?.chart) {
      brainChartRef.current.chart.destroy();
    }
    if (projectChartRef.current?.chart) {
      projectChartRef.current.chart.destroy();
    }

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
      { fn: () => setStatus(getRandomStatus()), delay: 8000 },
      { fn: createRandomUpdater(setFocusLevel, 4, 0, 55, 90), delay: 2000 },
      {
        fn: createRandomUpdater(setExperimentProgress, 3, 0, 40, 80),
        delay: 2500,
      },
      {
        fn: createRandomUpdater(setEnergyLevel, 4, 0, 50, 90),
        delay: 1800,
      },
      { fn: createRandomUpdater(setReadingQueue, 3, 0, 45, 85), delay: 2200 },
    ];

    const intervals = intervalConfigs.map(({ fn, delay }) =>
      setInterval(fn, delay),
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  const { version, age } = calculateAgeAndVersion();

  return (
    <div className="me-dashboard animated-grid-background">
      <div className="dashboard-header">
        <h1 className="grand-finale">My Personal OS {version}</h1>
        <p>Personal Operating System — running for {age}</p>
      </div>

      <div className="vitals-status-bar">
        <div className="vitals-bar-container ultimate-effect">
          <div className="vital-bar-item">
            <span className="vital-bar-label">Focus</span>
            <div className="vital-bar-progress sanity-progress">
              <div
                className="vital-bar-fill sanity-bar"
                style={{ width: `${focusLevel}%` }}
              ></div>
              <span className="vital-bar-text">{Math.round(focusLevel)}%</span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">Experiment Progress</span>
            <div className="vital-bar-progress mission-progress">
              <div
                className="vital-bar-fill mission-bar"
                style={{ width: `${experimentProgress}%` }}
              ></div>
              <span className="vital-bar-text">
                {Math.round(experimentProgress)}%
              </span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">Current Activity</span>
            <span className="vital-bar-value status-indicator">{status}</span>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">Energy</span>
            <div className="vital-bar-progress caffeine-progress">
              <div
                className="vital-bar-fill caffeine-bar"
                style={{ width: `${energyLevel}%` }}
              ></div>
              <span className="vital-bar-text">{Math.round(energyLevel)}%</span>
            </div>
          </div>

          <div className="vital-bar-item">
            <span className="vital-bar-label">Reading Queue</span>
            <div className="vital-bar-progress focus-progress">
              <div
                className="vital-bar-fill focus-bar"
                style={{ width: `${readingQueue}%` }}
              ></div>
              <span className="vital-bar-text">{Math.round(readingQueue)}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-top-row">
        <div className="widget enhanced-widget top-widget">
          <div className="widget-header">
            <h2>Core Processes</h2>
            <div className="widget-status">System Info</div>
          </div>
          <div className="specs-container">
            <dl className="specs-list compact-specs">
              <dt>CPU:</dt>
              <dd>Neuroscience + Computation (dual-track)</dd>

              <dt>RAM:</dt>
              <dd>Allocated to experiments, papers, and model building</dd>

              <dt>Storage:</dt>
              <dd>Notes, datasets, code, and curated reading</dd>

              <dt>Graphics:</dt>
              <dd>Visualizing population dynamics and behavior</dd>

              <dt>Power Supply:</dt>
              <dd>Curiosity, coffee, and steady lab routines</dd>

              <dt>Network:</dt>
              <dd>Lab WiFi: reliable enough for science</dd>

              <dt>OS:</dt>
              <dd>ResearchOS 2026 (iterating in production)</dd>
            </dl>
          </div>
        </div>

        <div className="widget enhanced-widget top-widget ultimate-effect">
          <div className="widget-header">
            <h2>System Monitor</h2>
            <div className="widget-status">Live Stats</div>
          </div>
          <div className="personal-status-container">
            <div className="status-item">
              <dt>Current Location:</dt>
              <dd>Hangzhou, China</dd>
            </div>

            <div className="status-item">
              <dt>Earth Online Runtime:</dt>
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
                years
              </dd>
            </div>

            <div className="status-item">
              <dt>Interests:</dt>
              <dd>Go · Reading · Skiing · Badminton · Gaming · Building tools</dd>
            </div>

            <div className="status-item">
              <dt>Gaming:</dt>
              <dd>CSGO &amp; Apex Legends</dd>
            </div>

            <div className="status-item">
              <dt>Reading Queue:</dt>
              <dd>
                &quot;Theoretical Neuroscience&quot; — Xiao-Jing Wang
              </dd>
            </div>

            <div className="status-item">
              <dt>Runtime.dependencies:</dt>
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
                    Zotero
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
                    Safari
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
                    Cursor
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
                    Spotify
                    <span style={{ color: "#1db954", fontSize: "0.9em" }}>
                      [Background]
                    </span>
                  </div>
                </div>
              </dd>
            </div>

            <div className="status-item">
              <dt>Current Mode:</dt>
              <dd>Focused, curious, and building carefully</dd>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom-section">
        <div className="widget analytics-widget enhanced-widget horizontal-widget ultimate-effect">
          <div className="widget-header">
            <h2>Memory Cache</h2>
            <div className="widget-status">Brain Analytics</div>
          </div>
          <div className="analytics-container">
            <div className="horizontal-charts">
              <div className="chart-section horizontal-chart">
                <h3>Time Usage Distribution</h3>
                <div className="chart-container horizontal-chart-container">
                  <canvas ref={brainChartRef}></canvas>
                </div>
              </div>
              <div className="chart-section horizontal-chart">
                <h3>Project Status Overview</h3>
                <div className="chart-container horizontal-chart-container">
                  <canvas ref={projectChartRef}></canvas>
                </div>
              </div>
            </div>
            <div className="stats-summary horizontal-stats">
              <div className="stat-item">
                <span className="stat-label">Cache Hit Rate:</span>
                <span className="stat-value">94.2%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Active Processes:</span>
                <span className="stat-value">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
