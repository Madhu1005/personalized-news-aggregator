export default function Index() {
  const featuredArticle = {
    title: "Breaking News: Major Tech Merger Announced",
    description:
      "Two leading tech giants are merging to form the ultimate global powerhouse in the technology sector.",
    url: "#",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZRIEKtAaFpAV50f7JFZmtZQdPGRjEN2HUw&s/600x200", // Placeholder image
  };

  const otherArticles = [
    {
      title: "New Innovation in AI Technology",
      description:
        "AI breakthroughs continue to revolutionize industries worldwide.",
      url: "#",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6507ef021f82da452b935f67/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds/300x200", // Placeholder image
    },
    {
      title: "Stock Markets Surge Amid Economic Optimism",
      description:
        "Global stock markets rallied today following positive economic reports.",
      url: "#",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrnWUH6ZGS-vNHruzFNQCVJV-DVyYhx0emA&s/300x200", // Placeholder image
    },
    {
      title: "Climate Change: What You Can Do to Help",
      description:
        "Practical steps to reduce your carbon footprint and combat climate change.",
      url: "#",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTicBLQpEU8VAOMC7pT1R89ObbrS-Llg2kA&s/300x200", // Placeholder image
    },
    {
      title: "Cryptocurrency: Is It Still a Good Investment?",
      description:
        "Experts weigh in on the future of cryptocurrency in the global market.",
      url: "#",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI_xjFmM_d6iSTiPFFk6TXQp4tz1tgWwZCg&s/300x200", // Placeholder image
    },
    {
      title: "Sports Update: Championship Results",
      description: "All the latest results from the world championships.",
      url: "#",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbHa3H7GzGWPa0WH9E7q78Fd4n2PRINWOWg&s/300x200", // Placeholder image
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      {/* Featured Article Section */}
      {featuredArticle && (
        <section className="bg-white shadow-lg rounded-lg mb-10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <img
            src={featuredArticle.urlToImage}
            alt={featuredArticle.title}
            className="object-cover h-64 w-full lg:h-full"
          />
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-4">{featuredArticle.title}</h1>
            <p className="text-gray-700 mb-4">{featuredArticle.description}</p>
            <a
              href={featuredArticle.url}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Read more
            </a>
          </div>
        </section>
      )}

      {/* Other Articles Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </section>

      <Footer />
    </main>
  );
}

// Header component
const Header = () => (
  <header className="text-center py-8 bg-blue-600 text-white">
    <h1 className="text-4xl font-bold">Today's news!!!</h1>
  </header>
);

// Article Card component
interface ArticleProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
  };
}

const ArticleCard = ({ article }: ArticleProps) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={article.urlToImage}
      alt={article.title}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <a href={article.url} className="text-blue-600 hover:underline">
        Read more
      </a>
    </div>
  </div>
);

// Footer component
const Footer = () => (
  <footer className="text-center py-8 text-gray-500">
    <p>&copy; 2024 News Aggregator. All rights reserved.</p>
  </footer>
);
