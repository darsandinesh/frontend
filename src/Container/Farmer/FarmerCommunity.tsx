import React, { useState } from "react";
import {
  MessageSquare,
  ThumbsUp,
  Share2,
  MoreHorizontal,
  PenSquare,
  Search,
} from "lucide-react";
import AppButton from "../../components/AppButton";

interface Post {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  image?: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: "Robert Fields",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=60",
    time: "2 hours ago",
    content:
      "Has anyone tried the new organic pesticide for corn? I am seeing mixed results with the recent pest outbreak. Any recommendations?",
    likes: 24,
    comments: 8,
    tags: ["Pest Control", "Corn", "Organic"],
  },
  {
    id: "2",
    author: "Sarah Jenkins",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=60",
    time: "5 hours ago",
    content:
      "Sharing my improved irrigation setup! It saved me about 30% water this month. Check out the photos below.",
    likes: 156,
    comments: 42,
    tags: ["Irrigation", "Sustainability", "WaterSaving"],
    image:
      "https://images.stockcake.com/public/e/6/e/e6e4865c-08b7-4633-b428-f5658462485e_large/farmers-tending-crops-stockcake.jpg",
  },
  {
    id: "3",
    author: "David Wright",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=60",
    time: "1 day ago",
    content:
      "Looking for advice on soil ph balancing for Tomato crops. My soil test returned slightly acidic results (5.8).",
    likes: 12,
    comments: 15,
    tags: ["Soil Health", "Tomatoes"],
  },
];

const FarmerCommunity: React.FC = () => {
  const [posts] = useState<Post[]>(mockPosts);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Farmer Community</h1>
          <p className="text-gray-500">
            Connect, share, and learn from fellow farmers
          </p>
        </div>
        <AppButton type="primary" className="flex items-center gap-2">
          <PenSquare size={18} />
          Start Discussion
        </AppButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post Input */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=60"
              alt="Me"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1 bg-gray-50 rounded-full h-10 flex items-center px-4 text-gray-400 cursor-pointer hover:bg-gray-100 transition-colors">
              Share your thoughts or ask a question...
            </div>
          </div>

          {/* Posts Feed */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-4 flex items-start gap-3">
                <img
                  src={
                    post.author === "Sarah Jenkins"
                      ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=60"
                      : post.avatar
                  }
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <p className="mt-3 text-gray-800 leading-relaxed">
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="mt-3 rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={post.image}
                        alt="Post attachment"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/30 flex justify-between items-center text-gray-500 text-sm font-medium">
                <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                  <ThumbsUp size={18} />
                  {post.likes} Likes
                </button>
                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <MessageSquare size={18} />
                  {post.comments} Comments
                </button>
                <button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4">Trending Topics</h2>
            <div className="space-y-3">
              {[
                "#OrganicFarming",
                "#PestControl",
                "#SustainableAg",
                "#MarketPrices",
                "#CornYield",
              ].map((topic, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center group cursor-pointer"
                >
                  <span className="text-gray-600 group-hover:text-green-600 transition-colors font-medium">
                    {topic}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {100 - i * 12} posts
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerCommunity;
