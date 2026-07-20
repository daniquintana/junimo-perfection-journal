const data = window.STARDEW_WIKI_DATA;
const APP_VERSION = "1.5.1";
const RELEASE_NAME = "";
const SAVE_SCHEMA_VERSION = 2;
const STORAGE_KEY = "junimo-perfection-journal-save-v2";
const OWNER_STATS_STORAGE_KEY = "junimo-perfection-journal-owner-stats-v1";
const LEGACY_STORAGE_KEYS = ["stardew-perfection-tracker-v1"];
const RELEASES_API_URL =
  "https://api.github.com/repos/daniquintana/junimo-perfection-journal/releases";
const OWNER_SECRET_TAP_TARGET = 5;
const OWNER_SECRET_TAP_WINDOW_MS = 2200;
const MUSEUM_DONATION_TARGET = 95;
const MONSTER_GOAL_IMAGE_FILES = {
  "slime-any-color-excludes-big-slimes-and-slimes-in-the-slime-hutch": "Slime.png",
  "void-spirits-shadow-shaman-shadow-shaman-dangerous-shadow-brute-shadow-brute-dangerous-shadow-sniper": "Shadow_Brute.png",
  "bats-bat-bat-dangerous-frost-bat-frost-bat-dangerous-lava-bat-iridium-bat": "Bat.png",
  "skeletons-skeleton-skeleton-dangerous-skeleton-mage": "Skeleton.png",
  "cave-insects-bug-bug-dangerous-cave-fly-cave-fly-dangerous-grub-grub-dangerous-mutant-fly-mutant-grub-armored-bug-armored-bug-dangerous": "Bug.png",
  "duggies-duggy-duggy-dangerous-magma-duggy": "Duggy.png",
  "dust-sprites-dust-sprite-dust-sprite-dangerous": "Dust_Sprite.png",
  "rock-crabs-rock-crab-rock-crab-dangerous-lava-crab-lava-crab-dangerous-iridium-crab": "Rock_Crab.png",
  "mummies-mummy-mummy-dangerous": "Mummy.png",
  "pepper-rex": "Pepper_Rex.png",
  "serpents-serpent-royal-serpent": "Serpent.png",
  "magma-sprites-magma-sprite-magma-sparker": "Magma_Sprite.png",
};
const MUSEUM_ARTIFACT_NAMES = [
  "Dwarf Scroll I",
  "Dwarf Scroll II",
  "Dwarf Scroll III",
  "Dwarf Scroll IV",
  "Chipped Amphora",
  "Arrowhead",
  "Ancient Doll",
  "Elvish Jewelry",
  "Chewing Stick",
  "Ornamental Fan",
  "Dinosaur Egg",
  "Rare Disc",
  "Ancient Sword",
  "Rusty Spoon",
  "Rusty Spur",
  "Rusty Cog",
  "Chicken Statue",
  "Ancient Seed",
  "Prehistoric Tool",
  "Dried Starfish",
  "Anchor",
  "Glass Shards",
  "Bone Flute",
  "Prehistoric Handaxe",
  "Dwarvish Helm",
  "Dwarf Gadget",
  "Ancient Drum",
  "Golden Mask",
  "Golden Relic",
  "Strange Doll (Green)",
  "Strange Doll (Yellow)",
  "Prehistoric Scapula",
  "Prehistoric Tibia",
  "Prehistoric Skull",
  "Skeletal Hand",
  "Prehistoric Rib",
  "Prehistoric Vertebra",
  "Skeletal Tail",
  "Nautilus Fossil",
  "Amphibian Fossil",
  "Palm Fossil",
  "Trilobite",
];
const MUSEUM_MINERAL_NAMES = [
  "Emerald",
  "Aquamarine",
  "Ruby",
  "Amethyst",
  "Topaz",
  "Jade",
  "Diamond",
  "Prismatic Shard",
  "Quartz",
  "Fire Quartz",
  "Frozen Tear",
  "Earth Crystal",
  "Alamite",
  "Bixite",
  "Baryte",
  "Aerinite",
  "Calcite",
  "Dolomite",
  "Esperite",
  "Fluorapatite",
  "Geminite",
  "Helvite",
  "Jamborite",
  "Jagoite",
  "Kyanite",
  "Lunarite",
  "Malachite",
  "Neptunite",
  "Lemon Stone",
  "Nekoite",
  "Orpiment",
  "Petrified Slime",
  "Thunder Egg",
  "Pyrite",
  "Ocean Stone",
  "Ghost Crystal",
  "Tigerseye",
  "Jasper",
  "Opal",
  "Fire Opal",
  "Celestine",
  "Marble",
  "Sandstone",
  "Granite",
  "Basalt",
  "Limestone",
  "Soapstone",
  "Hematite",
  "Mudstone",
  "Obsidian",
  "Slate",
  "Fairy Stone",
  "Star Shards",
];
const MUSEUM_IMAGE_FILE_OVERRIDES = {
  "Strange Doll (Green)": "Strange_Doll_(green).png",
  "Strange Doll (Yellow)": "Strange_Doll_(yellow).png",
};
const MUSEUM_TOTAL_DONATION_REWARD_MILESTONES = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95];
const MUSEUM_MINERAL_REWARD_MILESTONES = [11, 21, 31, 41, 50];
const MUSEUM_ARTIFACT_REWARD_MILESTONES = [15, 20];
const MUSEUM_SPECIAL_REWARD_GROUPS = [
  ["Ancient Drum"],
  ["Ancient Seed"],
  ["Bone Flute"],
  ["Chicken Statue"],
  ["Dwarf Scroll I", "Dwarf Scroll II", "Dwarf Scroll III", "Dwarf Scroll IV"],
  ["Rare Disc", "Dwarf Gadget"],
  ["Prehistoric Skull", "Skeletal Hand", "Prehistoric Scapula"],
  ["Prehistoric Rib", "Prehistoric Vertebra"],
  ["Prehistoric Tibia", "Skeletal Tail"],
];
const SAVE_STATE_KEYS = [
  "fish",
  "cooking",
  "crafting",
  "hoard",
  "museum",
  "shipping",
  "villagers",
  "monsterGoals",
  "skills",
  "stardrops",
  "buildings",
  "buildingStock",
  "goldenWalnuts",
];
const GOLDEN_WALNUT_ITEM = {
  name: "Golden Walnut",
  imageUrl: "https://stardewvalleywiki.com/mediawiki/images/5/54/Golden_Walnut.png",
};
const HOARD_CATEGORY_ORDER = ["Shipping", "Cooking", "Crafting", "Obelisk"];
const HOARD_IMAGE_FILE_OVERRIDES = {
  "Aged Roe (any)": "Aged_Roe.png",
  "Acorn": "Acorn.png",
  "Ancient Seed": "Ancient_Seed.png",
  "Any Fish": "Sardine.png",
  "Aquamarine": "Aquamarine.png",
  "Diamond": "Diamond.png",
  "Dried Fruit (any)": "Dried_Fruit.png",
  "Dried Mushrooms (any)": "Dried_Mushrooms.png",
  "Dwarf Gadget": "Dwarf_Gadget.png",
  "Egg": "Egg.png",
  "Egg (white)": "Egg.png",
  "Egg (brown)": "Brown_Egg.png",
  "Fire Quartz": "Fire_Quartz.png",
  "Frozen Tear": "Frozen_Tear.png",
  "Honey": "Honey.png",
  "Honey (any)": "Honey.png",
  "Jelly": "Jelly.png",
  "Jelly (any)": "Jelly.png",
  "Juice": "Juice.png",
  "Juice (any)": "Juice.png",
  "Jazz Seeds": "Jazz_Seeds.png",
  "Large Egg": "Large_Egg.png",
  "Large Egg (white)": "Large_Egg.png",
  "Large Egg (brown)": "Large_Brown_Egg.png",
  "Mahogany Seed": "Mahogany_Seed.png",
  "Maple Seed": "Maple_Seed.png",
  "Marble": "Marble.png",
  "Mixed Seeds": "Mixed_Seeds.png",
  "Pine Cone": "Pine_Cone.png",
  "Pickles (any)": "Pickles.png",
  "Roe (any)": "Roe.png",
  "Smoked Fish (any)": "Smoked_Fish.png",
  "Wild Seeds (Any)": "Spring_Seeds.png",
  "With Trapper profession: Wood": "Wood.png",
  "Wine": "Wine.png",
  "Wine (any)": "Wine.png",
};

const flatShippingItems = data.other.shippingPages.flatMap((page) => page.items);
const cookingIngredientCatalogMap = Object.fromEntries(
  (data.cooking.ingredientCatalog || []).map((entry) => [entry.item, entry])
);
const CRAFTING_GAME_ORDER_NAMES = [
  "Wood Fence",
  "Stone Fence",
  "Iron Fence",
  "Hardwood Fence",
  "Grass Starter",
  "Blue Grass Starter",
  "Gate",
  "Chest",
  "Big Chest",
  "Stone Chest",
  "Big Stone Chest",
  "Torch",
  "Scarecrow",
  "Deluxe Scarecrow",
  "Bee House",
  "Keg",
  "Cask",
  "Dehydrator",
  "Furnace",
  "Heavy Furnace",
  "Anvil",
  "Mini-Forge",
  "Garden Pot",
  "Wood Sign",
  "Stone Sign",
  "Dark Sign",
  "Text Sign",
  "Cheese Press",
  "Mayonnaise Machine",
  "Seed Maker",
  "Loom",
  "Oil Maker",
  "Recycling Machine",
  "Bait Maker",
  "Fish Smoker",
  "Preserves Jar",
  "Charcoal Kiln",
  "Tapper",
  "Mushroom Log",
  "Lightning Rod",
  "Slime Incubator",
  "Slime Egg-Press",
  "Crystalarium",
  "Mini-Jukebox",
  "Sprinkler",
  "Quality Sprinkler",
  "Iridium Sprinkler",
  "Flute Block",
  "Drum Block",
  "Basic Fertilizer",
  "Tree Fertilizer",
  "Staircase",
  "Mystic Tree Seed",
  "Quality Fertilizer",
  "Basic Retaining Soil",
  "Quality Retaining Soil",
  "Speed-Gro",
  "Deluxe Speed-Gro",
  "Hyper Speed-Gro",
  "Deluxe Fertilizer",
  "Deluxe Retaining Soil",
  "Cherry Bomb",
  "Bomb",
  "Mega Bomb",
  "Explosive Ammo",
  "Ancient Seeds",
  "Spring Seeds",
  "Summer Seeds",
  "Fall Seeds",
  "Winter Seeds",
  "Fiber Seeds",
  "Tea Sapling",
  "Warp Totem: Farm",
  "Warp Totem: Mountains",
  "Warp Totem: Beach",
  "Warp Totem: Desert",
  "Warp Totem: Island",
  "Rain Totem",
  "Treasure Totem",
  "Cookout Kit",
  "Field Snack",
  "Statue Of Blessings",
  "Statue Of The Dwarf King",
  "Jack-O-Lantern",
  "Wood Floor",
  "Straw Floor",
  "Weathered Floor",
  "Rustic Plank Floor",
  "Crystal Floor",
  "Stone Floor",
  "Stone Walkway Floor",
  "Brick Floor",
  "Wood Path",
  "Gravel Path",
  "Cobblestone Path",
  "Stepping Stone Path",
  "Crystal Path",
  "Bait",
  "Deluxe Bait",
  "Wild Bait",
  "Magic Bait",
  "Spinner",
  "Dressed Spinner",
  "Quality Bobber",
  "Trap Bobber",
  "Sonar Bobber",
  "Cork Bobber",
  "Treasure Hunter",
  "Barbed Hook",
  "Oil of Garlic",
  "Life Elixir",
  "Crab Pot",
  "Iridium Band",
  "Ring of Yoba",
  "Glowstone Ring",
  "Sturdy Ring",
  "Tub o' Flowers",
  "Wooden Brazier",
  "Wicked Statue",
  "Stone Brazier",
  "Gold Brazier",
  "Campfire",
  "Carved Brazier",
  "Stump Brazier",
  "Skull Brazier",
  "Barrel Brazier",
  "Marble Brazier",
  "Wood Lamp-post",
  "Iron Lamp-post",
  "Fairy Dust",
  "Bug Steak",
  "Magnet",
  "Monster Musk",
  "Mini-Obelisk",
  "Farm Computer",
  "Ostrich Incubator",
  "Geode Crusher",
  "Solar Panel",
  "Bone Mill",
  "Thorns Ring",
  "Warrior Ring",
  "Heavy Tapper",
  "Hopper",
  "Worm Bin",
  "Deluxe Worm Bin",
];
const CRAFTING_GAME_ORDER_INDEX = new Map(
  CRAFTING_GAME_ORDER_NAMES.map((name, index) => [name, index])
);
const cookingIngredientNames = uniqueIngredientNames(data.cooking.recipes);
const craftingIngredientNames = uniqueIngredientNames(data.crafting.recipes);
const buildingMaterialNames = uniqueBuildingMaterialNames(data.other.buildings);
const craftingRecipesInGameOrder = orderCraftingRecipes(data.crafting.recipes);
const hoardItemCatalogMap = buildHoardItemCatalog();
const hoardItemNames = buildHoardItemNames();
const MUSEUM_ITEMS = buildMuseumItems();
const MUSEUM_ARTIFACTS = MUSEUM_ITEMS.filter((item) => item.type === "artifact");
const MUSEUM_MINERALS = MUSEUM_ITEMS.filter((item) => item.type === "mineral");
const MUSEUM_ITEMS_BY_NAME = new Map(MUSEUM_ITEMS.map((item) => [item.name, item]));
const MUSEUM_REWARD_TARGET =
  MUSEUM_TOTAL_DONATION_REWARD_MILESTONES.length +
  MUSEUM_MINERAL_REWARD_MILESTONES.length +
  MUSEUM_ARTIFACT_REWARD_MILESTONES.length +
  MUSEUM_SPECIAL_REWARD_GROUPS.length;

const initialSave = loadSaved();
let state = buildState(initialSave.state);
syncMuseumRewardState();
let ownerStats = loadOwnerStats();
const ui = {
  activeTab: "general",
  lastStandardTab: "general",
  fishSearch: "",
  fishSpot: "all",
  fishSeason: "all",
  fishWeather: "all",
  fishStatus: "remaining",
  cookingSearch: "",
  cookingStatus: "remaining",
  cookingIngredientCategory: "all",
  cookingView: "recipes",
  craftingSearch: "",
  craftingStatus: "remaining",
  hoardSearch: "",
  hoardCategory: "all",
  hoardStatus: "remaining",
  shippingSearch: "",
  shippingStatus: "all",
};
let scheduledRenderHandle = 0;
let lastRenderedPerfect = getProgressSnapshot().overallPercent >= 100;
const ownerStatsUi = {
  tapCount: 0,
  tapResetHandle: 0,
  downloadsLoading: false,
  downloadsLoaded: false,
  downloadsError: "",
  downloadSummary: null,
};

const FISH_SPOT_ORDER = [
  "Legendary",
  "Beach",
  "River",
  "Mountain Lake",
  "Cindersap Forest Pond",
  "Secret Woods",
  "Mines",
  "Sewers",
  "Desert",
  "Mutant Bug Lair",
  "Witch's Swamp",
  "Night Market",
  "Crab Pot",
  "Ginger Island",
];

document.addEventListener("DOMContentLoaded", () => {
  recordOwnerActivity("pageViews");
  populateStaticOptions();
  bindEvents();
  syncUiFiltersFromControls();
  renderAllDynamic();
  updateVisibleTab();
  renderOwnerStats();
});

window.addEventListener("pageshow", () => {
  syncUiFiltersFromControls();
  renderAllDynamic();
  updateVisibleTab();
});

function populateStaticOptions() {
  const fishSpot = document.getElementById("fish-spot");
  const fishSpots = FISH_SPOT_ORDER.filter((spot) =>
    data.fish.some((fish) => getFishSpots(fish).includes(spot))
  );
  fishSpot.insertAdjacentHTML(
    "beforeend",
    fishSpots
      .map((spot) => `<option value="${escapeHtml(spot)}">${escapeHtml(spot)}</option>`)
      .join("")
  );

  const ingredientCategorySelect = document.getElementById("cooking-ingredient-category");
  const ingredientCategories = [
    ...new Set((data.cooking.ingredientCatalog || []).map((entry) => entry.category)),
  ].sort();
  ingredientCategorySelect.insertAdjacentHTML(
    "beforeend",
    ingredientCategories
      .map(
        (category) =>
          `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`
      )
      .join("")
  );

  document.getElementById("fish-spot").value = ui.fishSpot;
  document.getElementById("fish-season").value = ui.fishSeason;
  document.getElementById("fish-weather").value = ui.fishWeather;
  document.getElementById("fish-status").value = ui.fishStatus;
  document.getElementById("cooking-status").value = ui.cookingStatus;
  document.getElementById("cooking-ingredient-category").value = ui.cookingIngredientCategory;
  document.getElementById("crafting-status").value = ui.craftingStatus;
  document.getElementById("shipping-status").value = ui.shippingStatus;

  const versionPill = document.getElementById("version-pill");
  if (versionPill) {
    versionPill.textContent = RELEASE_NAME
      ? `Version ${APP_VERSION} • ${RELEASE_NAME}`
      : `Version ${APP_VERSION}`;
    versionPill.title = `Save format v${SAVE_SCHEMA_VERSION}`;
  }
}

function syncUiFiltersFromControls() {
  const fishSearch = document.getElementById("fish-search");
  const fishSpot = document.getElementById("fish-spot");
  const fishSeason = document.getElementById("fish-season");
  const fishWeather = document.getElementById("fish-weather");
  const fishStatus = document.getElementById("fish-status");
  const cookingSearch = document.getElementById("cooking-search");
  const cookingStatus = document.getElementById("cooking-status");
  const cookingIngredientCategory = document.getElementById("cooking-ingredient-category");
  const craftingSearch = document.getElementById("crafting-search");
  const craftingStatus = document.getElementById("crafting-status");
  const hoardSearch = document.getElementById("hoard-search");
  const hoardCategory = document.getElementById("hoard-category");
  const hoardStatus = document.getElementById("hoard-status");
  const shippingSearch = document.getElementById("shipping-search");
  const shippingStatus = document.getElementById("shipping-status");

  if (fishSearch) ui.fishSearch = fishSearch.value;
  if (fishSpot) ui.fishSpot = fishSpot.value;
  if (fishSeason) ui.fishSeason = fishSeason.value;
  if (fishWeather) ui.fishWeather = fishWeather.value;
  if (fishStatus) ui.fishStatus = fishStatus.value;
  if (cookingSearch) ui.cookingSearch = cookingSearch.value;
  if (cookingStatus) ui.cookingStatus = cookingStatus.value;
  if (cookingIngredientCategory) {
    ui.cookingIngredientCategory = cookingIngredientCategory.value;
  }
  if (craftingSearch) ui.craftingSearch = craftingSearch.value;
  if (craftingStatus) ui.craftingStatus = craftingStatus.value;
  if (hoardSearch) ui.hoardSearch = hoardSearch.value;
  if (hoardCategory) ui.hoardCategory = hoardCategory.value;
  if (hoardStatus) ui.hoardStatus = hoardStatus.value;
  if (shippingSearch) ui.shippingSearch = shippingSearch.value;
  if (shippingStatus) ui.shippingStatus = shippingStatus.value;
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.tab === "hoard") {
        if (ui.activeTab === "hoard") {
          setActiveTab(ui.lastStandardTab || "general");
        } else {
          setActiveTab("hoard");
        }
        return;
      }
      setActiveTab(button.dataset.tab);
    });
  });

  const fishSearchInput = document.getElementById("fish-search");
  const handleFishSearch = (event) => {
    ui.fishSearch = event.target.value;
    renderFish();
  };
  ["input", "change", "search"].forEach((eventName) => {
    fishSearchInput.addEventListener(eventName, handleFishSearch);
  });
  document.getElementById("fish-spot").addEventListener("change", (event) => {
    ui.fishSpot = event.target.value;
    renderFish();
  });
  document.getElementById("fish-season").addEventListener("change", (event) => {
    ui.fishSeason = event.target.value;
    renderFish();
  });
  document.getElementById("fish-weather").addEventListener("change", (event) => {
    ui.fishWeather = event.target.value;
    renderFish();
  });
  document.getElementById("fish-status").addEventListener("change", (event) => {
    ui.fishStatus = event.target.value;
    renderFish();
  });

  const cookingSearchInput = document.getElementById("cooking-search");
  const handleCookingSearch = (event) => {
    ui.cookingSearch = event.target.value;
    renderCooking();
  };
  ["input", "change", "search"].forEach((eventName) => {
    cookingSearchInput.addEventListener(eventName, handleCookingSearch);
  });
  document.getElementById("cooking-status").addEventListener("change", (event) => {
    ui.cookingStatus = event.target.value;
    renderCooking();
  });
  document.getElementById("cooking-ingredient-category").addEventListener("change", (event) => {
    ui.cookingIngredientCategory = event.target.value;
    renderCooking();
  });
  document.querySelectorAll("[data-action='cooking-view']").forEach((button) => {
    button.addEventListener("click", () => {
      ui.cookingView = button.dataset.view;
      renderCooking();
    });
  });

  const craftingSearchInput = document.getElementById("crafting-search");
  const handleCraftingSearch = (event) => {
    ui.craftingSearch = event.target.value;
    renderCrafting();
  };
  ["input", "change", "search"].forEach((eventName) => {
    craftingSearchInput.addEventListener(eventName, handleCraftingSearch);
  });
  document.getElementById("crafting-status").addEventListener("change", (event) => {
    ui.craftingStatus = event.target.value;
    renderCrafting();
  });

  const hoardSearchInput = document.getElementById("hoard-search");
  const handleHoardSearch = (event) => {
    ui.hoardSearch = event.target.value;
    renderHoard();
  };
  ["input", "change", "search"].forEach((eventName) => {
    hoardSearchInput.addEventListener(eventName, handleHoardSearch);
  });
  document.getElementById("hoard-category").addEventListener("change", (event) => {
    ui.hoardCategory = event.target.value;
    renderHoard();
  });
  document.getElementById("hoard-status").addEventListener("change", (event) => {
    ui.hoardStatus = event.target.value;
    renderHoard();
  });

  const shippingSearchInput = document.getElementById("shipping-search");
  const handleShippingSearch = (event) => {
    ui.shippingSearch = event.target.value;
    renderShipping();
  };
  ["input", "change", "search"].forEach((eventName) => {
    shippingSearchInput.addEventListener(eventName, handleShippingSearch);
  });
  document.getElementById("shipping-status").addEventListener("change", (event) => {
    ui.shippingStatus = event.target.value;
    renderShipping();
  });

  document.body.addEventListener("input", handleStateChange);
  document.body.addEventListener("change", handleStateChange);
  document.body.addEventListener("focusin", handleZeroNumberFieldActivation);
  document.body.addEventListener("click", handleZeroNumberFieldActivation);
  document.body.addEventListener("click", handleStepperButtonClick);

  document.getElementById("export-data").addEventListener("click", exportSave);
  document.getElementById("import-data").addEventListener("click", () => {
    document.getElementById("import-file").click();
  });
  document.getElementById("import-file").addEventListener("change", importSave);
  document.getElementById("reset-data").addEventListener("click", resetSave);
  document.getElementById("celebration-close").addEventListener("click", hidePerfectionCelebration);
  document.getElementById("celebration-okay").addEventListener("click", hidePerfectionCelebration);
  document.getElementById("perfection-celebration").addEventListener("click", (event) => {
    if (event.target.id === "perfection-celebration") {
      hidePerfectionCelebration();
    }
  });
  document.getElementById("owner-stats-close").addEventListener("click", hideOwnerStats);
  document.getElementById("owner-stats-overlay").addEventListener("click", (event) => {
    if (event.target.id === "owner-stats-overlay") {
      hideOwnerStats();
    }
  });
  document.getElementById("hero-emblem-trigger").addEventListener("click", handleOwnerSecretTap);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideOwnerStats();
      hidePerfectionCelebration();
    }
  });
}

function handleStateChange(event) {
  const target = event.target;

  if (target.matches("[data-action='fish-toggle']")) {
    state.fish[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='cooking-toggle']")) {
    state.cooking.recipes[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='crafting-toggle']")) {
    state.crafting.recipes[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='shipping-toggle']")) {
    state.shipping[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='stardrop-toggle']")) {
    state.stardrops[target.dataset.id] = target.checked;
    if (target.dataset.id === "museum-donation") {
      setAllMuseumItems(target.checked);
    }
  } else if (target.matches("[data-action='building-toggle']")) {
    state.buildings[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='villager-hearts']")) {
    state.villagers[target.dataset.id] = clampNumber(target.value, 0, 14);
  } else if (target.matches("[data-action='villager-complete']")) {
    const villager = data.other.villagers.find((entry) => entry.id === target.dataset.id);
    if (villager) {
      state.villagers[target.dataset.id] = target.checked
        ? villager.targetHearts
        : Math.max(villager.targetHearts - 1, 0);
    }
  } else if (target.matches("[data-action='monster-count']")) {
    state.monsterGoals[target.dataset.id] = clampNumber(target.value, 0, 999999);
  } else if (target.matches("[data-action='monster-complete']")) {
    const goal = data.other.monsterGoals.find((entry) => entry.id === target.dataset.id);
    if (goal) {
      state.monsterGoals[target.dataset.id] = target.checked
        ? goal.target
        : Math.max(goal.target - 1, 0);
    }
  } else if (target.matches("[data-action='skill-level']")) {
    state.skills[target.dataset.id] = clampNumber(target.value, 0, 10);
  } else if (target.matches("[data-action='skill-complete']")) {
    const skill = data.other.skills.find((entry) => entry.id === target.dataset.id);
    if (skill) {
      state.skills[target.dataset.id] = target.checked
        ? skill.targetLevel
        : Math.max(skill.targetLevel - 1, 0);
    }
  } else if (target.matches("[data-action='cooking-owned']")) {
    state.cooking.pantry[target.dataset.item] = clampNumber(target.value, 0, 999999);
  } else if (target.matches("[data-action='crafting-owned']")) {
    state.crafting.stock[target.dataset.item] = clampNumber(target.value, 0, 999999);
  } else if (target.matches("[data-action='hoard-owned']")) {
    state.hoard[target.dataset.item] = clampNumber(target.value, 0, 999999);
  } else if (target.matches("[data-action='hoard-complete']")) {
    const needed = clampNumber(target.dataset.need, 0, 999999);
    const current = clampNumber(state.hoard[target.dataset.item], 0, 999999);
    state.hoard[target.dataset.item] = target.checked
      ? needed
      : Math.max(Math.min(current, needed) - 1, 0);
  } else if (target.matches("[data-action='museum-item-toggle']")) {
    state.museum.items[target.dataset.id] = target.checked;
  } else if (target.matches("[data-action='building-owned']")) {
    state.buildingStock[target.dataset.item] = clampNumber(target.value, 0, 999999999);
  } else if (target.matches("[data-action='golden-walnuts']")) {
    state.goldenWalnuts = clampNumber(target.value, 0, data.other.goldenWalnutsTarget);
  } else if (target.matches("[data-action='golden-walnuts-complete']")) {
    state.goldenWalnuts = target.checked ? data.other.goldenWalnutsTarget : 0;
  } else {
    return;
  }

  syncMuseumRewardState();
  const deferRenderUntilCommit =
    event.type === "input" &&
    target.matches(
      "[data-action='villager-hearts'], [data-action='monster-count'], [data-action='skill-level'], [data-action='golden-walnuts']"
    );

  saveState();
  if (deferRenderUntilCommit) {
    return;
  }
  scheduleRenderAllDynamic();
}

function handleZeroNumberFieldActivation(event) {
  selectZeroNumberField(event.target);
}

function handleStepperButtonClick(event) {
  const button = event.target.closest("[data-stepper-direction]");
  if (!button) {
    return;
  }

  const wrapper = button.closest(".number-stepper");
  const input = wrapper?.querySelector('input[type="number"]');
  if (!input) {
    return;
  }

  const direction = Number.parseInt(button.dataset.stepperDirection, 10);
  const stepValue = Number.parseFloat(input.step);
  const minimum = Number.parseFloat(input.min);
  const maximum = Number.parseFloat(input.max);
  const currentValue = Number.parseFloat(input.value);
  const step = Number.isFinite(stepValue) && stepValue > 0 ? stepValue : 1;
  const current = Number.isFinite(currentValue) ? currentValue : 0;

  let next = current + direction * step;
  if (Number.isFinite(minimum)) {
    next = Math.max(minimum, next);
  }
  if (Number.isFinite(maximum)) {
    next = Math.min(maximum, next);
  }
  if (step >= 1) {
    next = Math.round(next);
  }
  if (next === current) {
    input.focus();
    selectZeroNumberField(input);
    return;
  }

  input.value = String(next);
  input.dispatchEvent(new Event("change", { bubbles: true }));
  input.focus({ preventScroll: true });
  selectZeroNumberField(input);
}

function selectZeroNumberField(target) {
  if (!target?.matches?.('input[type="number"]')) {
    return;
  }
  if (target.value !== "0") {
    return;
  }

  const selectContents = () => {
    if (document.activeElement !== target || target.value !== "0") {
      return;
    }
    target.select();
    if (typeof target.setSelectionRange === "function") {
      target.setSelectionRange(0, target.value.length);
    }
  };

  if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(selectContents);
  } else {
    setTimeout(selectContents, 0);
  }
}

function renderAllDynamic() {
  syncMuseumRewardState();
  const progress = renderGeneral();
  renderFish();
  renderCooking();
  renderCrafting();
  renderHoard();
  renderMuseum();
  renderShipping();
  renderOther();
  syncPerfectionCelebration(progress.overallPercent >= 100);
}

function renderActiveTab() {
  if (ui.activeTab === "fish") {
    renderFish();
  } else if (ui.activeTab === "cooking") {
    renderCooking();
  } else if (ui.activeTab === "crafting") {
    renderCrafting();
  } else if (ui.activeTab === "hoard") {
    renderHoard();
  } else if (ui.activeTab === "museum") {
    renderMuseum();
  } else if (ui.activeTab === "shipping") {
    renderShipping();
  } else if (ui.activeTab === "other") {
    renderOther();
  } else {
    renderGeneral();
  }
}

function setActiveTab(tabName) {
  if (tabName !== "hoard") {
    ui.lastStandardTab = tabName;
  }
  ui.activeTab = tabName;
  reconcileTabFilterForVisibility(ui.activeTab);
  updateVisibleTab();
  renderActiveTab();
}

function scheduleRenderAllDynamic() {
  if (scheduledRenderHandle) {
    return;
  }

  const scheduler =
    typeof window !== "undefined" && typeof window.requestAnimationFrame === "function"
      ? window.requestAnimationFrame.bind(window)
      : (callback) => setTimeout(callback, 0);

  scheduledRenderHandle = scheduler(() => {
    scheduledRenderHandle = 0;
    renderAllDynamic();
  });
}

function renderGeneral() {
  const progress = getProgressSnapshot();
  const categoryProgressById = {
    "produce-forage-shipped": progress.shipping.done,
    "obelisks-on-farm": progress.obelisks.done,
    "golden-clock-on-farm": progress.goldClock.done,
    "monster-slayer-hero": progress.monsters.done,
    "great-friends": progress.friends.done,
    "farmer-level": progress.skills.done,
    "found-all-stardrops": progress.stardrops.done,
    "cooking-recipes-made": progress.cooking.done,
    "crafting-recipes-made": progress.crafting.done,
    "fish-caught": progress.fish.done,
    "golden-walnuts-found": progress.walnuts.done,
  };
  const officialCategories = data.perfectionCategories.map((category) => {
    const current = categoryProgressById[category.id] ?? 0;
    const left = Math.max(category.totalRequired - current, 0);
    return {
      ...category,
      current,
      left,
      ratio: category.totalRequired ? current / category.totalRequired : 0,
    };
  });
  const totalTasksTracked = officialCategories.reduce(
    (sum, category) => sum + category.totalRequired,
    0
  );
  const totalTasksDone = officialCategories.reduce((sum, category) => sum + category.current, 0);

  document.getElementById("general-top").innerHTML = `
    <section class="general-overview">
      <div class="general-feature-row">
        <article class="summary-card general-primary-card general-primary-card-feature">
          <p>✦ Perfection ✦</p>
          <strong>${progress.overallPercent.toFixed(1)}%</strong>
          <div class="general-primary-progress-row">
            ${progressBar(progress.overallPercent / 100)}
            <span class="general-primary-progress-count">${formatNumber(totalTasksDone)}/${formatNumber(totalTasksTracked)} complete</span>
          </div>
        </article>
      </div>
      <div class="category-grid general-category-grid">
        ${officialCategories
          .map((category) =>
            renderGeneralCategoryCard(
              category.name,
              `${formatNumber(category.current)}/${formatNumber(category.totalRequired)}`,
              ratioToPercent(category.ratio)
            )
          )
          .join("")}
      </div>
    </section>
  `;

  document.getElementById("general-left-board").innerHTML = "";

  document.getElementById("general-footer").innerHTML = `
    <p class="subtle">Based on Stardew Valley Wiki data.</p>
    <div class="source-links">
      ${data.meta.wikiSourcePages
        .map(
          (page) =>
            `<a href="${page.url}" target="_blank" rel="noreferrer">${escapeHtml(page.label)}</a>`
        )
      .join("")}
    </div>
  `;

  return progress;
}

function syncPerfectionCelebration(isPerfect) {
  if (isPerfect && !lastRenderedPerfect) {
    showPerfectionCelebration();
  } else if (!isPerfect) {
    hidePerfectionCelebration();
  }
  lastRenderedPerfect = isPerfect;
}

function showPerfectionCelebration() {
  const overlay = document.getElementById("perfection-celebration");
  if (!overlay) {
    return;
  }
  overlay.hidden = false;
}

function hidePerfectionCelebration() {
  const overlay = document.getElementById("perfection-celebration");
  if (!overlay) {
    return;
  }
  overlay.hidden = true;
}

function setPerfectionCelebrationBaseline() {
  lastRenderedPerfect = getProgressSnapshot().overallPercent >= 100;
  hidePerfectionCelebration();
}

function handleOwnerSecretTap() {
  ownerStatsUi.tapCount += 1;
  if (ownerStatsUi.tapResetHandle) {
    window.clearTimeout(ownerStatsUi.tapResetHandle);
  }
  if (ownerStatsUi.tapCount >= OWNER_SECRET_TAP_TARGET) {
    ownerStatsUi.tapCount = 0;
    showOwnerStats();
    return;
  }
  ownerStatsUi.tapResetHandle = window.setTimeout(() => {
    ownerStatsUi.tapCount = 0;
    ownerStatsUi.tapResetHandle = 0;
  }, OWNER_SECRET_TAP_WINDOW_MS);
}

function showOwnerStats() {
  const overlay = document.getElementById("owner-stats-overlay");
  if (!overlay) {
    return;
  }
  recordOwnerActivity("secretOpens");
  overlay.hidden = false;
  renderOwnerStats();
  void loadReleaseDownloadStats();
}

function hideOwnerStats() {
  const overlay = document.getElementById("owner-stats-overlay");
  if (!overlay) {
    return;
  }
  overlay.hidden = true;
}

function renderOwnerStats() {
  const container = document.getElementById("owner-stats-content");
  if (!container) {
    return;
  }

  const downloadsMarkup = renderOwnerDownloadsCard();
  const browserMarkup = `
    <section class="owner-stat-card">
      <h3>This browser</h3>
      <p class="owner-stat-big">${formatNumber(ownerStats.pageViews || 0)}</p>
      <p class="owner-stat-note">Page opens on this browser/device only.</p>
      <ul class="owner-stat-list">
        <li>Exports: ${formatNumber(ownerStats.exports || 0)}</li>
        <li>Imports: ${formatNumber(ownerStats.imports || 0)}</li>
        <li>Resets: ${formatNumber(ownerStats.resets || 0)}</li>
        <li>Secret opens: ${formatNumber(ownerStats.secretOpens || 0)}</li>
        <li>Last seen: ${escapeHtml(formatOwnerDate(ownerStats.lastSeenAt))}</li>
      </ul>
    </section>
  `;
  const analyticsMarkup = `
    <section class="owner-stat-card">
      <h3>Live site visitors</h3>
      <p class="owner-stat-big">GoatCounter</p>
      <p class="owner-stat-note">
        Live site visits are now tracked separately through GoatCounter on the
        public website. This popup does not read those numbers directly, but
        your visitor estimates should now be collecting there.
      </p>
      <p class="owner-stat-actions">
        <a
          class="help-page-link owner-dashboard-link"
          href="https://daniquintana.goatcounter.com/"
          target="_blank"
          rel="noreferrer"
        >
          Open GoatCounter dashboard
        </a>
      </p>
    </section>
  `;

  container.innerHTML = `${downloadsMarkup}${browserMarkup}${analyticsMarkup}`;
}

function renderOwnerDownloadsCard() {
  if (ownerStatsUi.downloadsLoading && !ownerStatsUi.downloadSummary) {
    return `
      <section class="owner-stat-card">
        <h3>App downloads</h3>
        <p class="owner-stat-big">...</p>
        <p class="owner-stat-note">Loading public GitHub release download counts.</p>
      </section>
    `;
  }

  if (ownerStatsUi.downloadsError) {
    return `
      <section class="owner-stat-card">
        <h3>App downloads</h3>
        <p class="owner-stat-big">Unavailable</p>
        <p class="owner-stat-note">${escapeHtml(ownerStatsUi.downloadsError)}</p>
      </section>
    `;
  }

  const summary = ownerStatsUi.downloadSummary;
  if (!summary || !summary.hasRelease) {
    return `
      <section class="owner-stat-card">
        <h3>App downloads</h3>
        <p class="owner-stat-big">0</p>
        <p class="owner-stat-note">No public release assets were found yet.</p>
      </section>
    `;
  }

  if (!summary.assets.length) {
    return `
      <section class="owner-stat-card">
        <h3>App downloads</h3>
        <p class="owner-stat-big">0</p>
        <p class="owner-stat-note">No downloads recorded yet for ${escapeHtml(summary.releaseLabel)}.</p>
      </section>
    `;
  }

  return `
    <section class="owner-stat-card">
      <h3>App downloads</h3>
      <p class="owner-stat-big">${formatNumber(summary.totalDownloads)}</p>
      <p class="owner-stat-note">Latest public release: ${escapeHtml(summary.releaseLabel)}.</p>
      <ul class="owner-stat-list">
        ${summary.assets
          .map(
            (asset) =>
              `<li>${escapeHtml(asset.name)}: ${formatNumber(asset.count)}</li>`
          )
          .join("")}
      </ul>
    </section>
  `;
}

async function loadReleaseDownloadStats() {
  if (ownerStatsUi.downloadsLoading || ownerStatsUi.downloadsLoaded) {
    return;
  }

  ownerStatsUi.downloadsLoading = true;
  ownerStatsUi.downloadsError = "";
  renderOwnerStats();

  try {
    const response = await window.fetch(RELEASES_API_URL, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}.`);
    }

    const releases = await response.json();
    if (!Array.isArray(releases)) {
      throw new Error("GitHub releases response was not valid.");
    }

    const latestRelease = releases.find(
      (release) => !release?.draft && !release?.prerelease
    );

    if (!latestRelease) {
      ownerStatsUi.downloadSummary = {
        hasRelease: false,
        releaseLabel: "",
        totalDownloads: 0,
        assets: [],
      };
      ownerStatsUi.downloadsLoaded = true;
      return;
    }

    const releaseLabel =
      latestRelease.name || latestRelease.tag_name || "latest public release";
    const assets = (latestRelease.assets || [])
      .map((asset) => ({
        name: asset?.name || "Unnamed asset",
        count: Number.isFinite(asset?.download_count) ? asset.download_count : 0,
      }))
      .filter((asset) => asset.count > 0)
      .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));

    const totalDownloads = assets.reduce((sum, asset) => sum + asset.count, 0);

    ownerStatsUi.downloadSummary = {
      hasRelease: true,
      releaseLabel,
      totalDownloads,
      assets,
    };
    ownerStatsUi.downloadsLoaded = true;
  } catch (error) {
    ownerStatsUi.downloadsError =
      error?.message || "Could not load GitHub release download counts.";
  } finally {
    ownerStatsUi.downloadsLoading = false;
    renderOwnerStats();
  }
}

function renderGeneralLeftBoard(remaining) {
  return `
    <section class="section-card">
      <div class="section-header">
        <div>
          <p class="section-kicker">What&apos;s Left</p>
        </div>
      </div>
      <div class="remaining-grid">
        ${renderRemainingCard(
          "Fish",
          `${remaining.fish.length} left`,
          renderRemainingList(
            remaining.fish,
            (fish) => fish.name,
            (fish) => `${fish.location} • ${formatFishSeason(fish.season)} • ${fish.weather}`
          ),
          remaining.fish.length ? "Uncaught fish" : "Fish complete"
        )}
        ${renderRemainingCard(
          "Cooking",
          `${remaining.cooking.length} left`,
          renderRemainingList(
            remaining.cooking,
            (recipe) => recipe.name,
            (recipe) => recipe.ingredients.map((ingredient) => `${ingredient.item} x${ingredient.quantity}`).join(", ")
          ),
          remaining.cooking.length ? "Recipes still to cook" : "Cooking complete"
        )}
        ${renderRemainingCard(
          "Crafting",
          `${remaining.crafting.length} left`,
          renderRemainingList(
            remaining.crafting,
            (recipe) => recipe.name,
            (recipe) => `${recipe.category} • ${recipe.ingredients.map((ingredient) => `${ingredient.item} x${ingredient.quantity}`).join(", ")}`
          ),
          remaining.crafting.length ? "Recipes still to craft" : "Crafting complete"
        )}
        ${renderRemainingCard(
          "Shipping",
          `${remaining.shipping.length} left`,
          renderRemainingPills(remaining.shipping, (item) => item.name),
          remaining.shipping.length ? "Items still missing from the shipped collection" : "Shipping complete"
        )}
        ${renderRemainingCard(
          "People",
          `${remaining.villagers.length} left`,
          renderRemainingList(
            remaining.villagers,
            (entry) => entry.name,
            (entry) => entry.meta,
            (entry) => entry.value
          ),
          remaining.villagers.length ? "Villagers not yet at perfection hearts" : "Friends complete"
        )}
        ${renderRemainingCard(
          "Skills",
          `${remaining.skills.length} left`,
          renderRemainingList(
            remaining.skills,
            (entry) => entry.name,
            (entry) => entry.meta,
            (entry) => entry.value
          ),
          remaining.skills.length ? "Farmer levels still missing" : "Skills complete"
        )}
        ${renderRemainingCard(
          "Late Game",
          `${remaining.stardrops.length + remaining.buildings.length + (remaining.walnutsLeft ? 1 : 0)} checks left`,
          renderRemainingList(
            [
              ...remaining.stardrops,
              ...remaining.buildings,
              ...(remaining.walnutsLeft
                ? [
                    {
                      name: "Golden Walnuts",
                      imageUrl: GOLDEN_WALNUT_ITEM.imageUrl,
                      meta: `${state.goldenWalnuts}/${data.other.goldenWalnutsTarget} found`,
                      value: `${remaining.walnutsLeft} left`,
                    },
                  ]
                : []),
            ],
            (entry) => entry.name,
            (entry) => entry.meta,
            (entry) => entry.value
          ),
          remaining.stardrops.length || remaining.buildings.length || remaining.walnutsLeft ? "Stardrops, buildings, and walnuts" : "Late-game checks complete"
        )}
        ${renderRemainingCard(
          "Monster Slayer",
          `${remaining.monsters.length} left`,
          renderRemainingList(
            remaining.monsters,
            (entry) => entry.name,
            (entry) => entry.meta,
            (entry) => entry.value
          ),
          remaining.monsters.length ? "Monster eradication goals still open" : "Monster goals complete"
        )}
      </div>
    </section>
  `;
}

function renderRemainingCard(kicker, title, body, subtitle) {
  return `
    <article class="remaining-card">
      <p class="section-kicker">${escapeHtml(kicker)}</p>
      <h3>${escapeHtml(title)}</h3>
      <p class="remaining-subtitle">${escapeHtml(subtitle)}</p>
      ${body}
    </article>
  `;
}

function renderRemainingList(items, labelFn, metaFn, valueFn) {
  if (!items.length) {
    return emptyState("Nothing left here.");
  }

  return `
    <ul class="remaining-list">
      ${items
        .map(
          (item) => `
            <li class="remaining-item">
              <div class="remaining-copy">
                <div class="item-inline">
                  ${itemThumb(item, labelFn(item))}
                  <div>
                    <strong>${escapeHtml(labelFn(item))}</strong>
                    ${metaFn && metaFn(item) ? `<div class="remaining-meta">${escapeHtml(metaFn(item))}</div>` : ""}
                  </div>
                </div>
              </div>
              ${valueFn ? `<span class="status-pill is-pending">${escapeHtml(valueFn(item))}</span>` : ""}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderRemainingPills(items, labelFn) {
  if (!items.length) {
    return emptyState("Nothing left here.");
  }

  return `
    <div class="pill-grid">
      ${items
        .map((item) => `<span class="token">${escapeHtml(labelFn(item))}</span>`)
        .join("")}
    </div>
  `;
}

function renderFish() {
  const filtered = getFilteredFish();
  const progress = getProgressSnapshot();
  const fishLeft = data.fish.length - progress.fish.done;
  const legendaryLeft = data.fish.filter(
    (fish) => fish.category === "Legendary Fish" && !state.fish[fish.id]
  ).length;
  document.getElementById("fish-summary").innerHTML = `
    ${summaryCard("Fish left", `${fishLeft}`, "", ratioToPercent(fishLeft / data.fish.length), " section-stat-card")}
    ${summaryCard("Caught", `${progress.fish.done}`, "", ratioToPercent(progress.fish.ratio), " section-stat-card")}
    ${summaryCard("Legendary left", `${legendaryLeft}`, "", ratioToPercent(legendaryLeft / 5), " section-stat-card")}
  `;

  if (!filtered.length) {
    document.getElementById("fish-table").innerHTML = emptyState(
      ui.fishStatus === "remaining" && !getRemainingFish().length
        ? "You have every fish marked caught, so there is nothing left in Still need."
        : "No fish match that filter."
    );
    return;
  }

  document.getElementById("fish-table").innerHTML = `
    <div class="table-shell">
      <table class="fish-table">
        <colgroup>
          <col class="fish-col-done" />
          <col class="fish-col-name" />
          <col class="fish-col-type" />
          <col class="fish-col-where" />
          <col class="fish-col-when" />
          <col class="fish-col-season" />
          <col class="fish-col-weather" />
        </colgroup>
        <thead>
          <tr>
            <th>Done</th>
            <th>Fish</th>
            <th>Type</th>
            <th>Where</th>
            <th>When</th>
            <th>Season</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          ${filtered
            .map((fish) => {
              const done = state.fish[fish.id];
              return `
                <tr>
                  <td>
                    <label class="checkbox-wrap">
                      <input type="checkbox" data-action="fish-toggle" data-id="${fish.id}" ${done ? "checked" : ""} />
                      <span class="status-pill ${done ? "is-done" : "is-pending"}">${done ? "Caught" : "Need"}</span>
                    </label>
                  </td>
                  <td>
                    <div class="item-inline">
                      ${itemThumb(fish, fish.name)}
                      <div>
                        <strong>${escapeHtml(fish.name)}</strong>
                      </div>
                    </div>
                  </td>
                  <td>${escapeHtml(getFishTypeLabel(fish))}</td>
                  <td>${escapeHtml(fish.location)}</td>
                  <td>${escapeHtml(fish.time)}</td>
                  <td>${escapeHtml(formatFishSeason(fish.season))}</td>
                  <td>${escapeHtml(fish.weather)}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getFilteredFish() {
  return data.fish
    .filter((fish) => {
      const done = state.fish[fish.id];
      const searchText = [
        fish.name,
        getFishTypeLabel(fish),
        getFishSpots(fish).join(" "),
        fish.location,
        fish.time,
        formatFishSeason(fish.season),
        fish.weather,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesSearch(searchText, ui.fishSearch) &&
        (ui.fishSpot === "all" || getFishSpots(fish).includes(ui.fishSpot)) &&
        matchesFishSeason(fish) &&
        matchesFishWeather(fish) &&
        matchesStatus(done, ui.fishStatus)
      );
    });
}

function getRemainingFish() {
  return data.fish.filter((fish) => !state.fish[fish.id]);
}

function reconcileTabFilterForVisibility(tab) {
  if (tab === "fish") {
    const canAutoSwitch =
      ui.fishStatus === "remaining" &&
      ui.fishSpot === "all" &&
      ui.fishSeason === "all" &&
      ui.fishWeather === "all" &&
      !ui.fishSearch.trim() &&
      getFilteredFish().length === 0;
    if (canAutoSwitch) {
      ui.fishStatus = "all";
      document.getElementById("fish-status").value = "all";
    }
    return;
  }

  if (tab === "cooking") {
    const canAutoSwitch =
      ui.cookingStatus === "remaining" &&
      ui.cookingIngredientCategory === "all" &&
      !ui.cookingSearch.trim() &&
      data.cooking.recipes.every((recipe) => state.cooking.recipes[recipe.id]);
    if (canAutoSwitch) {
      ui.cookingStatus = "all";
      document.getElementById("cooking-status").value = "all";
    }
    return;
  }

  if (tab === "crafting") {
    const canAutoSwitch =
      ui.craftingStatus === "remaining" &&
      !ui.craftingSearch.trim() &&
      data.crafting.recipes.every((recipe) => state.crafting.recipes[recipe.id]);
    if (canAutoSwitch) {
      ui.craftingStatus = "all";
      document.getElementById("crafting-status").value = "all";
    }
  }
}

function renderCooking() {
  const cookingLayout = document.getElementById("cooking-layout");
  const ingredientCategory = document.getElementById("cooking-ingredient-category");
  if (cookingLayout) {
    cookingLayout.classList.remove("is-recipes", "is-planner", "is-split");
    cookingLayout.classList.add(`is-${ui.cookingView}`);
  }
  if (ingredientCategory) {
    ingredientCategory.disabled = ui.cookingView === "recipes";
  }
  document.querySelectorAll("[data-action='cooking-view']").forEach((button) => {
    const isActive = button.dataset.view === ui.cookingView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  renderRecipePlanner({
    kind: "cooking",
    recipes: data.cooking.recipes,
    statusMap: state.cooking.recipes,
    stockMap: state.cooking.pantry,
    summaryEl: "cooking-summary",
    ingredientsEl: "cooking-ingredients",
    recipesEl: "cooking-recipes",
    search: ui.cookingSearch,
    status: ui.cookingStatus,
    stockAction: "cooking-owned",
    ingredientCategory: ui.cookingIngredientCategory,
    extraBadge: null,
    showPlanner: ui.cookingView !== "recipes",
    stickyPlanner: ui.cookingView === "split",
  });
}

function renderCrafting() {
  renderRecipePlanner({
    kind: "crafting",
    recipes: craftingRecipesInGameOrder,
    statusMap: state.crafting.recipes,
    stockMap: state.crafting.stock,
    summaryEl: "crafting-summary",
    ingredientsEl: "crafting-ingredients",
    recipesEl: "crafting-recipes",
    search: ui.craftingSearch,
    status: ui.craftingStatus,
    stockAction: "crafting-owned",
    extraBadge: null,
    showPlanner: false,
  });
}

function renderHoard() {
  const rows = getHoardRows();
  const filtered = rows.filter((row) => {
    const matchesCategory =
      ui.hoardCategory === "all" || row.categories.includes(ui.hoardCategory);
    const matchesText = matchesSearch(
      [row.displayName, row.name, row.categoryLabel].join(" ").toLowerCase(),
      ui.hoardSearch
    );
    const matchesStatus =
      ui.hoardStatus === "all" ||
      (ui.hoardStatus === "remaining" && row.remaining > 0) ||
      (ui.hoardStatus === "stocked" && row.owned > 0);
    return matchesCategory && matchesText && matchesStatus;
  });

  const totalNeed = rows.reduce((sum, row) => sum + row.needed, 0);
  const totalOwned = rows.reduce((sum, row) => sum + Math.min(row.owned, row.needed), 0);
  const totalRemaining = rows.reduce((sum, row) => sum + row.remaining, 0);
  const progress = totalNeed ? ratioToPercent(totalOwned / totalNeed) : 100;

  document.getElementById("hoard-summary").innerHTML = `
    ${summaryCard("Hoard Progress", `${progress.toFixed(1)}%`, "", progress)}
    ${summaryCard("Units stocked", `${formatNumber(totalOwned)}/${formatNumber(totalNeed)}`, "", progress)}
    ${summaryCard("Units still needed", `${formatNumber(totalRemaining)}`, "", totalNeed ? ratioToPercent(totalRemaining / totalNeed) : 0)}
    ${summaryCard("Unique items tracked", `${rows.length}`, "", 100)}
  `;

  document.getElementById("hoard-content").innerHTML = filtered.length
    ? `
      <article class="planner-card hoard-card">
        <div class="table-shell">
          <table class="planner-table tight-table hoard-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Need</th>
                <th>You have</th>
                <th>Still need</th>
              </tr>
            </thead>
            <tbody>
              ${filtered
                .map(
                  (row) => `
                    <tr>
                      <td>
                        <div class="item-inline">
                          <input
                            type="checkbox"
                            data-action="hoard-complete"
                            data-item="${escapeAttribute(row.name)}"
                            data-need="${row.needed}"
                            aria-label="Mark ${escapeAttribute(row.displayName)} as fully stocked"
                            ${row.owned >= row.needed && row.needed > 0 ? "checked" : ""}
                          />
                          ${itemThumb(row, row.displayName)}
                          <strong>${escapeHtml(row.displayName)}</strong>
                        </div>
                      </td>
                      <td>${escapeHtml(row.categoryLabel)}</td>
                      <td>${formatNumber(row.needed)}</td>
                      <td>
                        ${renderStepperInput({
                          value: row.owned,
                          min: 0,
                          step: 1,
                          action: "hoard-owned",
                          attributes: {
                            item: row.name,
                          },
                        })}
                      </td>
                      <td><strong>${formatNumber(row.remaining)}</strong></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>
    `
    : emptyState("No hoard items match the current filters.");
}

function renderRecipePlanner(config) {
  const {
    kind,
    recipes,
    statusMap,
    stockMap,
    summaryEl,
    ingredientsEl,
    recipesEl,
    search,
    status,
    stockAction,
    ingredientCategory = "all",
    extraBadge,
    showPlanner = true,
    stickyPlanner = false,
  } = config;

  const filtered = recipes
    .filter((recipe) => {
      const done = statusMap[recipe.id];
      const searchText = [
        recipe.name,
        kind === "crafting" ? "" : recipe.description,
        kind === "cooking" || kind === "crafting" ? "" : recipe.recipeSource,
        recipe.ingredients.map((ingredient) => ingredient.item).join(" "),
        kind === "crafting" ? "" : recipe.category || "",
      ]
        .join(" ")
        .toLowerCase();
      return matchesSearch(searchText, search) && matchesStatus(done, status);
    });

  const doneCount = Object.values(statusMap).filter(Boolean).length;
  const remainingRecipes = recipes.length - doneCount;
  const plannerStatusMode =
    status === "done"
      ? "done"
      : status === "all" || status === "pantry"
      ? "all"
      : "remaining";
  const plannerRecipes = search.trim() ? filtered : recipes;
  const summaryIngredientRows = Object.entries(
    aggregateIngredientsForStatus(recipes, statusMap, plannerStatusMode)
  )
    .map(([item, needed], index) => ({
      item,
      orderIndex: index,
      category:
        kind === "cooking"
          ? cookingIngredientCatalogMap[item]?.category || "Other"
          : "Material",
      imageUrl: kind === "cooking" ? cookingIngredientCatalogMap[item]?.imageUrl || "" : "",
      needed,
      owned: clampNumber(stockMap[item], 0, 999999),
      remaining: Math.max(needed - clampNumber(stockMap[item], 0, 999999), 0),
    }))
    .sort((left, right) => right.needed - left.needed || left.orderIndex - right.orderIndex);
  const summaryVisibleIngredientRows =
    status === "remaining"
      ? summaryIngredientRows.filter((row) => row.remaining > 0)
      : status === "pantry"
      ? summaryIngredientRows.filter((row) => row.owned > 0)
      : summaryIngredientRows;
  const ingredientTotals = aggregateIngredientsForStatus(
    plannerRecipes,
    statusMap,
    plannerStatusMode
  );
  const ingredientRows = Object.entries(ingredientTotals)
    .map(([item, needed], index) => ({
      item,
      orderIndex: index,
      category:
        kind === "cooking"
          ? cookingIngredientCatalogMap[item]?.category || "Other"
          : "Material",
      imageUrl: kind === "cooking" ? cookingIngredientCatalogMap[item]?.imageUrl || "" : "",
      needed,
      owned: clampNumber(stockMap[item], 0, 999999),
      remaining: Math.max(needed - clampNumber(stockMap[item], 0, 999999), 0),
    }))
    .filter((row) => ingredientCategory === "all" || row.category === ingredientCategory)
    .sort((left, right) => right.needed - left.needed || left.orderIndex - right.orderIndex);

  const visibleIngredientRows =
    status === "remaining"
      ? ingredientRows.filter((row) => row.remaining > 0)
      : status === "pantry"
      ? ingredientRows.filter((row) => row.owned > 0)
      : ingredientRows;
  const remainingUnits = summaryVisibleIngredientRows.reduce((sum, row) => sum + row.remaining, 0);
  const ownedUnits = summaryVisibleIngredientRows.reduce((sum, row) => sum + row.owned, 0);
  const leftLabel = kind === "cooking" ? "Recipes left" : "Crafts left";
  const doneLabel = kind === "cooking" ? "Cooked" : "Crafted";
  const unitLabel = status === "pantry"
    ? "Units on hand"
    : kind === "cooking"
    ? "Ingredients left"
    : "Materials left";
  const itemLabel = status === "pantry"
    ? "Pantry items"
    : kind === "cooking"
    ? "Ingredients needed"
    : "Materials needed";
  const plannerContainer = document.getElementById(ingredientsEl);
  if (plannerContainer) {
    plannerContainer.classList.toggle(
      "sticky-planner",
      kind === "cooking" && stickyPlanner && remainingRecipes > 0
    );
  }

  document.getElementById(summaryEl).innerHTML = showPlanner
    ? `
    ${summaryCard(leftLabel, `${remainingRecipes}`, "", ratioToPercent(remainingRecipes / recipes.length), " section-stat-card")}
    ${summaryCard(doneLabel, `${doneCount}`, "", ratioToPercent(doneCount / recipes.length), " section-stat-card")}
    ${summaryCard(unitLabel, `${status === "pantry" ? ownedUnits : remainingUnits}`, "", summaryVisibleIngredientRows.length ? 100 : 0, " section-stat-card")}
    ${summaryCard(itemLabel, `${summaryVisibleIngredientRows.length}`, "", ratioToPercent(Math.min(summaryVisibleIngredientRows.length, recipes.length) / recipes.length), " section-stat-card")}
  `
    : `
    ${summaryCard(leftLabel, `${remainingRecipes}`, "", ratioToPercent(remainingRecipes / recipes.length), " section-stat-card")}
    ${summaryCard(doneLabel, `${doneCount}`, "", ratioToPercent(doneCount / recipes.length), " section-stat-card")}
  `;

  document.getElementById(ingredientsEl).innerHTML = !showPlanner
    ? ""
    : visibleIngredientRows.length
    ? `
      <article class="planner-card">
        <div class="section-header museum-section-header">
          <div>
            <p class="section-kicker">${kind === "cooking" ? "Ingredient Planner" : "Material Planner"}</p>
          </div>
        </div>
        <div class="table-shell">
          <table class="planner-table tight-table ${kind === "cooking" ? "planner-table-cooking" : ""}">
            <thead>
              <tr>
                <th>Item</th>
                ${kind === "cooking" ? "<th>Category</th>" : ""}
                <th>Need</th>
                <th>You have</th>
                <th>Still need</th>
              </tr>
            </thead>
            <tbody>
              ${visibleIngredientRows
                .map(
                  (row) => `
                    <tr>
                      <td>
                        <div class="item-inline">
                          ${itemThumb(row, row.item)}
                          <span>${escapeHtml(row.item)}</span>
                        </div>
                      </td>
                      ${kind === "cooking" ? `<td>${escapeHtml(row.category)}</td>` : ""}
                      <td>${formatNumber(row.needed)}</td>
                      <td>
                        ${renderStepperInput({
                          value: row.owned,
                          min: 0,
                          step: 1,
                          action: stockAction,
                          attributes: {
                            item: row.item,
                          },
                        })}
                      </td>
                      <td><strong>${formatNumber(row.remaining)}</strong></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>
    `
    : emptyState(
        showPlanner && remainingRecipes
          ? status === "remaining" && ingredientRows.length
            ? "You already have enough of the remaining ingredients in this view."
            : status === "pantry" && ingredientCategory !== "all"
            ? `No tracked ingredients match the ${ingredientCategory} filter.`
            : status === "pantry"
            ? "No tracked ingredients match the current filter."
            : kind === "cooking" && ingredientCategory !== "all"
            ? `No remaining ingredients match the ${ingredientCategory} filter.`
            : "No remaining ingredients match the current filter."
          : showPlanner
          ? `All ${kind} recipes are done, so there are no remaining ingredients to plan around.`
          : ""
      );

  document.getElementById(recipesEl).innerHTML = filtered.length
    ? filtered
        .map((recipe) => {
          const done = statusMap[recipe.id];
          return `
            <article class="recipe-card ${done ? "is-done" : ""}">
              <div class="recipe-top">
                <div class="recipe-title">
                  <input type="checkbox" data-action="${kind}-toggle" data-id="${recipe.id}" ${done ? "checked" : ""} />
                  <div>
                    <div class="item-inline">
                      ${itemThumb(recipe, recipe.name)}
                      <h3>${escapeHtml(recipe.name)}</h3>
                    </div>
                    ${
                      extraBadge
                        ? `<div class="token-row">
                      <span class="token">${escapeHtml(extraBadge(recipe))}</span>
                    </div>`
                        : ""
                    }
                  </div>
                </div>
                <div class="recipe-status-corner">
                  <span class="status-pill ${done ? "is-done" : "is-pending"}">${done ? (kind === "cooking" ? "Cooked" : "Crafted") : "Need"}</span>
                </div>
              </div>
              ${kind === "cooking" || kind === "crafting" ? "" : `<p>${escapeHtml(recipe.description)}</p>`}
              <div class="meta-block">
                <div>
                  <div class="meta-label">Ingredients</div>
                  <div class="token-row">
                    ${recipe.ingredients
                      .map(
                        (ingredient) =>
                          `<span class="token">${escapeHtml(ingredient.item)} x${ingredient.quantity}</span>`
                      )
                      .join("")}
                  </div>
                </div>
                ${
                  kind === "cooking" || kind === "crafting"
                    ? ""
                    : `
                <div>
                  <div class="meta-label">Source</div>
                  <div>${escapeHtml(recipe.recipeSource)}</div>
                </div>
                `
                }
              </div>
            </article>
          `;
        })
        .join("")
    : emptyState(`No ${kind} recipes match that filter.`);
}

function renderOther() {
  const remaining = getRemainingSnapshot();

  document.getElementById("other-summary").innerHTML = `
    ${summaryCard("Friends left", `${remaining.villagers.length}`, "", ratioToPercent(remaining.villagers.length / data.other.villagers.length), " section-stat-card")}
    ${summaryCard("Skills left", `${remaining.skills.length}`, "", ratioToPercent(remaining.skills.length / data.other.skills.length), " section-stat-card")}
    ${summaryCard("Walnuts left", `${remaining.walnutsLeft}`, "", ratioToPercent(remaining.walnutsLeft / data.other.goldenWalnutsTarget), " section-stat-card")}
    ${summaryCard("Stardrops left", `${remaining.stardrops.length}`, "", ratioToPercent(remaining.stardrops.length / data.other.stardrops.length), " section-stat-card")}
    ${summaryCard("Obelisks & clock", `${remaining.buildings.length}`, "", ratioToPercent(remaining.buildings.length / data.other.buildings.length), " section-stat-card")}
    ${summaryCard("Monster goals left", `${remaining.monsters.length}`, "", ratioToPercent(remaining.monsters.length / data.other.monsterGoals.length), " section-stat-card")}
  `;

  renderVillagers();
  renderMonsterGoals();
  renderSkills();
  renderStardropsAndWalnuts();
  renderBuildings();
}

function renderShipping() {
  const summaryEl = document.getElementById("shipping-summary");
  const contentEl = document.getElementById("shipping-content");
  if (!summaryEl || !contentEl) {
    return;
  }

  const term = ui.shippingSearch.toLowerCase().trim();
  const matchesStatus = (item) => {
    const done = Boolean(state.shipping[item.id]);
    if (ui.shippingStatus === "done") {
      return done;
    }
    if (ui.shippingStatus === "remaining") {
      return !done;
    }
    return true;
  };
  const filteredPages = data.other.shippingPages
    .map((page) => {
      const items = page.items.filter(
        (item) => matchesSearch(item.name.toLowerCase(), term) && matchesStatus(item)
      );
      const completed = items.filter((item) => state.shipping[item.id]).length;
      return { ...page, items, completed, remaining: items.length - completed };
    })
    .filter((page) => page.items.length);

  const totalDone = countTrueValues(state.shipping);
  const totalLeft = flatShippingItems.length - totalDone;

  summaryEl.innerHTML = `
    ${summaryCard("Shipping left", `${totalLeft}`, "", ratioToPercent(totalLeft / flatShippingItems.length), " section-stat-card")}
    ${summaryCard("Shipped", `${totalDone}`, "", ratioToPercent(totalDone / flatShippingItems.length), " section-stat-card")}
  `;

  if (!filteredPages.length) {
    contentEl.innerHTML = emptyState("No shipped items match that search.");
    return;
  }

  contentEl.innerHTML = `
    <div class="shipping-pages">
      ${filteredPages
        .map((page) => {
          return `
            <article class="page-card">
              <div class="page-head">
                <h3>${escapeHtml(page.name)}</h3>
                <span class="status-pill ${page.remaining === 0 ? "is-done" : "is-pending"}">${page.remaining} left</span>
              </div>
              <div class="shipping-grid">
                ${page.items
                  .map((item) => {
                    const done = state.shipping[item.id];
                    const shippingDisplayItem = {
                      ...item,
                      imageUrl: item.imageUrl || hoardItemCatalogMap[item.name]?.imageUrl || "",
                    };
                    return `
                      <label class="shipping-item ${done ? "is-done" : ""}">
                        <span class="shipping-item-check">
                          <input type="checkbox" data-action="shipping-toggle" data-id="${item.id}" ${done ? "checked" : ""} />
                        </span>
                        <span class="shipping-item-body">
                          ${itemThumb(shippingDisplayItem, item.name)}
                          <span class="shipping-item-copy">
                            <strong>${escapeHtml(item.name)}</strong>
                          </span>
                        </span>
                      </label>
                    `;
                  })
                  .join("")}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function getHoardRows() {
  const rows = new Map();
  const ensureRow = (name) => {
    if (!rows.has(name)) {
      rows.set(name, {
        name,
        categories: [],
        categorySet: new Set(),
        needed: 0,
        imageUrl: hoardItemCatalogMap[name]?.imageUrl || "",
      });
    }
    return rows.get(name);
  };
  const tagRow = (name, category, quantity) => {
    const row = ensureRow(name);
    row.needed += quantity;
    if (!row.categorySet.has(category)) {
      row.categorySet.add(category);
      row.categories.push(category);
    }
  };

  flatShippingItems.forEach((item) => {
    tagRow(item.name, "Shipping", 1);
  });

  Object.entries(aggregateIngredientsForStatus(data.cooking.recipes, {}, "all")).forEach(
    ([item, needed]) => tagRow(item, "Cooking", needed)
  );

  Object.entries(aggregateIngredientsForStatus(craftingRecipesInGameOrder, {}, "all")).forEach(
    ([item, needed]) => tagRow(item, "Crafting", needed)
  );

  Object.entries(aggregateAllObeliskMaterials()).forEach(([item, needed]) => {
    tagRow(item, "Obelisk", needed);
  });

  return [...rows.values()]
    .map((row, sourceIndex) => {
      const owned = clampNumber(state.hoard[row.name], 0, 999999);
      return {
        ...row,
        displayName: getHoardDisplayName(row.name),
        sourceIndex,
        owned,
        remaining: Math.max(row.needed - owned, 0),
        categories: [...row.categories].sort(
          (left, right) =>
            HOARD_CATEGORY_ORDER.indexOf(left) - HOARD_CATEGORY_ORDER.indexOf(right)
        ),
      };
    })
    .map((row) => ({
      ...row,
      categoryLabel: row.categories.join(", "),
    }))
    .sort((left, right) => {
      const leftRank = HOARD_CATEGORY_ORDER.indexOf(left.categories[0] || "Shipping");
      const rightRank = HOARD_CATEGORY_ORDER.indexOf(right.categories[0] || "Shipping");
      return leftRank - rightRank || left.name.localeCompare(right.name);
    });
}

function renderMuseum() {
  const summaryEl = document.getElementById("museum-summary");
  const contentEl = document.getElementById("museum-content");
  if (!summaryEl || !contentEl) {
    return;
  }

  const donations = getMuseumDonationCount();
  const artifactsDone = countMuseumItems(MUSEUM_ARTIFACTS);
  const mineralsDone = countMuseumItems(MUSEUM_MINERALS);
  const rewardsEarned = getMuseumRewardCount();
  const complete = getMuseumCompletion();
  const progress = ratioToPercent(donations / MUSEUM_DONATION_TARGET);

  summaryEl.innerHTML = `
    ${summaryCard("Donated", `${donations}/${MUSEUM_DONATION_TARGET}`, "", progress, " section-stat-card")}
    ${summaryCard("Artifacts", `${artifactsDone}/${MUSEUM_ARTIFACTS.length}`, "", ratioToPercent(artifactsDone / MUSEUM_ARTIFACTS.length), " section-stat-card")}
    ${summaryCard("Minerals", `${mineralsDone}/${MUSEUM_MINERALS.length}`, "", ratioToPercent(mineralsDone / MUSEUM_MINERALS.length), " section-stat-card")}
    ${summaryCard("Rewards earned", `${rewardsEarned}/${MUSEUM_REWARD_TARGET}`, "", ratioToPercent(rewardsEarned / MUSEUM_REWARD_TARGET), " section-stat-card")}
  `;

  contentEl.innerHTML = `
    <div class="museum-section-grid">
      <article class="mini-card museum-card">
        <div class="section-header museum-section-header">
          <div>
            <h3>Artifacts</h3>
          </div>
          <span class="status-pill ${artifactsDone === MUSEUM_ARTIFACTS.length ? "is-done" : "is-pending"}">${artifactsDone}/${MUSEUM_ARTIFACTS.length}</span>
        </div>
        <div class="museum-grid">
          ${renderMuseumItemGrid(MUSEUM_ARTIFACTS)}
        </div>
      </article>
      <article class="mini-card museum-card">
        <div class="section-header museum-section-header">
          <div>
            <h3>Minerals</h3>
          </div>
          <span class="status-pill ${mineralsDone === MUSEUM_MINERALS.length ? "is-done" : "is-pending"}">${mineralsDone}/${MUSEUM_MINERALS.length}</span>
        </div>
        <div class="museum-grid">
          ${renderMuseumItemGrid(MUSEUM_MINERALS)}
        </div>
      </article>
    </div>
  `;
}

function renderMuseumItemGrid(items) {
  return items
    .map((item) => {
      const done = Boolean(state.museum.items[item.id]);
      return `
        <label class="museum-item ${done ? "is-done" : ""}">
          <span class="museum-item-check">
            <input
              type="checkbox"
              data-action="museum-item-toggle"
              data-id="${item.id}"
              ${done ? "checked" : ""}
            />
          </span>
          <span class="museum-item-body">
            ${itemThumb(item, item.name)}
            <span class="museum-item-copy">
              <strong>${escapeHtml(item.name)}</strong>
            </span>
          </span>
        </label>
      `;
    })
    .join("");
}

function renderVillagers() {
  const villagers = [...data.other.villagers].sort((left, right) => left.name.localeCompare(right.name));

  document.getElementById("villagers-content").innerHTML = `
    <div class="villager-grid">
      ${villagers
        .map((villager) => {
          const current = state.villagers[villager.id];
          const done = current >= villager.targetHearts;
          return `
            <article class="villager-card">
              <h3>${escapeHtml(villager.name)}</h3>
              <div class="control-stack">
                <div class="number-line villager-number-line">
                  <label class="subtle" for="villager-${villager.id}">Current hearts</label>
                  <div class="villager-heart-entry">
                    <div class="villager-portrait">${itemThumb(villager, villager.name)}</div>
                    ${renderStepperInput({
                      id: `villager-${villager.id}`,
                      value: current,
                      min: 0,
                      max: 14,
                      step: 1,
                      action: "villager-hearts",
                      attributes: {
                        id: villager.id,
                      },
                    })}
                  </div>
                </div>
              </div>
              <div class="villager-topline">
                <span class="status-pill ${done ? "is-done" : "is-pending"}">${done ? "Done" : `${villager.targetHearts - current} left`}</span>
                <label class="toggle-line villager-toggle-line">
                  <input
                    type="checkbox"
                    data-action="villager-complete"
                    data-id="${villager.id}"
                    ${done ? "checked" : ""}
                  />
                  <span>Max hearts</span>
                </label>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMonsterGoals() {
  const goals = [...data.other.monsterGoals].sort((left, right) => {
    const leftRemaining = Math.max(left.target - state.monsterGoals[left.id], 0);
    const rightRemaining = Math.max(right.target - state.monsterGoals[right.id], 0);
    return rightRemaining - leftRemaining || getMonsterGoalLabel(left).localeCompare(getMonsterGoalLabel(right));
  });

  document.getElementById("monster-content").innerHTML = `
    <div class="table-shell">
      <table class="monster-table">
        <colgroup>
          <col class="monster-col-done" />
          <col class="monster-col-goal" />
          <col class="monster-col-target" />
          <col class="monster-col-current" />
          <col class="monster-col-remaining" />
        </colgroup>
        <thead>
          <tr>
            <th>Done</th>
            <th>Goal</th>
            <th>Target</th>
            <th>Current kills</th>
            <th>Still need</th>
          </tr>
        </thead>
        <tbody>
          ${goals
            .map((goal) => {
              const current = state.monsterGoals[goal.id];
              const done = current >= goal.target;
              const remaining = Math.max(goal.target - current, 0);
	          return `
		                <tr>
		                  <td class="monster-done-cell">
		                    <input
		                      type="checkbox"
	                      data-action="monster-complete"
	                      data-id="${goal.id}"
	                      ${done ? "checked" : ""}
	                    />
	                  </td>
	                  <td class="monster-goal-cell">
                      <div class="item-inline monster-goal-inline">
                        ${itemThumb({ imageUrl: buildMonsterGoalImageUrl(goal) }, getMonsterGoalLabel(goal))}
	                    <strong>${escapeHtml(getMonsterGoalLabel(goal))}</strong>
                      </div>
	                  </td>
	                  <td class="monster-target-cell">${formatNumber(goal.target)}</td>
	                  <td class="monster-number-cell">
	                    ${renderStepperInput({
                        value: current,
                        min: 0,
                        step: 1,
                        action: "monster-count",
                        attributes: {
                          id: goal.id,
                        },
                      })}
	                  </td>
	                  <td class="monster-remaining-cell"><strong>${formatNumber(remaining)}</strong></td>
	                </tr>
	              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSkills() {
  const skillOrder = new Map([
    ["Farming", 0],
    ["Foraging", 1],
    ["Fishing", 2],
    ["Mining", 3],
    ["Combat", 4],
  ]);
  const skills = [...data.other.skills].sort(
    (left, right) =>
      (skillOrder.get(left.name) ?? Number.MAX_SAFE_INTEGER) -
        (skillOrder.get(right.name) ?? Number.MAX_SAFE_INTEGER) ||
      left.name.localeCompare(right.name)
  );

  document.getElementById("skills-content").innerHTML = `
    <div class="skills-grid">
      ${skills
        .map((skill) => {
          const current = state.skills[skill.id];
          const done = current >= skill.targetLevel;
          return `
            <article class="mini-card">
              <h3>${escapeHtml(skill.name)}</h3>
              <div class="control-stack">
                <div class="number-line">
                  <span class="subtle">Current level</span>
                  ${renderStepperInput({
                    value: current,
                    min: 0,
                    max: 10,
                    step: 1,
                    action: "skill-level",
                    attributes: {
                      id: skill.id,
                    },
                  })}
                </div>
              </div>
              <div class="skill-footer">
                <label class="toggle-line">
                  <input
                    type="checkbox"
                    data-action="skill-complete"
                    data-id="${skill.id}"
                    ${done ? "checked" : ""}
                  />
                  <span>Max level</span>
                </label>
                <span class="status-pill ${done ? "is-done" : "is-pending"}">${done ? "Maxed" : `${skill.targetLevel - current} left`}</span>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStardropsAndWalnuts() {
  const stardrops = [...data.other.stardrops].sort((left, right) => left.name.localeCompare(right.name));

  document.getElementById("collectibles-content").innerHTML = `
    <div class="stardrop-grid collectibles-grid">
      ${stardrops
        .map((stardrop) => {
          const done = state.stardrops[stardrop.id];
          return `
            <article class="mini-card collectible-card">
              <div class="recipe-top">
                <div>
                  <div class="item-inline">
                    ${itemThumb(stardrop, stardrop.name)}
                    <h3>${escapeHtml(stardrop.name)}</h3>
                  </div>
                  <p>${escapeHtml(stardrop.details)}</p>
                </div>
                <input type="checkbox" data-action="stardrop-toggle" data-id="${stardrop.id}" ${done ? "checked" : ""} />
              </div>
            </article>
          `;
        })
        .join("")}
      <article class="mini-card collectible-card walnut-card">
        <div class="item-inline">
          ${itemThumb(GOLDEN_WALNUT_ITEM, GOLDEN_WALNUT_ITEM.name)}
          <h3>Golden Walnuts</h3>
        </div>
        <div class="control-stack">
          <div class="number-line">
            <span class="subtle">Current found</span>
            ${renderStepperInput({
              value: state.goldenWalnuts,
              min: 0,
              max: data.other.goldenWalnutsTarget,
              step: 1,
              action: "golden-walnuts",
            })}
          </div>
          <label class="toggle-line">
            <input
              type="checkbox"
              data-action="golden-walnuts-complete"
              ${state.goldenWalnuts >= data.other.goldenWalnutsTarget ? "checked" : ""}
            />
            <span>All found</span>
          </label>
        </div>
        ${progressBar(state.goldenWalnuts / data.other.goldenWalnutsTarget)}
      </article>
    </div>
  `;
}

function renderBuildings() {
  const buildings = [...data.other.buildings].sort((left, right) => left.name.localeCompare(right.name));

  document.getElementById("buildings-content").innerHTML = `
    <div class="building-grid">
      ${buildings
        .map((building) => {
          const done = state.buildings[building.id];
          return `
            <article class="building-card">
              <div class="recipe-top">
                <div class="item-inline">
                  ${itemThumb(building, building.name)}
                  <h3>${escapeHtml(building.name)}</h3>
                </div>
                <span class="status-pill ${done ? "is-done" : "is-pending"}">${done ? "Built" : "Need"}</span>
              </div>
              <div class="control-stack building-controls">
                <label class="toggle-line">
                  <input type="checkbox" data-action="building-toggle" data-id="${building.id}" ${done ? "checked" : ""} />
                  <span>Built</span>
                </label>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
    ${buildings.length ? "" : emptyState("All obelisks and the Gold Clock are marked complete.")}
  `;
}

function getRemainingSnapshot() {
  const fish = data.fish.filter((entry) => !state.fish[entry.id]);
  const cooking = data.cooking.recipes.filter((entry) => !state.cooking.recipes[entry.id]);
  const crafting = craftingRecipesInGameOrder.filter((entry) => !state.crafting.recipes[entry.id]);
  const shipping = flatShippingItems.filter((entry) => !state.shipping[entry.id]);
  const villagers = data.other.villagers
    .filter((entry) => state.villagers[entry.id] < entry.targetHearts)
    .map((entry) => {
      const current = state.villagers[entry.id];
      const left = entry.targetHearts - current;
      return {
        name: entry.name,
        meta: `${current}/${entry.targetHearts} hearts`,
        value: `${left} left`,
        left,
      };
    })
    .sort((left, right) => right.left - left.left || left.name.localeCompare(right.name));
  const monsters = data.other.monsterGoals
    .filter((entry) => state.monsterGoals[entry.id] < entry.target)
    .map((entry) => {
      const current = state.monsterGoals[entry.id];
      const left = entry.target - current;
      return {
        name: getMonsterGoalLabel(entry),
        meta: `${current}/${entry.target} kills`,
        value: `${left} left`,
        left,
      };
    })
    .sort((left, right) => right.left - left.left || left.name.localeCompare(right.name));
  const skills = data.other.skills
    .filter((entry) => state.skills[entry.id] < entry.targetLevel)
    .map((entry) => {
      const current = state.skills[entry.id];
      const left = entry.targetLevel - current;
      return {
        name: entry.name,
        meta: `Level ${current}/${entry.targetLevel}`,
        value: `${left} left`,
        left,
      };
    })
    .sort((left, right) => right.left - left.left || left.name.localeCompare(right.name));
  const stardrops = data.other.stardrops
    .filter((entry) => !state.stardrops[entry.id])
    .map((entry) => ({
      name: entry.name,
      meta: entry.details,
      value: "Missing",
      imageUrl: entry.imageUrl,
    }));
  const buildings = data.other.buildings
    .filter((entry) => !state.buildings[entry.id])
    .map((entry) => ({
      name: entry.name,
      meta: "",
      value: "Not built",
      imageUrl: entry.imageUrl,
    }));
  const walnutsLeft = Math.max(data.other.goldenWalnutsTarget - state.goldenWalnuts, 0);
  const materials = [
    ...buildMaterialRows(aggregateRemainingIngredients(data.cooking.recipes, state.cooking.recipes), state.cooking.pantry, "Cooking"),
    ...buildMaterialRows(aggregateRemainingIngredients(data.crafting.recipes, state.crafting.recipes), state.crafting.stock, "Crafting"),
  ]
    .filter((entry) => entry.remaining > 0)
    .sort((left, right) => right.remaining - left.remaining || left.name.localeCompare(right.name))
    .slice(0, 12)
    .map((entry) => ({
      name: entry.name,
      meta: `${entry.group} • Need ${entry.displayNeed} • Have ${entry.displayOwned}`,
      value: entry.displayRemaining,
    }));

  return {
    fish,
    cooking,
    crafting,
    shipping,
    villagers,
    monsters,
    skills,
    stardrops,
    buildings,
    walnutsLeft,
    materials,
  };
}

function getMonsterGoalLabel(entry) {
  return entry.monsterType
    .split(":")[0]
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();
}

function matchesFishSeason(fish) {
  if (ui.fishSeason === "all") {
    return true;
  }

  const tags = getFishSeasonTags(fish);
  if (ui.fishSeason === "varies") {
    return tags.includes("varies");
  }

  return tags.includes("all") || tags.includes(ui.fishSeason);
}

function matchesFishWeather(fish) {
  if (ui.fishWeather === "all") {
    return true;
  }

  const tags = getFishWeatherTags(fish);
  return tags.includes("any") || tags.includes(ui.fishWeather);
}

function getFishTypeLabel(fish) {
  if (fish.category === "Legendary Fish") {
    return "Legendary";
  }
  if (fish.category === "Night Market Fish") {
    return "Night Market";
  }
  if (fish.category === "Crab Pot Fish") {
    return "Crab Pot";
  }
  if (fish.category === "Other Catchables") {
    return "Catchable";
  }
  return "Fish";
}

function getFishSpots(fish) {
  const spots = new Set();
  const location = fish.location || "";
  const season = fish.season || "";

  if (fish.category === "Legendary Fish") {
    spots.add("Legendary");
  }
  if (fish.category === "Night Market Fish" || /Night Market/i.test(location)) {
    spots.add("Night Market");
  }
  if (fish.category === "Crab Pot Fish") {
    spots.add("Crab Pot");
  }
  if (/(Ocean|Saltwater|Beach|East Pier|Pirate Cove)/i.test(location)) {
    spots.add("Beach");
  }
  if (/(Town River|Forest River|Forest Waterfalls|Freshwater|Everywhere but the Farm Pond)/i.test(location)) {
    spots.add("River");
  }
  if (/Mountain Lake/i.test(location)) {
    spots.add("Mountain Lake");
  }
  if (/(Forest Pond|Forest Farm)/i.test(location)) {
    spots.add("Cindersap Forest Pond");
  }
  if (/Secret Woods/i.test(location)) {
    spots.add("Secret Woods");
  }
  if (/(Mines|Ghost Drops|Levels 20, 60, and 100 of the Mines)/i.test(location)) {
    spots.add("Mines");
  }
  if (/Sewers/i.test(location)) {
    spots.add("Sewers");
  }
  if (/Desert/i.test(location)) {
    spots.add("Desert");
  }
  if (/Mutant Bug Lair/i.test(location)) {
    spots.add("Mutant Bug Lair");
  }
  if (/Witch's Swamp/i.test(location)) {
    spots.add("Witch's Swamp");
  }
  if (/(Ginger Island|Pirate Cove|Volcano Caldera|Arrowhead Island)/i.test(location) || /Ginger Island/i.test(season)) {
    spots.add("Ginger Island");
  }

  return [...spots].sort(
    (left, right) => FISH_SPOT_ORDER.indexOf(left) - FISH_SPOT_ORDER.indexOf(right)
  );
}

function getFishSeasonTags(fish) {
  const season = (fish.season || "").toLowerCase();
  const tags = [];

  if (season.includes("all seasons")) {
    tags.push("all");
  }
  if (season.includes("varies")) {
    tags.push("varies");
  }
  if (season.includes("spring")) {
    tags.push("spring");
  }
  if (season.includes("summer")) {
    tags.push("summer");
  }
  if (season.includes("fall")) {
    tags.push("fall");
  }
  if (season.includes("winter")) {
    tags.push("winter");
  }

  return tags;
}

function getFishWeatherTags(fish) {
  const weather = (fish.weather || "").toLowerCase();
  const tags = [];

  if (weather.includes("any")) {
    tags.push("any");
  }
  if (weather.includes("sun")) {
    tags.push("sun");
  }
  if (weather.includes("rain")) {
    tags.push("rain");
  }
  if (weather.includes("wind")) {
    tags.push("wind");
  }

  return tags;
}

function formatFishSeason(season) {
  return (season || "")
    .replace(
      /\b(Spring|Summer|Fall|Winter)\s+(?=(Spring|Summer|Fall|Winter)\b)/g,
      "$1, "
    )
    .replace(/\)\s+(?=(Spring|Summer|Fall|Winter)\b)/g, "), ");
}

function getProgressSnapshot() {
  const fishDone = countTrueValues(state.fish);
  const cookingDone = countTrueValues(state.cooking.recipes);
  const craftingDone = countTrueValues(state.crafting.recipes);
  const shippingDone = countTrueValues(state.shipping);
  const monsterComplete = data.other.monsterGoals.filter(
    (goal) => state.monsterGoals[goal.id] >= goal.target
  ).length;
  const friendComplete = data.other.villagers.filter(
    (villager) => state.villagers[villager.id] >= villager.targetHearts
  ).length;
  const skillsComplete = Math.min(
    Math.floor(
      data.other.skills.reduce(
        (sum, skill) => sum + Math.min(state.skills[skill.id], skill.targetLevel),
        0
      ) / 2
    ),
    data.perfectionCategories.find((category) => category.id === "farmer-level")?.totalRequired ?? 25
  );
  const stardropsDone = countTrueValues(state.stardrops);
  const obeliskTotal = data.other.buildings.filter((building) => building.type === "obelisk").length;
  const obelisksDone = data.other.buildings.filter(
    (building) => building.type === "obelisk" && state.buildings[building.id]
  ).length;
  const goldClockDone = state.buildings["gold-clock"] ? 1 : 0;
  const walnutsCurrent = state.goldenWalnuts;

  const sections = {
    fish: snapshotEntry(fishDone, data.fish.length),
    cooking: snapshotEntry(cookingDone, data.cooking.recipes.length),
    crafting: snapshotEntry(craftingDone, data.crafting.recipes.length),
    shipping: snapshotEntry(shippingDone, flatShippingItems.length),
    monsters: snapshotEntry(monsterComplete, data.other.monsterGoals.length),
    friends: snapshotEntry(friendComplete, data.other.villagers.length),
    skills: snapshotEntry(
      skillsComplete,
      data.perfectionCategories.find((category) => category.id === "farmer-level")?.totalRequired ?? 25
    ),
    stardrops: snapshotEntry(stardropsDone, data.other.stardrops.length),
    obelisks: snapshotEntry(obelisksDone, obeliskTotal),
    goldClock: snapshotEntry(goldClockDone, 1),
    walnuts: snapshotEntry(walnutsCurrent, data.other.goldenWalnutsTarget),
  };

  const overallWeighted =
    sections.shipping.ratio * 15 +
    sections.obelisks.ratio * 4 +
    sections.goldClock.ratio * 10 +
    sections.monsters.ratio * 10 +
    sections.friends.ratio * 11 +
    sections.skills.ratio * 5 +
    sections.stardrops.ratio * 10 +
    sections.cooking.ratio * 10 +
    sections.crafting.ratio * 10 +
    sections.fish.ratio * 10 +
    sections.walnuts.ratio * 5;

  return {
    ...sections,
    overallWeighted,
    overallPercent: overallWeighted,
  };
}

function aggregateRemainingIngredients(recipes, statusMap) {
  return aggregateIngredientsForStatus(recipes, statusMap, "remaining");
}

function aggregateIngredientsForStatus(recipes, statusMap, mode = "remaining") {
  return recipes.reduce((totals, recipe) => {
    const done = Boolean(statusMap[recipe.id]);
    if (mode === "remaining" && done) {
      return totals;
    }
    if (mode === "done" && !done) {
      return totals;
    }
    recipe.ingredients.forEach((ingredient) => {
      totals[ingredient.item] = (totals[ingredient.item] || 0) + ingredient.quantity;
    });
    return totals;
  }, {});
}

function aggregateRemainingBuildingMaterials() {
  const totals = {};
  data.other.buildings.forEach((building) => {
    if (state.buildings[building.id]) {
      return;
    }
    totals.Gold = (totals.Gold || 0) + building.goldCost;
    building.materials.forEach((material) => {
      totals[material.item] = (totals[material.item] || 0) + material.quantity;
    });
  });
  return totals;
}

function aggregateRemainingObeliskMaterials() {
  const totals = {};
  data.other.buildings
    .filter((building) => building.type === "obelisk")
    .forEach((building) => {
      if (state.buildings[building.id]) {
        return;
      }
      building.materials.forEach((material) => {
        totals[material.item] = (totals[material.item] || 0) + material.quantity;
      });
    });
  return totals;
}

function aggregateAllObeliskMaterials() {
  const totals = {};
  data.other.buildings
    .filter((building) => building.type === "obelisk")
    .forEach((building) => {
      building.materials.forEach((material) => {
        totals[material.item] = (totals[material.item] || 0) + material.quantity;
      });
    });
  return totals;
}

function buildMaterialRows(totals, stockMap, group) {
  return Object.entries(totals).map(([name, needed]) => {
    const owned = stockMap[name] || 0;
    const remaining = Math.max(needed - owned, 0);
    return {
      group,
      name,
      needed,
      owned,
      remaining,
      displayNeed: name === "Gold" ? formatGold(needed) : formatNumber(needed),
      displayOwned: name === "Gold" ? formatGold(owned) : formatNumber(owned),
      displayRemaining: name === "Gold" ? formatGold(remaining) : `${formatNumber(remaining)} left`,
    };
  });
}

function exportSave() {
  const payload = {
    ...buildSavePayload(state),
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "junimo-perfection-journal-save.json";
  link.click();
  URL.revokeObjectURL(link.href);
  recordOwnerActivity("exports");
}

function importSave(event) {
  const input = event.currentTarget || event.target;
  const [file] = input?.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedSave = normalizeSavePayload(parsed);
      state = buildState(importedSave.state);
      saveState();
      setPerfectionCelebrationBaseline();
    } catch (error) {
      window.alert(
        error?.message === "future-save-version"
          ? "That save was made with a newer version of Junimo Perfection Journal."
          : error?.message === "invalid-save-file"
            ? "That file is not a Junimo Perfection Journal save."
          : "That file could not be imported."
      );
      return;
    }

    try {
      renderAllDynamic();
      recordOwnerActivity("imports");
    } catch (error) {
      console.error("Imported save but failed to re-render the page.", error);
      window.alert("That save was imported, but this page needs a refresh.");
    } finally {
      if (input) {
        try {
          input.value = "";
        } catch (_error) {
          // Ignore file input reset issues after import.
        }
      }
    }
  };
  reader.onerror = () => {
    window.alert("That file could not be imported.");
    if (input) {
      try {
        input.value = "";
      } catch (_error) {
        // Ignore file input reset issues after import.
      }
    }
  };
  reader.readAsText(file);
}

function resetSave() {
  const confirmed = window.confirm("Reset all tracker progress on this Mac?");
  if (!confirmed) {
    return;
  }
  state = buildState({});
  saveState();
  setPerfectionCelebrationBaseline();
  renderAllDynamic();
  recordOwnerActivity("resets");
}

function saveState() {
  writeStorageValue(STORAGE_KEY, JSON.stringify(buildSavePayload(state)));
  LEGACY_STORAGE_KEYS.forEach((key) => {
    writeStorageValue(key, JSON.stringify(state));
  });
}

function loadSaved() {
  const keys = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS];
  for (const key of keys) {
    const raw = readStorageValue(key);
    if (!raw) {
      continue;
    }
    try {
      return normalizeSavePayload(JSON.parse(raw));
    } catch (error) {
      continue;
    }
  }
  return buildSavePayload({});
}

function buildSavePayload(stateOverride) {
  return {
    appName: data.meta.appName,
    appVersion: APP_VERSION,
    releaseName: RELEASE_NAME,
    saveVersion: SAVE_SCHEMA_VERSION,
    state: stateOverride,
  };
}

function getMuseumCompletion() {
  return getMuseumDonationCount() >= MUSEUM_DONATION_TARGET;
}

function syncMuseumRewardState() {
  if (!state?.museum || !state?.stardrops) {
    return;
  }
  state.stardrops["museum-donation"] = getMuseumCompletion();
}

function getMuseumDonationCount() {
  return countTrueValues(state.museum.items);
}

function countMuseumItems(items) {
  return items.filter((item) => state.museum.items[item.id]).length;
}

function hasMuseumItem(name) {
  const item = MUSEUM_ITEMS_BY_NAME.get(name);
  return Boolean(item && state.museum.items[item.id]);
}

function getMuseumRewardCount() {
  const donations = getMuseumDonationCount();
  const artifactCount = countMuseumItems(MUSEUM_ARTIFACTS);
  const mineralCount = countMuseumItems(MUSEUM_MINERALS);
  const donationRewards = MUSEUM_TOTAL_DONATION_REWARD_MILESTONES.filter(
    (milestone) => donations >= milestone
  ).length;
  const mineralRewards = MUSEUM_MINERAL_REWARD_MILESTONES.filter(
    (milestone) => mineralCount >= milestone
  ).length;
  const artifactRewards = MUSEUM_ARTIFACT_REWARD_MILESTONES.filter(
    (milestone) => artifactCount >= milestone
  ).length;
  const specialRewards = MUSEUM_SPECIAL_REWARD_GROUPS.filter((group) =>
    group.every((itemName) => hasMuseumItem(itemName))
  ).length;
  return donationRewards + mineralRewards + artifactRewards + specialRewards;
}

function setAllMuseumItems(checked) {
  MUSEUM_ITEMS.forEach((item) => {
    state.museum.items[item.id] = checked;
  });
}

function normalizeSavePayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("invalid-save-file");
  }

  const isEnvelope =
    payload.state &&
    typeof payload.state === "object" &&
    !Array.isArray(payload.state);

  if (!isEnvelope) {
    if (!looksLikeSaveStateObject(payload)) {
      throw new Error("invalid-save-file");
    }
    return {
      ...buildSavePayload(migrateSaveState(payload, 1)),
      appVersion: "legacy",
      releaseName: "Legacy save",
    };
  }

  const saveVersion = Number.parseInt(payload.saveVersion, 10);
  if (Number.isFinite(saveVersion) && saveVersion > SAVE_SCHEMA_VERSION) {
    throw new Error("future-save-version");
  }

  if (!looksLikeSaveStateObject(payload.state)) {
    throw new Error("invalid-save-file");
  }

  return {
    appName: payload.appName || data.meta.appName,
    appVersion: payload.appVersion || "legacy",
    releaseName: payload.releaseName || "Legacy save",
    saveVersion: SAVE_SCHEMA_VERSION,
    state: migrateSaveState(payload.state, Number.isFinite(saveVersion) ? saveVersion : 1),
  };
}

function migrateSaveState(savedState, fromVersion) {
  let migrated = savedState && typeof savedState === "object" ? { ...savedState } : {};
  const startingVersion = Number.isFinite(fromVersion) && fromVersion > 0 ? fromVersion : 1;

  for (let version = startingVersion; version < SAVE_SCHEMA_VERSION; version += 1) {
    if (version === 1) {
      migrated = migrateSaveV1ToV2(migrated);
    }
  }

  return migrated;
}

function migrateSaveV1ToV2(savedState) {
  return {
    ...savedState,
    cooking: {
      recipes: savedState?.cooking?.recipes || {},
      pantry: savedState?.cooking?.pantry || {},
    },
    crafting: {
      recipes: savedState?.crafting?.recipes || {},
      stock: savedState?.crafting?.stock || {},
    },
    hoard: savedState?.hoard || {},
  };
}

function looksLikeSaveStateObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return SAVE_STATE_KEYS.some((key) => Object.hasOwn(value, key));
}

function readStorageValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn(`Could not read tracker storage for ${key}.`, error);
    return null;
  }
}

function writeStorageValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Could not save tracker storage for ${key}.`, error);
    return false;
  }
}

function createOwnerStatsDefaults() {
  return {
    pageViews: 0,
    exports: 0,
    imports: 0,
    resets: 0,
    secretOpens: 0,
    lastSeenAt: null,
  };
}

function loadOwnerStats() {
  const defaults = createOwnerStatsDefaults();
  const raw = readStorageValue(OWNER_STATS_STORAGE_KEY);
  if (!raw) {
    return defaults;
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaults,
      ...(parsed && typeof parsed === "object" ? parsed : {}),
    };
  } catch (_error) {
    return defaults;
  }
}

function saveOwnerStats() {
  writeStorageValue(OWNER_STATS_STORAGE_KEY, JSON.stringify(ownerStats));
}

function recordOwnerActivity(field) {
  ownerStats = {
    ...createOwnerStatsDefaults(),
    ...ownerStats,
  };
  ownerStats[field] = clampNumber((ownerStats[field] || 0) + 1, 0, 999999999);
  ownerStats.lastSeenAt = new Date().toISOString();
  saveOwnerStats();
}

function formatOwnerDate(value) {
  if (!value) {
    return "Not yet";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Not yet";
  }

  return date.toLocaleString();
}

function buildState(saved) {
  const cookingPantry = buildNumberMap(cookingIngredientNames, saved?.cooking?.pantry, 0, 999999);
  const craftingStock = buildNumberMap(craftingIngredientNames, saved?.crafting?.stock, 0, 999999);
  const buildingStock = buildNumberMap(buildingMaterialNames, saved?.buildingStock, 0, 999999999);
  const hoard = buildNumberMap(hoardItemNames, saved?.hoard, 0, 999999);
  const museumItems = buildBooleanMap(
    MUSEUM_ITEMS.map((item) => item.id),
    saved?.museum?.items
  );
  const legacyMuseumComplete = Boolean(saved?.museum?.complete);
  const legacyMuseumDonations = clampNumber(saved?.museum?.donations, 0, MUSEUM_DONATION_TARGET);
  if (!saved?.museum?.items || typeof saved.museum.items !== "object") {
    if (legacyMuseumComplete) {
      MUSEUM_ITEMS.forEach((item) => {
        museumItems[item.id] = true;
      });
    } else if (legacyMuseumDonations > 0) {
      MUSEUM_ITEMS.slice(0, legacyMuseumDonations).forEach((item) => {
        museumItems[item.id] = true;
      });
    }
  }

  return {
    fish: buildBooleanMap(data.fish.map((fish) => fish.id), saved?.fish),
    cooking: {
      recipes: buildBooleanMap(data.cooking.recipes.map((recipe) => recipe.id), saved?.cooking?.recipes),
      pantry: cookingPantry,
    },
    crafting: {
      recipes: buildBooleanMap(data.crafting.recipes.map((recipe) => recipe.id), saved?.crafting?.recipes),
      stock: craftingStock,
    },
    hoard,
    museum: {
      items: museumItems,
    },
    shipping: buildBooleanMap(flatShippingItems.map((item) => item.id), saved?.shipping),
    villagers: buildNumberMap(data.other.villagers.map((villager) => villager.id), saved?.villagers, 0, 14),
    monsterGoals: buildNumberMap(data.other.monsterGoals.map((goal) => goal.id), saved?.monsterGoals, 0, 999999),
    skills: buildNumberMap(data.other.skills.map((skill) => skill.id), saved?.skills, 0, 10),
    stardrops: buildBooleanMap(data.other.stardrops.map((stardrop) => stardrop.id), saved?.stardrops),
    buildings: buildBooleanMap(data.other.buildings.map((building) => building.id), saved?.buildings),
    buildingStock,
    goldenWalnuts: clampNumber(saved?.goldenWalnuts, 0, data.other.goldenWalnutsTarget),
  };
}

function buildBooleanMap(keys, saved) {
  const output = {};
  keys.forEach((key) => {
    output[key] = Boolean(saved && saved[key]);
  });
  return output;
}

function buildMuseumItems() {
  return [
    ...MUSEUM_ARTIFACT_NAMES.map((name, index) =>
      buildMuseumItem("artifact", index, name)
    ),
    ...MUSEUM_MINERAL_NAMES.map((name, index) =>
      buildMuseumItem("mineral", index, name)
    ),
  ];
}

function buildMuseumItem(type, index, name) {
  return {
    id: `museum-${type}-${index + 1}`,
    type,
    name,
    imageUrl: buildMuseumImageUrl(name),
  };
}

function buildMonsterGoalImageUrl(goal) {
  const wikiFileName = MONSTER_GOAL_IMAGE_FILES[goal.id];
  if (!wikiFileName) {
    return "";
  }
  return `https://stardewvalleywiki.com/Special:Redirect/file/${encodeURIComponent(wikiFileName)}`;
}

function buildMuseumImageUrl(name) {
  const wikiFileName =
    MUSEUM_IMAGE_FILE_OVERRIDES[name] ||
    `${name.replaceAll(":", "").trim().replaceAll(/\s+/g, "_")}.png`;
  return `https://stardewvalleywiki.com/Special:Redirect/file/${encodeURIComponent(wikiFileName)}`;
}

function buildNumberMap(keys, saved, minimum, maximum) {
  const output = {};
  keys.forEach((key) => {
    output[key] = clampNumber(saved && saved[key], minimum, maximum);
  });
  return output;
}

function uniqueIngredientNames(recipes) {
  return [...new Set(recipes.flatMap((recipe) => recipe.ingredients.map((ingredient) => ingredient.item)))].sort();
}

function uniqueBuildingMaterialNames(buildings) {
  return ["Gold", ...new Set(buildings.flatMap((building) => building.materials.map((material) => material.item))).values()].sort((left, right) => {
    if (left === "Gold") return -1;
    if (right === "Gold") return 1;
    return left.localeCompare(right);
  });
}

function buildHoardItemCatalog() {
  const catalog = {};
  const addItem = (name, imageUrl) => {
    if (!name || catalog[name]) {
      return;
    }
    catalog[name] = { imageUrl: imageUrl || buildHoardFallbackImageUrl(name) };
  };

  data.fish.forEach((fish) => addItem(fish.name, fish.imageUrl));
  flatShippingItems.forEach((item) => addItem(item.name, item.imageUrl));
  (data.cooking.ingredientCatalog || []).forEach((item) => addItem(item.item, item.imageUrl));
  data.cooking.recipes.forEach((recipe) => {
    addItem(recipe.name, recipe.imageUrl);
    recipe.ingredients.forEach((ingredient) => addItem(ingredient.item, ""));
  });
  data.crafting.recipes.forEach((recipe) => {
    addItem(recipe.name, recipe.imageUrl);
    recipe.ingredients.forEach((ingredient) => addItem(ingredient.item, ""));
  });
  data.other.buildings.forEach((building) => {
    addItem(building.name, building.imageUrl);
    building.materials.forEach((material) => addItem(material.item, ""));
  });

  return catalog;
}

function buildHoardFallbackImageUrl(name) {
  const wikiFileName =
    HOARD_IMAGE_FILE_OVERRIDES[name] ||
    `${name.replaceAll(":", "").trim().replaceAll(/\s+/g, "_")}.png`;
  return `https://stardewvalleywiki.com/Special:Redirect/file/${encodeURIComponent(wikiFileName)}`;
}

function getHoardDisplayName(name) {
  if (name === "With Trapper profession: Wood") {
    return "Wood (Trapper)";
  }
  return name;
}

function buildHoardItemNames() {
  const names = new Set();
  flatShippingItems.forEach((item) => names.add(item.name));
  Object.keys(aggregateIngredientsForStatus(data.cooking.recipes, {}, "all")).forEach((item) =>
    names.add(item)
  );
  Object.keys(aggregateIngredientsForStatus(craftingRecipesInGameOrder, {}, "all")).forEach((item) =>
    names.add(item)
  );
  Object.keys(aggregateAllObeliskMaterials()).forEach((item) => names.add(item));
  return [...names].sort((left, right) => left.localeCompare(right));
}

function orderCraftingRecipes(recipes) {
  return [...recipes]
    .map((recipe, sourceIndex) => ({
      recipe,
      sourceIndex,
      gameIndex: CRAFTING_GAME_ORDER_INDEX.get(recipe.name),
    }))
    .sort((left, right) => {
      const leftHasGameOrder = left.gameIndex !== undefined;
      const rightHasGameOrder = right.gameIndex !== undefined;
      if (leftHasGameOrder && rightHasGameOrder) {
        return left.gameIndex - right.gameIndex;
      }
      if (leftHasGameOrder) {
        return -1;
      }
      if (rightHasGameOrder) {
        return 1;
      }
      return left.sourceIndex - right.sourceIndex;
    })
    .map((entry) => entry.recipe);
}

function snapshotEntry(current, total) {
  return {
    current,
    total,
    ratio: total ? current / total : 0,
    done: current,
  };
}

function summaryCard(label, value, detail, progressPercent, className = "") {
  const classSuffix = className ? ` ${escapeAttribute(className)}` : "";
  return `
    <article class="summary-card${classSuffix}">
      <p>${escapeHtml(label)}</p>
      <strong>${escapeHtml(value)}</strong>
      ${detail ? `<p>${escapeHtml(detail)}</p>` : ""}
      ${progressBar(progressPercent / 100)}
    </article>
  `;
}

function renderGeneralCategoryCard(title, value, progressPercent) {
  return `
    <article class="category-card general-category-card">
      <h3>${escapeHtml(title)}</h3>
      <div class="category-meta">
        <span>${escapeHtml(value)}</span>
      </div>
      ${progressBar(progressPercent / 100)}
    </article>
  `;
}

function itemThumb(item, alt) {
  if (!item || !item.imageUrl) {
    return "";
  }
  return `<img class="item-thumb" src="${escapeAttribute(item.imageUrl)}" alt="${escapeAttribute(alt)}" loading="lazy" />`;
}

function renderStepperInput({ id = "", value = 0, min = 0, max = null, step = 1, action, attributes = {} }) {
  const inputId = id ? ` id="${escapeAttribute(id)}"` : "";
  const minAttr = Number.isFinite(min) ? ` min="${min}"` : "";
  const maxAttr = Number.isFinite(max) ? ` max="${max}"` : "";
  const stepAttr = Number.isFinite(step) ? ` step="${step}"` : "";
  const dataActionAttr = action ? ` data-action="${escapeAttribute(action)}"` : "";
  const extraAttrs = Object.entries(attributes)
    .map(([key, attrValue]) => ` data-${escapeAttribute(key)}="${escapeAttribute(String(attrValue))}"`)
    .join("");

  return `
    <div class="number-stepper">
      <input
        type="number"
        value="${escapeAttribute(String(value))}"${inputId}${minAttr}${maxAttr}${stepAttr}${dataActionAttr}${extraAttrs}
      />
      <div class="stepper-stack" aria-hidden="true">
        <button type="button" class="stepper-button" data-stepper-direction="1" aria-label="Increase value">+</button>
        <button type="button" class="stepper-button" data-stepper-direction="-1" aria-label="Decrease value">-</button>
      </div>
    </div>
  `;
}

function progressBar(ratio) {
  const width = Math.max(0, Math.min(ratio, 1)) * 100;
  return `
    <div class="progress-track">
      <div class="progress-fill" style="width: ${width.toFixed(1)}%"></div>
    </div>
  `;
}

function emptyState(message) {
  return `<div class="empty-state">${escapeHtml(message)}</div>`;
}

function matchesSearch(text, query) {
  if (!query) {
    return true;
  }
  return text.includes(query.toLowerCase().trim());
}

function matchesStatus(done, status) {
  if (status === "done") {
    return done;
  }
  if (status === "remaining") {
    return !done;
  }
  if (status === "pantry") {
    return true;
  }
  return true;
}

function countTrueValues(objectMap) {
  return Object.values(objectMap).filter(Boolean).length;
}

function ratioToPercent(ratio) {
  return Math.max(0, Math.min(ratio, 1)) * 100;
}

function clampNumber(value, minimum, maximum) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return minimum;
  }
  return Math.min(Math.max(parsed, minimum), maximum);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatGold(value) {
  return `${formatNumber(value)}g`;
}

function formatDate(value) {
  return new Date(value).toLocaleString();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function updateVisibleTab() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === ui.activeTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === ui.activeTab);
  });
  const hoardModeButton = document.getElementById("hoard-mode-button");
  if (hoardModeButton) {
    hoardModeButton.textContent =
      ui.activeTab === "hoard"
        ? "Back to the Regular Tracker"
        : "Enter the Dangerous Hoarding Pit";
  }
  const isHoardMode = ui.activeTab === "hoard";
  document.body.classList.toggle("is-hoard-mode", isHoardMode);
  const heroEmblem = document.getElementById("hero-emblem-trigger");
  if (heroEmblem) {
    heroEmblem.src = isHoardMode
      ? heroEmblem.dataset.hoardSrc || heroEmblem.src
      : heroEmblem.dataset.regularSrc || heroEmblem.src;
  }
}
