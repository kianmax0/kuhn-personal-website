import React, { useState, useContext, useMemo, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MomentCard from "../modules/MomentCard";
import avatar from "../../assets/avatar.png";
import { getSortedMoments } from "../../data/momentsData";
import "./MomentsPage.css";

const MomentsPage = () => {
  const { isDark } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("feed");
  const [likedMoments, setLikedMoments] = useState(new Set());
  const [clickCounts, setClickCounts] = useState({});
  const [selectedGridImage, setSelectedGridImage] = useState(null);
  const [currentGridIndex, setCurrentGridIndex] = useState(0);
  const [allGridImages, setAllGridImages] = useState([]);

  // 使用共享的moments数据
  const momentsData = useMemo(() => getSortedMoments(), []);

  // 为grid创建扁平化的图片数组
  const flattenedImages = useMemo(() => {
    return momentsData
      .filter((m) => m.imageUrl || m.images?.length > 0)
      .flatMap((moment) => {
        if (moment.images?.length > 0) {
          return moment.images;
        }
        if (moment.imageUrl) {
          return [moment.imageUrl];
        }
        return [];
      });
  }, [momentsData]);

  // Grid图片点击处理
  const handleGridImageClick = (imageSrc) => {
    const imageIndex = flattenedImages.findIndex((img) => img === imageSrc);
    setCurrentGridIndex(imageIndex);
    setSelectedGridImage(imageSrc);
    setAllGridImages(flattenedImages);
  };

  // Grid图片预览关闭
  const closeGridPreview = () => {
    setSelectedGridImage(null);
    setCurrentGridIndex(0);
    setAllGridImages([]);
  };

  // Grid图片导航
  const navigateGridImage = (direction) => {
    if (allGridImages.length <= 1) return;

    const newIndex =
      direction === "next"
        ? (currentGridIndex + 1) % allGridImages.length
        : currentGridIndex === 0
          ? allGridImages.length - 1
          : currentGridIndex - 1;

    setCurrentGridIndex(newIndex);
    setSelectedGridImage(allGridImages[newIndex]);
  };

  // 键盘事件监听
  useEffect(() => {
    if (!selectedGridImage) return;

    const handleKeyPress = (event) => {
      const keyActions = {
        ArrowLeft: () => navigateGridImage("prev"),
        ArrowRight: () => navigateGridImage("next"),
        Escape: closeGridPreview,
      };

      const action = keyActions[event.key];
      if (action) {
        event.preventDefault();
        action();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedGridImage, currentGridIndex, allGridImages]);

  // 初始化点击计数
  useMemo(() => {
    const initialCounts = {};
    momentsData.forEach((moment) => {
      initialCounts[moment.id] = 0;
    });
    setClickCounts(initialCounts);
  }, [momentsData]);

  // 点赞功能（带特效）
  const handleLike = (momentId, event) => {
    const isLiked = likedMoments.has(momentId);
    const currentCount = clickCounts[momentId] || 0;

    // 如果已经点赞，不允许取消
    if (isLiked) {
      // 增加点击计数
      const newCount = currentCount + 1;
      setClickCounts((prev) => ({
        ...prev,
        [momentId]: newCount,
      }));

      // 检查是否达到2次点击
      if (newCount === 2) {
        // 爆发特效
        createHeartBurst(event.currentTarget);
        // 重置点击计数
        setTimeout(() => {
          setClickCounts((prev) => ({
            ...prev,
            [momentId]: 0,
          }));
        }, 100);
      } else {
        // 普通特效
        createFloatingHeart(event.currentTarget);
      }
      return;
    }

    // 首次点赞
    const newLikedMoments = new Set(likedMoments);
    newLikedMoments.add(momentId);
    setLikedMoments(newLikedMoments);

    // 初始点赞特效
    createFloatingHeart(event.currentTarget);
  };

  // 创建漂浮爱心特效
  const createFloatingHeart = (button) => {
    const rect = button.getBoundingClientRect();
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "floating-heart";
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 2000);
  };

  // 创建爱心爆发特效
  const createHeartBurst = (button) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 创建12个爱心向四周爆发
    for (let i = 0; i < 12; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.className = "burst-heart";

      const angle = (i * 30 * Math.PI) / 180; // 每30度一个
      const distance = 100 + Math.random() * 50;

      heart.style.left = centerX + "px";
      heart.style.top = centerY + "px";
      heart.style.setProperty("--end-x", Math.cos(angle) * distance + "px");
      heart.style.setProperty("--end-y", Math.sin(angle) * distance + "px");

      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 1500);
    }

    // 重置点击计数会在handleLike函数中处理
  };

  const stats = {
    posts: momentsData.length,
  };

  return (
    <div
      className={`moments-page animated-grid-background ${
        isDark ? "dark" : "light"
      }`}
    >
      <div className="moments-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-avatar">
              <img src={avatar} alt="Kuhn" className="avatar-image" />
            </div>
            <div className="profile-details">
              <h1 className="profile-name">Kuhn Zhao</h1>
              <p className="profile-subtitle">
                Love Neuroscience, Technology and Adventure
              </p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">{stats.posts}</span>
                  <span className="stat-label">posts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2025</span>
                  <span className="stat-label">joined</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Hangzhou</span>
                  <span className="stat-label">location</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === "feed" ? "active" : ""}`}
              onClick={() => setActiveTab("feed")}
            >
              <span className="tab-icon">📱</span>
              <span>Feed</span>
            </button>
            <button
              className={`tab-button ${activeTab === "grid" ? "active" : ""}`}
              onClick={() => setActiveTab("grid")}
            >
              <span className="tab-icon">⊞</span>
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="moments-content">
          {activeTab === "feed" && (
            <div className="feed-view">
              <div className="moments-feed">
                {momentsData.map((moment) => (
                  <div key={moment.id} className="moment-post">
                    <MomentCard
                      timestamp={moment.timestamp}
                      text={moment.text}
                      imageUrl={moment.imageUrl}
                      images={moment.images}
                      location={moment.location}
                    />
                    <div className="post-interactions">
                      <div className="interaction-buttons">
                        <button
                          className={`interaction-btn like-btn ${
                            likedMoments.has(moment.id) ? "liked" : ""
                          }`}
                          onClick={(e) => handleLike(moment.id, e)}
                          title={
                            likedMoments.has(moment.id)
                              ? `Clicked ${clickCounts[moment.id] || 0} times`
                              : "Click to like"
                          }
                        >
                          <span className="icon">
                            {likedMoments.has(moment.id) ? "❤️" : "🤍"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "grid" && (
            <div className="grid-view">
              <div className="photo-grid">
                {momentsData
                  .filter((m) => m.imageUrl || m.images?.length > 0)
                  .flatMap((moment) => {
                    // 如果有多张图片，展示所有图片
                    if (moment.images?.length > 0) {
                      return moment.images.map((image, index) => (
                        <div
                          key={`${moment.id}-${index}`}
                          className="grid-item"
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                          onClick={() => handleGridImageClick(image)}
                        />
                      ));
                    }
                    // 如果只有单张图片
                    if (moment.imageUrl) {
                      return (
                        <div
                          key={moment.id}
                          className="grid-item"
                          style={{
                            backgroundImage: `url(${moment.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                          onClick={() => handleGridImageClick(moment.imageUrl)}
                        />
                      );
                    }
                    return [];
                  })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grid Image Preview Modal */}
      {selectedGridImage && (
        <div className="image-preview-overlay" onClick={closeGridPreview}>
          <div className="image-preview-container">
            <img
              className="image-preview"
              src={selectedGridImage}
              alt="Grid Preview"
              onClick={closeGridPreview}
            />

            {/* Navigation controls - show for multiple images */}
            {allGridImages.length > 1 && (
              <>
                <button
                  className="image-nav-arrow image-nav-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateGridImage("prev");
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="image-nav-arrow image-nav-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateGridImage("next");
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MomentsPage;
