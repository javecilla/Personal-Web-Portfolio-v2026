const fs = require('fs');
const path = require('path');

// ─── Projects Migration ────────────────────────────────────────────────────

function migrateProjects() {
  const projectsData = require('../src/_data/projects.json');
  const outDir = path.join(__dirname, '../src/project');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, 'project.json'), JSON.stringify({
    layout: "single-project",
    tags: ["project"]
  }, null, 2));

  projectsData.data.forEach(project => {
    const slug = project.link.replace('/project/', '').replace(/\/$/, '');

    let mdContent = `---
title: "${project.title}"
featureImage: "${project.image}"
clientName: "${project.issuer || ''}"
category: "${project.category}"
projectUrl: "${project.demoUrl || ''}"
githubUrl: "${project.githubUrl || ''}"
isHighlight: ${project.isHighlight || false}
isRecent: ${project.isRecent || false}
isAvailable: ${project.isAvailable || false}
---

<div class="work__links" style="margin-top: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
`;
    if (project.githubUrl) {
      mdContent += `    <u><a class="link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">View on GitHub</a></u>\n`;
    }
    mdContent += `    <u><a class="link" href="/project/">Back to Projects</a></u>
</div>

`;
    if (project.technologies && project.technologies.length > 0) {
      mdContent += `<section class="work__description" style="margin-top: 2rem;">
    <h3 style="text-align: center;">Technologies Used</h3>
    <ul style="list-style-type: none; padding: 0; margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
`;
      project.technologies.forEach(tech => {
        mdContent += `        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">${tech.name}</li>\n`;
      });
      mdContent += `    </ul>
</section>

`;
    }

    const knownHeaders = [
      "Problem & Solution", "Key Features", "Project Timeline",
      "Technical Challenges & Solutions", "Impact", "Architecture",
      "About the Project", "Development Journey", "Technical Stack",
      "Frontend Development Excellence", "Community-Centered Experience",
      "CI/CD & Automation", "Aesthetic Visual Gallery", "Personal Touch",
      "User Interaction Features", "Patient Portal", "Staff Portal",
      "Technologies Used", "User-Friendly Interface", "Improved Chat Experience",
      "Persistent & Session-Based Features", "Smart Features & Enhancements", "Accessibility"
    ];

    let formattedDesc = project.description;
    knownHeaders.forEach(header => {
      const regex = new RegExp(`^${header.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'gm');
      formattedDesc = formattedDesc.replace(regex, `**${header}**`);
    });

    mdContent += `<section class="work__description" style="margin-top: 2rem;">
<article>

${formattedDesc}

</article>
</section>
`;

    fs.writeFileSync(path.join(outDir, `${slug}.md`), mdContent);
  });

  console.log(`✅ Projects migration complete — ${projectsData.data.length} files written.`);
}

// ─── Achievements Migration ────────────────────────────────────────────────

function migrateAchievements() {
  const achievementsData = require('../src/_data/achievements.json');
  const outDir = path.join(__dirname, '../src/achievements');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, 'achievements.json'), JSON.stringify({
    layout: "single-achievement",
    tags: ["achievement"]
  }, null, 2));

  achievementsData.data.forEach(achievement => {
    const slug = achievement.link.replace('/achievements/', '').replace(/\/$/, '');

    // Escape any quotes in text fields for YAML safety
    const safeTitle = achievement.title.replace(/"/g, '\\"');
    const safeIssuer = (achievement.issuer || '').replace(/"/g, '\\"');

    const mdContent = `---
title: "${safeTitle}"
tag: "${achievement.tag}"
dateAwarded: "${achievement.date.trim()}"
issuer: "${safeIssuer}"
image: "${achievement.image}"
---

${achievement.description}
`;

    fs.writeFileSync(path.join(outDir, `${slug}.md`), mdContent);
  });

  console.log(`✅ Achievements migration complete — ${achievementsData.data.length} files written.`);
}

// ─── Run ──────────────────────────────────────────────────────────────────

migrateProjects();
migrateAchievements();
