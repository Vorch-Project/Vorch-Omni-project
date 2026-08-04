const cases = [
  {
    id: "audio-ip-2", category: "audio", title: "A podcast with borrowed voices", subtitle: "Two visual identities and two voice references become a synchronized animal podcast.",
    result: "reference_based_generation/audio_ip/case2/generate.mp4", prompt: "reference_based_generation/audio_ip/case2/caption.txt", tags: ["Audio + Video", "Multi-subject"], featured: false,
    refs: [
      ["image", "reference_based_generation/audio_ip/case2/subject_01_image.jpg", "Subject 1"], ["audio", "reference_based_generation/audio_ip/case2/subject_01_audio.wav", "Voice 1"],
      ["image", "reference_based_generation/audio_ip/case2/subject_02_image.jpg", "Subject 2"], ["audio", "reference_based_generation/audio_ip/case2/subject_02_audio.wav", "Voice 2"]
    ]
  },
  {
    id: "audio-driven-1", category: "audio", title: "Conversation, animated from sound", subtitle: "A first frame and driving speech control expressions, timing, and turn-taking.",
    result: "audio-driven/case1/generate.mp4", prompt: "audio-driven/case1/caption.txt", tags: ["Audio → Video", "First frame"],
    refs: [["image", "audio-driven/case1/first_frame.jpg", "First frame"], ["audio", "audio-driven/case1/driving_audio.wav", "Driving audio"]]
  },
  {
    id: "audio-driven-2", category: "audio", title: "A tiny magician finds the beat", subtitle: "Speech, reactions, and performance gestures emerge from a single driving soundtrack.",
    result: "audio-driven/case2/generate.mp4", prompt: "audio-driven/case2/caption.txt", tags: ["Audio → Video", "Animation"],
    refs: [["image", "audio-driven/case2/first_frame.jpg", "First frame"], ["audio", "audio-driven/case2/driving_audio.wav", "Driving audio"]]
  },
  {
    id: "audio-ip-1", category: "audio", title: "Three characters, three voices", subtitle: "Independent identity and timbre references are composed into a tense two-shot scene.",
    result: "reference_based_generation/audio_ip/case1/generate.mp4", prompt: "reference_based_generation/audio_ip/case1/caption.txt", tags: ["Audio + Video", "3 subjects"],
    refs: makeAudioRefs("reference_based_generation/audio_ip/case1", 3)
  },
  {
    id: "audio-ip-3", category: "audio", title: "Voices across visual worlds", subtitle: "A bear, a rabbit, and a robed man retain distinct identities and referenced voices.",
    result: "reference_based_generation/audio_ip/case3/generate.mp4", prompt: "reference_based_generation/audio_ip/case3/caption.rtf", tags: ["Audio + Video", "3 subjects"],
    refs: makeAudioRefs("reference_based_generation/audio_ip/case3", 3)
  },
  {
    id: "audio-ip-4", category: "audio", title: "A difficult conversation", subtitle: "Appearance and voice references jointly control a grounded two-person dialogue.",
    result: "reference_based_generation/audio_ip/case4/generate.mp4", prompt: "reference_based_generation/audio_ip/case4/caption.txt", tags: ["Audio + Video", "Dialogue"],
    refs: makeAudioRefs("reference_based_generation/audio_ip/case4", 2)
  },
  {
    id: "audio-ip-5", category: "audio", title: "An unlikely attic trio", subtitle: "Three stylized references meet with distinct voices, emotion, and dialogue timing.",
    result: "reference_based_generation/audio_ip/case5/generate.mp4", prompt: "reference_based_generation/audio_ip/case5/caption.txt", tags: ["Audio + Video", "3 subjects"],
    refs: makeAudioRefs("reference_based_generation/audio_ip/case5", 3)
  },

  {
    id: "ip-1", category: "reference", title: "Couture in another world", subtitle: "A subject reference and an environment reference are woven into one cinematic shot.",
    result: "reference_based_generation/ip/case1/generate.mp4", prompt: "reference_based_generation/ip/case1/caption.txt", tags: ["Subject reference", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case1", 2)
  },
  {
    id: "ip-2", category: "reference", title: "Wings against the neon", subtitle: "Four references compose a cyberpunk setting, a fantasy heroine, and her luminous wings and wand.",
    result: "reference_based_generation/ip/case2/generate.mp4", prompt: "reference_based_generation/ip/case2/caption.txt", tags: ["4 references", "A/V"],
    refs: [
      ["image", "reference_based_generation/ip/case2/1_reference.png", "Reference 1"],
      ["image", "reference_based_generation/ip/case2/2_reference.jpg", "Reference 2"],
      ["image", "reference_based_generation/ip/case2/3_reference.jpg", "Reference 3"],
      ["image", "reference_based_generation/ip/case2/4_reference.jpg", "Reference 4"]
    ]
  },
  {
    id: "ip-3", category: "reference", title: "Long time no see", subtitle: "Two referenced subjects share a restrained, warm-toned cinematic encounter.",
    result: "reference_based_generation/ip/case3/generate.mp4", prompt: "reference_based_generation/ip/case3/caption.txt", tags: ["2 subjects", "Dialogue"], refs: makeImageRefs("reference_based_generation/ip/case3", 2)
  },
  {
    id: "ip-4", category: "reference", title: "Spring beneath the cherry tree", subtitle: "Three references define the cast and setting while preserving a natural romantic interaction.",
    result: "reference_based_generation/ip/case4/generate.mp4", prompt: "reference_based_generation/ip/case4/caption.txt", tags: ["3 references", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case4", 3)
  },
  {
    id: "ip-5", category: "reference", title: "The ancient covenant", subtitle: "Character and environment references become a dense, effects-rich fantasy ritual.",
    result: "reference_based_generation/ip/case5/generate.mp4", prompt: "reference_based_generation/ip/case5/caption.txt", tags: ["3 references", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case5", 3)
  },
  {
    id: "ip-6", category: "reference", title: "Spring turns toward the camera", subtitle: "A single subject reference guides identity, embroidered costume detail, and a graceful courtyard performance.",
    result: "reference_based_generation/ip/case6/generate.mp4", prompt: "reference_based_generation/ip/case6/caption.txt", tags: ["Subject reference", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case6", 1)
  },
  {
    id: "ip-7", category: "reference", title: "Morning light", subtitle: "A character reference is orchestrated into a gentle anime scene with flowing hair, lace, and camera motion.",
    result: "reference_based_generation/ip/case7/generate.mp4", prompt: "reference_based_generation/ip/case7/caption.txt", tags: ["Subject reference", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case7", 1)
  },
  {
    id: "ip-8", category: "reference", title: "The signal is getting stronger", subtitle: "One visual identity anchors a suspenseful cyberpunk walk and a tightly framed performance.",
    result: "reference_based_generation/ip/case8/generate.mp4", prompt: "reference_based_generation/ip/case8/caption.txt", tags: ["Subject reference", "A/V"], refs: makeImageRefs("reference_based_generation/ip/case8", 1)
  },
  {
    id: "ip-9", category: "reference", title: "Meet me at sunset", subtitle: "Two contrasting subject references share a warm, restorative encounter by the sea.",
    result: "reference_based_generation/ip/case9/generate.mp4", prompt: "reference_based_generation/ip/case9/caption.txt", tags: ["2 subjects", "Dialogue"], refs: makeImageRefs("reference_based_generation/ip/case9", 2)
  },

  {
    id: "multi-1", category: "generation", title: "From one frame to the next", subtitle: "Two ordered frame conditions guide a continuous dramatic exchange.",
    result: "reference_based_generation/multi_frames/case1/generate.mp4", prompt: "reference_based_generation/multi_frames/case1/caption.txt", tags: ["Multi-frame", "A/V"], refs: [["image", "reference_based_generation/multi_frames/case1/image.png", "Frame 1"], ["image", "reference_based_generation/multi_frames/case1/image_2.png", "Frame 2"]]
  },
  {
    id: "multi-2", category: "generation", title: "A warning before impact", subtitle: "Frame references anchor a multi-shot 3D scene while the camera and action evolve.",
    result: "reference_based_generation/multi_frames/case2/generate.mp4", prompt: "reference_based_generation/multi_frames/case2/caption.txt", tags: ["Multi-frame", "A/V"], refs: [["image", "reference_based_generation/multi_frames/case2/image.png", "Frame 1"], ["image", "reference_based_generation/multi_frames/case2/image_2.png", "Frame 2"]]
  },
  {
    id: "multi-3", category: "generation", title: "One line becomes a band", subtitle: "A first and last frame constrain a graphic, continuous one-shot transition.",
    result: "reference_based_generation/multi_frames/case3/generate.mp4", prompt: "reference_based_generation/multi_frames/case3/caption.txt", tags: ["First + last", "One shot"], refs: [["image", "reference_based_generation/multi_frames/case3/image.jpg", "First frame"], ["image", "reference_based_generation/multi_frames/case3/image_2.jpg", "Last frame"]]
  },
  ...[
    [1, "The last samurai", "A fluid cyberpunk wuxia battle unfolds from one image."],
    [2, "Five across the snow", "A stable ensemble run extends from a single game-cinematic frame."],
    [3, "Spear against the glow", "A tactical combat beat develops through continuous camera motion."],
    [4, "Starchy offers advice", "A single animated frame becomes a dialogue scene with synchronized speech."]
  ].map(([n,title,subtitle]) => ({
    id: `one-shot-${n}`, category: "generation", title, subtitle,
    result: `reference_based_generation/one_shot/case${n}/generate.mp4`, prompt: `reference_based_generation/one_shot/case${n}/caption.txt`, tags: ["One shot", n === 4 ? "Dialogue" : "Motion"],
    refs: [["image", `reference_based_generation/one_shot/case${n}/image.${n === 4 ? "png" : "jpg"}`, "First frame"]]
  })),

  ...[
    [1, "A dancer, re-cast", "ref_img.png"], [2, "Motion in a new identity", "ref_img.png"], [3, "A feline performance", "ref_img.png"]
  ].map(([n,title,image]) => ({
    id: `replace-${n}`, category: "replacement", title, subtitle: "The source motion and setting are preserved while the principal subject is replaced.",
    source: `reference_based_generation/replace/case${n}/cond_video.mp4`, result: `reference_based_generation/replace/case${n}/result.mp4`, prompt: `reference_based_generation/replace/case${n}/prompt.txt`, tags: ["Subject replacement", "Motion"], portrait: true,
    refs: [["image", `reference_based_generation/replace/case${n}/${image}`, "New subject"]]
  })),
  ...[
    [1, "A scientist enters the room", ["image.png"]], [2, "A visitor by the waterwheel", ["image.png"]], [3, "Girl meets robot", ["image.jpeg", "image_2.jpeg"]]
  ].map(([n,title,images]) => ({
    id: `transform-${n}`, category: "transform", title, subtitle: "A source clip is transformed while referenced identity and scene constraints remain explicit.",
    source: `reference_based_generation/transform_ip/case${n}/condition.mp4`, result: `reference_based_generation/transform_ip/case${n}/generate.mp4`, prompt: `reference_based_generation/transform_ip/case${n}/caption.txt`, tags: ["Video transform", "Identity"],
    refs: images.map((name,i) => ["image", `reference_based_generation/transform_ip/case${n}/${name}`, `Reference ${i+1}`])
  })),

  ...[
    [1, "A tactical wardrobe change"], [2, "Make room for a penguin"]
  ].map(([n,title]) => ({
    id: `edit-ip-${n}`, category: "edit", title, subtitle: n === 1 ? "Edit one garment while keeping the scene, cast, motion, and lighting intact." : "Insert a referenced character without disturbing the original scene.",
    source: `video_edit/edit_with_ip/case${n}/source_video.mp4`, result: `video_edit/edit_with_ip/case${n}/generate.mp4`, prompt: `video_edit/edit_with_ip/case${n}/caption.txt`, tags: ["Reference edit", "Local change"],
    refs: [["image", `video_edit/edit_with_ip/case${n}/image.png`, "Edit reference"]]
  })),
  ...[
    [1, "An igloo under the aurora"], [2, "Santorini, recolored"], [3, "One leaf turns white"], [4, "Wake up and stretch"], [5, "A conversation moves outdoors"]
  ].map(([n,title]) => ({
    id: `semantic-${n}`, category: "edit", title, subtitle: "Instruction-guided semantic editing with the surrounding content preserved.",
    source: `video_edit/semantic_edit/case${n}/source_video.mp4`, result: `video_edit/semantic_edit/case${n}/generate.mp4`, prompt: `video_edit/semantic_edit/case${n}/${n === 1 ? "captioin" : "caption"}.txt`, tags: ["Semantic edit", n === 5 ? "Audio + Video" : "Video"], refs: []
  })),
  ...[
    [1, "A run rendered in oil"], [2, "Hiking into cyberpunk"]
  ].map(([n,title]) => ({
    id: `style-${n}`, category: "edit", title, subtitle: "Motion and composition remain stable while the full visual language changes.",
    source: `video_edit/style_edit/case${n}/source_video.mp4`, result: `video_edit/style_edit/case${n}/generate.mp4`, prompt: `video_edit/style_edit/case${n}/caption.txt`, tags: ["Style edit", "Motion preserved"], refs: []
  })),

  {
    id: "extension-1", category: "extension", title: "The award after the meal", subtitle: "Continue a stop-motion story from the final frame of an observed prefix.",
    source: "video_extension/case1/condition.mp4", result: "video_extension/case1/generate.mp4", prompt: "video_extension/case1/caption.txt", tags: ["Temporal extension", "Video"], refs: []
  },
  {
    id: "extension-2", category: "extension", title: "The map points onward", subtitle: "A source clip supplies continuous temporal context for the next beat of the story.",
    source: "video_extension/case2/condition.mp4", result: "video_extension/case2/generate.mp4", prompt: "video_extension/case2/caption.txt", tags: ["Temporal extension", "A/V"], refs: []
  }
];

function makeAudioRefs(base, count) {
  return Array.from({length: count}, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return [["image", `${base}/subject_${n}_image.jpg`, `Subject ${i + 1}`], ["audio", `${base}/subject_${n}_audio.wav`, `Voice ${i + 1}`]];
  }).flat();
}

function makeImageRefs(base, count) {
  return Array.from({length: count}, (_, i) => ["image", `${base}/${i + 1}_reference.jpg`, `Reference ${i + 1}`]);
}

const translations = {
  "audio-driven/case1/caption.txt": `A photorealistic behind-the-scenes studio scene. A blonde woman in a white sleeveless V-neck top, wearing a delicate gold necklace, holds a black-and-gold red lipstick toward the camera and explains: “But that has to be balanced with softer, more pliable waxes, like beeswax, which also acts as an emollient and improves the glide factor. It's this constant negotiation between being rock solid in the container and then spreading smoothly when you apply it.” She is expressive, professional, and friendly. A handsome man beside her in a black shirt smiles and adds: “So the texture, you know, matte versus creamy or sheer versus opaque, that's all dictated by the ratio of these waxes and oils.” Use a stable, fixed medium shot with blue dotted lights and studio equipment in the background. No animated subtitles. The fluent English conversation explains the science behind lipstick texture.`,
  "audio-driven/case2/caption.txt": `A 3D animated scene with Chinese-inspired aesthetics. A confident little gray mouse with large ears wears an ornate blue embroidered Chinese robe and performs before a red-and-gold cloud-patterned backdrop. Moving energetically to the rhythm, it calls out: “A clam eating a telephone.” “A Persian chandelier!” “A lamp!” “A soup factory!” and “A continental breakfast!” When it shouts “A chicken!” and hears a high-pitched bird call in response, it spreads its hands with enormous satisfaction and says, “Oh, I am so good at this.” Show matching English subtitles throughout, with a crisp magical sound after each phrase. Keep a static medium shot that captures the mouse's lively expression and performance; the mood is cheerful and playful.`,

  "reference_based_generation/audio_ip/case1/caption.txt": `Subjects: a young man with spiky brown-blond hair and glasses using Voice Reference 1; an elderly white-haired man in a navy polo using Voice Reference 2; and a bald, heavily bearded man in a dark hooded jacket using Voice Reference 3. In a dim, narrow study, the first man anxiously asks the elderly man, “Are you really sure about this?” The elderly man replies in a weary, raspy voice, “These old bones of mine don't lie.” Cut to the bearded man in shadow, who commands, “Just follow the plan.” The first man answers off-screen, “All right, I understand.” Keep the camera fixed in each shot, with ventilation hum and faint rain against a window.`,
  "reference_based_generation/audio_ip/case2/caption.txt": `Subjects: a cheerful Golden Retriever in black headphones using Voice Reference 1, and a serious blue-eyed Ragdoll cat in headphones using Voice Reference 2. Place them side by side at a warm, softly lit wooden podcast desk with microphones. The dog opens enthusiastically: “Welcome to Pet Radio!” The cat calmly suggests, “Shall we talk about dried fish snacks?” The dog perks up and replies, “I love bone biscuits most!” The cat maintains a professional stare and mutters, “Golden Retriever, be serious.” Include the quiet hum of studio equipment and the soft rhythmic thump of a happy tail.`,
  "reference_based_generation/audio_ip/case3/caption.rtf": `Subjects: a fuzzy light-brown teddy bear with a cynical, raspy middle-aged voice; a determined gray rabbit in a blue tactical uniform with a bright young female voice; and a grave, robed man with a high bun, goatee, white fur collar, and deep resonant voice. In a warm but tense mountain cabin, the bear sighs, “This work is far too exhausting.” The rabbit meets his gaze and encourages him: “Pull yourself together, partner!” Cut to a close-up of the robed man as firelight moves across his face. He says slowly, “This is our last hope.” Add rhythmic fireplace crackle and distant wind outside.`,
  "reference_based_generation/audio_ip/case4/caption.txt": `Subjects: a worried young woman with long dark hair using the gentle female Voice Reference 1, and a tanned middle-aged man with thinning hair and a goatee using the deep male Voice Reference 2. Outdoors amid faint traffic and cicadas, she asks urgently, “Sir, is there really no room to negotiate?” Cut to the man's fixed close-up. He responds, “Those are the rules; there is nothing I can do.” Her off-screen voice trembles: “But that is all my savings.” He briefly looks down, then concludes firmly, “Go home. Don't waste any more time here.”`,
  "reference_based_generation/audio_ip/case5/caption.txt": `Subjects: a worried 3D cowboy toy using a frantic masculine voice; a platinum-blonde animated woman with a side braid using a calm, sincere female voice; and a skeptical fuzzy brown teddy bear using a deep, grumpy voice. Gather them in a dim attic with soft cinematic light. The cowboy fidgets with his hat and whispers, “It's too cold here, isn't it?” The woman reassures him, “Don't worry, I'll protect everyone.” The bear rolls his eyes and growls, “Enough talking—find the exit!” Add faint wind outside and creaking floorboards.`,

  "reference_based_generation/ip/case1/caption.txt": `Create a premium photorealistic cinematic video that contrasts elegant high fashion with a bleak science-fiction industrial base, using deep gray and cool blue tones. From 0–4 s, track sideways in a medium shot as the elegant woman from Image 1—black wavy hair, fitted black coat with an oversized bow, layered pearls, pearl earrings, and red lips—walks through the dim industrial cafeteria from Image 2. Cold ceiling light catches her pearls while heels strike the metal floor; add low electronic ambience, metallic echoes, and ventilation hum. From 4–7 s, reveal a huge curved window overlooking the blue-green bioluminescent alien forest from Image 2. She slowly turns toward it; add an ethereal female vocal and a distant creature roar. From 7–10 s, move to a close-up of her profile and red lips in blue rim light. She stops, exhales faintly, and says in a low, magnetic mature voice, “The rainy season is almost here.” The ambience swells and cuts out as she walks into shadow. No subtitles.`,
  "reference_based_generation/ip/case2/caption.txt": `Create a highly detailed, realistic 3D fantasy animation with festive red accents, icy blue magic, layered lighting, and a solemn yet youthful atmosphere. From 0–5 s, slowly push forward along the cyberpunk neon street in Image 1: an old rain-soaked avenue lined with vintage European buildings covered in intricate blue technological light strips and huge pink-violet holographic signs. Fine rain becomes colored sparks in the neon light, and puddles mirror the city. Place the elf girl in the center, using the face from Image 3 and clothing from Image 2: straight black bangs, red crystal horns, pointed ears, golden eyes, a modified black scholar-style dress, white crossed collar, and red belt. She smiles confidently at the camera and says in a clear, resolute young female voice, “Neon as my blade, wings as my sail.” Add grand orchestral music and subtle spatial reverberation. From 5–10 s, hold a medium shot on the same street as the huge layered icy-blue angel wings and glowing star-filled wand from Image 4 appear. Neon lights along the street brighten in sequence like a moving wave. She declares in an ethereal, solemn voice, “Wherever darkness reaches, I will arrive.” Let the music rise into a female choral climax, with the rush of opening wings and crisp bell-like magical energy. No subtitles.`,
  "reference_based_generation/ip/case3/caption.txt": `Create a warm, photorealistic period-film scene with diffused light and nostalgic texture. From 0–3 s, pan across an elegant mansion corridor as the poised East Asian woman from Image 1, wearing a fitted black wool coat, oversized bow, pearls, and red lipstick, approaches the gentle European woman from Image 2, who wears an oatmeal cardigan, cream collared shirt, gray wool skirt, loafers, and a pearl hair clip. Their eyes meet; use soft cello and piano with crisp footsteps on walnut flooring. From 3–7 s, hold a medium shot as they stop in warm side light. The first woman says calmly, “Long time no see.” The second blushes, tucks back a curl, and answers softly, “Yes, long time no see.” From 7–10 s, glide slowly past them as they cross and continue in opposite directions. Emphasize the contrast between black wool, soft knitwear, straight dark hair, and light curls. Let the footsteps and music fade into a distant wind chime. No subtitles.`,
  "reference_based_generation/ip/case4/caption.txt": `Create a cinematic, photorealistic Chinese-style short with fresh, romantic spring light. From 0–4 s, show the enormous blooming cherry tree and blue flower meadow from Image 2. Beneath it, the young man from Image 1 in a black Tang-style jacket faces the young woman from Image 3 in a pale green hanfu. Petals drift as he says warmly, “That shade of green brings such life to the quiet spring mountains.” Add guzheng, bamboo flute, breeze, and rustling petals. From 4–7 s, slowly push in as he offers her a blossom-covered branch and says, “Here, for you.” Add a light pipa flourish. From 7–10 s, hold close as she accepts it, smells the flowers, and looks back at him. In a soft, delighted voice she says, “Look, the cherry blossoms fill the whole grove—as if they mean to claim every bit of spring in the garden.” End at the romantic moment with distant birdsong. No subtitles.`,
  "reference_based_generation/ip/case5/caption.txt": `Create an epic, cinematic 3D fantasy ritual in a deep-blue underground cavern with dark-red magic and sacred gold light. Begin from Image 3. From 0–3 s, push steadily toward the vast circular altar from Image 2, with concentric rings of blood-red energy, ancient runes, dragon pillars, chains, lanterns, and water reflections. At the center stands the noble young man from Image 1 / Image 3: long black hair, silver crown, cream inner robe, translucent black outer robe embroidered with gold celestial patterns, and a jade belt. As he forms complex hand seals inside a trembling golden beam, he declares in a deep magnetic voice, “The ancient covenant sleeping in the abyss shall be reborn at this moment, as golden dawn breaks.” Add low orchestra, distant bells, underground wind, and fire crackle. From 3–5 s, cut to a fixed bust close-up. Air spirals around his final hand seal; his eyes flare icy blue and emit tiny arcs as pressure lifts his hair. He asks coldly, “Is the pact we have awaited for a thousand years finally about to appear?” Intensify the drums, magical charge, and low thunder.`,
  "reference_based_generation/ip/case6/caption.txt": `Create a cinematic, photorealistic period scene with refined Eastern classical aesthetics, warm spring sunlight, soft natural color, and a tranquil, poetic mood. From 0–5 s, slowly push in at eye level through an elegant courtyard with blurred peach blossoms, blue-gray tiled corridors, dappled sunlight, and the suggestion of floral fragrance. The young East Asian woman from Image 1 stands with her back to the camera: fair skin, an intricate classical updo decorated with white flowers and dangling gold-and-pearl ornaments, an ivory crossed-collar high-waisted hanfu, a light tea-colored gauze outer robe, delicate floral embroidery, and a pale green sash. From 0–2 s, she gently touches a white flower in her hair and turns to the right, letting the gauze sleeves and skirt move in the breeze. Use soothing guzheng and bamboo flute, leaves rustling, and soft silk movement. From 2–5 s, she faces the camera with bright, expectant eyes, tilts her head playfully, and asks in a gentle young female voice, “The spring breeze feels wonderfully refreshing today, don't you think?” Add birdsong and the light chime of her hair ornaments. From 5–8 s, smoothly orbit 360 degrees around her as she smiles warmly, showing the drape and movement of the ivory gauze hanfu while peach petals drift through golden light. Add soft strings, breeze, and falling-petal ambience. From 8–10 s, finish the orbit and rapidly push into an extreme close-up of the floral embroidery on the sash, clearly revealing the silk, dimensional threadwork, and refined craftsmanship as the music gently fades. No subtitles.`,
  "reference_based_generation/ip/case7/caption.txt": `Create a refined Japanese anime-style sequence with bright, soft color, warm morning sunlight, elegant pacing, and a fresh, restorative mood. From 0–5 s, slowly push from a medium shot toward the pink-haired young woman from Image 1 inside a bright Japanese room. She has long softly curled pink hair, a playful ahoge, clear blue eyes, and a peaceful expression. She wears a long white lace robe over a fitted white slip, with elaborate lace at the neckline, wide sleeves, and layered hem, and stands barefoot near translucent curtains and light wood furnishings. From 0–2 s, she turns slowly from profile to face forward as a morning breeze moves her hair, sleeves, and layered lace. Use gentle piano and flute with the rustle of sheer curtains. From 2–5 s, she looks warmly toward the camera, tilts her head, and says in a sweet, slightly sleepy young voice, “The morning breeze feels so refreshing, doesn't it?” Let the piano brighten and add soft fabric movement. From 5–7 s, she lightly lifts both sides of the lace hem and steps forward gracefully, with delicate barefoot steps on the wooden floor and light string pizzicato joining the score. From 7–10 s, orbit smoothly through 360 degrees around her, revealing the motion of her curled hair and layered robe. At the backlit angle, let golden sunlight pass through the light fabric and form a soft dreamlike rim light. End warmly with continuing breeze and fluttering cloth. No subtitles.`,
  "reference_based_generation/ip/case8/caption.txt": `Create a cinematic cyberpunk short set in a future city at dusk, combining dark orange and gray-blue twilight with saturated pink-violet and icy-blue neon. Keep the tone suspenseful, tense, and cool. From 0–5 s, begin with a wide shot and push steadily toward the young man from Image 1 walking directly toward camera along a wet avenue. He has slightly tousled short black hair, sharp features, and a guarded expression, and wears a structured black tactical jacket with flap pockets and metal zippers, a gray crew-neck shirt, fitted tactical trousers, strapped thigh pouches, and heavy black boots. Surround him with steel towers, holographic signs, rotating projections, neon reflections in puddles, and distant aircraft trails. His steps are controlled and forceful while he scans ahead. Let alternating pink and blue holographic light reveal the stiff fabric and folds of his clothing. Use low cyberpunk synths with a heavy heartbeat-like bass, boots splashing through water, distant city noise, and passing aircraft. From 5–10 s, cut to a fixed dramatic facial close-up with neon bokeh behind him and hard side-backlight outlining his jaw and nose. He turns slightly, searches the area, locks his gaze off-camera left, and says in a low, vigilant young male voice, “The signal is getting stronger… they're nearby.” Accelerate the synth rhythm and low frequencies. As he speaks, he reaches down decisively and adjusts the leather clasp on the tactical pouch at his thigh. Add a faint electrical buzz from nearby holographic signs. No subtitles.`,
  "reference_based_generation/ip/case9/caption.txt": `Create a polished, restorative animated short in warm orange sunset light over a honey-colored sea, with soft detail, calm pacing, and an easygoing mood. From 0–5 s, slowly push from a wide shot to a medium shot on a broad seaside wooden promenade. The stylized young man from Image 1 leans against the left railing with his back to camera, watching the sunset. He has tousled dark-brown hair, translucent black sunglasses resting on his head, an open red short-sleeved shirt, a black cord necklace, a flower-and-wineglass brooch, light-gray shorts, and black sandals. From 0–2.5 s, he rests both hands on the rough railing as sea wind lifts his shirt and hair. Use soothing acoustic guitar and piano with layered waves and soft wind. From 2.5–5 s, footsteps approach from the right. He lazily turns as the mature Asian man from Image 2 enters: neatly styled short black hair, strong features, a structured black zip jacket over a dark-gray checked shirt, black jeans, polished shoes, and a silver mechanical watch. Let his footsteps sound clearly on the hollow boards while the guitar becomes more expectant. From 5–7.5 s, continue pushing into a close two-shot as they stop one step apart in warm rim light. The older man looks down gently; the younger man raises his chin, meets his gaze, and forms a relaxed, affectionate smile. From 7.5–10 s, the younger man tilts his head, catching orange light in his sunglasses, and invites him in a soft, smiling voice: “The sunset show is about to begin. Want to walk together?” Let the piano swell, with a distant gull and the continuing sound of the tide. No subtitles.`,

  "reference_based_generation/replace/case1/prompt.txt": `Refer to Video 1 and keep its background unchanged. Replace the main subject with the young woman in Image 1, who has long black hair, floral hair ornaments, a pink-and-white traditional hanfu, and a green sash. Preserve the original motion exactly.`,
  "reference_based_generation/replace/case2/prompt.txt": `Refer to Video 1 and keep its background unchanged. Replace the main subject with the anime-style beast-eared girl in Image 1: long pink hair, a short white dress with a blue cape, floral headpiece, and black ankle boots. Preserve the original motion exactly.`,
  "reference_based_generation/replace/case3/prompt.txt": `Refer to Video 1 and keep its background unchanged. Replace the main subject with the tabby kitten in Image 1, wearing an ornate pearl-and-gem headdress and jeweled collar. Preserve the original motion exactly.`,
  "reference_based_generation/transform_ip/case1/caption.txt": `Keep the white-haired woman and the bespectacled man in black seated at the conference table from Video 1, still inside the bright meeting room. Introduce the 3D cartoon scientist from Image 1 on the right: yellow viscous liquid-like hair, a large round red nose, and a white lab coat covered in black stains. He walks in from the right carrying the glowing black tablet from the reference, stops beside the table, points at its screen, and discusses it seriously with them. The two seated people turn toward him. Shift the camera slightly right, then hold a fixed medium shot containing all three. No speech; use subtle meeting-room ambience.`,
  "reference_based_generation/transform_ip/case2/caption.txt": `Keep the little girl in a penguin onesie and the forest waterwheel setting from Video 1. Add a mysterious man to her right, using the refined face, tied long black hair, pearl crown, and pale-blue cloud-patterned white silk robe from Image 1. Change to a medium-wide shot: the girl stands beside the rocks and looks up in surprise; the man holds his hands behind his back and looks down at her calmly. The girl asks in a curious childlike voice, “Big brother, are you an immortal?” He replies in a clear, warm young male voice, “Young lady, may I ask what place this is?” Show white Chinese subtitles for both lines. Add quiet waterwheel sounds and forest birds.`,
  "reference_based_generation/transform_ip/case3/caption.txt": `Perform reference-guided video transformation. Against the background from Image 1, the little girl from Video 1 says to the robot from Image 2, “You are so tall.”`,

  "video_edit/edit_with_ip/case1/caption.txt": `Preserve the indoor staircase, cast layout, and every character's motion and pose from Video 1, especially the central man walking hand in hand with the woman on the right. Keep both women's clothing, hair, and expressions unchanged. Replace only the man's original clothing with the matte-black technical tactical jacket in the reference image, including its webbing, buckles, multiple pockets, and fine nonreflective material. Keep the framing, camera movement, lighting, color, and every other element identical to Video 1.`,
  "video_edit/edit_with_ip/case2/caption.txt": `Preserve Video 1's layout: the white leather sofa, white brick wall with string lights, and pink floor decorations. Keep its framing, camera movement, and bright interior lighting. Add the penguin from the reference image, matching its black-and-white plumage, orange neck patch, and bright yellow knitted scarf. Integrate it naturally and keep every other element identical to Video 1.`,
  "video_edit/semantic_edit/case1/captioin.txt": `Keep the polar wilderness, distant mountain silhouettes, moving green aurora, starry sky, wide fixed framing, and cool lighting from Video 1 completely unchanged. Add a small domed igloo at the center of the snowy ground. Build it from neat white snow blocks that blend naturally into the surrounding snow and catch a faint green reflection from the aurora. Change nothing else.`,
  "video_edit/semantic_edit/case2/caption.txt": `Preserve the Santorini sunset from Video 1, including the orange and blue-violet sky, distant deep-blue sea, hillside building layout, framing, camera movement, and lighting. Change every iconic white-walled building to emerald green while retaining its lime-plaster texture. Keep the restaurant's warm yellow lights, visitors beneath the umbrellas, and their actions unchanged, and integrate the new building color naturally.`,
  "video_edit/semantic_edit/case3/caption.txt": `Keep the scene, layout, framing, camera motion, fine water ripples, and visible multicolored pebbles from Video 1 identical. Change only the large brown dead leaf at the center to pure white. Preserve its outline, veins, floating state, natural light, and every other color and visual element.`,
  "video_edit/semantic_edit/case4/caption.txt": `Keep the orange tabby kitten from Video 1 in a bright sunny room. Use a top-down wide shot that slowly pushes toward a medium shot, with a large circular woven rug and wooden floor at the edge. The kitten slowly opens its eyes, stands, stretches its forelegs forward, arches its back, curls the tip of its tail upward, and looks comfortably sleepy. Add crisp morning birdsong and one soft, extended meow during the stretch.`,
  "video_edit/semantic_edit/case5/caption.txt": `Recompose both audio and video. Move the scene outdoors to an old stone bridge with lion-head railings, a clear river, green willows moving in the breeze, and bright sun. The two people stand face to face. The smiling man says in English, “It's a nice day!” The woman frowns slightly, fans her cheek, and answers in English, “A little hot.” Use a medium-wide shot that shows their interaction and the bridge, slowly pushing forward. Add birds and leaves rustling in the wind.`,
  "video_edit/style_edit/case1/caption.txt": `Preserve the brown curly-haired dog running in Video 1, the red-brick building, and the three women seated on the wooden bench. Transform the entire video into an oil painting with visible brush texture, rich layered color, soft artistic light, and a warmer, more saturated palette. Preserve the original camera movement tracking the dog and keep its motion and poses identical.`,
  "video_edit/style_edit/case2/caption.txt": `Preserve the male hiker from Video 1—sun hat, black backpack, light shirt, dark trousers—and his walking motion. Transform the whole scene into cyberpunk: add neon elements to the mountains and rocky ground, shift toward blue-violet hues with contrasting warm and cool light, and add futuristic floating data or holographic projections in the sky. Keep the framing, camera movement, and the subject's position identical.`,
  "video_extension/case1/caption.txt": `Continue from the final frame of Video 1. Keep the furry dark-gray black bear in a white chef hat and red vest, and the brown-gray raccoon also wearing a chef hat. Let the pink heart effect quickly clear back to the sunny forest meadow. The bear recovers from its emotional closed-eye pose, wipes away its tears, smiles with relief, picks up a golden felt acorn medal from the table, hangs it around the raccoon's neck, and pats the raccoon's shoulder in approval. The raccoon looks at the medal, smiles shyly, and scratches its head. Preserve the stop-motion style. No speech; use warm, soothing music.`,
  "video_extension/case2/caption.txt": `Continue the video. The little girl takes out a map, raises her hand, points ahead, and says: “According to the map, the treasure is over there!”`
};

const filters = [
  ["all", "All results"], ["audio", "Audio-driven Animation"], ["reference", "Image Reference Synthesis"], ["generation", "Multi-frame Generation"], ["replacement", "Character Replacement"], ["transform", "Video Reference Synthesis"], ["edit", "Video Editing"], ["extension", "Temporal Extension"]
];

const gallery = document.querySelector(".gallery");
const filterEl = document.querySelector(".filters");
const loadMore = document.querySelector(".load-more");
const dialog = document.querySelector(".prompt-dialog");
const dialogTitle = dialog.querySelector("#dialog-title");
const dialogContent = dialog.querySelector(".dialog-content");
const imageDialog = document.querySelector(".image-dialog");
const imageDialogImage = imageDialog.querySelector("img");
const imageDialogCaption = imageDialog.querySelector("figcaption");
let activeFilter = "all";
let visibleCount = 8;

filters.forEach(([key, label], index) => {
  const button = document.createElement("button");
  button.className = `filter${index === 0 ? " active" : ""}`;
  button.type = "button";
  button.role = "tab";
  button.ariaSelected = String(index === 0);
  button.dataset.filter = key;
  button.textContent = label;
  filterEl.append(button);
});

filterEl.addEventListener("click", event => {
  const button = event.target.closest(".filter");
  if (!button) return;
  activeFilter = button.dataset.filter;
  visibleCount = activeFilter === "all" ? 8 : 6;
  filterEl.querySelectorAll(".filter").forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.ariaSelected = String(selected);
  });
  renderGallery();
});

loadMore.addEventListener("click", () => {
  visibleCount += 8;
  renderGallery();
});

function renderGallery() {
  const filtered = activeFilter === "all" ? cases : cases.filter(item => item.category === activeFilter);
  const shown = filtered.slice(0, visibleCount);
  gallery.innerHTML = shown.map((item, index) => caseTemplate(item, index)).join("");
  loadMore.hidden = shown.length >= filtered.length;
  bindCardActions();
}

function caseTemplate(item, index) {
  const visual = item.source ? comparisonTemplate(item) : `
    <div class="case-visual">
      <video class="result-video" src="${item.result}" controls playsinline preload="metadata"></video>
      <span class="media-label">Generated result</span>
    </div>`;
  const refs = item.refs?.length ? `<div class="reference-strip" aria-label="Conditioning references">${referencesTemplate(item.refs)}</div>` : "";
  return `
    <article class="case-card${item.featured && activeFilter === "all" ? " featured" : ""}" data-id="${item.id}" style="animation-delay:${Math.min(index * 35, 280)}ms">
      ${visual}
      <div class="case-meta">
        ${refs}
        <div class="case-actions">
          <button class="prompt-button" type="button">View prompt ↗</button>
          ${item.source ? `<button class="sync-button" type="button">Play both</button>` : ""}
        </div>
      </div>
    </article>`;
}

function comparisonTemplate(item) {
  return `<div class="case-visual comparison${item.portrait ? " portrait" : ""}">
    <div><video src="${item.source}" controls muted playsinline preload="metadata"></video><span class="media-label">Source</span></div>
    <div><video src="${item.result}" controls playsinline preload="metadata"></video><span class="media-label">Generated</span></div>
  </div>`;
}

function referencesTemplate(refs) {
  const rendered = [];
  for (let i = 0; i < refs.length; i += 1) {
    const current = refs[i];
    const next = refs[i + 1];
    if (current[0] === "image" && next?.[0] === "audio") {
      rendered.push(referencePairTemplate(current, next));
      i += 1;
    } else {
      rendered.push(referenceTemplate(current));
    }
  }
  return rendered.join("");
}

function referencePairTemplate([, imageSource, imageLabel], [, audioSource, audioLabel]) {
  return `<div class="reference-item reference-pair"><small>${imageLabel}</small><button class="reference-image-button" type="button" data-image-src="${imageSource}" data-image-label="${imageLabel}" aria-label="View ${imageLabel} full size" title="View full image"><img src="${imageSource}" alt="${imageLabel}" loading="lazy"></button><div class="reference-audio-shell"><button class="reference-audio-button" type="button" data-audio-toggle data-audio-label="${audioLabel}" aria-label="Play ${audioLabel}" title="Play audio reference"><span class="audio-play-icon" aria-hidden="true"></span><span class="audio-pause-icon" aria-hidden="true"></span><span class="reference-audio-label">${audioLabel}</span></button><audio src="${audioSource}" preload="none"></audio></div></div>`;
}

function referenceTemplate([type, source, label]) {
  if (type === "image") return `<div class="reference-item"><small>${label}</small><button class="reference-image-button" type="button" data-image-src="${source}" data-image-label="${label}" aria-label="View ${label} full size" title="View full image"><img src="${source}" alt="${label}" loading="lazy"></button></div>`;
  return `<div class="reference-item audio"><div class="reference-audio-shell"><button class="reference-audio-button" type="button" data-audio-toggle data-audio-label="${label}" aria-label="Play ${label}" title="Play audio reference"><span class="audio-play-icon" aria-hidden="true"></span><span class="audio-pause-icon" aria-hidden="true"></span><span class="reference-audio-label">${label}</span></button><audio src="${source}" preload="none"></audio></div></div>`;
}

function bindCardActions() {
  gallery.querySelectorAll(".case-card").forEach(card => {
    const item = cases.find(entry => entry.id === card.dataset.id);
    card.querySelector(".prompt-button").addEventListener("click", () => openPrompt(item));
    card.querySelectorAll(".reference-image-button").forEach(button => {
      button.addEventListener("click", () => openImage(button.dataset.imageSrc, button.dataset.imageLabel));
    });
    card.querySelectorAll("[data-audio-toggle]").forEach(button => {
      const shell = button.closest(".reference-audio-shell");
      const audio = shell?.querySelector("audio");
      const label = button.dataset.audioLabel || "audio";
      const setPlaying = playing => {
        button.classList.toggle("is-playing", playing);
        button.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${label}`);
        button.title = `${playing ? "Pause" : "Play"} audio reference`;
      };
      button.addEventListener("click", () => {
        if (!audio) return;
        const shouldPlay = audio.paused;
        document.querySelectorAll(".reference-audio-shell audio").forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          }
        });
        if (shouldPlay) {
          audio.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          audio.pause();
          setPlaying(false);
        }
      });
      audio?.addEventListener("pause", () => setPlaying(false));
      audio?.addEventListener("ended", () => {
        audio.currentTime = 0;
        setPlaying(false);
      });
    });
    const sync = card.querySelector(".sync-button");
    if (sync) sync.addEventListener("click", () => {
      const videos = [...card.querySelectorAll(".comparison video")];
      const playing = videos.some(video => !video.paused);
      videos.forEach(video => {
        video.currentTime = 0;
        if (playing) video.pause(); else video.play().catch(() => {});
      });
      sync.textContent = playing ? "Play both" : "Pause both";
    });
  });
}

async function openPrompt(item) {
  dialogTitle.textContent = item.title;
  dialogContent.innerHTML = `<p class="prompt-loading">Loading the original instruction…</p>`;
  dialog.showModal();
  let original = "";
  const translation = translations[item.prompt];
  if (!item.prompt.endsWith(".rtf")) {
    try {
      const response = await fetch(item.prompt);
      if (response.ok) original = await response.text();
    } catch (_) { /* File URLs do not permit fetch; the translated prompt remains available. */ }
  }
  if (!original && !translation) original = embeddedEnglishPrompts[item.prompt] || "";
  const containsChinese = /[\u3400-\u9fff]/.test(original) || Boolean(translation);
  const blocks = [];
  if (original) blocks.push(`<section class="prompt-block"><h3>${containsChinese ? "Original prompt" : "Prompt"}</h3><pre>${escapeHTML(original.trim())}</pre></section>`);
  if (translation) blocks.push(`<section class="prompt-block"><h3>English translation</h3><pre>${escapeHTML(translation)}</pre><p class="translation-note">Translated and lightly edited for clear English presentation.</p></section>`);
  if (!blocks.length) blocks.push(`<section class="prompt-block"><h3>Prompt</h3><pre>The prompt file is available at: ${escapeHTML(item.prompt)}\n\nServe this page over HTTP to load the full text.</pre></section>`);
  dialogContent.innerHTML = blocks.join("");
}

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[character]);
}

const embeddedEnglishPrompts = {
  "reference_based_generation/multi_frames/case1/caption.txt": `Referring to Image-1: Generate a cinematic 3D animated scene in a dimly lit indoor environment, focusing on a close-up of a woman with split black and white hair; start with her eyes closed and a tense expression, then have her take a deep breath, open her eyes with a look of tenderness and surprise, and say, 'Ha... you're alive.' Referring to Image-2: Transition to a shot of a middle-aged man with gray hair and a beard, pale and wearing a disheveled white shirt, lying down weakly; show him waking up from a stupor with a confused expression, his right hand moving to touch his face and temple as if confirming reality, and have him whisper, 'Somehow I... I survived the fall?' Maintain a somber atmosphere with low-key lighting, detailed facial expressions, and a low-pitched, emotional background score.`,
  "reference_based_generation/multi_frames/case2/caption.txt": `Referring to Image-1: Generate a high-precision 3D animated scene starting with a close-up of a red-haired female warrior wearing a red jacket and bandages on her hands, looking down in pain at blood on her abdomen, then have her look up and say, "Right. Jinx. How could I forget?" Transition to a close-up of a blue-haired female enforcer with a solemn expression who says, "We're going to have to be more careful now. Silco will be watching." Include an oppressive ambient soundscape in the background. Referring to Image-2: Suddenly, introduce a massive vibration and metallic crashing sound accompanied by a flash of purple light, causing the blue-haired woman to look up in shock. Rapidly tilt the camera upward to capture the dynamic trembling of the overhead structure, maintaining a smooth camera movement throughout to build a sense of impending crisis.`,
  "reference_based_generation/multi_frames/case3/caption.txt": `This is a continuous one-shot take with no cuts; the camera moves fluidly throughout. Generate a minimalist flat-print animation using only solid high-contrast red, black, and white, with no gradients, shadows, or internal textures, presenting pure silhouette art against a consistent red background. From 0.0–2.5 s, referring to Image 1, begin on the lead singer holding a microphone. Let the white microphone outline extend seamlessly from the singer's mouth and transform into the leftmost rhythm guitarist's white guitar-headstock outline while the camera pulls back through the shared continuous boundary. From 2.5–5.0 s, referring to Image 2, pull back and pan right across the full band—rhythm guitarist, bassist, drummer, and lead guitarist—showing each performance action as clean silhouettes.`,
  "reference_based_generation/one_shot/case1/caption.txt": `This is a continuous one-shot take with no cuts. Generate a hyper-detailed cyberpunk wuxia action cinematic in a dark, neon-lit, post-apocalyptic ruined Hong Kong. A towering red-glowing mech kaiju fires twin eye lasers toward a lone robed samurai with a glowing red katana. The samurai slides across rain-slick pavement to dodge, sprints toward the mech, leaps high, and slices it down the center. Green energy escapes from the split edges as the two halves collapse in slow motion. The samurai lands victorious beneath a cloudy moon while neon skyscrapers flicker through the mist. Use a fast pullback, rear follow, and slow crane-down in one fluid 10-second shot.`,
  "reference_based_generation/one_shot/case2/caption.txt": `This is a continuous one-shot take with no cuts. Referring to Image 1, generate a UE5 3D game cutscene with a cold palette, high-contrast realistic lighting, stable character designs, and no extra people. Capture all five tightly grouped characters running across a vast open snowy mountain valley in a long eye-level shot, slowly following from behind and then pulling back.`,
  "reference_based_generation/one_shot/case3/caption.txt": `This is a continuous one-shot take with no cuts. Generate a gritty Unreal Engine tactical-combat cinematic on a war-ruined ancient Chinese cobblestone street, with weathered textures and dramatic effects. In a high-angle long shot, slowly push in as a red-glowing enemy charges toward the green-indicated player character holding a spear. Keep the camera locked to the combat area while the player launches a charged spear skill with faint blue electricity, dodges backward, then lunges at high speed and defeats the enemy.`,
  "reference_based_generation/one_shot/case4/caption.txt": `Referring to Image 1, generate a fixed medium shot of a sad female candy person with a cherry on her head and a red dress, seated on a light-blue stool indoors. Referring to Image 2, show Starchy—the brown potato-shaped male candy person with a green cap and mustache—enter from the right, touch her shoulder, and whisper, "Don't worry honey." She looks up coldly and says, "Don't touch me now please. I need time to think." He steps back, points at her, then raises both arms comically and declares, "Look baby. Starchy knows all the fresh widows in town. And Starchy chose you! Starchy loves you!" Use clear flat lighting and perfectly synchronized audio.`
};

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

function openImage(source, label) {
  imageDialogImage.src = source;
  imageDialogImage.alt = label;
  imageDialogCaption.textContent = label;
  imageDialog.showModal();
}

imageDialog.querySelector(".image-dialog-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });
imageDialog.addEventListener("close", () => {
  imageDialogImage.removeAttribute("src");
  imageDialogImage.alt = "";
});

const heroVideo = document.querySelector(".hero-frame video");
const soundToggle = document.querySelector(".sound-toggle");
soundToggle.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  soundToggle.querySelector("span").textContent = heroVideo.muted ? "Sound on" : "Sound off";
  soundToggle.ariaLabel = heroVideo.muted ? "Turn sound on" : "Turn sound off";
});

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > window.innerHeight * .72);
window.addEventListener("scroll", updateHeader, {passive: true});
updateHeader();
renderGallery();
