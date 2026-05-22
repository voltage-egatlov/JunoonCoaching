import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import Button from "../../components/Button";

// Pexels CDN helper - all images free under the Pexels License (no attribution required).
const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750`;

/* ─────────────────────────────────────────────
   Blog post data - full content for all 8 posts
───────────────────────────────────────────── */
type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  description: string;
  img: string;
  body: Section[];
}

const posts: Post[] = [
  {
    slug: "how-to-manage-summer-travel-and-still-maintain-your-fitness-progress",
    title: "How to Manage Summer Travel and Still Maintain Your Fitness Progress",
    date: "July 16, 2025",
    tag: "Lifestyle",
    img: PEXELS(7368218),
    description:
      "Summer travel is one of the biggest curveballs for anyone trying to stay on track with their fitness goals. Here's how to stay consistent without sacrificing the experience.",
    body: [
      {
        type: "p",
        text: "Summer travel is one of the biggest curveballs for anyone trying to stay on track with their fitness goals. Whether you're flying to India for a wedding, taking a family trip, or just trying to unwind, the lack of routine, abundance of food, and unpredictable schedules can make it feel like you're falling off track.",
      },
      {
        type: "p",
        text: "The good news is you don't need to be perfect to stay consistent. You just need a plan that gives you a little structure and flexibility. Over the years, we have coached numerous clients through vacations and travel, and the ones who do best are those who aim to maintain, rather than maximize, during these weeks.",
      },
      { type: "h2", text: "Strategies" },
      {
        type: "p",
        text: "One of the first things I remind clients is that it's not always easy to find healthy food options when you're traveling, and that's okay. There are a couple of ways to structure your day so you're still aligned with your goals, even if options are limited. For those in a bulking phase, things are a bit easier - eat at least three meals a day with solid portions, don't skip meals, and get enough protein where you can.",
      },
      {
        type: "p",
        text: "If you're in a fat loss or recomp phase, you'll want to be more strategic. What tends to work well is this: start your day with low carb, high protein and fat meals - something like eggs and avocado, or paneer with veggies. This keeps your hunger under control and prevents overeating. Do the same for lunch. Then at dinner, go ahead and include carbs and enjoy your free meal of the day. This approach lets you enjoy fun foods or eating out in the evenings without letting things spiral out of control.",
      },
      {
        type: "p",
        text: "Another thing that makes a big difference is keeping your movement high. Aim for at least 8,000 to 10,000 steps a day. You don't have to think of it as cardio - it's just a way to keep your energy up and your metabolism active. If you have access to a gym, even a quick 30-minute lift a few times during your trip can go a long way toward maintaining your strength.",
      },
      { type: "h2", text: "Snacking" },
      {
        type: "p",
        text: "This is where most people fall off. It's not the main meals that get them - it's the constant grazing. Things like nuts, chips, desi snacks, or random sweets lying around can quietly blow your calorie intake out of the water. Try to stay away from these snacks. If you're genuinely hungry between meals, choose high satiety foods like Greek yogurt, fruit, or a scoop of protein.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "Avoid the all-or-nothing mentality. One off-plan meal doesn't ruin anything. But throwing in the towel for the entire week because of that one meal is where people go wrong. You don't have to crush every workout or log every macro to maintain your progress - you just have to do something. Even hitting your step goal, eating enough protein, and making decent choices is more than enough to keep your results intact.",
      },
      {
        type: "p",
        text: "And finally, don't forget to actually enjoy the experience. Travel is about creating memories, connecting with people, and living life. Do your best. Be mindful. You've worked hard to build these habits - travel doesn't have to break them.",
      },
    ],
  },
  {
    slug: "why-are-indians-lazier-when-it-comes-to-fitness-the-perspective-of-an-indian-fitness-coach",
    title: "Why Are Indians Lazier When it Comes to Fitness?",
    date: "June 10, 2025",
    tag: "Culture",
    img: PEXELS(6455966),
    description:
      "After coaching hundreds of South Asians, a clear trend has emerged. We're incredibly smart and driven in academics - but when it comes to our bodies, we lag behind. Here's why.",
    body: [
      {
        type: "p",
        text: "Let me start with this: I'm Indian. I grew up in an Indian household. I love our food, our culture, and our values. But after coaching hundreds of South Asians across the world, I've noticed a trend, and it needs to stop.",
      },
      {
        type: "p",
        text: "We're lazy. Not lazy in the sense of being unproductive - we're incredibly smart, driven in academics, and often work the most complex jobs. But when it comes to taking care of our bodies, we lag behind. Badly.",
      },
      { type: "h2", text: "1. We Were Never Taught That Our Health Matters" },
      {
        type: "p",
        text: "Our parents drilled school, grades, and success into our heads, but exercise? Nope. That was for people who had 'too much time.' Many of us grew up thinking going to the gym would 'stunt your growth' and protein powder was 'steroids.' So we study, work, get stressed, and let our bodies decay.",
      },
      { type: "h2", text: "2. Getting Too Comfortable" },
      {
        type: "p",
        text: "Most Indian households are centered around comfort. We eat the heaviest foods, sit a lot, and rest way more than we need to. Everything revolves around food - celebrations, stress relief, boredom, hospitality. The basics of movement and health just don't exist in our culture yet. We'd rather debate on what to eat for dinner tomorrow than dedicate time to exercise.",
      },
      { type: "h2", text: "3. We Make Too Many Excuses" },
      {
        type: "ul",
        items: [
          '"I have no time."',
          '"Gym is not for me."',
          '"It\'s in my genes."',
          '"I\'ll start after the wedding/holiday/trip."',
        ],
      },
      {
        type: "p",
        text: "Sound familiar? We are great at justifying inaction. We internalize everything, but rarely take action. We know what we should be doing, but we never do it. Yet we glorify struggle and sacrifice in all areas - except the gym.",
      },
      { type: "h2", text: "4. We Only Take Action When It's Too Late" },
      {
        type: "p",
        text: "It's incredible how many of my clients come to me after experiencing health issues - diabetes scares, high LDL cholesterol, or letting their weight get to a point where it's hurting their day-to-day lives. Indians are reactive, not proactive about health. But the truth is: our bodies will fall apart if we ignore this long enough.",
      },
      { type: "h2", text: "So What's the Fix?" },
      {
        type: "ul",
        items: [
          "Wake up. You can change. You just have to stop lying to yourself.",
          "Start small. A walk, 1 day in the gym, better portions.",
          "Invest in your health now, or pay for it later.",
          "Stop hiding behind culture. Indian food can be healthy. Your schedule isn't that unique. You just haven't made fitness a priority.",
        ],
      },
      {
        type: "p",
        text: "As an Indian fitness coach, I've made it my goal to change this. We can be fit, educated, and healthy without giving up our culture. But we have to stop being soft. Laziness isn't our identity. It's just a bad habit - and it's time to break it.",
      },
    ],
  },
  {
    slug: "why-doing-only-cardio-is-ruining-your-fitness-progress",
    title: "Why Doing Only Cardio is Ruining Your Fitness Progress",
    date: "April 2, 2025",
    tag: "Training",
    img: PEXELS(3888343),
    description:
      "Cardio burns calories while you're doing it - but once you stop, your metabolism returns to normal. For many Indians, relying on cardio alone may be making results worse.",
    body: [
      { type: "h2", text: "The Obsession with Cardio" },
      {
        type: "p",
        text: "Here's the truth: cardio alone won't get rid of your belly fat. In fact, for many Indians, relying on cardio might be making your results worse. Most people are stuck in a cycle: eat a high-carb, low-protein Indian diet, try to 'out-exercise' it by doing tons of cardio, lose some weight but also lose muscle, feel tired, and gain it all back.",
      },
      { type: "h2", text: "Why Cardio Doesn't Work the Way You Think" },
      {
        type: "p",
        text: "Cardio burns calories while you're doing it - but once you stop, your metabolism goes back to normal. And if your diet doesn't have enough protein, you'll likely burn muscle, not just fat. Less muscle means a slower metabolism and easier fat gain in the future.",
      },
      {
        type: "p",
        text: "Additionally, cardio increases hunger for many people. So even if you burn 300 calories on a run, you might eat 500 more later without realizing it. Most Indian diets are already carb-heavy - pairing that with long cardio sessions and no strength training leads to a skinny-fat look, lower metabolism, constant cravings, and low energy.",
      },
      { type: "h2", text: "What Actually Works to Lose Fat (and Keep It Off)" },
      {
        type: "ul",
        items: [
          "Lift weights 3–4 times per week. Resistance training builds muscle and keeps your metabolism high.",
          "Focus on daily steps. 7,000–10,000 steps per day improves fat loss, digestion, and energy - and is easier to recover from than cardio.",
          "Eat more protein. Every Indian meal should have at least one solid protein source: paneer, chicken, eggs, tofu, Greek yogurt, or protein powder.",
          "Fix your diet first. You can't out-train a high-calorie, low-protein diet.",
          "Do some cardio. Yes, cardio is necessary for health, but it shouldn't be your only tool.",
        ],
      },
      { type: "h2", text: "Why This Matters for South Asians" },
      {
        type: "p",
        text: "Indians living in Western countries are already at a disadvantage - sedentary jobs, poor fitness education, and high-carb meals. That's why coaching Indian professionals on how to lose belly fat, build lean muscle, and get stronger without cutting out Indian food is so important.",
      },
      {
        type: "p",
        text: "Ready to stop spinning your wheels? Let's build you a smarter plan - one that fits your lifestyle, incorporates your culture, and finally gets you results that last.",
      },
    ],
  },
  {
    slug: "the-protein-dilemma",
    title: "The Protein Dilemma: Why Indians in Western Countries Need More Protein",
    date: "March 19, 2025",
    tag: "Nutrition",
    img: PEXELS(6294263),
    description:
      "Indians living in Western countries face unique dietary challenges around protein. Traditional diets often severely lack sufficient protein - contributing to muscle loss, low energy, and weight gain.",
    body: [
      { type: "h2", text: "Why Is Protein So Important?" },
      {
        type: "p",
        text: "Indians living in the U.S. face unique dietary challenges, especially when it comes to protein. Despite the rich culinary heritage of Indian cuisine, traditional diets often severely lack sufficient protein, contributing to muscle loss, low energy, and weight gain. Protein isn't just for bodybuilders - it's essential for everyone. It supports muscle growth, boosts metabolism, maintains bone density, and helps regulate hormones.",
      },
      {
        type: "p",
        text: "Yet many Indians overlook protein due to misconceptions, cultural habits, and dietary preferences. Traditional Indian meals emphasize carbohydrates and fats - rice, rotis, curries with minimal protein, and snacks or sweets that dominate dietary intake. Vegetarian diets, common among Indians, often lack adequate protein sources when not balanced correctly.",
      },
      { type: "h2", text: "Common Misconceptions About Protein" },
      {
        type: "ol",
        items: [
          "Protein is only for bodybuilders: Many Indians associate protein intake solely with athletes, not realizing its universal necessity for health.",
          "Basic vegetarian foods have enough protein: While legumes, lentils, and paneer provide some protein, these sources often aren't consumed in sufficient quantities.",
          "Protein causes weight gain: Some mistakenly believe protein causes weight gain, overlooking its role in metabolism and muscle maintenance.",
        ],
      },
      { type: "h2", text: "Health Risks of Low Protein Intake" },
      {
        type: "ol",
        items: [
          "Muscle loss: Low protein consumption can lead to muscle wasting, reducing strength and slowing metabolism.",
          "Increased hunger: A diet low in protein often leaves people feeling unsatisfied, prompting overeating.",
          "Weak immune system: Protein is critical for immune function - insufficient intake compromises your ability to fight infections.",
        ],
      },
      { type: "h2", text: "How to Boost Your Protein Intake" },
      {
        type: "ol",
        items: [
          "Include protein in every meal: Aim for chicken, eggs, paneer, tofu, or Greek yogurt in every meal.",
          "Try protein supplements: Whey or plant-based protein powders can help bridge the gap.",
          "Educate yourself and family: Understanding portion sizes and protein content in traditional Indian foods can significantly improve dietary choices.",
        ],
      },
      { type: "h2", text: "A Balanced Approach" },
      {
        type: "p",
        text: "Balancing traditional Indian foods with adequate protein intake is entirely achievable. Small adjustments to meals, informed food choices, and consistent effort in protein tracking can dramatically improve your overall health, fitness, and energy levels - without compromising on your favorite Indian dishes.",
      },
    ],
  },
  {
    slug: "building-habits-science-behind-fitness-progress",
    title: "Building Habits: The Science Behind Fitness Progress",
    date: "March 10, 2025",
    tag: "Mindset",
    img: PEXELS(866027),
    description:
      "Research from University College London suggests it takes 66 days on average to form a new habit. Understanding the science behind habit formation can transform your fitness journey.",
    body: [
      { type: "h2", text: "The Science Behind Habit Formation" },
      {
        type: "p",
        text: "Research from University College London suggests that, on average, it takes 66 days to form a new habit. However, the time required varies depending on the complexity of the habit. Simple habits can take around 21 days to establish, while more complex habits - such as following a structured fitness plan - typically take closer to 90 days.",
      },
      { type: "h2", text: "Key Factors in Habit Formation" },
      { type: "h3", text: "1. Environment" },
      {
        type: "p",
        text: "The environment plays a critical role in habit formation. A strong support system can make the difference between success and failure, particularly when motivation is low. There will inevitably be moments of doubt, and having individuals who encourage consistency can be invaluable. Surround yourself with people who support your goals - whether friends, family, or a professional coach.",
      },
      { type: "h3", text: "2. Repetition" },
      {
        type: "p",
        text: "Repetition strengthens neural pathways, making behaviors more automatic over time. Consistency is the foundation of habit formation. Performing an action regularly, even when it's inconvenient, reinforces the behavior and integrates it into daily life. Prioritize consistency over intensity - even small efforts, repeated over time, contribute to long-term success.",
      },
      { type: "h3", text: "3. Intrinsic Motivation" },
      {
        type: "p",
        text: "Habits are more likely to be maintained when they're tied to a deeper sense of purpose. While external rewards like weight loss or muscle gain can be motivating, intrinsic motivation - feeling more energized, stronger, or healthier - plays a more significant role in long-term adherence.",
      },
      { type: "h2", text: "Strategies for Effective Habit Building" },
      { type: "h3", text: "Anchor New Habits to Existing Routines" },
      {
        type: "p",
        text: "Attaching a new habit to an already established routine - known as habit stacking - improves adherence. For example: \"After I finish my morning coffee, I will go for a 30-minute walk.\"",
      },
      { type: "h3", text: "Start Small and Gradually Increase" },
      {
        type: "p",
        text: "Attempting to overhaul an entire routine at once is often unsustainable. Instead, starting with small, manageable steps leads to long-term behavioral change. Instead of committing to a five-day workout plan immediately, begin with two days per week and increase as consistency improves.",
      },
      { type: "h3", text: "Implement Incentives" },
      {
        type: "p",
        text: "Providing small rewards can reinforce positive behaviors and maintain motivation, especially in the early stages of habit formation.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Building a habit is a process that requires patience, consistency, and a structured approach. Whether it takes 30 days or 90, the key to long-term success is ensuring that the habit is both sustainable and aligned with your goals. Habits are not built during moments of ease, but in the instances where consistency is maintained despite challenges.",
      },
    ],
  },
  {
    slug: "high-protein-indian-foods",
    title: "High Protein Indian Foods",
    date: "February 26, 2025",
    tag: "Nutrition",
    img: PEXELS(4198930),
    description:
      "The Indian diet is full of rich flavours and tradition, but it lacks one crucial element for fitness - protein. Here are the best high-protein Indian foods to help you build muscle while enjoying your favourite dishes.",
    body: [
      {
        type: "p",
        text: "The Indian diet is full of rich flavors, tradition, and diversity, but it lacks one crucial element for fitness and muscle building: protein. Due to this, many Indians tend to struggle to meet their daily protein intake, which is essential for muscle growth, fat loss, and overall health.",
      },
      { type: "h2", text: "Why Indians Need More Protein" },
      {
        type: "p",
        text: "The typical Indian diet leans towards carb-heavy staples - rice, roti, and dal - overlooking protein-rich options. This imbalance makes it harder for Indians, especially vegetarians, to meet their protein requirements. Many of us miss the concept of 'true protein' sources, leaning instead towards 'carb proteins' and 'fat proteins,' which are fine but won't get us all the protein we need.",
      },
      { type: "h2", text: "Best High-Protein Foods to Add to Your Indian Diet" },
      { type: "h3", text: "1. Whey Protein" },
      {
        type: "p",
        text: "A fast-digesting, high-quality protein source with essential amino acids. Especially helpful for those who struggle to get enough protein from natural meals alone. Protein content: 20–25g per 30g scoop. Best ways to eat: Mix in shakes, blend with Greek yogurt, or add to oats.",
      },
      { type: "h3", text: "2. Greek Yogurt" },
      {
        type: "p",
        text: "Probiotics found in Greek yogurt support intestinal health. Choose low-fat varieties for maximum benefit. Protein content: 10g per 100g. Best ways to eat: Mix with fruit, add to smoothies, or use as a base for raita.",
      },
      { type: "h3", text: "3. Chicken and Fish" },
      {
        type: "p",
        text: "Lean meats offer vital nutrients including omega-3 fatty acids (fish). Protein content: 25–30g per 100g. Best ways to eat: Tandoori chicken, grilled fish, chicken curry with minimal oil.",
      },
      { type: "h3", text: "4. Soya Chunks and Tofu" },
      {
        type: "p",
        text: "Great plant-based alternatives that also provide iron and calcium. Protein content: 50g per 100g (dry soya chunks), 8–10g per 100g (tofu). Best ways to eat: Stir-fried tofu, soya pulao, soya curry.",
      },
      { type: "h3", text: "5. Lentils (Dal/Chana)" },
      {
        type: "p",
        text: "While they do have carbs, pairing lentils with vegetables and healthy fats creates a balanced, high-protein meal. Protein content: 15–20g per cooked cup. Best ways to eat: Dal with vegetables, sprouted moong salad, chana masala.",
      },
      { type: "h3", text: "6. Eggs" },
      {
        type: "p",
        text: "A complete protein source with essential amino acids. Protein content: 6–7g per egg. Best ways to eat: Scrambled eggs, egg bhurji, boiled eggs with salt and pepper.",
      },
      { type: "h3", text: "7. Paneer" },
      {
        type: "p",
        text: "One of the best vegetarian protein sources, packed with casein protein that digests slowly and aids muscle recovery. Protein content: 18–20g per 100g. Best ways to eat: Grilled paneer tikka, paneer bhurji, paneer roti.",
      },
      { type: "h2", text: "How to Increase Protein Intake in an Indian Diet" },
      {
        type: "ul",
        items: [
          "Add a protein source to every meal (eggs with breakfast, paneer at lunch, lentils at dinner).",
          "Use Greek yogurt instead of regular curd for higher protein.",
          "Include protein shakes or supplements if needed.",
          "Choose whole grains like quinoa and brown rice over refined carbs.",
          "Snack on high-protein foods like nuts, roasted chana, or boiled eggs.",
        ],
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "It is not necessary to give up your culture or customs in order to eat high-protein Indian food. You can still enjoy dal, roti, and sabzi while meeting your protein goals with a few minor adjustments. Making protein a priority will enhance your metabolism and general health in addition to aiding in muscle growth.",
      },
    ],
  },
  {
    slug: "how-indian-history-amp-culture-shaped-our-health-today",
    title: "How Indian History & Culture Shaped Our Health Today",
    date: "February 11, 2025",
    tag: "Culture",
    img: PEXELS(20408435),
    description:
      "To understand why so many Indians struggle with weight gain and insulin resistance, we need to look back at the history that forced dietary shifts and how inherited eating habits no longer align with modern lifestyles.",
    body: [
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "Indian food is a reflection of our history, struggles, and survival adjustments. For years, our ancestors didn't eat based on modern nutrition science - they ate based on what was available, lasted the longest, and kept them full during times of scarcity. From the famines under British rule to deeply rooted cultural traditions, the way we eat today has been shaped by the generations before us.",
      },
      {
        type: "p",
        text: "Today, obesity, diabetes, and metabolic disorders are on the rise, and much of this is because we are still eating as if we are in 'survival mode,' despite living in an era of abundance.",
      },
      { type: "h2", text: "How Famines Changed Our Diets" },
      {
        type: "p",
        text: "India has a long history of famines, but the most catastrophic occurred under British rule. The Bengal Famine of 1943 alone killed an estimated 2–3 million people - not because food wasn't available, but because colonial policies diverted supplies elsewhere. These experiences deeply impacted how Indian families view food today.",
      },
      {
        type: "p",
        text: "For many older generations, the idea of wasting food was looked down upon. This has led to mindless overeating becoming normalized, where feeling 'full' is mistaken for proper nourishment. The obsession with making food as filling as possible is why traditional Indian meals prioritize quantity over quality - the goal was simply to survive.",
      },
      { type: "h2", text: "Why Indian Diets Became So Carb-Heavy" },
      {
        type: "p",
        text: "If you look at a typical Indian meal, you'll notice one thing: it's overwhelmingly carb-dominant. In rural India, farmers and laborers relied on high-carb diets because their physically demanding work required quick energy. However, in today's world - where many people work desk jobs and engage in minimal physical activity - this same high-carb diet leads to fat gain, insulin resistance, and metabolic issues.",
      },
      {
        type: "p",
        text: "Religious and economic factors also contributed to India's low protein intake. Hinduism promotes vegetarianism, and while plant-based diets can be effective, many Indians rely on low-protein vegetarian foods like dal and rice. Dairy, which could have been a strong protein source, was often used in the form of ghee or sweets rather than purer protein sources like paneer or Greek yogurt.",
      },
      { type: "h2", text: "The Fear of Protein" },
      {
        type: "p",
        text: "Many Indians, especially older generations, believe myths like 'too much protein damages the kidneys.' These misconceptions come from a time when high-protein diets were rare. These outdated beliefs continue to hold people back from optimizing their diets - instead of prioritizing proteins like paneer, eggs, and chicken, many Indians still believe that carbs should form the majority of their plate.",
      },
      { type: "h2", text: "How to Adapt the Indian Diet for Modern Health Goals" },
      {
        type: "p",
        text: "While traditional Indian food is nutritionally diverse, it needs modern adjustments to align with today's fitness and health goals. The good news? You don't have to give up Indian foods - just tweak them for better balance.",
      },
      {
        type: "ul",
        items: [
          "Increase protein intake: Add paneer, Greek yogurt, tofu, chicken, or eggs to every meal.",
          "Control carbohydrate timing: Carbs aren't bad, but they should be timed around physical activity.",
          "Eat healthy fats in moderation: Ghee, coconut oil, nuts, and seeds in moderation. Cut out refined and seed oils.",
        ],
      },
      { type: "h2", text: "Breaking Generational Diet Cycles" },
      {
        type: "p",
        text: "The way we eat today is a product of history, survival, and cultural evolution. Our ancestors ate the way they did because they had to - not because it was the best approach for long-term health. But we now live in a time where we can choose better foods, time our meals smarter, and build stronger, healthier bodies without giving up our cultural roots.",
      },
    ],
  },
  {
    slug: "indian-diet-health-issues",
    title: "The Role of the Indian Diet in Health Issues Among Indians in the U.S.",
    date: "January 30, 2025",
    tag: "Health",
    img: PEXELS(3838696),
    description:
      "Indians have a rich history of food and traditions, yet these dietary habits often intersect with modern health challenges. With rising rates of obesity, diabetes, and heart disease, understanding this dual role is essential.",
    body: [
      {
        type: "p",
        text: "Indians have a rich history of food and traditions, yet these dietary habits often intersect with modern health challenges in the U.S. With rising rates of obesity, diabetes, and heart disease among Indians in the U.S., it's essential to understand the dual role the Indian diet plays in both supporting and hindering health.",
      },
      { type: "h2", text: "The Typical Indian Diet" },
      {
        type: "p",
        text: "Traditional Indian diets are rich in carbohydrates, with staples like white rice, parathas/roti, and sweets/snacks playing a central role. A high intake of carbohydrates can cause rapid spikes in blood glucose levels, increasing the risk of insulin resistance and type 2 diabetes. Studies have shown that diets high in ultra-processed foods are linked to weight gain and higher risks of chronic conditions such as heart disease and diabetes.",
      },
      { type: "h2", text: "Cultural Perceptions and Lifestyle Changes" },
      {
        type: "p",
        text: "Cultural practices, such as expressing hospitality through abundant feeding, can lead to overconsumption. Additionally, the shift from more active lifestyles in India to sedentary routines in the U.S. exacerbates health issues.",
      },
      { type: "h2", text: "Common Health Issues Associated with the Indian Diet" },
      {
        type: "ol",
        items: [
          "Obesity: The abundance of high-carb foods, excessive use of fats, and cultural attitudes toward food - combined with sedentary lifestyles - drive weight gain.",
          "Diabetes: Excessive carbohydrate consumption increases the risk of diabetes. Indian Americans have the highest rates of diabetes in the country.",
          "Heart disease: Poor dietary habits and overconsumption of unhealthy fats contribute to high cholesterol levels and cardiovascular disease.",
          "Inflammatory conditions: Regular consumption of sugar, refined flour, and processed oils exacerbates inflammation.",
          "Lack of protein: The typical Indian diet is extremely low in protein, which is linked to several of the health issues above.",
        ],
      },
      { type: "h2", text: "The Challenges for Indians Living in the U.S." },
      {
        type: "p",
        text: "With many Indians in the U.S. leading sedentary lifestyles due to office jobs or academic commitments, health concerns within the South Asian community are increasingly prevalent. A combination of high-carbohydrate diets, genetic predispositions, and a general lack of awareness about balanced nutrition continues to worsen these issues.",
      },
      { type: "h2", text: "A Holistic Approach to Health" },
      {
        type: "p",
        text: "Beyond diet, lifestyle changes such as regular exercise, meditation, and sleep management are critical for sustainable health. Indian diets, when adapted to modern needs, can support fitness goals without sacrificing cultural identity. By making small, consistent changes, you can enjoy the richness of Indian cuisine while staying aligned with your health objectives.",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  Lifestyle: "bg-sage/20 text-moss",
  Culture: "bg-blush/20 text-clay",
  Training: "bg-indigo/10 text-indigo",
  Nutrition: "bg-turmeric/20 text-soil",
  Mindset: "bg-linen text-driftwood",
  Health: "bg-clay/10 text-clay",
};

/* ─────────────────────────────────────────────
   Static params - pre-renders all blog routes
───────────────────────────────────────────── */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ─────────────────────────────────────────────
   Per-page metadata
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Arjav Chhabra"],
      images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    },
  };
}

/* ─────────────────────────────────────────────
   Render helpers
───────────────────────────────────────────── */
function renderSection(section: Section, i: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-light text-bark tracking-tight leading-tight mt-10 mb-4"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-light text-bark tracking-tight mt-7 mb-3"
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-soil text-base font-light leading-relaxed mb-5">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-5 flex flex-col gap-2">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-soil text-base font-light leading-relaxed">
              <span className="text-clay mt-1 shrink-0">-</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-5 flex flex-col gap-3">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-soil text-base font-light leading-relaxed">
              <span className="mono-label text-clay text-[10px] mt-1.5 shrink-0">{j + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
  }
}

/* ─────────────────────────────────────────────
   Page component
───────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-bark py-16 md:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="mono-label text-turmeric text-[10px] uppercase flex items-center gap-2 mb-8 hover:text-ivory transition-colors"
          >
            ← Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`mono-label text-[10px] uppercase px-2 py-1 ${tagColors[post.tag] ?? "bg-linen text-driftwood"}`}
            >
              {post.tag}
            </span>
            <span className="mono-label text-driftwood text-[10px]">{post.date}</span>
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-ivory leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-driftwood text-sm font-light leading-relaxed max-w-xl">
            {post.description}
          </p>
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-soil">
            <div>
              <p className="text-ivory text-sm font-medium">Arjav Chhabra</p>
              <p className="mono-label text-driftwood text-[10px] mt-0.5">Founder & Head Coach</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COVER IMAGE ── */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-linen">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* ── ARTICLE BODY ── */}
      <section className="bg-cream py-14 md:py-20">
        <Container className="max-w-3xl">
          <article className="prose-custom">
            {post.body.map((section, i) => renderSection(section, i))}
          </article>

          {/* CTA within article */}
          <div className="mt-12 pt-10 border-t border-linen">
            <p className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light text-bark tracking-tight mb-3">
              Ready to start your transformation?
            </p>
            <p className="text-soil text-sm font-light leading-relaxed mb-6 max-w-md">
              Apply for coaching today and get a personalised plan built around your lifestyle, culture, and goals.
            </p>
            <Button href="https://form.typeform.com/to/LrpoZN7n">Apply for Coaching →</Button>
          </div>
        </Container>
      </section>

      {/* ── PREV / NEXT ── */}
      {(prev || next) && (
        <section className="bg-ivory border-t border-linen py-10">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 border border-linen bg-parchment p-6 hover:border-clay transition-colors"
              >
                <span className="mono-label text-driftwood text-[9px] uppercase mb-1">← Previous</span>
                <span className="font-display text-bark text-lg font-light leading-[1.2] group-hover:text-clay transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col gap-1 border border-linen bg-parchment p-6 hover:border-clay transition-colors md:text-right"
              >
                <span className="mono-label text-driftwood text-[9px] uppercase mb-1">Next →</span>
                <span className="font-display text-bark text-lg font-light leading-[1.2] group-hover:text-clay transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </Container>
        </section>
      )}
    </>
  );
}
