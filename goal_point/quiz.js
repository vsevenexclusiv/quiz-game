// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
    const questions = {
        planets: {
            easy: [
                { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Mars" },
                { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], answer: "Jupiter" },
                { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
                { question: "Which planet has the most moons?", options: ["Mars", "Jupiter", "Saturn", "Uranus"], answer: "Saturn" },
                { question: "What planet is known for its rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
                { question: "Which planet is the smallest?", options: ["Mercury", "Venus", "Mars", "Pluto"], answer: "Mercury" },
                { question: "What is Earth’s only natural satellite?", options: ["Moon", "Sun", "Mars", "Venus"], answer: "Moon" },
                { question: "Which planet spins backwards?", options: ["Venus", "Mars", "Jupiter", "Earth"], answer: "Venus" },
                { question: "What planet is blue due to methane?", options: ["Neptune", "Uranus", "Earth", "Mars"], answer: "Neptune" },
                { question: "Which planet has a day longer than its year?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Venus" }
            ],
            medium: [
                { question: "Which planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Uranus"], answer: "Jupiter" },
                { question: "What planet’s atmosphere is mostly carbon dioxide?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: "Venus" },
                { question: "Which planet has a moon called Titan?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
                { question: "What planet has the shortest day?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" },
                { question: "Which planet’s axis is tilted 98 degrees?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: "Uranus" },
                { question: "What planet has no atmosphere?", options: ["Mercury", "Venus", "Mars", "Earth"], answer: "Mercury" },
                { question: "Which planet has a moon named Europa?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter" },
                { question: "What planet is the hottest?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
                { question: "Which planet has the deepest canyon?", options: ["Mars", "Earth", "Venus", "Mercury"], answer: "Mars" },
                { question: "What planet’s rings are made of ice?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: "Saturn" }
            ],
            hard: [
                { question: "Which planet has a moon with geysers (Enceladus)?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
                { question: "What planet’s density suggests a large iron core?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
                { question: "Which planet’s moon Io has active volcanoes?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter" },
                { question: "What planet has a rotational period of 243 Earth days?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Venus" },
                { question: "Which planet’s atmosphere is 96% carbon dioxide?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: "Venus" },
                { question: "What planet has a moon named Triton with retrograde orbit?", options: ["Neptune", "Uranus", "Saturn", "Jupiter"], answer: "Neptune" },
                { question: "Which planet’s Great Dark Spot was observed in 1989?", options: ["Neptune", "Uranus", "Jupiter", "Saturn"], answer: "Neptune" },
                { question: "What planet has the weakest magnetic field?", options: ["Mars", "Venus", "Mercury", "Earth"], answer: "Venus" },
                { question: "Which planet’s moon Ganymede is larger than Mercury?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter" },
                { question: "What planet’s tilt causes extreme seasons?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: "Uranus" }
            ]
        },
        eplFootball: {
            easy: [
                { question: "Which team has won the most EPL titles?", options: ["Liverpool", "Manchester United", "Chelsea", "Arsenal"], answer: "Manchester United" },
                { question: "What city is Arsenal based in?", options: ["London", "Manchester", "Liverpool", "Birmingham"], answer: "London" },
                { question: "Which team is known as The Reds?", options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], answer: "Liverpool" },
                { question: "What club’s nickname is The Blues?", options: ["Chelsea", "Everton", "Manchester City", "Tottenham"], answer: "Chelsea" },
                { question: "Which team plays at Old Trafford?", options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], answer: "Manchester United" },
                { question: "What club won the EPL in 2015-16 as underdogs?", options: ["Leicester City", "West Ham", "Southampton", "Norwich"], answer: "Leicester City" },
                { question: "Which team is called The Gunners?", options: ["Arsenal", "Chelsea", "Tottenham", "Manchester City"], answer: "Arsenal" },
                { question: "What city hosts Everton?", options: ["Liverpool", "London", "Manchester", "Newcastle"], answer: "Liverpool" },
                { question: "Which club has a cockerel as its emblem?", options: ["Tottenham", "Arsenal", "Chelsea", "West Ham"], answer: "Tottenham" },
                { question: "What team plays in sky blue?", options: ["Manchester City", "Chelsea", "Everton", "Leicester"], answer: "Manchester City" }
            ],
            medium: [
                { question: "Which club won the EPL in 1992-93, the first season?", options: ["Manchester United", "Arsenal", "Liverpool", "Chelsea"], answer: "Manchester United" },
                { question: "What team’s stadium is Stamford Bridge?", options: ["Chelsea", "Arsenal", "Tottenham", "West Ham"], answer: "Chelsea" },
                { question: "Which club has won the EPL 13 times?", options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], answer: "Manchester United" },
                { question: "What team’s ground is Anfield?", options: ["Liverpool", "Everton", "Manchester United", "Arsenal"], answer: "Liverpool" },
                { question: "Which club won the EPL in 2003-04 unbeaten?", options: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"], answer: "Arsenal" },
                { question: "What team’s nickname is The Citizens?", options: ["Manchester City", "Chelsea", "Tottenham", "Everton"], answer: "Manchester City" },
                { question: "Which club’s stadium is Etihad?", options: ["Manchester City", "Manchester United", "Chelsea", "Arsenal"], answer: "Manchester City" },
                { question: "What team won the EPL in 2011-12 on goal difference?", options: ["Manchester City", "Manchester United", "Chelsea", "Arsenal"], answer: "Manchester City" },
                { question: "Which club’s home is Goodison Park?", options: ["Everton", "Liverpool", "West Ham", "Tottenham"], answer: "Everton" },
                { question: "What team has a cannon on its crest?", options: ["Arsenal", "Chelsea", "Tottenham", "Manchester United"], answer: "Arsenal" }
            ],
            hard: [
                { question: "Which EPL club won its first title in 2015-16?", options: ["Leicester City", "West Brom", "Stoke City", "Burnley"], answer: "Leicester City" },
                { question: "What team’s manager won the EPL 13 times?", options: ["Alex Ferguson (Man Utd)", "Arsène Wenger (Arsenal)", "José Mourinho (Chelsea)", "Pep Guardiola (Man City)"], answer: "Alex Ferguson (Man Utd)" },
                { question: "Which club’s stadium is White Hart Lane?", options: ["Tottenham", "Arsenal", "Chelsea", "West Ham"], answer: "Tottenham" },
                { question: "What team won the EPL in 2004-05 with 95 points?", options: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"], answer: "Chelsea" },
                { question: "Which club’s 1995-96 title was their last until 2019-20?", options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"], answer: "Liverpool" },
                { question: "What team’s 2018-19 EPL win came with 98 points?", options: ["Manchester City", "Liverpool", "Chelsea", "Arsenal"], answer: "Manchester City" },
                { question: "Which club’s ground was Highbury until 2006?", options: ["Arsenal", "Tottenham", "Chelsea", "West Ham"], answer: "Arsenal" },
                { question: "What team won the EPL in 2005-06 with 91 points?", options: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"], answer: "Chelsea" },
                { question: "Which club’s nickname is The Toffees?", options: ["Everton", "West Ham", "Leicester", "Southampton"], answer: "Everton" },
                { question: "What team’s 2001-02 EPL title came with 87 points?", options: ["Arsenal", "Manchester United", "Liverpool", "Chelsea"], answer: "Arsenal" }
            ]
        },
        geography: {
            easy: [
                { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: "Brasília" },
                { question: "Which continent is Australia in?", options: ["Asia", "Africa", "Australia", "Europe"], answer: "Australia" },
                { question: "What country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan" },
                { question: "Which city is the capital of France?", options: ["Paris", "Lyon", "Marseille", "Nice"], answer: "Paris" },
                { question: "What is the largest country by land area?", options: ["Russia", "China", "USA", "Canada"], answer: "Russia" },
                { question: "Which country has the most people?", options: ["India", "China", "USA", "Brazil"], answer: "China" },
                { question: "What city is the capital of the UK?", options: ["London", "Manchester", "Birmingham", "Liverpool"], answer: "London" },
                { question: "Which continent is Egypt in?", options: ["Africa", "Asia", "Europe", "South America"], answer: "Africa" },
                { question: "What country’s capital is Ottawa?", options: ["Canada", "USA", "Australia", "UK"], answer: "Canada" },
                { question: "Which city is the capital of Italy?", options: ["Rome", "Milan", "Venice", "Florence"], answer: "Rome" }
            ],
            medium: [
                { question: "What country’s capital is Canberra?", options: ["Australia", "New Zealand", "South Africa", "Canada"], answer: "Australia" },
                { question: "Which city is the largest by population?", options: ["Tokyo", "New York", "Shanghai", "Mumbai"], answer: "Tokyo" },
                { question: "What country has the longest coastline?", options: ["Canada", "Russia", "Australia", "USA"], answer: "Canada" },
                { question: "Which country’s capital is Nairobi?", options: ["Kenya", "Nigeria", "South Africa", "Ghana"], answer: "Kenya" },
                { question: "What city was once called Constantinople?", options: ["Istanbul", "Athens", "Rome", "Cairo"], answer: "Istanbul" },
                { question: "Which country has the most deserts?", options: ["Australia", "Egypt", "Saudi Arabia", "USA"], answer: "Australia" },
                { question: "What country’s capital is Buenos Aires?", options: ["Argentina", "Brazil", "Chile", "Uruguay"], answer: "Argentina" },
                { question: "Which city is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid" },
                { question: "What country borders 14 nations?", options: ["Russia", "China", "Germany", "Brazil"], answer: "Russia" },
                { question: "Which country’s capital is Oslo?", options: ["Norway", "Sweden", "Denmark", "Finland"], answer: "Norway" }
            ],
            hard: [
                { question: "What country’s capital is Ulaanbaatar?", options: ["Mongolia", "Kazakhstan", "Uzbekistan", "Turkmenistan"], answer: "Mongolia" },
                { question: "Which city is the southernmost capital in the world?", options: ["Wellington", "Canberra", "Santiago", "Cape Town"], answer: "Wellington" },
                { question: "What country has the highest average elevation?", options: ["Nepal", "Bhutan", "Tibet (China)", "Switzerland"], answer: "Bhutan" },
                { question: "Which country’s capital is Astana (now Nur-Sultan)?", options: ["Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Tajikistan"], answer: "Kazakhstan" },
                { question: "What city was the capital of Brazil before Brasília?", options: ["Rio de Janeiro", "São Paulo", "Salvador", "Recife"], answer: "Rio de Janeiro" },
                { question: "Which country’s capital is Reykjavik?", options: ["Iceland", "Greenland", "Norway", "Finland"], answer: "Iceland" },
                { question: "What country has the most islands?", options: ["Sweden", "Indonesia", "Philippines", "Japan"], answer: "Sweden" },
                { question: "Which city is the capital of South Africa (legislative)?", options: ["Cape Town", "Pretoria", "Bloemfontein", "Johannesburg"], answer: "Cape Town" },
                { question: "What country’s capital is Hanoi?", options: ["Vietnam", "Thailand", "Laos", "Cambodia"], answer: "Vietnam" },
                { question: "Which country’s capital is Ljubljana?", options: ["Slovenia", "Slovakia", "Croatia", "Serbia"], answer: "Slovenia" }
            ]
        }
    };

    // Players and Banker
    const aiNames = ["Zorak", "Luna", "Rex", "Vera", "Milo", "Kira", "Jinx", "Tara", "Finn", "Echo", "Blaze", "Nova", "Sly", "Gwen", "Ace"];
    let players = JSON.parse(localStorage.getItem("players")) || [
        { name: "Seven", iq: null, coins: 1000, level: 1, wins: 0, losses: 0, streak: 0, isHuman: true, avatar: "avatars/default.png", nftAvatar: null, coinSkin: "default" },
        ...aiNames.map(name => ({
            name,
            iq: Math.floor(Math.random() * 50) + 50,
            coins: 1000,
            level: 1,
            wins: 0,
            losses: 0,
            streak: 0,
            isHuman: false,
            avatar: `avatars/ai${Math.floor(Math.random() * 3) + 1}.png`,
            nftAvatar: null,
            coinSkin: "default"
        }))
    ];
    let bankerCoins = JSON.parse(localStorage.getItem("bankerCoins")) || 0;

    // Achievements (including streak achievements)
    const achievements = [
        { id: "firstWin", name: "First Win", description: "Win your first game", reward: 100, achieved: false },
        { id: "tenWins", name: "Quiz Master", description: "Win 10 games", reward: 500, achieved: false },
        { id: "allAI", name: "AI Slayer", description: "Beat all 15 AIs at least once", reward: 1000, achieved: false },
        { id: "fiveStreak", name: "5-Win Streak", description: "Achieve a 5-win streak", reward: 200, achieved: false },
        { id: "tenStreak", name: "10-Win Streak", description: "Achieve a 10-win streak", reward: 500, achieved: false }
    ];

    // NFT Rarity and Costs (Coins = USDT * 100)
    const nfts = [
        { id: "nft1", name: "Golden Coin", src: "nft-gold.png", rarity: "Common", cost: 1000 }, // 10 USDT
        { id: "nft2", name: "Neon Coin", src: "nft-neon.png", rarity: "Common", cost: 1000 }, // 10 USDT
        { id: "nft3", name: "Dark Coin", src: "nft-dark.png", rarity: "Common", cost: 1000 }, // 10 USDT
        { id: "nft4", name: "Rainbow Coin", src: "nft-rainbow.png", rarity: "Common", cost: 1000 }, // 10 USDT
        { id: "nft5", name: "Pulse Coin", src: "nft-pulse.png", rarity: "Common", cost: 1000 }, // 10 USDT
        { id: "nft6", name: "Holographic Coin", src: "nft-holographic.png", rarity: "Rare", cost: 2000 }, // 20 USDT
        { id: "nft7", name: "Fiery Coin", src: "nft-fiery.png", rarity: "Rare", cost: 2000 }, // 20 USDT
        { id: "nft8", name: "Icy Coin", src: "nft-icy.png", rarity: "Rare", cost: 2000 }, // 20 USDT
        { id: "nft9", name: "Crystal Coin", src: "nft-crystal.png", rarity: "Epic", cost: 5000 }, // 50 USDT
        { id: "nft10", name: "Plasma Coin", src: "nft-plasma.png", rarity: "Legendary", cost: 10000 } // 100 USDT
    ];

    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let player1Score = 0;
    let opponentScore = 0;
    let timer = null;
    let timeLeft = 10;
    let isSuddenDeath = false;
    let isAnswering = false;
    let player1Coins = players[0].coins;
    let opponent = null;
    let betAmount = 0;
    let scoreHistory = JSON.parse(localStorage.getItem("scoreHistory")) || [];
    let beatenAIs = new Set();
    let selectedCategory = null;
    let selectedDifficulty = null;
    let dailyChallenge = JSON.parse(localStorage.getItem("dailyChallenge")) || { completed: false, reward: 100, goal: "Win 1 game today for 100 Coins!", progress: 0 };
    let weeklyChallenge = JSON.parse(localStorage.getItem("weeklyChallenge")) || { completed: false, reward: 500, goal: "Win 5 games this week for 500 Coins!", progress: 0 };

    // DOM elements (with optional chaining for safety)
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const timerElement = document.getElementById("timer");
    const scoreElement = document.getElementById("score");
    const coinsElement = document.getElementById("coins");
    const coinsGameElement = document.getElementById("coinsGame");
    const replayButton = document.getElementById("replayButton");
    const timerBar = document.getElementById("timerBar");
    const opponentInfo = document.getElementById("opponentInfo");
    const historyList = document.getElementById("historyList");
    const leaderboardBody = document.getElementById("leaderboardBody");
    const achievementList = document.getElementById("achievementList");
    const extraTimeButton = document.getElementById("extraTime");
    const fiftyFiftyButton = document.getElementById("fiftyFifty");
    const streakBreakerButton = document.getElementById("streakBreaker");
    const betOptions = document.getElementById("betOptions");
    const bankerCoinsElement = document.getElementById("bankerCoins");
    const buyDarkThemeButton = document.getElementById("buyDarkTheme");
    const buyNeonThemeButton = document.getElementById("buyNeonTheme");
    const coinAnimation = document.getElementById("coinAnimation");
    const playerAvatar = document.getElementById("playerAvatar");
    const playerAvatarGame = document.getElementById("playerAvatarGame");
    const avatar1Button = document.getElementById("avatar1");
    const avatar2Button = document.getElementById("avatar2");
    const avatar3Button = document.getElementById("avatar3");
    const planetsButton = document.getElementById("planetsButton");
    const eplButton = document.getElementById("eplButton");
    const geographyButton = document.getElementById("geographyButton");
    const easyButton = document.getElementById("easyButton");
    const mediumButton = document.getElementById("mediumButton");
    const hardButton = document.getElementById("hardButton");
    const backBtn = document.querySelectorAll(".back-btn");
    const storeBtn = document.getElementById("storeBtn");
    const vaultBtn = document.getElementById("vaultBtn");
    const userBtn = document.getElementById("userBtn");
    const aboutBtn = document.getElementById("aboutBtn");
    const nftButtons = [
        document.getElementById("nft1"), document.getElementById("nft2"), document.getElementById("nft3"),
        document.getElementById("nft4"), document.getElementById("nft5"), document.getElementById("nft6"),
        document.getElementById("nft7"), document.getElementById("nft8"), document.getElementById("nft9"),
        document.getElementById("nft10")
    ];
    const dailyChallengeSection = document.getElementById("dailyChallenge");
    const weeklyChallengeSection = document.getElementById("weeklyChallenge");
    const claimChallengeBtn = document.getElementById("claimChallenge");
    const claimWeeklyChallengeBtn = document.getElementById("claimWeeklyChallenge");
    const buyCoinsBtn = document.getElementById("buyCoinsBtn");
    const shareTelegramBtn = document.getElementById("shareTelegram");
    const topStreaksList = document.getElementById("topStreaks");
    const manageProfileBtn = document.getElementById("manageProfile"); // Ensure this exists in HTML

    // Sound elements
    const bgMusic = document.getElementById("bgMusic");
    const lowTimeSound = document.getElementById("lowTimeSound");

    // Function to log DOM element existence for debugging
    function checkDOMElements() {
        const elements = {
            manageProfileBtn, userBtn, storeBtn, vaultBtn, aboutBtn, // Navigation buttons
            questionElement, optionsElement, timerElement, scoreElement, coinsElement, coinsGameElement,
            replayButton, timerBar, opponentInfo, historyList, leaderboardBody, achievementList,
            extraTimeButton, fiftyFiftyButton, streakBreakerButton, betOptions, bankerCoinsElement,
            buyDarkThemeButton, buyNeonThemeButton, coinAnimation, playerAvatar, playerAvatarGame,
            avatar1Button, avatar2Button, avatar3Button, planetsButton, eplButton, geographyButton,
            easyButton, mediumButton, hardButton, dailyChallengeSection, weeklyChallengeSection,
            claimChallengeBtn, claimWeeklyChallengeBtn, buyCoinsBtn, shareTelegramBtn, topStreaksList
        };
        for (let key in elements) {
            if (!elements[key]) {
                console.error(`Element ${key} not found in DOM`);
            }
        }
    }

    // Check DOM elements on load
    checkDOMElements();

    // Navigate to Manage Profile
    manageProfileBtn?.addEventListener("click", () => {
        console.log("Navigating to Manage Profile...");
        window.location.href = "manage-profile.html";
    });

    userBtn?.addEventListener("click", () => {
        console.log("Navigating to Manage Profile via User...");
        window.location.href = "manage-profile.html";
    });

    // Share on Telegram (placeholder)
    shareTelegramBtn?.addEventListener("click", () => {
        alert("Share on Telegram: tg://resolve?domain=YourBotName");
        // Replace with actual Telegram URL or Mini App link later
    });

    // Category selection
    planetsButton?.addEventListener("click", () => {
        selectedCategory = "planets";
        showDifficultyMenu();
    });
    eplButton?.addEventListener("click", () => {
        selectedCategory = "eplFootball";
        showDifficultyMenu();
    });
    geographyButton?.addEventListener("click", () => {
        selectedCategory = "geography";
        showDifficultyMenu();
    });

    // Difficulty selection
    easyButton?.addEventListener("click", () => {
        selectedDifficulty = "easy";
        selectedQuestions = getRandomQuestions(questions[selectedCategory][selectedDifficulty], 5);
        showBetMenu();
    });
    mediumButton?.addEventListener("click", () => {
        selectedDifficulty = "medium";
        selectedQuestions = getRandomQuestions(questions[selectedCategory][selectedDifficulty], 5);
        showBetMenu();
    });
    hardButton?.addEventListener("click", () => {
        selectedDifficulty = "hard";
        selectedQuestions = getRandomQuestions(questions[selectedCategory][selectedDifficulty], 5);
        showBetMenu();
    });

    // Back navigation
    backBtn.forEach(btn => {
        btn?.addEventListener("click", () => {
            if (document.getElementById("difficultyMenu").style.display === "block") {
                showCategoryMenu();
            } else if (document.getElementById("betMenu").style.display === "block") {
                showDifficultyMenu();
            }
        });
    });

    // Footer navigation (ensure all buttons work)
    storeBtn?.addEventListener("click", () => {
        console.log("Navigating to Store...");
        alert("Store: Buy avatars, themes, NFTs, and more!");
        // For now, use alert—could expand to a new page or modal later
    });

    vaultBtn?.addEventListener("click", () => {
        console.log("Navigating to Vault...");
        alert("Vault: View your Coins and history!");
        // Could link to banker/coins display or history page later
    });

    aboutBtn?.addEventListener("click", () => {
        console.log("Navigating to About...");
        alert("About: Learn more about the game!");
        // Placeholder for game info—could expand to a new page later
    });

    // Power-ups and Banker Transactions
    extraTimeButton?.addEventListener("click", () => {
        if (player1Coins >= 50 && timeLeft > 0) {
            bankerTransaction(50, "power-up");
            animateCoins(50, coinsGameElement, bankerCoinsElement);
            timeLeft += 5;
            extraTimeButton.disabled = true;
            updateLevels();
        }
    });
    fiftyFiftyButton?.addEventListener("click", () => {
        if (player1Coins >= 50 && !isAnswering) {
            bankerTransaction(50, "power-up");
            animateCoins(50, coinsGameElement, bankerCoinsElement);
            const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
            const wrongOptions = selectedQuestions[currentQuestionIndex].options.filter(opt => opt !== correctAnswer);
            const removeCount = Math.floor(wrongOptions.length / 2);
            const toRemove = wrongOptions.sort(() => Math.random() - 0.5).slice(0, removeCount);
            optionsElement.querySelectorAll("button").forEach(btn => {
                if (toRemove.includes(btn.textContent)) btn.style.display = "none";
            });
            fiftyFiftyButton.disabled = true;
            updateLevels();
        }
    });

    streakBreakerButton?.addEventListener("click", () => {
        if (player1Coins >= 100 && opponent && opponent.streak > 0) {
            bankerTransaction(100, "power-up");
            animateCoins(100, coinsGameElement, bankerCoinsElement);
            opponent.streak = 0;
            alert(`Streak Breaker used! ${opponent.name}'s streak reset.`);
            updateLevels();
            streakBreakerButton.disabled = true;
        }
    });

    // Banker Theme Purchases
    buyDarkThemeButton?.addEventListener("click", () => {
        if (player1Coins >= 500) {
            bankerTransaction(500, "theme");
            animateCoins(500, coinsGameElement, bankerCoinsElement);
            applyTheme("dark");
            updateLevels();
        } else {
            alert("Not enough Coins for Dark Theme!");
        }
    });
    buyNeonThemeButton?.addEventListener("click", () => {
        if (player1Coins >= 500) {
            bankerTransaction(500, "theme");
            animateCoins(500, coinsGameElement, bankerCoinsElement);
            applyTheme("neon");
            updateLevels();
        } else {
            alert("Not enough Coins for Neon Theme!");
        }
    });

    // Avatar shop
    avatar1Button?.addEventListener("click", () => buyAvatar("avatars/cat.png", 50));
    avatar2Button?.addEventListener("click", () => buyAvatar("avatars/dog.png", 50));
    avatar3Button?.addEventListener("click", () => buyAvatar("avatars/robot.png", 50));

    function buyAvatar(avatarSrc, cost) {
        if (player1Coins >= cost) {
            bankerTransaction(cost, "avatar");
            animateCoins(cost, coinsGameElement, bankerCoinsElement);
            players[0].avatar = avatarSrc;
            players[0].nftAvatar = null; // Clear NFT if switching to basic
            playerAvatar.src = avatarSrc;
            playerAvatar.className = "avatar";
            playerAvatarGame.src = avatarSrc;
            playerAvatarGame.className = "avatar";
            saveState();
            updateLevels();
            updateUserProfile();
            alert("Avatar purchased successfully!");
        } else {
            alert("Not enough Coins for this avatar!");
        }
    }

    // NFT shop with rarity
    nftButtons.forEach((btn, index) => {
        btn?.addEventListener("click", () => buyNFT(nfts[index].id, nfts[index].src, nfts[index].cost, nfts[index].rarity));
    });

    function buyNFT(id, nftSrc, cost, rarity) {
        if (player1Coins >= cost) {
            bankerTransaction(cost, "nft");
            animateCoins(cost, coinsGameElement, bankerCoinsElement);
            players[0].nftAvatar = nftSrc;
            players[0].avatar = "avatars/default.png"; // Reset to default if switching to NFT
            playerAvatar.src = nftSrc;
            playerAvatar.className = "nft-avatar";
            playerAvatarGame.src = nftSrc;
            playerAvatarGame.className = "nft-avatar";
            saveState();
            updateLevels();
            updateUserProfile();
            alert(`Purchased ${rarity} NFT: ${nfts.find(n => n.id === id).name} successfully!`);
        } else {
            alert("Not enough Coins for this NFT avatar!");
        }
    }

    // Buy Coins
    buyCoinsBtn?.addEventListener("click", () => {
        const coinsToBuy = 100; // 1 USDT = 100 Coins (placeholder)
        const usdtCost = 1; // 1 USDT
        if (confirm(`Buy ${coinsToBuy} Coins for ${usdtCost} USDT?`)) {
            player1Coins += coinsToBuy;
            players[0].coins = player1Coins;
            bankerCoins -= coinsToBuy; // Simulate banker transaction (placeholder)
            saveState();
            updateCoins();
            updateUserProfile();
            alert(`${coinsToBuy} Coins purchased successfully!`);
        }
    });

    // Daily Challenge
    function checkDailyChallenge() {
        const today = new Date().toDateString();
        const lastCheck = localStorage.getItem("lastChallengeCheck");
        if (lastCheck !== today) {
            localStorage.setItem("lastChallengeCheck", today);
            dailyChallenge = { completed: false, reward: 100, goal: "Win 1 game today for 100 Coins!", progress: 0 };
            localStorage.setItem("dailyChallenge", JSON.stringify(dailyChallenge));
            dailyChallengeSection.style.display = "block";
        } else if (!dailyChallenge.completed) {
            dailyChallengeSection.style.display = "block";
        } else {
            dailyChallengeSection.style.display = "none";
        }
        updateChallengeDisplay();
    }

    // Weekly Challenge
    function checkWeeklyChallenge() {
        const week = getWeekNumber(new Date());
        const lastWeek = localStorage.getItem("lastWeeklyCheck");
        if (lastWeek !== week) {
            localStorage.setItem("lastWeeklyCheck", week);
            weeklyChallenge = { completed: false, reward: 500, goal: "Win 5 games this week for 500 Coins!", progress: 0 };
            localStorage.setItem("weeklyChallenge", JSON.stringify(weeklyChallenge));
            weeklyChallengeSection.style.display = "block";
        } else if (!weeklyChallenge.completed) {
            weeklyChallengeSection.style.display = "block";
        } else {
            weeklyChallengeSection.style.display = "none";
        }
        updateChallengeDisplay();
    }

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return d.getUTCFullYear() + "-W" + weekNo;
    }

    function updateChallengeDisplay() {
        if (dailyChallengeSection) dailyChallengeSection.querySelector("p").textContent = `${dailyChallenge.goal} (Progress: ${dailyChallenge.progress}/1)`;
        if (weeklyChallengeSection) weeklyChallengeSection.querySelector("p").textContent = `${weeklyChallenge.goal} (Progress: ${weeklyChallenge.progress}/5)`;
    }

    claimChallengeBtn?.addEventListener("click", () => {
        if (!dailyChallenge.completed && dailyChallenge.progress >= 1) {
            player1Coins += dailyChallenge.reward;
            players[0].coins = player1Coins;
            dailyChallenge.completed = true;
            dailyChallengeSection.style.display = "none";
            animateCoins(dailyChallenge.reward, bankerCoinsElement, coinsElement);
            alert(`Claimed ${dailyChallenge.reward} Coins for completing the daily challenge!`);
            updateCoins();
            updateLevels();
            saveState();
        } else {
            alert("Complete the daily challenge or check back tomorrow!");
        }
    });

    claimWeeklyChallengeBtn?.addEventListener("click", () => {
        if (!weeklyChallenge.completed && weeklyChallenge.progress >= 5) {
            player1Coins += weeklyChallenge.reward;
            players[0].coins = player1Coins;
            weeklyChallenge.completed = true;
            weeklyChallengeSection.style.display = "none";
            animateCoins(weeklyChallenge.reward, bankerCoinsElement, coinsElement);
            alert(`Claimed ${weeklyChallenge.reward} Coins for completing the weekly challenge!`);
            updateCoins();
            updateLevels();
            saveState();
        } else {
            alert("Complete the weekly challenge or check back next week!");
        }
    });

    // Show category menu (initial state)
    function showCategoryMenu() {
        document.getElementById("categoryMenu").style.display = "block";
        document.getElementById("difficultyMenu").style.display = "none";
        document.getElementById("betMenu").style.display = "none";
        document.getElementById("game").style.display = "none";
        checkDailyChallenge();
        checkWeeklyChallenge();
    }

    // Show difficulty menu
    function showDifficultyMenu() {
        document.getElementById("categoryMenu").style.display = "none";
        document.getElementById("difficultyMenu").style.display = "block";
        document.getElementById("betMenu").style.display = "none";
        document.getElementById("game").style.display = "none";
        dailyChallengeSection.style.display = "none";
        weeklyChallengeSection.style.display = "none";
    }

    // Show bet menu
    function showBetMenu() {
        document.getElementById("difficultyMenu").style.display = "none";
        document.getElementById("categoryMenu").style.display = "none";
        document.getElementById("betMenu").style.display = "block";
        document.getElementById("game").style.display = "none";
        dailyChallengeSection.style.display = "none";
        weeklyChallengeSection.style.display = "none";
        betOptions.innerHTML = "";
        const bets = selectedDifficulty === "easy" ? [5, 15, 25] : 
                     selectedDifficulty === "medium" ? [50, 75, 100] : 
                     [150, 200, 250];
        bets.forEach(bet => {
            const btn = document.createElement("button");
            btn.textContent = `${bet} Coins`;
            btn.addEventListener("click", () => {
                betAmount = bet;
                startGame(bet);
            });
            betOptions.appendChild(btn);
        });
    }

    // Get 5 random questions from a list
    function getRandomQuestions(questionList, count) {
        const shuffled = [...questionList].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    // Start the game (Challenge Available Player mode)
    function startGame(bet) {
        if (timer) clearInterval(timer);
        document.getElementById("betMenu").style.display = "none";
        document.getElementById("game").style.display = "block";
        isSuddenDeath = false;
        currentQuestionIndex = 0;
        player1Score = 0;
        opponentScore = 0;
        timeLeft = 10;
        isAnswering = false;
        replayButton.style.display = "none";
        
        opponent = players.filter(p => !p.isHuman)[Math.floor(Math.random() * (players.length - 1))]; // Random AI
        bankerTransaction(bet, "bet");
        animateCoins(bet, coinsGameElement, bankerCoinsElement, players[0].coinSkin);
        bankerTransaction(bet, "bet", opponent);
        animateCoins(bet, opponentInfo, bankerCoinsElement, opponent.coinSkin);
        
        opponentInfo.textContent = `Opponent: ${opponent.name} (IQ: ${opponent.iq})`;
        playerAvatarGame.src = players[0].nftAvatar || players[0].avatar || "avatars/default.png";
        playerAvatarGame.className = players[0].nftAvatar ? "nft-avatar" : "avatar";
        
        updateScore();
        updateCoins();
        saveState();
        updateLevels();
        extraTimeButton.disabled = false;
        fiftyFiftyButton.disabled = false;
        streakBreakerButton.disabled = false;
        requestAnimationFrame(() => showQuestion());
        startTimer();
        bgMusic.play().catch(() => console.log("Background music failed to play"));
    }

    // Display the current question with shuffled options
    function showQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            endGame();
            return;
        }
        const question = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = "";
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        shuffledOptions.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => {
                if (!isAnswering) checkAnswer(option);
            });
            optionsElement.appendChild(button);
        });
        // Random mini-challenge during gameplay
        if (Math.random() < 0.3) { // 30% chance
            const miniChallenge = Math.floor(Math.random() * 3);
            if (miniChallenge === 0) {
                alert("Mini-Challenge: Answer 3 questions correctly in a row for 50 Coins!");
                localStorage.setItem("miniChallengeProgress", JSON.stringify({ count: 0, reward: 50 }));
            }
        }
    }

    // Check the player's answer
    function checkAnswer(selectedAnswer) {
        if (isAnswering) return;
        isAnswering = true;
        if (timer) clearInterval(timer);
        timer = null;
        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

        if (selectedAnswer === correctAnswer) {
            player1Score++;
            playSound("correctSound");
            alert("Correct!");
            // Update mini-challenge progress
            const miniChallenge = JSON.parse(localStorage.getItem("miniChallengeProgress")) || { count: 0, reward: 50 };
            if (miniChallenge.count !== null) {
                miniChallenge.count++;
                if (miniChallenge.count >= 3) {
                    player1Coins += miniChallenge.reward;
                    players[0].coins = player1Coins;
                    animateCoins(miniChallenge.reward, bankerCoinsElement, coinsGameElement);
                    alert(`Mini-Challenge Completed! +${miniChallenge.reward} Coins`);
                    localStorage.removeItem("miniChallengeProgress");
                } else {
                    localStorage.setItem("miniChallengeProgress", JSON.stringify(miniChallenge));
                }
            }
        } else {
            playSound("incorrectSound");
            alert(`Incorrect! The correct answer is ${correctAnswer}.`);
            // Reset mini-challenge on wrong answer
            localStorage.removeItem("miniChallengeProgress");
        }

        opponentAnswer();
        updateScore();

        if (isSuddenDeath) {
            if (player1Score !== opponentScore) {
                endGame();
            } else {
                nextSuddenDeathQuestion();
            }
        } else {
            setTimeout(nextQuestion, 500);
        }
        isAnswering = false;
    }

    // Opponent answers based on IQ
    function opponentAnswer() {
        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
        const iqChance = opponent.iq / 100;
        const randomAnswer = Math.random() < iqChance 
            ? correctAnswer 
            : selectedQuestions[currentQuestionIndex].options[Math.floor(Math.random() * 4)];
        if (randomAnswer === correctAnswer) {
            opponentScore++;
        }
    }

    // Update score and Coins display
    function updateScore() {
        scoreElement.textContent = `Player 1: ${player1Score} | ${opponent ? opponent.name : "Opponent"}: ${opponentScore}`;
    }
    function updateCoins() {
        coinsElement.textContent = `${player1Coins || 0}`;
        coinsGameElement.textContent = `Coins: ${player1Coins || 0}`;
        bankerCoinsElement.textContent = bankerCoins || 0;
    }

    // Update user profile on homepage
    function updateUserProfile() {
        playerAvatar.src = players[0].nftAvatar || players[0].avatar || "avatars/default.png";
        playerAvatar.className = players[0].nftAvatar ? "nft-avatar" : "avatar";
        playerAvatarGame.src = players[0].nftAvatar || players[0].avatar || "avatars/default.png";
        playerAvatarGame.className = players[0].nftAvatar ? "nft-avatar" : "avatar";
        coinsElement.textContent = player1Coins || 0;
    }

    // Move to the next question
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            timeLeft = 10;
            requestAnimationFrame(() => showQuestion());
            startTimer();
        } else {
            endGame();
        }
    }

    // Start the timer with color change
    function startTimer() {
        if (timer) clearInterval(timer);
        timerBar.style.width = "100%";
        timerBar.style.backgroundColor = "#007bff";
        timerElement.textContent = `Time left: ${Math.ceil(timeLeft)}s`;
        let hasPlayedLowTime = false;

        timer = setInterval(() => {
            timeLeft -= 0.1;
            timerElement.textContent = `Time left: ${Math.ceil(timeLeft)}s`;
            timerBar.style.width = `${(timeLeft / 10) * 100}%`;
            if (timeLeft <= 5) {
                timerBar.style.backgroundColor = "#ff0000";
                if (!hasPlayedLowTime) {
                    lowTimeSound.play().catch(() => console.log("Low time sound failed"));
                    hasPlayedLowTime = true;
                }
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                checkAnswer("");
            }
        }, 100);
    }

    // End the game with banker handling winnings and challenges
    function endGame() {
        if (timer) clearInterval(timer);
        timer = null;
        const winner = player1Score > opponentScore ? "Player 1" : opponentScore > player1Score ? opponent.name : "Tie";
        const pot = betAmount * 2;
        const spread = Math.ceil(betAmount * 0.0015);
        const totalPot = pot - (spread * 2);

        if (winner === "Player 1") {
            player1Coins += totalPot;
            animateCoins(totalPot, bankerCoinsElement, coinsGameElement, players[0].coinSkin);
            players[0].wins++;
            players[0].streak++;
            opponent.losses++;
            opponent.streak = 0;
            players[0].coins = player1Coins;
            beatenAIs.add(opponent.name);
            // Update challenges
            dailyChallenge.progress = Math.min(dailyChallenge.progress + 1, 1);
            weeklyChallenge.progress = Math.min(weeklyChallenge.progress + 1, 5);
            localStorage.setItem("dailyChallenge", JSON.stringify(dailyChallenge));
            localStorage.setItem("weeklyChallenge", JSON.stringify(weeklyChallenge));
        } else if (winner === opponent.name) {
            opponent.coins += totalPot;
            animateCoins(totalPot, bankerCoinsElement, opponentInfo, opponent.coinSkin);
            opponent.wins++;
            opponent.streak++;
            players[0].losses++;
            players[0].streak = 0;
            players[0].coins = player1Coins;
        } else {
            player1Coins += betAmount;
            animateCoins(betAmount, bankerCoinsElement, coinsGameElement, players[0].coinSkin);
            opponent.coins += betAmount;
            animateCoins(betAmount, bankerCoinsElement, opponentInfo, opponent.coinSkin);
            players[0].coins = player1Coins;
            players[0].streak = 0;
            opponent.streak = 0;
        }

        // Check streak achievements
        if (players[0].streak === 5 && !achievements.find(a => a.id === "fiveStreak").achieved) {
            achievements.find(a => a.id === "fiveStreak").achieved = true;
            player1Coins += 200;
            players[0].coins = player1Coins;
            animateCoins(200, bankerCoinsElement, coinsGameElement);
            alert("Achievement Unlocked: 5-Win Streak (+200 Coins)");
        }
        if (players[0].streak === 10 && !achievements.find(a => a.id === "tenStreak").achieved) {
            achievements.find(a => a.id === "tenStreak").achieved = true;
            player1Coins += 500;
            players[0].coins = player1Coins;
            animateCoins(500, bankerCoinsElement, coinsGameElement);
            alert("Achievement Unlocked: 10-Win Streak (+500 Coins)");
        }

        scoreHistory.push({ player1Score, opponent: opponent.name, opponentScore, winner, bet: betAmount, date: new Date().toLocaleString() });
        localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
        updateScoreHistory();
        checkAchievements();
        setTimeout(saveState, 0);
        updateLevels();
        updateUserProfile();
        updateChallengeDisplay();
        updateTopStreaks();

        if (!isSuddenDeath && winner === "Tie") {
            alert("It's a tie! Starting sudden death...");
            startSuddenDeath();
            return;
        }

        alert(`${winner} wins!`);
        replayButton.style.display = "block";
        bgMusic.pause();
        checkDailyChallenge();
        checkWeeklyChallenge();
    }

    // Start sudden death mode
    function startSuddenDeath() {
        isSuddenDeath = true;
        player1Score = 0;
        opponentScore = 0;
        currentQuestionIndex = 0;
        selectedQuestions = getRandomQuestions(questions[selectedCategory][selectedDifficulty], 1);
        updateScore();
        nextSuddenDeathQuestion();
    }

    // Show next sudden death question
    function nextSuddenDeathQuestion() {
        selectedQuestions = getRandomQuestions(questions[selectedCategory][selectedDifficulty], 1);
        currentQuestionIndex = 0;
        timeLeft = 10;
        requestAnimationFrame(() => showQuestion());
        startTimer();
    }

    // Reset the game
    function resetGame() {
        if (timer) clearInterval(timer);
        timer = null;
        document.getElementById("game").style.display = "none";
        document.getElementById("categoryMenu").style.display = "block";
        bgMusic.pause();
        updateLevels();
        updateUserProfile();
    }

    // Play sound with error handling
    function playSound(soundId) {
        const sound = document.getElementById(soundId);
        if (sound) sound.play().catch(error => console.log("Audio playback failed:", error));
    }

    // Update score history
    function updateScoreHistory() {
        historyList.innerHTML = "";
        scoreHistory.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `${entry.date}: Player 1 (${entry.player1Score}) vs ${entry.opponent} (${entry.opponentScore}) - Bet: ${entry.bet} - Winner: ${entry.winner}`;
            historyList.appendChild(li);
        });
    }

    // Update levels and sort by Coins, show top streaks
    function updateLevels() {
        players.forEach(player => {
            player.level = Math.floor(player.wins / 5) + 1;
        });
        players.sort((a, b) => b.coins - a.coins);
        showLeaderboard();
        updateTopStreaks();
    }

    // Show leaderboard
    function showLeaderboard() {
        document.getElementById("game").style.display = "block";
        leaderboardBody.innerHTML = "";
        players.forEach(player => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><img src="${player.nftAvatar || player.avatar || 'avatars/default.png'}" class="${player.nftAvatar ? 'nft-avatar' : 'avatar'} small" alt="${player.name}">${player.name}</td>
                <td>${player.wins || 0}</td>
                <td>${player.losses || 0}</td>
                <td>${player.coins || 0}</td>
                <td class="streak">${(player.wins || 0)}/${(player.losses || 0)}, ${(player.streak || 0)}-streak</td>
            `;
            leaderboardBody.appendChild(tr);
        });
    }

    // Show top 5 streaks
    function updateTopStreaks() {
        const sortedPlayers = [...players].sort((a, b) => b.streak - a.streak).slice(0, 5);
        topStreaksList.innerHTML = "";
        sortedPlayers.forEach(player => {
            const li = document.createElement("li");
            li.textContent = `${player.name}: ${player.streak}-streak`;
            topStreaksList.appendChild(li);
        });
    }

    // Check and update achievements
    function checkAchievements() {
        if (!achievements.find(a => a.id === "firstWin").achieved && (players[0].wins || 0) >= 1) {
            achievements.find(a => a.id === "firstWin").achieved = true;
            player1Coins += 100;
            players[0].coins = player1Coins;
            animateCoins(100, bankerCoinsElement, coinsGameElement, players[0].coinSkin || "default");
            alert("Achievement Unlocked: First Win (+100 Coins)");
        }
        if (!achievements.find(a => a.id === "tenWins").achieved && (players[0].wins || 0) >= 10) {
            achievements.find(a => a.id === "tenWins").achieved = true;
            player1Coins += 500;
            players[0].coins = player1Coins;
            animateCoins(500, bankerCoinsElement, coinsGameElement, players[0].coinSkin || "default");
            alert("Achievement Unlocked: Quiz Master (+500 Coins)");
        }
        if (!achievements.find(a => a.id === "allAI").achieved && beatenAIs.size >= 15) {
            achievements.find(a => a.id === "allAI").achieved = true;
            player1Coins += 1000;
            players[0].coins = player1Coins;
            animateCoins(1000, bankerCoinsElement, coinsGameElement, players[0].coinSkin || "default");
            alert("Achievement Unlocked: AI Slayer (+1000 Coins)");
        }
        updateCoins();
        updateAchievements();
        localStorage.setItem("achievements", JSON.stringify(achievements));
    }

    // Update achievements display
    function updateAchievements() {
        achievementList.innerHTML = "";
        achievements.forEach(ach => {
            const li = document.createElement("li");
            li.textContent = `${ach.name}: ${ach.description} - ${ach.achieved ? "Achieved" : "Locked"}`;
            achievementList.appendChild(li);
        });
    }

    // Apply theme
    function applyTheme(theme) {
        document.body.className = "";
        if (theme === "dark") document.body.className = "dark-theme";
        else if (theme === "neon") document.body.className = "neon-theme";
    }

    // Banker transaction handler
    function bankerTransaction(amount, type, player = players[0]) {
        if (player === players[0]) {
            player1Coins = (player1Coins || 0) - amount;
            players[0].coins = player1Coins;
        } else {
            player.coins = (player.coins || 0) - amount;
        }
        if (type === "bet") {
            const spread = Math.ceil(amount * 0.0015);
            bankerCoins = (bankerCoins || 0) + amount + spread;
            if (player === players[0]) {
                player1Coins = (player1Coins || 0) - spread;
                players[0].coins = player1Coins;
            } else {
                player.coins = (player.coins || 0) - spread;
            }
        } else {
            bankerCoins = (bankerCoins || 0) + amount;
        }
        updateCoins();
        saveState();
        updateLevels();
    }

    // Animate Coins with skin support
    function animateCoins(amount, fromElement, toElement, skin = "default") {
        if (!fromElement || !toElement) {
            console.error("Animation elements not found");
            return;
        }
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
        const containerRect = document.querySelector('.container')?.getBoundingClientRect() || { left: 0, top: 0 };
        const coinCount = Math.max(Math.min(Math.ceil(amount / 10), 7), 3);

        for (let i = 0; i < coinCount; i++) {
            const coin = document.createElement("div");
            coin.className = "coin";
            if (skin === "neon") coin.style.background = "url('coin-neon.png') no-repeat center/contain";
            else if (skin === "dark") coin.style.background = "url('coin-dark.png') no-repeat center/contain";
            else coin.style.background = "url('coin.png') no-repeat center/contain";
            coin.style.width = "30px";
            coin.style.height = "30px";
            coin.style.borderRadius = "50%";
            coin.style.position = "absolute";
            coin.style.left = `${fromRect.left - containerRect.left + fromRect.width / 2}px`;
            coin.style.top = `${fromRect.top - containerRect.top + fromRect.height / 2}px`;
            coin.style.setProperty("--tx", `${toRect.left - fromRect.left + toRect.width / 2 - fromRect.width / 2}px`);
            coin.style.setProperty("--ty", `${toRect.top - fromRect.top + toRect.height / 2 - fromRect.height / 2}px`);
            coinAnimation.appendChild(coin);

            setTimeout(() => coin.remove(), 1000);
        }
    }

    // Save state to localStorage
    function saveState() {
        players[0].coins = player1Coins;
        if (opponent) opponent.coins = opponent.coins;
        localStorage.setItem("players", JSON.stringify(players));
        localStorage.setItem("bankerCoins", JSON.stringify(bankerCoins));
        localStorage.setItem("dailyChallenge", JSON.stringify(dailyChallenge));
        localStorage.setItem("weeklyChallenge", JSON.stringify(weeklyChallenge));
        localStorage.setItem("achievements", JSON.stringify(achievements));
        localStorage.setItem("lastChallengeCheck", new Date().toDateString());
    }

    // Initial setup
    replayButton?.addEventListener("click", resetGame);
    updateScoreHistory();
    updateAchievements();
    showCategoryMenu();
    updateCoins();
    playerAvatar.src = players[0].nftAvatar || players[0].avatar || "avatars/default.png";
    playerAvatar.className = players[0].nftAvatar ? "nft-avatar" : "avatar";
    playerAvatarGame.src = players[0].nftAvatar || players[0].avatar || "avatars/default.png";
    playerAvatarGame.className = players[0].nftAvatar ? "nft-avatar" : "avatar";
    dailyChallenge = JSON.parse(localStorage.getItem("dailyChallenge")) || dailyChallenge;
    weeklyChallenge = JSON.parse(localStorage.getItem("weeklyChallenge")) || weeklyChallenge;
    achievements = JSON.parse(localStorage.getItem("achievements")) || achievements;
});