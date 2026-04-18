---
title: "Split Shift - 2D Action-Platformer"
featureImage: "/assets/projects/split-shift-2d-action-platformer.png"
clientName: ""
category: "Academic"
projectUrl: ""
githubUrl: ""
isHighlight: true
isRecent: true
isAvailable: true
---

<div class="work__links" style="margin-top: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
    <u><a class="link" href="/project/">Back to Projects</a></u>
</div>

<section class="work__description" style="margin-top: 2rem;">
    <h3 style="text-align: center;">Technologies Used</h3>
    <ul style="list-style-type: none; padding: 0; margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">C#</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Unity</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Game Design</li>
    </ul>
</section>

<section class="work__description" style="margin-top: 2rem;">
<article>

I developed **Split Shift**, a gritty 2D action-platformer, as my final project for IT 307W | Game Development at Bulacan State University. This game explores a unique gameplay concept where two souls fight for control of a single body, creating a rhythm-based combat and platforming experience unlike traditional action games.

<br/>

**Problem & Solution**

Most action-platformers rely on a single character archetype, limiting the tactical depth and player agency. I wanted to create a game where the core mechanic itself became the story—where the player constantly negotiates between two distinct personalities with opposing abilities. The dual-character system forces players to master rhythm and timing, making every shift between Jax and Axel a strategic decision rather than just a visual change.

<br/>

**Key Features**

- **Dual Protagonist System:** Seamlessly switch between Jax (heavy hitter, crowd control) and Axel (precision striker, mobility expert).
- **Bio-Rejection Mechanic:** A stress meter that escalates as you play—vision tunnels, audio muffles, and movement degrades if you stay in one persona too long. You must constantly shift to survive.
- **16 Interactive Scenes:** From the origin story of Project Gemini through the escape from the Kline Institute, each scene introduces new mechanics and narrative depth.
- **Rhythm Combat & Puzzle Platforming:** A frantic mix of combat encounters and environmental puzzles requiring precise character switching.
- **Boss Battles:** Face formidable opponents and the architect of your suffering, Dr. Kline.
- **Arcade Mode:** Unlock extended gameplay after escaping the laboratory.

<br/>

**Technical Challenges & Solutions**

- **Dual Character System:** Implementing two characters with distinct movesets required careful state management. I built a character abstraction layer in C# to swap behaviors seamlessly without code duplication.
- **Bio-Rejection Feedback:** Designing visual and audio feedback for the stress meter was critical. I used shader-based screen distortion, audio compression, and animation speed reduction to create an immersive sense of internal conflict.
- **Level Design Complexity:** Balancing 16 scenes with escalating difficulty required extensive playtesting and iterative refinement. Each scene had to teach new mechanics while maintaining narrative coherence.

<br/>

**Impact**

- Demonstrated mastery of game mechanics design by creating an innovative core loop.
- Achieved seamless integration of gameplay and narrative through the bio-rejection system.
- Delivered a polished, story-driven experience that stands out from typical academic projects.

<br/>

**Architecture**

- **Engine:** Unity 2022 LTS for robust performance and asset pipeline.
- **Language:** C# with SOLID principles for maintainable, scalable code.
- **Art & Animation:** Custom sprite work with frame-by-frame animation for authentic pixel art feel.
- **Audio:** Layered sound design responding to gameplay state changes.

This project deepened my expertise in game architecture, teaching me how to build systems that serve both mechanical and narrative goals. The challenge of keeping the core loop engaging across 16 scenes pushed me to think critically about pacing and player retention.

</article>
</section>

From the origin story to the final escape, here is a breakdown of the game's progression:

| Scene  |                                         Preview                                         | Description                                                                            |
| :----: | :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------- |
| **00** |  ![Scene 0](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-0.gif)  | **Main Menu:** The start of the journey.                                               |
| **01** |  ![Scene 1](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-1.gif)  | **The Origin:** Dr. Kline conducting illegal experiments to create the perfect weapon. |
| **02** |  ![Scene 2](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-2.gif)  | **The Subjects:** Jax and Axel selected for their brotherly bond and synergy.          |
| **03** |  ![Scene 3](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-3.gif)  | **Project Gemini:** Harnessing two souls into one bio-engineered body.                 |
| **04** |  ![Scene 4](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-4.gif)  | **The Incident:** A freak accident occurs—is it a tragedy or a blessing?               |
| **05** |  ![Scene 5](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-5.gif)  | **Awakening:** The brothers wake up in the containment cell.                           |
| **06** |  ![Scene 6](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-6.gif)  | **The Objective:** Escape the facility at all costs.                                   |
| **07** |  ![Scene 7](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-7.gif)  | **Traversal:** Navigating a map filled with obstacles, traps, and guards.              |
| **08** |  ![Scene 8](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-8.gif)  | **The Shift:** Introducing the core mechanic of swapping between Jax and Axel.         |
| **09** |  ![Scene 9](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-9.gif)  | **Bio-Rejection:** Managing the threshold bar before the body rejects the soul.        |
| **10** | ![Scene 10](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-10.gif) | **Jax's Agility:** utilizing Jax's exclusive Double Jump ability.                      |
| **11** | ![Scene 11](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-11.gif) | **Close Combat:** Jax dealing heavy damage in short-range encounters.                  |
| **12** | ![Scene 12](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-12.gif) | **Survival:** Parrying and dodging attacks (no blocking mechanics).                    |
| **13** | ![Scene 13](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-13.gif) | **Ranged Combat:** Axel inflicting damage from afar using energy pulses.               |
| **14** | ![Scene 14](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-14.gif) | **Boss Battles:** Defeating experiments and eventually Dr. Kline to gain freedom.      |
| **15** | ![Scene 15](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-15.gif) | **Collection:** Gathering items scattered across the map to progress.                  |
| **16** | ![Scene 16](https://jerome-avecilla.infinityfreeapp.com/assets/gamedev/ss-scene-16.gif) | **Freedom:** Unlocking Arcade Mode after escaping the laboratory.                      |

<br/>

## Project Documentation

Access the official documentation and guidelines for **Split Shift** below.

| Document                       | Description                                                                                 |                                                  Access                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------: |
| **Game Design Document (GDD)** | The blueprint of the project. Contains mechanics, story, characters, and level progression. |   [**View GDD**](https://drive.google.com/file/d/1qDM7yPdh9O3dPwp25UJi7JFlsJ6kYDbm/view?usp=drive_link)   |
| **Project Charter**            | Outlines the project scope, objectives, timeline, and potential risks.                      | [**View Charter**](https://drive.google.com/file/d/1wiEl4kIXjmtxVeQFUI-fy9_6rfwLY4d4/view?usp=drive_link) |
| **Game Presentation (PTT)**    | The pitch deck summarizing the game concept, art style, and core features.                  | [**View Slides**](https://drive.google.com/file/d/1UuoMdzFu_JCO8D6Yx1kG_GEZg5rYIUOG/view?usp=drive_link)  |
| **Coding Standards**           | **MANDATORY.** Rules for C# scripting, Unity file structure, and Git workflow.              |                                 [**Read Docs**](./Docs/CODE-STANDARDS.md)                                 |

<br/>

_Developed for the Final Project in Game Development._

</article>
</section>
