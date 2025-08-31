"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaChevronDown, FaSearch, FaSortAmountDown } from "react-icons/fa";
import BlogCard from "@/components/BlogCard.jsx";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import bloghero from "@/assets/logo.png";
import { BackgroundLines } from "@/components/ui/background-lines";

const BRAND = {
  primary: "#86D8FF",
  primaryDark: "#65C8F5",
  primarySoft: "rgba(134, 216, 255, 0.12)",
};

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [filterType, setFilterType] = useState("Most Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs`, { cache: "no-store" });
        const data = await res.json();
        if (data && data.success) {
          const formatted = data.blogs.map((blog) => ({
            id: blog._id,
            image: blog.image,
            category: blog.category || "General",
            date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            readTime: blog.readTime || "5 mins read",
            title: blog.title,
            summary: blog.metaDescription,
            authorName: blog.author || "Unknown",
            authorImage: "/authors/default.jpg",
            timestamp: new Date(blog.createdAt).getTime(),
            views: blog.views || 0,
            slug: blog.urlSlug,
          }));
          setBlogs(formatted);
        }
      } catch (e) {
        console.error("❌ Failed to fetch blogs", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const set = new Set();
    blogs.forEach((b) => b.category && set.add(b.category));
    return ["All", ...Array.from(set).sort()];
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? [...blogs]
        : blogs.filter((p) => p.category === selectedCategory);

    if (submittedSearch.trim()) {
      const t = submittedSearch.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(t) ||
          (p.summary || "").toLowerCase().includes(t) ||
          (p.category || "").toLowerCase().includes(t)
      );
    }

    if (filterType === "Most Viewed") {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === "Newest") {
      filtered.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      filtered.sort((a, b) => a.timestamp - b.timestamp);
    }

    return filtered;
  }, [blogs, selectedCategory, sortBy, submittedSearch, filterType]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#86D8FF]/30 selection:text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 40%, rgba(134,216,255,.18), rgba(134,216,255,0) 70%)",
        }}
      />
      {/* <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => setSubmittedSearch(searchTerm)}
      /> */}

      <BackgroundLines className="flex items-center bg-black justify-center w-full flex-col px-4">
        <div className="relative z-10 text-center flex w-full justify-center max-w-4xl mx-auto items-center gap-8 p-6 md:p-12">
            <div>
              <p className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-white/60">
                Insights • Playbooks • Stories
              </p>
              <h1 className="mt-2 font-medium leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl">
                Strategies, Stories &{" "}
                <span
                  className="px-3 rounded-xl ml-1 bg-[#86D8FF] text-black"
                >
                  Solutions
                </span>{" "}
                of the Industry
              </h1>
             
              {/* <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSearch();
                }}
                className="mt-6 flex w-full max-w-xl mx-auto items-center gap-2 rounded-xl border border-white/10 bg-black/60 px-3 py-2 focus-within:ring-2 focus-within:ring-[#86D8FF]/40"
              >
                <FaSearch className="shrink-0 text-white/60" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles, tips & growth plays…"
                  className="w-full bg-transparent py-2 outline-none text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="ml-2 rounded-lg bg-[#86D8FF] px-4 py-2 text-sm font-semibold text-black hover:shadow-[0_8px_26px_rgba(134,216,255,0.35)] transition"
                >
                  Search
                </button>
              </form> */}

               
            </div>

            
          </div>
    </BackgroundLines>

      <Toolbar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterType={filterType}
        setFilterType={setFilterType}
        onSearch={() => setSubmittedSearch(searchTerm)}
      />

      <section className="max-w-7xl mt-4 mx-auto px-4 sm:px-0 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : filteredPosts.length > 0
            ? filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/blogs/${post.slug}`)}
                  className="cursor-pointer group"
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0D0F12]/90 backdrop-blur shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_60px_rgba(134,216,255,0.18)]">
                    {/* BlogCard renders inside; keep it neutral or ensure it respects parent bg */}
                    <BlogCard {...post} />
                  </div>
                </div>
              ))
            : (
              <EmptyState
                reset={() => {
                  setSearchTerm("");
                  setSubmittedSearch("");
                  setSelectedCategory("All");
                  setSortBy("Newest");
                  setFilterType("Most Recent");
                }}
              />
            )}
        </div>
      </section>
    </div>
  );
}

/* --------------------------------- HERO --------------------------------- */

function Hero({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 pt-16 md:pt-10 pb-10 md:pb-16">
     
      </div>
    </header>
  );
}

/* ------------------------------- TOOLBAR -------------------------------- */

function Toolbar({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  filterType,
  setFilterType,
  onSearch,
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {/* {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "border-transparent bg-[#86D8FF] text-black shadow-[0_6px_20px_rgba(134,216,255,0.35)]"
                    : "border-white/15 text-white/80 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })} */}
        </div>

        <div className="flex items-center gap-2">
          <Select
            label="Sort"
            value={sortBy}
            onChange={setSortBy}
            options={["Newest", "Oldest"]}
          />
          <Select
            label="Filter"
            value={filterType}
            onChange={setFilterType}
            options={["Most Recent", "Most Viewed"]}
          />
          <button
            onClick={onSearch}
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
          >
            <FaSortAmountDown />
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="text-white/60">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none rounded-lg border border-white/15 bg-black px-3 pr-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#86D8FF]/40"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-black text-white">
              {o}
            </option>
          ))}
        </select>
        <FaChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/60" />
      </div>
    </label>
  );
}

/* ------------------------------ Empty State ------------------------------ */

function EmptyState({ reset }) {
  return (
    <div className="col-span-full">
      <div className="rounded-2xl border border-dashed border-white/15 bg-[#0D0F12]/80 p-10 text-center backdrop-blur">
        <div
          className="mx-auto h-16 w-16 rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(134,216,255,.25), rgba(134,216,255,0))",
          }}
        />
        <h3 className="mt-4 text-lg font-semibold">No results found</h3>
        <p className="mt-1 text-white/70">
          Try clearing filters or searching with different keywords.
        </p>
        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-[#86D8FF] px-4 py-2 text-sm font-semibold text-black hover:shadow-[0_8px_26px_rgba(134,216,255,0.35)] transition"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
