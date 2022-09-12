import "./App.css";
import MagazineCover from "./components/magazineCover/MagazineCover";

const magazineData = {
  title: "CATS",
  description: "The best magazine about your feline friend",
  announcements: [
    {
      title: "THE BEST TOYS FOR YOUR CAT",
      description: "check out this month's top 10 cat toys",
    },
    {
      title: " JACKSON GALAXY TELLS US HIS SECRETS",
    },
    {
      title: "CAT HAIR CRAFTING",
      description:
        "learn how to craft a pair of flipflops for your cat with his own hair",
    },
    {
      title: "EXCLUSIVE INTERVIEW WITH GRUMPY CAT",
      description: "the story behind the meme",
      imageUrl: process.env.PUBLIC_URL + "/img/grumpy.jpg",
    },
  ],
  bottomTitle: "THE CAT KEEPER MANIFEST",
  bottomDescription: "what every cat keeper should know",
};

function App() {
  return (
    <div className="App">
      <MagazineCover magazineData={magazineData} />
    </div>
  );
}

export default App;
