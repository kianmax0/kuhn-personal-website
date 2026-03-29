import React, { useMemo, useState, useCallback } from "react";
import {
  DOMAIN_FAMILIES,
  SUBJECTS_BY_FAMILY,
  SUBJECT_TO_FAMILY,
  FORMAT_GROUPS,
  PROFICIENCY_LEVELS,
  LEVEL_LABELS,
  getAllResources,
  getAllSubtopics,
} from "../../data/resourcesData";
import "./Resources.css";

function toggleInList(list, value) {
  return list.includes(value)
    ? list.filter((x) => x !== value)
    : [...list, value];
}

function matchesResource(
  r,
  { families, subjects, subtopics, formats, levels },
) {
  if (families.length > 0) {
    const ok = r.subjects.some((s) => families.includes(SUBJECT_TO_FAMILY[s]));
    if (!ok) return false;
  }
  if (subjects.length > 0) {
    if (!r.subjects.some((s) => subjects.includes(s))) return false;
  }
  if (subtopics.length > 0) {
    const st = r.subtopics ?? [];
    if (!st.some((t) => subtopics.includes(t))) return false;
  }
  if (formats.length > 0) {
    if (!r.formats.some((f) => formats.includes(f))) return false;
  }
  if (levels.length > 0) {
    if (!levels.includes(r.level)) return false;
  }
  return true;
}

const Resources = () => {
  const allResources = getAllResources();
  const subtopicOptions = useMemo(() => getAllSubtopics(), []);

  const [openFamilies, setOpenFamilies] = useState(() =>
    Object.fromEntries(DOMAIN_FAMILIES.map((f) => [f, true])),
  );
  const [selectedFamilies, setSelectedFamilies] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const filtered = useMemo(
    () =>
      allResources.filter((r) =>
        matchesResource(r, {
          families: selectedFamilies,
          subjects: selectedSubjects,
          subtopics: selectedSubtopics,
          formats: selectedFormats,
          levels: selectedLevels,
        }),
      ),
    [
      allResources,
      selectedFamilies,
      selectedSubjects,
      selectedSubtopics,
      selectedFormats,
      selectedLevels,
    ],
  );

  const hasActiveFilters =
    selectedFamilies.length > 0 ||
    selectedSubjects.length > 0 ||
    selectedSubtopics.length > 0 ||
    selectedFormats.length > 0 ||
    selectedLevels.length > 0;

  const clearFilters = useCallback(() => {
    setSelectedFamilies([]);
    setSelectedSubjects([]);
    setSelectedSubtopics([]);
    setSelectedFormats([]);
    setSelectedLevels([]);
  }, []);

  const toggleFamilyOpen = (family) => {
    setOpenFamilies((prev) => ({ ...prev, [family]: !prev[family] }));
  };

  return (
    <div className="resources-page animated-grid-background">
      <section className="hero-title-section resources-hero">
        <div className="hero-title-container">
          <h1 className="hero-title">📚 Learning Resources</h1>
          <p className="hero-subtitle">
            Curated links by domain, format, and proficiency. Within each
            dimension, any selected tag matches (OR); across dimensions, all
            active filters apply (AND).
          </p>
        </div>
      </section>

      <div className="resources-layout">
        <aside className="resources-filters" aria-label="Resource filters">
          <div className="resources-filters-header">
            <h2 className="resources-filters-title">Filters</h2>
            {hasActiveFilters && (
              <button
                type="button"
                className="resources-clear-filters"
                onClick={clearFilters}
              >
                Clear all
              </button>
            )}
          </div>

          <fieldset className="filter-fieldset">
            <legend>Domain</legend>
            <p className="filter-hint">
              Pick families and/or subjects. Subtopics refine further.
            </p>
            {DOMAIN_FAMILIES.map((family) => (
              <div key={family} className="filter-family-block">
                <div className="filter-family-row">
                  <label className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedFamilies.includes(family)}
                      onChange={() =>
                        setSelectedFamilies((s) => toggleInList(s, family))
                      }
                    />
                    <span className="filter-family-name">{family}</span>
                  </label>
                  <button
                    type="button"
                    className="filter-collapse-toggle"
                    onClick={() => toggleFamilyOpen(family)}
                    aria-expanded={openFamilies[family]}
                  >
                    {openFamilies[family] ? "▼" : "▶"}
                  </button>
                </div>
                {openFamilies[family] && (
                  <div className="filter-subject-list">
                    {(SUBJECTS_BY_FAMILY[family] ?? []).map((subj) => (
                      <label key={subj} className="filter-checkbox-label indent">
                        <input
                          type="checkbox"
                          checked={selectedSubjects.includes(subj)}
                          onChange={() =>
                            setSelectedSubjects((s) => toggleInList(s, subj))
                          }
                        />
                        <span>{subj}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </fieldset>

          <fieldset className="filter-fieldset">
            <legend>Subtopics</legend>
            <div className="filter-chip-grid">
              {subtopicOptions.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={
                    selectedSubtopics.includes(t)
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  onClick={() =>
                    setSelectedSubtopics((s) => toggleInList(s, t))
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="filter-fieldset">
            <legend>Format &amp; media</legend>
            {Object.entries(FORMAT_GROUPS).map(([group, items]) => (
              <div key={group} className="filter-format-group">
                <h3 className="filter-format-group-title">{group}</h3>
                <div className="filter-checkbox-column">
                  {items.map((fmt) => (
                    <label key={fmt} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedFormats.includes(fmt)}
                        onChange={() =>
                          setSelectedFormats((s) => toggleInList(s, fmt))
                        }
                      />
                      <span>{fmt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>

          <fieldset className="filter-fieldset">
            <legend>Level</legend>
            <div className="filter-chip-grid">
              {PROFICIENCY_LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className={
                    selectedLevels.includes(lvl)
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  onClick={() =>
                    setSelectedLevels((s) => toggleInList(s, lvl))
                  }
                >
                  {LEVEL_LABELS[lvl] ?? lvl}
                </button>
              ))}
            </div>
          </fieldset>
        </aside>

        <section className="resources-results" aria-live="polite">
          <p className="resources-count">
            {filtered.length} of {allResources.length} resources
          </p>
          {filtered.length === 0 ? (
            <div className="resources-empty">
              <p>No resources match these filters.</p>
              <button
                type="button"
                className="resources-clear-filters"
                onClick={clearFilters}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="resources-card-list">
              {filtered.map((r) => (
                <li key={r.id}>
                  <article className="article-card resource-card">
                    <h3 className="resource-card-title">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {r.title}
                      </a>
                    </h3>
                    {r.description && (
                      <p className="resource-card-desc">{r.description}</p>
                    )}
                    <div className="resource-card-tags">
                      {r.subjects.map((s) => (
                        <span key={s} className="resource-tag subject">
                          {s}
                          {SUBJECT_TO_FAMILY[s] && (
                            <span className="resource-tag-meta">
                              {" "}
                              · {SUBJECT_TO_FAMILY[s]}
                            </span>
                          )}
                        </span>
                      ))}
                      {r.formats.map((f) => (
                        <span key={f} className="resource-tag format">
                          {f}
                        </span>
                      ))}
                      <span className="resource-tag level">
                        {LEVEL_LABELS[r.level] ?? r.level}
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Resources;
