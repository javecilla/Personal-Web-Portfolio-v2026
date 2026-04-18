---
title: "CineMatch - Real-time Collaborative Movie Discovery Engine"
featureImage: "/assets/projects/cinematch.png"
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
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Java</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Android</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Firebase</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">Retrofit</li>
        <li style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.9rem;">TMDB API</li>
    </ul>
</section>

<section class="work__description" style="margin-top: 2rem;">
<article>

I developed **CineMatch**, a real-time collaborative movie discovery app, as my final project for IT 308W | Mobile Application Development 2 at Bulacan State University. This Android application solves a real-world problem: the friction and decision fatigue that comes with choosing a movie to watch with friends. I built a frictionless ecosystem where multiple users can sync their preferences in real-time and discover mutual matches instantly.

<br/>

**Problem & Solution**

Deciding what movie to watch with friends is surprisingly difficult. People have different tastes, preferences change moment to moment, and traditional voting methods are clunky and slow. I wanted to create an app that makes consensus-building fun and engaging, turning movie selection into an interactive social experience rather than a frustrating negotiation.

CineMatch uses a real-time "Swipe-to-Match" mechanic where users join a lobby, swipe through trending movies, and the app automatically detects when everyone in the group has swiped "Yes" on the same film. No voting rounds, no discussion threads—just instant alignment through collaborative interaction.

<br/>

**Key Features**

- **Real-Time Lobbies:** Users can host a room and invite friends using a unique Room Code. Members join instantly and sync in real-time using Firebase.
- **Swipe-to-Match Voting:** A frictionless interface where users swipe through TMDB's massive catalog. "Yes" swipes are recorded; "No" swipes are forgotten.
- **Instant Match Detection:** The moment all lobby members swipe "Yes" on the same title, a "Match Found" event triggers with visual celebration feedback.
- **Movie Discovery:** Browse trending movies, top-rated films, search by title, and explore interactive carousels.
- **User Personalization:** Save favorite movies, build a watchlist, and sync all preferences across sessions.
- **Sub-Second Synchronization:** Firebase Realtime Database ensures all lobby members stay perfectly in sync with near-zero latency.

<br/>

**Technical Challenges & Solutions**

- **Real-Time Synchronization:** Implementing low-latency sync across multiple devices was complex. I optimized Firebase listeners to only update affected UI elements, reducing bandwidth and improving responsiveness. The result: sub-second synchronization across devices.
- **MVVM Architecture:** Separating concerns between UI and business logic proved critical for testability and maintainability. I implemented proper data binding and used LiveData to manage state changes cleanly.
- **API Optimization:** TMDB API calls could be expensive at scale. I implemented intelligent caching with Retrofit interceptors and pagination to reduce network overhead while keeping content fresh.
- **Offline Fallback:** Not all features work offline, but I gracefully degrade the experience by caching previously fetched movies and allowing local browsing.

<br/>

**Impact**

- Delivered an intuitive, production-quality Android app that handles real-time collaboration elegantly.
- Achieved sub-second synchronization across multiple devices, exceeding typical expectations for a student project.
- Demonstrated mastery of modern Android best practices (MVVM, reactive programming, API integration).

<br/>

**Architecture**

- **Language:** Java 11 with clean architecture principles.
- **Design Pattern:** MVVM with LiveData and ViewModel for lifecycle-aware state management.
- **Backend:** Firebase Authentication for secure login and Firebase Realtime Database for low-latency lobby sync.
- **API Integration:** Retrofit 2 with OkHttp for efficient HTTP calls to TMDB API.
- **UI Components:** Android Material Design 3 for modern, responsive layouts.
- **Media Handling:** Glide for efficient image loading and caching. Lottie for celebration animations.

This project deepened my understanding of real-time systems, taught me how to design interfaces that feel responsive and immediate, and reinforced the importance of thoughtful architecture when building collaborative features. The challenge of keeping multiple clients in sync while maintaining a smooth user experience was genuinely rewarding.

<br/>

## Project Resources

This section contains our project resources used to aid in development and design.

- **[Wireframe Designs](https://excalidraw.com/#room=5c0c26c0ecb8ff4e4727,NFSer29AAl41qPj9B_p8sA)**: Link to the Excalidraw file containing low-fidelity wireframe designs.
- **[Error Logs for QA](https://docs.google.com/spreadsheets/d/1EUGHnK1aJGAP2NVL3JZvdHEJib1k_ru_cL4ePVGh26c/edit?usp=sharing)**: Google Sheets containing error logs and issue tracking for Quality Assurance.
- **[Project Assets & Documentation](https://drive.google.com/drive/folders/1ZubPgTYm7fYUJA-5KPPIxT1hue9emqRw?usp=drive_link)**: Google Drive folder containing UI/UX assets, video ads, and other project-related documents.

<br/>

_Developed for the Final Project in Mobile Application Development 2._

</article>
</section>
