import React, { useState } from "react";
import GithubIcon from "../assets/GithubIcon";
import "./Contact.css";

const Contact = () => {
  const [selectedLine, setSelectedLine] = useState(null);

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLineClick = (lineNumber, action) => {
    setSelectedLine(selectedLine === lineNumber ? null : lineNumber);
    if (action) action();
  };

  const handleWechatClick = (wechatId) => {
    alert(`微信号: ${wechatId}\n请复制微信号去添加好友！`);
  };

  return (
    <div className="contact-page animated-grid-background">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="contact-title typewriter-title">Ready to Connect?</h1>
        <p className="contact-subtitle">
          <span className="highlight-text">
            💡 Lines with comments are clickable
          </span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">contact_info.js</span>
            </div>
            <div className="code-content">
              {/* Line 1: Object declaration */}
              <div
                className={`code-line ${selectedLine === 1 ? "selected" : ""}`}
                onClick={() => handleLineClick(1)}
              >
                <span className="line-number">1</span>
                <span className="code-text">
                  <span className="keyword">const</span>{" "}
                  <span className="variable">contactInfo</span>{" "}
                  <span className="operator">=</span>{" "}
                  <span className="bracket">{"{"}</span>
                </span>
              </div>

              {/* Line 2: Name */}
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">name</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"Zhao Kun"</span>
                  <span className="punctuation">,</span>
                </span>
              </div>

              {/* Line 3: Status */}
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">status</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"Available for Reaching Out!"</span>
                  <span className="punctuation">,</span>
                </span>
              </div>

              {/* Line 4: Email section start */}
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">email</span>
                  <span className="operator">:</span>{" "}
                  <span className="bracket">{"{"}</span>
                </span>
              </div>

              {/* Line 5: Email 1 */}
              <div
                className={`code-line clickable ${
                  selectedLine === 5 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(5, () =>
                    handleEmailClick("zhaokun@westlake.edu.cn"),
                  )
                }
              >
                <span className="line-number">5</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">email1</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"zhaokun@westlake.edu.cn"</span>
                  <span className="punctuation">,</span>
                  <span className="comment"> // 📧 Click to send email</span>
                </span>
              </div>

              {/* Line 6: Email 2 */}
              <div
                className={`code-line clickable ${
                  selectedLine === 6 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(6, () =>
                    handleEmailClick("kuhnkuhn@berkeley.edu"),
                  )
                }
              >
                <span className="line-number">6</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">email2</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"kuhnkuhn@berkeley.edu"</span>
                  <span className="comment"> // 📧 Alternative email</span>
                </span>
              </div>

              {/* Line 7: Email section end */}
              <div className="code-line">
                <span className="line-number">7</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="bracket">{"}"}</span>
                  <span className="punctuation">,</span>
                </span>
              </div>

              {/* Line 8: Social section start */}
              <div className="code-line">
                <span className="line-number">8</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">social</span>
                  <span className="operator">:</span>{" "}
                  <span className="bracket">{"{"}</span>
                </span>
              </div>

              {/* Line 9: WeChat */}
              <div
                className={`code-line clickable ${
                  selectedLine === 9 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(9, () =>
                    handleWechatClick("Dogedogedogecoin"),
                  )
                }
              >
                <span className="line-number">9</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">wechat</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"Dogedogedogecoin"</span>
                  <span className="punctuation">,</span>
                  <span className="comment">
                    {" "}
                    // 💬 Click to copy WeChat ID
                  </span>
                </span>
              </div>

              {/* Line 10: Bilibili */}
              <div
                className={`code-line clickable ${
                  selectedLine === 10 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(10, () =>
                    handleLinkClick(
                      "https://space.bilibili.com/256800766?spm_id_from=333.1007.0.0",
                    ),
                  )
                }
              >
                <span className="line-number">10</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">bilibili</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"@kian_max"</span>
                  <span className="punctuation">,</span>
                  <span className="comment">
                    {" "}
                    // 📺 Actually, I don't post content on Bilibili
                  </span>
                </span>
              </div>

              {/* Line 11: Steam */}
              <div
                className={`code-line clickable ${
                  selectedLine === 11 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(11, () =>
                    handleLinkClick(
                      "https://steamcommunity.com/profiles/76561198993237339/",
                    ),
                  )
                }
              >
                <span className="line-number">11</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">steam</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"kian_max"</span>
                  <span className="punctuation">,</span>
                  <span className="comment"> // 🎮 Gaming adventures</span>
                </span>
              </div>

              {/* Line 12: GitHub */}
              <div
                className={`code-line clickable ${
                  selectedLine === 12 ? "selected" : ""
                } github-contact-line`}
                onClick={() =>
                  handleLineClick(12, () =>
                    handleLinkClick("https://github.com/kianmax0"),
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="line-number">12</span>
                <span
                  className="code-text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">github</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"kianmax0"</span>
                  <span className="punctuation">,</span>
                  <span className="comment">
                    {" "}
                    //{" "}
                    <span
                      style={{
                        display: "inline-flex",
                        verticalAlign: "middle",
                      }}
                    >
                      <GithubIcon size={18} color="#181717" />
                    </span>{" "}
                    Click to visit GitHub
                  </span>
                </span>
              </div>

              {/* Line 13: Google Scholar */}
              <div
                className={`code-line clickable ${
                  selectedLine === 13 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(13, () =>
                    handleLinkClick(
                      "https://scholar.google.com/citations?user=MFsbreQAAAAJ&hl=en",
                    ),
                  )
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="line-number">13</span>
                <span
                  className="code-text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">googleScholar</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"Kun Zhao"</span>
                  <span className="punctuation">,</span>
                  <span className="comment">
                    {" "}
                    // 🎓 Click to visit Google Scholar
                  </span>
                </span>
              </div>

              {/* Line 14: Zhihu */}
              <div
                className={`code-line clickable ${
                  selectedLine === 14 ? "selected" : ""
                }`}
                onClick={() =>
                  handleLineClick(14, () =>
                    handleLinkClick(
                      "https://www.zhihu.com/people/qi-777-56-60/posts",
                    ),
                  )
                }
              >
                <span className="line-number">14</span>
                <span className="code-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="property">zhihu</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">"qi-777-56-60"</span>
                  <span className="punctuation">,</span>
                  <span className="comment"> // 知 Click to visit Zhihu</span>
                </span>
              </div>

              {/* Line 15: Social section end */}
              <div className="code-line">
                <span className="line-number">15</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="bracket">{"}"}</span>
                  <span className="punctuation">,</span>
                </span>
              </div>

              {/* Line 16: Object end */}
              <div className="code-line">
                <span className="line-number">16</span>
                <span className="code-text">
                  <span className="bracket">{"}"}</span>
                  <span className="punctuation">;</span>
                </span>
              </div>

              {/* Line 17: Empty line */}
              <div className="code-line">
                <span className="line-number">17</span>
                <span className="code-text"></span>
              </div>

              {/* Line 18: Export statement */}
              <div className="code-line">
                <span className="line-number">18</span>
                <span className="code-text">
                  <span className="keyword">export</span>{" "}
                  <span className="keyword">default</span>{" "}
                  <span className="variable">contactInfo</span>
                  <span className="punctuation">;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="footer-message">
        <div className="message-container">
          <div className="ascii-art">
            <pre>{`
    ╭─────────────────────────────────────────╮
    │      Thanks for Visiting My Site!       │
    ╰─────────────────────────────────────────╯
            `}</pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
