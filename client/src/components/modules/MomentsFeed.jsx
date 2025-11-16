import React from "react";
import { Link } from "react-router-dom";
import MomentCard from "./MomentCard";
import { getLatestMoments } from "../../data/momentsData";

const MomentsFeed = () => {
  // 只获取最新的一个moment
  const data = getLatestMoments(1);

  return (
    <section id="moments" className="moments-feed-section">
      <div className="moments-feed-container">
        <div className="moments-list">
          {data.map((m, idx) => (
            <MomentCard
              key={idx}
              timestamp={m.timestamp}
              text={m.text}
              imageUrl={m.imageUrl}
              images={m.images}
              location={m.location}
              tags={m.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsFeed;
